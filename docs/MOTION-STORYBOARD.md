# Motion-Storyboard

Bewegungskonzept für `sophiaramahi.de`. Umsetzung mit GSAP und ScrollTrigger
in Phase 2, ausschließlich als Progressive Enhancement.

Die Konzeptansichten in `design/concepts/` enthalten bewusst noch keine
Scroll-Animationen — dort ist jeder Endzustand sofort sichtbar, damit
Komposition und Typografie ohne Bewegung beurteilt werden können.

---

## Grundregeln

- Natives Scrollen. Kein Scroll Hijacking, keine Smooth-Scroll-Library.
- Animiert werden nur `transform`, `opacity` und `clip-path`. Keine
  Eigenschaft, die Layout auslöst.
- Jeder Endzustand ist der HTML-Grundzustand. Ohne JavaScript ist die Seite
  vollständig sichtbar und vollständig bedienbar.
- Keine gepinnte Sektion hält länger als eine Bildschirmhöhe Scrollweg.
- Standardkurve `cubic-bezier(0.22, 0.61, 0.36, 1)`, Standarddauer 220–420 ms.
- Unter 860 px laufen nur M4 und M5 in reduzierter Form.
- `prefers-reduced-motion: reduce` schaltet alle fünf Motive ab. Es gibt keine
  „abgeschwächte“ Variante — reduziert heißt aus.

---

## M1 · Hero Media Reveal

**Auslöser** Erstes Scrollen, `scrub: 0.4`, Ende nach 60 % Viewporthöhe.

Der Kinorahmen startet bei `aspect-ratio: 2.39 / 1` und öffnet sich auf
`2.05 / 1`. Umgesetzt über `transform: scaleY()` auf einem Wrapper mit fester
Fläche, damit kein Layout-Shift entsteht. Die Lichtkante an der Unterkante
wandert dabei von 40 % auf 100 % Breite.

**Ohne JavaScript** Der Rahmen steht dauerhaft im geöffneten Endzustand.

---

## M2 · Project Filmstrip

**Auslöser** Sichtbarkeit der Sektion; Bewegung folgt der Scrollposition.

Die vier Projekte liegen in einem horizontalen Scroller mit `scroll-snap`.
Zusätzlich versetzt ScrollTrigger die Frames beim vertikalen Scrollen um
maximal 40 px gegeneinander — die schmalen 4 : 5-Frames laufen leicht
langsamer als die breiten 3 : 2-Frames. Das ist der gesamte Parallax-Anteil
der Seite.

Blättern erfolgt über die beiden Buttons oder natives horizontales Scrollen.
Der Fortschrittsbalken unter dem Streifen bildet die Scrollposition ab.

**Mobile** Der Scroller wird zur vertikalen Liste, der Versatz entfällt.

**Ohne JavaScript** Horizontales Scrollen funktioniert nativ weiter, nur die
beiden Blätter-Buttons bleiben wirkungslos und werden deshalb erst per Skript
eingeblendet.

---

## M3 · Image Mask Reveal

**Auslöser** `start: "top 82%"`, einmalig.

Projekt-, Leistungs- und Galeriebilder erscheinen über eine ruhige Maske von
unten: `clip-path: inset(18% 0 0 0)` auf `inset(0 0 0 0)`, 420 ms, gleichzeitig
`opacity` 0 auf 1. In Galerien laufen die Bilder um je 60 ms versetzt.

Die Lichtkante blendet 120 ms nach dem Bild ein.

**Ohne JavaScript** Bild und Kante sind sofort vollständig sichtbar.

---

## M4 · Editorial Text Motion

**Auslöser** `start: "top 85%"`, einmalig.

Überschriften erscheinen zeilenweise: `translateY(14px)` auf 0 und `opacity`
0.001 auf 1, 320 ms, 45 ms Versatz je Zeile. Fließtext folgt als ganzer Block.

Die Startopazität ist bewusst `0.001` statt `0`, damit Suchmaschinen und
Screenreader den Text unter allen Umständen als sichtbar behandeln.

**Ohne JavaScript** Text steht sofort und ohne Versatz.

---

## M5 · Page Transition

**Auslöser** Navigation zwischen Projektübersicht und Projektseite.

Eine kurze Filmblende: 180 ms Abdunkeln auf `#050506` beim Verlassen, 240 ms
Aufblenden des Hero-Mediums auf der Zielseite. Umgesetzt mit Astro View
Transitions.

**Bedingung** View Transitions werden nur aktiviert, wenn sie stabil mit den
ScrollTrigger-Instanzen zusammenspielen. Andernfalls entfällt M5 ersatzlos —
eine harte Navigation ist besser als eine hängende Blende.

---

## Lebenszyklus bei Astro-Seitenwechseln

```js
let triggers = [];

document.addEventListener("astro:page-load", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  triggers = buildScrollTriggers();          // M1–M4 neu aufbauen
});

document.addEventListener("astro:before-swap", () => {
  triggers.forEach((trigger) => trigger.kill());
  triggers = [];
  ScrollTrigger.clearMatchMedia();
});
```

Ohne diesen Abbau sammeln sich bei jedem Seitenwechsel tote Instanzen an; das
ist die häufigste Fehlerquelle in Kombination aus Astro und ScrollTrigger.

---

## Videos

Poster zuerst, Video danach. Das `<video>`-Element trägt `preload="none"`,
`playsinline`, `muted` als Startzustand und kein `autoplay` mit Ton. Die
Quelle wird erst gesetzt, wenn die Wiedergabe bewusst gestartet wird oder der
Rahmen im Viewport steht und die Verbindung es zulässt
(`navigator.connection.saveData` wird respektiert).
