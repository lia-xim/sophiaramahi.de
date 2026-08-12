# Projektauftrag: sophiaramahi.de

## Status des Dokuments

Dieses Dokument ist die verbindliche Ausgangsbasis des Projekts. Es beschreibt Ziel, Architektur, Designrichtung und Qualitaetsgrenzen. Abweichungen werden bewusst entschieden und hier oder in einer spaeteren Spezifikation dokumentiert.

## Ausgangslage

- Bestehende Website: WordPress auf `sophiaramahi.de`
- Zielsystem: Astro mit statischer Bereitstellung auf Vercel
- Domain und E-Mail-Infrastruktur verbleiben zunaechst bei Netcup; die Website kann ueber DNS mit Vercel verbunden werden.
- Nicht öffentliche Materialquelle: externes Projektarchiv (nicht Bestandteil dieses Repositorys)
- Vorhandene reale Projekte mit Material:
  - Electric Lights
  - Dark Lights
  - 24h to take
  - Spektra Festival
- Vorhanden sind unter anderem zwei Full-HD-Demoreels, Projektbilder, Behind-the-Scenes-Material, Teamaufnahmen und Portraets.

## Geschaeftliches Ziel

Sophia Ramahi soll als persoenlich buchbare Videografin, Kamerafrau und ausgebildete Mediengestalterin Bild und Ton aus Duesseldorf positioniert werden. Die Website soll qualifizierte Projektanfragen aus Kultur, Musik, Events, kreativen Organisationen, ausgewaehlten Marken sowie von Agenturen und Produktionsteams erzeugen.

Die Positionierung lautet sinngemaess:

> Sophia Ramahi entwickelt atmosphaerische Filme und visuelle Erlebnisse fuer Kultur, Musik, Events und ausgewaehlte Marken. Sie verbindet Kamera, Licht, Ton und Postproduktion mit VJ, Live Visuals und Projection Mapping.

## Nicht-Ziele

- keine anonyme Full-Service-Agentur imitieren
- keine erfundenen Kunden, Projekte, Auszeichnungen, Testimonials oder Kennzahlen
- keine automatisch duplizierten Standortseiten
- kein schweres WordPress- oder JavaScript-System
- kein Scroll Hijacking
- keine SEO-Texte, die das visuelle Erlebnis dominieren
- kein Deployment, bevor Design, Inhalte, Rechte, Redirects und QA freigegeben sind

## Informationsarchitektur

```text
/
|-- /leistungen/
|-- /videografie/
|   |-- /videografie/eventfilm/
|   |-- /videografie/musikvideo/
|   |-- /videografie/imagefilm/
|   `-- /videografie/kamera-bildgestaltung/
|-- /postproduktion/
|-- /vj-mapping/
|   |-- /vj-mapping/live-visuals/
|   `-- /vj-mapping/projection-mapping/
|-- /projekte/
|   |-- /projekte/electric-lights/
|   |-- /projekte/dark-lights/
|   |-- /projekte/24h-to-take/
|   `-- /projekte/spektra-festival/
|-- /standorte/
|-- /ueber-sophia/
|-- /journal/
`-- /kontakt/
```

Projekte und Leistungen bleiben getrennte Collections. Ein Projekt kann mehrere Leistungen und einen Standort belegen. Leistungsseiten verlinken auf passende Projekte; Projektseiten verlinken auf die tatsaechlich eingesetzten Leistungen, verwandte Projekte und den Kontakt.

Wichtige kommerzielle Seiten, Projekte und priorisierte Standorte muessen in hoechstens zwei sinnvollen Klicks von der Homepage erreichbar sein. Die URL-Verzeichnistiefe ist nicht mit Klicktiefe gleichzusetzen.

## Standortstrategie

Die Homepage deckt Duesseldorf als primaeren Standort ab. Die Architektur wird fuer bis zu 15 weitere NRW-Staedte vorbereitet. Neue Standortseiten werden aber nur indexiert, wenn sie eigenstaendige Inhalte und reale Relevanz besitzen.

Moegliche Kandidaten:

- Koeln
- Neuss
- Ratingen
- Meerbusch
- Krefeld
- Wuppertal
- Essen
- Duisburg
- Moenchengladbach
- Leverkusen
- Bonn
- Bochum
- Dortmund
- Oberhausen
- Solingen

Jede indexierbare Standortseite benoetigt einen individuellen Einstieg, reale Einsatz- oder Projektrelevanz, passende Leistungen, Produktionslogistik, eigene FAQ, einen klaren Kontaktweg und nach Moeglichkeit eigenes lokales Bild- oder Projektmaterial. Stadtname-austauschen reicht nicht.

## Visuelle Leitidee

Arbeitstitel: `Nocturnal Cinema`

- tiefschwarze, kinosaalartige Grundflaeche
- moderne Editorial-Typografie
- elektrische Lichtakzente in Violett, Magenta und Indigo
- gelegentlich warmes Projektorlicht
- grosse reale Filmstills
- kontrollierte GSAP-Bewegung
- experimentell und kulturell, aber leicht bedienbar

Vorgesehene Farben:

- Background: `#050506`
- Surface: `#0D0D10`
- Text: `#F4F2F5`
- Muted text: `#A7A3AD`
- Violet: `#755CFF`
- Magenta: `#D947B4`
- Amber: `#EF9A62`
- Ice blue: `#8FAAFF`

## Homepage

1. ruhiger Header mit einer primaeren CTA `Projekt besprechen`
2. filmischer Hero mit der H1 `Filme, die Atmosphaere spuerbar machen.`
3. vier ausgewaehlte Projekte
4. zwei Leistungswelten: Videografie sowie VJ/Live Visuals/Projection Mapping
5. bewusst startbarer Showreel-Player
6. Arbeitsweise in vier Schritten
7. persoenlicher Bereich ueber Sophia
8. Duesseldorf-/NRW-Einsatzgebiet
9. kurzes Kontaktformular

## Kontakt

Das Formular bleibt niedrigschwellig:

- Name
- E-Mail
- Projektart, optional
- Worum geht es?
- Datenschutz

Begleittext:

> Erzaehlen Sie kurz, was Sie vorhaben. Ein paar Saetze reichen fuer den ersten Kontakt.

Button:

`Projektidee senden`

## Bewegung

GSAP und ScrollTrigger werden als Progressive Enhancement eingesetzt:

- Hero Media Reveal
- Project Filmstrip auf Desktop, vertikale Liste auf Mobile
- ruhige Bildmasken und Lichtkanten
- dezente Editorial-Textbewegung
- kurze Filmblenden-Seitenuebergaenge

Grenzen:

- natives Scrollen
- keine minutenlang gepinnten Abschnitte
- kein Scroll Hijacking
- zentrale Inhalte funktionieren ohne JavaScript
- `prefers-reduced-motion` wird vollstaendig respektiert
- mobile Animationen werden reduziert
- ScrollTrigger wird bei Astro-Seitenwechseln sauber verwaltet

## Technische Basis

- Astro
- TypeScript
- Astro Content Collections
- eigenes CSS mit Design Tokens
- GSAP und ScrollTrigger
- optional Astro View Transitions
- statische Vercel-Bereitstellung
- responsive Bilder ueber Astro Assets
- Video-Poster vor Video-Download
- semantisches HTML und crawlbare Links
- genau eine sichtbare H1 je indexierbarer Seite
- automatische XML-Sitemap, Canonicals, Open Graph und strukturierte Daten
- Preview-Deployments auf `noindex`

## Collections

- `services`
- `projects`
- `locations`
- `articles`

Standortinhalte erhalten mindestens ein `indexable`- beziehungsweise Draft-Feld. Unfertige oder nicht differenzierte Standortseiten werden nicht in Sitemap und Suchindex aufgenommen.

## Migration

Vor dem Launch wird eine vollstaendige URL- und Redirect-Matrix erstellt. Bekannte Beispiele:

- `/electric-lights/` -> `/projekte/electric-lights/`
- `/dark-lights/` -> `/projekte/dark-lights/`
- `/24-hours-to-take/` -> `/projekte/24h-to-take/`
- `/electirc-lights/` -> `/projekte/electric-lights/`
- `/contact/` -> `/kontakt/`

Redirect-Ziele werden vor der Umsetzung gegen Search Console, Backlinks und den finalen Seitenbestand geprueft.

## Arbeitsweise

1. Der externe Design-/Coding-Agent erstellt anhand des Masterprompts ein Grunddesign im vorliegenden Repository.
2. Das Design wird geprueft und freigegeben.
3. Danach werden reale Assets und finaler Content integriert.
4. Die Produktionstauglichkeit wird mit Build-, Browser-, Mobile-, SEO-, Performance- und Accessibility-Pruefungen belegt.
5. Erst danach erfolgen Vercel-Deployment und Domain-Migration.

