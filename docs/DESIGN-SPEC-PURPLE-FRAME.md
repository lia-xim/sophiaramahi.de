# Designspezifikation: Purple Frame — Film, Licht und Bewegung

Verbindliche Spezifikation des Redesigns vom 12. August 2026. Sie ersetzt die
visuelle Ebene von `DESIGN-SPEC.md` (Nocturnal Cinema); Content-Regeln,
Ehrlichkeitsgrenzen, Barrierefreiheit und Ausschlüsse von dort gelten
unverändert weiter.

## 1. Leitidee

Die Website ist das Betreten eines dunklen Kinosaals. Aus einem schmalen
violetten Lichtspalt entwickelt sich beim Scrollen eine räumliche Bildwelt:
Filmframes, Lichtkegel, Projektionsflächen. Große Bereiche bleiben fast
schwarz, damit Licht und Video Wirkung entfalten. Die intensivsten
Lichtmomente sind Höhepunkte, keine Tapete.

Drei Regeln:

1. **Licht ist Ereignis.** Violett erscheint als Lichtquelle (Spalt, Kegel,
   Portal), nie als flächiger Deko-Verlauf.
2. **Der Frame trägt.** Bilder leben in großen, kinoartigen Frames mit
   bewusstem Beschnitt — keine gleichförmigen Kartenraster.
3. **Scroll ist Dramaturgie.** Eröffnung → Manifest → Projektreise → Reel →
   Leistungsbühne → Ruhe (Porträt) → Prozess → Region → Journal → Auflösung.

## 2. Farbtokens

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--bg` | `#05030A` | Grundfläche (Almost Black) |
| `--bg-2` | `#090512` | Deep Violet Black, Verlaufspol |
| `--surface` | `#120A21` | Formulare, Chrome, dunkle Flächen |
| `--surface-2` | `#19102A` | Hover-/Fokusflächen |
| `--frame` | `#0A0614` | Grundton der Medienrahmen |
| `--text` | `#F8F5FF` | Highlight White |
| `--text-muted` | `#AAA3B5` | Sekundärtext |
| `--line` | `rgba(220,200,255,.14)` | Subtile Linien |
| `--violet` | `#7137FF` | Electric Violet, Markenlicht |
| `--magenta`* | `#9A5CFF` | Luminous Purple, zweiter Lichtpol |
| `--amber`* | `#D7BCFF` | Soft Lilac, Hover der Primäraktion |
| `--ice`* | `#367CFF` | Electric Blue, seltener Kaltakzent |
| `--on-accent` | `#150732` | Text auf Lilac-Fläche |
| `--focus` | `#8FB0FF` | Fokusring |

\* Tokennamen aus dem Altbestand bewusst beibehalten, Werte neu — so fallen
alle 43 Seiten ohne Template-Umbau in das neue System.

Verbote: warme Orangetöne, dominantes Pink, großflächige beliebige Verläufe,
milchiger Glassmorphism, mehr als eine intensive Lichtquelle pro Szene.

## 3. Typografie

Archivo Variable (Display) + Instrument Sans Variable (Fließtext), beide
lokal. Hero-Display wächst auf `clamp(3.4rem, 11vw, 9.5rem)` (~152 px auf
1920). Überschriften-Verlauf endet in `#D6C6F4` (Lilac-Weiß). Zeilenlängen,
Gewichte und Meta-Stil unverändert aus Abschnitt 3 der Alt-Spezifikation.

## 4. Motion-System

GSAP + ScrollTrigger, nur Progressive Enhancement.

- **Gate:** Ein Inline-Head-Script setzt `html.motion` nur ohne
  `prefers-reduced-motion`. Alle Startzustände (geschlossene Blende,
  maskierte Zeilen) existieren ausschließlich unter `html.motion` —
  ohne JS/mit Reduced Motion ist jede Szene sofort offen und vollständig.
- **Scrub-Ease:** linear (scrub führt); Einmal-Reveals: `power2.out`,
  0.6–0.8 s. Keine Animation blockiert Inhalte, kein Scroll-Hijacking.
- **Pins (Desktop):** Ouvertüre (+100 %), Manifest (+90 %), Projektreise
  (+250 %). Mobile: keine Pins außer einer kurzen Ouvertüre-Strecke; die
  Projektreise wird vertikal.
- **Parallaxe:** ±6–10 %, transform-only (translate/scale), keine Filter-
  oder Layout-Animationen im Scroll.

## 5. Szenen der Startseite (Stand v2, nach Feedback vom 12.08.)

1. **Ouvertüre** (100svh, gepinnt): Fast schwarzer Raum, zentraler violetter
   Lichtspalt. Zwei schwarze Blendenflügel geben beim Scrollen **laufendes
   Showreel-Material** frei (stummer 8-s-Loop `hero-loop.mp4`, 1,1 MB,
   Poster = realer Reel-Frame). H1 „Film. Licht. Bewegung." in drei
   Tiefenzeilen, Subline, zwei CTAs. Keine kleinen Bildkacheln.
2. **Manifest** (sticky, ohne Pin): rein typografisch — „Eine Kamera
   zeichnet nicht nur auf. Sie entscheidet, was sichtbar wird." Die Wörter
   leuchten Wort für Wort im Projektorlicht auf (dunkel → weiß, „sichtbar"
   als Lila-Verlauf), ein Lichtkegel wandert dazu. Keine Nebenbilder.
3. **Projektreise** (horizontal, gepinnt, scrub-geglättet): Vier **gleich
   große 16:9-Kinoframes** (Electric Lights, Dark Lights, 24h to take,
   Spektra Festival), Zähler + Fortschrittslinie, jeder Frame verlinkt.
   Mobile: vertikale Sequenz mit eigener Bildparallaxe.
4. **Kinosaal (Showreel):** sticky Szene — die Leinwand wächst beim
   Scrollen aus der Tiefe (Scale 0.55 → 1) unter einem Projektorkegel,
   die Letterbox öffnet sich zuletzt. Kein Autoplay, Play-Overlay nur mit
   JS, native Controls als Basis, `preload="none"`.
5. **Leistungsbühne:** Links klebende Medienbühne mit Sucher-Overlay
   (Ecken-Ticks, „K 03 · Imagefilm"-Label, Zähler), Licht-Wipe zwischen
   den Medien, langsamer Zoom im aktiven Bild; rechts acht Kapitel mit
   Geisternummern — das aktive Kapitel hell, die übrigen gedimmt. Jedes
   Kapitel ist ein echter Link. Mobile: Kapitelliste mit Medienbändern.
6. **Über Sophia:** Editorial — riesiges Konturwort „Sophia" mit Parallaxe,
   4:5-Porträt mit Masken-Reveal und vertikaler Meta-Schiene, Headline
   überlappt den Frame. „Technik schafft den Rahmen. Atmosphäre macht den
   Film."
7. **Schnitt-Timeline (Prozess):** eine Editing-Timeline mit fünf Clips
   (Gespräch → Konzeption → Dreh → Schnitt & Ton → Übergabe); der Playhead
   fährt mit dem Scroll über die Spur, Clips füllen sich, der aktive
   Schritt steht groß darüber. Ohne Motion/JS: alle fünf Schritte als
   statische Liste.
8. **Region:** „Die Basis ist Düsseldorf." — typografische Ortsnamen in
   vier Regionsgruppen (alle 16 Standortseiten verlinkt), dezente
   Lichtspuren. Keine Behauptung von Niederlassungen.
9. **Finale:** Das Lichtmotiv kehrt zurück — liegender Lichtspalt, Horizont
   und Portal bauen sich auf. „Der nächste Film beginnt mit einem
   Gespräch." → CTA „Projekt besprechen" mit Glow und leicht magnetischem
   Hover.

Das Journal ist bewusst **nicht** auf der Startseite verlinkt (Entscheidung
12.08.); es bleibt über den Footer erreichbar.

## 5b. Header und Footer

- Header: Wortmarke, Versalien-Navigation mit Lichtunterstrich
  (aktiv/hover), Kontur-CTA mit Glow; nach 24 px Scroll kompakte Leiste
  mit Blur und Haarlinie.
- Footer: Lichthorizont als oberer Abschluss, links Markenblock mit
  Social-Links, rechts zwei Linkspalten (Seiten / Weiteres inkl. Journal).

## 6. Ehrlichkeit im Motiv

Die Reel-Tonspuren sind nachweislich stumm (−91 dB); deshalb gibt es keine
„echte Wellenform" als Motiv — das Tonaufnahme-Kapitel nutzt stattdessen den
kühlen Lichtspalt (`light-void.jpg`). Die vier generierten Lichtebenen
bleiben reine Hintergründe hinter Typografie und werden nie als Projekt-
oder Portfoliomaterial ausgegeben.

## 7. Unterseiten

Unterseiten übernehmen das System über die Tokens: violettes Licht in Hero
und Glow, Lilac als Hover der Primäraktion, Electric Blue nur für Fokus und
Slots. Struktur, URLs, Inhalte, strukturierte Daten und interne Verlinkung
bleiben unverändert.
