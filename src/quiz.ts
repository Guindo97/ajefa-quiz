export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

// Mise à jour hebdomadaire du Quiz du vendredi.
// Pour le prochain vendredi, il suffit de remplacer les informations ci-dessous.

export const QUIZ_ID = 'quiz-vendredi-2026-09-25';

export const QUIZ_TITLE = "Quiz du vendredi sur l'immigration";

export const QUIZ_TOPIC = 'immigration';

export const questions: Question[] = [
  {
    question:
      'Pour conserver son statut, un résident permanent doit avoir été physiquement présent au Canada pendant au moins combien de jours ?',
    answers: [
      '365 jours au cours de chaque période de 12 mois',
      '730 jours au cours des 5 dernières années',
      '1 095 jours au cours des 5 dernières années',
      '183 jours par année civile',
    ],
    correct: 1,
    explanation:
      "L'obligation de résidence est de 730 jours (2 ans) sur 5 ans. Ces jours n'ont pas besoin d'être consécutifs. Certains jours passés à l'étranger peuvent compter, par exemple lorsqu'on accompagne un conjoint citoyen canadien. Attention à ne pas confondre avec les 1 095 jours exigés pour la citoyenneté.",
  },

  {
    question:
      'Si ma carte de résident permanent est expirée, je perds automatiquement mon statut de résident permanent.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      "La carte n'est qu'un document de voyage et de preuve de statut. Le statut de RP se perd seulement par une décision officielle, par exemple en cas de non-respect de l'obligation de résidence, ou par une renonciation volontaire. Par contre, une carte valide ou un titre de voyage pour résident permanent (TVRP) est nécessaire pour revenir au Canada par avion.",
  },

  {
    question:
      "Un travailleur étranger a demandé la prolongation de son permis de travail avant son expiration. Son permis expire pendant le traitement de sa demande. Quelle est sa situation ?",
    answers: [
      'Il doit quitter le Canada immédiatement',
      'Il peut rester au Canada, mais doit cesser de travailler',
      "Il peut rester au Canada et continuer à travailler aux mêmes conditions jusqu'à la décision, tant qu'il ne quitte pas le pays",
      'Il doit demander un visa de visiteur pour rester légalement',
    ],
    correct: 2,
    explanation:
      "C'est le statut maintenu. Si la demande de prolongation est faite avant l'expiration du permis, la personne conserve ses conditions tant qu'elle reste au Canada. Si elle sort du pays, elle perd ce statut maintenu.",
  },

  {
    question:
      'Combien de jours de présence physique au Canada faut-il avoir cumulés au cours des 5 dernières années pour demander la citoyenneté canadienne ?',
    answers: [
      '730 jours',
      '1 095 jours',
      '1 460 jours',
      '1 825 jours',
    ],
    correct: 1,
    explanation:
      "Il faut au moins 1 095 jours, soit 3 ans, au cours des 5 années précédant la demande. Les jours passés au Canada comme résident temporaire avant la résidence permanente peuvent compter en partie, pour une demi-journée chacun et jusqu'à un maximum de 365 jours. Il est toutefois conseillé de prévoir une marge au-delà du minimum. Le calculateur de présence physique d'IRCC permet de vérifier son admissibilité.",
  },

  {
    question:
      "Toute personne qui demande la citoyenneté canadienne doit passer l'examen de citoyenneté, peu importe son âge.",
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      "Seules les personnes âgées de 18 à 54 ans doivent passer l'examen de connaissances et prouver leurs compétences en français ou en anglais.",
  },
];