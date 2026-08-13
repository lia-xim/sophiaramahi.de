export type LinkItem = { label: string; href: string };

export type Service = {
  slug: string;
  parent: "videografie" | "vj-mapping" | "leistungen";
  title: string;
  eyebrow: string;
  summary: string;
  /** Große Haltungszeile der Landingpage; **…** markiert den Akzentteil. */
  claim: string;
  intro: string;
  outcome: string;
  image: string;
  alt: string;
  deliverables: string[];
  process: string[];
  suitableFor: string[];
  relatedProjects: string[];
  /** Individuelle Vertiefung der Landingpage: drei Facetten des Gewerks. */
  focus: { label: string; title: string; lead: string; items: { title: string; copy: string }[] };
  /** Individuelle Sektionsüberschriften — keine Seite liest sich wie die Kopie einer anderen. */
  scopeTitle: string;
  processTitle: string;
  faqTitle: string;
  faq: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  location?: string;
  summary: string;
  intro: string;
  image: string;
  alt: string;
  gallery: { src: string; alt: string }[];
  roles: string[];
  services: string[];
  sections: { title: string; copy: string[] }[];
  seoDescription: string;
  /* Optionale Ausbaustufen der Projektseite — alles darf fehlen:
     logline ersetzt die summary im Hero, heroPosition richtet das
     Titelbild aus (object-position), video blendet einen eigenen
     Projekt-Player ein. */
  logline?: string;
  heroPosition?: string;
  /** Beschneidet das Titelbild auf sein oberes Drittel — für Motive mit
      eingebranntem Schriftzug, der sonst den Seitentitel doppeln würde. */
  heroCrop?: boolean;
  video?: { src: string; poster?: string; caption?: string };
};

export type Location = {
  slug: string;
  city: string;
  region: string;
  distance: string;
  intro: string;
  localAngle: string;
  logistics: string;
  image: string;
  services: string[];
  faq: { question: string; answer: string }[];
  indexable: boolean;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  publishedAt: string;
  sections: { title: string; copy: string[] }[];
  related: LinkItem[];
};

export const site = {
  name: "Sophia Ramahi",
  domain: "sophiaramahi.de",
  url: "https://sophiaramahi.de",
  email: "info@sophiaramahi.de",
  phoneDisplay: "+49 (0) 1520 4153407",
  phoneHref: "+4915204153407",
  address: ["Krippstraße 31", "40229 Düsseldorf"],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/sorasfilms/" },
    { label: "YouTube", href: "https://www.youtube.com/@sorasfilm" },
    { label: "LinkedIn", href: "https://de.linkedin.com/in/sophia-ramahi-221194243" },
  ] satisfies LinkItem[],
};

export const services: Service[] = [
  {
    slug: "eventfilm",
    parent: "videografie",
    title: "Eventfilm",
    eyebrow: "Atmosphäre dokumentieren",
    summary: "Filme, die nicht nur zeigen, was stattgefunden hat, sondern wie es sich angefühlt hat.",
    claim: "Ein Abend hat hundert Momente. **Der Film entscheidet, welche bleiben.**",
    intro: "Bei Konzerten, Festivals, Kulturveranstaltungen und Unternehmensformaten entstehen viele starke Momente gleichzeitig. Ein Eventfilm braucht deshalb eine klare Vorbereitung und eine Kamera, die nah dran ist, ohne das Geschehen zu stören.",
    outcome: "Das Ergebnis kann als kompakter Highlightfilm, ausführlichere Dokumentation oder als Paket aus Hauptfilm und kurzen Social-Clips geplant werden.",
    image: "/media/spektra-buehne-03.jpg",
    alt: "Bühnenlicht und Publikum bei einer Veranstaltung",
    deliverables: ["Highlightfilm oder Event-Dokumentation", "Hoch- und Querformate", "Schnitt, Farbgestaltung und Tonmischung", "Optional: kurze Social-Clips"],
    process: ["Ablauf und Schlüsselmomente klären", "Dreh mit abgestimmter Präsenz", "Material sichten und dramaturgisch ordnen", "Korrekturrunde und finale Ausspielung"],
    suitableFor: ["Kulturveranstaltungen", "Konzerte und Festivals", "Premieren und Ausstellungen", "Unternehmens- und Community-Events"],
    relatedProjects: ["spektra-festival", "24h-to-take"],
    focus: {
      label: "Formate",
      title: "Ein Abend, drei mögliche Filme",
      lead: "Vor dem Dreh wird entschieden, welche Form das Ergebnis braucht — denn davon hängen Kamerapositionen, Tonwege und Schnittaufwand ab.",
      items: [
        { title: "Highlightfilm", copy: "Verdichtet die Veranstaltung auf ihre stärksten Momente: Stimmung, Gesichter, Höhepunkte. Der Film, der geteilt wird und zur nächsten Ausgabe einlädt." },
        { title: "Dokumentation", copy: "Folgt dem Ablauf ausführlicher — Programmpunkte, Reden, Stimmen. Für alle, die zeigen müssen, was tatsächlich stattgefunden hat: Förderer, Partner, Archiv." },
        { title: "Hauptfilm plus Social-Clips", copy: "Ein Paket aus beidem Denken: der Film für das Ganze, dazu kurze Hoch- und Querformate für die Kanäle. Die wichtigsten Motive werden dafür schon beim Dreh mitgedacht." },
      ],
    },
    scopeTitle: "Was vom Abend bleibt",
    processTitle: "Vom Ablaufplan bis zur Ausspielung",
    faqTitle: "Häufige Fragen zum Eventfilm",
    faq: [
      { question: "Wie früh sollte ein Eventfilm angefragt werden?", answer: "Sobald Termin, Ort und grober Ablauf stehen. Bei kleinen Produktionen können auch kurzfristigere Anfragen funktionieren; mehrere Kameras, Tonwege oder besondere Zugänge brauchen mehr Vorlauf." },
      { question: "Ist eine zweite Kamera möglich?", answer: "Ja. Je nach Ablauf arbeitet Sophia allein oder stellt gemeinsam mit dem Auftraggeber ein passendes Team zusammen." },
      { question: "Entstehen auch Hochformate?", answer: "Ja. Die wichtigsten Motive werden dafür schon beim Dreh mitgedacht, statt später nur aus einem Querformat herausgeschnitten zu werden." },
      { question: "Wann ist der fertige Film da?", answer: "Der Zeitrahmen wird vor dem Dreh festgelegt und hängt von Umfang und Korrekturrunden ab. Gibt es einen festen Termin — etwa eine Nachberichterstattung oder einen Fördernachweis — wird der Schnittplan daran ausgerichtet." },
      { question: "Wird der Ton der Veranstaltung mit aufgenommen?", answer: "Ja, und zwar geplant: Reden und Statements brauchen andere Tonwege als die Atmosphäre im Raum. Ob ein Abgriff am Mischpult oder eine eigene Mikrofonierung sinnvoll ist, wird vor der Veranstaltung geklärt." },
      { question: "Was sollte der Veranstalter vorbereiten?", answer: "Ein Ablaufplan, eine erreichbare Ansprechperson am Veranstaltungstag und Klarheit über Zugänge reichen meist aus. Alles Weitere — Positionen, Zeitfenster, Schlüsselmomente — wird im Vorgespräch gemeinsam festgelegt." },
    ],
    seoTitle: "Eventfilm Düsseldorf & NRW | Sophia Ramahi",
    seoDescription: "Eventfilm aus Düsseldorf für Kultur, Musik, Festivals und Unternehmensformate. Planung, Kamera, Ton und Postproduktion aus einer Hand.",
  },
  {
    slug: "musikvideo",
    parent: "videografie",
    title: "Musikvideo",
    eyebrow: "Bildsprache für Musik",
    summary: "Konzept, Kamera und Schnitt für Musikvideos mit eigener Stimmung statt austauschbarer Performancebilder.",
    claim: "Erst kommt der Song. **Dann die Bilder.**",
    intro: "Ein Musikvideo beginnt nicht mit einer Shotlist, sondern mit dem Stück. Rhythmus, Text, Sound und vorhandene visuelle Ideen bestimmen, ob eine Performance, eine kleine Erzählung oder ein experimenteller Ansatz trägt.",
    outcome: "Sophia entwickelt den visuellen Rahmen gemeinsam mit den Künstlerinnen und Künstlern und führt ihn vom Konzept über den Dreh bis zum finalen Schnitt fort.",
    image: "/media/club-projektion-02.jpg",
    alt: "Musikerin im farbigen Bühnenlicht",
    deliverables: ["Visuelles Konzept und Moodboard", "Kamera und Lichtgestaltung", "Schnitt und Farblook", "Teaser oder vertikale Ausschnitte"],
    process: ["Song und Referenzen besprechen", "Konzept auf Budget und Ort zuschneiden", "Dreh und Bildgestaltung", "Schnitt im Rhythmus des Stücks"],
    suitableFor: ["Singles und EP-Releases", "Live-Sessions", "Performancevideos", "Experimentelle Musikprojekte"],
    relatedProjects: ["electric-lights", "dark-lights"],
    focus: {
      label: "Ansätze",
      title: "Drei Wege, die ein Video nehmen kann",
      lead: "Welcher Ansatz trägt, entscheidet das Stück — nicht der Trend. Oft liegt die Antwort in einer Mischung.",
      items: [
        { title: "Performance", copy: "Die Künstlerin oder der Künstler im Mittelpunkt, getragen von Ort, Licht und Kamerabewegung. Funktioniert, wenn Präsenz und Lichtkonzept präzise gebaut sind." },
        { title: "Erzählung", copy: "Eine kleine Geschichte neben dem Text: Figuren, ein Ort, eine Spannung. Braucht ein Konzept, das mit dem Budget ehrlich umgeht — weniger Motive, mehr Wirkung." },
        { title: "Experiment", copy: "Texturen, Projektionen, Doppelbelichtungen, Licht als Material. Der richtige Weg, wenn der Sound eine eigene visuelle Sprache verlangt statt einer Handlung." },
      ],
    },
    scopeTitle: "Was zum Release fertig ist",
    processTitle: "Vom Song bis zum fertigen Video",
    faqTitle: "Häufige Fragen zum Musikvideo",
    faq: [
      { question: "Kann ein Musikvideo mit kleinem Budget funktionieren?", answer: "Ja, wenn die Idee den Rahmen ernst nimmt. Ein starker Ort, ein durchdachtes Lichtkonzept oder eine präzise Performance kann sinnvoller sein als viele Motive ohne klare Funktion." },
      { question: "Hilft Sophia bei der Konzeptentwicklung?", answer: "Ja. Vorhandene Ideen können gemeinsam verdichtet oder von Grund auf aus dem Song entwickelt werden." },
      { question: "Wie viel Vorlauf braucht ein Musikvideo?", answer: "Genug, um Konzept, Ort und Licht ernsthaft vorzubereiten — gerade bei kleinen Budgets liegt dort die Qualität. Steht ein Release-Termin, wird von ihm aus rückwärts geplant." },
      { question: "Entstehen auch vertikale Versionen für Reels und TikTok?", answer: "Ja. Teaser und vertikale Ausschnitte werden beim Dreh mitgedacht, damit das zentrale Motiv im Hochformat genug Raum hat, statt später nur beschnitten zu werden." },
      { question: "Was passiert im ersten Gespräch?", answer: "Das Stück anhören, vorhandene Ideen und Referenzen sortieren, den realistischen Rahmen abstecken. Danach gibt es eine konzeptionelle Richtung, über die entschieden werden kann." },
      { question: "Muss die Band nach Düsseldorf kommen?", answer: "Nein. Gedreht wird dort, wo Ort und Konzept zusammenpassen — in Düsseldorf, in ganz NRW, nach Absprache auch darüber hinaus." },
    ],
    seoTitle: "Musikvideo in Düsseldorf produzieren | Sophia Ramahi",
    seoDescription: "Musikvideo-Produktion in Düsseldorf und NRW: Konzept, Kamera, Licht, Schnitt und Farbgestaltung für Artists, Bands und Kulturprojekte.",
  },
  {
    slug: "imagefilm",
    parent: "videografie",
    title: "Imagefilm & Porträt",
    eyebrow: "Arbeit verständlich machen",
    summary: "Nahbare Filme für Organisationen, Selbstständige und ausgewählte Marken, die etwas Konkretes zu erzählen haben.",
    claim: "Keine großen Behauptungen. **Einfach zeigen, wie gearbeitet wird.**",
    intro: "Ein guter Imagefilm braucht keine großen Behauptungen. Er zeigt Menschen bei ihrer Arbeit, erklärt einen Ablauf oder macht eine Haltung sichtbar. Entscheidend ist, welche Geschichte Kundinnen, Bewerber oder Partner nach dem Film verstanden haben sollen.",
    outcome: "Daraus entsteht ein konzentrierter Film, der auf der Website ebenso funktioniert wie in Präsentationen oder in angepassten Social-Versionen.",
    image: "/media/set-quer-01.jpg",
    alt: "Kamera am Set einer Videoproduktion",
    deliverables: ["Konzept und Interviewleitfaden", "Dreh vor Ort", "Schnitt, Musik und Tonmischung", "Untertitel und Formatvarianten"],
    process: ["Zielgruppe und Kernbotschaft festlegen", "Protagonisten und Drehorte vorbereiten", "Dreh mit kleinem, ruhigem Setup", "Schnitt mit nachvollziehbarer Dramaturgie"],
    suitableFor: ["Kultureinrichtungen", "Kreative Unternehmen", "Vereine und Initiativen", "Persönliche Unternehmensporträts"],
    relatedProjects: ["24h-to-take"],
    focus: {
      label: "Blickwinkel",
      title: "Drei Wege, Arbeit sichtbar zu machen",
      lead: "Ein Imagefilm behauptet nichts — er zeigt. Welcher Blickwinkel trägt, hängt davon ab, was Kundinnen, Bewerber oder Partner nach dem Film verstanden haben sollen.",
      items: [
        { title: "Menschen", copy: "Wer hier arbeitet und warum. Gespräche werden so geführt, dass keine auswendig gelernten Sätze entstehen — Nähe statt Werbesprech." },
        { title: "Abläufe", copy: "Wie etwas entsteht, Schritt für Schritt. Stark für erklärungsbedürftige Arbeit: Nach dem Film versteht man, was vorher abstrakt war." },
        { title: "Haltung", copy: "Wofür eine Organisation steht — sichtbar gemacht an konkreten Situationen statt an Leitbild-Sätzen. Der anspruchsvollste und wirksamste Weg." },
      ],
    },
    scopeTitle: "Was am Ende erzählt ist",
    processTitle: "Von der Kernbotschaft bis zum Film",
    faqTitle: "Häufige Fragen zum Imagefilm",
    faq: [
      { question: "Müssen Mitarbeitende vor der Kamera geübt sein?", answer: "Nein. Gespräche werden so vorbereitet und geführt, dass keine auswendig gelernten Sätze nötig sind." },
      { question: "Kann vorhandenes Material eingebaut werden?", answer: "Ja, sofern Qualität und Nutzungsrechte passen. Vorab wird geprüft, welche Aufnahmen den Film wirklich ergänzen." },
      { question: "Wie lang sollte ein Imagefilm sein?", answer: "So lang, wie die Geschichte trägt. Die Verwendung entscheidet mit: Auf der Website funktioniert konzentriert, in Präsentationen darf es ausführlicher sein, für Social entstehen angepasste Versionen." },
      { question: "Wie viel Zeit kostet der Dreh das Team?", answer: "Weniger, als meist befürchtet wird. Interviews werden vorbereitet und in abgestimmte Zeitfenster gelegt, das Setup bleibt klein und ruhig — der Betrieb läuft weiter." },
      { question: "Funktioniert ein Imagefilm auch ohne Interviews?", answer: "Ja. Gesprochene O-Töne sind ein Mittel, keine Pflicht. Manche Geschichten erzählen sich über Bilder, Geräusche und wenige eingeblendete Sätze klarer." },
      { question: "Reicht ein Drehtag?", answer: "Das hängt von Motiven, Orten und Protagonisten ab. Der Umfang wird im Konzept ehrlich festgelegt — lieber ein konzentrierter Tag mit Plan als zwei ohne." },
    ],
    seoTitle: "Imagefilm Düsseldorf | Persönlich und präzise produziert",
    seoDescription: "Imagefilm und Unternehmensporträt aus Düsseldorf: Konzeption, Interviews, Kamera und Postproduktion für glaubwürdige Geschichten.",
  },
  {
    slug: "kamera-bildgestaltung",
    parent: "videografie",
    title: "Kamera & Bildgestaltung",
    eyebrow: "Für Produktionsteams",
    summary: "Buchbare Kamerafrau für Drehs, bei denen Bildsprache, Licht und zuverlässige Zusammenarbeit zusammengehören.",
    claim: "Ein Briefing ist Papier. **Die Kamera macht Bilder daraus.**",
    intro: "Nicht jedes Projekt braucht eine komplette Produktion. Sophia kann als Kamerafrau und Mediengestalterin in bestehende Teams einsteigen, Briefings in konkrete Bilder übersetzen und sich in vorbereitete technische Abläufe einfügen.",
    outcome: "Vor dem Dreh werden Bildsprache, Format, Technik, Licht und Datenübergabe geklärt. So bleibt am Set mehr Raum für das Motiv.",
    image: "/media/set-hoch-02.jpg",
    alt: "Kameraarbeit an einem Filmset",
    deliverables: ["Kameraarbeit im bestehenden Team", "Bild- und Lichtkonzept", "Technische Vorbereitung", "Geordnete Datenübergabe"],
    process: ["Briefing und Referenzen prüfen", "Technik und Schnittstellen abstimmen", "Dreh im Team", "Saubere Übergabe an Postproduktion oder DIT"],
    suitableFor: ["Agenturproduktionen", "Kultur- und Musikdrehs", "Interviews und Reportage", "Kleine narrative Produktionen"],
    relatedProjects: ["electric-lights", "spektra-festival"],
    focus: {
      label: "Zusammenarbeit",
      title: "Vor dem Dreh, am Set, danach",
      lead: "Eine gebuchte Kamera ist nur so gut wie ihre Schnittstellen. Deshalb wird die Zusammenarbeit in drei Phasen gedacht.",
      items: [
        { title: "Vor dem Dreh", copy: "Bildsprache, Format, Optiken, Licht und Datenworkflow werden mit Regie oder Produktion geklärt — bevor die erste Klappe fällt." },
        { title: "Am Set", copy: "Einfügen statt auffallen: Briefings werden in Bilder übersetzt, Absprachen mit Licht und Ton gehalten, Entscheidungen im Sinne des Projekts getroffen." },
        { title: "Nach dem Dreh", copy: "Geordnete, dokumentierte Datenübergabe an DIT oder Postproduktion — benannt, gesichert, nachvollziehbar." },
      ],
    },
    scopeTitle: "Was das Team bekommt",
    processTitle: "Vom Briefing bis zur Datenübergabe",
    faqTitle: "Häufige Fragen zur Kamerabuchung",
    faq: [
      { question: "Kann Sophia vorhandene Technik nutzen?", answer: "Ja. Vorab werden Kamerasystem, Optiken, Tonwege und Datenworkflow abgestimmt." },
      { question: "Ist die Buchung außerhalb von Düsseldorf möglich?", answer: "Ja. Produktionen in NRW sind regulär möglich, weitere Orte nach Absprache." },
      { question: "Arbeitet Sophia auch als zweite Kamera?", answer: "Ja. Je nach Projekt als einzige Kamera oder als Teil eines Mehrkamera-Setups — wichtig ist eine klare Absprache über Positionen und Bildsprache." },
      { question: "Bringt Sophia ein eigenes Licht- und Bildkonzept mit?", answer: "Wenn das Projekt es braucht, ja. Bei bestehenden Konzepten gilt das Gegenteil: verstehen, übernehmen, präzise umsetzen." },
      { question: "Wie läuft die Datenübergabe?", answer: "Nach dem vorab abgestimmten Workflow: Karten gesichert, Material strukturiert benannt, Übergabe an DIT oder Schnitt dokumentiert — keine losen Festplatten ohne Absprache." },
      { question: "Deckt eine Kamerabuchung auch den Ton ab?", answer: "In kleinen Setups kann Sophia als Mediengestalterin Bild und Ton beides verantworten. Sobald mehrere Tonwege oder Live-Mischungen gebraucht werden, gehört ein eigener Tonposten in die Planung." },
    ],
    seoTitle: "Kamerafrau Düsseldorf & NRW | Sophia Ramahi",
    seoDescription: "Kamerafrau und Mediengestalterin Bild und Ton für Produktionsteams in Düsseldorf und NRW. Bildgestaltung, Licht und technische Vorbereitung.",
  },
  {
    slug: "tonaufnahme",
    parent: "videografie",
    title: "Tonaufnahme am Set",
    eyebrow: "Sprache und Atmosphäre",
    summary: "Sauber geplanter Originalton für Interviews, dokumentarische Situationen und kleine Produktionen.",
    claim: "Ton wird nicht im Schnitt repariert. **Er wird am Set entschieden.**",
    intro: "Ton ist nicht die Reparaturphase nach dem Dreh. Raum, Mikrofonierung, Umgebung und Bewegungsfreiheit müssen vorher zusammen gedacht werden. Als ausgebildete Mediengestalterin Bild und Ton kann Sophia beides in kleinen Setups verbinden.",
    outcome: "Je nach Produktion übernimmt sie den Ton selbst oder plant einen eigenen Tonposten ein, wenn Umfang und Verantwortung das erfordern.",
    image: "/media/light-void.jpg",
    alt: "Fast schwarzer Raum mit schmalem kühlem Lichtspalt",
    deliverables: ["Mikrofonierung kleiner Setups", "Interview- und Atmoaufnahme", "Synchronisierte Übergabe", "Grundlegende Tonbearbeitung"],
    process: ["Raum und Motiv einschätzen", "Mikrofonierung festlegen", "Pegel und Störquellen kontrollieren", "Material sichern und dokumentieren"],
    suitableFor: ["Interviews", "Event-Statements", "Kleine Dokumentationen", "Kompakte One-Person-Produktionen"],
    relatedProjects: ["electric-lights"],
    focus: {
      label: "Ebenen",
      title: "Sprache, Raum und die ehrliche Grenze",
      lead: "Guter Originalton entsteht aus der richtigen Trennung: Jede Ebene hat eine eigene Aufgabe — und eigene Anforderungen.",
      items: [
        { title: "Sprache", copy: "Interviews und Statements brauchen Nähe und Verständlichkeit. Mikrofonposition und ein ruhiges Zeitfenster entscheiden mehr als jedes Werkzeug im Schnitt." },
        { title: "Atmosphäre", copy: "Der Klang eines Raums, einer Straße, eines Abends. Atmo braucht Abstand und Ruhe — beides wird eingeplant, nicht dem Zufall überlassen." },
        { title: "Die Grenze", copy: "Mehrere Funkstrecken, Live-Mischung, hohe Ausfallsicherheit: Dann wird ein eigener Tonposten besetzt, statt die Qualität zu verwässern." },
      ],
    },
    scopeTitle: "Was sauber aufgenommen ist",
    processTitle: "Vom Raumcheck bis zum gesicherten Ton",
    faqTitle: "Häufige Fragen zur Tonaufnahme",
    faq: [
      { question: "Wann braucht ein Projekt eine eigene Tonperson?", answer: "Wenn mehrere Funkstrecken, komplexe Bewegungen, Live-Mischungen oder hohe Ausfallsicherheit gleichzeitig verlangt werden. Dann wird die Position separat besetzt." },
      { question: "Übernimmt Sophia auch reine Tonaufnahmen ohne Kamera?", answer: "In kompakten Setups ja — etwa für Interviews oder Statements. Ob das sinnvoll ist, zeigt ein kurzer Blick auf Umfang und Verantwortung des Projekts." },
      { question: "Kann der Ton vom Mischpult abgegriffen werden?", answer: "Bei Veranstaltungen ist das oft der beste Weg. Ob ein Signalweg zur Verfügung steht, wird vorab mit der Technik geklärt — inklusive Absicherung über eigene Mikrofone." },
      { question: "Was passiert an lauten Drehorten?", answer: "Erst einschätzen, dann drehen: Störquellen, Positionen und Zeitfenster werden vor Ort geprüft. Was am Set unverständlich aufgenommen wurde, rettet auch der Schnitt nicht." },
      { question: "Wird das Material bearbeitet übergeben?", answer: "Eine grundlegende Tonbearbeitung gehört dazu: gesichert, synchronisiert, dokumentiert. Aufwendige Mischungen werden als eigener Schritt in der Postproduktion geplant." },
    ],
    seoTitle: "Tonaufnahme am Set in Düsseldorf | Sophia Ramahi",
    seoDescription: "Tonaufnahme für Interviews, Events und kleine Videoproduktionen in Düsseldorf und NRW – geplant zusammen mit Kamera und Bildgestaltung.",
  },
  {
    slug: "live-visuals",
    parent: "vj-mapping",
    title: "VJ & Live Visuals",
    eyebrow: "Bilder, die live reagieren",
    summary: "Live gemischte Visuals für Konzerte, Clubs, Festivals und performative Formate.",
    claim: "Kein Loop in Endlosschleife. **Bilder, die auf den Raum reagieren.**",
    intro: "Live Visuals sind kein Hintergrundvideo in Endlosschleife. Material, Rhythmus, Raum und Licht reagieren aufeinander. Dafür entwickelt Sophia visuelle Loops, kombiniert vorhandenes Material und mischt die Bildwelten live.",
    outcome: "Der Umfang reicht von einem kompakten VJ-Set bis zu einer abgestimmten Bilddramaturgie für einen ganzen Abend.",
    image: "/media/club-projektion-01.jpg",
    alt: "Live Visuals auf einer Bühne",
    deliverables: ["Visuelles Konzept", "Eigene Loops und Materialaufbereitung", "Live-Mixing", "Abstimmung mit Licht und Bühne"],
    process: ["Musik und Ablauf verstehen", "Flächen und Technik prüfen", "Material vorbereiten und testen", "Live spielen und auf den Raum reagieren"],
    suitableFor: ["Konzerte", "Clubnächte", "Festivals", "Performances und Installationen"],
    relatedProjects: ["spektra-festival", "dark-lights"],
    focus: {
      label: "Bausteine",
      title: "Woraus ein Set gebaut ist",
      lead: "Ein VJ-Set ist vorbereitete Freiheit: genug Material, um zu reagieren — genug Struktur, um den Abend zu tragen.",
      items: [
        { title: "Material", copy: "Eigene Loops, aufbereitetes Bestandsmaterial, gestaltete Texturen — geprüft auf Format, Rechte und visuelle Anschlussfähigkeit." },
        { title: "Raum", copy: "Flächen, Projektoren, Signalwege und das vorhandene Licht bestimmen, was funktioniert. Deshalb wird der Ort vor dem Abend geprüft, nicht währenddessen." },
        { title: "Live", copy: "Gemischt wird in Echtzeit: auf die Musik, auf den Raum, auf den Moment. Genau das unterscheidet ein Set von einem Video in Dauerschleife." },
      ],
    },
    scopeTitle: "Was auf die Flächen kommt",
    processTitle: "Vom Ablauf bis zum Live-Set",
    faqTitle: "Häufige Fragen zu Live Visuals",
    faq: [
      { question: "Wird vorhandenes Videomaterial genutzt?", answer: "Das ist möglich. Es wird vorab auf Format, Rechte, Auflösung und visuelle Anschlussfähigkeit geprüft." },
      { question: "Welche Technik muss der Veranstaltungsort stellen?", answer: "Projektionsflächen, Signalwege und Abspieltechnik werden projektbezogen geklärt. Eine pauschale Technikliste wäre unseriös." },
      { question: "Wie früh sollte ein VJ-Set angefragt werden?", answer: "Sobald Ort und Termin stehen. Flächen, Signalwege und Materialvorbereitung brauchen Vorlauf — je besonderer der Raum, desto mehr." },
      { question: "Kann das Set einen ganzen Abend tragen?", answer: "Ja. Vom kompakten Set bis zur Bilddramaturgie für einen ganzen Abend mit mehreren Acts — der Umfang wird am Ablauf des Abends festgemacht." },
      { question: "Wie eng wird mit Licht und Bühne zusammengearbeitet?", answer: "Eng. Visuals, Licht und Bühnenbild teilen sich denselben Raum — die Abstimmung gehört zum Umfang, damit keine Ebene die andere überstrahlt." },
      { question: "Entsteht das Material speziell für den Anlass?", answer: "Ein Teil meist ja: eigene Loops und Texturen, die zum Charakter des Abends passen. Kombiniert wird mit geprüftem Bestandsmaterial, wo es das Konzept stärkt." },
    ],
    seoTitle: "VJ & Live Visuals Düsseldorf | Sophia Ramahi",
    seoDescription: "VJ und Live Visuals aus Düsseldorf für Konzerte, Clubs, Festivals und Performances. Konzept, Material und Live-Mixing.",
  },
  {
    slug: "projection-mapping",
    parent: "vj-mapping",
    title: "Projection Mapping",
    eyebrow: "Bilder für reale Flächen",
    summary: "Projektionen, die Architektur, Bühnenbild oder Objekte als Teil der Gestaltung behandeln.",
    claim: "Die Fläche ist keine Leinwand. **Sie ist Teil des Bildes.**",
    intro: "Beim Projection Mapping bestimmt die Fläche das Bild. Maße, Blickwinkel, Helligkeit, Projektorposition und Umgebungslicht sind Teil des Konzepts. Erst danach lohnt sich die Gestaltung des Materials.",
    outcome: "Sophia entwickelt visuelle Inhalte, testet die Abbildung auf dem realen Objekt und stimmt die Zuspielung mit der Veranstaltungstechnik ab.",
    image: "/media/spektra-detail-03.jpg",
    alt: "Geometrische Projektion auf einer Bühnenfläche",
    deliverables: ["Flächen- und Machbarkeitsprüfung", "Mapping-Layout", "Visuelle Inhalte", "Einrichtung und Probelauf"],
    process: ["Ort und Fläche vermessen", "Technische Machbarkeit klären", "Inhalte auf die Geometrie gestalten", "Vor Ort einrichten und korrigieren"],
    suitableFor: ["Festivalbühnen", "Ausstellungen", "Kunstinstallationen", "Marken- und Kulturveranstaltungen"],
    relatedProjects: ["spektra-festival", "electric-lights"],
    focus: {
      label: "Machbarkeit",
      title: "Erst die Fläche, dann das Bild",
      lead: "Mapping scheitert selten an Ideen — eher an Helligkeit, Abstand und Oberfläche. Deshalb steht die Machbarkeit am Anfang, nicht am Ende.",
      items: [
        { title: "Die Fläche", copy: "Maße, Material, Farbe und Winkel verändern die Projektion. Eine weiße, ebene Wand verhält sich anders als Stoff, Architektur oder ein Objekt." },
        { title: "Das Licht", copy: "Umgebungslicht ist eine reale Grenze: Projektorleistung, Abstand und Raumhelligkeit entscheiden, ob das Bild trägt — das wird vor der Gestaltung geklärt." },
        { title: "Der Probelauf", copy: "Mindestens ein Test auf der realen Fläche gehört zum Umfang. Die letzte Korrektur passiert beim Aufbau — nicht vor Publikum." },
      ],
    },
    scopeTitle: "Was auf der Fläche entsteht",
    processTitle: "Von der Fläche bis zum Probelauf",
    faqTitle: "Häufige Fragen zum Mapping",
    faq: [
      { question: "Kann Projection Mapping überall eingesetzt werden?", answer: "Nein. Helligkeit, Projektionsabstand, Oberfläche und Publikumswege setzen reale Grenzen. Eine frühe Ortsprüfung spart später Aufwand." },
      { question: "Wird der Projektor mitgebracht?", answer: "Das hängt von Größe und Ort ab. Häufig kommt die passende Projektionstechnik über den Veranstaltungsort oder einen Verleih." },
      { question: "Welche Angaben helfen bei der ersten Einschätzung?", answer: "Ort, Anlass, Termin und — falls vorhanden — Fotos oder Maße der Fläche. Damit lässt sich die Machbarkeit oft schon grob einschätzen, bevor jemand anreist." },
      { question: "Funktioniert Mapping auch im Freien?", answer: "Ja, wenn das Umgebungslicht mitspielt — meist in den Abend- und Nachtstunden. Helligkeit, Wetterschutz und Stromwege werden bei der Ortsprüfung geklärt." },
      { question: "Lässt sich Mapping mit Live Visuals kombinieren?", answer: "Ja, die Kombination ist naheliegend: gemappte Flächen als Bühne, live gemischte Inhalte darauf. Beim Spektra Festival sind beide Ebenen zusammengekommen." },
    ],
    seoTitle: "Projection Mapping Düsseldorf & NRW | Sophia Ramahi",
    seoDescription: "Projection Mapping und visuelle Installationen in Düsseldorf und NRW: Flächenkonzept, Content, Einrichtung und technische Abstimmung.",
  },
  {
    slug: "postproduktion",
    parent: "leistungen",
    title: "Postproduktion",
    eyebrow: "Schnitt, Farbe und Ton",
    summary: "Postproduktion, die Material ordnet, Rhythmus findet und Bild und Ton zu einem fertigen Film verbindet.",
    claim: "Gedreht ist schnell. **Erzählt wird im Schnitt.**",
    intro: "Im Schnitt entscheidet sich, welche Geschichte das gedrehte Material tatsächlich erzählt. Sophia übernimmt Postproduktion für eigene Drehs und ausgewählte Fremdproduktionen – von der Materialsichtung bis zu den finalen Formaten.",
    outcome: "Der Ablauf wird vorab klar begrenzt: Materialmenge, gewünschte Länge, Ausspielungen, Korrekturrunden und Übergabeformat.",
    image: "/media/journal-02.jpg",
    alt: "Postproduktion eines Videoprojekts",
    deliverables: ["Materialsichtung und Rohschnitt", "Feinschnitt und Dramaturgie", "Farbgestaltung", "Tonbearbeitung, Untertitel und Exporte"],
    process: ["Material und Ziel prüfen", "Rohschnitt abstimmen", "Feinschnitt, Farbe und Ton", "Freigabe und Masterexport"],
    suitableFor: ["Event- und Musikproduktionen", "Interviews", "Social-Versionen", "Bereits gedrehtes Fremdmaterial"],
    relatedProjects: ["electric-lights", "24h-to-take"],
    focus: {
      label: "Rahmen",
      title: "Ein Schnitt mit klaren Grenzen",
      lead: "Postproduktion wird dann zäh, wenn niemand den Rahmen setzt. Deshalb werden drei Dinge vor dem ersten Schnitt festgelegt.",
      items: [
        { title: "Material und Ziel", copy: "Wie viel Material existiert, was soll es erzählen, wie lang darf es werden? Diese Antworten bestimmen den realistischen Aufwand." },
        { title: "Korrekturrunden", copy: "Ihre Anzahl steht im Angebot. Feedback wird gesammelt und konkret auf einen Stand gegeben — so bleibt jede Runde ein echter Schritt nach vorn." },
        { title: "Übergabe", copy: "Master, Formatvarianten, Untertitel, Archiv: Was am Ende geliefert wird, ist vorher definiert — keine Überraschungen beim Export." },
      ],
    },
    scopeTitle: "Was aus dem Material wird",
    processTitle: "Von der Sichtung bis zum Master",
    faqTitle: "Häufige Fragen zur Postproduktion",
    faq: [
      { question: "Kann Sophia nur den Schnitt übernehmen?", answer: "Ja. Dafür müssen Material, Ton, Rechte und technische Spezifikationen vorab prüfbar sein." },
      { question: "Wie viele Korrekturrunden sind enthalten?", answer: "Die Anzahl wird im Angebot festgelegt. So bleibt der Umfang für beide Seiten nachvollziehbar." },
      { question: "Welche Formate werden geliefert?", answer: "Die Exporte richten sich nach der Verwendung: Web, Präsentation, Hoch- und Querformate, Untertitel. Das Zielset wird beim Briefing festgelegt." },
      { question: "Was muss angeliefert werden?", answer: "Material, Ton und Rechte müssen prüfbar sein, dazu die technischen Eckdaten und die gewünschte Verwendung. Ein kurzer Blick auf Beispielmaterial klärt Zweifel vor der Beauftragung." },
      { question: "Wie läuft eine Korrekturrunde ab?", answer: "Es gibt einen Stand zum Ansehen, Feedback wird gesammelt und konkret zurückgespielt, dann wird gezielt überarbeitet. Einzelwünsche im Tagestakt zerreiben jede Planung — deshalb der feste Rhythmus." },
      { question: "Wie wird mit sehr viel Material umgegangen?", answer: "Mit einer strukturierten Sichtung zuerst: ordnen, markieren, reduzieren. Erst wenn das Material sortiert ist, beginnt der eigentliche Schnitt — das spart am Ende mehr Zeit, als es kostet." },
    ],
    seoTitle: "Video-Postproduktion Düsseldorf | Schnitt, Farbe & Ton",
    seoDescription: "Video-Postproduktion in Düsseldorf: Materialsichtung, Schnitt, Farbgestaltung, Tonbearbeitung, Untertitel und Exporte.",
  },
];

export const projects: Project[] = [
  {
    slug: "electric-lights",
    title: "Electric Lights",
    category: "Audiovisuelle Installation",
    year: "2023",
    location: "KIT – Kunst im Tunnel, Düsseldorf",
    summary: "Ein Kunstprojekt über Licht, Klang, Erinnerung und den kurzen Zustand zwischen Heimweg und Tagtraum.",
    intro: "Electric Lights entstand im Programm „Was mit Kunst?!“ in Kooperation mit dem KIT – Kunst im Tunnel und der Jungen Filmwerkstatt Düsseldorf. Sophia konzipierte eine audiovisuelle Arbeit, in der Licht und Klang nicht begleiten, sondern gemeinsam erzählen.",
    image: "/media/electric-lights-cover.jpg",
    alt: "Protagonistin von Electric Lights im violetten Licht",
    heroPosition: "center top",
    heroCrop: true,
    gallery: [
      { src: "/media/electric-lights-cover.jpg", alt: "Filmszene in violettem Licht" },
      { src: "/media/light-beams.jpg", alt: "Abstrakte Lichtstrahlen" },
      { src: "/media/light-hero.jpg", alt: "Violette Lichtfläche" },
      { src: "/media/light-void.jpg", alt: "Dunkle Fläche mit violettem Restlicht" },
    ],
    roles: ["Konzept", "Kamera und Lichtgestaltung", "Klang-Komposition", "Schnitt", "Ausstellung"],
    services: ["kamera-bildgestaltung", "tonaufnahme", "postproduktion", "projection-mapping"],
    sections: [
      { title: "Die Idee", copy: ["Ausgangspunkt war die Frage, wie Licht emotional wirken kann, ohne nur dekorativ zu sein. Daraus entwickelte sich die Geschichte einer jungen Frau auf dem Heimweg. Die Eindrücke des Tages kehren als Farben, Klänge und Lichtspiele zurück.", "Die visuelle Richtung verbindet dunkle Science-Fiction-Stimmungen mit vertrauten, beinahe privaten Momenten. Der Film bleibt bewusst zwischen äußerer Realität und innerem Bild."] },
      { title: "Bild und Klang als Einheit", copy: ["Lichtpulse, Farben und Übergänge wurden gemeinsam mit dem Sound entwickelt. So entstand kein Film mit nachträglicher Musik, sondern eine audiovisuelle Arbeit, bei der beide Ebenen voneinander abhängen.", "An dem Projekt wirkten Edda Mia Löhr, Thomas Klein und Konstantin Myrokis mit."] },
    ],
    seoDescription: "Electric Lights: audiovisuelle Installation von Sophia Ramahi über Licht, Klang und Emotion, gezeigt im KIT – Kunst im Tunnel Düsseldorf.",
  },
  {
    slug: "dark-lights",
    title: "Dark Lights",
    category: "Fotografie & Lichtstudie",
    summary: "Eine dunkle Bildserie, die mit wenigen Lichtquellen, Farbe und Nähe arbeitet.",
    intro: "Dark Lights zeigt Körper, Texturen und Gesichter im grünen und violetten Licht. Die Serie arbeitet mit wenigen Lichtquellen, Farbe und Nähe – eine visuelle Studie, die bewusst bei dem bleibt, was das Material zeigt.",
    image: "/media/dark-lights-04.jpg",
    alt: "Porträt in rotem und violettem Licht",
    gallery: [
      { src: "/media/dark-lights-01.jpg", alt: "Porträt im grünen Licht mit glitzernder Textur" },
      { src: "/media/dark-lights-02.jpg", alt: "Liegendes Porträt unter transparenten Stoffbahnen" },
      { src: "/media/dark-lights-03.jpg", alt: "Silhouette hinter blau angestrahltem Stoff" },
      { src: "/media/dark-lights-04.jpg", alt: "Porträt in rotem und violettem Licht" },
    ],
    roles: ["Bildidee", "Lichtgestaltung", "Fotografie"],
    services: ["kamera-bildgestaltung", "live-visuals"],
    sections: [
      { title: "Reduktion statt Kulisse", copy: ["Die Bilder gewinnen ihre Wirkung nicht aus einem großen Set. Entscheidend sind Richtung und Farbe des Lichts, der Ausschnitt und die Nähe zur Person.", "Dark Lights bleibt deshalb als kurze, konzentrierte Serie lesbar – jedes Bild trägt allein, ohne Erklärung und ohne Kulisse."] },
    ],
    seoDescription: "Dark Lights ist eine fotografische Lichtstudie von Sophia Ramahi mit Farbe, Projektion und reduzierter Bildgestaltung.",
  },
  {
    slug: "24h-to-take",
    title: "24h to take",
    category: "Kurzfilmwettbewerb & Organisation",
    year: "2019–2022",
    location: "Junge Filmwerkstatt Düsseldorf",
    summary: "Vierundzwanzig Stunden für Idee, Dreh und Schnitt – und mehrere Jahre Mitarbeit hinter den Kulissen.",
    intro: "Beim Kurzfilmwettbewerb 24h to take wurden Titel und drei verbindliche Gegenstände veröffentlicht. Teams hatten anschließend 24 Stunden Zeit für einen Film von höchstens fünf Minuten. Sophia war seit 2019 als Teilnehmerin und in der Organisation beteiligt.",
    image: "/media/team.jpg",
    alt: "Team bei einer Filmproduktion",
    gallery: [
      { src: "/media/team.jpg", alt: "Filmteam bei 24h to take" },
      { src: "/media/set-quer-01.jpg", alt: "Kamera am Set" },
      { src: "/media/set-hoch-02.jpg", alt: "Blick hinter die Kamera" },
    ],
    roles: ["Teilnahme am Wettbewerb", "Design und Social Media", "Technikaufbau und -verleih", "Livestream-Support", "Jury"],
    services: ["eventfilm", "kamera-bildgestaltung", "postproduktion"],
    sections: [
      { title: "Arbeiten unter Zeitdruck", copy: ["Als Teilnehmerin plante, filmte und schnitt Sophia gemeinsam mit einem Team bis zur letzten Minute. Wetter, Technik und knappe Entscheidungen gehörten zum Format – und mussten innerhalb des gesetzten Rahmens gelöst werden."] },
      { title: "Mehr als der eigene Film", copy: ["In der Organisation arbeitete Sophia zunächst an Design und Social-Media-Kommunikation. Später kamen Technikaufbau, Verleih, Livestream-Bedienung und die Mitarbeit in der Jury hinzu. Dadurch verbindet das Projekt praktische Produktion mit Veranstaltungsorganisation."] },
    ],
    seoDescription: "24h to take: Sophias Arbeit als Teilnehmerin, Organisatorin, Technik-Support und Jurymitglied beim Kurzfilmwettbewerb der Jungen Filmwerkstatt Düsseldorf.",
  },
  {
    slug: "spektra-festival",
    title: "Spektra Festival",
    category: "Live Visuals & Festival",
    summary: "Projektionen, Bühne und Live-Momente als zusammenhängende visuelle Fläche.",
    intro: "Das Spektra-Material dokumentiert Aufbau, Masken, Projektionen, Musiker und die fertige Bühne – den ganzen Weg vom technischen Aufbau bis zur laufenden Veranstaltung.",
    image: "/media/spektra-buehne-01.jpg",
    alt: "Bühne des Spektra Festivals mit Projektionen",
    gallery: [
      { src: "/media/spektra-buehne-02.jpg", alt: "Live-Musik vor projizierten Flächen" },
      { src: "/media/spektra-maske.jpg", alt: "Gestaltete Maske im Spektra-Projekt" },
      { src: "/media/spektra-aufbau.jpg", alt: "Aufbau der Projektionstechnik" },
      { src: "/media/spektra-detail-01.jpg", alt: "Detail einer Projektion" },
      { src: "/media/spektra-buehne-05.jpg", alt: "Bühnenansicht mit Licht und Musikern" },
      { src: "/media/spektra-set-hoch.jpg", alt: "Technik und Kamera am Set" },
      { src: "/media/spektra-buehne-04.jpg", alt: "Projizierte Fläche über der Bühne" },
      { src: "/media/spektra-detail-02.jpg", alt: "Nahaufnahme einer Projektionsfläche" },
      { src: "/media/spektra-buehne-06.jpg", alt: "Bühne im violetten Licht" },
    ],
    roles: ["Visuelle Gestaltung", "Live Visuals", "Aufbau und technische Abstimmung", "Dokumentation"],
    services: ["eventfilm", "live-visuals", "projection-mapping"],
    sections: [
      { title: "Die Fläche gehört zur Gestaltung", copy: ["Die Projektionen reagieren auf Bühnenbild, Musiker und vorhandenes Licht. Dadurch entsteht kein isolierter Screen, sondern eine gemeinsame visuelle Umgebung.", "Aufbauaufnahmen und fertige Bühnenbilder stehen bewusst nebeneinander. Sie zeigen, dass Live Visuals ebenso viel technische Vorbereitung wie spontane Reaktion während der Veranstaltung brauchen."] },
    ],
    seoDescription: "Spektra Festival: Live Visuals, Projektion, Aufbau und Festivaldokumentation von Sophia Ramahi.",
  },
];

const locationSeed: Omit<Location, "services" | "faq" | "image" | "indexable">[] = [
  { slug: "duesseldorf", city: "Düsseldorf", region: "Basis", distance: "0 km", intro: "Sophias Basis liegt in Düsseldorf. Vorgespräche, kleine Vorproduktionen und viele Drehs lassen sich dadurch ohne lange Anfahrt planen.", localAngle: "Kulturorte, Musik, freie Szene, Agenturen und Unternehmen liegen hier eng beieinander. Für Drehs innerhalb der Stadt können Besichtigung und Produktion oft getrennt und pragmatisch organisiert werden.", logistics: "Anfahrt innerhalb Düsseldorfs wird im Angebot transparent ausgewiesen. Technik, Park- oder Ladezugang und Drehgenehmigungen werden projektbezogen geprüft." },
  { slug: "koeln", city: "Köln", region: "Rheinland", distance: "ca. 40 km", intro: "Köln ist von Düsseldorf aus gut erreichbar und für Musik-, Kultur-, Event- und Agenturproduktionen ein regelmäßiger Produktionsraum.", localAngle: "Bei Innenstadt-Locations, Messe- oder Studioproduktionen lohnt sich eine frühe Klärung von Ladewegen, Parkmöglichkeiten, Lärm und Zeitfenstern.", logistics: "Die Anfahrt wird ab Düsseldorf kalkuliert. Bei frühen Starts oder mehrtägigen Produktionen werden Zeitplan und mögliche Übernachtung vorab vereinbart." },
  { slug: "neuss", city: "Neuss", region: "Rhein-Kreis Neuss", distance: "ca. 10 km", intro: "Neuss liegt direkt neben Düsseldorf und eignet sich besonders für kompakte Drehs, Unternehmensporträts und Veranstaltungen mit kurzer Anfahrt.", localAngle: "Die Nähe macht auch getrennte Termine für Besichtigung, Interviewvorbereitung und Dreh realistisch, wenn ein Projekt davon profitiert.", logistics: "Kurze Wege ab Düsseldorf; konkrete Anfahrt, Parken und Technikzugang werden mit der Location abgestimmt." },
  { slug: "ratingen", city: "Ratingen", region: "Kreis Mettmann", distance: "ca. 15 km", intro: "Für Produktionen in Ratingen verbindet die Nähe zu Düsseldorf kurze Wege mit vielen Unternehmens- und Veranstaltungsstandorten.", localAngle: "Bei Gewerbe- und Bürostandorten sind Zutritt, Sicherheitsregeln und ungestörte Interviewzeiten meist wichtiger als eine große Crew.", logistics: "Anfahrt und Technikzugang werden vorab geklärt; bei Firmengeländen sollte eine feste Ansprechperson am Drehtag erreichbar sein." },
  { slug: "meerbusch", city: "Meerbusch", region: "Rhein-Kreis Neuss", distance: "ca. 15 km", intro: "Meerbusch ist für persönliche Porträts, kleine Markenproduktionen und private oder kulturelle Veranstaltungen schnell erreichbar.", localAngle: "Ruhige Innenräume und Außenmotive brauchen unterschiedliche Ton- und Lichtkonzepte. Eine kurze Ortsprüfung kann hier besonders sinnvoll sein.", logistics: "Die Produktion startet ab Düsseldorf. Außenaufnahmen werden mit Wetteroption und zeitlichem Puffer geplant." },
  { slug: "krefeld", city: "Krefeld", region: "Niederrhein", distance: "ca. 30 km", intro: "In Krefeld sind Kultur-, Musik- und Unternehmensproduktionen mit überschaubarer Anfahrt aus Düsseldorf möglich.", localAngle: "Historische und industrielle Räume können visuell stark sein, stellen aber eigene Anforderungen an Strom, Ton, Licht und Zugänglichkeit.", logistics: "Location, Stromwege und eventuelle Genehmigungen werden vor dem Dreh abgefragt; die Anfahrt wird im Angebot festgehalten." },
  { slug: "wuppertal", city: "Wuppertal", region: "Bergisches Land", distance: "ca. 35 km", intro: "Wuppertal bietet eigenständige Kulturorte, Bühnen und industrielle Architektur – interessant für Musik, Tanz, Film und visuelle Experimente.", localAngle: "Hanglage, enge Zufahrten und unterschiedliche Ebenen beeinflussen Transport und Aufbau. Diese Punkte gehören früh in die Produktionsplanung.", logistics: "Zeit für Anfahrt und Techniktransport wird realistisch kalkuliert; bei komplexen Orten empfiehlt sich eine Vorbesichtigung." },
  { slug: "essen", city: "Essen", region: "Ruhrgebiet", distance: "ca. 40 km", intro: "Essen ist für Kultur-, Festival-, Unternehmens- und Veranstaltungsproduktionen aus Düsseldorf gut erreichbar.", localAngle: "Große Veranstaltungsorte und industrielle Kulissen verlangen oft klar definierte Akkreditierungen, Ladezeiten und Tonwege.", logistics: "Anreise, Park- und Ladezugang sowie Ansprechpartner der Location werden vorab in den Ablauf aufgenommen." },
  { slug: "duisburg", city: "Duisburg", region: "Ruhrgebiet", distance: "ca. 30 km", intro: "Duisburg verbindet Hafen, Industrie, Kultur und Unternehmensstandorte – mit vielen möglichen Bildwelten, aber auch unterschiedlichen Genehmigungsfragen.", localAngle: "Bei öffentlichen oder industriellen Flächen müssen Zugänglichkeit und Nutzungsrechte vor dem Dreh verbindlich geklärt sein.", logistics: "Sophia reist aus Düsseldorf an. Für Außen- und Industriekulissen werden Genehmigung, Sicherheit und Wetteroption gemeinsam geprüft." },
  { slug: "moenchengladbach", city: "Mönchengladbach", region: "Niederrhein", distance: "ca. 35 km", intro: "Mönchengladbach ist für Eventfilme, Unternehmensporträts und Kulturproduktionen mit kurzer regionaler Anreise erreichbar.", localAngle: "Wenn mehrere Standorte an einem Tag verbunden werden, entscheidet ein realistischer Ablauf über die Qualität der Drehzeit.", logistics: "Fahrzeiten zwischen Motiven werden nicht als Puffer versteckt, sondern im Produktionsplan ausgewiesen." },
  { slug: "leverkusen", city: "Leverkusen", region: "Rheinland", distance: "ca. 35 km", intro: "Leverkusen liegt zwischen Düsseldorf und Köln und eignet sich für Unternehmens-, Kultur- und Eventproduktionen im Rheinland.", localAngle: "Bei Werks- und Unternehmensstandorten werden Freigaben, Sicherheitsunterweisung und mögliche Drehbeschränkungen früh gesammelt.", logistics: "Anfahrt ab Düsseldorf; für kontrollierte Bereiche braucht das Team vorab vollständige Zugangs- und Technikangaben." },
  { slug: "bonn", city: "Bonn", region: "Rheinland", distance: "ca. 75 km", intro: "Bonn ist für Kultur, Institutionen, Konferenzen und ausgewählte Unternehmensproduktionen erreichbar.", localAngle: "Institutionelle Drehs profitieren von einem präzisen Ablauf, klaren Interviewzeiten und früh geklärten Freigaben.", logistics: "Die längere Anfahrt wird im Angebot transparent berücksichtigt. Bei sehr frühen Starts kann eine Übernachtung wirtschaftlicher sein." },
  { slug: "bochum", city: "Bochum", region: "Ruhrgebiet", distance: "ca. 50 km", intro: "Bochum ist für Musik, Bühne, Wissenschaft und Unternehmenskommunikation ein relevanter Produktionsort im Ruhrgebiet.", localAngle: "Bühnen- und Veranstaltungsproduktionen benötigen abgestimmte Positionen, Signalwege und eine klare Kommunikation mit Licht und Ton.", logistics: "Sophia reist aus Düsseldorf an; Aufbauzeiten und technische Übergaben werden vor dem Veranstaltungstag abgestimmt." },
  { slug: "dortmund", city: "Dortmund", region: "Ruhrgebiet", distance: "ca. 70 km", intro: "Dortmund ist für größere Events, Musik, Kultur und Unternehmensproduktionen erreichbar, braucht aber eine realistische Zeit- und Anfahrtsplanung.", localAngle: "Bei großen Locations sind Akkreditierung, Zugang und feste Übergabepunkte für Material entscheidend.", logistics: "Anfahrt und mögliche Übernachtung werden abhängig von Startzeit, Umfang und Dauer im Angebot festgelegt." },
  { slug: "oberhausen", city: "Oberhausen", region: "Ruhrgebiet", distance: "ca. 35 km", intro: "Oberhausen ist für Veranstaltungen, Kulturprojekte und Unternehmensfilme mit kurzer Anreise aus Düsseldorf erreichbar.", localAngle: "Bei Eventflächen mit viel Publikum müssen Kamerapositionen und Bewegungswege so geplant werden, dass die Produktion präsent, aber nicht störend ist.", logistics: "Zugang, Aufbau, Ansprechpartner und Abbauzeiten werden vorab in einem kompakten Produktionsplan festgehalten." },
  { slug: "solingen", city: "Solingen", region: "Bergisches Land", distance: "ca. 35 km", intro: "Solingen eignet sich für Handwerks-, Unternehmens-, Kultur- und persönliche Porträtproduktionen im Bergischen Land.", localAngle: "Werkstätten und laufende Betriebe bieten starke Bilder, stellen aber besondere Anforderungen an Arbeitssicherheit und verständlichen Originalton.", logistics: "Betriebsablauf, Schutzkleidung, Tonquellen und Drehfenster werden vorab gemeinsam geprüft." },
];

export const locations: Location[] = locationSeed.map((item, index) => ({
  ...item,
  image: index % 3 === 0 ? "/media/light-hero.jpg" : index % 3 === 1 ? "/media/light-beams.jpg" : "/media/light-void.jpg",
  services: ["eventfilm", "imagefilm", "kamera-bildgestaltung", "live-visuals"],
  faq: [
    { question: `Kommt Sophia für einen Dreh nach ${item.city}?`, answer: `Ja. Produktionen in ${item.city} werden von Düsseldorf aus geplant. Anfahrt und gegebenenfalls zusätzliche Reisezeiten stehen transparent im Angebot.` },
    { question: "Was sollte in der ersten Anfrage stehen?", answer: "Projektart, Ort, ungefährer Termin und gewünschte Verwendung reichen für den ersten Schritt. Details werden anschließend gemeinsam geklärt." },
  ],
  indexable: ["duesseldorf", "koeln"].includes(item.slug),
}));

export const articles: Article[] = [
  {
    slug: "warum-ton-beim-eventfilm-entscheidet",
    title: "Warum der Ton beim Eventfilm zuerst geplant werden sollte",
    excerpt: "Gute Bilder retten kein unverständliches Interview. Was vor dem Dreh geklärt werden muss.",
    image: "/media/journal-01.jpg",
    readingTime: "6 Minuten",
    publishedAt: "2026-08-12",
    sections: [
      { title: "Tonprobleme entstehen selten erst im Schnitt", copy: ["Ein lauter Lüfter, Musik aus dem Nachbarraum oder eine Bühne ohne verfügbaren Signalweg sind am Drehtag keine Kleinigkeit. Sie bestimmen, ob ein Interview verständlich bleibt und ob die Atmosphäre später glaubwürdig klingt.", "Darum gehört Ton in das Vorgespräch: Welche Aussagen müssen aufgenommen werden? Welche Musik läuft? Gibt es Zugriff auf das Mischpult? Wo kann ein kurzes Gespräch stattfinden?"] },
      { title: "Originalton und Atmosphäre haben verschiedene Aufgaben", copy: ["Ein Statement braucht Nähe und Verständlichkeit. Atmo braucht Raum. Beides mit derselben Mikrofonposition aufzunehmen, führt oft zu einem Kompromiss, der keiner Ebene hilft.", "Bei kleinen Produktionen kann eine Person Kamera und Ton verantworten, wenn das Setup überschaubar ist. Mehrere Funkstrecken, Live-Mischungen oder bewegte Situationen brauchen eine eigene Tonposition."] },
      { title: "Was im Briefing stehen sollte", copy: ["Hilfreich sind Ablaufplan, Ansprechpartner für die Technik, vorgesehene Interviewzeiten und eine kurze Beschreibung der Räume. So lässt sich entscheiden, welche Mikrofone, Rekorder und Backups sinnvoll sind."] },
    ],
    related: [{ label: "Eventfilm", href: "/videografie/eventfilm/" }, { label: "Tonaufnahme am Set", href: "/videografie/tonaufnahme/" }],
  },
  {
    slug: "musikvideo-mit-kleinem-budget",
    title: "Musikvideo mit kleinem Budget: Wo die Idee tragen muss",
    excerpt: "Weniger Motive, klareres Licht, bessere Vorbereitung: ein sinnvoller Rahmen für kleine Musikproduktionen.",
    image: "/media/club-projektion-03.jpg",
    readingTime: "5 Minuten",
    publishedAt: "2026-08-12",
    sections: [
      { title: "Ein kleiner Rahmen ist kein Stil", copy: ["Wenig Budget wird nicht automatisch zu einer intimen oder rohen Ästhetik. Diese Wirkung muss gestaltet werden. Der wichtigste Schritt ist deshalb, eine Idee zu wählen, die mit einem Ort, einem Lichtkonzept und einer klaren Performance funktioniert."] },
      { title: "Drehzeit in das sichtbare Bild investieren", copy: ["Viele Ortswechsel verbrauchen Zeit, bevor eine Kamera läuft. Ein konzentrierter Drehort schafft Raum für Licht, Wiederholungen und Details. Das sieht man dem Ergebnis eher an als einer langen Motivliste."] },
      { title: "Formate von Anfang an mitdenken", copy: ["Wenn neben dem Hauptvideo Hochformate gebraucht werden, müssen Bildausschnitt und Performance dafür geplant sein. Reines Nachbeschneiden funktioniert nur, wenn das zentrale Motiv genug Raum hat."] },
    ],
    related: [{ label: "Musikvideo", href: "/videografie/musikvideo/" }, { label: "Dark Lights", href: "/projekte/dark-lights/" }],
  },
  {
    slug: "projection-mapping-vorbereitung",
    title: "Projection Mapping planen: Sechs Fragen vor der Gestaltung",
    excerpt: "Fläche, Licht, Projektorposition und Publikum bestimmen, was technisch und gestalterisch möglich ist.",
    image: "/media/spektra-detail-02.jpg",
    readingTime: "7 Minuten",
    publishedAt: "2026-08-12",
    sections: [
      { title: "Die Fläche ist Teil des Mediums", copy: ["Maße allein reichen nicht. Material, Farbe, Struktur und Winkel verändern die Projektion. Eine weiße, ebene Wand verhält sich anders als Stoff, Architektur oder ein bewegtes Objekt."] },
      { title: "Helligkeit ist eine reale Grenze", copy: ["Umgebungslicht lässt sich nicht im Nachhinein wegschneiden. Vor der Content-Produktion muss geklärt sein, wie hell der Raum ist, welche Leistung der Projektor hat und aus welcher Entfernung projiziert werden kann."] },
      { title: "Zuspielung, Sicherheit und Probe", copy: ["Signalweg, Rechner, Backup, Kabelwege und Zugang zum Aufbau gehören in denselben Plan. Mindestens ein Test auf der realen Fläche verhindert, dass die letzte Korrektur erst vor Publikum passiert."] },
    ],
    related: [{ label: "Projection Mapping", href: "/vj-mapping/projection-mapping/" }, { label: "Spektra Festival", href: "/projekte/spektra-festival/" }],
  },
  {
    slug: "drehgenehmigung-nrw",
    title: "Drehgenehmigung in NRW: Was wirklich angefragt werden muss",
    excerpt: "Gehweg, U-Bahn, Zeche, Werksgelände: Wo kleine Drehs einfach möglich sind — und wo ohne Freigabe gar nichts geht.",
    image: "/media/set-quer-01.jpg",
    readingTime: "7 Minuten",
    publishedAt: "2026-08-13",
    sections: [
      {
        title: "Die wichtigste Unterscheidung: öffentlicher Raum oder Hausrecht",
        copy: [
          "Ein kleines Team mit Kamera auf dem Gehweg, im Park oder am Rheinufer ist in den meisten Städten unkompliziert — solange niemand behindert wird und nichts aufgebaut ist. Sobald Stative den Weg blockieren, Licht gestellt wird oder eine Fläche exklusiv gebraucht wird, verlangt die Stadt in der Regel eine Sondernutzungserlaubnis. Die Grenze verläuft also nicht zwischen privat und kommerziell, sondern zwischen mitlaufen und beanspruchen.",
          "Ganz anders sieht es überall dort aus, wo Hausrecht gilt: Bahnhöfe, Bahnen und Stationen, Museen, Messen, Clubs, Werksgelände. Dort entscheidet der Eigentümer oder Betreiber — unabhängig davon, wie klein das Setup ist. Wer ohne Freigabe dreht, riskiert nicht nur den Rauswurf, sondern Material, das später nicht verwendet werden darf.",
        ],
      },
      {
        title: "Orte mit eigenen Regeln",
        copy: [
          "Ein paar Beispiele aus der Praxis in NRW: Die Stationen der Düsseldorfer Wehrhahn-Linie sind begehbare Kunsträume — Drehs dort laufen über die Rheinbahn. In Wuppertal gehört die Schwebebahn den WSW; die Außenperspektive vom Straßenraum aus ist dagegen meist frei. Der Landschaftspark Duisburg-Nord ist ausgesprochen drehfreundlich, größere Aufbauten gehen trotzdem über die Parkverwaltung. Und das Welterbe Zollverein in Essen vergibt Drehfreigaben über die Stiftung — mit Vorlauf.",
          "Werksgelände sind die strengste Kategorie: Anmeldung, Sicherheitsunterweisung, teils Fotografier-Verbote für einzelne Anlagen. Das klingt nach Aufwand, ist aber verlässlich — wer die Regeln vorab kennt, bekommt am Drehtag genau die Bilder, die vereinbart wurden.",
        ],
      },
      {
        title: "Menschen im Bild",
        copy: [
          "Neben dem Ort braucht auch jede erkennbare Person eine Grundlage. Bei Veranstaltungen lässt sich das sauber lösen: ein Hinweis in den Teilnahmebedingungen oder am Einlass, dazu Absprachen, wer nicht gefilmt werden möchte. Bei Interviews und Porträts gehört die Einverständniserklärung zum Standard. Passanten, die zufällig durchs Bild laufen, sind meist unkritisch — Nahaufnahmen einzelner Personen ohne Absprache sind es nicht.",
        ],
      },
      {
        title: "Wie viel Vorlauf realistisch ist",
        copy: [
          "Städtische Erlaubnisse brauchen je nach Stadt einige Tage bis wenige Wochen; Stiftungen, Verkehrsbetriebe und Werke eher Wochen als Tage. Die praktische Regel: Genehmigungsfragen gehören in die Motivauswahl, nicht ans Ende der Planung. Ein Plan B ohne Genehmigungsweg — ein ähnliches Motiv im frei zugänglichen Raum — hält den Drehtermin, falls eine Zusage nicht rechtzeitig kommt.",
          "Zur Einordnung: Das hier ist Produktionspraxis, keine Rechtsberatung. Was im Einzelfall gilt, wird bei der Motivplanung konkret geprüft — mit der zuständigen Stelle, nicht mit dem Bauchgefühl.",
        ],
      },
    ],
    related: [{ label: "Musikvideo", href: "/videografie/musikvideo/" }, { label: "Eventfilm", href: "/videografie/eventfilm/" }],
  },
  {
    slug: "was-einen-eventfilm-teuer-macht",
    title: "Was einen Eventfilm günstig macht — und was ihn teuer macht",
    excerpt: "Keine Preisliste, aber eine ehrliche Antwort: Die Kosten eines Eventfilms entstehen im Briefing, nicht im Schnitt.",
    image: "/media/spektra-buehne-02.jpg",
    readingTime: "6 Minuten",
    publishedAt: "2026-08-13",
    sections: [
      {
        title: "Der Preis entsteht vor dem Drehtag",
        copy: [
          "Die häufigste Frage zu Eventfilmen lässt sich nicht mit einer Zahl beantworten, aber mit einer Beobachtung: Zwei Filme von derselben Veranstaltung können sich im Aufwand um ein Mehrfaches unterscheiden — je nachdem, was sie leisten sollen. Ein kompakter Highlightfilm braucht andere Drehzeit und einen anderen Schnitt als eine Dokumentation mit Reden, Programmpunkten und Stimmen. Die Entscheidung zwischen beiden fällt im Briefing — und mit ihr der größte Teil des Preises.",
        ],
      },
      {
        title: "Die vier großen Kostentreiber",
        copy: [
          "Erstens die zweite Kamera: Sie verdoppelt nicht nur Personal, sondern auch Material und Sichtungszeit. Sie lohnt, wenn Bühne und Publikum gleichzeitig wichtig sind — und ist verzichtbar, wenn ein Abend eine klare Blickrichtung hat. Zweitens der Ton: Ein Abgriff am Mischpult ist schnell organisiert; mehrere eigene Tonwege für Reden, Interviews und Atmosphäre sind ein eigenes Gewerk.",
          "Drittens die Formate: Ein Hauptfilm plus Hochformate für Social Media wird beim Dreh mitgedacht und im Schnitt mehrfach ausgespielt — sinnvoll, aber nicht gratis. Viertens die Korrekturrunden: Jede Runde ist Arbeitszeit. Zwei gut vorbereitete Runden mit gesammeltem Feedback sind günstiger als fünf tröpfelnde — und führen fast immer zum besseren Film.",
        ],
      },
      {
        title: "Wo Sparen wehtut — und wo nicht",
        copy: [
          "Am Ton zu sparen rächt sich zuerst: Ein unverständliches Grußwort rettet kein Schnittprogramm. Auch die Vorbereitung ist der falsche Posten — eine Stunde Besichtigung erspart am Veranstaltungstag teure Improvisation. Gut sparen lässt sich dagegen an der Dauerpräsenz: Kaum ein Film braucht zwölf Stunden Drehzeit, wenn die Höhepunkte im Ablaufplan stehen. Wer die Schlüsselmomente kennt, bucht Drehzeit um sie herum.",
        ],
      },
      {
        title: "Der günstigste Hebel kostet nichts",
        copy: [
          "Ein Ablaufplan, eine erreichbare Ansprechperson am Veranstaltungstag und geklärte Zugänge — dieses Paket senkt den Aufwand jeder Produktion spürbar, weil niemand suchen, warten oder doppelt aufbauen muss. Es ist derselbe Grundsatz wie überall im Film: Was vorher entschieden ist, muss hinterher nicht repariert werden.",
        ],
      },
    ],
    related: [{ label: "Eventfilm", href: "/videografie/eventfilm/" }, { label: "Postproduktion", href: "/postproduktion/" }],
  },
  {
    slug: "drehen-nach-licht",
    title: "Drehen nach Licht: Warum gute Drehpläne dem Himmel folgen",
    excerpt: "Goldene Stunde, blaue Stunde, Wolken als Softbox: Der Drehplan gehört ans Licht gehängt — nicht an die Drehbuch-Reihenfolge.",
    image: "/media/light-beams.jpg",
    readingTime: "5 Minuten",
    publishedAt: "2026-08-13",
    sections: [
      {
        title: "Die goldene Stunde ist ein Termin",
        copy: [
          "Das warme, tiefe Licht kurz nach Sonnenaufgang und vor Sonnenuntergang ist der zuverlässigste Produktionswert, den es umsonst gibt — aber nur für den, der pünktlich ist. Deshalb wird ein Außendreh nicht nach Drehbuch-Reihenfolge geplant, sondern nach Licht: Die wichtigste Außenszene bekommt das beste Fenster, alles andere ordnet sich darum. Umbau und Fahrtwege gehören in die Stunden mit hartem Mittagslicht, in denen ohnehin niemand draußen drehen will.",
        ],
      },
      {
        title: "Blaue Stunde: kurz, planbar, unbezahlbar",
        copy: [
          "Zwischen Sonnenuntergang und Dunkelheit liegt ein Fenster von zwanzig bis vierzig Minuten, in dem Himmel und Kunstlicht dieselbe Helligkeit haben — die Zeit, in der Stadtmotive, beleuchtete Industrie und Skylines am stärksten wirken. Dieses Fenster verzeiht keine Verspätung: Der Aufbau steht vorher, die Einstellungen sind durchgesprochen, und wenn es losgeht, wird gedreht statt diskutiert.",
        ],
      },
      {
        title: "Wetter ist Planung, kein Schicksal",
        copy: [
          "Ein bedeckter Himmel ist kein verlorener Drehtag — Wolken sind die größte Softbox der Welt und schmeicheln Gesichtern mehr als jede Sonne. Kritisch sind Regen auf der Technik und Wind am Mikrofon; beides wird mit Wetteroption geplant: ein Ausweichtermin oder eine umgestellte Reihenfolge, bei der die Innenmotive vorgezogen werden. Wer beides vorbereitet hat, entscheidet am Drehtag gelassen statt hektisch.",
        ],
      },
      {
        title: "Der Winter ist besser als sein Ruf",
        copy: [
          "Kurze Tage klingen nach Einschränkung, sind aber ein Geschenk für alle, die Nachtstimmungen brauchen: Die blaue Stunde liegt im Dezember um halb fünf statt um halb zehn — Stadtlichter, Industriekulissen und Fensterfronten lassen sich zu normalen Arbeitszeiten drehen. Die goldene Stunde wiederum dauert im Winter länger, weil die Sonne flacher wandert. Wer das Licht als Verbündeten plant, hat in jeder Jahreszeit ein Argument.",
        ],
      },
    ],
    related: [{ label: "Kamera & Bildgestaltung", href: "/videografie/kamera-bildgestaltung/" }, { label: "Musikvideo", href: "/videografie/musikvideo/" }],
  },
];

export const servicePath = (service: Service) => {
  if (service.slug === "postproduktion") return "/postproduktion/";
  return `/${service.parent}/${service.slug}/`;
};

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
