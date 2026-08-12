# Produktionsbereitschaft

Stand: 12. August 2026 (nach dem Purple-Frame-Redesign)

## Erreicht

- [x] Astro-/TypeScript-Check: 0 Fehler, 0 Warnungen, 0 Hinweise
- [x] statischer Vercel-Build: 43 HTML-Seiten
- [x] interne Links und Assets vollständig auflösbar
- [x] je Seite genau eine H1
- [x] eindeutige Seitentitel und Meta-Descriptions
- [x] JSON-LD syntaktisch valide
- [x] Sitemap und robots.txt erzeugt
- [x] Impressum und Datenschutz stehen auf `noindex` und fehlen in der Sitemap
- [x] alte WordPress-URLs über permanente Redirects abgedeckt
- [x] Desktop- und Mobile-Browser-QA auf 17 repräsentativen Routen
- [x] kein horizontaler Overflow in den getesteten Ansichten
- [x] keine Console Errors, Page Errors oder fehlenden Kernassets
- [x] mobile Navigation bedienbar
- [x] Inhalte ohne GSAP weiterhin sichtbar; reduzierte Bewegung respektiert
- [x] Video ohne Autoplay und mit `preload="none"`
- [x] Schriften, Bilder und Showreel lokal ausgeliefert
- [x] keine Analytics-, Marketing- oder Social-Embed-Cookies
- [x] GitHub-Repository mit Vercel verbunden
- [x] stabiler Preview-Alias `https://sophiaramahide.vercel.app` öffentlich erreichbar

## Messergebnis

Lokales Lighthouse (Produktions-Build über `astro preview`), mobile
Standardemulation, nach dem Purple-Frame-Redesign:

| Kategorie | Wert |
| --- | ---: |
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

LCP im lokalen gedrosselten Test: 2,2 s, CLS 0, TBT 80 ms. Das größte Element
ist die Hero-Textgruppe; die Inhalte sind sofort sichtbar und nicht vom
GSAP-Ladevorgang abhängig. Medienstand: alle JPEGs auf maximal 1600 px neu
komprimiert, Showreel als H.264 (18,9 MB, `preload="none"`), Hero-Loop 8 s
H.264 (1,1 MB, stumm, spielt nur im Motion-Modus). Die echte
Produktionsmessung muss nach dem Vercel-Preview mit CDN und realer TTFB
wiederholt werden.

Zusätzlich geprüft (12. August 2026, Playwright):

- Reduced Motion: Blende offen, alle Wörter und Prozessschritte sofort
  sichtbar, kein Autoplay.
- Ohne JavaScript: vollständige Inhalte, natives Video mit Controls,
  59 interne Links auf der Startseite.
- Kein horizontaler Overflow auf 390/768/1440/1920 über neun Routen.

## Externe Freigaben vor der Domain-Umschaltung

- [ ] Bild-, Video-, Musik- und Persönlichkeitsrechte schriftlich bestätigen
- [ ] Rollen, Jahre und Orte der vier Projekte von Sophia gegenlesen lassen
- [ ] Impressum und Datenschutz fachlich/rechtlich gegen den tatsächlichen Betrieb prüfen
- [ ] Vercel-Preview auf realen iOS-/Android-Geräten testen
- [ ] E-Mail-Link auf mindestens Windows, iOS und Android testen
- [ ] WordPress-URL-Export vollständig mit `vercel.json` abgleichen
- [x] Vercel-Projekt verbinden und Preview-Alias per HTTP prüfen
- [ ] Netcup-DNS erst nach Preview-Freigabe ändern
- [ ] nach Livegang: HTTPS, `www`/Apex-Kanonisierung, Redirects, Sitemap und Search Console prüfen

## SEO-Veröffentlichungsregel für Standortseiten

Die 16 Seiten sind keine Behauptung lokaler Niederlassungen. Sie nennen Düsseldorf als Basis und beschreiben reale Anfahrts- und Produktionsbedingungen. Nach dem Livegang werden Impressionen, Indexierung und Nutzerverhalten in der Search Console geprüft. Seiten ohne eigenständige Nachfrage, Referenz oder hilfreichen Mehrwert werden zusammengeführt oder vorübergehend auf `noindex` gesetzt; es werden keine austauschbaren Stadtseiten in Masse ergänzt.
