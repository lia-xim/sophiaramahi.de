import type { LocalFaq } from "./types";

/* Stadtprofile der Standortseiten (/standorte/<stadt>/): Jede Stadt
   bekommt eine eigene Einführung als Produktionsraum — geschrieben,
   nicht aus Bausteinen gestanzt. Die Leistungs-Details stehen auf den
   verlinkten Leistungs-Stadtseiten; hier steht das Gesamtbild. */

export type CityProfile = {
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  sectionTitle: string;
  intro: string[];
  faq: LocalFaq[];
};

export const cityProfiles: Record<string, CityProfile> = {
  duesseldorf: {
    seoTitle: "Videografin in Düsseldorf – Sophia Ramahi",
    seoDescription:
      "Videografin in Düsseldorf: Eventfilm, Musikvideo, Imagefilm, Kamera, Ton, Live Visuals und Postproduktion — ohne Anfahrtskosten, mit Ortskenntnis.",
    heroLead:
      "Düsseldorf ist Sophias Basis: Hier finden Vorgespräche, Besichtigungen und viele Drehs statt — ohne Anfahrtskosten, mit kurzen Wegen und Ortskenntnis.",
    sectionTitle: "Die Basis als Vorteil",
    intro: [
      "Wer in Düsseldorf produziert, bekommt die einfachste Version jeder Zusammenarbeit: Besichtigungen sind Stundentermine, Drehs lassen sich auf mehrere Lichtstimmungen verteilen, kurzfristige Termine scheitern nicht an der Logistik. Und die Stadt selbst liefert von der Tonhalle bis zur Industriehalle fast jede Kulisse.",
      "Dazu kommt die persönliche Verbindung: Sophias eigene Projekte — Electric Lights im KIT, die Arbeit mit der Jungen Filmwerkstatt — sind in dieser Stadt entstanden. Die Wege, Häuser und Eigenheiten kennt sie nicht aus Recherche, sondern aus der Praxis.",
    ],
    faq: [
      {
        question: "Fallen innerhalb Düsseldorfs Fahrtkosten an?",
        answer:
          "Praktisch keine — Anfahrten innerhalb der Stadt werden transparent ausgewiesen und fallen kaum ins Gewicht. Das Budget fließt in Drehzeit, Licht und Schnitt.",
      },
      {
        question: "Sind kurzfristige Termine in Düsseldorf möglich?",
        answer:
          "Wenn der Kalender es zulässt, ja — ohne Anreise ist auch ein Termin mit wenigen Tagen Vorlauf realistisch planbar. Ein kurzes Briefing zu Anlass, Ort und Ziel reicht für den Start.",
      },
    ],
  },

  koeln: {
    seoTitle: "Videografin in Köln – Sophia Ramahi",
    seoDescription:
      "Videografin für Köln: Eventfilm, Musikvideo, Imagefilm, Kamera, Ton und Live Visuals — 40 km von der Basis Düsseldorf, ohne Übernachtungslogik.",
    heroLead:
      "Köln ist von Düsseldorf aus ein Arbeitsweg, keine Reise: Konzerte, Messen, Unternehmensdrehs und Musikproduktionen werden regulär und ohne Übernachtungskosten geplant.",
    sectionTitle: "Köln als regulärer Produktionsraum",
    intro: [
      "Zwischen Konzerthäusern in Mülheim, den Deutzer Messehallen, der Medienbranche und einer dichten Musikszene produziert Köln pausenlos — und braucht dafür verlässliche Gewerke. Die 40 Kilometer von Düsseldorf sind dabei kein Kompromiss: Besichtigungen, Drehtage und auch späte Veranstaltungsenden bleiben normale Termine.",
      "Für Kölner Projekte gilt dieselbe Arbeitsweise wie überall: Vorbereitung vor Ort statt Ferndiagnose, transparente Kalkulation, und ein Ergebnis, das sich nicht anhört wie von der Stange. Die Leistungsseiten zeigen, was das je Gewerk konkret bedeutet.",
    ],
    faq: [
      {
        question: "Berechnet Sophia für Köln Übernachtungskosten?",
        answer:
          "In der Regel nicht — auch nach späten Veranstaltungen ist die Rückfahrt machbar. Nur bei mehrtägigen Produktionen mit sehr frühen Starts wird verglichen, ob eine Übernachtung wirtschaftlicher ist; das steht dann offen im Angebot.",
      },
      {
        question: "Kommt Sophia für Vorgespräche nach Köln?",
        answer:
          "Ja — Konzepttermine, Besichtigungen und Technik-Checks in Köln sind kurze Termine. Erste Abstimmungen funktionieren auch per Video; spätestens vor dem Drehtag lohnt der Blick auf den echten Ort.",
      },
    ],
  },

  neuss: {
    seoTitle: "Videografin in Neuss – Sophia Ramahi",
    seoDescription:
      "Videografin für Neuss: Eventfilm, Imagefilm, Musikvideo, Kamera und mehr — direkt über die Rheinbrücke, praktisch ohne Anfahrt.",
    heroLead:
      "Neuss liegt direkt gegenüber der Basis: Produktionen hier laufen zu denselben Bedingungen wie in Düsseldorf selbst — kurze Wege, flexible Termine.",
    sectionTitle: "Die Nachbarstadt",
    intro: [
      "Vom Düsseldorfer Ufer nach Neuss sind es ein paar Brückenminuten — für die Produktion heißt das: Besichtigung, Dreh und Nachaufnahmen sind spontane Termine, keine Planungsposten. Gleichzeitig hat Neuss eigene Bühnen und Anlässe: das Schützenfest, Kultur im Zeughaus und am Globe, den Hafen und einen Mittelstand mit Geschichte.",
      "Die Leistungsseiten für Neuss gehen ins Detail — vom Eventfilm über Unternehmensporträts bis zur Postproduktion mit persönlicher Übergabe.",
    ],
    faq: [
      {
        question: "Gelten für Neuss dieselben Konditionen wie für Düsseldorf?",
        answer:
          "Praktisch ja: Die Anfahrt ist ein symbolischer Posten, Termine bleiben flexibel, und auch geteilte Drehs — Besichtigung heute, Dreh nächste Woche — kosten keine Reiselogistik.",
      },
      {
        question: "Übernimmt Sophia auch kleine Neusser Projekte?",
        answer:
          "Ja — gerade bei dieser Nähe rechnen sich auch halbe Drehtage: ein Interviewblock, eine Veranstaltungsstunde, ein Porträttermin. Der Umfang wird ehrlich auf den Anlass geschnitten.",
      },
    ],
  },

  ratingen: {
    seoTitle: "Videografin in Ratingen – Sophia Ramahi",
    seoDescription:
      "Videografin für Ratingen: Corporate-Filme, Eventfilm, Interviews und mehr — 15 km von Düsseldorf, auch kurzfristig verfügbar.",
    heroLead:
      "Ratingen liegt fünfzehn Kilometer von der Basis: kurzfristige Corporate-Drehs, Interviews mit engen Zeitfenstern und Events sind hier normale Termine.",
    sectionTitle: "Produktionsort für Unternehmen",
    intro: [
      "Ratingens Gewerbegebiete beherbergen internationale Zentralen und IT-Unternehmen — entsprechend hoch ist der Bedarf an Corporate-Video: Interviews, Townhalls, Produktfilme, oft mit knappen Slots und internationalen Beteiligten. Die Nähe zur Basis macht auch spontane Termine realistisch.",
      "Daneben hat die Stadt eigene Gesichter: die historische Textilfabrik Cromford, die Altstadt, den Blauen See. Was je Leistung möglich ist — vom Imagefilm mit Untertitel-Fassungen bis zum Mapping auf der Firmenfassade — zeigen die Ratinger Leistungsseiten.",
    ],
    faq: [
      {
        question: "Wie kurzfristig kann ein Dreh in Ratingen stattfinden?",
        answer:
          "Bei freiem Kalender auch von heute auf morgen — die Anfahrt ist kein Faktor. Entscheidend ist ein kompaktes Briefing: wer spricht, wo, in welcher Bildsprache, wohin geht das Material.",
      },
      {
        question: "Arbeitet Sophia nach internationalen Brand-Guidelines?",
        answer:
          "Ja — Looks, Formate und Naming-Konventionen internationaler Unternehmen werden im Briefing übernommen, damit das Material weltweit in die bestehende Kommunikation passt.",
      },
    ],
  },

  meerbusch: {
    seoTitle: "Videografin in Meerbusch – Sophia Ramahi",
    seoDescription:
      "Videografin für Meerbusch: Porträts, Imagefilme, Events und ruhige Drehorte am Rhein — fünfzehn Minuten von Düsseldorf.",
    heroLead:
      "Meerbusch verbindet ruhige Drehorte mit kurzer Anfahrt: Porträts, Firmenfilme und Feste zwischen Rheinauen, Höfen und Gewerbeparks.",
    sectionTitle: "Ruhe als Standortvorteil",
    intro: [
      "Meerbusch ist der ruhige Nachbar: Kanzleien, Praxen und Unternehmenssitze im Grünen, Höfe und Rheinauen als Kulisse, Kulturorte wie die Teloy-Mühle. Produktionen hier sind oft persönlicher als anderswo — Porträts, diskrete Feste, Filme für Auftraggeber, die von Vertrauen leben.",
      "Die Nähe zur Basis hält alles leichtgewichtig: Besichtigungen sind Stundentermine, Drehs folgen dem Licht statt dem Fahrplan. Die Leistungsseiten zeigen die Details — vom Imagefilm bis zur Projektion auf der Hofscheune.",
    ],
    faq: [
      {
        question: "Übernimmt Sophia auch private Anlässe in Meerbusch?",
        answer:
          "Ausgewählte, ja — etwa Jubiläen und Feste mit kulturellem oder unternehmerischem Rahmen. Wie diskret gearbeitet wird, klärt das Vorgespräch: kleines Setup, klare Absprachen, keine gestellten Szenen.",
      },
      {
        question: "Was ist mit dem Fluglärm bei Außenaufnahmen?",
        answer:
          "Der wird eingeplant: Je nach Ortsteil und Betriebsrichtung liegen Flugzeiten über Meerbusch — Zeitfenster und Ortswahl reagieren darauf, Interviews weichen im Zweifel in ruhige Innenräume aus.",
      },
    ],
  },

  krefeld: {
    seoTitle: "Videografin in Krefeld – Sophia Ramahi",
    seoDescription:
      "Videografin für Krefeld: Eventfilm, Imagefilm, Musikvideo und mehr in der Samt- und Seidenstadt — 30 km von Düsseldorf.",
    heroLead:
      "Krefeld bietet Textilgeschichte, Kulturbühnen und Industrie — Produktionen hier werden von Düsseldorf aus mit Besichtigung und klarem Plan aufgesetzt.",
    sectionTitle: "Die Seidenstadt als Drehort",
    intro: [
      "Krefeld hat für Produktionen eine seltene Mischung: Industriekultur aus der Textilära, Kulturorte von der Kulturfabrik bis zum Theater, Feste an der Burg Linn — und einen Mittelstand von der Manufaktur bis zum Chempark-Dienstleister. Je nach Gewerk wird daraus ein anderes Projekt.",
      "Die 30 Kilometer Anfahrt sind ein normaler Arbeitsweg: Besichtigungen und Drehtage bleiben flexible Termine, und auch ein Konzertende nach Mitternacht braucht keine Übernachtungslogik.",
    ],
    faq: [
      {
        question: "Kennt Sophia die Krefelder Locations?",
        answer:
          "Die relevanten Orte werden vor jedem Projekt konkret geprüft — eine Besichtigung gehört bei Sälen, Hallen und Industrieflächen zum Standard. Behauptete Ortskenntnis ersetzt keinen Termin vor Ort.",
      },
      {
        question: "Was kostet die Anfahrt nach Krefeld?",
        answer:
          "Einen transparent ausgewiesenen, kleinen Posten — keine Pauschalen, keine Zuschläge. Bei mehrteiligen Produktionen werden Fahrten gebündelt geplant.",
      },
    ],
  },

  wuppertal: {
    seoTitle: "Videografin in Wuppertal – Sophia Ramahi",
    seoDescription:
      "Videografin für Wuppertal: Kultur- und Unternehmensfilme, Musikvideos und Events im Tal — 35 km von Düsseldorf.",
    heroLead:
      "Wuppertal hat eigene Regeln: Hanglage, Schwebebahn, dichte Kulturszene — Produktionen hier brauchen Ortsverstand und belohnen ihn mit unverwechselbaren Bildern.",
    sectionTitle: "Produzieren im Tal",
    intro: [
      "Wuppertal sieht aus wie keine andere Stadt in NRW — Schwebebahn, Treppenviertel, Industriearchitektur an der Wupper — und hat mit Stadthalle, Bühnen und freier Szene ein Kulturleben, das Filme verdient. Gleichzeitig stellt die Topografie eigene Anforderungen an Wege, Technik und Zeitplan.",
      "Beides fließt in die Planung ein: Motive werden nach Lage gebündelt, Wegzeiten ehrlich gerechnet, das Licht des Tals genutzt statt bekämpft. Die Leistungsseiten zeigen, was das je Gewerk bedeutet.",
    ],
    faq: [
      {
        question: "Macht die Hanglage Drehs in Wuppertal teurer?",
        answer:
          "Nicht teurer, aber anders: Mehr Wegzeit, kompaktere Technik, Motive nach Lage gebündelt. Ein realistischer Drehplan fängt das auf — versteckte Puffer oder Zuschläge gibt es nicht.",
      },
      {
        question: "Braucht ein Dreh mit der Schwebebahn eine Genehmigung?",
        answer:
          "In Bahnen und auf Stationen ja — die Freigabe der WSW wird bei passendem Konzept früh angefragt. Außenaufnahmen der Bahn vom öffentlichen Raum aus sind meist unkompliziert.",
      },
    ],
  },

  essen: {
    seoTitle: "Videografin in Essen – Sophia Ramahi",
    seoDescription:
      "Videografin für Essen: Events, Unternehmensfilme, Musikvideos und mehr — von Zollverein bis Baldeneysee, 40 km von Düsseldorf.",
    heroLead:
      "Essen reicht vom Welterbe Zollverein bis zum Baldeneysee: Events, Konzernproduktionen und Kulturformate — geplant ab Düsseldorf, mit Besichtigung, wo der Ort sie verlangt.",
    sectionTitle: "Zwischen Welterbe und Konzernzentrale",
    intro: [
      "Essen produziert auf zwei Ebenen: Kultur und Events auf Flächen wie Zollverein, in Philharmonie und Lichtburg — und Corporate-Formate der Konzerne und Institutionen, die hier ihren Sitz haben. Beides verlangt Vorbereitung: Welterbe-Flächen haben Freigabewege, Konzerndrehs Compliance und Guidelines.",
      "Genau diese Vorbereitung ist Teil der Arbeitsweise: Regeln früh klären, Orte besichtigen, den Drehtag den Bildern überlassen. Die Essener Leistungsseiten zeigen die Details je Gewerk.",
    ],
    faq: [
      {
        question: "Wie läuft ein Dreh auf Zollverein?",
        answer:
          "Über die Stiftung: Kommerzielle Drehs auf dem Welterbe brauchen Freigabe und Vorlauf. Bei Veranstaltungen deckt oft der Veranstalter die Dokumentation ab — was gilt, wird vor dem Termin geklärt, nicht am Tor.",
      },
      {
        question: "Ist Essen für Abendveranstaltungen praktikabel?",
        answer:
          "Ja — 40 Kilometer erlauben auch späte Rückfahrten ohne Hotelkosten. Nur mehrtägige Formate mit frühen Starts werden gegen eine Übernachtung gerechnet, transparent im Angebot.",
      },
    ],
  },

  duisburg: {
    seoTitle: "Videografin in Duisburg – Sophia Ramahi",
    seoDescription:
      "Videografin für Duisburg: Events im Landschaftspark, Industrie- und Hafenproduktionen, Musikvideos — 30 km von Düsseldorf.",
    heroLead:
      "Duisburg liefert Kulissen mit Wucht: Landschaftspark, Europas größter Binnenhafen, Tiger & Turtle — Produktionen hier leben von guter Vorbereitung.",
    sectionTitle: "Produktionsraum mit Schwerkraft",
    intro: [
      "Kaum eine Stadt gibt Filmen so viel visuelle Masse: die Hochöfen des Landschaftsparks, endlose Hafenbecken, Halden mit Skulpturen. Gleichzeitig ist vieles davon Arbeitsgebiet — mit Sicherheitsregeln, Freigaben und Wegen, die geplant sein wollen.",
      "Die 30 Kilometer von Düsseldorf machen Duisburg zum regulären Produktionsraum: Besichtigungen sind kurze Termine, Nachtdrehs im illuminierten Landschaftspark enden mit einer normalen Heimfahrt. Details je Gewerk stehen auf den Duisburger Leistungsseiten.",
    ],
    faq: [
      {
        question: "Sind Drehs im Landschaftspark genehmigungspflichtig?",
        answer:
          "Kleine Setups im öffentlichen Bereich meist nicht — Aufbauten, Licht und exklusive Flächen laufen über die Parkverwaltung. Die Regeln sind drehfreundlich; geklärt wird trotzdem vorab.",
      },
      {
        question: "Bekommt eine Produktion Zugang zum Hafen?",
        answer:
          "Über die Betriebe: Als Auftraggeber vor Ort öffnen sie Türen, die eine Produktion allein nicht öffnet. Anmeldung, Sicherheitsunterweisung und erlaubte Motive brauchen Vorlauf — eingeplant von Anfang an.",
      },
    ],
  },

  oberhausen: {
    seoTitle: "Videografin in Oberhausen – Sophia Ramahi",
    seoDescription:
      "Videografin für Oberhausen: Konzerte, Events, Unternehmensfilme und Musikvideos — von Turbinenhalle bis Gasometer, 35 km von Düsseldorf.",
    heroLead:
      "Oberhausen ist Veranstaltungsstadt mit Filmtradition: Konzerte, Shows und Feste — und Betriebe, deren Wandel sich erzählen lässt.",
    sectionTitle: "Veranstaltungsstadt mit Geschichte",
    intro: [
      "Zwischen Turbinenhalle, Arena und Gasometer ist Oberhausen an große Formate gewöhnt — und mit den Internationalen Kurzfilmtagen trägt die Stadt Filmgeschichte im Namen. Produktionen hier reichen vom Konzertfilm über Firmenporträts bis zu Musikvideos in Industriekulisse.",
      "Die 35 Kilometer Anfahrt bleiben ein normaler Arbeitsweg — auch für Abendtermine. Was je Leistung gilt, von Medienregeln bei Shows bis zu Motiven am Kanal, steht auf den Oberhausener Leistungsseiten.",
    ],
    faq: [
      {
        question: "Kann bei Shows und Konzerten in Oberhausen gefilmt werden?",
        answer:
          "Im Rahmen der Medienregeln von Veranstaltern und Management — meist akkreditierte Fenster und Positionen. Für Veranstalter-eigene Filme lassen sich erweiterte Absprachen treffen, fixiert vor dem Abend.",
      },
      {
        question: "Lohnt ein Film für wiederkehrende Oberhausener Formate?",
        answer:
          "Besonders: Ein starker Film wirbt eine ganze Saison, Ausschnitte tragen die Kanäle über Monate. Gedreht wird bei einer Ausgabe mit gutem Programm — geschnitten auf Wiederverwendbarkeit.",
      },
    ],
  },

  bochum: {
    seoTitle: "Videografin in Bochum – Sophia Ramahi",
    seoDescription:
      "Videografin für Bochum: Konzerte, Kultur, Unternehmensfilme und Musikvideos — von Jahrhunderthalle bis Bermuda3eck, ab Düsseldorf geplant.",
    heroLead:
      "Bochum hat Bühnen-Dichte und eigenen Stolz: Konzerte, Theater, Wissenschaft und Betriebe im Aufbruch — Produktionen hier tragen Selbstbewusstsein.",
    sectionTitle: "Musikstadt im Aufbruch",
    intro: [
      "Jahrhunderthalle, Schauspielhaus, Musikforum, Clubs am Bermuda3eck: Bochum veranstaltet über seiner Gewichtsklasse — und wandelt sich daneben zur Wissens- und Technologiestadt. Beides liefert Stoff für Filme: Konzertabende ebenso wie Betriebe, die vom Weitermachen erzählen.",
      "Die 50 Kilometer von Düsseldorf sind planbar: Abendtermine mit später Rückfahrt bleiben normal, nur mehrtägige Produktionen werden gegen eine Übernachtung gerechnet. Details je Gewerk stehen auf den Bochumer Leistungsseiten.",
    ],
    faq: [
      {
        question: "Ist Bochum für Abendveranstaltungen zu weit?",
        answer:
          "Nein — auch nach einem späten Konzertende bleibt die Rückfahrt machbar, Übernachtungskosten entstehen nicht. Der Vorlauf gehört eher den Freigaben: Positionen, Foto-Regeln, Tonabgriff.",
      },
      {
        question: "Was macht Bochumer Filme besonders?",
        answer:
          "Der Ton der Stadt: direkt, warm, ohne Pose. Interviews dürfen genau so klingen — das macht Unternehmens- und Kulturfilme hier glaubwürdiger als jede Hochglanz-Formel.",
      },
    ],
  },

  dortmund: {
    seoTitle: "Videografin in Dortmund – Sophia Ramahi",
    seoDescription:
      "Videografin für Dortmund: Kongresse, Festivals, Unternehmensfilme und Musikvideos — Westfalenhallen, Phoenix, Hafen. Mit realistischer Planung ab Düsseldorf.",
    heroLead:
      "Dortmund veranstaltet im Großformat: Kongresse, Festivals, Kultur — die 70 Kilometer sind eine Planungsgröße, kein Hindernis.",
    sectionTitle: "Großformat mit Plan",
    intro: [
      "Westfalenhallen, Westfalenpark, Konzerthaus, das U: Dortmund arbeitet in Dimensionen, die eigene Logistik verlangen — und hat mit Phoenix, Hafenquartier und Stadion-Mythos Motive, die es nur hier gibt. Produktionen werden deshalb als geplante Blöcke aufgesetzt: Scouting gebündelt, Drehtage konzentriert.",
      "Die Distanz steht offen in der Kalkulation: Anfahrten einzeln ausgewiesen, Übernachtung nur, wo sie wirtschaftlicher ist. Was je Leistung gilt, zeigen die Dortmunder Leistungsseiten.",
    ],
    faq: [
      {
        question: "Wie wird die Entfernung nach Dortmund kalkuliert?",
        answer:
          "Transparent: Fahrten als einzelne Positionen, bei frühen Starts oder Mehrtagesformaten der ehrliche Vergleich mit einer Übernachtung. Keine Pauschalen — die Zahlen stehen vor der Beauftragung.",
      },
      {
        question: "Ab welchem Vorlauf ist eine Dortmund-Produktion sinnvoll?",
        answer:
          "Ein bis zwei Wochen reichen für einzelne Drehtage mit Briefing und Technikabstimmung. Same-Day-Einsätze sind bei 70 Kilometern selten die beste Lösung — planbare Termine dafür umso mehr.",
      },
    ],
  },

  moenchengladbach: {
    seoTitle: "Videografin in Mönchengladbach – Sophia Ramahi",
    seoDescription:
      "Videografin für Mönchengladbach: Events, Unternehmensfilme, Musikvideos — SparkassenPark, Textilerbe, Niederrhein. 35 km von Düsseldorf.",
    heroLead:
      "Mönchengladbach verbindet Open-Air-Bühne, Textilerbe und Niederrhein-Weite — eine Doppelstadt mit mehr Motiven, als ihr Ruf verrät.",
    sectionTitle: "Die Doppelstadt am Niederrhein",
    intro: [
      "Zwischen SparkassenPark-Konzerten, dem Museumsbau am Abteiberg, Textilhallen und offener Niederrhein-Landschaft bietet Mönchengladbach drei Bildwelten in einer Stadt — verteilt auf zwei Zentren, die der Drehplan zusammendenkt.",
      "Für Unternehmen zählt anderes: Logistik, Textilkompetenz, Mittelstand — und der Wettbewerb um Personal. Filme helfen an beiden Fronten; die Gladbacher Leistungsseiten zeigen, wie.",
    ],
    faq: [
      {
        question: "Deckt eine Produktion beide Stadtzentren ab?",
        answer:
          "Ja — Gladbach und Rheydt liegen zehn Autominuten auseinander. Der Drehplan bündelt Motive je Zentrum und legt Wege in Programmpausen; die Anfahrt aus Düsseldorf bleibt ein kleiner Posten.",
      },
      {
        question: "Kann bei Konzerten im SparkassenPark gefilmt werden?",
        answer:
          "Im Rahmen der Medienregeln: Akkreditierung und meist die ersten Songs. Für Veranstalter- und Sponsorenfilme werden erweiterte Absprachen vor dem Termin verhandelt.",
      },
    ],
  },

  leverkusen: {
    seoTitle: "Videografin in Leverkusen – Sophia Ramahi",
    seoDescription:
      "Videografin für Leverkusen: Events, Unternehmensfilme, Musikvideos — Jazztage, Erholungshaus, Rheinufer. 35 km von Düsseldorf.",
    heroLead:
      "Leverkusen liegt auf halber Strecke zwischen Düsseldorf und Köln: Kultur mit Rang, Industrie am Horizont und ein Mittelstand mit Lagevorteil.",
    sectionTitle: "Auf halber Strecke",
    intro: [
      "Die Jazztage, Konzerte im Erholungshaus, Kunst an Schloss Morsbroich: Leverkusens Kulturleben ist größer als sein Ruf — und die Industriesilhouette gibt der Stadt ein Bild, das kein anderer Ort hat. Dazwischen arbeitet ein Mittelstand, der zwischen zwei Großstädten um Personal und Aufmerksamkeit konkurriert.",
      "Für Produktionen liegt die Stadt ideal: 35 Kilometer von der Basis, Besichtigungen als kurze Termine, keine Übernachtungslogik. Die Leverkusener Leistungsseiten zeigen die Details je Gewerk.",
    ],
    faq: [
      {
        question: "Kann die Industriekulisse in Filme einfließen?",
        answer:
          "Vom öffentlichen Raum aus ja — als Silhouette und Lichtquelle gehört sie zum Stadtbild. Werksgelände und sicherheitsrelevante Details bleiben außen vor; die Fernwirkung ist ohnehin das stärkere Bild.",
      },
      {
        question: "Ist Leverkusen auch für Kölner Produktionen ein Treffpunkt?",
        answer:
          "Praktisch ja — die Stadt liegt für beide Seiten auf halber Strecke. Besichtigungen, Übergaben und Drehs lassen sich hier ohne großen Aufwand für alle Beteiligten organisieren.",
      },
    ],
  },

  bonn: {
    seoTitle: "Videografin in Bonn – Sophia Ramahi",
    seoDescription:
      "Videografin für Bonn: Konferenzen, Institutionsfilme, Kultur und Musikvideos — WCCB, Museumsmeile, Rheinaue. Mit realistischer Planung ab Düsseldorf.",
    heroLead:
      "Bonn veranstaltet mit institutionellem Gewicht: Konferenzen, Kultur, internationale Organisationen — Produktionen hier sind Planungsarbeit, und genau die gehört zum Angebot.",
    sectionTitle: "Die Bundesstadt als Auftraggeberin",
    intro: [
      "UN-Campus, Ministerien, Verbände, Museumsmeile, Beethoven-Erbe: Bonn produziert Anlässe mit Protokoll — Konferenzen, Empfänge, Kulturformate. Filme auf diesem Niveau brauchen Vorbereitung: Akkreditierungen, Freigaben, präzise Abläufe. Genau das ist Teil der Arbeitsweise.",
      "Die 75 Kilometer machen Bonn zum Planungsfall mit offener Kalkulation: Anfahrten einzeln, Übernachtung nur, wo sie wirtschaftlicher ist. Was je Gewerk gilt — vom Konferenzfilm bis zum Kirschblüten-Musikvideo — steht auf den Bonner Leistungsseiten.",
    ],
    faq: [
      {
        question: "Hat Sophia Erfahrung mit Protokoll und Sicherheitsauflagen?",
        answer:
          "Der Umgang damit ist Teil der Vorbereitung: Akkreditierungen, Sperrzonen und Fotografier-Regeln werden vorab gesammelt und in Positionen übersetzt — am Veranstaltungstag gibt es keine Überraschungen.",
      },
      {
        question: "Wie wird ein mehrtägiges Bonner Format kalkuliert?",
        answer:
          "Offen: Drehtage, Fahrten und — falls günstiger — Übernachtung stehen einzeln im Angebot. Der Drehplan priorisiert Programmpunkte statt Dauerpräsenz; so bleibt auch ein Kongress bezahlbar.",
      },
    ],
  },

  solingen: {
    seoTitle: "Videografin in Solingen – Sophia Ramahi",
    seoDescription:
      "Videografin für Solingen: Manufaktur-Filme, Events, Musikvideos — Klingenstadt, Schloss Burg, Müngstener Brücke. 35 km von Düsseldorf.",
    heroLead:
      "Solingen trägt sein Handwerk im Namen: Manufakturen, Industriekultur und bergische Kulissen — Stoff für Filme mit Substanz.",
    sectionTitle: "Die Klingenstadt im Film",
    intro: [
      "„Made in Solingen“ ist filmbares Kapital: Hände, die schleifen und prüfen, Betriebe mit Generationenwissen — dazu Kulissen wie Schloss Burg, die Müngstener Brücke und der Fachwerkkern von Gräfrath. Kaum eine Stadt liefert so viel ehrliche Substanz auf so engem Raum.",
      "Die 35 Kilometer aus Düsseldorf sind ein Arbeitsweg mit Serpentinen — eingeplant im Zeitbudget. Was je Leistung gilt, vom Manufaktur-Porträt bis zur Projektion auf historischem Mauerwerk, steht auf den Solinger Leistungsseiten.",
    ],
    faq: [
      {
        question: "Kann in einer aktiven Schmiede oder Schleiferei gedreht werden?",
        answer:
          "Mit Absprache ja — Sicherheitsabstände, Schutzausrüstung und Versicherungsfragen werden vor dem Drehtag geklärt. Die Bilder aus echten Werkstätten sind den Aufwand wert.",
      },
      {
        question: "Eignet sich ein Solinger Film auch für den Export-Auftritt?",
        answer:
          "Sehr — Herkunft und Handarbeit sind international die stärksten Argumente. Der Film wird dafür mit Untertiteln oder als englische Fassung ausgespielt; alle Fassungen entstehen aus einem Dreh.",
      },
    ],
  },
};
