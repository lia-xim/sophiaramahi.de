# Produktionsbereitschaft

Stand: 12. August 2026

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

## Messergebnis

Lokales Lighthouse, mobile Standardemulation:

| Kategorie | Wert |
| --- | ---: |
| Performance | 95 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

LCP im lokalen gedrosselten Test: 3,0 s. Das größte Element ist die Hero-Textgruppe; die Inhalte sind bewusst sofort sichtbar und nicht vom GSAP-Ladevorgang abhängig. Die echte Produktionsmessung muss nach dem Vercel-Preview mit CDN, Komprimierung und realer TTFB wiederholt werden.

## Externe Freigaben vor der Domain-Umschaltung

- [ ] Bild-, Video-, Musik- und Persönlichkeitsrechte schriftlich bestätigen
- [ ] Rollen, Jahre und Orte der vier Projekte von Sophia gegenlesen lassen
- [ ] Impressum und Datenschutz fachlich/rechtlich gegen den tatsächlichen Betrieb prüfen
- [ ] Vercel-Preview auf realen iOS-/Android-Geräten testen
- [ ] E-Mail-Link auf mindestens Windows, iOS und Android testen
- [ ] WordPress-URL-Export mit `vercel.json` abgleichen
- [ ] Vercel-Projekt verbinden und Preview-Alias prüfen
- [ ] Netcup-DNS erst nach Preview-Freigabe ändern
- [ ] nach Livegang: HTTPS, `www`/Apex-Kanonisierung, Redirects, Sitemap und Search Console prüfen

## SEO-Veröffentlichungsregel für Standortseiten

Die 16 Seiten sind keine Behauptung lokaler Niederlassungen. Sie nennen Düsseldorf als Basis und beschreiben reale Anfahrts- und Produktionsbedingungen. Nach dem Livegang werden Impressionen, Indexierung und Nutzerverhalten in der Search Console geprüft. Seiten ohne eigenständige Nachfrage, Referenz oder hilfreichen Mehrwert werden zusammengeführt oder vorübergehend auf `noindex` gesetzt; es werden keine austauschbaren Stadtseiten in Masse ergänzt.
