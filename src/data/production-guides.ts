import type { Article } from "./site";

/** Originale Planungshilfen; Beispiele beschreiben keine Kundenproduktion. */
export const productionGuides: Article[] = [
  {
    slug: "eventfilm-oder-konzertmitschnitt",
    title: "Eventfilm, Aftermovie oder Konzertmitschnitt?",
    excerpt: "Highlights, Festival-Aftermovie oder durchgehende Konzertaufnahme: Filmziel, Kameraabdeckung, Ton und Lieferumfang vor der Anfrage unterscheiden.",
    image: "/media/spektra-buehne-02.jpg",
    imageAlt: "Live-Musik vor projizierten Bühnenflächen beim Spektra Festival",
    publishedAt: "2026-10-10",
    sections: [
      { title: "Soll der Film die Veranstaltung zeigen oder den Auftritt bewahren?", copy: [
        "Ein Eventfilm verdichtet eine Veranstaltung. Ein Konzertmitschnitt hält eine Aufführung über den vereinbarten Zeitraum durchgehend fest. Das klingt nach einer Frage der Filmlänge, verändert aber schon die Aufnahmeplanung: Für Highlights lassen sich verschiedene Programmpunkte sammeln; bei einem Mitschnitt muss die Aufführung jederzeit abgedeckt sein.",
        "Ein Aftermovie ist eine mögliche Form des Eventfilms. Für ein Festival kann er Bühne, Publikum, Gelände und Atmosphäre miteinander verbinden. Wer dagegen einen einzelnen Song vollständig veröffentlichen möchte, braucht dafür einen gesonderten Aufnahme- und Tonplan. Schreiben Sie dieses Ziel ausdrücklich ins Briefing."
      ] },
      { title: "Eine Formatmatrix für die erste Entscheidung", copy: [
        "Die folgende Matrix ist eine eigene Planungshilfe. Die Varianten sind keine Pakete mit festem Preis oder garantierter Besetzung. Sie zeigen, welche Fragen Sie bei einer Anfrage unterschiedlich beantworten müssen."
      ], table: { caption: "Formatvergleich nach Aufnahmeaufgabe", columns: ["Format", "Was wird erhalten?", "Vor dem Auftrag klären"], rows: [
        ["Event-Highlightfilm", "Ausgewählte Momente und ein verdichteter Ablauf", "Welche Programmpunkte müssen im Film vorkommen?"],
        ["Festival-Aftermovie", "Eindruck des Festivals mit Bühne, Publikum und Umgebung", "Welche Bühnen, Zeiten und Zugänge gehören zum Dreh?"],
        ["Ein Song als Mitschnitt", "Eine konkrete Aufführung von Anfang bis Ende", "Wie werden Bildabdeckung und nutzbarer Live-Ton gesichert?"],
        ["Durchgehender Konzertmitschnitt", "Der vereinbarte Auftritt einschließlich Übergängen", "Welche Kamera-, Ton- und Personalaufgaben laufen gleichzeitig?"]
      ] }, links: [{ label: "Formatmatrix als CSV herunterladen", href: "/downloads/eventfilm-formatvergleich.csv" }] },
      { title: "Was sich für Kamera und Ton ändert", copy: [
        "Bei einem Highlightfilm kann eine Kamera zwischen Motiven wechseln, sofern der Ablauf das zulässt. Für eine durchgehende Aufnahme muss dagegen geklärt sein, welches Bild während eines Positionswechsels verfügbar bleibt. Zusätzliche Perspektiven bedeuten weitere Aufnahmequellen, Sichtung und Abstimmung; eine bestimmte Kamerazahl lässt sich aus der gewünschten Filmlänge allein nicht ableiten.",
        "Auch beim Ton unterscheiden sich die Aufgaben. Musik für eine Montage ersetzt keine Aufnahme der tatsächlichen Performance. Eine Mischpultsumme, einzelne Instrumentenspuren und Raum- oder Publikumsaufnahmen liefern unterschiedliche Informationen. Welche Quellen vorhanden und für den Film brauchbar sind, wird mit der Tontechnik geprüft."
      ], links: [{ label: "Tonquellen für Veranstaltungen vorbereiten", href: "/journal/warum-ton-beim-eventfilm-entscheidet/" }] },
      { title: "Eine Hauptfassung und weitere Ausgaben benennen", copy: [
        "Ein langer Mitschnitt, einzelne Songs, ein kurzer Trailer und Hochformat-Ausschnitte sind verschiedene Schnittaufgaben. Nennen Sie für jede gewünschte Fassung Zweck, ungefähre Länge und Veröffentlichung. Wenn nur einzelne Ausschnitte gebraucht werden, muss nicht automatisch eine vollständige Langfassung fertiggestellt werden.",
        "Klären Sie außerdem, wer Inhalte und Musik freigibt, welche Personen zustimmen müssen und wer das Feedback bündelt. Diese Fragen gehören früh in die Abstimmung, weil ein fertig geschnittener Film eine fehlende Freigabe nicht nachträglich löst."
      ] },
      { title: "So formulieren Sie eine prüfbare Anfrage", copy: [
        "Hilfreich sind Datum, Location, Programm, gewünschtes Format und die Momente, die vollständig erhalten bleiben müssen. Ergänzen Sie vorhandene Technik, Ansprechpartner für Ton und Bühne sowie die geplante Nutzung. So lässt sich prüfen, ob ein kompakter Dreh ausreicht oder ein zusätzliches Team benötigt wird.",
        "Sophias Eventfilm-Seite beschreibt den Einstieg für Veranstaltungsfilme. Für eine durchgehende Konzertaufzeichnung wird die konkrete Machbarkeit gesondert geprüft."
      ], links: [{ label: "Eventfilm und Festivalfilm anfragen", href: "/videografie/eventfilm/" }] }
    ],
    related: [{ label: "Eventfilm-Kosten und Angebotsumfang", href: "/journal/was-einen-eventfilm-teuer-macht/" }, { label: "Originalton für Interviews und Drehs", href: "/videografie/tonaufnahme/" }]
  },
  {
    slug: "imagefilm-kosten-angebotsvergleich",
    title: "Imagefilm-Kosten: Umfang und Angebote vergleichen",
    excerpt: "Was beeinflusst Imagefilm-Kosten? Konzept, Interviews, Drehorte, Schnitt und Fassungen mit drei Umfangsmodellen und einer Angebotsvorlage vergleichen.",
    image: "/media/journal-01.jpg",
    imageAlt: "Motiv aus der Videoproduktion als Themenbild zum Imagefilm",
    publishedAt: "2026-10-10",
    sections: [
      { title: "Ein belastbarer Preis braucht einen beschriebenen Film", copy: [
        "Die Kosten eines Imagefilms hängen davon ab, welche Aussagen aufgenommen werden, an welchen Orten gedreht wird und welche Fassungen entstehen sollen. Eine Minutenangabe reicht dafür nicht. Zwei Filme gleicher Länge können einen Interviewtermin oder mehrere Drehs mit unterschiedlichen Personen erfordern.",
        "Für eine erste Kalkulation helfen eine klare Aufgabe und ein grober Produktionsrahmen: Wer soll den Film sehen, was soll verständlich werden, welche Personen und Abläufe können gezeigt werden? Sophia kalkuliert den vereinbarten Umfang individuell. Die Beispiele in diesem Artikel sind Planungsszenarien ohne Eurobeträge, keine Preisangebote."
      ], links: [{ label: "Aussagen mit der Imagefilm-Konzeptvorlage vorbereiten", href: "/journal/imagefilm-interview-vorbereiten/" }] },
      { title: "Drei Umfangsmodelle statt eines Preises pro Filmminute", copy: [
        "Die Modelle unterscheiden Aufnahme- und Bearbeitungsaufgaben. Ein größerer Umfang ist nicht automatisch das bessere Konzept: Wenn ein Gespräch die Aufgabe verständlich beantwortet, können zusätzliche Drehorte den Film unnötig aufblähen."
      ], table: { caption: "Eigene Beispielszenarien für den Angebotsvergleich", columns: ["Planungsszenario", "Aufnahmeaufgabe", "Zusätzlich abzustimmen"], rows: [
        ["Kompaktes Interviewporträt", "Eine Person, ein Gesprächsort, ergänzende Arbeitsbilder am selben Ort", "Aufbau, Gesprächszeit, Motive und eine Hauptfassung"],
        ["Porträt mit mehreren Perspektiven", "Mehrere Gesprächspartner und unterschiedliche Arbeitsbereiche", "Wechselzeiten, Raumprüfung, Freigaben und Auswahl der Aussagen"],
        ["Film mit mehreren Ausgaben", "Aufnahmen für Hauptfilm und unterschiedlich genutzte Kurzfassungen", "Zusätzliche Dramaturgien, Bildausschnitte, Texte und separate Abnahmen"]
      ] } },
      { title: "Diese Kostenblöcke sollten im Angebot erkennbar sein", copy: [
        "Vorbereitung umfasst etwa Konzeptabstimmung, Interviewfragen, Motivplanung und Organisation. Beim Dreh zählen Aufnahmezeit, Aufbau und Ortswechsel sowie die vereinbarten Kamera-, Licht- und Tonaufgaben. Reise, zusätzliche Crew oder gemietete Technik werden projektbezogen geklärt.",
        "In der Postproduktion werden Aussagen gesichtet, eine Erzählung aufgebaut und Arbeitsbilder zugeordnet. Farb- und Tonbearbeitung, Grafik, Musik, Untertitel und Exporte gehören nur in dem Umfang dazu, der vereinbart wurde. Fragen Sie nach, wenn ein Angebot lediglich „Schnitt inklusive“ nennt: Welche Bearbeitung und wie viele fertige Fassungen sind damit gemeint?"
      ] },
      { title: "Warum Kosten pro Minute und Preisrechner schnell täuschen", copy: [
        "Eine zusätzliche Filmminute kann aus bereits ausgewähltem Material entstehen oder neue Aufnahmen verlangen. Der Unterschied liegt in der Arbeit, nicht in der Laufzeit. Auch ein kurzer Film braucht ein verständliches Konzept, brauchbaren Ton und eine Freigabe.",
        "Ein Preisrechner wäre nur dann hilfreich, wenn seine Eingaben diese Aufgaben abbilden und seine Werte aus einer passenden Kalkulation stammen. Ohne diesen Zusammenhang wäre der angezeigte Betrag eine Scheingenauigkeit. Für den Angebotsvergleich ist eine ausgefüllte Umfangsmatrix deshalb der bessere erste Schritt."
      ] },
      { title: "Angebote mit derselben Vorlage vergleichen", copy: [
        "Tragen Sie in die leere CSV zuerst Ihre Anforderungen ein. Übernehmen Sie anschließend die tatsächlich angebotenen Leistungen in die beiden Vergleichsspalten. Ein leeres Feld bedeutet offen; es bedeutet nicht kostenlos oder automatisch enthalten.",
        "Prüfen Sie insbesondere Korrekturrunden, zusätzliche Fassungen, Freigabewege und Nutzungsbedingungen. Eine Änderung der Kernaussage nach dem Rohschnitt ist etwas anderes als die Korrektur eines Namens. Wer das Feedback gesammelt und mit Bezug auf eine bestimmte Filmfassung liefert, macht den Änderungsumfang nachvollziehbar."
      ], links: [{ label: "Imagefilm-Angebotsvergleich als ausfüllbare CSV", href: "/downloads/imagefilm-angebotsvergleich.csv" }] },
      { title: "Was für die erste Anfrage genügt", copy: [
        "Nennen Sie Thema, Zielgruppe, Personen, Drehorte, Zeitraum und geplante Veröffentlichungen. Ein vorhandener Budgetrahmen hilft bei der Auswahl einer passenden Umsetzung. Markieren Sie offene Punkte ausdrücklich; ein noch nicht verfügbarer Gesprächspartner oder ungeklärter Betriebszugang kann die Planung stärker verändern als die Filmlänge.",
        "Für ein Interviewporträt oder einen Imagefilm aus Düsseldorf können Sie diese Angaben direkt an Sophia schicken. Das konkrete Angebot folgt aus der Abstimmung von Inhalt, Aufnahme und Auslieferung."
      ], links: [{ label: "Imagefilm mit Interviews besprechen", href: "/videografie/imagefilm/" }] }
    ],
    related: [{ label: "Imagefilm-Konzept und Interviewfragen", href: "/journal/imagefilm-interview-vorbereiten/" }, { label: "Videoschnitt-Kosten einordnen", href: "/journal/videoschnitt-kosten-materialumfang/" }]
  },
  {
    slug: "videoschnitt-kosten-materialumfang",
    title: "Videoschnitt-Kosten: Material, Fassungen und Feedback",
    excerpt: "Videoschnitt-Kosten anhand von Rohmaterial, Auswahl, Bearbeitung und Fassungen einschätzen. Mit eigener Umfangsmatrix für einen vergleichbaren Auftrag.",
    image: "/media/set-quer-01.jpg",
    imageAlt: "Kamera am Set als Themenbild zur Materialbearbeitung",
    publishedAt: "2026-10-10",
    sections: [
      { title: "Die fertige Länge beschreibt nur einen Teil des Auftrags", copy: [
        "Was Videoschnitt kostet, hängt auch davon ab, wie viel Material gesichtet werden muss und wie klar die gewünschte Geschichte bereits ist. Ein kurzer Trailer aus einer freigegebenen Langfassung verlangt eine andere Auswahl als ein kurzer Film aus unsortierten Aufnahmen mehrerer Drehtage.",
        "Für eine Einschätzung sind Materialumfang, technische Ausgangslage, Ziel und Fassungen hilfreicher als die Dateigröße allein. Sophia prüft vorhandenes Material und den gewünschten Bearbeitungsumfang. Dieser Ratgeber enthält keine festen Stunden- oder Paketpreise."
      ] },
      { title: "Sichtung und Auswahl getrennt vom Feinschnitt beschreiben", copy: [
        "Ist bereits entschieden, welche Aussagen oder Takes verwendet werden sollen, kann der Auftrag darauf aufbauen. Muss die Aussage erst im Rohmaterial gefunden werden, gehört diese redaktionelle Auswahl zur Arbeit. Eine Liste mit gewünschten Clips hilft nur dann, wenn Dateien und Positionen eindeutig benannt sind.",
        "Für mehrere Kameras, separat aufgenommenen Ton oder unterschiedliche Aufnahmeeinstellungen kommen Zuordnung und technische Prüfung hinzu. Vorhandene Schnittprojekte können nützlich sein; ihre Übernahme hängt davon ab, ob Medien, Projektdateien und benötigte Bestandteile vollständig und kompatibel sind."
      ], links: [{ label: "Originaldateien und Schnittprojekte zur Übergabe vorbereiten", href: "/journal/videoschnitt-material-vorbereiten/" }] },
      { title: "Eine Umfangsmatrix für die Kalkulation", copy: [
        "Die Matrix ist eine selbst erstellte Briefing-Hilfe. Tragen Sie Mengen ein, soweit sie bekannt sind, und beschreiben Sie die gewünschte Bearbeitung. Daraus entsteht noch kein automatisch berechneter Preis."
      ], table: { caption: "Aufgaben, die den Schnittumfang verändern", columns: ["Angabe", "Was Sie eintragen", "Warum sie hilft"], rows: [
        ["Rohmaterial", "Ungefähre Laufzeit, Drehtage und Aufnahmequellen", "Sichtung und Zuordnung einschätzen"],
        ["Auswahl", "Vorhandene Clip- oder Aussagenliste", "Redaktionelle Arbeit abgrenzen"],
        ["Bearbeitung", "Ton, Farbe, Grafiken, Musik und Untertitel", "Zusätzliche Aufgaben benennen"],
        ["Fassungen", "Zweck, Länge, Bildformat und Sprache je Ausgabe", "Eigene Schnitte von reinen Exporten unterscheiden"],
        ["Feedback", "Freigabeperson und vereinbarte Korrekturrunden", "Änderungen und Abnahme planen"]
      ] }, links: [{ label: "Videoschnitt-Umfang als CSV ausfüllen", href: "/downloads/videoschnitt-umfang.csv" }] },
      { title: "Eine weitere Datei kann eine weitere Schnittfassung sein", copy: [
        "Ein Export mit anderer technischer Einstellung ist etwas anderes als eine inhaltlich gekürzte Fassung. Für einen Hochformatclip können Bildausschnitte neu gesetzt und Texte umgebaut werden müssen. Eine andere Sprache kann neue Untertitel und zusätzliche Prüfung erfordern.",
        "Benennen Sie jede Ausgabe separat. So ist vor dem Auftrag erkennbar, welche Fassungen gemeinsam aus demselben Schnitt entstehen und welche eigene Arbeit benötigen. Die Anforderungen der jeweiligen Veröffentlichung werden bei der Auslieferung geprüft."
      ], links: [{ label: "Untertitel und Ausgabevarianten planen", href: "/journal/video-untertitel-srt-einbrennen/" }] },
      { title: "Feedback und zusätzliche Wünsche nachvollziehbar halten", copy: [
        "Eine gebündelte Rückmeldung zu einer eindeutig benannten Fassung ist besser planbar als widersprüchliche Einzelkommentare. Nennen Sie Timecode, gewünschte Änderung und den Grund, wenn sich eine Aussage oder Reihenfolge ändern soll.",
        "Wird nach der Abstimmung ein neuer Drehblock ergänzt oder die Filmidee geändert, verändert sich der Auftrag. Fragen Sie deshalb vorab, wie zusätzliche Bearbeitung, weitere Fassungen und nachträgliche Änderungen behandelt werden. Die vereinbarten Grenzen gehören in das konkrete Angebot."
      ] },
      { title: "Mit welchen Angaben Sie starten können", copy: [
        "Schicken Sie eine Beschreibung von Material, gewünschtem Ergebnis und Abgabetermin. Für die erste Abstimmung ist eine Übersicht sinnvoller als ein ungefragter Upload vertraulicher Dateien. Der Übertragungsweg und der Umgang mit den Daten werden anschließend vereinbart."
      ], links: [{ label: "Videoschnitt und Postproduktion anfragen", href: "/postproduktion/" }] }
    ],
    related: [{ label: "Materialübergabe für einen Schnittauftrag", href: "/journal/videoschnitt-material-vorbereiten/" }, { label: "Imagefilm-Angebote vergleichen", href: "/journal/imagefilm-kosten-angebotsvergleich/" }]
  },
  {
    slug: "vj-oder-projection-mapping",
    title: "VJ, Live Visuals oder Projection Mapping?",
    excerpt: "Live gemischte Bilder und flächenbezogene Projektionen unterscheiden: zwei eigene Planungsschemata und eine Entscheidungsmatrix für Ihre Veranstaltung.",
    image: "/media/spektra-detail-03.jpg",
    imageAlt: "Detail einer geometrischen Projektion beim Spektra Festival",
    publishedAt: "2026-10-10",
    sections: [
      { title: "Live Visuals beschreiben den Betrieb, Mapping die Fläche", copy: [
        "Ein VJ gestaltet und mischt bewegte Bilder während einer Veranstaltung. Projection Mapping richtet Bildinhalte auf eine bestimmte reale Fläche aus. Beide Aufgaben können im selben Projekt vorkommen: Ein live gespieltes Bild kann beispielsweise auf mehrere gestaltete Bühnenflächen verteilt werden.",
        "Für die Anfrage ist deshalb hilfreich, zwei Fragen getrennt zu beantworten: Wie sollen die Bilder über die Show hinweg wechseln? Und auf welchen Flächen sollen sie sichtbar sein? Erst daraus ergibt sich der passende kreative und technische Umfang."
      ] },
      { title: "Zwei eigene Schemata für unterschiedliche Aufgaben", copy: [
        "Die Schemata sind vereinfachte Planungsskizzen, keine dokumentierten Geräteaufbauten. Sie zeigen die Abhängigkeiten, die vor einer Show geklärt werden müssen. Eine konkrete Signalverbindung oder Ausstattung wird erst mit der Veranstaltungstechnik festgelegt."
      ], example: { label: "Planungsschemata – keine technische Anschlussanweisung", code: "LIVE VISUALS\nMusik / Showablauf → Bildmaterial + Live-Bedienung\n                  → vereinbarter Bildausgang → Screen\n\nPROJECTION MAPPING\nFlächenmaße + Blickpositionen → angepasste Inhalte\n                             → Bildzuordnung → Projektion auf Fläche\n\nKOMBINATION\nLive-Bedienung → flächenbezogene Bildzuordnung → mehrere Bühnenflächen" } },
      { title: "Welche Angaben führen zum passenden Format?", copy: [
        "Für ein VJ-Set stehen Musik, Setstruktur, Bildsprache und Live-Abstimmung im Vordergrund. Für Mapping müssen zusätzlich Geometrie, Betrachtung und Projektorposition geklärt werden. Eine normale rechteckige Leinwand verlangt andere Inhaltsvorbereitung als eine gegliederte Bühnenkonstruktion."
      ], table: { caption: "Entscheidungsmatrix für Bühne und Ausstellung", columns: ["Ihre Aufgabe", "Passender Einstieg", "Entscheidende Unterlagen"], rows: [
        ["Bilder während eines Konzerts live verändern", "VJ / Live Visuals", "Musik, Ablauf, Referenzen und Screen-Daten"],
        ["Inhalte auf ein Objekt oder Bühnenbild anpassen", "Projection Mapping", "Maße, Fotos, Betrachtungspositionen und Lichtbedingungen"],
        ["Flächenbezogene Bilder live spielen", "Beide Aufgaben gemeinsam planen", "Flächenplan, Showstruktur und technischer Übergabepunkt"],
        ["Vorbereitete Bildschleife in einer Ausstellung", "Wiedergabe und Flächenbezug klären", "Betriebszeiten, Ort, Inhalte und Betreuung"]
      ] } },
      { title: "Inhalt, Bildzuordnung und Geräte unterscheiden", copy: [
        "Die eingesetzte Software ordnet Inhalte den vereinbarten Ausgaben zu. Resolume beschreibt diese Aufgabe im Advanced Output und die Anpassung an Flächen in der Output Transformation. Das erklärt den technischen Unterschied; es legt keine Software- oder Gerätezusage für Ihren Auftrag fest.",
        "Im Briefing sollten Content-Erstellung, Live-Bedienung, Projektoren oder Screens, Signaltechnik und Aufbauverantwortung erkennbar sein. Eine Gestaltung allein umfasst nicht automatisch alle benötigten Geräte oder die Betreuung über die gesamte Veranstaltung."
      ] },
      { title: "Vom Projektbeispiel zum eigenen Briefing", copy: [
        "Beim Spektra Festival sind Sophias visuelle Gestaltung, Live Visuals sowie Aufbau und technische Abstimmung dokumentiert. Die Projektbilder zeigen sowohl die Einrichtung als auch die Bühnenwirkung. Sie geben einen belegten Kontext für diese Zusammenarbeit, ersetzen aber keine Ortsprüfung für eine neue Fläche.",
        "Wenn die Richtung feststeht, bereiten Sie zuerst das kreative Briefing vor und klären anschließend die technische Übergabe mit der Location. Für Mapping helfen Fotos und Maße; für ein VJ-Set zusätzlich Setzeiten und die gewünschte musikalische Abstimmung."
      ], links: [{ label: "Sophias Beitrag beim Spektra Festival", href: "/projekte/spektra-festival/" }, { label: "Kreatives VJ-Briefing", href: "/journal/live-visuals-vj-briefing/" }, { label: "Technischen Rider vorbereiten", href: "/journal/live-visuals-technical-rider/" }] }
    ],
    sources: [{ label: "Resolume: Advanced Output", href: "https://resolume.com/support/advanced-output" }, { label: "Resolume: Output Transformation", href: "https://resolume.com/support/output-transformation" }],
    sourcesContext: "Die Herstellerdokumentation erläutert Bildausgaben und Flächenanpassung. Schemata und Entscheidungsmatrix sind eigene Planungshilfen; der konkrete Aufbau wird projektbezogen geprüft.",
    related: [{ label: "Live Visuals und Mapping anfragen", href: "/vj-mapping/" }, { label: "Flächen für Projection Mapping vorbereiten", href: "/journal/projection-mapping-vorbereitung/" }]
  },
  {
    slug: "live-visuals-technical-rider",
    title: "Live-Visuals-Rider: Screens, Signale und Zuständigkeit",
    excerpt: "Einen technischen Rider für Live Visuals vorbereiten: Screen-Daten, Signalübergabe, Zuständigkeiten und Probe mit einer leeren CSV-Vorlage abstimmen.",
    image: "/media/spektra-aufbau.jpg",
    imageAlt: "Aufbau der Projektionstechnik beim Spektra Festival",
    publishedAt: "2026-10-10",
    sections: [
      { title: "Der Rider beschreibt die technische Übergabe", copy: [
        "Ein Technical Rider hält fest, wie die vorbereiteten Visuals an der Veranstaltung ausgegeben werden sollen und wer welchen Teil des Aufbaus verantwortet. Musikreferenzen und die gewünschte Bildsprache gehören ins kreative Briefing; Screen-Daten, Anschlüsse und Probe gehören in die technische Abstimmung.",
        "Die Vorlage hier ist ein eigenes leeres Arbeitsblatt, kein Standardvertrag und keine feste Ausstattungsliste von Sophia. Offene Angaben werden als offen markiert und mit der zuständigen Technik geklärt. Ein ausgefülltes Blatt braucht vor dem Einsatz eine gemeinsame Prüfung."
      ] },
      { title: "Jede Bildfläche eindeutig beschreiben", copy: [
        "Vergeben Sie für jede Fläche eine erkennbare Bezeichnung und ergänzen Sie Position, Maße beziehungsweise Pixelraster sowie den gewünschten Inhalt. Bei LED-Flächen sind Informationen vom verantwortlichen Screen-Team nötig; bei Projektionen auch die Geometrie und die geplante Projektorposition.",
        "Ein Foto oder Plan hilft, wenn mehrere Flächen ähnlich aussehen. Entscheidend ist, dass Content-Erstellung, Zuspielung und Veranstaltungstechnik mit denselben Bezeichnungen arbeiten. „Der große Screen“ ist ohne Plan kein eindeutiger Übergabepunkt."
      ] },
      { title: "Signalweg und Ausgabeformat gemeinsam bestätigen", copy: [
        "Notieren Sie, wer das Bildsignal liefert und wer es am vereinbarten Übergabepunkt übernimmt. Anschluss, Auflösung und Bildfrequenz müssen zu beiden Seiten und zu den dazwischenliegenden Geräten passen. Ein passender Stecker allein bestätigt diese Kompatibilität nicht.",
        "Resolume beschreibt Bildausgänge als getrennt zugeordnete Screens. Vorbereitete virtuelle Screens können die Planung unterstützen; die Erkennung und korrekte Zuordnung der realen Ausgaben müssen beim Aufbau geprüft werden. Diese Herstellerfunktion ist ein technisches Beispiel, keine vorausgesetzte Software für jeden Auftrag."
      ] },
      { title: "Die eigene Rider-Vorlage ausfüllen", copy: [
        "Die CSV enthält pro Fläche dieselben Felder sowie einen gemeinsamen Block für Termine und Kontakte. Kopieren Sie die Flächenzeilen für zusätzliche Ausgaben. Wenn ein Wert noch nicht bekannt ist, benennen Sie die Person, die ihn bestätigen soll."
      ], table: { caption: "Pflichtfragen für eine nutzbare technische Abstimmung", columns: ["Bereich", "Angabe", "Prüfung"], rows: [
        ["Fläche", "Bezeichnung, Position, Maße / Pixelraster", "Mit Plan oder Foto eindeutig zuordnen"],
        ["Übergabe", "Signalgeber, Empfänger und Übergabepunkt", "Mit den verantwortlichen Technikpersonen bestätigen"],
        ["Ausgabe", "Anschluss, Auflösung und Bildfrequenz", "Den vollständigen Signalweg gemeinsam testen"],
        ["Betrieb", "Aufbau, Probe, Start und Ende", "Zugang und Betreuung für diese Zeiten vereinbaren"],
        ["Änderung", "Versionsdatum und offene Punkte", "Eine bestätigte Fassung an alle Beteiligten geben"]
      ] }, links: [{ label: "Leere Live-Visuals-Rider-Vorlage als CSV", href: "/downloads/live-visuals-rider.csv" }] },
      { title: "Die Probe mit dem tatsächlich geplanten Aufbau durchführen", copy: [
        "Prüfen Sie die Zuordnung der Flächen, einen repräsentativen Inhalt und die Sicht aus den vorgesehenen Publikumspositionen. Für Mapping gehören Ausrichtung und Lichtbedingungen dazu. Veränderte Positionen oder Flächenmaße nach der Probe können eine neue Anpassung nötig machen.",
        "Halten Sie fest, welche Punkte freigegeben sind und wer während der Show für Änderungen erreichbar bleibt. Ein Fallback wird für den konkreten Ablauf vereinbart; ein bestimmtes Ersatzgerät oder automatischer Ausfallschutz ist mit der Vorlage nicht zugesagt."
      ] },
      { title: "Wann das Blatt in die Anfrage gehört", copy: [
        "Für den ersten Kontakt reichen vorhandene Screen-Unterlagen und der technische Ansprechpartner. Die vollständige Rider-Fassung entsteht nach der Abstimmung von Umfang, Technik und Live-Betrieb. Bei Sophia können Live Visuals und Projection Mapping mit diesem Projektkontext angefragt werden."
      ], links: [{ label: "VJ und Live Visuals besprechen", href: "/vj-mapping/live-visuals/" }, { label: "Projektflächen für Mapping klären", href: "/vj-mapping/projection-mapping/" }] }
    ],
    sources: [{ label: "Resolume: Screens und Bildausgaben", href: "https://resolume.com/support/screens" }, { label: "Resolume: Einrichtung externer Bildausgaben", href: "https://resolume.com/support/en/output-setup" }],
    sourcesContext: "Die Herstellerquellen beschreiben die Erkennung und Zuordnung von Bildausgaben. Die CSV und die Fragen zur Zuständigkeit sind eigene Planungshilfen und müssen für die konkrete Veranstaltung bestätigt werden.",
    related: [{ label: "VJ-Briefing für Musik und Showablauf", href: "/journal/live-visuals-vj-briefing/" }, { label: "Live Visuals und Projection Mapping unterscheiden", href: "/journal/vj-oder-projection-mapping/" }]
  }
];
