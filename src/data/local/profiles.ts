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
    seoTitle: "Videodreh in Düsseldorf | Sophia Ramahi",
    seoDescription: "Düsseldorf ist Sophias Produktionsbasis. Film, Kamera und Visuals für Musik, Kultur und Unternehmen: Drehort, Umfang und Technik gemeinsam planen.",
    heroLead: "Düsseldorf ist Sophias Produktionsbasis. Kamera, Film und Visuals werden für den konkreten Ort und Anlass geplant.",
    sectionTitle: "Die Produktionsbasis in Düsseldorf",
    intro: [
      "Sophia arbeitet von Düsseldorf aus als Videografin, Kamerafrau und Visual Artist. Ihre audiovisuelle Arbeit Electric Lights wurde im KIT gezeigt; ihre Beiträge sind auf der Projektseite beschrieben. Für einen neuen Auftrag werden Motive, Zugänge und technische Bedingungen eigens geprüft.",
      "Bei einer Veranstaltung stehen Ablauf und Aufnahmepositionen im Vordergrund. Ein Interview braucht eine passende Gesprächssituation und Tonplanung. Für Live Visuals oder Mapping werden Bildflächen, Zuspielung und Aufbau mit der Veranstaltungstechnik abgestimmt. Die jeweilige Leistungsseite beschreibt den fachlichen Umfang."
    ],
    faq: [
      {
        "question": "Wie werden Fahrt und Techniktransport innerhalb Düsseldorfs behandelt?",
        "answer": "Der konkrete Drehort, Transport und Aufbau werden im Angebot berücksichtigt. Aus der Produktionsbasis in Düsseldorf folgt keine pauschale Zusage zu kostenlosen Fahrten oder zusätzlichen Besichtigungen."
      },
      {
        "question": "Was hilft bei einer Anfrage für Düsseldorf?",
        "answer": "Termin, genaue Location, Projektart, gewünschte Nutzung und vorhandene technische Angaben. Falls Zugänge oder Freigaben noch offen sind, nennen Sie die zuständige Ansprechperson. Verfügbarkeit und Umfang werden für das Projekt geprüft."
      }
    ],
  },

  koeln: {
    seoTitle: "Videoproduktion in Köln | Planung ab Düsseldorf",
    seoDescription: "Film, Kamera und Live Visuals für Projekte in Köln. Produktion ab Düsseldorf mit abgestimmter Anreise, Drehplanung und technischem Umfang.",
    heroLead: "Für Produktionen in Köln reist Sophia aus Düsseldorf an. Dreh, Aufbau und mögliche Proben werden mit dem Zeitplan vor Ort abgestimmt.",
    sectionTitle: "Veranstaltungsablauf und Anreise zusammen planen",
    intro: [
      "Ein Konzertfilm oder ein Live-Visuals-Einsatz in Köln braucht neben den Spielzeiten auch Angaben zum Aufbau, zu Übergaben und zum Ende der Veranstaltung. Frühere Aufbau- und späte Abbauzeiten gehören in die Kalkulation. Reise und eine gegebenenfalls nötige Übernachtung werden für den tatsächlichen Ablauf geprüft.",
      "Bei Musikvideos, Interviews und Unternehmensporträts bestimmen Motive, Personen und freigegebene Zeitfenster die Planung. Wenn bereits Regie und Produktion vorhanden sind, kann Sophia als Kamerafrau angefragt werden. Die fachlichen Details stehen auf den zentralen Leistungsseiten."
    ],
    faq: [
      {
        "question": "Ist für einen Dreh in Köln eine Übernachtung nötig?",
        "answer": "Das hängt von Start, Ende, Zahl der Produktionstage und Reiseplanung ab. Eine pauschale Kostenfreiheit wird nicht vorausgesetzt; die vereinbarten Reiseposten stehen im Angebot."
      },
      {
        "question": "Muss jede Abstimmung in Köln stattfinden?",
        "answer": "Ein erstes Briefing kann anhand von Ablauf, Fotos und technischen Angaben erfolgen. Ob eine Besichtigung oder Probe vor Ort nötig ist, wird danach für das Projekt festgelegt."
      }
    ],
  },

  neuss: {
    seoTitle: "Videodreh in Neuss | Interviews, Film & Kamera",
    seoDescription: "Videodreh in Neuss mit Sophia Ramahi aus Düsseldorf: Interviews, Eventfilm und Kameraarbeit. Ort, Anreise, Ton und Auslieferung konkret planen.",
    heroLead: "Film- und Kameraaufträge in Neuss werden von Düsseldorf aus geplant. Auch bei kurzen Wegen zählen Zugang, Aufbau und der tatsächliche Drehumfang.",
    sectionTitle: "Interviews und Aufnahmen am selben Ort planen",
    intro: [
      "Für ein Porträt oder einen Interviewblock in Neuss werden Gesprächsort und ergänzende Arbeitsbilder gemeinsam vorbereitet. Angaben zu Raum, vorhandenen Lichtquellen und Störgeräuschen helfen bei der Kamera- und Tonplanung. Zugänge und die Verfügbarkeit der Personen gehören ins Briefing.",
      "Bei einem Veranstaltungsfilm braucht Sophia zusätzlich den Ablauf und die gewünschten Schlüsselmomente. Anreise, Techniktransport, Aufbau und mögliche weitere Termine werden im Angebot berücksichtigt. Nähe zu Düsseldorf ist eine logistische Bedingung und keine Zusage zu identischen Konditionen."
    ],
    faq: [
      {
        "question": "Sind kleine Projekte in Neuss möglich?",
        "answer": "Eine kompakte Aufgabe wie ein Interview oder ein konzentrierter Dreh kann angefragt werden. Sinnvoller Umfang, Verfügbarkeit und erforderlicher Aufbau werden anhand des konkreten Briefings geprüft."
      },
      {
        "question": "Wie werden Anfahrt und Besichtigungen berechnet?",
        "answer": "Reise, Transport und gegebenenfalls gesonderte Vor-Ort-Termine werden vor der Beauftragung vereinbart. Dafür sind Location und Ablauf wichtiger als eine pauschale Entfernungsschätzung."
      }
    ],
  },

  ratingen: {
    seoTitle: "Videodreh in Ratingen | Interviews & Unternehmensporträt",
    seoDescription: "Interviews, Unternehmensporträts und Kameraarbeit in Ratingen mit Sophia Ramahi. Produktionsplanung aus Düsseldorf für den vereinbarten Umfang.",
    heroLead: "Für Interviews und Unternehmensporträts in Ratingen werden Personen, Räume und Zeitfenster vor dem Dreh abgestimmt.",
    sectionTitle: "Ein Dreh im laufenden Betrieb",
    intro: [
      "Ein Unternehmensporträt in Ratingen kann Interviews mit Aufnahmen von Arbeitsabläufen verbinden. Dazu müssen Personen, freigegebene Motive und mögliche Betriebsunterbrechungen benannt werden. Vertrauliche Bereiche und die zuständige Ansprechperson gehören in die Vorbereitung.",
      "Bei einem Auftrag innerhalb eines vorhandenen Produktionsteams werden Bildsprache, Formate und technische Vorgaben vorab besprochen. Sophia arbeitet von Düsseldorf aus; Anreise und Umfang werden für den tatsächlichen Drehplan vereinbart. Eine kurzfristige Buchung hängt von Verfügbarkeit und Vorbereitung ab."
    ],
    faq: [
      {
        "question": "Kann mit vorhandenen Gestaltungsvorgaben gearbeitet werden?",
        "answer": "Bildreferenzen, Formate und Übergabevorgaben können ins Briefing aufgenommen werden. Vor dem Auftrag wird geprüft, welche Anforderungen zum geplanten Dreh und zur Postproduktion gehören."
      },
      {
        "question": "Ist ein kurzfristiger Dreh möglich?",
        "answer": "Das wird für Termin und Umfang geprüft. Nennen Sie Location, Personen, Nutzung und bereits geklärte Zugänge. Die Nähe zu Düsseldorf ersetzt weder Vorbereitung noch eine Verfügbarkeitsprüfung."
      }
    ],
  },

  meerbusch: {
    seoTitle: "Videodreh in Meerbusch | Porträt & Produktionsplanung",
    seoDescription: "Film und Kamera für Projekte in Meerbusch, geplant ab Düsseldorf. Interviewort, Licht, Ton, Zugänge und Nutzung vor der Produktion klären.",
    heroLead: "Für einen Porträt- oder Videodreh in Meerbusch werden Ort, Licht und Ton gemeinsam mit dem Produktionsrahmen vorbereitet.",
    sectionTitle: "Den Gesprächsort vor der Aufnahme prüfen",
    intro: [
      "Bei einem Interview in Meerbusch ist der Hintergrund nur ein Teil der Ortswahl. Auch Umgebung, störende Geräusche, Platz für Kamera und Licht sowie erreichbare Aufbauzeiten müssen passen. Fotos und Angaben zum Raum ermöglichen eine erste Einschätzung.",
      "Für Außenmotive werden die tatsächlichen Bedingungen zur geplanten Drehzeit geprüft. Wetter, Freigaben und ein möglicher Ersatzort gehören in die Absprache. Fahrtzeiten und Aufwand werden anhand der genauen Location geplant; eine pauschale Minutenangabe trägt den Drehplan nicht."
    ],
    faq: [
      {
        "question": "Wie wird mit Störgeräuschen am Drehort umgegangen?",
        "answer": "Die Situation wird für den konkreten Ort beurteilt. Eine andere Gesprächsposition, ein geeignetes Zeitfenster oder ein Innenraum kann sinnvoll sein. Verständlicher Ton sollte vor dem Dreh geplant werden."
      },
      {
        "question": "Welche Angaben braucht ein Porträtdreh?",
        "answer": "Personen, Tätigkeit, gewünschte Aussage, verfügbare Orte und die spätere Nutzung. Ergänzen Sie Termine, Fotos und bekannte Einschränkungen, damit Aufnahme und Auslieferung gemeinsam geplant werden können."
      }
    ],
  },

  krefeld: {
    seoTitle: "Videodreh in Krefeld | Kultur, Events & Kamera",
    seoDescription: "Videodreh, Eventfilm und Kameraarbeit für Projekte in Krefeld mit Sophia Ramahi aus Düsseldorf. Aufbau, Ton und freigegebene Motive planen.",
    heroLead: "Für Kultur- und Veranstaltungsprojekte in Krefeld werden Filmziel, Drehorte und technische Zuständigkeiten im Briefing geklärt.",
    sectionTitle: "Kulturveranstaltung und Filmnutzung verbinden",
    intro: [
      "Ein Film über eine Veranstaltung in Krefeld kann als kurzer Rückblick oder als ausführlichere Dokumentation geplant werden. Welche Programmpunkte und Stimmen gebraucht werden, sollte vor dem Dreh feststehen. Zugang, Kameraaufnahmen und benötigte Tonquellen werden mit den Verantwortlichen abgestimmt.",
      "Für Projektionen oder Live Visuals gehören Bildflächen, Anschlüsse und ein Prüfzeitfenster zur Anfrage. Anreise und technische Bereitstellung werden von Düsseldorf aus für das Projekt geplant. Eine neue Location wird anhand ihrer tatsächlichen Bedingungen beurteilt."
    ],
    faq: [
      {
        "question": "Wie wird eine neue Location vorbereitet?",
        "answer": "Fotos, Maße, Ablauf und technische Angaben sind ein erster Einstieg. Ob eine Besichtigung oder Probe nötig ist, wird für die konkrete Aufgabe festgelegt. Eine behauptete allgemeine Ortskenntnis ersetzt diese Prüfung nicht."
      },
      {
        "question": "Können Film und Live Visuals kombiniert werden?",
        "answer": "Beides kann angefragt werden. Live-Betreuung und gleichzeitige Filmaufnahmen brauchen aber klare Zuständigkeiten und gegebenenfalls zusätzliche Besetzung; der Umfang wird gemeinsam geplant."
      }
    ],
  },

  wuppertal: {
    seoTitle: "Videodreh in Wuppertal | Motive & Kameraplanung",
    seoDescription: "Kamera- und Videoproduktion in Wuppertal ab Düsseldorf. Motive, Zugänge, Wege, Licht und technische Vorbereitung für das konkrete Projekt abstimmen.",
    heroLead: "Ein Videodreh in Wuppertal beginnt mit den konkreten Motiven, ihren Zugängen und den verfügbaren Aufnahmezeiten.",
    sectionTitle: "Mehrere Motive in einen Drehplan bringen",
    intro: [
      "Wenn ein Musikvideo oder Porträt mehrere Orte in Wuppertal nutzt, zählen auch Wege, Transport, Aufbau und mögliche Wartezeiten. Geben Sie deshalb die genauen Motive und Ansprechpartner an. Freigaben und verfügbare Drehfenster sollten vor der endgültigen Aufnahmereihenfolge geklärt werden.",
      "Kamera und Licht werden anhand der gewünschten Bildsprache vorbereitet. Orte mit betrieblichen oder besonderen Zugangsregeln müssen mit den Zuständigen abgestimmt werden. Aus einer Außenansicht oder allgemeinen Zugänglichkeit wird keine Aufnahmefreigabe abgeleitet."
    ],
    faq: [
      {
        "question": "Kann an Verkehrsanlagen oder besonderen Orten gedreht werden?",
        "answer": "Eine Idee kann geprüft werden. Ob Zugang und Nutzung möglich sind, klären die zuständigen Betreiber oder Flächenverantwortlichen für den konkreten Dreh. Diese Rückmeldung gehört in die Motivplanung."
      },
      {
        "question": "Was hilft bei mehreren Drehorten?",
        "answer": "Adressen, Fotos, Zugangszeiten, Ansprechpartner und der geplante Umfang je Motiv. Anreise und Wechsel zwischen den Orten werden mit der verfügbaren Drehzeit zusammen geplant."
      }
    ],
  },

  essen: {
    seoTitle: "Videoproduktion in Essen | Kultur, Kamera & Events",
    seoDescription: "Film- und Kameraaufträge in Essen mit Sophia Ramahi aus Düsseldorf. Kulturveranstaltungen, Interviews und Drehplanung nach vereinbartem Umfang.",
    heroLead: "Bei einer Produktion in Essen werden Veranstaltungen, Interviews oder einzelne Kameraaufträge mit ihren jeweiligen Aufnahmebedingungen geplant.",
    sectionTitle: "Inhalte und Drehzugang vorab abstimmen",
    intro: [
      "Für ein Veranstaltungsformat in Essen muss geklärt sein, welche Inhalte der Film festhalten soll und wann Zugang für Kamera und Ton besteht. Bei Interviews können Aufbau und Gesprächszeiten vom laufenden Programm abweichen. Eine verantwortliche Ansprechperson erleichtert diese Abstimmung.",
      "Ein Kulturfilm oder Musikvideo erhält seine eigene Motiv- und Lichtplanung. Besondere Veranstaltungsorte, Parks und andere Flächen werden mit den Zuständigen für die konkrete Nutzung geprüft. Sophia reist aus Düsseldorf an; technische Aufgaben und Reiseumfang stehen im Angebot."
    ],
    faq: [
      {
        "question": "Kann in öffentlich zugänglichen Anlagen gedreht werden?",
        "answer": "Öffentliche Zugänglichkeit beantwortet nicht alle Fragen zum Aufbau und zur Nutzung. Ort, Aufnahmeumfang und mögliche Sondernutzung müssen mit der jeweils zuständigen Stelle geprüft werden."
      },
      {
        "question": "Kann nur Kameraarbeit gebucht werden?",
        "answer": "Ja, eine Anfrage als Einzelgewerk ist möglich. Regie, Bildsprache, technische Vorgaben, Tonverantwortung und Datenübergabe werden mit der vorhandenen Produktion geklärt."
      }
    ],
  },

  duisburg: {
    seoTitle: "Videodreh in Duisburg | Zugang, Kamera & Ton",
    seoDescription: "Videodreh und Kameraarbeit in Duisburg mit Sophia Ramahi. Ort, Zugänge, Aufbau und Originalton für Filmprojekte ab Düsseldorf planen.",
    heroLead: "Für einen Dreh in Duisburg zählen genaue Motive, freigegebene Zugänge und Bedingungen für Kamera und Ton.",
    sectionTitle: "Zugang und Aufbau vor der Kamera planen",
    intro: [
      "Bei Unternehmensflächen oder anderen betriebenen Orten in Duisburg sollte die Anfrage den tatsächlichen Aufbau beschreiben. Ansprechpartner, Aufnahmebereiche und Zeitfenster müssen benannt sein. Anforderungen an Zugang und Betrieb werden mit den Verantwortlichen vor Ort geklärt.",
      "Interviews, ergänzende Arbeitsbilder und ein Eventfilm stellen unterschiedliche Anforderungen an Ton und Licht. Sophia kann die passende Kamera- oder Produktionsaufgabe auf Grundlage des Briefings prüfen. Für Außenmotive werden Wetter und Ausweichmöglichkeiten eingeplant."
    ],
    faq: [
      {
        "question": "Kann auf Unternehmens- oder Industriegelände gedreht werden?",
        "answer": "Das hängt von der Freigabe und den Bedingungen des jeweiligen Standorts ab. Nennen Sie Ansprechpartner, gewünschte Motive, Zugänge und bereits bekannte Vorgaben. Eine pauschale Zusage für Anlagen wird nicht vorausgesetzt."
      },
      {
        "question": "Was braucht die Kamera- und Tonplanung?",
        "answer": "Drehziel, genaue Location, Zeitfenster, Personen, Bildreferenzen und die gewünschte Nutzung. Bekannte Störquellen und technische Möglichkeiten helfen, Interview und Bildaufnahmen zusammen vorzubereiten."
      }
    ],
  },

  oberhausen: {
    seoTitle: "Videodreh in Oberhausen | Kultur & Produktion",
    seoDescription: "Videodreh, Eventfilm und Kameraaufträge in Oberhausen mit Sophia Ramahi. Drehorte, Interviews und technische Bedingungen ab Düsseldorf planen.",
    heroLead: "Ein Filmprojekt in Oberhausen wird anhand seiner Aufgabe geplant: Veranstaltung, Interview, Musikvideo oder einzelne Kameraarbeit.",
    sectionTitle: "Den Aufnahmeort mit der Bildidee abgleichen",
    intro: [
      "Für einen Dreh in Oberhausen werden Motive und gewünschte Bildsprache gemeinsam betrachtet. Raum, Licht, Ton und Zugänge müssen zum Aufbau passen. An besonderen Veranstaltungsorten oder betriebenen Flächen werden Bedingungen mit den Zuständigen konkret geprüft.",
      "Ein vorhandenes Produktionsteam kann Sophia für Kamera und Bildgestaltung anfragen. Bei einer kompakten Produktion werden Konzept, Dreh und Postproduktion als vereinbarter Umfang geplant. Reiseposten und zusätzliche Vor-Ort-Termine werden im Angebot benannt."
    ],
    faq: [
      {
        "question": "Kann ein Kulturprojekt mit kleinem Team umgesetzt werden?",
        "answer": "Das wird anhand von Motiven, Ablauf und technischer Aufgabe geprüft. Ein kompakter Aufbau kann passen; parallele Aufnahmen, umfangreicher Ton oder besondere Zugänge können zusätzliche Besetzung erfordern."
      },
      {
        "question": "Wie wird ein neuer Drehort geprüft?",
        "answer": "Fotos, Maße, Nutzung und technische Angaben helfen bei der ersten Einschätzung. Freigaben, Zugänge und gegebenenfalls eine Besichtigung werden vor dem Dreh mit den Beteiligten geklärt."
      }
    ],
  },

  bochum: {
    seoTitle: "Eventfilm & Kamera in Bochum | Planung ab Düsseldorf",
    seoDescription: "Eventfilm, Kulturproduktionen und Kameraarbeit in Bochum mit Sophia Ramahi. Ablauf, Originalton und Drehumfang vor der Buchung abstimmen.",
    heroLead: "Für Veranstaltungs- und Kulturprojekte in Bochum werden Filmziel, Kamerapositionen und Tonwege vor dem Termin besprochen.",
    sectionTitle: "Ablauf und Aufnahmefenster zusammenbringen",
    intro: [
      "Ein Konzert oder eine Performance in Bochum hat einen festen Ablauf. Für einen Eventfilm werden die wichtigen Momente, möglichen Kamerapositionen und gewünschten Stimmen benannt. Aufnahmeregeln und Zugang werden mit Veranstaltern und weiteren Zuständigen geprüft.",
      "Soll zusätzlich visuelles Material live eingesetzt werden, müssen VJ-Aufgabe und Dokumentation getrennt besetzt oder zeitlich geplant werden. Sophia arbeitet von Düsseldorf aus; Reise, Aufbau und gegebenenfalls zusätzliche Crew werden für die konkrete Veranstaltung vereinbart."
    ],
    faq: [
      {
        "question": "Welche Regeln gelten für Konzertaufnahmen?",
        "answer": "Die Vorgaben werden für die konkrete Veranstaltung mit Veranstaltern und weiteren Zuständigen geklärt. Es gibt keine hier vorausgesetzte pauschale Anzahl erlaubter Songs oder Kamerapositionen."
      },
      {
        "question": "Was braucht ein Aftermovie-Angebot?",
        "answer": "Termin, Ort, Ablauf, wichtige Programmpunkte, geplante Nutzung und gewünschte Fassungen. Nennen Sie außerdem Interviewbedarf, technische Ansprechperson und mögliche Auf- und Abbauzeiten."
      }
    ],
  },

  dortmund: {
    seoTitle: "Videodreh in Dortmund | Veranstaltung & Kamera",
    seoDescription: "Eventfilm und Kameraarbeit für Projekte in Dortmund, geplant ab Düsseldorf. Bühnen, Interviewbedarf, Aufbau und Auslieferung konkret abstimmen.",
    heroLead: "Für eine Veranstaltung oder einen Kameraauftrag in Dortmund werden Programmpunkte, Wege und Zuständigkeiten in einem gemeinsamen Ablauf geplant.",
    sectionTitle: "Parallele Aufgaben realistisch besetzen",
    intro: [
      "Bei einer Veranstaltung in Dortmund können Bühne, Publikum und Interviews gleichzeitig wichtig sein. Ein Ablaufplan zeigt, welche Aufnahmen sich überschneiden. Die Besetzung muss die vereinbarten Aufgaben abdecken können; eine einzelne Kamera erfasst nicht zeitgleich mehrere entfernte Orte.",
      "Für ein Musikvideo oder einen anderen Kameradreh stehen Bildidee, Motive und Licht im Briefing. Aufbau, Reise aus Düsseldorf und die Übergabe an die Postproduktion gehören zur Planung. Der konkrete Auftrag legt die gewünschten Rollen und Fassungen fest."
    ],
    faq: [
      {
        "question": "Sind mehrere Kameras möglich?",
        "answer": "Eine passende Besetzung kann projektbezogen geplant werden. Zahl und Aufgaben der Kameras werden anhand des Ablaufs, der Räume und des gewünschten Ergebnisses geklärt."
      },
      {
        "question": "Wie wird Material an eine bestehende Postproduktion übergeben?",
        "answer": "Format, Tonzuordnung, Dateibenennung und Übergabe werden vor dem Dreh mit der Produktion vereinbart. Die Verantwortlichkeit für Sicherung und weitere Archivierung wird ebenfalls festgelegt."
      }
    ],
  },

  moenchengladbach: {
    seoTitle: "Videoproduktion Mönchengladbach | Film & Visuals",
    seoDescription: "Film, Kamera und Live Visuals für Projekte in Mönchengladbach. Sophia Ramahi plant von Düsseldorf aus nach Anlass, Ort und technischem Bedarf.",
    heroLead: "Film und visuelle Gestaltung in Mönchengladbach werden passend zu Veranstaltung, Musikprojekt oder Porträt geplant.",
    sectionTitle: "Filmaufnahme und Live-Aufgabe auseinanderhalten",
    intro: [
      "Soll eine Veranstaltung in Mönchengladbach dokumentiert werden oder braucht sie Live Visuals auf der Bühne? Die Aufgaben können zusammenkommen, verlangen aber unterschiedliche Vorbereitung. Kamera und Ton erfassen Inhalte; ein VJ-Set braucht Material, Zuspielung und Betreuung während der Veranstaltung.",
      "Bei Interviews und Unternehmensporträts werden Personen, Räume und freigegebene Abläufe gemeinsam geplant. Umfang, Technik und Anreise aus Düsseldorf richten sich nach dem konkreten Projekt. Ein Angebot benennt die Zuständigkeiten und gewünschten Fassungen."
    ],
    faq: [
      {
        "question": "Was sollte eine Veranstaltungsanfrage enthalten?",
        "answer": "Termin, Ort, Ablauf und das gewünschte Ergebnis. Geben Sie an, ob ein Film, Live Visuals oder beides gebraucht wird, und wer Bühnen- beziehungsweise Veranstaltungstechnik betreut."
      },
      {
        "question": "Sind kurze Social-Versionen möglich?",
        "answer": "Ja, nach vereinbartem Umfang. Zahl, Bildformate, Untertitel und Nutzung sollten vor der Aufnahme feststehen, damit die Motive für diese Fassungen geplant werden können."
      }
    ],
  },

  leverkusen: {
    seoTitle: "Videodreh in Leverkusen | Interviews & Kamera",
    seoDescription: "Interviews, Unternehmensporträts und Kameraarbeit in Leverkusen. Produktion ab Düsseldorf mit geklärten Zugängen, Motiven und technischem Umfang.",
    heroLead: "Bei einem Videodreh in Leverkusen werden Interviews, Aufnahmebereiche und Zugänge mit dem Team vor Ort abgestimmt.",
    sectionTitle: "Aufnahmen in den Betrieb einplanen",
    intro: [
      "Für ein Porträt an einem Unternehmensstandort in Leverkusen werden Ansprechpartner, Drehbereiche und verfügbare Personen benannt. Vertrauliche Inhalte und mögliche Einschränkungen gehören ins Vorgespräch. Kamera, Licht und Transport werden anhand des vereinbarten Aufbaus vorbereitet.",
      "Wenn eine Agentur oder Produktion den Auftrag führt, kann Sophia als Kamerafrau einsteigen. Bildreferenzen und technische Vorgaben helfen bei der Rollenklärung. Ton und Postproduktion werden als eigene Aufgaben oder als Teil des vereinbarten Umfangs benannt."
    ],
    faq: [
      {
        "question": "Was muss ein Unternehmensstandort vorab klären?",
        "answer": "Zugänge, Ansprechperson, Aufnahmebereiche und verfügbare Zeitfenster. Zusätzliche standortspezifische Anforderungen werden vom Verantwortlichen bestätigt und in die Planung aufgenommen."
      },
      {
        "question": "Kann Sophia mit einer vorhandenen Agentur arbeiten?",
        "answer": "Ja, Kamera und Bildgestaltung können als Einzelgewerk angefragt werden. Briefing, Regie, Technik, Datenübergabe und weitere Zuständigkeiten werden vor dem Dreh abgestimmt."
      }
    ],
  },

  bonn: {
    seoTitle: "Videoproduktion in Bonn | Interviews & Kultur",
    seoDescription: "Interviews, Kulturfilm und Kameraaufträge in Bonn mit Sophia Ramahi aus Düsseldorf. Gesprächsorte, Drehzeiten und gewünschte Filmfassungen planen.",
    heroLead: "Für Interviews und Kulturprojekte in Bonn werden Aufnahmeorte, Personen und die spätere Filmnutzung gemeinsam vorbereitet.",
    sectionTitle: "Aussagen und ergänzende Bilder verbinden",
    intro: [
      "Ein Interviewfilm in Bonn kann die Stimme einer Person mit Aufnahmen ihrer Arbeit oder des Projektortes verbinden. Dafür werden Gesprächsfragen, Motive und Zeiten mit den Beteiligten abgestimmt. Raum und Umgebung müssen eine verständliche Tonaufnahme ermöglichen.",
      "Bei Kulturveranstaltungen bestimmt der Ablauf, welche Momente aufgenommen werden können. Hauptfilm, längere Dokumentation und kurze Fassungen brauchen ein benanntes Ziel. Anreise und mögliche weitere Vor-Ort-Termine werden ab Düsseldorf für den tatsächlichen Plan kalkuliert."
    ],
    faq: [
      {
        "question": "Wie wird ein Interview mit mehreren Personen geplant?",
        "answer": "Personen, Gesprächsorte und Zeitfenster werden im Briefing gesammelt. Ob nacheinander oder parallel aufgenommen werden soll, beeinflusst Kamera- und Tonbesetzung sowie Aufbau."
      },
      {
        "question": "Wie werden Reise und zusätzliche Termine behandelt?",
        "answer": "Anfahrt, Techniktransport, gegebenenfalls Übernachtung und gesonderte Besichtigungen werden vor der Beauftragung vereinbart. Entscheidend sind Location und tatsächlicher Ablauf."
      }
    ],
  },

  solingen: {
    seoTitle: "Imagefilm & Videodreh in Solingen | Sophia Ramahi",
    seoDescription: "Imagefilm, Interviewporträt und Kameraarbeit in Solingen mit Sophia Ramahi aus Düsseldorf. Menschen, Abläufe, Motive und Filmnutzung konkret planen.",
    heroLead: "Für einen Imagefilm oder ein Interviewporträt in Solingen werden Menschen und ihre Arbeit zum Ausgangspunkt des Films.",
    sectionTitle: "Arbeit durch konkrete Situationen zeigen",
    intro: [
      "Ein Unternehmensporträt in Solingen kann Interviews mit Aufnahmen von Arbeitsabläufen verbinden. Welche Tätigkeit verständlich werden soll, bestimmt Fragen und Motive. Dafür braucht es freigegebene Aufnahmebereiche, verfügbare Personen und passende Zeitfenster.",
      "Sophia plant den Auftrag von Düsseldorf aus. Kamera, Originalton, Schnitt und gewünschte Fassungen werden im Briefing benannt. Ist bereits eine Produktion vorhanden, kann auch ein einzelnes Gewerk angefragt werden. Konditionen und Reise hängen vom tatsächlichen Umfang ab."
    ],
    faq: [
      {
        "question": "Was braucht ein Imagefilm-Briefing?",
        "answer": "Zielgruppe, Kernaussage, Personen, Drehorte, Nutzung und gewünschte Fassungen. Fotos, Beispielmaterial und eine Ansprechperson vor Ort helfen, Aufwand und Vorbereitung einzugrenzen."
      },
      {
        "question": "Kann im laufenden Betrieb gedreht werden?",
        "answer": "Drehzeiten, Aufbau und Motive werden mit den Verantwortlichen abgestimmt. Welche Aufnahmen parallel zum Betrieb möglich sind und wo Einschränkungen bestehen, wird für den konkreten Ort geprüft."
      }
    ],
  },
};
