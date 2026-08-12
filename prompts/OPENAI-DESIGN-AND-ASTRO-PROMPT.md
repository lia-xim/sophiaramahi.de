# Masterprompt: Design und Astro-Ausgangsprojekt

```text
Du arbeitest als Senior Digital Art Director, UX Designer und Astro Frontend Engineer.

VERBINDLICHER ARBEITSORT

Arbeite ausschliesslich in dem bereits angelegten Git-Repository, in dem du dich aktuell befindest.

Dieses Repository ist die verbindliche Ausgangsbasis und der einzige Projektpfad fuer den Neubau von sophiaramahi.de. Lege kein zweites Projekt außerhalb dieses Repositorys an. Alle Designunterlagen, Astro-Dateien, Komponenten, Styles, Content-Schemas, Dokumentationen und spaeteren Konfigurationen gehoeren in dieses Repository.

Bevor du Dateien veraenderst:

1. Lies README.md vollstaendig.
2. Lies docs/PROJECT-BRIEF.md vollstaendig.
3. Pruefe den aktuellen Git-Status.
4. Erhalte vorhandene Nutzerdateien und ueberschreibe keine fremden Aenderungen.
5. Nutze assets/ nur fuer kuratierte und rechtlich gepruefte Medien.

Die externe Materialquelle ist:

externes, nicht öffentliches Projektarchiv

Veraendere oder verschiebe dort keine Originaldateien. Wenn die Assets noch nicht freigegeben oder zugeordnet wurden, arbeite mit klar beschrifteten Platzhaltern. Kopiere keine Medien blind in das Repository.

AUFGABE

Erstelle ein vollstaendiges visuelles Grunddesign und einen hochwertigen klickbaren Astro-Prototyp fuer die neue Website von Sophia Ramahi.

PROJEKT

Name:
Sophia Ramahi

Domain:
sophiaramahi.de

Standort:
Duesseldorf, Deutschland

Beruf:
Videografin, Kamerafrau und ausgebildete Mediengestalterin Bild und Ton

Schwerpunkte:
- Videografie und Videoproduktion
- Kamera und Bildgestaltung
- Event- und Kulturfilm
- Musikvideos und Kuenstlerportraets
- Schnitt und Postproduktion
- VJ
- Live Visuals
- Projection Mapping

Vorhandene reale Projekte:
- Electric Lights
- Dark Lights
- 24h to take
- Spektra Festival

Fuer alle vier Projekte ist reales Bild- und Videomaterial vorhanden. Verwende zunaechst klar bezeichnete Medien-Platzhalter, falls die Assets in diesem Schritt noch nicht bereitgestellt oder freigegeben wurden. Nutze keine generischen Stockpersonen und erfinde keine zusaetzlichen Kunden, Projekte, Auszeichnungen, Testimonials oder Kennzahlen.

ZIEL

Die Website soll Sophia als persoenlich buchbare, kreative Videografin und Mediengestalterin aus Duesseldorf positionieren. Sie darf nicht wie eine grosse anonyme Full-Service-Agentur oder wie ein WordPress-Template wirken.

Die Website soll besonders Kulturinstitutionen, Veranstalter, Musiker, Kuenstler, kreative Organisationen, ausgewaehlte Marken sowie Filmproduktionen und Agenturen ansprechen, die eine Kamerafrau oder Mediengestalterin benoetigen.

Die visuelle Gestaltung steht in diesem Schritt im Vordergrund. Die Informationsarchitektur muss aber bereits genug Raum fuer umfangreiche SEO-Texte, Projekte, Leistungsseiten, Standortseiten und Ratgeber bieten.

TECHNOLOGIE

Erstelle den Prototyp mit:

- Astro
- TypeScript
- Astro-Komponenten
- eigenem CSS mit zentralen Design Tokens
- GSAP
- GSAP ScrollTrigger
- Astro Content Collections
- Astro View Transitions, sofern sie stabil mit den GSAP-Sequenzen verbunden werden koennen

Verwende kein WordPress, kein Next.js und kein schweres UI-Framework. Verwende kein Scroll Hijacking und zunaechst keine zusaetzliche Smooth-Scroll-Library.

Der Prototyp soll statisch auf Vercel deploybar sein. In diesem Schritt noch nicht deployen und keine DNS-Aenderungen vornehmen.

INFORMATIONSARCHITEKTUR

Hauptnavigation:

- Arbeiten
- Leistungen
- Standorte
- Ueber Sophia
- Journal
- Projekt besprechen

Geplante Struktur:

/
/leistungen/
/videografie/
/videografie/eventfilm/
/videografie/musikvideo/
/videografie/imagefilm/
/videografie/kamera-bildgestaltung/
/postproduktion/
/vj-mapping/
/vj-mapping/live-visuals/
/vj-mapping/projection-mapping/
/projekte/
/projekte/electric-lights/
/projekte/dark-lights/
/projekte/24h-to-take/
/projekte/spektra-festival/
/standorte/
/standorte/koeln/
/ueber-sophia/
/journal/
/kontakt/

Fuer das Grunddesign muessen noch nicht alle Inhaltsseiten vollstaendig umgesetzt werden. Erstelle jedoch wiederverwendbare Templates und mindestens diese repraesentativen Seiten:

1. vollstaendige Homepage
2. Leistungen-Hub
3. Videografie-Pillar
4. VJ-&-Projection-Mapping-Pillar
5. Projektuebersicht
6. eine vollstaendige Projektseite fuer Electric Lights
7. ein Standortseiten-Template am Beispiel Koeln
8. ein Journalartikel-Template
9. Kontaktseite

Projekte bleiben eine eigenstaendige Collection und werden nicht als Kinder einzelner Leistungen behandelt. Eine Projektseite kann mehrere Leistungen und Standorte referenzieren.

DESIGNRICHTUNG

Arbeitstitel:
Nocturnal Cinema

Visuelle Eigenschaften:

- tiefschwarze, kinosaalartige Grundflaeche
- hochwertiges Editorial Design
- elektrische Lichtakzente in Violett, Magenta, Indigo und gelegentlichem warmem Projektorlicht
- grosse, echte Filmstills
- kontrollierte Bewegung
- starke Typografie
- grosszuegige Abstaende
- atmosphaerisch und experimentell
- trotzdem sehr klar, professionell und leicht bedienbar

Farbpalette:

--background: #050506
--surface: #0D0D10
--text: #F4F2F5
--text-muted: #A7A3AD
--violet: #755CFF
--magenta: #D947B4
--amber: #EF9A62
--ice-blue: #8FAAFF

Die Akzentfarben sollen wie echtes Film-, Buehnen- oder Projektionslicht eingesetzt werden. Nutze keine grossflaechigen generischen SaaS-Verlaeufe.

Vermeide:

- typische Bento Grids
- ueberall abgerundete Karten
- riesige Glasmorphismus-Container
- kuenstliche 3D-Objekte
- Neon-Orbs
- uebermaessige Glows
- kleine Texte auf unruhigen Bildern
- Stockfotos
- generische Kamera-Icons
- Fake-Metriken
- Kundenlogos ohne Freigabe
- kuenstliche Testimonials
- Hero-Badges oder Pills oberhalb der H1
- einen Look wie eine klassische Marketingagentur

TYPOGRAFIE

Nutze eine moderne, charaktervolle Grotesk-Schrift. Die Wortmarke SOPHIA RAMAHI darf in Versalien erscheinen. Grosse Headlines duerfen sehr selbstbewusst sein, Fliesstext muss jedoch auf allen Geraeten hervorragend lesbar bleiben.

Definiere ein vollstaendiges responsives Typografiesystem fuer:

- Display Headlines
- H1 bis H4
- Body Large
- Body
- Caption
- Navigation
- Buttons
- Formularfelder
- Projekt-Metadaten

HOMEPAGE

1. HEADER

Ruhiger, transparenter beziehungsweise schwarzer Header.

Wortmarke:
SOPHIA RAMAHI

Navigation:
Arbeiten
Leistungen
Standorte
Ueber Sophia
Journal

Primary CTA:
Projekt besprechen

2. HERO

Nutze einen grossen filmischen Medienrahmen mit Platzhalter fuer einen kurzen Showreel-Loop.

Headline:
Filme, die Atmosphaere spuerbar machen.

Supporting copy:
Sophia Ramahi ist Videografin und Mediengestalterin aus Duesseldorf. Sie entwickelt visuelle Arbeiten fuer Kultur, Musik, Events und Projekte mit einer eigenen Bildsprache.

Primary CTA:
Arbeiten ansehen

Secondary CTA:
Projekt besprechen

Kein Label, Badge, Kicker oder Pill oberhalb der Headline.

Der Film darf nicht automatisch mit Ton starten. Das Design muss auch mit einem statischen Poster vollstaendig funktionieren.

3. AUSGEWAEHLTE ARBEITEN

Praesentiere:

Electric Lights
Dark Lights
24h to take
Spektra Festival

Entwickle dafuer eine filmstreifenartige oder horizontal gefuehrte Desktop-Komposition. Jedes Projekt benoetigt:

- grosses Key Visual
- Titel
- Projekttyp
- Jahr oder Ort als Platzhalter
- Sophias Rolle
- eindeutige Verlinkung

Mobile wird daraus eine sehr hochwertige vertikale Projektfolge.

4. LEISTUNGSWELTEN

Stelle zwei primaere Bereiche gegenueber:

Videografie
VJ, Live Visuals & Projection Mapping

Videografie umfasst:

- Eventfilm
- Musikvideo
- Imagefilm
- Kamera und Bildgestaltung
- Postproduktion

Verwende keine gewoehnliche Sammlung aus sechs gleichen Icon-Karten. Entwickle eine offene redaktionelle Komposition mit grossen Bildern, Typografie und klaren Links.

5. SHOWREEL

Grosser Video-Player mit:

- Poster
- Play/Pause
- sichtbarer Laufzeit
- Vollbild
- klarer Fokusdarstellung
- keinem automatischen Ton

6. ARBEITSWEISE

Vier Schritte:

01 Idee und Ziel
02 Konzept und Vorbereitung
03 Dreh oder Live-Produktion
04 Schnitt und Auslieferung

7. UEBER SOPHIA

Nutze ein echtes Portraet beziehungsweise zunaechst einen klar gekennzeichneten Portrait-Platzhalter.

Der Abschnitt soll Ausbildung, persoenliche Zusammenarbeit und Sophias Verbindung von technischer und kreativer Arbeit vermitteln.

8. STANDORT

Duesseldorf ist die Basis. Produktionen sind auch in Koeln und weiteren Regionen Nordrhein-Westfalens moeglich.

Zeige nur vier bis sechs priorisierte Orte und verlinke auf den vollstaendigen Standort-Hub. Keine grosse keywordartige Liste aller Staedte auf der Homepage.

9. KONTAKT

Headline:
Erzaehlen Sie kurz, was Sie vorhaben.

Supporting copy:
Ein paar Saetze reichen fuer den ersten Kontakt.

Formularfelder:

- Name
- E-Mail
- Projektart, optional
- Worum geht es?
- Datenschutz

Button:
Projektidee senden

Zeige zusaetzlich eine direkte E-Mail-Moeglichkeit.

MOTION DESIGN

Nutze GSAP und ScrollTrigger als kontrollierte Progressive Enhancement.

Entwickle diese Bewegungsmotive:

1. Hero Media Reveal
Der Hero-Film startet in einem breiten Kinorahmen und oeffnet sich beim ersten Scrollen leicht in eine groessere Flaeche.

2. Project Filmstrip
Die vier Projekte bewegen sich auf Desktop in einer kontrollierten horizontalen Sequenz. Kein Scroll Hijacking. Mobile zeigt eine normale vertikale Liste.

3. Image Mask Reveals
Projekt- und VJ-Bilder werden ueber ruhige Masken, Lichtkanten oder Clip-Path-Bewegungen sichtbar.

4. Editorial Text Motion
Ueberschriften duerfen leicht versetzt oder zeilenweise erscheinen, muessen aber ohne JavaScript sofort sichtbar und lesbar bleiben.

5. Page Transition
Zwischen Projektuebersicht und Projektseite kann eine kurze dunkle Filmblenden-Transition verwendet werden.

REGELN FUER ANIMATION

- kein Scroll Hijacking
- natives Scrollen
- keine minutenlang gepinnten Sektionen
- kein uebermaessiges Parallax
- animiere primaer transform und opacity
- Layout Shifts vermeiden
- prefers-reduced-motion vollstaendig respektieren
- mobile Geraete erhalten vereinfachte Animationen
- zentrale Inhalte duerfen nicht von JavaScript abhaengig sein
- ScrollTrigger-Instanzen bei Astro-Seitenwechseln sauber entfernen
- Videos erst nach dem Poster laden
- keine Animation darf Navigation oder Kontakt erschweren

SEO- UND ARCHITEKTURANFORDERUNGEN

Das Grunddesign muss genug Platz fuer reale Texte und interne Links bieten, darf aber visuell nicht wie eine SEO-Landingpage aussehen.

Alle wichtigen Links muessen als echte HTML-Links mit href umgesetzt werden.

Jede repraesentative Seite benoetigt:

- genau eine sichtbare H1
- logische H2/H3-Struktur
- Breadcrumb-Bereich auf Detailseiten
- Platz fuer Intro, Proof, FAQ und CTA
- related projects
- related services
- eindeutigen Conversion-Pfad

Die maximale Klicktiefe fuer kommerzielle Seiten, Projekte und Standorte soll zwei Klicks ab Homepage betragen.

Erstelle keine 15 automatisch duplizierten Standortseiten. Baue ein flexibles Standortseiten-Template mit strukturierten Content-Slots fuer:

- individuellen lokalen Einstieg
- Einsatzgebiet
- passende Leistungen
- reales Projekt
- lokale Produktionshinweise
- FAQ
- Kontakt

CONTENT COLLECTIONS

Plane folgende Collections:

services
projects
locations
articles

Projects benoetigen mindestens:

- title
- slug
- year
- location
- services
- roles
- heroImage
- heroVideo
- summary
- collaborators
- gallery
- credits
- relatedProjects
- seo

Locations benoetigen mindestens:

- city
- region
- priority
- indexable
- intro
- serviceLinks
- proofProjects
- logistics
- faq
- seo

Unfertige oder nicht ausreichend differenzierte Standorte bleiben Draft, werden nicht in der Sitemap ausgegeben und erhalten keine interne Index-Verlinkung.

RESPONSIVE

Erstelle ein vollstaendiges Desktop- und Mobile-Design.

Desktop:
1440 Pixel Referenzbreite

Mobile:
390 Pixel Referenzbreite

Pruefe insbesondere:

- Hero-Zeilenumbrueche
- Projektsequenz
- mobile Navigation
- Video-Player
- Kontaktformular
- lange deutsche Woerter
- Touch-Flaechen
- reduzierte Animation
- keine horizontalen Overflows

ARBEITSABLAUF UND DELIVERABLES

Phase 1 ist ein visuelles Grunddesign. Erstelle zuerst koordinierte, grosse und gut lesbare Konzeptansichten fuer:

1. Homepage-Hero und ersten Viewport
2. Projekt-Filmstrip
3. Leistungswelten und Showreel
4. Arbeitsweise, Ueber Sophia und Standort
5. Kontakt und Footer
6. mobile Homepage
7. Videografie-Pillar
8. VJ-&-Mapping-Pillar
9. Electric-Lights-Projektseite
10. Standortseiten-Template

Lege die Konzeptdateien und eine nachvollziehbare Designspezifikation im Repository ab. Implementiere noch nicht weiter, bis das Grunddesign vom Nutzer freigegeben wurde.

Nach der Freigabe entsteht in Phase 2 das Astro-Projekt mit:

- wiederverwendbaren Komponenten
- Design Tokens
- Content Collections
- repräsentativen Templates
- Motion Storyboard
- Platzhalter-Medieninventar
- README mit Start- und Build-Befehlen

Schreibe keine erfundenen langen SEO-Texte und veroeffentliche keine generischen Stadtseiten. Das vollstaendige reale Material und die finalen Inhalte werden nach Freigabe des Grunddesigns eingebaut.
```
