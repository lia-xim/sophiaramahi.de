# Phase 2: Umsetzungsplan

Startklar, sobald das Grunddesign freigegeben ist. Bis dahin wird in diesem
Repository kein Astro-Projekt initialisiert — so steht es im Projektauftrag.

Grundlagen: `DESIGN-SPEC.md`, `MOTION-STORYBOARD.md`, `CONTENT-MODEL.md`,
`MEDIA-INVENTORY.md` und die vierzehn Konzeptansichten in `design/concepts/`.

---

## 1. Was vor dem ersten Commit geklärt sein muss

Ohne diese Angaben entstehen Templates, die anschließend wieder umgebaut
werden müssen:

| Offen | Betrifft |
| --- | --- |
| Jahr, Ort, Rolle, Projekttyp je Projekt | Projektkarten, Projektseiten, Filterlogik |
| Freigabe und Rechte der Medien | jeder Medienrahmen, Showreel, Hero |
| Porträtaufnahme | Abschnitt „Über Sophia“ |
| E-Mail-Adresse | Kontaktseite, Footer, strukturierte Daten |
| Empfänger und Versandweg des Formulars | Kontaktformular, Datenschutzerklärung |
| Konkrete Zeiträume | FAQ auf Leistungs- und Standortseiten |
| Impressums- und Datenschutzangaben | Pflichtseiten |

Alle diese Stellen sind in den Konzeptansichten eisblau punktiert markiert und
lassen sich dort direkt ablesen.

---

## 2. Projektstruktur

```text
src/
  components/
    layout/        SiteHeader, SiteNav, MobileNav, SiteFooter, Breadcrumb
    media/         MediaFrame, Slate, Ratio, Player, Gallery
    work/          Filmstrip, FilmCard, WorkGrid
    services/      ServiceList, ServiceStack, Factsheet
    editorial/     SectionHead, EditorialBlock, Prose, Faq, CtaBand, Steps
    forms/         ContactForm, Field, Consent
  layouts/
    BaseLayout.astro       html, head, SEO, Schema, View Transitions
    PageLayout.astro       Header, Breadcrumb, Footer
    ArticleLayout.astro    Satzspiegel des Journals
  pages/
    index.astro
    leistungen/index.astro
    videografie/[...slug].astro
    vj-mapping/[...slug].astro
    postproduktion/index.astro
    projekte/index.astro
    projekte/[slug].astro
    standorte/index.astro
    standorte/[slug].astro
    ueber-sophia.astro
    journal/index.astro
    journal/[slug].astro
    kontakt.astro
    impressum.astro
    datenschutz.astro
  content/
    config.ts              Schemas aus CONTENT-MODEL.md
    services/ projects/ locations/ articles/
  styles/
    tokens.css             unverändert aus design/concepts/assets/tokens.css
    base.css components.css sections.css editorial.css
  scripts/
    motion.ts              M1–M5, Auf- und Abbau bei Seitenwechseln
```

Die vier Stylesheets der Konzeptansichten werden übernommen, nicht neu
geschrieben. `tokens.css` bleibt wortgleich; die übrigen werden entlang der
Komponentengrenzen aufgeteilt, sobald eine Komponente ihren Block bekommt.

---

## 3. Abhängigkeiten

```bash
npm create astro@latest . -- --template minimal --typescript strict
npm install gsap
npm install -D @astrojs/sitemap sharp
```

Kein UI-Framework, kein Tailwind, keine Smooth-Scroll-Library. GSAP und
ScrollTrigger werden nur auf Seiten geladen, die ein Motion-Motiv nutzen, und
erst nach `prefers-reduced-motion`-Prüfung.

Befehle: `npm run dev` (lokal), `npm run build` (statisch nach `dist/`),
`npm run preview`. Deployment auf Vercel als statische Ausgabe — erst nach
eigener Freigabe, ohne DNS-Änderung.

---

## 4. Reihenfolge

1. **Gerüst.** Astro initialisieren, `tokens.css` übernehmen, `BaseLayout` mit
   Head, Canonical und `noindex` für Previews.
2. **Layout-Komponenten.** Header, mobile Navigation, Footer, Breadcrumb —
   gegen Ansicht 1, 6 und 7 geprüft.
3. **Medienbausteine.** `MediaFrame` mit Klappe und Lichtkante, `Ratio`,
   `Player`. Diese drei tragen fast jede Seite.
4. **Content Collections.** Schemas aus `CONTENT-MODEL.md`, zunächst mit den
   vier Projekten als Einträgen — leere Felder bleiben leer.
5. **Homepage.** Alle neun Abschnitte, Ansichten 1–5.
6. **Leistungen.** Hub und Pillar-Template, daraus die sieben Unterseiten.
7. **Projekte.** Übersicht und Detailseite, danach die Filmblende M5.
8. **Standorte.** Template mit Draft-Regel; veröffentlicht wird nur Köln,
   sobald sein Inhalt trägt.
9. **Journal und Pflichtseiten.**
10. **Motion.** M1–M4 einbauen, M5 nur bei stabilem Zusammenspiel mit
    ScrollTrigger.
11. **SEO und Daten.** Sitemap ohne Drafts, `Person`, `LocalBusiness`,
    `VideoObject`, `FAQPage`, `BreadcrumbList`.
12. **Redirects.** Matrix aus dem Projektauftrag, geprüft gegen Search Console
    und Backlinks.

Schritt 5 ist der erste Punkt, an dem sich das Ergebnis im Browser wie die
freigegebene Konzeptansicht anfühlen muss. Weicht es ab, wird dort korrigiert
und nicht später.

---

## 5. Qualitätsnachweis vor dem Deployment

- `npm run build` ohne Warnungen, keine toten internen Links.
- Kein horizontaler Overflow bei 360, 390, 430, 600, 768, 1024, 1366, 1440 und
  1920 px.
- Genau eine sichtbare `h1` je Seite, lückenlose Überschriftenfolge.
- Tastaturbedienung vollständig, Fokusring überall sichtbar.
- Deaktiviertes JavaScript: alle Inhalte lesbar, alle Links nutzbar, Formular
  absendbar.
- `prefers-reduced-motion`: keine Bewegung, keine Verzögerung.
- Lighthouse auf Homepage und Projektseite, Videos ohne Autostart mit Ton.
- Preview-Deployment auf `noindex` geprüft.
