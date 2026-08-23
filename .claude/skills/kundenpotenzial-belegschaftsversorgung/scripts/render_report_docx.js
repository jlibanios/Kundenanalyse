#!/usr/bin/env node
'use strict';
/*
 * Converts a markdown analysis report (as produced by the
 * kundenpotenzial-belegschaftsversorgung skill) into a .docx file branded
 * with the Libanios Wiese & Partner corporate design: logo in the header,
 * brand colors on headings/tables, branded footer.
 *
 * Usage: node render_report_docx.js <input.md> <output.docx> [logo.png]
 *
 * Requires the npm package "docx" (usually preinstalled alongside the
 * docx skill; otherwise run `npm install docx` first).
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, Header, Footer, ImageRun, PageNumber,
  AlignmentType, VerticalAlign,
} = require('docx');

const PRIMARY = '00355C';
const SECONDARY = '8AA2B4';
const FIRM_NAME = 'Libanios Wiese & Partner';
const TABLE_WIDTH = 9026; // A4, 1" margins, in DXA

const [, , inputPath, outputPath, logoArg] = process.argv;
if (!inputPath || !outputPath) {
  console.error('Usage: node render_report_docx.js <input.md> <output.docx> [logo.png]');
  process.exit(1);
}
const logoPath = logoArg || path.resolve(__dirname, '../assets/logo.png');

// Splits inline **bold** / *italic* markup into plain descriptor objects
// (not TextRun instances - docx-js TextRun doesn't expose readable props,
// so callers turn these into TextRuns themselves, optionally merging in
// extra properties like size/color).
function parseInline(text) {
  const fragments = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIndex) fragments.push({ text: text.slice(lastIndex, m.index) });
    const token = m[0];
    if (token.startsWith('**')) {
      fragments.push({ text: token.slice(2, -2), bold: true });
    } else {
      fragments.push({ text: token.slice(1, -1), italics: true });
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) fragments.push({ text: text.slice(lastIndex) });
  if (fragments.length === 0) fragments.push({ text: '' });
  return fragments;
}

function toRuns(fragments, extra = {}) {
  return fragments.map((f) => new TextRun({ ...extra, text: f.text, bold: f.bold || extra.bold, italics: f.italics || extra.italics }));
}

function parseMarkdown(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  const isHeading = (l) => /^#{1,3}\s+/.test(l);
  const isHr = (l) => /^(-{3,}|_{3,})\s*$/.test(l.trim());
  const isTableRow = (l) => /^\|/.test(l.trim());
  const isQuote = (l) => /^>\s?/.test(l);
  const isListItem = (l) => /^[-*]\s+/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') { i++; continue; }

    if (isHeading(line)) {
      const level = line.match(/^#+/)[0].length;
      blocks.push({ type: 'heading', level, text: line.replace(/^#{1,3}\s+/, '').trim() });
      i++; continue;
    }
    if (isHr(line)) { blocks.push({ type: 'hr' }); i++; continue; }
    if (isQuote(line)) {
      const parts = [];
      while (i < lines.length && isQuote(lines[i])) { parts.push(lines[i].replace(/^>\s?/, '')); i++; }
      blocks.push({ type: 'quote', text: parts.join(' ') });
      continue;
    }
    if (isTableRow(line)) {
      const tableLines = [];
      while (i < lines.length && isTableRow(lines[i])) { tableLines.push(lines[i].trim()); i++; }
      const parseRow = (l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const header = parseRow(tableLines[0]);
      const rows = tableLines.slice(2).map(parseRow);
      blocks.push({ type: 'table', header, rows });
      continue;
    }
    if (isListItem(line)) {
      const items = [];
      while (i < lines.length && isListItem(lines[i])) { items.push(lines[i].replace(/^[-*]\s+/, '')); i++; }
      blocks.push({ type: 'list', items });
      continue;
    }
    const paraLines = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== '' && !isHeading(lines[i]) && !isTableRow(lines[i]) && !isQuote(lines[i]) && !isHr(lines[i]) && !isListItem(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: 'paragraph', text: paraLines.join(' ') });
  }
  return blocks;
}

function buildTable(header, rows) {
  const colCount = header.length;
  let colWidths;
  if (colCount === 2) {
    const first = Math.round(TABLE_WIDTH * 0.32);
    colWidths = [first, TABLE_WIDTH - first];
  } else {
    const w = Math.floor(TABLE_WIDTH / colCount);
    colWidths = new Array(colCount).fill(w);
    colWidths[colCount - 1] = TABLE_WIDTH - w * (colCount - 1);
  }

  // Key-value tables (e.g. "Firmendaten") often use a blank header row
  // (`| | |`) purely for GFM table syntax - it carries no label, so a
  // shaded navy header bar there would just be an empty colored strip.
  // Skip the header styling in that case and render every row the same.
  const headerIsBlank = header.every((h) => h.trim() === '');

  const rowToCells = (r, isHeader) => r.map((cell, idx) => new TableCell({
    width: { size: colWidths[idx] || Math.floor(TABLE_WIDTH / colCount), type: WidthType.DXA },
    shading: isHeader ? { type: ShadingType.CLEAR, fill: PRIMARY } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      children: isHeader
        ? [new TextRun({ text: cell, bold: true, color: 'FFFFFF', size: 20 })]
        : toRuns(parseInline(cell), { size: 20 }),
    })],
  }));

  const tableRows = [];
  if (!headerIsBlank) {
    tableRows.push(new TableRow({ tableHeader: true, children: rowToCells(header, true) }));
  }
  // A blank header row is dropped entirely - it's GFM syntax scaffolding,
  // not a real row of data.
  for (const r of rows) tableRows.push(new TableRow({ children: rowToCells(r, false) }));

  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: tableRows,
  });
}

function blocksToChildren(blocks) {
  const children = [];
  for (const block of blocks) {
    if (block.type === 'heading') {
      if (block.level === 1) {
        children.push(new Paragraph({
          children: [new TextRun({ text: block.text, bold: true, color: PRIMARY, size: 40 })],
          spacing: { after: 160 },
        }));
      } else if (block.level === 2) {
        children.push(new Paragraph({
          children: [new TextRun({ text: block.text, bold: true, color: PRIMARY, size: 26 })],
          spacing: { before: 280, after: 140 },
          border: { bottom: { color: SECONDARY, space: 4, style: BorderStyle.SINGLE, size: 6 } },
        }));
      } else {
        children.push(new Paragraph({
          children: [new TextRun({ text: block.text, bold: true, color: PRIMARY, size: 22 })],
          spacing: { before: 200, after: 100 },
        }));
      }
    } else if (block.type === 'paragraph') {
      children.push(new Paragraph({ children: toRuns(parseInline(block.text)), spacing: { after: 140 } }));
    } else if (block.type === 'quote') {
      children.push(new Paragraph({
        children: toRuns(parseInline(block.text), { italics: true }),
        indent: { left: 400 },
        shading: { type: ShadingType.CLEAR, fill: 'EEF2F5' },
        border: { left: { color: PRIMARY, space: 8, style: BorderStyle.SINGLE, size: 18 } },
        spacing: { after: 160 },
      }));
    } else if (block.type === 'hr') {
      children.push(new Paragraph({
        border: { bottom: { color: SECONDARY, space: 1, style: BorderStyle.SINGLE, size: 6 } },
        spacing: { after: 160 },
      }));
    } else if (block.type === 'list') {
      for (const item of block.items) {
        children.push(new Paragraph({ children: toRuns(parseInline(item)), bullet: { level: 0 }, spacing: { after: 60 } }));
      }
    } else if (block.type === 'table') {
      children.push(buildTable(block.header, block.rows));
      children.push(new Paragraph({ text: '', spacing: { after: 160 } }));
    }
  }
  return children;
}

function buildHeader() {
  const imageBuffer = fs.readFileSync(logoPath);
  const logoWidth = 150;
  const logoHeight = Math.round((logoWidth * 551) / 841);
  return new Header({
    children: [
      new Paragraph({
        children: [new ImageRun({ data: imageBuffer, transformation: { width: logoWidth, height: logoHeight }, type: 'png' })],
        spacing: { after: 120 },
        border: { bottom: { color: SECONDARY, space: 8, style: BorderStyle.SINGLE, size: 6 } },
      }),
    ],
  });
}

function buildFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        border: { top: { color: SECONDARY, space: 4, style: BorderStyle.SINGLE, size: 4 } },
        children: [
          new TextRun({ text: `${FIRM_NAME} · `, color: SECONDARY, size: 16 }),
          new TextRun({ children: ['Seite ', PageNumber.CURRENT, ' von ', PageNumber.TOTAL_PAGES], color: SECONDARY, size: 16 }),
        ],
      }),
    ],
  });
}

const md = fs.readFileSync(inputPath, 'utf8');
const blocks = parseMarkdown(md);

const doc = new Document({
  styles: { default: { document: { run: { font: 'Calibri', size: 21 } } } },
  sections: [
    {
      properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      headers: { default: buildHeader() },
      footers: { default: buildFooter() },
      children: blocksToChildren(blocks),
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log('Written:', outputPath);
});
