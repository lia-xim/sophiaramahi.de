# sophiaramahi.de

Produktionsrepository für den vollständigen Astro-Neubau von `sophiaramahi.de`.

## Verbindlicher Projektpfad

```text
C:\Users\matth\Documents\sophiaramahi.de
```

Dieser Ordner ist der einzige Git- und Projekt-Ausgangspunkt. Der frühere Download-Ordner bleibt reine Materialquelle. Die statischen Designentwürfe unter `design/` dokumentieren die visuelle Herkunft; die produktive Website liegt unter `src/` und `public/`.

## Aktueller Stand

- Astro 7 mit strengem TypeScript und statischem Vercel-Output
- freigegebenes Designsystem `Nocturnal Cinema` in Pink, Schwarz und Weiß
- 43 erzeugte HTML-Seiten
- vier vollständige Projektseiten
- Leistungs-Hub, Videografie-Pillar, VJ/Mapping-Pillar und acht Leistungsdetails
- 16 inhaltlich differenzierte regionale Einsatzseiten
- Über-Sophia-, Kontakt-, Impressums- und Datenschutzseite
- Journal mit RSS-Feed und drei fundierten Einstiegsartikeln
- GSAP/ScrollTrigger mit `prefers-reduced-motion`-Fallback
- Canonicals, Open Graph, Sitemap, robots.txt und strukturierte Daten
- Redirects für alle bekannten WordPress-Altpunkte
- datensparsamer Kontaktweg ohne externe Formular-Datenbank

## Lokale Entwicklung

```bash
corepack pnpm install
corepack pnpm dev
```

Produktionsprüfung:

```bash
corepack pnpm run build
corepack pnpm run qa:links
corepack pnpm run preview
```

## Architektur

```text
src/components/       Header, Footer, Heroes, Projekt- und Servicebausteine
src/data/site.ts      verifizierbare Inhalte und alle Seitendaten
src/layouts/          globales SEO-, Schema- und Layoutsystem
src/pages/            Astro-Routen
src/scripts/          Navigation, Kontakt-Mail und Motion
src/styles/           Design-Tokens, freigegebene Basis und Produktionsstyles
public/media/         kuratierte, lokal ausgelieferte Medien
scripts/              reproduzierbare Output-QA
docs/                 Projekt-, Design- und Produktionsdokumentation
vercel.json           Legacy-Redirects und Security-Header
```

## Kontaktfunktion

Das kurze Formular erstellt lokal einen ausgefüllten E-Mail-Entwurf an `info@sophiaramahi.de`. Formulardaten werden nicht durch die Website gespeichert oder an einen Formularanbieter übertragen. Ein serverseitiger Versand darf erst nach bewusster Anbieterwahl, AV-Vertrag, Datenschutzerweiterung und Spam-/Rate-Limit-Konzept ergänzt werden.

## Deployment

Das Projekt ist für Vercel vorbereitet. Vor der Live-Umschaltung bleiben drei externe Schritte:

1. Medien- und Veröffentlichungsrechte abschließend bestätigen.
2. Impressum und Datenschutz fachlich prüfen lassen.
3. Preview deployen, anschließend Domain-DNS bei Netcup auf Vercel zeigen und die Redirects gegen die reale WordPress-URL-Liste kontrollieren.

Die `.de`-Domain muss nicht zu Vercel transferiert werden. Sie bleibt beim Registrar; nur die DNS-Einträge werden nach der finalen Freigabe angepasst.

## Wichtige Dokumente

- [Projektauftrag](docs/PROJECT-BRIEF.md)
- [Designspezifikation](docs/DESIGN-SPEC.md)
- [Content-Modell](docs/CONTENT-MODEL.md)
- [Medieninventar](docs/MEDIA-INVENTORY.md)
- [Produktionsbereitschaft](docs/PRODUCTION-READINESS.md)
- [Masterprompt](prompts/OPENAI-DESIGN-AND-ASTRO-PROMPT.md)
