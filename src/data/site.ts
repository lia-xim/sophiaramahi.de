export type LinkItem = { label: string; href: string };

export type Service = {
  slug: string;
  parent: "videografie" | "vj-mapping" | "leistungen";
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  outcome: string;
  image: string;
  alt: string;
  deliverables: string[];
  process: string[];
  suitableFor: string[];
  relatedProjects: string[];
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
    intro: "Bei Konzerten, Festivals, Kulturveranstaltungen und Unternehmensformaten entstehen viele starke Momente gleichzeitig. Ein Eventfilm braucht deshalb eine klare Vorbereitung und eine Kamera, die nah dran ist, ohne das Geschehen zu stören.",
    outcome: "Das Ergebnis kann als kompakter Highlightfilm, ausführlichere Dokumentation oder als Paket aus Hauptfilm und kurzen Social-Clips geplant werden.",
    image: "/media/spektra-buehne-03.jpg",
    alt: "Bühnenlicht und Publikum bei einer Veranstaltung",
    deliverables: ["Highlightfilm oder Event-Dokumentation", "Hoch- und Querformate", "Schnitt, Farbgestaltung und Tonmischung", "Optional: kurze Social-Clips"],
    process: ["Ablauf und Schlüsselmomente klären", "Dreh mit abgestimmter Präsenz", "Material sichten und dramaturgisch ordnen", "Korrekturrunde und finale Ausspielung"],
    suitableFor: ["Kulturveranstaltungen", "Konzerte und Festivals", "Premieren und Ausstellungen", "Unternehmens- und Community-Events"],
    relatedProjects: ["spektra-festival", "24h-to-take"],
    faq: [
      { question: "Wie früh sollte ein Eventfilm angefragt werden?", answer: "Sobald Termin, Ort und grober Ablauf stehen. Bei kleinen Produktionen können auch kurzfristigere Anfragen funktionieren; mehrere Kameras, Tonwege oder besondere Zugänge brauchen mehr Vorlauf." },
      { question: "Ist eine zweite Kamera möglich?", answer: "Ja. Je nach Ablauf arbeitet Sophia allein oder stellt gemeinsam mit dem Auftraggeber ein passendes Team zusammen." },
      { question: "Entstehen auch Hochformate?", answer: "Ja. Die wichtigsten Motive werden dafür schon beim Dreh mitgedacht, statt später nur aus einem Querformat herausgeschnitten zu werden." },
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
    intro: "Ein Musikvideo beginnt nicht mit einer Shotlist, sondern mit dem Stück. Rhythmus, Text, Sound und vorhandene visuelle Ideen bestimmen, ob eine Performance, eine kleine Erzählung oder ein experimenteller Ansatz trägt.",
    outcome: "Sophia entwickelt den visuellen Rahmen gemeinsam mit den Künstlerinnen und Künstlern und führt ihn vom Konzept über den Dreh bis zum finalen Schnitt fort.",
    image: "/media/club-projektion-02.jpg",
    alt: "Musikerin im farbigen Bühnenlicht",
    deliverables: ["Visuelles Konzept und Moodboard", "Kamera und Lichtgestaltung", "Schnitt und Farblook", "Teaser oder vertikale Ausschnitte"],
    process: ["Song und Referenzen besprechen", "Konzept auf Budget und Ort zuschneiden", "Dreh und Bildgestaltung", "Schnitt im Rhythmus des Stücks"],
    suitableFor: ["Singles und EP-Releases", "Live-Sessions", "Performancevideos", "Experimentelle Musikprojekte"],
    relatedProjects: ["electric-lights", "dark-lights"],
    faq: [
      { question: "Kann ein Musikvideo mit kleinem Budget funktionieren?", answer: "Ja, wenn die Idee den Rahmen ernst nimmt. Ein starker Ort, ein durchdachtes Lichtkonzept oder eine präzise Performance kann sinnvoller sein als viele Motive ohne klare Funktion." },
      { question: "Hilfst du bei der Konzeptentwicklung?", answer: "Ja. Vorhandene Ideen können gemeinsam verdichtet oder von Grund auf aus dem Song entwickelt werden." },
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
    intro: "Ein guter Imagefilm braucht keine großen Behauptungen. Er zeigt Menschen bei ihrer Arbeit, erklärt einen Ablauf oder macht eine Haltung sichtbar. Entscheidend ist, welche Geschichte Kundinnen, Bewerber oder Partner nach dem Film verstanden haben sollen.",
    outcome: "Daraus entsteht ein konzentrierter Film, der auf der Website ebenso funktioniert wie in Präsentationen oder in angepassten Social-Versionen.",
    image: "/media/set-quer-01.jpg",
    alt: "Kamera am Set einer Videoproduktion",
    deliverables: ["Konzept und Interviewleitfaden", "Dreh vor Ort", "Schnitt, Musik und Tonmischung", "Untertitel und Formatvarianten"],
    process: ["Zielgruppe und Kernbotschaft festlegen", "Protagonisten und Drehorte vorbereiten", "Dreh mit kleinem, ruhigem Setup", "Schnitt mit nachvollziehbarer Dramaturgie"],
    suitableFor: ["Kultureinrichtungen", "Kreative Unternehmen", "Vereine und Initiativen", "Persönliche Unternehmensporträts"],
    relatedProjects: ["24h-to-take"],
    faq: [
      { question: "Müssen Mitarbeitende vor der Kamera geübt sein?", answer: "Nein. Gespräche werden so vorbereitet und geführt, dass keine auswendig gelernten Sätze nötig sind." },
      { question: "Kann vorhandenes Material eingebaut werden?", answer: "Ja, sofern Qualität und Nutzungsrechte passen. Vorab wird geprüft, welche Aufnahmen den Film wirklich ergänzen." },
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
    intro: "Nicht jedes Projekt braucht eine komplette Produktion. Sophia kann als Kamerafrau und Mediengestalterin in bestehende Teams einsteigen, Briefings in konkrete Bilder übersetzen und sich in vorbereitete technische Abläufe einfügen.",
    outcome: "Vor dem Dreh werden Bildsprache, Format, Technik, Licht und Datenübergabe geklärt. So bleibt am Set mehr Raum für das Motiv.",
    image: "/media/set-hoch-02.jpg",
    alt: "Kameraarbeit an einem Filmset",
    deliverables: ["Kameraarbeit im bestehenden Team", "Bild- und Lichtkonzept", "Technische Vorbereitung", "Geordnete Datenübergabe"],
    process: ["Briefing und Referenzen prüfen", "Technik und Schnittstellen abstimmen", "Dreh im Team", "Saubere Übergabe an Postproduktion oder DIT"],
    suitableFor: ["Agenturproduktionen", "Kultur- und Musikdrehs", "Interviews und Reportage", "Kleine narrative Produktionen"],
    relatedProjects: ["electric-lights", "spektra-festival"],
    faq: [
      { question: "Kann Sophia vorhandene Technik nutzen?", answer: "Ja. Vorab werden Kamerasystem, Optiken, Tonwege und Datenworkflow abgestimmt." },
      { question: "Ist die Buchung außerhalb von Düsseldorf möglich?", answer: "Ja. Produktionen in NRW sind regulär möglich, weitere Orte nach Absprache." },
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
    intro: "Ton ist nicht die Reparaturphase nach dem Dreh. Raum, Mikrofonierung, Umgebung und Bewegungsfreiheit müssen vorher zusammen gedacht werden. Als ausgebildete Mediengestalterin Bild und Ton kann Sophia beides in kleinen Setups verbinden.",
    outcome: "Je nach Produktion übernimmt sie den Ton selbst oder plant einen eigenen Tonposten ein, wenn Umfang und Verantwortung das erfordern.",
    image: "/media/light-void.jpg",
    alt: "Fast schwarzer Raum mit schmalem kühlem Lichtspalt",
    deliverables: ["Mikrofonierung kleiner Setups", "Interview- und Atmoaufnahme", "Synchronisierte Übergabe", "Grundlegende Tonbearbeitung"],
    process: ["Raum und Motiv einschätzen", "Mikrofonierung festlegen", "Pegel und Störquellen kontrollieren", "Material sichern und dokumentieren"],
    suitableFor: ["Interviews", "Event-Statements", "Kleine Dokumentationen", "Kompakte One-Person-Produktionen"],
    relatedProjects: ["electric-lights"],
    faq: [
      { question: "Wann braucht ein Projekt eine eigene Tonperson?", answer: "Wenn mehrere Funkstrecken, komplexe Bewegungen, Live-Mischungen oder hohe Ausfallsicherheit gleichzeitig verlangt werden. Dann wird die Position separat besetzt." },
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
    intro: "Live Visuals sind kein Hintergrundvideo in Endlosschleife. Material, Rhythmus, Raum und Licht reagieren aufeinander. Dafür entwickelt Sophia visuelle Loops, kombiniert vorhandenes Material und mischt die Bildwelten live.",
    outcome: "Der Umfang reicht von einem kompakten VJ-Set bis zu einer abgestimmten Bilddramaturgie für einen ganzen Abend.",
    image: "/media/club-projektion-01.jpg",
    alt: "Live Visuals auf einer Bühne",
    deliverables: ["Visuelles Konzept", "Eigene Loops und Materialaufbereitung", "Live-Mixing", "Abstimmung mit Licht und Bühne"],
    process: ["Musik und Ablauf verstehen", "Flächen und Technik prüfen", "Material vorbereiten und testen", "Live spielen und auf den Raum reagieren"],
    suitableFor: ["Konzerte", "Clubnächte", "Festivals", "Performances und Installationen"],
    relatedProjects: ["spektra-festival", "dark-lights"],
    faq: [
      { question: "Wird vorhandenes Videomaterial genutzt?", answer: "Das ist möglich. Es wird vorab auf Format, Rechte, Auflösung und visuelle Anschlussfähigkeit geprüft." },
      { question: "Welche Technik muss der Veranstaltungsort stellen?", answer: "Projektionsflächen, Signalwege und Abspieltechnik werden projektbezogen geklärt. Eine pauschale Technikliste wäre unseriös." },
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
    intro: "Beim Projection Mapping bestimmt die Fläche das Bild. Maße, Blickwinkel, Helligkeit, Projektorposition und Umgebungslicht sind Teil des Konzepts. Erst danach lohnt sich die Gestaltung des Materials.",
    outcome: "Sophia entwickelt visuelle Inhalte, testet die Abbildung auf dem realen Objekt und stimmt die Zuspielung mit der Veranstaltungstechnik ab.",
    image: "/media/spektra-detail-03.jpg",
    alt: "Geometrische Projektion auf einer Bühnenfläche",
    deliverables: ["Flächen- und Machbarkeitsprüfung", "Mapping-Layout", "Visuelle Inhalte", "Einrichtung und Probelauf"],
    process: ["Ort und Fläche vermessen", "Technische Machbarkeit klären", "Inhalte auf die Geometrie gestalten", "Vor Ort einrichten und korrigieren"],
    suitableFor: ["Festivalbühnen", "Ausstellungen", "Kunstinstallationen", "Marken- und Kulturveranstaltungen"],
    relatedProjects: ["spektra-festival", "electric-lights"],
    faq: [
      { question: "Kann Projection Mapping überall eingesetzt werden?", answer: "Nein. Helligkeit, Projektionsabstand, Oberfläche und Publikumswege setzen reale Grenzen. Eine frühe Ortsprüfung spart später Aufwand." },
      { question: "Wird der Projektor mitgebracht?", answer: "Das hängt von Größe und Ort ab. Häufig kommt die passende Projektionstechnik über den Veranstaltungsort oder einen Verleih." },
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
    intro: "Im Schnitt entscheidet sich, welche Geschichte das gedrehte Material tatsächlich erzählt. Sophia übernimmt Postproduktion für eigene Drehs und ausgewählte Fremdproduktionen – von der Materialsichtung bis zu den finalen Formaten.",
    outcome: "Der Ablauf wird vorab klar begrenzt: Materialmenge, gewünschte Länge, Ausspielungen, Korrekturrunden und Übergabeformat.",
    image: "/media/journal-02.jpg",
    alt: "Postproduktion eines Videoprojekts",
    deliverables: ["Materialsichtung und Rohschnitt", "Feinschnitt und Dramaturgie", "Farbgestaltung", "Tonbearbeitung, Untertitel und Exporte"],
    process: ["Material und Ziel prüfen", "Rohschnitt abstimmen", "Feinschnitt, Farbe und Ton", "Freigabe und Masterexport"],
    suitableFor: ["Event- und Musikproduktionen", "Interviews", "Social-Versionen", "Bereits gedrehtes Fremdmaterial"],
    relatedProjects: ["electric-lights", "24h-to-take"],
    faq: [
      { question: "Kann Sophia nur den Schnitt übernehmen?", answer: "Ja. Dafür müssen Material, Ton, Rechte und technische Spezifikationen vorab prüfbar sein." },
      { question: "Wie viele Korrekturrunden sind enthalten?", answer: "Die Anzahl wird im Angebot festgelegt. So bleibt der Umfang für beide Seiten nachvollziehbar." },
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
    gallery: [
      { src: "/media/electric-lights-cover.jpg", alt: "Filmszene in violettem Licht" },
      { src: "/media/light-beams.jpg", alt: "Abstrakte Lichtstrahlen" },
      { src: "/media/light-hero.jpg", alt: "Violette Lichtfläche" },
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
    intro: "Das vorhandene Material zu Dark Lights zeigt Körper, Texturen und Gesichter im grünen und violetten Licht. Die Projektseite wird als visuelle Studie aufgebaut – ohne die alten Lorem-ipsum-Texte und ohne eine Geschichte zu erfinden, die das Material nicht belegt.",
    image: "/media/club-projektion-hoch.jpg",
    alt: "Porträt im grünen Projektionslicht",
    gallery: [
      { src: "/media/club-projektion-01.jpg", alt: "Performance im grünen Licht" },
      { src: "/media/club-projektion-02.jpg", alt: "Nahaufnahme im farbigen Licht" },
      { src: "/media/club-projektion-03.jpg", alt: "Lichtprojektion auf einer Person" },
      { src: "/media/club-projektion-04.jpg", alt: "Dunkle Szene mit Projektion" },
    ],
    roles: ["Bildidee", "Lichtgestaltung", "Fotografie"],
    services: ["kamera-bildgestaltung", "live-visuals"],
    sections: [
      { title: "Reduktion statt Kulisse", copy: ["Die Bilder gewinnen ihre Wirkung nicht aus einem großen Set. Entscheidend sind Richtung und Farbe des Lichts, der Ausschnitt und die Nähe zur Person.", "Dark Lights bleibt deshalb als kurze, konzentrierte Serie lesbar. Sobald Credits, Jahr und genauer Kontext bestätigt sind, können diese Angaben ergänzt werden."] },
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
    intro: "Das Spektra-Material dokumentiert Aufbau, Masken, Projektionen, Musiker und die fertige Bühne. Die neue Projektseite konzentriert sich auf diese belegbaren Ebenen und zeigt den Weg vom technischen Aufbau bis zur Veranstaltung.",
    image: "/media/spektra-buehne-01.jpg",
    alt: "Bühne des Spektra Festivals mit Projektionen",
    gallery: [
      { src: "/media/spektra-buehne-02.jpg", alt: "Live-Musik vor projizierten Flächen" },
      { src: "/media/spektra-maske.jpg", alt: "Gestaltete Maske im Spektra-Projekt" },
      { src: "/media/spektra-aufbau.jpg", alt: "Aufbau der Projektionstechnik" },
      { src: "/media/spektra-detail-01.jpg", alt: "Detail einer Projektion" },
      { src: "/media/spektra-buehne-05.jpg", alt: "Bühnenansicht mit Licht und Musikern" },
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
  indexable: true,
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
];

export const servicePath = (service: Service) => {
  if (service.slug === "postproduktion") return "/postproduktion/";
  return `/${service.parent}/${service.slug}/`;
};

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
