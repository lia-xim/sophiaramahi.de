/* Lokale Inhalte der Leistungs-Stadtseiten.
   Jede Kombination aus Leistung und Stadt bekommt eigene, von Hand
   geschriebene Texte — kein Templating, keine austauschbaren Bausteine.
   Fehlt ein Eintrag, fällt die Seite auf die generischen Texte zurück. */

export type LocalPlace = { title: string; copy: string };
export type LocalFaq = { question: string; answer: string };

export type LocalDetail = {
  /** Ein Satz unter der H1 — benennt Leistung und Stadt konkret. */
  lead: string;
  /** Individueller Seitentitel, Keyword vorn, Muster bewusst variiert. */
  seoTitle: string;
  /** Individuelle Meta-Description, 140–160 Zeichen. */
  seoDescription: string;
  /** Zwei Absätze: was diese Leistung in dieser Stadt bedeutet. */
  intro: string[];
  /** H2 der „Vor Ort“-Sektion. */
  placesTitle: string;
  /** Konkrete Orte, Anlässe und Bedingungen der Stadt. */
  places: LocalPlace[];
  /** Stadt-spezifische Fragen — ersetzen die generischen Standort-FAQs. */
  faq: LocalFaq[];
};

/** Alle lokalisierten Leistungen einer Stadt, key = Service-Slug. */
export type CityCopy = Record<string, LocalDetail>;
