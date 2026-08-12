# Content-Modell

Entwurf der Astro Content Collections für `sophiaramahi.de`. Umsetzung in
`src/content/config.ts` in Phase 2. Die Feldnamen entsprechen den
Content-Slots, die in den Konzeptansichten eisblau markiert sind.

Vier Collections: `services`, `projects`, `locations`, `articles`. Projekte
sind eigenständig und keine Kinder einzelner Leistungen — eine Projektseite
referenziert mehrere Leistungen und höchstens einen Standort.

---

## Gemeinsam: `seo`

```ts
const seo = z.object({
  title: z.string().max(60),
  description: z.string().max(160),
  ogImage: z.string().optional(),
  canonical: z.string().url().optional(),
  noindex: z.boolean().default(false),
});
```

---

## `services`

```ts
services: defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    parent: z.string().optional(),          // z. B. "videografie"
    order: z.number().default(0),
    summary: z.string(),
    intro: z.string(),
    heroImage: image().optional(),
    highlights: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),                        // Faktenliste, siehe Ansicht 08
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    relatedServices: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([]),
    seo,
  }),
});
```

Pillar und Unterseite nutzen dasselbe Schema; `parent` entscheidet über die
Ebene. Damit deckt ein Template `/videografie/` ebenso ab wie
`/videografie/eventfilm/`.

---

## `projects`

```ts
projects: defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number().optional(),            // offen, bis bestätigt
    location: z.string().optional(),
    services: z.array(z.string()).default([]),
    roles: z.array(z.string()).default([]),
    heroImage: image().optional(),
    heroVideo: z.string().optional(),       // Poster ist heroImage
    summary: z.string().optional(),
    collaborators: z.array(z.object({
      name: z.string(),
      role: z.string(),
      url: z.string().url().optional(),
      consent: z.boolean().default(false),  // ohne Zustimmung nicht ausgeben
    })).default([]),
    gallery: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    credits: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),
    relatedProjects: z.array(z.string()).default([]),
    featured: z.boolean().default(false),   // steuert den Filmstreifen
    draft: z.boolean().default(true),
    seo,
  }),
});
```

Optionale Felder bleiben leer, statt einen Wert zu erfinden. Ein leeres Feld
rendert den zugehörigen Block nicht — es entsteht kein „Jahr: unbekannt“.

---

## `locations`

```ts
locations: defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    city: z.string(),
    region: z.string(),
    priority: z.number().default(50),
    indexable: z.boolean().default(false),  // Standard: nicht indexierbar
    intro: z.string(),                      // individuell je Stadt, Pflicht
    heroImage: image().optional(),
    coverage: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),
    serviceLinks: z.array(z.string()).default([]),
    proofProjects: z.array(z.string()).default([]),
    logistics: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    seo,
  }),
});
```

**Veröffentlichungsregel.** Eine Standortseite erscheint nur dann in Sitemap,
interner Verlinkung und Suchindex, wenn `indexable === true`. Das setzt
voraus:

1. `intro` ist eigenständig für diese Stadt geschrieben,
2. `proofProjects` enthält mindestens ein reales Projekt,
3. `logistics` ist gefüllt,
4. `faq` enthält mindestens zwei stadtspezifische Fragen.

Sind die Bedingungen nicht erfüllt, bleibt die Seite Draft. Aus der
Kandidatenliste im Projektauftrag entstehen dadurch nicht automatisch 15
Seiten.

---

## `articles`

```ts
articles: defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    excerpt: z.string(),
    heroImage: image().optional(),
    topics: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    seo,
  }),
});
```

---

## Interne Verlinkung

| Von | Nach |
| --- | --- |
| Homepage | vier Projekte, beide Pillar-Seiten, alle Unterleistungen, sechs Standorte |
| Pillar | eigene Unterleistungen, zwei Belegprojekte, verwandte Leistungen |
| Projekt | eingesetzte Leistungen, verwandte Projekte, Kontakt |
| Standort | passende Leistungen, Belegprojekt, Kontakt |
| Journal | referenzierte Leistungen und Projekte |

Damit liegt jede kommerzielle Seite, jedes Projekt und jeder indexierbare
Standort höchstens zwei Klicks von der Homepage entfernt.

---

## Weiteres in Phase 2

- Redirect-Matrix aus dem Projektauftrag als `vercel.json` beziehungsweise
  Astro-Redirects.
- Sitemap ohne Draft- und `noindex`-Einträge.
- Strukturierte Daten: `Person` und `LocalBusiness` für Sophia, `VideoObject`
  für Showreel und Projektvideos, `FAQPage` auf Leistungs- und
  Standortseiten, `BreadcrumbList` auf allen Detailseiten.
- Preview-Deployments auf `noindex`.
