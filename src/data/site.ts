import { extendArticle, extendProject, extendService } from "./content-expansion";
import { productionGuides } from "./production-guides";

export type LinkItem = { label: string; href: string };

export type Service = {
  slug: string;
  parent: "videografie" | "vj-mapping" | "leistungen";
  title: string;
  /** Suchintention im Hero; kurze Leistungsnamen bleiben in der Navigation. */
  heroTitle?: string;
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
  /** Ordnet die gezeigten Arbeiten dem tatsächlichen Beitrag zu. */
  projectContext?: string;
  /** Verwandte Gewerke für die „Weiter im Programm"-Navigation. */
  relatedServices: string[];
  /** Optionaler Journal-Artikel, der das Gewerk vertieft. */
  articleSlug?: string;
  /** Ergänzende Planungshilfen mit einer eigenen Suchintention. */
  planningLinks?: LinkItem[];
  /** Konkrete Buchungs- und Briefingfragen auf der zentralen Leistungsseite. */
  planning?: { title: string; copy: string[]; links?: LinkItem[] }[];
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
  schemaRole: "creator" | "contributor";
  title: string;
  seoTitle?: string;
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
  sections: { title: string; copy: string[]; links?: LinkItem[] }[];
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
  imageAlt?: string;
  publishedAt: string;
  updatedAt?: string;
  sections: {
    title: string;
    copy: string[];
    links?: LinkItem[];
    table?: { caption: string; columns: string[]; rows: string[][] };
    example?: { label: string; code: string };
    figure?: { src: string; alt: string; caption: string };
  }[];
  sources?: LinkItem[];
  sourcesContext?: string;
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

const servicesBase: Service[] = [
  {
    projectContext: "Beim Spektra Festival gehörten Live Visuals, Aufbau, technische Abstimmung und Dokumentation zu Sophias Aufgaben. 24h to take zeigt ihre Arbeit im Kurzfilmwettbewerb sowie in Organisation und Technik. Die Projektseiten nennen diese Beiträge einzeln.",
    heroTitle: "Eventfilm für Kultur und Festivals",
    slug: "eventfilm",
    parent: "videografie",
    title: "Eventfilm",
    eyebrow: "Highlightfilm · Dokumentation · Aftermovie",
    summary: "Eventfilm und Festival-Aftermovie aus Düsseldorf: Bilder, Originalton und Schnitt passend zur Veranstaltung und zur späteren Nutzung.",
    claim: "Der Ablauf steht fest. **Die Aufnahmen werden darauf vorbereitet.**",
    intro: "Ein Konzert, eine Ausstellungseröffnung oder ein Festival lässt sich beim Dreh selten wiederholen. Sophia plant die Aufnahmen mit Veranstaltern: Welche Programmpunkte sind wichtig, welche Stimmen sollen zu hören sein und wo kann die Kamera arbeiten? Für parallele Bühnen, Interviews oder längere Aufzeichnungen wird die nötige Besetzung vorab abgestimmt.",
    outcome: "Ein Aftermovie fasst Höhepunkte und Atmosphäre zusammen. Eine Veranstaltungsdokumentation braucht zusätzlich nachvollziehbare Abläufe und verständliche Reden oder Interviews. Hauptfilm, Social-Clips und Untertitel werden nach dem vereinbarten Umfang geplant; Termin und Nutzungsrechte gehören ins Briefing.",
    image: "/media/spektra-buehne-03.jpg",
    alt: "Bühnenlicht und Publikum bei einer Veranstaltung",
    deliverables: ["Highlightfilm oder Event-Dokumentation", "Hoch- und Querformate", "Schnitt, Farbgestaltung und Tonmischung", "Optional: kurze Social-Clips"],
    process: ["Ablauf und Schlüsselmomente klären", "Dreh mit abgestimmter Präsenz", "Material sichten und dramaturgisch ordnen", "Korrekturrunde und finale Ausspielung"],
    suitableFor: ["Kulturveranstaltungen", "Konzerte und Festivals", "Premieren und Ausstellungen", "Unternehmens- und Community-Events"],
    relatedProjects: ["spektra-festival", "24h-to-take"],
    relatedServices: ["tonaufnahme", "postproduktion"],
    articleSlug: "warum-ton-beim-eventfilm-entscheidet",
    focus: {
      "label": "Formatwahl",
      "title": "Aftermovie oder Veranstaltungsdokumentation?",
      "lead": "Die spätere Verwendung bestimmt, welche Aufnahmen und Tonspuren am Veranstaltungstag gebraucht werden.",
      "items": [
        {
          "title": "Aftermovie und Highlightfilm",
          "copy": "Musik, Publikum und Schlüsselmomente verdichten den Abend. Für einen Rückblick oder die nächste Ankündigung werden Bildauswahl, Länge und Musiknutzung im Konzept festgelegt."
        },
        {
          "title": "Dokumentation mit Originalton",
          "copy": "Für ein Archiv, Partner oder die Nachbereitung können Reden, Gespräche und Programmpunkte wichtiger sein als ein schneller Zusammenschnitt. Aufnahmewege und Zeitfenster werden mit der Veranstaltungstechnik geklärt."
        },
        {
          "title": "Hauptfilm und kurze Fassungen",
          "copy": "Wenn Website und Social Media unterschiedliche Fassungen brauchen, werden Bildausschnitt, Interviewaussagen und Untertitel früh mitgeplant. Die Zahl der Versionen steht im Angebot."
        }
      ]
    },
    scopeTitle: "Aufnahmen und Fassungen für Ihre Veranstaltung",
    processTitle: "Vom Ablaufplan bis zur Ausspielung",
    faqTitle: "Häufige Fragen zum Eventfilm",
    faq: [
      {
        "question": "Was unterscheidet einen Aftermovie von einer Dokumentation?",
        "answer": "Ein Aftermovie verdichtet Höhepunkte und Atmosphäre. Eine Dokumentation hält Inhalte und Abläufe ausführlicher fest, etwa Reden oder Interviews. Das beeinflusst die Drehplanung, den Ton und den Schnittaufwand."
      },
      {
        "question": "Was braucht Sophia für ein Angebot?",
        "answer": "Termin, Veranstaltungsort, Ablaufplan, gewünschte Nutzung und Abgabetermin. Hilfreich sind außerdem Angaben zu Bühnen, Interviews, Tonanschlüssen und Zugängen für das Filmteam."
      },
      {
        "question": "Kann gleichzeitig auf mehreren Bühnen gefilmt werden?",
        "answer": "Das muss mit einer passenden Besetzung und klaren Zuständigkeiten geplant werden. Eine Kamera kann keine zeitgleichen Programmpunkte an unterschiedlichen Orten vollständig erfassen. Der Bedarf wird vor der Buchung besprochen."
      },
      {
        "question": "Sind Hochformate und Untertitel möglich?",
        "answer": "Ja, nach vereinbartem Umfang. Benötigte Hoch- und Querformate, Ausschnittvarianten und Untertitel werden vor dem Dreh benannt, damit die Aufnahmen dazu passen."
      },
      {
        "question": "Wer klärt Musik und Aufnahmerechte?",
        "answer": "Vor dem Dreh werden Zuständigkeiten für Veranstalterfreigaben, Personen, Performances und Musik festgelegt. Dass Musik auf der Veranstaltung gespielt werden darf, klärt noch nicht ihre Verwendung im später veröffentlichten Film."
      },
      {
        "question": "Was kostet ein Eventfilm?",
        "answer": "Der Aufwand hängt unter anderem von Drehzeit, parallelen Programmpunkten, Tonaufzeichnung, Materialmenge und gewünschten Fassungen ab. Nach dem Briefing wird der konkrete Umfang angeboten; ein kurzer Endfilm bedeutet nicht automatisch wenig Produktionsaufwand."
      },
      {
        "question": "Ist ein kompletter Konzertmitschnitt im Aftermovie enthalten?",
        "answer": "Ein kompletter Mitschnitt braucht eine eigene Planung für durchgängige Kamerabilder und die musikalische Tonaufnahme. Ein Aftermovie zeigt ausgewählte Höhepunkte und stellt diese vollständige Aufzeichnung nicht automatisch bereit. Kameraanzahl, Tonproduktion, Besetzung, Dauer und Aufnahmerechte werden vor dem Auftrag festgelegt."
      }
    ],
    seoTitle: "Eventfilm & Festival-Aftermovie Düsseldorf | Sophia Ramahi",
    seoDescription: "Eventfilm und Festival-Aftermovie aus Düsseldorf für Kulturveranstaltungen und Konzerte. Kamera, Originalton, Schnitt und passende Formatvarianten.",
  },
  {
    planningLinks: [
      {
        "label": "Storyboard, Shotlist und Drehplan für ein Musikvideo vorbereiten",
        "href": "/journal/musikvideo-storyboard-drehplan/"
      }
    ],
    projectContext: "Electric Lights ist eine audiovisuelle Installation; Dark Lights eine Fotografie- und Lichtstudie. Die gezeigten Arbeiten geben Einblick in Sophias Gestaltung von Licht, Bild und Klang. Sie sind mit ihrem jeweiligen Format ausgewiesen.",
    heroTitle: "Musikvideo-Produktion für Bands und Artists",
    slug: "musikvideo",
    parent: "videografie",
    title: "Musikvideo",
    eyebrow: "Bildsprache für Musik",
    summary: "Musikvideos aus Düsseldorf für Bands und Artists: eine Bildidee entwickeln, den Dreh planen und den Schnitt mit dem Song verbinden.",
    claim: "Der Song gibt die Richtung. **Die Produktion braucht einen passenden Rahmen.**",
    intro: "Sophia entwickelt mit Bands und Artists ein visuelles Konzept für ihren Song. Performance, Erzählung oder ein experimenteller Ansatz werden mit Drehort, Licht und verfügbarem Produktionsrahmen zusammengebracht. Ein reduziertes Konzept kann mit wenigen Motiven auskommen, braucht aber ebenso sorgfältige Vorbereitung.",
    outcome: "Zum Briefing gehören Song, Referenzen, Veröffentlichungstermin und geplante Nutzung. Kamera, Licht, Schnitt und Farbgestaltung werden auf die vereinbarte Idee abgestimmt. Wenn Teaser oder Hochformate gebraucht werden, fließen diese Fassungen bereits in die Drehplanung ein.",
    image: "/media/club-projektion-02.jpg",
    alt: "Musikerin im farbigen Bühnenlicht",
    deliverables: ["Visuelles Konzept und Moodboard", "Kamera und Lichtgestaltung", "Schnitt und Farblook", "Teaser oder vertikale Ausschnitte"],
    process: ["Song und Referenzen besprechen", "Konzept auf Budget und Ort zuschneiden", "Dreh und Bildgestaltung", "Schnitt im Rhythmus des Stücks"],
    suitableFor: ["Singles und EP-Releases", "Live-Sessions", "Performancevideos", "Experimentelle Musikprojekte"],
    relatedProjects: ["electric-lights", "dark-lights"],
    relatedServices: ["postproduktion", "live-visuals"],
    articleSlug: "musikvideo-mit-kleinem-budget",
    focus: {
      "label": "Konzept",
      "title": "Welche Bildidee passt zum Song?",
      "lead": "Ein tragfähiges Konzept verbindet die musikalische Idee mit dem, was am Drehort und im Produktionsrahmen umsetzbar ist.",
      "items": [
        {
          "title": "Performancevideo",
          "copy": "Band oder Artist stehen im Mittelpunkt. Auftritt, Licht, Hintergrund und Kamerabewegung werden zusammen geplant. Ein Playback-Dreh und eine Live-Session stellen unterschiedliche Anforderungen an den Ton."
        },
        {
          "title": "Erzählendes Musikvideo",
          "copy": "Figuren, Orte und Szenen ergänzen den Song. Die Zahl der Motive, Mitwirkenden und Umbauten muss zum verfügbaren Rahmen passen; die Geschichte wird vor dem Dreh auf diese Bedingungen zugeschnitten."
        },
        {
          "title": "Experimentelle Bilder",
          "copy": "Licht, Texturen und Projektionen können das visuelle Material bilden. Welche Kombination zum Song passt und wie sie aufgenommen wird, wird im Konzept und in der technischen Vorbereitung geklärt."
        }
      ]
    },
    scopeTitle: "Was zum Release fertig ist",
    processTitle: "Vom Song bis zum fertigen Video",
    faqTitle: "Häufige Fragen zum Musikvideo",
    faq: [
      {
        "question": "Kann ein Musikvideo mit kleinem Budget produziert werden?",
        "answer": "Das hängt von der Idee ab. Wenige Motive, ein klarer Lichtansatz und eine vorbereitete Performance begrenzen den Aufwand. Drehort, Mitwirkende, Technik und gewünschte Fassungen müssen trotzdem im Angebot berücksichtigt werden."
      },
      {
        "question": "Kann Sophia ein vorhandenes Konzept umsetzen?",
        "answer": "Ja. Im Vorgespräch werden die Idee, musikalische Referenzen und der Produktionsrahmen geprüft. Sophia kann das Konzept weiterentwickeln oder Kamera und Bildgestaltung als Einzelgewerk übernehmen."
      },
      {
        "question": "Was unterscheidet eine Live-Session vom Playback-Dreh?",
        "answer": "Bei einer Live-Session wird die musikalische Darbietung aufgezeichnet; dafür braucht es eine abgestimmte Tonproduktion. Beim Playback-Dreh wird zu einer vorhandenen Aufnahme performt. Diese Entscheidung muss vor der Team- und Technikplanung fallen."
      },
      {
        "question": "Wann sollte ein Musikvideo angefragt werden?",
        "answer": "Sobald Song und gewünschter Release-Termin feststehen. Konzept, Orte, Freigaben, Dreh und Schnitt brauchen abgestimmte Zeitfenster. Verfügbarkeit und ein realistischer Abgabetermin werden für die konkrete Anfrage geprüft."
      },
      {
        "question": "Entstehen auch Teaser und Hochformate?",
        "answer": "Ja, nach Absprache. Zahl, Länge, Bildformat und Nutzung der Fassungen werden vor dem Dreh festgelegt. So können zentrale Motive für das Hauptvideo und die kurzen Versionen aufgenommen werden."
      },
      {
        "question": "Wer klärt Drehort, Musik und Mitwirkende?",
        "answer": "Die Zuständigkeiten werden im Briefing festgelegt. Vor der Veröffentlichung müssen die nötigen Rechte für Song, Darbietung, Personen, Orte und zusätzliches Bildmaterial geklärt sein."
      }
    ],
    seoTitle: "Musikvideo-Produktion Düsseldorf | Bands & Artists",
    seoDescription: "Musikvideo-Produktion aus Düsseldorf für Bands und Artists: Konzept, Kamera, Licht, Schnitt und Teaser. Planung passend zu Song und Produktionsrahmen.",
  },
  {
    planningLinks: [
      {
        "label": "Untertitel für Interview- und Imagefilme planen",
        "href": "/journal/video-untertitel-srt-einbrennen/"
      }
    ],
    articleSlug: "imagefilm-interview-vorbereiten",
    heroTitle: "Imagefilm mit Interviews",
    slug: "imagefilm",
    parent: "videografie",
    title: "Imagefilm & Porträt",
    eyebrow: "Arbeit verständlich machen",
    summary: "Imagefilm und Unternehmensporträt aus Düsseldorf für Kultureinrichtungen, Initiativen und Unternehmen mit erklärungsbedürftiger Arbeit.",
    claim: "Menschen erzählen. **Bilder zeigen die Arbeit dahinter.**",
    intro: "Sophia plant Imagefilme und Interviewporträts für Organisationen, Selbstständige und ausgewählte Unternehmen. Ausgangspunkt ist die Frage, was ein Film verständlich machen soll: eine Tätigkeit, ein Angebot oder die Menschen dahinter. Daraus entstehen Interviewfragen und Motive für den Dreh vor Ort.",
    outcome: "Interviews können mit Aufnahmen von Arbeitsabläufen und Räumen verbunden werden. Ein Unternehmensporträt für die Website braucht einen anderen Umfang als eine ausführliche Präsentation oder mehrere kurze Social-Fassungen. Zielgruppe, Protagonisten, Nutzung und Freigaben werden deshalb vor der Produktion festgelegt.",
    image: "/media/set-quer-01.jpg",
    alt: "Kamera am Set einer Videoproduktion",
    deliverables: ["Konzept und Interviewleitfaden", "Dreh vor Ort", "Schnitt, Musik und Tonmischung", "Untertitel und Formatvarianten"],
    process: ["Zielgruppe und Kernbotschaft festlegen", "Protagonisten und Drehorte vorbereiten", "Dreh mit kleinem, ruhigem Setup", "Schnitt mit nachvollziehbarer Dramaturgie"],
    suitableFor: ["Kultureinrichtungen", "Kreative Unternehmen", "Vereine und Initiativen", "Persönliche Unternehmensporträts"],
    relatedProjects: [],
    relatedServices: ["tonaufnahme", "postproduktion"],
    focus: {
      "label": "Inhalte",
      "title": "Was soll nach dem Film verständlich sein?",
      "lead": "Das Konzept benennt konkrete Menschen und Situationen, die die Arbeit einer Organisation zeigen können.",
      "items": [
        {
          "title": "Interviewporträt",
          "copy": "Eine Person erklärt ihre Tätigkeit und Motivation. Fragen und Gesprächssituation werden vorbereitet; verständlicher Originalton und ergänzende Arbeitsbilder tragen den Film."
        },
        {
          "title": "Abläufe erklären",
          "copy": "Welche Schritte machen eine Leistung nachvollziehbar? Dafür werden Motive, Zugänge und Drehfenster mit dem Team vor Ort geplant. Betriebsabläufe und vertrauliche Bereiche müssen berücksichtigt werden."
        },
        {
          "title": "Fassungen für die Nutzung",
          "copy": "Website, Präsentation und Social Media können unterschiedliche Längen, Seitenverhältnisse und Untertitel brauchen. Das vereinbarte Zielset bestimmt die Aufnahmen und den Umfang der Postproduktion."
        }
      ]
    },
    scopeTitle: "Was am Ende erzählt ist",
    processTitle: "Von der Kernbotschaft bis zum Film",
    faqTitle: "Häufige Fragen zum Imagefilm",
    faq: [
      {
        "question": "Für wen eignet sich ein Interviewporträt?",
        "answer": "Für Organisationen, Kultureinrichtungen, Initiativen und Selbstständige, deren Arbeit durch eine Person und konkrete Situationen verständlicher wird. Im Briefing wird geprüft, ob Interview, reine Bildfolge oder eine Kombination zum Ziel passt."
      },
      {
        "question": "Müssen Mitarbeitende vor der Kamera geübt sein?",
        "answer": "Vorerfahrung ist keine Voraussetzung. Fragen, Gesprächssituation und Zeitfenster werden vorbereitet. Wer auftreten soll und welche Aussagen gebraucht werden, wird vor dem Dreh besprochen."
      },
      {
        "question": "Wie lässt sich der Dreh in den Betrieb einplanen?",
        "answer": "Mit abgestimmten Interviewzeiten, erreichbaren Ansprechpersonen und freigegebenen Motiven. Aufbau, Umstellen von Licht und Wiederholungen brauchen Zeit; der Umfang wird mit dem Team geplant."
      },
      {
        "question": "Kann vorhandenes Bildmaterial genutzt werden?",
        "answer": "Ja, nach Sichtung und Klärung der Nutzungsrechte. Auflösung, Bildformat, Ton und Inhalt müssen zu den neuen Aufnahmen und zur vorgesehenen Veröffentlichung passen."
      },
      {
        "question": "Was kostet ein Imagefilm?",
        "answer": "Konzept, Zahl der Orte und Personen, Drehzeit, Ton, Materialmenge und Fassungen bestimmen den Aufwand. Eine belastbare Kalkulation entsteht nach dem Briefing und benennt auch Korrekturrunden und vereinbarte Auslieferungen."
      },
      {
        "question": "Sind Untertitel und kurze Versionen möglich?",
        "answer": "Ja. Sprache, Untertitel, Hoch- und Querformate sowie gewünschte Ausschnitte werden vorab vereinbart. So bleibt klar, welche Fassungen zur Freigabe vorliegen sollen."
      }
    ],
    seoTitle: "Imagefilm Düsseldorf | Unternehmens- & Interviewporträt",
    seoDescription: "Imagefilm und Interviewporträt aus Düsseldorf für Unternehmen, Kultur und Initiativen. Konzeption, Interviews, Kamera, Ton und Postproduktion.",
  },
  {
    articleSlug: "drehen-nach-licht",
    projectContext: "Bei Electric Lights gehörten Kamera und Lichtgestaltung zu Sophias dokumentierten Beiträgen. Die Installation verbindet diese Arbeit mit Klang und Schnitt. Die Projektseite zeigt den Kontext und nennt die Mitwirkenden.",
    heroTitle: "Kamerafrau für Musik und Kultur",
    slug: "kamera-bildgestaltung",
    parent: "videografie",
    title: "Kamera & Bildgestaltung",
    eyebrow: "Für Produktionsteams",
    summary: "Kamerafrau aus Düsseldorf für Produktionsteams: Bildgestaltung, Licht und technische Vorbereitung für Musik-, Kultur- und dokumentarische Formate.",
    claim: "Regie und Kamera stimmen sich ab. **Am Set wird die Bildidee umgesetzt.**",
    intro: "Sophia ist als Kamerafrau und ausgebildete Mediengestalterin Bild und Ton für bestehende Produktionsteams buchbar. Mit Regie und Produktion klärt sie Bildsprache, Motive, Licht und den Umfang ihres Kameraauftrags. So sind Aufgaben und technische Schnittstellen vor dem Dreh benannt.",
    outcome: "Eine Kamerabuchung kann Bildgestaltung und Lichtplanung umfassen. Welche Technik, zusätzliche Crew und Datenübergabe gebraucht werden, hängt vom Projekt ab. Kamera, Regie, Ton und Postproduktion werden im Briefing als Zuständigkeiten getrennt festgelegt.",
    image: "/media/set-hoch-02.jpg",
    alt: "Kameraarbeit an einem Filmset",
    deliverables: ["Kameraarbeit im bestehenden Team", "Bild- und Lichtkonzept", "Technische Vorbereitung", "Geordnete Datenübergabe"],
    process: ["Briefing und Referenzen prüfen", "Technik und Schnittstellen abstimmen", "Dreh im Team", "Saubere Übergabe an Postproduktion oder DIT"],
    suitableFor: ["Agenturproduktionen", "Kultur- und Musikdrehs", "Interviews und Reportage", "Kleine narrative Produktionen"],
    relatedProjects: [
      "electric-lights"
    ],
    relatedServices: ["tonaufnahme", "postproduktion"],
    focus: {
      "label": "Kameraauftrag",
      "title": "Zusammenarbeit mit Regie und Produktion",
      "lead": "Eine gemeinsame Bildidee braucht klare Absprachen über den Dreh und die spätere Verwendung des Materials.",
      "items": [
        {
          "title": "Bildsprache und Motive",
          "copy": "Referenzen, Einstellungen, Kamerabewegung und Licht werden mit der Regie besprochen. Drehort und Zeitfenster bestimmen, welche Motive vorbereitet werden können."
        },
        {
          "title": "Technik und Besetzung",
          "copy": "Kamera, Objektive, Licht, Ton und gegebenenfalls weitere Crew werden für den konkreten Auftrag abgestimmt. Eine Buchung beschreibt die Rolle und den benötigten Leistungsumfang."
        },
        {
          "title": "Daten für die Postproduktion",
          "copy": "Aufnahmeformat, Bildrate, Tonzuordnung und Übergabe werden vor dem Dreh festgelegt. Verantwortlichkeit für Sicherung und weitere Archivierung gehört ebenfalls in die Absprache."
        }
      ]
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
    seoTitle: "Kamerafrau Düsseldorf | Musik, Kultur & Produktionsteams",
    seoDescription: "Sophia Ramahi als Kamerafrau in Düsseldorf und NRW buchen: Kamera, Bildgestaltung und Licht für Musik, Kultur und bestehende Produktionsteams.",
  },
  {
    projectContext: "Electric Lights zeigt Sophias Klang-Komposition und die Verbindung von Bild, Ton und Schnitt in einer audiovisuellen Installation. Das Projekt ist als gestalterische Arbeit ausgewiesen; Interview- und Eventton werden für den jeweiligen Auftrag geplant.",
    heroTitle: "Originalton für Interviews und Drehs",
    slug: "tonaufnahme",
    parent: "videografie",
    title: "Tonaufnahme am Set",
    eyebrow: "Sprache und Atmosphäre",
    summary: "Tonaufnahme aus Düsseldorf für Interviews, Event-Statements und kompakte Videoproduktionen. Mikrofonierung und Aufnahmewege werden mit dem Dreh geplant.",
    claim: "Die Stimme muss verständlich sein. **Der Aufnahmeort wird mitgeplant.**",
    intro: "Bei Interviews und dokumentarischen Drehs gehören Raum, Störquellen und Mikrofonposition in die Vorbereitung. Sophia plant Originalton als Mediengestalterin Bild und Ton zusammen mit der Kamera oder als abgegrenzte Aufgabe. Ob ein kompaktes Setup genügt, wird anhand von Personen, Bewegung und Aufnahmewegen entschieden.",
    outcome: "Zum vereinbarten Umfang können Sprachaufnahme, Atmosphäre, Kontrolle während der Aufnahme und eine dokumentierte Übergabe gehören. Mehrere parallele Tonquellen oder eine Live-Mischung brauchen eine gesonderte Planung und gegebenenfalls eine eigene Tonbesetzung.",
    image: "/media/light-void.jpg",
    alt: "Fast schwarzer Raum mit schmalem kühlem Lichtspalt",
    deliverables: ["Mikrofonierung kleiner Setups", "Interview- und Atmoaufnahme", "Synchronisierte Übergabe", "Grundlegende Tonbearbeitung"],
    process: ["Raum und Motiv einschätzen", "Mikrofonierung festlegen", "Pegel und Störquellen kontrollieren", "Material sichern und dokumentieren"],
    suitableFor: ["Interviews", "Event-Statements", "Kleine Dokumentationen", "Kompakte One-Person-Produktionen"],
    relatedProjects: ["electric-lights"],
    relatedServices: ["kamera-bildgestaltung", "eventfilm"],
    articleSlug: "warum-ton-beim-eventfilm-entscheidet",
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
    seoTitle: "Tonaufnahme für Interviews Düsseldorf | Sophia Ramahi",
    seoDescription: "Originalton und Tonaufnahme für Interviews, Event-Statements und kleine Videoproduktionen in Düsseldorf und NRW. Vorbereitung mit Kamera und Produktion.",
  },
  {
    articleSlug: "live-visuals-vj-briefing",
    projectContext: "Beim Spektra Festival gehörten visuelle Gestaltung, Live Visuals, Aufbau und technische Abstimmung zu Sophias Aufgaben. Die Projektbilder zeigen die Bühne und die Vorbereitung. Die ergänzende Lichtstudie Dark Lights ist als Fotografie ausgewiesen.",
    heroTitle: "VJ und Live Visuals",
    slug: "live-visuals",
    parent: "vj-mapping",
    title: "VJ & Live Visuals",
    eyebrow: "Bilder, die live reagieren",
    summary: "VJ und Live Visuals aus Düsseldorf für Konzerte, Clubs und Festivals. Visuelles Material, Zuspielung und Live-Mixing werden mit Musik und Bühne abgestimmt.",
    claim: "Material wird vorbereitet. **Live entsteht der Ablauf.**",
    intro: "Sophia gestaltet und mischt Live Visuals für Konzerte, Clubabende, Festivals und Performances. Eigene Loops, Texturen oder freigegebenes Bestandsmaterial werden zu einem Set vorbereitet. Während der Veranstaltung können Bildauswahl und Übergänge auf die Musik und den Verlauf des Abends abgestimmt werden.",
    outcome: "Für eine VJ-Buchung werden Termin, Setdauer, Künstler, Bildflächen und vorhandene Technik geklärt. Bildschirmformat, Auflösung, Signalwege, Licht und Zugang zum Aufbau bestimmen den konkreten Umfang. Die Bereitstellung von Projektoren, Screens oder weiterer Technik wird separat vereinbart.",
    image: "/media/club-projektion-01.jpg",
    alt: "Live Visuals auf einer Bühne",
    deliverables: ["Visuelles Konzept", "Eigene Loops und Materialaufbereitung", "Live-Mixing", "Abstimmung mit Licht und Bühne"],
    process: ["Musik und Ablauf verstehen", "Flächen und Technik prüfen", "Material vorbereiten und testen", "Live spielen und auf den Raum reagieren"],
    suitableFor: ["Konzerte", "Clubnächte", "Festivals", "Performances und Installationen"],
    relatedProjects: ["spektra-festival", "dark-lights"],
    relatedServices: [
      "projection-mapping",
      "eventfilm"
    ],
    focus: {
      "label": "VJ-Buchung",
      "title": "Was vor dem Live-Set geklärt wird",
      "lead": "Materialgestaltung und Veranstaltungstechnik müssen am Spielort zusammenpassen.",
      "items": [
        {
          "title": "Musik und Bildmaterial",
          "copy": "Line-up, musikalische Richtung und gewünschte Stimmung geben den Rahmen. Eigene Inhalte und bereitgestelltes Material werden auf Nutzungsrechte, Bildformat und gemeinsame Gestaltung geprüft."
        },
        {
          "title": "Screens, Projektion und Signalweg",
          "copy": "Die technischen Angaben der Bühne gehören ins Briefing: Flächen, Auflösung, Anschlüsse, Zuspielort und vorhandenes Licht. Technische Zuständigkeiten und Bereitstellung werden mit den Beteiligten festgelegt."
        },
        {
          "title": "Aufbau und Live-Mixing",
          "copy": "Ein Zeitfenster für Einrichtung und Prüfung wird in den Ablauf aufgenommen. Setzeiten und Übergaben zwischen Acts bestimmen, wie das Material live eingesetzt werden kann."
        }
      ]
    },
    scopeTitle: "Was auf die Flächen kommt",
    processTitle: "Vom Ablauf bis zum Live-Set",
    faqTitle: "Häufige Fragen zu Live Visuals",
    faq: [
      {
        "question": "Was bedeutet VJ bei einer Veranstaltung?",
        "answer": "Ein VJ gestaltet und mischt bewegte Bilder live. Material und Übergänge werden vorbereitet und während des Sets auf Musik und Ablauf abgestimmt. Welche Reaktionsmöglichkeiten gewünscht sind, wird vorab besprochen."
      },
      {
        "question": "Kann Sophia für ein Konzert oder Festival gebucht werden?",
        "answer": "Ja, nach Prüfung von Termin und Umfang. Für ein Angebot braucht es Spielort, Setzeiten, Line-up, Bildflächen, vorhandene Technik und eine Ansprechperson für die technische Abstimmung."
      },
      {
        "question": "Sind Projektoren oder LED-Screens enthalten?",
        "answer": "Die technische Bereitstellung wird im Angebot ausdrücklich vereinbart. Eine VJ-Buchung allein legt weder Gerätebestand noch Bildschirm- oder Projektorleistung fest. Veranstaltungs- und Zuspieltechnik müssen zusammen geplant werden."
      },
      {
        "question": "Kann vorhandenes Material eingebunden werden?",
        "answer": "Ja, sofern Bildformat, Gestaltung und Nutzungsrechte passen. Material sollte vorab prüfbar sein; kurzfristige zusätzliche Dateien können den Vorbereitungsumfang verändern."
      },
      {
        "question": "Was unterscheidet Live Visuals von Projection Mapping?",
        "answer": "Live Visuals beschreiben die Gestaltung und Mischung von Bildern während einer Veranstaltung. Projection Mapping richtet Inhalte auf bestimmte Flächen oder Objekte aus. Beide Aufgaben können in einem Projekt zusammenkommen."
      },
      {
        "question": "Was kostet ein VJ-Set?",
        "answer": "Vorbereitung und Materialgestaltung, Setdauer, technische Einrichtung, Reise und zusätzliche Besetzung bestimmen den Aufwand. Die Kalkulation erfolgt für die konkrete Veranstaltung und benennt auch die technische Bereitstellung."
      }
    ],
    seoTitle: "VJ & Live Visuals Düsseldorf | Konzerte & Festivals",
    seoDescription: "VJ und Live Visuals aus Düsseldorf für Konzerte, Clubs und Festivals: Materialgestaltung, Zuspielung und Live-Mixing mit technischer Abstimmung.",
  },
  {
    projectContext: "Spektra Festival dokumentiert Sophias Live Visuals und die technische Vorbereitung der Bühne. Electric Lights ist eine audiovisuelle Installation mit ihren Beiträgen zu Konzept, Kamera, Licht, Klang und Schnitt. Die Arbeiten zeigen unterschiedliche Beziehungen zwischen Bild und Raum.",
    heroTitle: "Projection Mapping für Bühnen und Räume",
    slug: "projection-mapping",
    parent: "vj-mapping",
    title: "Projection Mapping",
    eyebrow: "Bilder für reale Flächen",
    summary: "Projection Mapping aus Düsseldorf für Bühnen, Objekte und Ausstellungen. Visuelle Inhalte werden mit der Projektionsfläche und Veranstaltungstechnik geplant.",
    claim: "Die Fläche bestimmt das Bild. **Die Technik bestimmt die Machbarkeit.**",
    intro: "Beim Projection Mapping werden bewegte Bilder auf die Geometrie einer Fläche oder eines Objekts abgestimmt. Sophia entwickelt visuelle Inhalte und plant ihre Einrichtung mit der Veranstaltungstechnik. Maße, Material, Blickwinkel und Umgebungslicht werden geklärt, bevor die Gestaltung festgelegt wird.",
    outcome: "Für Bühnenbilder, Ausstellungen und audiovisuelle Installationen werden Projektorposition, Zuspielung, Aufbau und Probelauf zusammen geplant. Ob eine Idee am vorgesehenen Ort funktioniert, muss anhand dieser Bedingungen geprüft werden. Projektoren, weitere Technik und Zuständigkeiten werden für jedes Projekt vereinbart.",
    image: "/media/spektra-detail-03.jpg",
    alt: "Geometrische Projektion auf einer Bühnenfläche",
    deliverables: ["Flächen- und Machbarkeitsprüfung", "Mapping-Layout", "Visuelle Inhalte", "Einrichtung und Probelauf"],
    process: ["Ort und Fläche vermessen", "Technische Machbarkeit klären", "Inhalte auf die Geometrie gestalten", "Vor Ort einrichten und korrigieren"],
    suitableFor: ["Festivalbühnen", "Ausstellungen", "Kunstinstallationen", "Marken- und Kulturveranstaltungen"],
    relatedProjects: ["spektra-festival", "electric-lights"],
    relatedServices: ["live-visuals", "eventfilm"],
    articleSlug: "projection-mapping-vorbereitung",
    focus: {
      "label": "Vorbereitung",
      "title": "Fläche, Licht und technische Einrichtung",
      "lead": "Fotos und Maße sind ein erster Einstieg. Für ein belastbares Konzept werden die Bedingungen am tatsächlichen Spielort geprüft.",
      "items": [
        {
          "title": "Fläche und Publikum",
          "copy": "Material, Farbe, Form und Blickwinkel verändern die sichtbare Projektion. Zum Briefing gehören Maße, Fotos und die vorgesehenen Publikumspositionen."
        },
        {
          "title": "Projektor und Umgebungslicht",
          "copy": "Abstand, mögliche Positionen und Raumhelligkeit begrenzen die Umsetzung. Bildgestaltung und Technik werden gemeinsam abgestimmt; eine pauschale Projektorleistung lässt sich daraus nicht ableiten."
        },
        {
          "title": "Zuspielung und Probelauf",
          "copy": "Signalwege, Anschlüsse, Aufbauzeit und Zugänge gehören in den Ablaufplan. Ein Test auf der realen Fläche wird vorab eingeplant, damit Inhalte und Einrichtung zusammen geprüft werden können."
        }
      ]
    },
    scopeTitle: "Was auf der Fläche entsteht",
    processTitle: "Von der Fläche bis zum Probelauf",
    faqTitle: "Häufige Fragen zum Mapping",
    faq: [
      {
        "question": "Für welche Flächen eignet sich Projection Mapping?",
        "answer": "Bühnenbilder, Objekte oder Flächen in Ausstellungen können geeignete Ausgangspunkte sein. Geometrie, Material, Projektorposition, Umgebungslicht und Publikumswege müssen für die konkrete Idee geprüft werden."
      },
      {
        "question": "Was braucht Sophia für die erste Einschätzung?",
        "answer": "Termin, Ort, Innen- oder Außensituation, Fotos und Maße der Fläche sowie Angaben zu vorhandenen Projektoren, Licht und Aufbauzeit. Hilfreich sind auch eine Ansprechperson der Veranstaltungstechnik und die gewünschte Nutzung."
      },
      {
        "question": "Sind Projektoren und Aufbau enthalten?",
        "answer": "Das wird im Angebot benannt. Gestaltung, Zuspielung, technische Bereitstellung und Aufbau können unterschiedliche Zuständigkeiten haben. Eine Anfrage legt deshalb noch keinen vollständigen Technikumfang fest."
      },
      {
        "question": "Ist Mapping bei Tageslicht möglich?",
        "answer": "Die Machbarkeit hängt von Fläche, Umgebungslicht, Projektionsabstand und Technik ab. Sie muss geprüft werden, bevor eine Umsetzung zugesagt wird. Für Außenbereiche kommen Wetter und weitere technische Rahmenbedingungen hinzu."
      },
      {
        "question": "Was unterscheidet Mapping von einem VJ-Set?",
        "answer": "Mapping richtet Bilder auf bestimmte Flächen aus. Ein VJ-Set beschreibt die Live-Mischung von Bildmaterial während einer Veranstaltung. Die Kombination kann sinnvoll sein, braucht aber eine gemeinsame Inhalts- und Technikplanung."
      },
      {
        "question": "Wie wird ein Mapping-Projekt kalkuliert?",
        "answer": "Flächenzahl und Geometrie, Gestaltung, technische Einrichtung, Proben, Spielzeit und Reise beeinflussen den Aufwand. Nach der Prüfung wird ein konkreter Umfang mit Zuständigkeiten und Technikbedarf angeboten."
      }
    ],
    seoTitle: "Projection Mapping Düsseldorf | Bühnen & Ausstellungen",
    seoDescription: "Projection Mapping aus Düsseldorf für Bühnen, Objekte und Ausstellungen. Visuelle Inhalte, Flächenplanung, Einrichtung und technische Abstimmung.",
  },
  {
    planningLinks: [
      {
        "label": "SRT, WebVTT und eingebrannte Untertitel vergleichen",
        "href": "/journal/video-untertitel-srt-einbrennen/"
      }
    ],
    articleSlug: "videoschnitt-material-vorbereiten",
    projectContext: "Electric Lights verbindet Sophias Schnitt und Klang-Komposition mit Kamera und Lichtgestaltung. Bei 24h to take entstanden Kurzfilme unter den Bedingungen eines Wettbewerbs. Die Projektseiten zeigen diese unterschiedlichen Produktionskontexte.",
    heroTitle: "Videoschnitt für Musik und Kultur",
    slug: "postproduktion",
    parent: "leistungen",
    title: "Postproduktion",
    eyebrow: "Schnitt, Farbe und Ton",
    summary: "Videoschnitt aus Düsseldorf für Musik, Kultur, Events und Interviews. Materialsichtung, Schnitt, Farbgestaltung und Ton werden bis zur Ausspielung abgestimmt.",
    claim: "Das Material ist da. **Der Schnitt gibt dem Film seine Form.**",
    intro: "Sophia übernimmt Videoschnitt und Postproduktion für eigene Drehs und ausgewählte Fremdproduktionen. Vor dem Schnitt werden Material, Ton, gewünschte Aussage und Nutzung gesichtet. Daraus ergibt sich ein Rahmen für Rohschnitt, Feinschnitt, Farbgestaltung und Tonbearbeitung.",
    outcome: "Materialmenge, Filmfassungen, Untertitel, Korrekturrunden und Exporte stehen im Angebot. Bei Fremdmaterial müssen Dateiformate, Synchronisation und Nutzungsrechte vorab prüfbar sein. Der Aufwand lässt sich aus der Laufzeit des fertigen Films allein nicht ableiten.",
    image: "/media/journal-02.jpg",
    alt: "Postproduktion eines Videoprojekts",
    deliverables: ["Materialsichtung und Rohschnitt", "Feinschnitt und Dramaturgie", "Farbgestaltung", "Tonbearbeitung, Untertitel und Exporte"],
    process: ["Material und Ziel prüfen", "Rohschnitt abstimmen", "Feinschnitt, Farbe und Ton", "Freigabe und Masterexport"],
    suitableFor: ["Event- und Musikproduktionen", "Interviews", "Social-Versionen", "Bereits gedrehtes Fremdmaterial"],
    relatedProjects: ["electric-lights", "24h-to-take"],
    relatedServices: ["eventfilm", "musikvideo"],
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
    seoTitle: "Videoschnitt & Postproduktion Düsseldorf | Sophia Ramahi",
    seoDescription: "Videoschnitt und Postproduktion aus Düsseldorf für Musik, Kultur, Events und Interviews: Sichtung, Schnitt, Farbgestaltung, Ton und Formatvarianten.",
  },
];

export const services: Service[] = servicesBase.map(extendService);

const projectsBase: Project[] = [
  {
    schemaRole: "creator",
    slug: "electric-lights",
    title: "Electric Lights",
    seoTitle: "Electric Lights im KIT | Audiovisuelle Installation",
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
      {
        "title": "Die Idee",
        "copy": [
          "Ausgangspunkt war die Frage, wie Licht emotional wirken kann, ohne nur dekorativ zu sein. Daraus entwickelte sich die Geschichte einer jungen Frau auf dem Heimweg. Die Eindrücke des Tages kehren als Farben, Klänge und Lichtspiele zurück.",
          "Die visuelle Richtung verbindet dunkle Science-Fiction-Stimmungen mit vertrauten, beinahe privaten Momenten. Der Film bleibt bewusst zwischen äußerer Realität und innerem Bild."
        ],
        "links": [
          {
            "label": "Kamera und Bildgestaltung für Musik- und Kulturproduktionen",
            "href": "/videografie/kamera-bildgestaltung/"
          },
          {
            "label": "Licht beim Videodreh vorbereiten",
            "href": "/journal/drehen-nach-licht/"
          }
        ]
      },
      {
        "title": "Bild und Klang als Einheit",
        "copy": [
          "Lichtpulse, Farben und Übergänge wurden gemeinsam mit dem Sound entwickelt. So entstand kein Film mit nachträglicher Musik, sondern eine audiovisuelle Arbeit, bei der beide Ebenen voneinander abhängen.",
          "An dem Projekt wirkten Edda Mia Löhr, Thomas Klein und Konstantin Myrokis mit."
        ],
        "links": [
          {
            "label": "Videoschnitt und Postproduktion als eigenes Gewerk",
            "href": "/postproduktion/"
          }
        ]
      }
    ],
    seoDescription: "Electric Lights: audiovisuelle Installation von Sophia Ramahi über Licht, Klang und Emotion, gezeigt im KIT – Kunst im Tunnel Düsseldorf.",
  },
  {
    schemaRole: "creator",
    slug: "dark-lights",
    title: "Dark Lights",
    seoTitle: "Dark Lights | Fotografie und Lichtstudie von Sophia Ramahi",
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
      {
        "title": "Reduktion statt Kulisse",
        "copy": [
          "Die Bilder gewinnen ihre Wirkung nicht aus einem großen Set. Entscheidend sind Richtung und Farbe des Lichts, der Ausschnitt und die Nähe zur Person.",
          "Dark Lights bleibt deshalb als kurze, konzentrierte Serie lesbar – jedes Bild trägt allein, ohne Erklärung und ohne Kulisse."
        ],
        "links": [
          {
            "label": "Licht, Aufnahmeort und Tageszeit beim Videodreh planen",
            "href": "/journal/drehen-nach-licht/"
          }
        ]
      }
    ],
    seoDescription: "Dark Lights ist eine fotografische Lichtstudie von Sophia Ramahi mit Farbe, Projektion und reduzierter Bildgestaltung.",
  },
  {
    schemaRole: "contributor",
    slug: "24h-to-take",
    title: "24h to take",
    seoTitle: "24h to take Düsseldorf | Sophias Rollen im Videowettbewerb",
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
      {
        "title": "Arbeiten unter Zeitdruck",
        "copy": [
          "Als Teilnehmerin plante, filmte und schnitt Sophia gemeinsam mit einem Team bis zur letzten Minute. Wetter, Technik und knappe Entscheidungen gehörten zum Format – und mussten innerhalb des gesetzten Rahmens gelöst werden."
        ],
        "links": [
          {
            "label": "Material und Feedback für einen Schnittauftrag vorbereiten",
            "href": "/journal/videoschnitt-material-vorbereiten/"
          }
        ]
      },
      {
        "title": "Mehr als der eigene Film",
        "copy": [
          "In der Organisation arbeitete Sophia zunächst an Design und Social-Media-Kommunikation. Später kamen Technikaufbau, Verleih, Livestream-Bedienung und die Mitarbeit in der Jury hinzu. Dadurch verbindet das Projekt praktische Produktion mit Veranstaltungsorganisation."
        ],
        "links": [
          {
            "label": "Eventfilm und Dokumentation für Veranstaltungen",
            "href": "/videografie/eventfilm/"
          }
        ]
      }
    ],
    seoDescription: "24h to take: Sophias Arbeit als Teilnehmerin, Organisatorin, Technik-Support und Jurymitglied beim Kurzfilmwettbewerb der Jungen Filmwerkstatt Düsseldorf.",
  },
  {
    schemaRole: "contributor",
    slug: "spektra-festival",
    title: "Spektra Festival",
    seoTitle: "Spektra Festival | Live Visuals und Projektion",
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
      {
        "title": "Die Fläche gehört zur Gestaltung",
        "copy": [
          "Die Projektionen reagieren auf Bühnenbild, Musiker und vorhandenes Licht. Dadurch entsteht kein isolierter Screen, sondern eine gemeinsame visuelle Umgebung.",
          "Aufbauaufnahmen und fertige Bühnenbilder stehen bewusst nebeneinander. Sie zeigen, dass Live Visuals ebenso viel technische Vorbereitung wie spontane Reaktion während der Veranstaltung brauchen."
        ],
        "links": [
          {
            "label": "Live Visuals für eine Veranstaltung vorbereiten",
            "href": "/journal/live-visuals-vj-briefing/"
          },
          {
            "label": "Die konkrete Fläche für Projection Mapping prüfen",
            "href": "/journal/projection-mapping-vorbereitung/"
          }
        ]
      }
    ],
    seoDescription: "Spektra Festival: Live Visuals, Projektion, Aufbau und Festivaldokumentation von Sophia Ramahi.",
  },
];

export const projects: Project[] = projectsBase.map(extendProject);

const locationSeed: Omit<Location, "services" | "faq" | "image" | "indexable">[] = [
  { slug: "duesseldorf", city: "Düsseldorf", region: "Basis", distance: "0 km", intro: "Sophias Basis liegt in Düsseldorf. Vorgespräche, kleine Vorproduktionen und viele Drehs lassen sich dadurch ohne lange Anfahrt planen.", localAngle: "Kulturorte, Musik, freie Szene, Agenturen und Unternehmen liegen hier eng beieinander. Für Drehs innerhalb der Stadt können Besichtigung und Produktion oft getrennt und pragmatisch organisiert werden.", logistics: "Anfahrt innerhalb Düsseldorfs wird im Angebot transparent ausgewiesen. Technik, Park- oder Ladezugang und Drehgenehmigungen werden projektbezogen geprüft." },
  { slug: "koeln", city: "Köln", region: "Rheinland", distance: "ca. 40 km", intro: "Musik-, Kultur- und Eventproduktionen in Köln werden von Düsseldorf aus geplant. Aufbau, Spielzeiten und Reise gehören ins Briefing.", localAngle: "Bei Innenstadt-Locations, Messe- oder Studioproduktionen lohnt sich eine frühe Klärung von Ladewegen, Parkmöglichkeiten, Lärm und Zeitfenstern.", logistics: "Die Anfahrt wird ab Düsseldorf kalkuliert. Bei frühen Starts oder mehrtägigen Produktionen werden Zeitplan und mögliche Übernachtung vorab vereinbart." },
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

const articlesBase: Article[] = [
  {
    updatedAt: "2026-10-09",
    slug: "warum-ton-beim-eventfilm-entscheidet",
    title: "Eventfilm-Ton planen: Interviews, Reden und Atmosphäre",
    excerpt: "Welche Tonquellen braucht der Eventfilm? Ein Briefing für Veranstalter zu Interviews, Mischpultsignal, Atmosphäre und Zuständigkeiten.",
    image: "/media/journal-01.jpg",
    publishedAt: "2026-08-12",
    sections: [
      {
        "title": "Zuerst festlegen, was im Film zu hören sein soll",
        "copy": [
          "Ein Eventfilm kann einen Abend über Musik und Bilder verdichten. Sollen Reden, Interviews oder Gespräche verständlich vorkommen, verändert das die Aufnahmeplanung. Ein Mikrofon an der Kamera erfasst den Klang am Kamerastandort; eine Person auf der Bühne oder in einem lauten Foyer braucht einen passend geplanten Aufnahmeweg.",
          "Benennen Sie vor dem Dreh die Aussagen, die später gebraucht werden. Soll eine Rede vollständig dokumentiert werden? Genügen kurze Statements? Muss ein Gespräch während des laufenden Programms stattfinden? Diese Entscheidungen gehören zusammen mit dem Ablaufplan ins Briefing."
        ]
      },
      {
        "title": "Mischpultsignal und Atmosphäre haben verschiedene Aufgaben",
        "copy": [
          "Ein vorhandenes Mischpultsignal kann ein Ausgangspunkt für Reden oder Bühneninhalte sein. Mit der Veranstaltungstechnik müssen Anschluss, Signalinhalt, Pegel, Zuständigkeit und ein Testfenster geklärt werden. Die Aussage ‚Ton kommt vom Pult‘ beschreibt noch keinen vollständigen Aufnahmeweg.",
          "Applaus, Publikum und Raumklang geben den Bildern ihren Ort. Sie können zusätzlich zur Sprachaufnahme gebraucht werden. Welche Spuren sinnvoll sind und wie sie zusammengeführt werden, hängt vom späteren Film und der Veranstaltung ab."
        ],
        "links": [
          {
            "label": "Tonaufnahme für Interviews und Videoproduktionen",
            "href": "/videografie/tonaufnahme/"
          }
        ]
      },
      {
        "title": "Interviews brauchen einen Ort und ein Zeitfenster",
        "copy": [
          "Für kurze Statements sollte ein zugänglicher Gesprächsort vorgesehen sein. Musik, Lüftung, Durchgangsverkehr und andere Gespräche sind bei der Auswahl mitzudenken. Ein auf dem Ablaufplan freies Zeitfenster reicht nicht, wenn die gewünschte Person währenddessen an anderer Stelle gebraucht wird.",
          "Halten Sie fest, wer Gesprächspartner koordiniert und wann Kamera und Ton aufgebaut werden können. Bei parallel laufendem Bühnenprogramm muss die Besetzung diese Aufgaben abdecken können."
        ]
      },
      {
        "title": "Verantwortung und Übergabe vor dem Event klären",
        "copy": [
          "Wer zeichnet welche Quelle auf, kontrolliert die Aufnahme und sichert die Dateien? Bei mehreren Kameras oder getrennten Tonaufnahmen werden außerdem Zuordnung und Synchronisation abgesprochen. Die Postproduktion braucht nachvollziehbar benanntes Material und die Angaben, mit denen die Aufnahmen zusammenpassen.",
          "Vorhandene Aufnahmen lassen sich bearbeiten. Fehlende Aussagen oder überdeckte Sprache sind damit aber nicht automatisch wiederherstellbar. Die Vorbereitung begrenzt solche Risiken besser als ein pauschales Reparaturversprechen."
        ]
      },
      {
        "title": "Diese Angaben helfen bei der Anfrage",
        "copy": [
          "Nennen Sie Termin, Ort, Ablauf, wichtige Reden und geplante Interviews. Ergänzen Sie eine technische Ansprechperson, vorhandene Tonanschlüsse, mögliche Aufbauzeiten und die gewünschte Veröffentlichung. Hauptfilm, komplette Rede und Social-Clip können unterschiedliche Aufnahmen und Nutzungsfreigaben brauchen.",
          "Mit diesen Angaben lässt sich prüfen, welche Kamera- und Tonbesetzung zur Veranstaltung passt und welche Leistungen im Angebot stehen müssen."
        ],
        "links": [
          {
            "label": "Eventfilm und Festival-Aftermovie anfragen",
            "href": "/videografie/eventfilm/"
          }
        ]
      }
    ],
    related: [{ label: "Eventfilm", href: "/videografie/eventfilm/" }, { label: "Tonaufnahme am Set", href: "/videografie/tonaufnahme/" }],
  },
  {
    updatedAt: "2026-10-09",
    slug: "musikvideo-mit-kleinem-budget",
    title: "Musikvideo-Kosten: Budget, Konzept und Dreh planen",
    excerpt: "Was ein Musikvideo kostet, hängt von Konzept, Orten, Crew, Dreh und Schnitt ab. Kostenblöcke benennen, Angebote vergleichen und das Budget gezielt einsetzen.",
    image: "/media/club-projektion-03.jpg",
    publishedAt: "2026-08-12",
    sections: [
      {
        "title": "Was bestimmt die Kosten eines Musikvideos?",
        "copy": [
          "Der Produktionsumfang bestimmt den Preis: Konzept und Vorbereitung, Drehorte und Mitwirkende, Kamera und Licht, Drehtage, Schnitt und gewünschte Fassungen. Die Länge des fertigen Videos allein genügt dafür nicht. Ein kurzer Film mit mehreren Motiven kann mehr Vorbereitung und Umbauten benötigen als eine konzentrierte Performance an einem Ort.",
          "Für die Kalkulation werden diese Aufgaben einzeln beschrieben. Benennen Sie vorhandene Ressourcen und offene Entscheidungen, damit ein Angebot denselben Umfang abbildet. Die Tabelle ist eine Planungsstruktur ohne pauschale Marktpreise; verbindliche Beträge entstehen aus dem konkreten Angebot."
        ],
        "table": {
          "caption": "Kostenblöcke für eine Musikvideo-Kalkulation",
          "columns": [
            "Kostenblock",
            "Angaben für das Angebot",
            "Typische offene Entscheidung"
          ],
          "rows": [
            [
              "Konzept und Vorbereitung",
              "Songfassung, Bildidee, Referenzen, Abstimmungen",
              "Konzeptentwicklung oder bereits ausgearbeiteter Entwurf?"
            ],
            [
              "Orte und Mitwirkende",
              "Motive, Zugänge, Personen, Freigaben, Reise",
              "Welche Kosten und Zuständigkeiten sind bereits geklärt?"
            ],
            [
              "Dreh und Technik",
              "Setups, Licht, Kamerabesetzung, Zeitfenster, Tonart",
              "Playback-Dreh oder Live-Session mit Tonproduktion?"
            ],
            [
              "Postproduktion",
              "Materialumfang, Schnitt, Farbgestaltung, Ton, Korrekturen",
              "Welche Hauptfassung und welche zusätzlichen Versionen?"
            ],
            [
              "Auslieferung",
              "Formate, Untertitel, Abgabetermine, Archivumfang",
              "Welche Dateien und Nutzungsorte gehören zum Auftrag?"
            ]
          ]
        },
        "links": [
          {
            "label": "Leere Vorlage für die Musikvideo-Kalkulation herunterladen (CSV)",
            "href": "/downloads/musikvideo-kalkulation.csv"
          }
        ]
      },
      {
        "title": "Die Idee am Produktionsrahmen prüfen",
        "copy": [
          "Ein kleines Budget beschreibt zunächst eine Grenze, noch keinen Stil. Eine intime Performance, eine Erzählung oder experimentelle Lichtbilder können jeweils passen. Entscheidend ist, wie viele Orte, Mitwirkende, Umbauten und Aufnahmen die Idee tatsächlich braucht.",
          "Legen Sie Song, Veröffentlichungstermin und verfügbaren Rahmen gemeinsam auf den Tisch. Wenn die Idee damit nicht umsetzbar ist, wird sie konzentriert: weniger Motive, ein klarerer Ablauf oder ein anderer gestalterischer Ansatz. Eine Kürzung sollte das Konzept vereinfachen und nicht wichtige Vorbereitung unbemerkt streichen."
        ]
      },
      {
        "title": "Performancevideo und Live-Session unterscheiden",
        "copy": [
          "Bei einem Playback-Dreh wird zu einer vorhandenen Aufnahme performt. Für eine Live-Session muss die Darbietung selbst aufgenommen werden. Raum, Besetzung und Tonplanung unterscheiden sich deshalb. Diese Entscheidung sollte feststehen, bevor Kamera- und Technikbedarf kalkuliert werden.",
          "Eine Performance braucht Vorbereitung: Bewegungen, Positionen und der Zusammenhang zwischen Song und Bild werden vor dem Dreh besprochen. Auch bei wenigen Einstellungen kosten Wiederholungen, Lichtänderungen und Umbauten Zeit."
        ]
      },
      {
        "title": "Drehort und Licht gemeinsam auswählen",
        "copy": [
          "Ein Ort sollte zur Bildidee passen und den vorgesehenen Dreh ermöglichen. Zu prüfen sind Zugang, Aufbau, vorhandenes Licht, Platz, Strom und benötigte Freigaben. Ein scheinbar günstiger Ort kann aufwendig werden, wenn umfangreiche Veränderungen oder lange Umbauten nötig sind.",
          "Ein nachvollziehbares Lichtkonzept hilft, mehrere Einstellungen gestalterisch zu verbinden. Welche Technik dafür sinnvoll ist, wird anhand des Ortes und der Motive geplant. Equipmentlisten ohne diese Entscheidungen ergeben noch keinen Drehplan."
        ],
        "links": [
          {
            "label": "Kamera und Bildgestaltung für Musikproduktionen",
            "href": "/videografie/kamera-bildgestaltung/"
          }
        ]
      },
      {
        "title": "Hochformate und Teaser in die Aufnahmeplanung aufnehmen",
        "copy": [
          "Für ein Musikvideo auf einer Videoplattform und kurze Clips im Hochformat können andere Ausschnitte gebraucht werden. Benennen Sie deshalb vor dem Dreh die gewünschten Fassungen, ihre Verwendung und den Abgabetermin. So lässt sich entscheiden, welche Motive in mehreren Bildformaten funktionieren sollen.",
          "Die Zahl der Versionen und Korrekturrunden gehört in den vereinbarten Umfang. Ein zusätzliches Bildformat kann Schnitt, Gestaltung und Freigabe verändern; es ist kein automatisch kostenfreier Export."
        ]
      },
      {
        "title": "Ein Briefing, das eine Kalkulation ermöglicht",
        "copy": [
          "Schicken Sie den Song, wenige aussagekräftige Bildreferenzen, den Release-Termin und Ihren Produktionsrahmen. Beschreiben Sie vorhandene Orte, Mitwirkende und Ideen. Nennen Sie außerdem, welche Hauptfassung und welche kurzen Versionen veröffentlicht werden sollen.",
          "Ein Angebot kann daraufhin Konzept, Vorbereitung, Dreh, Postproduktion und Auslieferung benennen. Preise, Crew und Drehtage werden für diese konkrete Idee bestimmt."
        ],
        "links": [
          {
            "label": "Musikvideo-Produktion mit Sophia besprechen",
            "href": "/videografie/musikvideo/"
          }
        ]
      }
    ],
    related: [
      {
        "label": "Musikvideo",
        "href": "/videografie/musikvideo/"
      },
      {
        "label": "Dark Lights",
        "href": "/projekte/dark-lights/"
      },
      {
        "label": "Storyboard, Shotlist und Drehplan mit Vorlage",
        "href": "/journal/musikvideo-storyboard-drehplan/"
      }
    ],
  },
  {
    sourcesContext: "Die Dokumentation erläutert das technische Prinzip an einem Softwarebeispiel. Software, Flächen und Zuständigkeiten werden für die tatsächliche Installation geprüft.",
    sources: [
      {
        "label": "Resolume: Ausgangstransformation für Projection Mapping",
        "href": "https://www.resolume.com/support/de/output-transformation"
      }
    ],
    updatedAt: "2026-10-09",
    slug: "projection-mapping-vorbereitung",
    title: "Projection Mapping planen: Checkliste für die Anfrage",
    excerpt: "Fläche, Umgebungslicht, Projektorposition und Zuspielung: Welche Angaben für die Planung von Mapping auf Bühnen und in Ausstellungen gebraucht werden.",
    image: "/media/spektra-detail-02.jpg",
    publishedAt: "2026-08-12",
    sections: [
      {
        "title": "Was ist Projection Mapping?",
        "copy": [
          "Bei Projection Mapping wird ein projiziertes Bild an eine konkrete Fläche oder Form angepasst. Ausschnitte, Kanten und Perspektive werden so eingerichtet, dass die Gestaltung zum Objekt oder Bühnenbild passt. Die Fläche ist damit Teil der Bildidee; ein Video einfach auf eine freie Wand zu zeigen ist noch kein ausgearbeitetes Mapping-Konzept.",
          "Die Gestaltung von Clips, die Anpassung ihrer Ausgabe und die Bereitstellung der Veranstaltungstechnik sind unterschiedliche Aufgaben. Auch live gemischte Bilder können auf eine vorbereitete Fläche ausgegeben werden. Für die Planung müssen Inhalt, Oberfläche, Projektorposition und Zuspielung zusammen betrachtet werden. Die folgenden sechs Fragen helfen, die Angaben dafür zu sammeln."
        ],
        "links": [
          {
            "label": "Live Visuals und Mapping im Auftrag unterscheiden",
            "href": "/vj-mapping/"
          }
        ]
      },
      {
        "title": "1. Welche Fläche soll bespielt werden?",
        "copy": [
          "Beginnen Sie mit Fotos und Maßen der Fläche oder des Objekts. Material, Farbe, Form und Winkel gehören dazu. Eine helle, ebene Wand stellt andere Bedingungen als Stoff, eine strukturierte Oberfläche oder ein räumliches Objekt.",
          "Dokumentieren Sie auch die vorgesehenen Publikumspositionen. Das Bild muss aus den relevanten Blickwinkeln lesbar sein. Ein Gestaltungsentwurf allein beantwortet noch nicht, wie die Projektion im tatsächlichen Raum aussieht."
        ]
      },
      {
        "title": "2. Welches Licht ist während der Wiedergabe vorhanden?",
        "copy": [
          "Beschreiben Sie Tageslicht, Saallicht, Bühnenlicht und mögliche Veränderungen während der Veranstaltung. Für die Planung ist der Zustand zur Spielzeit wichtig. Eine dunkle Aufbauphase sagt wenig über eine später beleuchtete Bühne aus.",
          "Raumhelligkeit, Projektionsabstand und Fläche müssen zusammen mit der verfügbaren Technik geprüft werden. Eine pauschale Aussage wie ‚draußen funktioniert das‘ oder eine feste Projektorleistung ersetzt diese Prüfung nicht."
        ]
      },
      {
        "title": "3. Wo kann Technik sicher eingerichtet werden?",
        "copy": [
          "Zum Briefing gehören mögliche Projektorpositionen, Platz für die Zuspielung, Anschlüsse und Zugänge. Publikum, Darstellende und Aufbauten können Sicht- und Signalwege verändern. Verantwortlichkeiten für Einrichtung und technische Bereitstellung werden mit den Beteiligten festgelegt.",
          "Geben Sie an, welche Technik bereits vorhanden ist und wer ihre Spezifikationen bestätigen kann. Gestaltung, Projektoren, Zuspielung und Veranstaltungstechnik sind zusammenhängende Aufgaben, deren Umfang im Angebot benannt werden muss."
        ]
      },
      {
        "title": "4. Wie laufen Inhalte und Live-Einsatz zusammen?",
        "copy": [
          "Ist eine fest ablaufende Sequenz geplant oder werden Bilder live gemischt? Gibt es Wechsel zwischen Acts, Flächen oder anderen Bildquellen? Diese Fragen bestimmen, welches Material vorbereitet und wie es zugespielt werden soll.",
          "Bereitgestellte Inhalte müssen auf Bildformat, Auflösung, Gestaltung und Nutzungsrechte geprüft werden. Bei einer Kombination mit Live Visuals werden Übergänge und technische Zuständigkeiten gemeinsam abgestimmt."
        ],
        "links": [
          {
            "label": "VJ und Live Visuals für Veranstaltungen",
            "href": "/vj-mapping/live-visuals/"
          }
        ]
      },
      {
        "title": "5. Wann sind Aufbau und ein Probelauf möglich?",
        "copy": [
          "Planen Sie ein Zeitfenster für Einrichtung und Prüfung auf der realen Fläche. Dabei können Geometrie, Ausschnitt, Bildwirkung und Zusammenspiel mit dem Licht beurteilt werden. Änderungen an Bühnenbild oder Projektorposition können eine erneute Abstimmung nötig machen.",
          "Vor dem Termin müssen Zugänge, Ansprechpartner und mögliche Umbauten bekannt sein. Ein Probelauf gehört in den Ablaufplan; er sollte nicht erst während der Veranstaltung verhandelt werden."
        ]
      },
      {
        "title": "6. Was gehört in die erste Anfrage?",
        "copy": [
          "Termin und Ort, Fotos und Maße, Innen- oder Außensituation, Spielzeiten, vorhandene Technik und mögliche Aufbauzeiten sind ein brauchbarer Einstieg. Ergänzen Sie gewünschte Inhalte, Publikumspositionen und die technische Ansprechperson.",
          "Damit kann Sophia die gestalterische Aufgabe und die weitere technische Prüfung eingrenzen. Machbarkeit, Technikumfang und Kosten werden anschließend für das konkrete Projekt vereinbart."
        ],
        "links": [
          {
            "label": "Projection Mapping für Bühne oder Ausstellung anfragen",
            "href": "/vj-mapping/projection-mapping/"
          }
        ]
      }
    ],
    related: [{ label: "Projection Mapping", href: "/vj-mapping/projection-mapping/" }, { label: "Spektra Festival", href: "/projekte/spektra-festival/" }],
  },
  {
    sourcesContext: "Für den konkreten Dreh gelten die Angaben und Entscheidungen der zuständigen Stelle.",
    sources: [
      {
        "label": "Düsseldorf: Sondernutzung im öffentlichen Straßenraum",
        "href": "https://service.duesseldorf.de/suche/-/vr-bis-detail/dienstleistung/385/show"
      },
      {
        "label": "Düsseldorf: Sondernutzung von Grünanlagen",
        "href": "https://www.duesseldorf.de/stadtgruen/freizeit/sondernutzung-gruenanlagen"
      },
      {
        "label": "Düsseldorf: Antrag und Angaben für Grünanlagen",
        "href": "https://service.duesseldorf.de/suche/-/vr-bis-detail/dienstleistung/645/show"
      }
    ],
    updatedAt: "2026-10-09",
    slug: "drehgenehmigung-nrw",
    title: "Drehgenehmigung in NRW: Zuständigkeit vorab klären",
    excerpt: "Drehort, Flächennutzung und Aufbau genau beschreiben: ein Planungsleitfaden mit offiziellen Düsseldorfer Anlaufstellen für Straßenraum und Grünanlagen.",
    image: "/media/set-quer-01.jpg",
    publishedAt: "2026-08-13",
    sections: [
      {
        "title": "Der genaue Drehort ist der erste Schritt",
        "copy": [
          "Für einen Dreh in NRW gibt es keine einheitliche Freigabe, die alle Orte und Aufbauten abdeckt. Klären Sie für die konkret genutzte Fläche, wer über Zugang und Nutzung entscheidet. Öffentlicher Straßenraum, städtische Grünanlagen und ein privater Veranstaltungsort können unterschiedliche Ansprechstellen haben.",
          "Beschreiben Sie den geplanten Dreh, bevor Sie eine pauschale Aussage zur Genehmigungspflicht übernehmen: Ort, Zeit, Aufbau und tatsächlich beanspruchte Fläche sind für die Anfrage wichtig. Bei Unsicherheit wird die zuständige Stelle um eine Einordnung gebeten."
        ]
      },
      {
        "title": "Düsseldorf: Straßenraum und Grünanlagen getrennt prüfen",
        "copy": [
          "Das Düsseldorfer Serviceportal führt eine eigene Anlaufstelle für Sondernutzung im öffentlichen Straßenraum. Die Stadt beschreibt außerdem Film- und Werbeaufnahmen in Grünanlagen als möglichen Fall einer grundsätzlich genehmigungspflichtigen Sondernutzung. Eine frei zugängliche Grünanlage ist deshalb keine pauschale Drehfreigabe.",
          "Für eine Anfrage zu Grünanlagen verlangt das Serviceportal unter anderem eine genaue Beschreibung von Ort und Set sowie eine Erläuterung der Filmaufnahmen. Die Entscheidung hängt vom Einzelfall ab. Nutzen Sie für den konkreten Termin die unten verlinkten offiziellen Angaben."
        ]
      },
      {
        "title": "Die Anfrage anhand des geplanten Setups formulieren",
        "copy": [
          "Sammeln Sie Motivadresse, Drehdatum, Zeitfenster und eine kurze Beschreibung der Aufnahmen. Ergänzen Sie Team, Kamera- und Lichtaufbau, Wege, Techniktransport und mögliche Änderungen am normalen Betrieb. Pläne oder Fotos helfen, die Nutzung verständlich zu machen.",
          "Die zuständige Stelle oder Location kann weitere Angaben verlangen. Fragen Sie nach dem notwendigen Verfahren, den geltenden Bedingungen und der Bearbeitungszeit für Ihren konkreten Aufbau. Eine angenommene Standardfrist ist keine Zusage."
        ]
      },
      {
        "title": "Veranstaltungsorte und fremde Betriebsflächen",
        "copy": [
          "An Clubs, Ausstellungsorten, Verkehrsanlagen und Unternehmensstandorten sollte die Nutzung mit den Verantwortlichen vor Ort abgestimmt werden. Zugang, Aufbau, Aufnahmepositionen und betriebliche Einschränkungen gehören in dieselbe Planung.",
          "Eine Ortsfreigabe klärt nicht automatisch jede spätere Nutzung von Personen, Darbietungen, Musik oder fremdem Bildmaterial. Halten Sie mit den Beteiligten fest, welche Zuständigkeiten und Freigaben für Dreh und Veröffentlichung geprüft werden müssen."
        ]
      },
      {
        "title": "Freigaben in den Drehplan übernehmen",
        "copy": [
          "Planen Sie die benötigten Klärungen bereits bei der Motivauswahl ein. Zugang, Aufbauzeit und erlaubte Nutzung müssen zur vorgesehenen Aufnahme passen. Ein Ersatzmotiv kann helfen, sollte aber ebenfalls auf seine Bedingungen geprüft sein.",
          "Für ein Briefing an Sophia sind bereits geklärte Orte und offene Fragen gleichermaßen hilfreich. Nennen Sie, wer die Location betreut und welche schriftlichen Angaben vorliegen. So kann die Kamera- und Produktionsplanung daran anschließen."
        ],
        "links": [
          {
            "label": "Kamera und Bildgestaltung für den geplanten Dreh",
            "href": "/videografie/kamera-bildgestaltung/"
          },
          {
            "label": "Produktion und Einsatzorte in NRW",
            "href": "/standorte/"
          }
        ]
      }
    ],
    related: [{ label: "Musikvideo", href: "/videografie/musikvideo/" }, { label: "Eventfilm", href: "/videografie/eventfilm/" }],
  },
  {
    updatedAt: "2026-10-09",
    slug: "was-einen-eventfilm-teuer-macht",
    title: "Eventfilm-Kosten: Welche Angaben ein Angebot braucht",
    excerpt: "Drehzeit, Kamerabesetzung, Ton, Materialmenge und Fassungen bestimmen den Aufwand. So lässt sich ein Eventfilm konkret kalkulieren und vergleichen.",
    image: "/media/spektra-buehne-02.jpg",
    publishedAt: "2026-08-13",
    sections: [
      {
        "title": "Das Filmziel vor dem Preis festlegen",
        "copy": [
          "Zwei Filme von derselben Veranstaltung können einen sehr unterschiedlichen Aufwand haben. Ein kurzer Rückblick auf die Atmosphäre braucht andere Aufnahmen als eine Dokumentation mit Reden, Interviews und mehreren Programmpunkten. Die Laufzeit des Endfilms allein beschreibt den Produktionsumfang nicht.",
          "Benennen Sie deshalb zuerst Zielgruppe und Verwendung. Soll der Film eine nächste Ausgabe ankündigen, die Veranstaltung dokumentieren oder Inhalte für Partner und Archiv festhalten? Diese Aufgabe bestimmt, was am Veranstaltungstag aufgenommen werden muss."
        ],
        "links": [
          {
            "label": "Eventfilm, Highlightfilm und Festival-Aftermovie",
            "href": "/videografie/eventfilm/"
          }
        ]
      },
      {
        "title": "Drehzeit und paralleles Programm",
        "copy": [
          "Im Aufwand stecken auch Aufbau, technische Abstimmung, Wege und Übergaben. Ein kurzes Bühnenprogramm kann längere Anwesenheit erfordern, wenn vorher Interviews aufgenommen oder danach weitere Motive gebraucht werden.",
          "Gleichzeitige Programmpunkte an unterschiedlichen Orten brauchen eine passende Besetzung. Bei der Kalkulation helfen ein Ablaufplan, die Zahl der Bühnen und konkrete Aussagen dazu, welche Momente vollständig erfasst werden sollen."
        ]
      },
      {
        "title": "Originalton gesondert beschreiben",
        "copy": [
          "Reden, Statements und Atmosphäre brauchen abgestimmte Aufnahmewege. Geben Sie an, welche Personen und Inhalte verständlich zu hören sein sollen, wer die Veranstaltungstechnik betreut und wann eine Prüfung der Anschlüsse möglich ist.",
          "Eine geplante Interviewaufnahme und eine vollständige Aufzeichnung einer Rede sind unterschiedliche Aufgaben. Der Kamera- und Tonbedarf wird gemeinsam geprüft, statt die Tonproduktion erst im Schnitt vorauszusetzen."
        ],
        "links": [
          {
            "label": "Tonplanung für Eventfilme",
            "href": "/journal/warum-ton-beim-eventfilm-entscheidet/"
          }
        ]
      },
      {
        "title": "Material, Schnitt und Formatvarianten",
        "copy": [
          "Viel Drehmaterial muss gesichtet, geordnet und geschnitten werden. Mehrere Kameras oder lange Programmpunkte erhöhen die Materialmenge, auch wenn der Endfilm kurz bleibt. Tonbearbeitung, Farbgestaltung und Freigaben gehören ebenfalls zum Aufwand.",
          "Hauptfilm, Hochformat, Teaser, Untertitel und zusätzliche Sprachen müssen als gewünschte Fassungen benannt werden. Ein verbindlicher Abgabetermin und die Zahl der Korrekturrunden helfen, die Postproduktion zu planen."
        ]
      },
      {
        "title": "Angebote anhand desselben Umfangs vergleichen",
        "copy": [
          "Vergleichen Sie Dreh- und Aufbauzeiten, Besetzung, Tonaufzeichnung, Technikbereitstellung, Schnitt, Fassungen, Freigaben und Nutzungsumfang. Prüfen Sie außerdem, wie Reise und zusätzliche Leistungen behandelt werden. Eine kleinere Zahl im Angebot kann einen kleineren Lieferumfang bedeuten.",
          "Sophia kann auf Grundlage Ihres Briefings einen konkreten Rahmen anbieten. Schicken Sie Termin, Ort, Ablauf, Filmziel, geplante Nutzung und gewünschte Fassungen; offene Punkte lassen sich dann gezielt klären."
        ],
        "links": [
          {
            "label": "Projekt mit Ablauf und gewünschten Fassungen anfragen",
            "href": "/kontakt/"
          }
        ]
      }
    ],
    related: [{ label: "Eventfilm", href: "/videografie/eventfilm/" }, { label: "Postproduktion", href: "/postproduktion/" }],
  },
  {
    updatedAt: "2026-10-09",
    slug: "drehen-nach-licht",
    title: "Licht beim Videodreh planen: Ort, Uhrzeit und Ablauf",
    excerpt: "Tageslicht verändert sich während des Drehs. Wie Motivbesichtigung, Aufnahmereihenfolge und ein Plan für Wetteränderungen die Kameraarbeit vorbereiten.",
    image: "/media/light-beams.jpg",
    publishedAt: "2026-08-13",
    sections: [
      {
        "title": "Den Ort zur geplanten Drehzeit beurteilen",
        "copy": [
          "Ein Motiv kann morgens anders aussehen als am Nachmittag. Richtung und Härte des Lichts, Schatten sowie helle und dunkle Flächen verändern das Bild. Fotos vom Ort helfen bei einer ersten Einschätzung; für die Lichtplanung ist auch wichtig, wann die Aufnahmen entstehen sollen.",
          "Bei Innenräumen gehören Fenster, vorhandene Leuchten und abschaltbare Lichtquellen dazu. Für Interviews muss außerdem ein praktikabler Ort für Kamera und Ton vorgesehen sein. Ein gestalterisch passender Hintergrund allein reicht dafür nicht."
        ]
      },
      {
        "title": "Aufnahmereihenfolge und Bildkontinuität zusammen planen",
        "copy": [
          "Wenn mehrere Einstellungen dieselbe Situation zeigen, sollte die Veränderung des Lichts mitgedacht werden. Ein Aufbau, der lange dauert, kann die Bedingungen zwischen zwei Aufnahmen deutlich verändern. Zeit für Umstellen, Licht und Proben gehört in den Ablauf.",
          "Ordnen Sie die Motive danach, welche Lichtbedingungen gebraucht werden und wann Personen oder Orte verfügbar sind. Ein Drehplan muss diese Anforderungen miteinander vereinbaren, statt nur eine Liste von Einstellungen abzuarbeiten."
        ]
      },
      {
        "title": "Die gewünschte Lichtstimmung konkret beschreiben",
        "copy": [
          "Warmes tiefes Licht, eine ruhige Interviewbeleuchtung oder eine dunkle Szene mit sichtbaren Lichtquellen sind unterschiedliche gestalterische Aufgaben. Bildreferenzen helfen, die gewünschte Stimmung zwischen Regie, Kamera und Produktion zu besprechen.",
          "Zeitfenster um Sonnenuntergang und Dämmerung unterscheiden sich nach Ort, Datum und Bedingungen. Dafür sollte der Aufbau vorher bereitstehen. Eine feste Minutenzahl oder Uhrzeit ist ohne konkrete Planung kein belastbarer Drehtermin."
        ]
      },
      {
        "title": "Wetter und Ausweichmotive vorbereiten",
        "copy": [
          "Für Außenaufnahmen muss besprochen werden, was bei verändertem Wetter passieren soll. Ist ein anderer Look akzeptabel? Gibt es ein freigegebenes Innenmotiv oder ein anderes Zeitfenster? Welche Entscheidung kann vor Ort getroffen werden und wer verantwortet sie?"
        ]
      },
      {
        "title": "Angaben für ein Kamera-Briefing",
        "copy": [
          "Nennen Sie Motiv, Datum, verfügbare Zeiten, Personen und gewünschte Bildsprache. Ergänzen Sie Fotos, vorhandene Lichtquellen, Aufbau- und Zugangsmöglichkeiten sowie bereits geklärte Freigaben. Daraus kann die technische Vorbereitung für den konkreten Dreh abgeleitet werden.",
          "Sophias Kamera- und Lichtgestaltung bei Electric Lights ist auf der Projektseite im Zusammenhang mit einer audiovisuellen Installation beschrieben. Ein neuer Dreh erhält seine eigene Planung anhand von Ort, Idee und Produktionsrahmen."
        ],
        "links": [
          {
            "label": "Kamerafrau und Bildgestaltung für Ihre Produktion",
            "href": "/videografie/kamera-bildgestaltung/"
          },
          {
            "label": "Electric Lights: Kamera und Lichtgestaltung im Projekt",
            "href": "/projekte/electric-lights/"
          }
        ]
      }
    ],
    related: [{ label: "Kamera & Bildgestaltung", href: "/videografie/kamera-bildgestaltung/" }, { label: "Musikvideo", href: "/videografie/musikvideo/" }],
  },
  {
    "slug": "live-visuals-vj-briefing",
    "title": "Live Visuals planen: VJ-Briefing für Konzerte und Festivals",
    "excerpt": "Welche Angaben ein VJ-Briefing braucht: Musik, Setzeiten, Bildmaterial, Screens und Zuständigkeiten für Live Visuals bei Konzerten und Festivals.",
    "image": "/media/spektra-buehne-01.jpg",
    "publishedAt": "2026-10-09",
    "sections": [
      {
        "title": "Was macht ein VJ bei einem Konzert?",
        "copy": [
          "Ein VJ wählt und mischt visuelles Material während einer Veranstaltung. Clips, Loops, Texturen oder Live-Bilder können auf Musik, Stimmung und Ablauf abgestimmt werden. Ob Bilder frei gemischt werden oder feste Sequenzen vorgesehen sind, gehört bereits ins Briefing.",
          "Live Visuals beschreiben den Bildinhalt und seinen Live-Einsatz. Projection Mapping beschreibt die Anpassung einer Projektion an eine konkrete Fläche oder Form. Beides kann zusammenkommen: Ein Set wird live gespielt, während seine Ausgabe auf Teile eines Bühnenbilds verteilt ist. Dafür braucht es eine gemeinsame Planung von Material, Bildflächen und Technik."
        ],
        "links": [
          {
            "label": "Live Visuals und Projection Mapping als unterschiedliche Leistungen",
            "href": "/vj-mapping/"
          }
        ]
      },
      {
        "title": "Musik, Setzeiten und Bildsprache beschreiben",
        "copy": [
          "Nennen Sie Veranstaltung, Spielort, Line-up und geplante Setzeiten. Musikbeispiele helfen, die Richtung einzugrenzen. Ergänzen Sie, ob ein Act durchgehend begleitet wird, mehrere Sets wechseln oder Bilder auch in Umbaupausen laufen sollen. Künstlerische Wünsche werden an konkreten Referenzen besprochen.",
          "Ein nützliches Briefing unterscheidet Stimmung von Materialbedarf. ‚Dunkel und rhythmisch‘ beschreibt eine Richtung; ein bestimmtes Logo, eine feste Textfolge oder Bildmaterial für jeden Song beschreibt zusätzliche Arbeit. Auch ruhige Passagen, Gesprächsteile und gewünschte Pausen sind relevant."
        ]
      },
      {
        "title": "Screens und Signalwege mit der Location klären",
        "copy": [
          "Fragen Sie nach einem Plan der Bildflächen, deren Auflösung und Seitenverhältnis sowie dem vorgesehenen Anschluss für die Zuspielung. Ein Foto der Bühne ist hilfreich, ersetzt aber keine technischen Angaben. Für mehrere Screens muss klar sein, ob alle dasselbe Bild erhalten oder unterschiedliche Ausschnitte zeigen sollen.",
          "Benennen Sie die technische Ansprechperson und den Platz für die Zuspielung. Projektoren, LED-Screens, Signalverteilung und deren Einrichtung werden als Zuständigkeiten festgelegt. Eine VJ-Buchung enthält diese Technik nicht automatisch. Die Dokumentation von Resolume zeigt beispielhaft, wie Bildausschnitte unterschiedlichen Ausgaben zugeordnet werden können; daraus folgt keine Festlegung auf eine Software für Ihren Auftrag."
        ]
      },
      {
        "title": "Vorhandenes Material vor der Buchung sichten",
        "copy": [
          "Legen Sie bereitgestellte Clips, Logos und Texte in einer geordneten Materialliste ab. Geben Sie an, welche Inhalte verwendet werden müssen und welche nur als Referenz dienen. Format, Auflösung und Länge werden mit den geplanten Ausgaben abgeglichen. Materialanpassung oder neue Gestaltung wird im Umfang berücksichtigt.",
          "Klären Sie, wer Inhalte zur Nutzung freigeben kann und für welche Veranstaltung sie vorgesehen sind. Fragen zu Musik, Bildern, Personen oder Marken werden vor dem Einsatz mit den jeweiligen Rechteinhabern geklärt. Die Freigabe für die Projektion beantwortet außerdem nicht automatisch, ob eine Veranstaltungsaufzeichnung später veröffentlicht werden darf."
        ]
      },
      {
        "title": "Aufbau, Probelauf und Änderungen einplanen",
        "copy": [
          "Der Ablauf enthält Ladezugang, Aufbau, technische Prüfung, Setbeginn und Abbau. Ein Probelauf sollte das tatsächliche Zusammenspiel von Bildern, Bühne und Licht zeigen. Benennen Sie auch, wann Künstler oder Veranstaltungstechnik für eine Abstimmung erreichbar sind.",
          "Halten Sie Änderungen nachvollziehbar fest. Ein zusätzlicher Screen, neue Setzeiten oder Material kurz vor der Veranstaltung kann die Vorbereitung verändern. Ansprechpartner und ein Zeitpunkt für die Materialübergabe helfen, den Auftrag planbar zu halten. Bei Spektra sind visuelle Gestaltung, Live Visuals, Aufbau und technische Abstimmung als Sophias Aufgaben dokumentiert."
        ],
        "links": [
          {
            "label": "Spektra Festival: Bilder und Sophias Beitrag",
            "href": "/projekte/spektra-festival/"
          }
        ]
      },
      {
        "title": "Welche Angaben bestimmen die Kosten?",
        "copy": [
          "Vorbereitung, neu zu gestaltendes Material, Zahl und Anordnung der Bildflächen, Setdauer, Reise und technische Aufgaben beeinflussen den Aufwand. Ein kurzes Set kann viel eigene Materialgestaltung benötigen. Ein länger laufendes Set aus passendem, freigegebenem Material stellt andere Anforderungen.",
          "Für eine erste Anfrage reichen Termin, Ort, Musikrichtung, Spielzeiten, Fotos oder ein Bühnenplan und Angaben zur vorhandenen Technik. Sagen Sie dazu, ob Inhalte bereits vorliegen. Auf dieser Grundlage lassen sich Gestaltung, Live-Einsatz und technische Bereitstellung getrennt besprechen; einen festen Preis ersetzt das Briefing nicht."
        ],
        "links": [
          {
            "label": "VJ und Live Visuals aus Düsseldorf anfragen",
            "href": "/vj-mapping/live-visuals/"
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Resolume: Advanced Output und Zuordnung von Bildausgaben",
        "href": "https://www.resolume.com/support/advanced-output"
      }
    ],
    "sourcesContext": "Die Software-Dokumentation dient als technisches Beispiel. Die passende Zuspielung wird mit der vorhandenen Veranstaltungstechnik abgestimmt.",
    "related": [
      {
        "label": "Projection Mapping vorbereiten",
        "href": "/journal/projection-mapping-vorbereitung/"
      },
      {
        "label": "VJ und Live Visuals",
        "href": "/vj-mapping/live-visuals/"
      }
    ]
  },
  {
    "slug": "videoschnitt-material-vorbereiten",
    "title": "Videoschnitt beauftragen: Material und Feedback vorbereiten",
    "excerpt": "Videoschnitt mit vorhandenem Material planen: Dateien, Ton, Briefing, Korrekturrunden und Exporte vorbereiten, bevor die Postproduktion beginnt.",
    "image": "/media/journal-02.jpg",
    "publishedAt": "2026-10-09",
    "sections": [
      {
        "title": "Zuerst Ziel und Fassungen festlegen",
        "copy": [
          "Wer Videoschnitt beauftragt, braucht neben dem Material eine Aussage: Was soll das Publikum nach dem Film verstehen oder tun? Nennen Sie Zielgruppe, geplante Nutzung und gewünschten Abgabetermin. Ein Beispielvideo kann Tempo oder Stimmung erklären, sollte aber nicht als kopierbare Vorlage verstanden werden.",
          "Legen Sie fest, welche Fassungen gebraucht werden. Ein Hauptfilm für die Website, ein kurzer Ausschnitt für Social Media und eine Version mit Untertiteln sind unterschiedliche Auslieferungen. Anzahl, Seitenverhältnis, Länge und Sprache beeinflussen den Schnitt. Diese Angaben sollten vor der Materialsichtung zusammenstehen."
        ],
        "links": [
          {
            "label": "Videoschnitt und Postproduktion als eigenen Auftrag besprechen",
            "href": "/postproduktion/"
          }
        ]
      },
      {
        "title": "Originaldateien und Ton geordnet übergeben",
        "copy": [
          "Erstellen Sie eine Übersicht der Drehtage, Kameras und Tonaufnahmen. Bewahren Sie Dateinamen und zusammengehörige Ordner auf; eine zusätzliche Übersicht ist hilfreicher als ein nachträgliches, uneinheitliches Umbenennen. Sagen Sie dazu, ob Bild und Ton getrennt aufgenommen wurden und ob es Hinweise zur Zuordnung gibt.",
          "Eine bereits exportierte Vorschau ersetzt das Ausgangsmaterial nicht. Benötigte Originaldateien, vorhandene Projektdateien und Austauschformate werden mit der Postproduktion abgestimmt. Übergeben Sie Material über einen vereinbarten Weg und behalten Sie eine Sicherung. Ein repräsentativer Ausschnitt kann vor der Beauftragung helfen, Format, Bild und Ton einzuschätzen."
        ]
      },
      {
        "title": "Was bei vorhandenen Schnittprojekten zusätzlich nötig ist",
        "copy": [
          "Soll ein begonnener Schnitt weiterbearbeitet werden, nennen Sie Software und Version sowie externe Schriften, Grafiken, Effekte und verknüpfte Dateien. Eine Projektdatei allein enthält nicht automatisch alle Medien. Fehlende Abhängigkeiten sollten vor einer Übergabe geklärt werden.",
          "Premiere bietet beispielsweise einen Projektmanager, der verwendete Dateien an einen neuen Speicherort kopieren kann. Bei verknüpften Kompositionen, Schriften oder Effekten wird vor der Übergabe geprüft, welche Dateien und Abhängigkeiten zusätzlich benötigt werden. Das ist ein Softwarebeispiel und keine Zusage, dass jedes bestehende Projekt unverändert übernommen werden kann."
        ]
      },
      {
        "title": "Rechte und inhaltliche Entscheidungen mitliefern",
        "copy": [
          "Markieren Sie freigegebene Aussagen, Pflichtinhalte, gesperrte Aufnahmen und bekannte Einschränkungen. Bei Interviews helfen Sprecherzuordnung und Hinweise zu besonders wichtigen Stellen. Bei einem Eventfilm sind ein Ablaufplan und die Namen der Programmpunkte nützlich.",
          "Musik, Grafiken und fremde Aufnahmen benötigen eine zur geplanten Nutzung passende Freigabe. Halten Sie fest, wer diese Angaben bestätigt und wer den fertigen Film inhaltlich abnimmt. Diese Entscheidungen kann ein Schnittplatz nicht aus den Dateien ableiten. Noch offene Rechtefragen gehören in die Planung, bevor eine Fassung zur Veröffentlichung vorbereitet wird."
        ],
        "links": [
          {
            "label": "Aufnahmen und Originalton beim Eventfilm vorbereiten",
            "href": "/journal/warum-ton-beim-eventfilm-entscheidet/"
          }
        ]
      },
      {
        "title": "Feedback an einer konkreten Fassung sammeln",
        "copy": [
          "Benennen Sie eine Person, die Rückmeldungen des Teams zusammenführt. Feedback sollte die betrachtete Fassung und die betreffende Stelle eindeutig nennen. Ein Zeitcode mit einer konkreten Anmerkung ist besser umsetzbar als mehrere widersprüchliche Nachrichten ohne Bezug zum gleichen Stand.",
          "Trennen Sie sachliche Korrekturen von einer veränderten Zielsetzung. Ein falsch geschriebener Name ist eine andere Aufgabe als ein neuer Aufbau des Films oder eine zusätzliche Sprachfassung. Anzahl der Korrekturrunden und Umgang mit erweitertem Umfang werden im Angebot vereinbart. So bleiben Entscheidungen und Änderungen nachvollziehbar."
        ]
      },
      {
        "title": "Was Videoschnitt kostet und was ausgeliefert wird",
        "copy": [
          "Der Aufwand hängt von Materialmenge und Sichtung, Erzählstruktur, Tonzustand, Grafik, Farbgestaltung, Untertiteln und Fassungen ab. Die Länge des fertigen Videos allein ist deshalb keine belastbare Kalkulationsgrundlage. Notwendige Aufbereitung von Fremdmaterial wird nach Sichtung eingegrenzt.",
          "Zur Auslieferung werden Masterdateien, Plattformfassungen, Untertitel und gegebenenfalls Projekt- oder Archivmaterial ausdrücklich benannt. Technische Vorgaben der Zielplattform werden vor dem Export geprüft. Für die Anfrage braucht Sophia Ziel, Nutzungsorte, Frist, eine Materialübersicht und Beispielmaterial. Welche Bestandteile des Auftrags sie übernimmt, wird daran anschließend festgelegt."
        ],
        "links": [
          {
            "label": "Vorhandenes Material für einen Schnittauftrag anfragen",
            "href": "/kontakt/"
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Adobe Premiere: Projekte und verwendete Medien kopieren",
        "href": "https://helpx.adobe.com/premiere/desktop/organize-media/create-projects/copy-project.html"
      }
    ],
    "sourcesContext": "Das Premiere-Beispiel erläutert eine mögliche Projektübergabe. Software, Abhängigkeiten und Austauschformate werden für das konkrete Material vereinbart.",
    "related": [
      {
        "label": "Videoschnitt und Postproduktion",
        "href": "/postproduktion/"
      },
      {
        "label": "Eventfilm-Kosten und Produktionsumfang",
        "href": "/journal/was-einen-eventfilm-teuer-macht/"
      },
      {
        "label": "Untertiteldatei oder eingebrannte Texte für die Veröffentlichung?",
        "href": "/journal/video-untertitel-srt-einbrennen/"
      }
    ]
  },
  {
    "slug": "imagefilm-interview-vorbereiten",
    "title": "Imagefilm-Konzept: Interviews, Fragen und Dreh planen",
    "excerpt": "Ein Imagefilm-Konzept mit Interviews vorbereiten: Zielgruppe, Aussagen, Fragen und Arbeitsbilder festlegen. Mit einer leeren Konzept-Vorlage als CSV.",
    "image": "/media/journal-01.jpg",
    "publishedAt": "2026-10-09",
    "updatedAt": "2026-10-10",
    "sections": [
      {
        "title": "Was soll der Film erklären?",
        "copy": [
          "Ein Imagefilm mit Interviews kann eine Organisation durch Menschen und ihre konkrete Arbeit verständlich machen. Dafür braucht es eine klare Frage: Was soll jemand erfahren, der Ihren Betrieb, Ihre Initiative oder Ihre kulturelle Einrichtung noch nicht kennt? Eine Liste aller Leistungen beantwortet das oft weniger gut als eine ausgewählte Aufgabe mit nachvollziehbarem Ablauf.",
          "Beschreiben Sie Zielgruppe und Nutzung, bevor Gesprächspartner ausgewählt werden. Ein Film für die Website braucht nicht dieselben Informationen wie eine interne Einführung oder eine kurze Fassung für eine Veranstaltung. Für ein Interviewporträt werden Gespräch, Arbeitsbilder und spätere Fassungen als gemeinsames Konzept geplant."
        ],
        "links": [
          {
            "label": "Imagefilm und Interviewporträt aus Düsseldorf",
            "href": "/videografie/imagefilm/"
          }
        ]
      },
      {
        "title": "Eine Imagefilm-Konzept-Vorlage ausfüllen",
        "copy": [
          "Ein erstes Konzept verbindet die Aussage des Films mit den Menschen und Bildern, die sie nachvollziehbar machen. Schreiben Sie auf, wen der Film erreichen soll, welche Frage er beantwortet und welche konkrete Arbeit dafür gezeigt werden kann. Daraus entstehen Interviewthemen und ein Motivplan.",
          "Die Vorlage ist ein leeres Briefing für diese Abstimmung. Sie enthält weder eine fertige Geschichte noch einen festen Produktionsumfang. Tragen Sie nur Angaben ein, die Sie für Ihr Projekt kennen, und markieren Sie offene Entscheidungen. Personen, Aufnahmeorte, Nutzungsorte und Freigaben werden vor dem Dreh gemeinsam geklärt."
        ],
        "table": {
          "caption": "Bausteine für ein Imagefilm-Konzept mit Interviews",
          "columns": ["Baustein", "Frage für das Briefing", "Was daraus geplant wird"],
          "rows": [
            ["Zielgruppe und Filmziel", "Wer soll nach dem Film was verstanden haben?", "Themenauswahl und Schwerpunkt"],
            ["Kernaussage", "Welche konkrete Arbeit oder Aufgabe macht das Thema verständlich?", "Nachvollziehbare Aussage statt allgemeiner Werbesätze"],
            ["Gesprächspartner", "Wer kann die ausgewählte Aufgabe aus eigener Arbeit erklären?", "Interviewthemen und verfügbare Personen"],
            ["Arbeitsbilder", "Welche Abläufe, Orte und Details passen zu den Aussagen?", "Motivliste und erreichbare Drehfenster"],
            ["Ausspielung", "Wo wird der Film genutzt und welche Fassungen werden gebraucht?", "Bildformate, Sprachen und Untertitel"],
            ["Rahmen und Freigaben", "Welche Termine, Ressourcen und Zuständigkeiten sind geklärt?", "Angebotsumfang und gemeinsamer Freigabeweg"]
          ]
        },
        "links": [{ "label": "Leere Imagefilm-Konzept-Vorlage herunterladen (CSV)", "href": "/downloads/imagefilm-konzept-briefing.csv" }]
      },
      {
        "title": "Fragen, die zu konkreten Antworten führen",
        "copy": [
          "Fragen Sie nach einer Tätigkeit, einer Entscheidung oder einem Beispiel. ‚Was passiert als Erstes, wenn eine neue Anfrage eingeht?‘ ist konkreter als ‚Was macht Sie besonders?‘ Eine Person kann so ihre Arbeit erklären, statt allgemeine Werbesätze zu wiederholen. Auch Begriffe, die nur intern bekannt sind, brauchen eine Erklärung.",
          "Ein Fragenplan kann drei Aufgaben verbinden: die Person vorstellen, ihre Arbeit nachvollziehbar machen und die Bedeutung für das Publikum erklären. Fragen wie ‚Woran merken Sie, dass dieser Schritt gelungen ist?‘ oder ‚Was muss vorher vorbereitet werden?‘ geben Gesprächspartnern eine Richtung. Welche Fragen zum Projekt passen, wird im Briefing besprochen; auswendig gelernte Antworten sind keine Voraussetzung."
        ]
      },
      {
        "title": "Gesprächspartner und Aufnahmeort auswählen",
        "copy": [
          "Wählen Sie Personen, die die vorgesehenen Themen aus ihrer tatsächlichen Arbeit erklären können und auftreten möchten. Klären Sie Termin, verfügbare Zeit, Namensschreibweise und Funktionsbezeichnung. Wer die Aussagen später freigibt, sollte bereits vor dem Drehtag feststehen.",
          "Ein geeigneter Ort muss Bild und Ton ermöglichen. Prüfen Sie störende Gespräche, Maschinen, Verkehr und Lüftung sowie mögliche Veränderungen des Tageslichts. Ein Raum, der im Alltag ruhig wirkt, kann während des Betriebs anders klingen. Aufbau und Probeaufnahme gehören deshalb ins Drehfenster; ein Gespräch wird nicht erst beim Eintreffen der Kamera eingeplant."
        ],
        "links": [
          {
            "label": "Originalton für Interviews und Drehs planen",
            "href": "/videografie/tonaufnahme/"
          }
        ]
      },
      {
        "title": "Ergänzende Arbeitsbilder vorbereiten",
        "copy": [
          "Das Interview liefert Aussagen; ergänzende Bilder können zeigen, wovon gesprochen wird. Notieren Sie Tätigkeiten, Orte und Details, die zum Gespräch passen. Prüfen Sie, wann diese Vorgänge tatsächlich stattfinden und welche Bereiche für einen Dreh zugänglich sind.",
          "Planen Sie nicht nur eine Sammlung beliebiger Motive. Wenn eine Person einen Ablauf erklärt, sollten passende Schritte und Details dafür erreichbar sein. Kundendaten, vertrauliche Unterlagen und nicht freigegebene Bereiche werden vorab benannt. Ein kurzer Motivplan verbindet Interviewthemen und Arbeitsbilder, ohne eine komplette Produktion vorwegzunehmen."
        ],
        "links": [
          {
            "label": "Licht, Tageszeit und Aufnahmeort vorbereiten",
            "href": "/journal/drehen-nach-licht/"
          }
        ]
      },
      {
        "title": "Freigaben und Fassungen im Briefing festhalten",
        "copy": [
          "Klären Sie mit den Beteiligten, wer auftreten darf, welche Bereiche gezeigt werden und wo der Film veröffentlicht werden soll. Musik, Fotos oder zusätzliches Material werden mit ihren Nutzungsrechten erfasst. Bei offenen Fragen werden die zuständigen Personen oder Rechteinhaber einbezogen; eine Drehzusage allein klärt nicht jede spätere Verwendung.",
          "Benennen Sie gewünschte Sprachen, Untertitel, Hoch- und Querformate und kurze Auszüge. Eine zusätzliche Version kann andere Aussagen oder Bildausschnitte benötigen. Für die Korrekturphase werden eine verantwortliche Ansprechperson und ein gemeinsamer Freigabeweg festgelegt."
        ]
      },
      {
        "title": "Was für eine erste Anfrage genügt",
        "copy": [
          "Nennen Sie Organisation, Ziel des Films, vorgesehenen Drehort und Zeitraum. Ergänzen Sie mögliche Gesprächspartner, Themen, Arbeitsmotive, geplante Nutzung und Abgabetermin. Falls Material vorhanden ist, geben Sie eine Übersicht und den Stand seiner Freigabe an.",
          "Sophia kann damit Konzept, Interviews, Kamera, Ton und Postproduktion als Aufgaben eingrenzen. Zahl der Personen und Orte, Drehfenster, Materialmenge und Fassungen bestimmen den weiteren Umfang. Verbindliche Kosten und Termine ergeben sich aus dem konkreten Angebot; dieser Fragenplan ist eine Vorbereitung dafür."
        ],
        "links": [
          {
            "label": "Ein Interviewporträt oder einen Imagefilm besprechen",
            "href": "/kontakt/"
          }
        ]
      }
    ],
    "related": [
      {
        "label": "Imagefilm und Interviewporträt",
        "href": "/videografie/imagefilm/"
      },
      {
        "label": "Material und Feedback für den Videoschnitt vorbereiten",
        "href": "/journal/videoschnitt-material-vorbereiten/"
      },
      {
        "label": "Untertiteldatei oder eingebrannte Texte für die Veröffentlichung?",
        "href": "/journal/video-untertitel-srt-einbrennen/"
      }
    ]
  },
  {
    "slug": "musikvideo-storyboard-drehplan",
    "title": "Musikvideo planen: Storyboard, Shotlist und Drehplan",
    "excerpt": "Vom Song zum drehbaren Konzept: Storyboard und Shotlist unterscheiden, Performance und Motive planen und eine leere Drehplan-Vorlage als CSV nutzen.",
    "image": "/media/club-projektion-03.jpg",
    "publishedAt": "2026-10-09",
    "sections": [
      {
        "title": "Drei Pläne mit unterschiedlichen Aufgaben",
        "copy": [
          "Ein Musikvideo braucht Entscheidungen darüber, was zum Song zu sehen ist und wie diese Bilder aufgenommen werden. Ein Storyboard zeigt die geplanten Bilder in einer Folge. Eine Shotlist nennt die benötigten Einstellungen. Ein Drehplan ordnet die Arbeit am Set nach Ort, Licht, Mitwirkenden und verfügbaren Zeitfenstern.",
          "Für eine Band oder einen Artist ist zunächst wichtig, welche Aufgabe die Bilder übernehmen: die Performance zeigen, eine Geschichte erzählen oder mit Licht und Formen arbeiten. Aus dieser Entscheidung entsteht der Plan. Einfache Skizzen und präzise Notizen können dafür reichen; der Umfang richtet sich nach dem Konzept."
        ],
        "table": {
          "caption": "Storyboard, Shotlist und Drehplan im Musikvideo",
          "columns": [
            "Plan",
            "Beantwortet",
            "Enthält"
          ],
          "rows": [
            [
              "Storyboard",
              "Wie folgt ein Bild auf das nächste?",
              "Bildidee, Songabschnitt, Blickrichtung, Handlung und Übergang"
            ],
            [
              "Shotlist",
              "Welche Aufnahmen müssen entstehen?",
              "Shot-ID, Motiv, Einstellungsgröße, Bewegung, Tonart und Priorität"
            ],
            [
              "Drehplan",
              "Wann und mit welchem Setup wird aufgenommen?",
              "Ort, Aufbau, Licht, Personen, Reihenfolge und abgestimmte Zeitfenster"
            ]
          ]
        },
        "links": [
          {
            "label": "Musikvideo-Produktion für Bands und Artists",
            "href": "/videografie/musikvideo/"
          }
        ]
      },
      {
        "title": "Den Song in Abschnitte gliedern",
        "copy": [
          "Arbeiten Sie mit der für den Dreh vorgesehenen Songfassung. Benennen Sie Intro, Strophen, Refrains, Bridge und Ende mit ihren Timecodes. Notieren Sie, wo eine bestimmte Handlung, ein Bildwechsel oder eine Performance wichtig ist. Änderungen an der Songfassung müssen vor dem Dreh mit der Bildplanung abgeglichen werden.",
          "Eine erste Übersicht kann für jeden Abschnitt eine Bildidee und eine offene Entscheidung enthalten. Bei einem Refrain könnte die Performance im Mittelpunkt stehen, während eine Strophe eine Handlung weiterführt. Diese Zuordnung ist ein Entwurf für die Abstimmung mit Kamera, Regie und Mitwirkenden; sie muss zum tatsächlichen Song und Produktionsrahmen passen."
        ]
      },
      {
        "title": "Das Storyboard verständlich machen",
        "copy": [
          "Zeigen Sie pro geplantem Bild, wer oder was im Ausschnitt zu sehen ist. Ergänzen Sie Handlung, Blickrichtung und gewünschte Kamerabewegung. Bei einer erzählenden Szene muss verständlich sein, wie Figuren und Orte zusammenhängen. Für eine Performance zählen Position, Hintergrund und die Beziehung zwischen Artist und Kamera.",
          "Schreiben Sie offene Punkte direkt an das Bild: fehlender Drehort, noch ungeklärte Projektion, gewünschter Lichtwechsel oder notwendige Requisite. So wird sichtbar, welche Idee vor der Aufnahme geprüft werden muss. Die Adobe-Anleitung zur Musikvideo-Produktion empfiehlt, das Storyboard mit den Musikern abzustimmen und daraus eine Shotlist abzuleiten."
        ],
        "links": [
          {
            "label": "Licht, Tageszeit und Aufnahmeort vorbereiten",
            "href": "/journal/drehen-nach-licht/"
          }
        ]
      },
      {
        "title": "Aus Bildern wird eine Shotlist",
        "copy": [
          "Geben Sie jeder Einstellung eine eindeutige ID. Die Shotlist beschreibt Motiv, Handlung, Einstellungsgröße und Bewegung sowie die benötigte Performance oder Tonaufnahme. Markieren Sie, welche Bilder für das Konzept notwendig sind und welche bei zusätzlicher Zeit entstehen können. Eine Priorität hilft bei Entscheidungen am Set.",
          "Das folgende Beispiel ist frei erfunden und zeigt nur die Struktur. Die Angaben legen weder Sophias Equipment noch die Besetzung oder Dauer Ihres Drehs fest. Eine leere CSV-Vorlage mit zusätzlichen Feldern für Licht, Format, Freigaben und Verantwortliche steht darunter zum Herunterladen."
        ],
        "table": {
          "caption": "Fiktives Beispiel einer Musikvideo-Shotlist",
          "columns": [
            "ID / Songabschnitt",
            "Motiv und Aktion",
            "Aufnahme / Ton",
            "Vorbereitung"
          ],
          "rows": [
            [
              "P01 / Refrain",
              "Artist performt am vereinbarten Motiv",
              "Totale; Playback zur freigegebenen Songfassung",
              "Positionen, Hintergrund und Licht prüfen"
            ],
            [
              "P02 / Refrain",
              "Detail der Performance",
              "Nahe Einstellung; Anschluss an P01",
              "Bewegung, Kleidung und Blickrichtung abgleichen"
            ],
            [
              "N01 / Strophe",
              "Figur betritt einen Raum",
              "Erzählendes Bild; Handlung ohne Live-Musikaufnahme",
              "Zugang, Requisite, Anschluss und Freigabe klären"
            ]
          ]
        },
        "links": [
          {
            "label": "Leere Musikvideo-Shotlist und Drehplan-Vorlage herunterladen (CSV)",
            "href": "/downloads/musikvideo-shotlist-drehplan.csv"
          }
        ]
      },
      {
        "title": "Playback und Live-Session vorab festlegen",
        "copy": [
          "Ein Playback-Dreh verwendet die vereinbarte Musikaufnahme zur Performance. Die Aufnahmen müssen später zur richtigen Fassung passen. Legen Sie fest, wie der Song am Set zugespielt wird und wie sich die einzelnen Takes im Schnitt zuordnen lassen. Eine nachvollziehbare Take-Benennung gehört zur Übergabe.",
          "Bei einer Live-Session entsteht die musikalische Aufnahme am Drehort. Kamera, Ton und Musiker brauchen dafür einen gemeinsam vorbereiteten Ablauf. Mikrofone, Aufnahmespuren, Raum, Proben und Zuständigkeiten werden mit den beteiligten Gewerken geklärt. Ein Kameraauftrag allein beschreibt noch keine vollständige Musikaufnahme."
        ],
        "links": [
          {
            "label": "Originalton und Tonaufnahme als Produktionsaufgabe",
            "href": "/videografie/tonaufnahme/"
          }
        ]
      },
      {
        "title": "Den Dreh nach Setups organisieren",
        "copy": [
          "Die Reihenfolge am Set kann von der späteren Bildfolge abweichen. Einstellungen mit demselben Ort, Licht und Aufbau lassen sich gemeinsam vorbereiten. Prüfen Sie dabei, ob Tageszeit, Zugang, Kleidung, Requisiten oder die Anwesenheit einzelner Personen die Reihenfolge bestimmen.",
          "Der Drehplan enthält Aufbau, Probe, Aufnahme, Umbau und Pause als vereinbarte Zeitfenster. Notieren Sie einen Ausweichweg für wetterabhängige Motive. Halten Sie die gewünschte Bildkontinuität fest, damit ein geänderter Ablauf keine unbemerkten Anschlüsse erzeugt. Verbindliche Zeiten ergeben sich erst aus Motivbesichtigung und Produktionsplanung."
        ]
      },
      {
        "title": "Release-Fassungen und Freigaben mitplanen",
        "copy": [
          "Nennen Sie Hauptvideo, Teaser und gewünschte Bildformate bereits im Briefing. Ein Ausschnitt für Hochformat braucht passende Motive; Namen, Texte und Logos sollen in der vorgesehenen Fassung lesbar bleiben. Die Shotlist kann deshalb vermerken, für welche Ausspielung eine Einstellung gebraucht wird.",
          "Song, Darstellung, Personen, Drehorte und fremdes Material werden mit ihrem Freigabestand erfasst. Zuständigkeiten und offene Entscheidungen gehören in den Plan. Für eine erste Anfrage helfen Songfassung, Release-Termin, Referenzen, Produktionsrahmen und die bisherige Planung. Sophia kann daraus Konzept, Kamera, Licht und Postproduktion als Aufgaben eingrenzen."
        ],
        "links": [
          {
            "label": "Budget und Kostenblöcke eines Musikvideos planen",
            "href": "/journal/musikvideo-mit-kleinem-budget/"
          },
          {
            "label": "Ein Musikvideo mit Sophia besprechen",
            "href": "/kontakt/"
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Adobe: Musikvideo-Produktion, Storyboard und Shotlist",
        "href": "https://www.adobe.com/uk/creativecloud/video/discover/how-to-make-a-music-video.html"
      }
    ],
    "sourcesContext": "Die Dokumentation ergänzt die Begriffs- und Ablaufklärung. Tabellen und CSV sind redaktionelle Planungshilfen; das ausgefüllte Beispiel zeigt keine reale Produktion.",
    "related": [
      {
        "label": "Musikvideo-Kosten und Produktionsrahmen",
        "href": "/journal/musikvideo-mit-kleinem-budget/"
      },
      {
        "label": "Videoschnitt und Materialübergabe",
        "href": "/journal/videoschnitt-material-vorbereiten/"
      },
      {
        "label": "Musikvideo-Produktion",
        "href": "/videografie/musikvideo/"
      }
    ]
  },
  {
    "slug": "video-untertitel-srt-einbrennen",
    "title": "Untertitel für Videos: SRT-Datei oder eingebrannt?",
    "excerpt": "Untertitel für Interview-, Image- und Eventfilme: SRT, WebVTT und eingebrannte Texte vergleichen, automatische Fassungen prüfen und die Übergabe planen.",
    "image": "/media/journal-01.jpg",
    "publishedAt": "2026-10-09",
    "sections": [
      {
        "title": "Die Veröffentlichung bestimmt die Untertitel-Fassung",
        "copy": [
          "Eine separate Untertiteldatei enthält Text und Zeitangaben, die ein unterstützender Player mit dem Video wiedergibt. Eingebrannte Untertitel werden beim Export Teil des Bildes. Welche Fassung passt, hängt vom Veröffentlichungsort, den Sprachversionen und den Möglichkeiten des Players ab.",
          "Für ein Interviewporträt auf der Website kann eine zuschaltbare Textspur sinnvoll sein. Ein kurzer Film, der als Datei weitergegeben oder in wechselnden Umgebungen gezeigt wird, kann eine Fassung mit sichtbaren Untertiteln brauchen. Fragen Sie deshalb zuerst nach Website-Player, Videoplattform und weiteren Nutzungsorten. Eine zusätzliche Fassung wird als eigener Bestandteil des Auftrags vereinbart."
        ],
        "table": {
          "caption": "Untertitel und Transkript für verschiedene Ausspielungen",
          "columns": [
            "Ausgabe",
            "Was geliefert wird",
            "Was vorher geprüft wird"
          ],
          "rows": [
            [
              "SRT-Datei",
              "Textblöcke mit Start- und Endzeit; getrennt vom Video",
              "Unterstützung der Zielplattform, Zeichenkodierung und richtige Filmfassung"
            ],
            [
              "WebVTT-Datei",
              "Textspur für einen passenden Web-Player",
              "Einbindung, Sprachkennung, Wiedergabe und Player-Einstellungen"
            ],
            [
              "Eingebrannte Untertitel",
              "Ein Videofilm, dessen Bild den Text bereits enthält",
              "Lesbarkeit, Position, Bildformat und gewünschte Sprachfassung"
            ],
            [
              "Transkript",
              "Ein lesbarer Text des gesprochenen Inhalts",
              "Zweck und Darstellung; ohne passende Zeitangaben keine synchronisierte Textspur"
            ]
          ]
        },
        "links": [
          {
            "label": "Videoschnitt, Untertitel und Ausspielung besprechen",
            "href": "/postproduktion/"
          }
        ]
      },
      {
        "title": "SRT und WebVTT sind keine Gestaltungsvorlage",
        "copy": [
          "SRT verwendet nummerierte Textblöcke mit Start- und Endzeiten. YouTube unterstützt grundlegende SRT-Dateien in UTF-8 und übernimmt darin keine Formatierungs-Markups. Eine gewünschte Schrift oder Textposition lässt sich dort deshalb nicht durch beliebige SRT-Formatierung festlegen.",
          "Für Web-Video wird unter anderem WebVTT verwendet. Die W3C-Dokumentation beschreibt Textspuren mit Zeitangaben; ob Einstellungen zur Darstellung übernommen werden, hängt vom Player ab. Vor der Auslieferung wird daher das unterstützte Dateiformat geprüft. Eine Dateiendung allein sagt noch nichts darüber aus, wie die Untertitel im Ziel-Player erscheinen."
        ],
        "example": {
          "label": "Frei erfundenes SRT-Beispiel mit zwei Textblöcken",
          "code": "1\n00:00:01,000 --> 00:00:04,000\nWir zeigen den Aufbau der Bühne.\n\n2\n00:00:04,500 --> 00:00:07,000\nDanach beginnt die Lichtprobe."
        }
      },
      {
        "title": "Untertitel zum Verständnis des Films schreiben",
        "copy": [
          "Untertitel in derselben Sprache können neben den gesprochenen Worten auch relevante Geräusche und Sprecherwechsel erfassen. Die W3C unterscheidet diese für das Verständnis nötigen Informationen von einer reinen Übersetzung der Dialoge. Ein Name oder ein Geräuschhinweis sollte dem Publikum helfen, die Szene einzuordnen.",
          "Bei einem Interviewfilm werden Namen, Fachbegriffe und organisationsinterne Begriffe vor der Freigabe geprüft. Bei mehreren Stimmen muss nachvollziehbar bleiben, wer spricht. Stimmen Sie dafür eine Schreibweise und den gewünschten Umgang mit Sprecherangaben ab. Wie umfassend ein Film zugänglich gemacht wird, ist eine weitere Produktionsentscheidung; Untertitel allein beschreiben nicht die gesamte Barrierefreiheit."
        ],
        "links": [
          {
            "label": "Interview und Imagefilm vor dem Dreh vorbereiten",
            "href": "/journal/imagefilm-interview-vorbereiten/"
          }
        ]
      },
      {
        "title": "Automatische Untertitel am Bild und Ton kontrollieren",
        "copy": [
          "Automatische Erkennung kann eine erste Textfassung liefern. Die W3C weist darauf hin, dass solche Fassungen häufig Korrekturen benötigen. Kontrolliert werden Wortlaut, Sinn, Namen und das zeitliche Zusammenspiel mit dem Ton.",
          "Prüfen Sie den ganzen Film in seiner tatsächlichen Exportfassung. Ein Textblock soll dann erscheinen, wenn die zugehörige Aussage zu hören ist; Wechsel und Pausen werden daran angepasst. Lesen Sie die Fassung auch ohne Ton, um fehlende Zusammenhänge zu erkennen. Fremdsprachige Texte benötigen eine sprachkundige Freigabe, die im Auftrag benannt wird.",
          "Wenn der Schnitt nachträglich verändert wird, müssen die Zeitangaben erneut geprüft werden. Ein gekürzter Interviewbeginn oder ein neuer Zwischenschnitt kann eine bislang passende Textspur verschieben. Untertiteldatei und Film erhalten deshalb eine gemeinsame Versionszuordnung."
        ],
        "links": [
          {
            "label": "Material, Fassungen und Feedback für den Schnitt vorbereiten",
            "href": "/journal/videoschnitt-material-vorbereiten/"
          }
        ]
      },
      {
        "title": "Eingebrannte Texte im Zielbild prüfen",
        "copy": [
          "Ein im Bild liegender Text muss in der vorgesehenen Darstellung lesbar sein. Kontrollieren Sie Kontrast, Größe und Position an ruhigen wie bewegten Bildern. Gesichter, Namenseinblendungen und wichtige Bilddetails sollten dabei nicht unbeabsichtigt überdeckt werden.",
          "Eine Querformat-Fassung und eine vertikale Fassung werden getrennt kontrolliert. Der Bildausschnitt und die Bedienelemente der jeweiligen Plattform können sich unterscheiden. Pauschale Positionswerte ersetzen diese Prüfung nicht. Nach dem Einbrennen lässt sich der Text nicht mehr als separate Spur abschalten oder wechseln; eine Korrektur benötigt einen neuen Videoexport."
        ]
      },
      {
        "title": "Eine eindeutige Übergabe vereinbaren",
        "copy": [
          "Halten Sie Filmversion, Sprache und Veröffentlichungsorte fest. Vereinbaren Sie, ob separate Textdateien, ein Transkript, eingebrannte Fassungen oder eine Kombination ausgeliefert werden sollen. Benennen Sie auch, wer Schreibweisen, Übersetzungen und den Inhalt freigibt.",
          "Zum Paket können ein freigegebener Masterfilm, die zugehörige SRT- oder WebVTT-Datei und zusätzliche Videoexporte gehören. Welche davon technisch sinnvoll sind und zum Umfang zählen, wird anhand der Zielplattform geklärt. Für eine Anfrage an Sophia helfen Filmziel, vorhandenes Material, gewünschte Sprache, Nutzungsorte und Abgabetermin."
        ],
        "links": [
          {
            "label": "Untertitel als Teil der Postproduktion anfragen",
            "href": "/kontakt/"
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "YouTube-Hilfe: unterstützte Untertiteldateien und SRT",
        "href": "https://support.google.com/youtube/answer/2734698?hl=de"
      },
      {
        "label": "W3C WAI: Captions und Subtitles für Audio und Video",
        "href": "https://www.w3.org/WAI/media/av/captions/"
      }
    ],
    "sourcesContext": "Die Quellen erläutern technische Formate und Zugänglichkeit. Plattformvorgaben werden für die konkrete Veröffentlichung erneut geprüft.",
    "related": [
      {
        "label": "Videoschnitt und Postproduktion",
        "href": "/postproduktion/"
      },
      {
        "label": "Imagefilm und Interviewporträt",
        "href": "/videografie/imagefilm/"
      },
      {
        "label": "Originalton für Eventfilme vorbereiten",
        "href": "/journal/warum-ton-beim-eventfilm-entscheidet/"
      }
    ]
  },
];

export const articles: Article[] = [...articlesBase.map(extendArticle), ...productionGuides];

export const servicePath = (service: Service) => {
  if (service.slug === "postproduktion") return "/postproduktion/";
  return `/${service.parent}/${service.slug}/`;
};

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
