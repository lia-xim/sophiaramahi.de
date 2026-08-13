/* Gemeinsame Daten für Kontaktformular und /api/kontakt — die Themenliste
   ist die einzige Wahrheit: Das Formular rendert sie, der Server validiert
   gegen exakt dieselben Werte. */

export const contactTopics = [
  "Videoproduktion",
  "Kamera oder Ton",
  "Postproduktion",
  "VJ oder Projection Mapping",
  "Etwas anderes",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

export const contactLimits = {
  name: { min: 1, max: 120 },
  email: { max: 200 },
  message: { min: 20, max: 5000 },
} as const;
