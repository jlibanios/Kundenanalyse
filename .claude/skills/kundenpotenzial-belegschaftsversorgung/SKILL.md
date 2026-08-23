---
name: kundenpotenzial-belegschaftsversorgung
description: Bewertet, ob ein Unternehmen ein vielversprechender Vertriebs-Lead für eine Beratung zur Belegschaftsversorgung ist (betriebliche Altersvorsorge/bAV, betriebliche Krankenversicherung/bKV, Gruppenunfallversicherung u.ä.). Recherchiert Umsatz- und Mitarbeiterentwicklung der letzten Jahre sowie aktuelle Stellenanzeigen auf bereits beworbene Benefits und erstellt daraus eine strukturierte Potenzialeinschätzung (Ampel hoch/mittel/niedrig) mit Begründung. Nutze diesen Skill IMMER, wenn nach dem Kundenpotenzial, der Vertriebsreife, einer Lead-Qualifizierung oder einer Potenzialanalyse für eine konkrete Firma im Kontext von Belegschaftsversorgung, betrieblicher Altersvorsorge, bAV, bKV, Mitarbeiter-Benefits oder Gruppenversicherungen gefragt wird - auch wenn nur ein Firmenname oder eine Website genannt wird und nicht wörtlich "Skill" oder "Analyse" gesagt wird (z.B. "Lohnt sich eine Ansprache bei Firma X?", "Ist Firma Y ein guter Kunde für bAV-Beratung?", "Check mal das Potenzial von...", "Passt die Firma für unser Thema?").
compatibility: Benötigt Internetrecherche (WebSearch/WebFetch) für Firmendaten, Finanzkennzahlen und Stellenanzeigen. Für eine Word-Version des Berichts wird zusätzlich der docx-Skill genutzt, falls vorhanden.
---

# Kundenpotenzialanalyse: Belegschaftsversorgung

## Worum es geht

Ein Vertriebsmitarbeiter oder Berater will vor einer Kundenansprache schnell einschätzen,
ob sich der Aufwand einer Ansprache zum Thema Belegschaftsversorgung (betriebliche
Altersvorsorge/bAV, betriebliche Krankenversicherung/bKV, Gruppenunfallversicherung,
sonstige Mitarbeiter-Benefits) für eine bestimmte Firma lohnt. Die Logik dahinter:

- **Wachsender Umsatz** bedeutet meist auch Budget, um in neue Benefits zu investieren.
- **Wachsende Mitarbeiterzahl** bedeutet Personalgewinnungsdruck - ein Unternehmen, das
  aktiv einstellt, konkurriert um Talente und ist offener für neue Anreize.
- **Noch keine (oder nur rudimentäre) Benefits** bedeutet: das Feld ist nicht schon von
  einem Wettbewerber besetzt. Wirbt eine Firma in ihren Stellenanzeigen bereits aktiv mit
  bAV, bKV o.ä., hat sie das Thema wahrscheinlich schon mit einem anderen Berater gelöst.

Ein guter Lead hat also idealerweise: Umsatz ↑, Mitarbeiterzahl ↑, Benefits ↓ (kaum vorhanden).

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

### 3. Stellenanzeigen auf Benefits prüfen

Suche aktuelle offene Stellen der Firma (Indeed, StepStone, LinkedIn Jobs, eigene
Karriereseite) und prüfe, ob dort bereits mit Benefits im Bereich Belegschaftsversorgung
geworben wird - insbesondere betriebliche Altersvorsorge/bAV, betriebliche
Krankenversicherung/bKV, Gruppenunfallversicherung, aber auch generische Formulierungen
wie "attraktive Zusatzleistungen". Schau dir dafür mehrere aktuelle Anzeigen an (idealerweise
3-5), nicht nur eine - einzelne Anzeigen sind manchmal unvollständig gepflegt.

### 4. Bewerten

Bewerte die drei Kriterien (Umsatzentwicklung, Mitarbeiterentwicklung, Benefits-Sättigung)
einzeln und leite daraus eine Gesamteinstufung ab. Die genaue Bewertungslogik mit
Schwellenwerten und Beispielen steht in `references/bewertungskriterien.md` - lies diese
Datei vor der Einstufung, damit die Bewertung nachvollziehbar und konsistent ist.

### 5. Bericht erstellen

Erstelle den Bericht **immer** als Markdown-Text direkt in deiner Antwort, nach der
Struktur in `assets/analysebericht_template.md`. Erzeuge **zusätzlich** eine Word-Datei
(.docx) mit demselben Inhalt (nutze dafür den docx-Skill, falls verfügbar) und übergib sie
dem Nutzer als Datei - das ist der Normalfall, weil der Bericht oft für eine CRM-Ablage
oder Weiterleitung an Kollegen gedacht ist. Nur wenn der Nutzer ausdrücklich sagt, dass
ihm eine schnelle Einschätzung im Chat reicht, kannst du auf die Word-Datei verzichten.

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
- `assets/analysebericht_template.md` - die Zielstruktur des Analyseberichts.
