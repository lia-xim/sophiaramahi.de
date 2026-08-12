# Medieninventar

Sichtung der externen Materialquelle. Die Originale wurden nicht verändert,
verschoben oder gelöscht; `assets/` im Repository ist weiterhin leer.

**Für die Konzeptvorschau** liegen inzwischen 24 verkleinerte Arbeitskopien und
eine Kopie von `Demoreel-41.mp4` unter `design/concepts/media/`. Dieser Ordner
steht in `.gitignore`, ist nicht Teil des Repositorys und nicht veröffentlicht.
Er existiert nur, damit das Grunddesign mit echten Motiven statt mit leeren
Rahmen beurteilt werden kann. Details in `design/concepts/media/README.md`.

**Quelle:** externes, nicht öffentliches Projektarchiv
**Stand der Sichtung:** 12. August 2026
**Umfang:** 183 Dateien, davon 97 im Wurzelverzeichnis und 86 im Unterordner
`Ramahi Sophia - Camera, lights & sound is all I need._files`.

---

## 1. Bestand nach Typ

| Typ | Anzahl | Einschätzung |
| --- | --- | --- |
| `.jpg` | 78 | Projektbilder, Behind-the-Scenes, Team, Porträts |
| `.jpeg` | 7 | überwiegend `IMG_*`, Kameraexporte |
| `.png` | 7 | Cover-Grafiken, Icon-/Logodateien, `Miri*`-Grafiken |
| `.mp4` | 3 | zwei Demoreels, ein Fremdvideo |
| `.html` / `.txt` | 2 | gespeicherte Kopie der bestehenden WordPress-Seite |

Der Unterordner `…_files` ist der Asset-Anhang dieses Seiten-Downloads
(Theme-Dateien, Skripte, skalierte Vorschaubilder). Er ist **keine**
Medienquelle und wird nicht ausgewertet.

---

## 2. Bewegtbild

| Datei | Größe | Bewertung |
| --- | --- | --- |
| `Demoreel-41.mp4` | 12,6 MB | Kandidat für den Hero-Loop und den Showreel-Player |
| `Demoreel_3.mp4` | 6,6 MB | zweite Fassung, Auswahl offen |
| `Motion-Design-Showreel-2023-_-Denis-Gimaev-…mp4` | 18,5 MB | **Fremdmaterial.** Der Dateiname weist eine andere Urheberschaft aus. Wird nicht verwendet, solange keine belegte Freigabe vorliegt. |

Für die gewählte Reel-Fassung werden benötigt: Poster-Frame, Laufzeit,
Web-Encodes (1080p H.264 als Basis, zusätzlich WebM/AV1 optional) sowie ein
kurzer, stummer Loop-Ausschnitt für den Hero.

---

## 3. Zuordnungsvorschlag

Erkennbare Namensmuster erlauben eine erste Gruppierung. Sie ist ein
Vorschlag, keine Zuordnung — jede Zeile muss bestätigt werden.

| Muster | Anzahl (ca.) | Vermutete Verwendung |
| --- | --- | --- |
| `*-Spektra-*.jpg` | 11 | Projekt **Spektra Festival**: Key Visual und Galerie |
| `20241111-*`, `IMG-20241111-WA*` | 13 | eine Produktion vom 11. November 2024 — Projekt zu klären |
| `IMG_01xx-scaled.jpeg`, `IMG_7xxx.jpeg` | 8 | Behind-the-Scenes, Kandidaten für Porträt und „Über Sophia“ |
| `*-Teamfotos-*.jpg`, `*-Zusatz-*.jpg` | 3 | Team- und Zusatzmaterial, Einwilligung der Personen nötig |
| `Cover6K*.png`, `Comp-1_00000-1.png` | 3 | Grafik-/Compositing-Exporte, evtl. VJ- oder Mapping-Material |
| `cropped-ICON-SR-*.jpg` | 2 | bestehendes Icon/Logo aus der WordPress-Installation |
| `Miri*.png` | 4 | unklar, vermutlich Grafikarbeiten — Zuordnung offen |
| übrige `.jpg` ohne Muster | ca. 40 | Sichtung gemeinsam mit Sophia erforderlich |

Für **Electric Lights**, **Dark Lights** und **24h to take** ließ sich anhand
der Dateinamen kein Material eindeutig zuordnen. Diese drei Projekte laufen in
den Konzeptansichten deshalb vollständig auf Platzhaltern.

---

## 4. Vor der Übernahme zu klären

Pro Datei, gemäß `assets/README.md`:

1. Urheberschaft und Nutzungsrecht
2. abgebildete Personen und deren Einwilligung
3. zugehöriges Projekt
4. Sophias konkrete Rolle bei dieser Aufnahme
5. erforderliche Credits
6. vorgesehene Verwendung auf der Website
7. Bildausschnitt, Poster und Webformate

Zusätzlich zu klären:

- Fremdmaterial im Reel: Falls die Demoreels Ausschnitte fremder Produktionen
  enthalten, muss die Web-Veröffentlichung gesondert freigegeben werden.
- Musik in den Reels: Rechte an der Tonspur für die Website-Nutzung.
- Auftritte Dritter bei Veranstaltungen: Einwilligung der Künstlerinnen,
  Künstler und des Publikums.

---

## 4b. Generierte Lichtebenen

Für die cinematische Fassung (Konzept 15) wurden vier **KI-generierte**
Hintergrundebenen erzeugt und liegen ebenfalls unter
`design/concepts/media/`:

| Datei | Motiv |
| --- | --- |
| `light-hero.jpg` | Bühnennebel mit violett-magentafarbenem Lichtstrahl |
| `light-beams.jpg` | gekreuzte Projektorstrahlen im Nebel |
| `light-amber.jpg` | warmer Projektorstrahl mit Staubpartikeln |
| `light-void.jpg` | fast schwarzer Raum mit schmalem kühlem Lichtspalt |

Diese Bilder sind **bewusst gegenstandslos**: reines Licht, kein Motiv, keine
Personen, kein Ort. Sie liegen als Hintergrundebene hinter Typografie.

**Grenze:** Generierte Bilder werden nie als Projekt-, Referenz- oder
Portfoliomaterial eingesetzt. Im Portfolio einer Kamerafrau muss jedes Bild,
das für Arbeit steht, von ihr sein. Vor dem Launch ist zu entscheiden, ob diese
Ebenen bestehen bleiben oder durch reales Bühnenmaterial ersetzt werden — die
Spektra- und Club-Aufnahmen enthalten vergleichbare Lichtsituationen.

## 5. Zielstruktur im Repository

Erst nach Freigabe, dann kuratiert und benannt:

```text
assets/
  projects/
    electric-lights/     hero.jpg, gallery-01.jpg …
    dark-lights/
    24h-to-take/
    spektra-festival/
  showreel/
    reel-poster.jpg
    reel-1080.mp4
  portrait/
    sophia-portrait.jpg
  locations/
    koeln.jpg
```

Dateinamen in Kleinschreibung, ohne Umlaute und Leerzeichen. Die Originale im
externen Projektarchiv bleiben unverändert.

---

## 6. Auswirkung auf das Grunddesign

Alle 40 Medienrahmen der Konzeptansichten sind mit realen Motiven belegt.
Die Klappe mit Motivbezeichnung und Rechtestatus liegt weiterhin in jedem
Rahmen, erscheint aber erst über den Schalter `Anmerkungen ein/aus` — im
Normalzustand ist das Bild vollständig frei.

Jedes Format hat eine feste Fläche. Ein Austausch einzelner Motive nach der
Rechteklärung verändert kein Layout und erzeugt keinen Versatz.

Belastbar zugeordnet sind bislang nur `electric-lights-cover.jpg` (trägt den
Projekttitel im Bild) und die `spektra-*`-Serie. Alle anderen Zuordnungen sind
vorläufig und in den Klappen als solche ausgewiesen.
