# Corporate Design: Libanios Wiese & Partner

Jeder Analysebericht, der als Word-Datei (.docx) ausgegeben wird, muss einheitlich im
Corporate Design von Libanios Wiese & Partner gestaltet sein - das Logo allein reicht
nicht, Farben und Aufbau müssen dazu passen. Diese Datei legt die konkreten Werte fest,
damit jeder erzeugte Bericht gleich aussieht, unabhängig davon, welches Werkzeug für die
.docx-Erstellung verwendet wird.

## Logo

- Datei: `assets/logo.png` (im selben Verzeichnis wie diese Datei, transparenter
  Hintergrund, Seitenverhältnis ca. 1,53:1)
- Platzierung: in der Kopfzeile jeder Seite, linksbündig, Breite ca. 4-5 cm bei
  unverzerrtem Seitenverhältnis
- Genug Weißraum um das Logo lassen - nicht mit Überschriften oder Fließtext überlappen
  lassen

## Farben

Aus dem Logo abgeleitet, exakt per Farbwert-Analyse ermittelt (nicht schätzen, diese
Werte verwenden):

| Rolle | Hex | Verwendung |
|---|---|---|
| Primärfarbe (Dunkelblau) | `#00355C` | Überschriften, Titel, Tabellenkopfzeilen, Akzentlinien, die Ampel-Einstufung im Fazit |
| Sekundärfarbe (Blaugrau) | `#8AA2B4` | Untertitel, Fußzeile, dezente Trennlinien, sekundäre Tabellenelemente |

Weißer bzw. sehr helle Flächen bleiben der Hintergrund - die beiden Markenfarben sind
Akzentfarben, keine Flächenfarben für ganze Seiten.

## Pflichtvorgaben für jede .docx-Ausgabe

Jeder mit diesem Skill erzeugte Analysebericht als Word-Datei muss:

1. Das Logo (`assets/logo.png`) in der Kopfzeile enthalten.
2. Die Berichtsüberschrift (Titel, H1) in der Primärfarbe `#00355C` formatieren.
3. Tabellenkopfzeilen mit einem Farbakzent versehen (z.B. Primärfarbe als
   Hintergrundfarbe mit weißer Schrift, oder eine Trennlinie in der Sekundärfarbe).
4. Eine Fußzeile mit "Libanios Wiese & Partner" in der Sekundärfarbe `#8AA2B4` sowie
   Seitenzahl enthalten.
5. Eine einheitliche, professionelle Sans-Serif-Schriftart verwenden (Standard: Calibri
   oder Arial, passend zum schlichten Schriftbild des Logos) - keine Schriftmischungen.
6. Bei jedem neuen Bericht dieselbe Formatierung verwenden, damit mehrere Analysen im
   selben Look erscheinen und als zusammengehörige Dokumentserie erkennbar sind.

## Umsetzung

Nutze für die .docx-Erstellung den docx-Skill (oder ein gleichwertiges Werkzeug) und gib
ihm diese Vorgaben - Logo-Pfad, die beiden Hex-Werte, Kopf-/Fußzeilen-Anforderungen -
explizit mit, statt sie zu erfinden oder wegzulassen. Die Markdown-Version im Chat
braucht keine Farbformatierung (Chat-Markdown unterstützt das ohnehin nicht), aber die
Abschnittsreihenfolge und -struktur sollte trotzdem identisch zur .docx-Version sein.
