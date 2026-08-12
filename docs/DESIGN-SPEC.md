# Designspezifikation: Nocturnal Cinema

Verbindliche Spezifikation des Grunddesigns für `sophiaramahi.de`, Phase 1.
Website: `design/site/` — 14 Seiten, Einstieg `index.html`.

> **Stand: die cinematische Fassung ist die gewählte Richtung.**
> Gebaut wird nach `design/site/`. Die frühere editoriale Fassung liegt unter
> `design/_archiv/` und ist nicht mehr Teil des Stands.
>
> Farb- und Schrifttokens (Abschnitt 2 und 3) sowie Content-Regeln,
> Barrierefreiheit und Ausschlüsse (Abschnitt 7 bis 9) gelten unverändert.
> Raster, Bildformate und Aktionslogik der editorialen Fassung (Abschnitt 4
> bis 6) sind durch **Abschnitt 10** ersetzt.

Referenzimplementierung, in der Reihenfolge der Einbindung:

| Datei | Inhalt |
| --- | --- |
| `assets/site.css` | Einstiegspunkt, importiert die folgenden Dateien |
| `assets/tokens.css` | Farb-, Schrift- und Rastertokens, Basis, Typo-Utilities |
| `assets/base.css` | Wortmarke, Seitenverhaeltnisse, Medienrahmen, Showreel-Player |
| `assets/cinematic.css` | Hero, Bänder, Bildebenen, Licht, Header, Footer |
| `assets/cinematic-pages.css` | Mobile Navigation, Seitenkopf, Karten, Prosa, FAQ |

Diese Datei beschreibt den Sollzustand. Beim Aufbau des Astro-Projekts wird
`tokens.css` unverändert nach `src/styles/tokens.css` übernommen; der Rest
wandert in komponentennahe Stylesheets. Die Werte bleiben identisch.

---

## 1. Leitidee

Die Grundfläche ist ein Kinosaal, kein dunkles UI-Theme. Fast die gesamte
Seite besteht aus `#050506`. Farbe erscheint nur dort, wo im Bild tatsächlich
Licht ist: in Medienrahmen, an der Lichtkante, im Player-Fortschritt und im
Hover-Zustand der primären Aktion.

Drei Regeln tragen den gesamten Entwurf:

1. **Licht statt Verlauf.** Kein flächiger Hintergrundverlauf. Violett und
   Magenta sind Projektionslicht innerhalb eines Bildrahmens.
2. **Weite statt Farbe.** Hierarchie entsteht über den Weitenkontrast von
   Archivo (Display, 104–118 %) gegen Instrument Sans (Fließtext), nicht über
   farbige Auszeichnung.
3. **Ein Flourish.** Die Lichtkante — ein 2 px schmaler Violett-Magenta-Streifen
   an genau einer Kante eines Medienrahmens — ist das einzige wiederkehrende
   dekorative Element.

---

## 2. Farbtokens

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--bg` | `#050506` | Grundfläche der gesamten Website |
| `--surface` | `#0D0D10` | Formularfelder, Player-Chrome, CTA-Band |
| `--surface-2` | `#14141A` | Hover-Flächen, Fokuszustand von Eingaben |
| `--frame` | `#08080B` | Grundton eines Medienrahmens |
| `--text` | `#F4F2F5` | Fließtext, Überschriften, primäre Buttonfläche |
| `--text-muted` | `#A7A3AD` | Sekundärtext, Meta, inaktive Navigation |
| `--line` | `rgba(244,242,245,.09)` | Sektionslinien, Rahmen |
| `--line-strong` | `rgba(244,242,245,.20)` | Trennlinien mit Struktur, Ghost-Button |
| `--violet` | `#755CFF` | Licht, Lichtkante, Scrubber |
| `--magenta` | `#D947B4` | Licht, zweiter Pol der Lichtkante |
| `--amber` | `#EF9A62` | Hover der primären Aktion, warmes Projektorlicht |
| `--ice` | `#8FAAFF` | Fokusring, offene Content-Slots, Anmerkungen |

**Kontrast.** `--text` auf `--bg` erreicht etwa 18 : 1, `--text-muted` auf
`--bg` etwa 8 : 1 — beides deutlich über 4.5 : 1. Die Lichtfarben werden nie
als Textfarbe auf `--bg` unter 18 px eingesetzt; `--ice` (etwa 8 : 1) ist die
einzige Ausnahme und trägt nur Auszeichnungen ab Meta-Größe.

**Akzentdisziplin.** Pro Bildschirmausschnitt sind höchstens zwei sichtbare
Akzentflächen erlaubt. In der Praxis: eine Lichtkante plus ein aktiver
Navigations- oder Fortschrittsindikator.

---

## 3. Typografie

Zwei Familien, beide variabel:

- **Display:** `Archivo` — Wortmarke, alle Überschriften, Schrittnummern,
  Projekttitel. Fallback: `"Helvetica Neue", Arial, sans-serif`.
- **Fließtext:** `Instrument Sans` — Body, Navigation, Buttons, Formulare,
  Meta. Fallback: `ui-sans-serif, system-ui, "Segoe UI", Arial`.

Technische Metadaten laufen nicht in einer dritten Familie, sondern in
Instrument Sans mit Versalien, `0.1em` Laufweite und Tabellenziffern
(`font-variant-numeric: tabular-nums`).

| Rolle | Größe | Zeilenhöhe | Laufweite | Weite |
| --- | --- | --- | --- | --- |
| Display | `clamp(3.4rem, 8.2vw, 8.25rem)` | 1.0 | −0.03 em | 112 % |
| H1 | `clamp(2.5rem, 5.4vw, 4.75rem)` | 1.04 | −0.025 em | 108 % |
| H2 | `clamp(1.9rem, 3.4vw, 3.25rem)` | 1.08 | −0.02 em | 106 % |
| H3 | `clamp(1.3rem, 1.7vw, 1.6rem)` | 1.2 | −0.01 em | 104 % |
| H4 | `clamp(1.05rem, 1.15vw, 1.2rem)` | 1.3 | −0.005 em | normal |
| Body Large | `clamp(1.0625rem, 1.2vw, 1.3125rem)` | 1.5 | 0 | normal |
| Body | `clamp(1rem, 0.6vw + 0.85rem, 1.0625rem)` | 1.6 | 0 | normal |
| Caption | `0.8125rem` | 1.5 | 0 | normal |
| Meta (Versalien) | `0.75rem` | 1.4 | +0.1 em | normal |
| Navigation | `0.9375rem` | — | 0 | normal |
| Button | `0.9375rem`, Gewicht 600 | — | +0.02 em | normal |
| Formularfeld | `1rem` | — | 0 | normal |
| Wortmarke | `0.9375rem` Versalien | — | +0.16 em | 118 % |

Drei Gewichte: 400/450 lesen, 500/550 auszeichnen, 600 ankündigen. Kein 700
oder darüber.

**Zeilenlänge.** Fließtext maximal 66 Zeichen, Lead maximal 46 Zeichen.

**Umbrüche.** Die Hero-Headline bricht ab 1081 px fest nach „Atmosphäre“,
darunter über `text-wrap: balance`. Alle Überschriften nutzen `text-wrap:
balance`, damit in keiner Sprache ein einzelnes Wort auf der letzten Zeile
allein steht.

---

## 4. Raster und Rhythmus

- Maximalbreite `1440px`, Außenabstand `clamp(20px, 4.2vw, 72px)`.
- 12 Spalten, Spaltenabstand `clamp(16px, 1.8vw, 28px)`.
- Sektionsabstand `clamp(80px, 9vw, 168px)`, getrennt durch eine 1-px-Linie.
- Radius `2px` — nur an Buttons, Feldern und Bändern. Medienrahmen sind
  rechtwinklig.

Wiederkehrende Spaltenmuster:

| Baustein | Desktop |
| --- | --- |
| Hero-Headline / Beitext | 1–8 / 9–12 |
| Seitenkopf Innenseiten | 1–8 / 9–12 |
| Redaktioneller Block | Label 1–3 / Text 4–10 |
| Leistungswelten | Welt A 1–7, Welt B 7–12 mit Versatz nach unten |
| Über Sophia | Porträt 1–5 / Text 7–12 |
| Kontakt | Intro 1–5 / Formular 7–12 |

Breakpoints: `1080px` (Spalten fallen zusammen), `860px` (mobile Navigation,
vertikale Projektfolge, einspaltige Formulare), `560px` (Arbeitsweise
einspaltig).

---

## 5. Bildformate

| Format | Einsatz |
| --- | --- |
| 2.39 : 1 | Hero, Seitenkopf-Medium, Projekt-Hero — ab 860 px auf 16 : 10 |
| 16 : 9 | Showreel, Weltbild Videografie |
| 3 : 2 | Projektkarten, Leistungsbilder, Galerie |
| 4 : 5 | Porträt, schmale Frames im Filmstreifen |

In der cinematischen Fassung liegen Bilder nicht mehr in begrenzten Rahmen,
sondern vollflächig unter dem Text. Die Formate ergeben sich aus dem Band:
Hero und Seitenkopf über Bildschirmhöhe, Projektbänder auf `min(94svh, 940px)`,
Leistungshälften auf `min(76svh, 720px)`, Karten auf `min(56svh, 460px)`.
Feste Seitenverhältnisse gelten nur noch für Showreel (16 : 9), Porträt (4 : 5)
und die Galerie.

Herkunfts- und Rechtevermerke stehen nicht mehr im Bild, sondern in
`docs/MEDIA-INVENTORY.md`.

---

## 6. Aktionen

**Eine Aktion, ein solider Button.** Auf jeder Seite existiert höchstens ein
primärer Button pro Bildschirmausschnitt. Die Homepage nutzt ihn zweimal:
einmal im Hero, einmal am Seitenende im Kontaktformular. Header, Projektkarten
und Footer führen mit Textlinks zum selben Ziel und wiederholen die
Beschriftung nicht wörtlich.

| Zustand | Primär | Sekundär (Ghost) | Textlink |
| --- | --- | --- | --- |
| Ruhe | Fläche `--text`, Schrift `--bg` | Rahmen `--line-strong` | Unterlinie `--line-strong` |
| Hover | Fläche `--amber`, Schrift `#1A0F06` | Fläche `--surface-2`, Rahmen `--text` | Unterlinie wird Lichtkante, Pfeil +4 px |
| Fokus | wie Hover, zusätzlich Ring | wie Hover, zusätzlich Ring | Ring |
| Aktiv | Fläche unverändert, kein Versatz | — | — |
| Deaktiviert | Fläche `--surface-2`, Schrift `--text-muted` | — | — |

Der Fokusring ist durchgehend `2px solid var(--ice)` mit `3px` Abstand
außerhalb des Elements. Er liegt außen, damit er auch auf der hellen
Primärfläche sichtbar bleibt.

In keinem Zustand sinkt der Textkontrast unter den Ruhezustand. Fließtext wird
im Hover nie heller oder grauer; stattdessen bewegt sich die Fläche.

**Touch.** Alle Bedienelemente sind mindestens 44 px hoch; Play/Pause und die
Buttons des Filmstreifens 48 px, Formularfelder 52 px.

---

## 7. Content-Slots

Offene Inhalte werden nicht erfunden und nicht grau ausgeblendet, sondern als
Slot markiert: eisblaue Schrift mit punktierter Unterlinie (`.tbc`) für
einzelne Werte, ein umrandeter Kasten (`.slot`) für ganze Textblöcke.

Das gilt für Jahr, Ort, Rolle, Projekttyp, Beteiligte, Credits,
E-Mail-Adresse, Laufzeiten und konkrete Zeiträume in den FAQ. Beim Aufbau der
Astro-Templates werden aus diesen Markierungen echte Felder der Collections.

---

## 8. Barrierefreiheit

- Genau eine sichtbare `h1` je Seite, darunter eine lückenlose H2/H3-Folge.
- Alle Navigationsziele sind echte `<a href>`; kein Ziel hängt an JavaScript.
- `aria-current="page"` markiert den aktiven Navigationspunkt; die
  Kennzeichnung wird zusätzlich durch die Lichtkante sichtbar gemacht.
- Der Menü-Button trägt `aria-expanded` und `aria-controls`; Escape schließt.
- Formularfelder haben sichtbare Beschriftungen, keine Platzhalter als Label.
- Der Showreel-Player startet nie automatisch und nie mit Ton.
- Dekorative Grafik ist `aria-hidden`, Icons tragen Textbeschriftungen.
- Bewegung reagiert vollständig auf `prefers-reduced-motion`.

---

## 10. Cinematische Fassung — was anders ist

Stylesheets: `assets/cinematic.css` (Grundraster, Hero, Bänder, Bildebenen)
und `assets/cinematic-pages.css` (mobile Navigation, Seitenkopf, Karten,
Prosa, Faktenlisten, FAQ). Beide setzen `tokens.css` voraus.

| | Editorial | Cinematisch |
| --- | --- | --- |
| Ausrichtung | linksbündig im 12-Spalten-Raster | zentriert, Text auf dem Bild |
| Bilder | in begrenzten Rahmen mit sichtbarer Kante | vollflächig, randlos auslaufend |
| Abschnittstrennung | 1-px-Linie | Verlauf ins Schwarze (`.scrim`) |
| Überschriften | volle Deckkraft | Verlauf Weiß → `#cec8dc` |
| Header | sticky, Linkleiste | fixed auf `top: 0`, Pill-Navigation |
| Radius | 2 px | 12–16 px an Karten, 999 px an Buttons und Chips |

**Bildebene und Lesbarkeit.** Jedes Band besteht aus `.layer` (Bild),
`.scrim` (Abdunklung) und dem Inhalt auf `z-index: 2`. Drei Scrim-Varianten:
Standard für den Hero, `--soft` für Text mitten auf einem Bild (62 % plus
radiale Verstärkung, damit auch im hellen Lichtstrahl 4.5:1 erhalten bleibt),
`--bottom` für Titel im unteren Drittel.

**Licht.** Höchstens ein `.glow` pro Abschnitt, Deckkraft 0.24 bis 0.5. Die
`.beam`-Linie schließt ein Band ab und ersetzt die frühere Lichtkante.

**Seitenstruktur.** Die Navigation führt auf echte Seiten, nicht auf Anker.
Die Startseite zeigt weiterhin alle Bereiche im Überblick und verlinkt in die
Tiefe. Kopf, Navigation und Fuß stehen genau einmal und werden über
einer Vorlage zusammengesetzt worden; in Phase 2 übernimmt das ein
Astro-Layout. Die einmaligen Aufbauskripte liegen im Archiv.

## 9. Was dieses Design bewusst nicht tut

Keine Bento-Grids, keine durchgehend abgerundeten Karten, kein
Glasmorphismus als Flächenprinzip, keine künstlichen 3D-Objekte, keine
Leuchtkugeln, keine großflächigen Verläufe, keine generischen Kamera-Icons,
keine Stockfotos, keine Kundenlogos, keine Testimonials, keine erfundenen
Kennzahlen, kein Label oder Badge über der H1 und keine sechs gleichen
Icon-Karten für die Leistungen.
