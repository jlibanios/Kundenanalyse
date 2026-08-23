---
name: kundenpotenzial-belegschaftsversorgung
description: Bewertet, ob ein Unternehmen ein vielversprechender Vertriebs-Lead für eine Beratung zur Belegschaftsversorgung ist - mit getrennter Potenzial-Ampel je Produkt (bAV, bKV, Gruppenunfallversicherung). Recherchiert Umsatz-/Mitarbeiterentwicklung, Branche/Fachkräftesituation, Presse sowie Stellenanzeigen je Produkt, inkl. Altersstruktur, Tarifbindung/Betriebsrat und Schichtarbeit als Kontextfaktoren. Eine vorhandene bAV ist KEIN Ausschlusskriterium, sondern wird nach Reifegrad bewertet - anders als bKV/Unfallversicherung, wo Abwesenheit ein starkes positives Signal ist. Nutze diesen Skill IMMER bei Fragen zu Kundenpotenzial, Vertriebsreife, Lead-Qualifizierung oder Potenzialanalyse einer Firma im Kontext Belegschaftsversorgung, bAV, bKV, Mitarbeiter-Benefits oder Gruppenversicherungen - auch ohne das Wort "Skill"/"Analyse" (z.B. "Lohnt sich eine Ansprache bei Firma X?", "Ist Firma Y ein guter bAV-Kunde?", "Check das Potenzial von...", "Passt die Firma für unser Thema?").
compatibility: Benötigt Internetrecherche (WebSearch/WebFetch) für Firmendaten, Finanzkennzahlen und Stellenanzeigen. Für eine Word-Version des Berichts wird zusätzlich der docx-Skill genutzt, falls vorhanden.
---

# Kundenpotenzialanalyse: Belegschaftsversorgung

## Worum es geht

Ein Vertriebsmitarbeiter oder Berater will vor einer Kundenansprache schnell einschätzen,
ob sich der Aufwand einer Ansprache zu einem der drei Belegschaftsversorgungs-Produkte -
betriebliche Altersvorsorge (bAV), betriebliche Krankenversicherung (bKV) und
Gruppenunfallversicherung - für eine bestimmte Firma lohnt. Diese drei Produkte
unterscheiden sich stark in Verbreitung und Aussagekraft, deshalb bewertet dieser Skill
sie **getrennt** statt in einem Topf:

- **Wachsender Umsatz** bedeutet meist auch Budget, um in Benefits zu investieren.
- **Wachsende Mitarbeiterzahl** bedeutet Personalgewinnungsdruck - ein Unternehmen, das
  aktiv einstellt, konkurriert um Talente und ist offener für neue Anreize.
- **Eine Branche mit spürbarem Fachkräftemangel** (z.B. IT, Pflege, Handwerk,
  Ingenieurwesen, Bau, Logistik) erhöht die Dringlichkeit unabhängig von den reinen
  Zahlen - solche Firmen brauchen Benefits als Wettbewerbsvorteil im Recruiting.
- **Presseberichterstattung** liefert Kontext, den Kennzahlen allein nicht zeigen:
  Expansion, Auszeichnungen und Rekrutierungsoffensiven sprechen für eine Ansprache;
  Kurzarbeit, Stellenabbau oder Insolvenzsignale sprechen (zumindest fürs Timing) dagegen.
- **Eine bereits vorhandene bAV ist kein Negativmerkmal.** Seit 2002 hat jeder
  Arbeitnehmer einen gesetzlichen Anspruch auf Entgeltumwandlung - eine bAV in
  irgendeiner Form existiert deshalb fast überall. Entscheidend ist ihr **Reifegrad**:
  eine bAV, die nur das gesetzliche Minimum abdeckt, ist ein gutes Ausbau-Argument, keine
  Absage. Bei bKV und Gruppenunfallversicherung ist das anders - beide sind nicht
  gesetzlich vorgeschrieben und deutlich seltener vorhanden, hier ist "nicht gefunden"
  tatsächlich ein starkes positives Signal.
- **Altersstruktur, Tarifbindung/Betriebsrat und Schichtarbeit** schärfen die Einordnung
  zusätzlich: eine alte Belegschaft erhöht die bAV-Dringlichkeit, eine erkennbare
  Tarifbindung kann eine bereits über das Minimum hinausgehende bAV bedeuten (auch ohne
  Erwähnung in Stellenanzeigen), und Schichtarbeit/körperliche Belastung ist ein starkes
  Argument für die Gruppenunfallversicherung.

Details zur genauen Bewertungslogik stehen in `references/bewertungskriterien.md`.

## Workflow

Arbeite die folgenden Schritte der Reihe nach ab. Wenn der Nutzer nur einen Firmennamen
nennt, führe die Recherche eigenständig per Websuche durch - frag nicht nach, ob du
recherchieren sollst.

### 1. Firma identifizieren

Kläre knapp: vollständiger Firmenname, Rechtsform, Sitz/Standort, Branche, Website.
Das reduziert Verwechslungen (viele Firmen teilen sich einen Namen). Wenn eine
Handelsregisternummer oder ein Ort bereits bekannt ist, nutze das zur Eingrenzung.

### 2. Finanzkennzahlen & Mitarbeiterentwicklung recherchieren

Recherchiere Umsatz- und Mitarbeiterentwicklung der letzten 2-3 Geschäftsjahre.
Details zu Quellen, Suchstrategien und wichtigen Stolperfallen (z.B. Offenlegungspflichten
kleiner Gesellschaften) stehen in `references/datenquellen.md` - lies diese Datei, bevor
du mit der Recherche startest.

Wenn belastbare Zahlen fehlen (häufig bei kleinen GmbHs/KGs, die von der
Offenlegungspflicht befreit sind), nutze Proxy-Indikatoren (z.B. Mitarbeiterzahl-Trend
auf LinkedIn, Presseartikel über Expansion/Neubau/Stellenabbau, Bonitätshinweise) und
mach transparent, dass es sich um Näherungswerte handelt.

### 3. Branche, Fachkräftesituation & Belegschaftsstruktur einordnen

Ordne die Branche der Firma grob nach Fachkräfte-Dringlichkeit ein (hoch/mittel/gering)
und belege das nach Möglichkeit mit einer Quelle (z.B. Presseartikel oder
Branchenverband zum Fachkräftemangel in der Branche). Prüfe außerdem, soweit auffindbar,
die **Altersstruktur der Belegschaft** und **Tarifbindung/Betriebsrat** - beide schärfen
später speziell die bAV-Einordnung. Die Einordnungshilfen mit Beispielbranchen und den
Kontextfaktoren stehen in `references/bewertungskriterien.md`.

### 4. Stellenanzeigen prüfen - bAV, bKV und Unfallversicherung getrennt

Suche aktuelle offene Stellen der Firma (Indeed, StepStone, LinkedIn Jobs, eigene
Karriereseite) und prüfe für **jedes der drei Produkte einzeln**, was dort beworben wird -
nicht als ein gemeinsames "Benefits vorhanden ja/nein". Schau dir dafür mehrere aktuelle
Anzeigen an (idealerweise 3-5), nicht nur eine - einzelne Anzeigen sind manchmal
unvollständig gepflegt. Achte bei bAV besonders auf Qualitätssignale (Zuschuss über das
gesetzliche Minimum hinaus, genannter Anbieter) statt nur auf die reine Erwähnung. Achte
außerdem auf Hinweise zu **Schichtarbeit oder körperlich anspruchsvollen Tätigkeiten** -
das schärft später die Unfallversicherungs-Einordnung. Details und Suchbegriffe je
Faktor stehen in `references/datenquellen.md`.

### 5. Presse- und Öffentlichkeitsrecherche

Recherchiere aktiv die jüngste Berichterstattung (12-18 Monate) zur Firma - Wachstum,
Auszeichnungen, Rekrutierungsoffensiven, aber auch Kurzarbeit, Stellenabbau oder
Eigentümerwechsel. Das ist ein eigenständiger Bewertungsfaktor, kein reiner Lückenfüller
für fehlende Bilanzzahlen. Suchmuster stehen in `references/datenquellen.md`.

### 6. Bewerten

Bewerte zunächst den produktunabhängigen Basis-Score (Umsatz, Mitarbeiterzahl, Branche,
Presse), dann für jedes der drei Produkte einzeln den Reifegrad, und leite daraus drei
getrennte Ampeln ab (bAV, bKV, Gruppenunfallversicherung). Die genaue Bewertungslogik mit
Schwellenwerten und Beispielen steht in `references/bewertungskriterien.md` - lies diese
Datei vor der Einstufung, damit die Bewertung nachvollziehbar und konsistent ist.

### 7. Bericht erstellen

Erstelle den Bericht **immer** als Markdown-Text direkt in deiner Antwort, nach der
Struktur in `assets/analysebericht_template.md`. Erzeuge **zusätzlich** eine Word-Datei
(.docx) mit demselben Inhalt (nutze dafür den docx-Skill, falls verfügbar) und übergib sie
dem Nutzer als Datei - das ist der Normalfall, weil der Bericht oft für eine CRM-Ablage
oder Weiterleitung an Kollegen gedacht ist. Nur wenn der Nutzer ausdrücklich sagt, dass
ihm eine schnelle Einschätzung im Chat reicht, kannst du auf die Word-Datei verzichten.

**Jede .docx-Datei muss im Corporate Design von Libanios Wiese & Partner gestaltet sein**
- das Logo allein reicht nicht, alle Berichte sollen auf den ersten Blick als
zusammengehörige, professionell gebrandete Dokumentserie erkennbar sein. Nutze dafür das
mitgelieferte Skript `scripts/render_report_docx.js`, statt die Formatierung jedes Mal neu
zu erfinden:

```
node scripts/render_report_docx.js <report.md> <report.docx>
```

Das Skript liest eine Markdown-Datei mit der Berichtsstruktur aus
`assets/analysebericht_template.md` (Überschriften, Tabellen, Fließtext) und erzeugt daraus
automatisch eine .docx-Datei mit Logo in der Kopfzeile, den Markenfarben auf Überschriften
und Tabellenkopfzeilen sowie einer gebrandeten Fußzeile - schreib den Markdown-Bericht also
zuerst in eine Datei, bevor du das Skript aufrufst. Details zu den verwendeten Farbwerten
stehen in `references/corporate_design.md`, falls das Skript einmal nicht verfügbar ist
oder händisch nachgebessert werden muss.

Bei mehreren Firmen in einer Anfrage: erstelle für jede Firma einen eigenen Bericht
(eigene Markdown-Sektion, eigene .docx-Datei), keine zusammengefasste Tabelle - die
Firmen sind meist nicht direkt vergleichbar und die Datenlage unterscheidet sich.

## Wichtiger Grundsatz: keine erfundenen Zahlen

Viele kleine und mittlere Unternehmen (insbesondere Kleinstkapitalgesellschaften nach
§267a HGB) müssen keine Umsatzzahlen offenlegen. Wenn du für ein Kriterium keine
belastbare Quelle findest, **erfinde keine Zahl** und rate nicht "ungefähr". Schreibe
stattdessen offen, dass die Datenlage lückenhaft ist, nutze die verfügbaren
Proxy-Indikatoren, und liste die Lücke im Abschnitt "Offene Fragen/Datenlücken" des
Berichts auf. Eine ehrliche Einstufung mit Vorbehalt ist für den Vertrieb nützlicher als
eine falsche Sicherheit vortäuschende Zahl.

## Referenzdateien

- `references/datenquellen.md` - wo und wie man Umsatz-, Mitarbeiter- und Benefit-Daten
  für deutsche Unternehmen recherchiert, inkl. Suchstrategien und Fallstricken.
- `references/bewertungskriterien.md` - die genaue Bewertungslogik (Schwellenwerte,
  Ampel-Zuordnung, Umgang mit lückenhaften Daten).
- `references/corporate_design.md` - Logo, Markenfarben und Pflichtvorgaben für jede
  .docx-Ausgabe.
- `assets/analysebericht_template.md` - die Zielstruktur des Analyseberichts.
- `assets/logo.png` - das Firmenlogo von Libanios Wiese & Partner, für jede .docx-Datei
  zu verwenden.
- `scripts/render_report_docx.js` - wandelt den Markdown-Bericht automatisch in eine
  gebrandete .docx-Datei um (Logo, Farben, Fußzeile) - siehe Schritt 7.
