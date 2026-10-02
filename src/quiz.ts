export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

// Mise à jour hebdomadaire du Quiz du vendredi.
// Pour le prochain vendredi, il suffit de remplacer les informations ci-dessous.

export const QUIZ_ID = 'quiz-vendredi-2026-10-02';

export const QUIZ_TITLE = 'Quiz du vendredi sur les droits de la personne';

export const QUIZ_TOPIC = 'droits de la personne';

export const questions: Question[] = [
  {
    question:
      'Quel organisme reçoit les plaintes de discrimination visées par la Loi sur les droits de la personne de l’Alberta ?',
    answers: [
      'La Cour du Banc du Roi de l’Alberta',
      'La Commission des droits de la personne de l’Alberta',
      'La Cour de justice de l’Alberta',
      'Le service de police local',
    ],
    correct: 1,
    explanation:
      'Les plaintes de discrimination visées par la Loi sur les droits de la personne de l’Alberta sont déposées auprès de la Commission des droits de la personne de l’Alberta.',
  },

  {
    question:
      'Dans quel délai faut-il déposer une plainte de discrimination auprès de la Commission des droits de la personne de l’Alberta ?',
    answers: [
      '30 jours',
      '6 mois',
      '1 an',
      '3 ans',
    ],
    correct: 2,
    explanation:
      'La Commission doit recevoir la plainte dans l’année suivant l’acte ou le traitement discriminatoire. La Loi sur les droits de la personne de l’Alberta prévoit ce délai d’un an.',
  },

  {
    question:
      'La Commission des droits de la personne de l’Alberta facture des frais pour déposer une plainte en matière de droits de la personne.',
    answers: [
      'Vrai',
      'Faux',
    ],
    correct: 1,
    explanation:
      'La Commission ne facture pas de frais pour participer au processus de plainte.',
  },

  {
    question:
      'Un propriétaire refuse de louer un logement à une personne parce qu’elle reçoit de l’aide sociale.',
    answers: [
      'C’est permis',
      'C’est interdit',
      'C’est permis si le loyer est élevé',
      'C’est permis si le propriétaire l’a indiqué dans son annonce',
    ],
    correct: 1,
    explanation:
      'La « source de revenu » est un motif protégé par la Loi sur les droits de la personne de l’Alberta. Un propriétaire ne peut pas refuser de louer à une personne en raison de sa source de revenu protégée, comme l’aide sociale.',
  },

  {
    question:
      'Un employeur peut punir ou traiter négativement un employé parce que celui-ci a déposé une plainte pour violation de ses droits de la personne.',
    answers: [
      'Vrai',
      'Faux',
    ],
    correct: 1,
    explanation:
      'Il est interdit d’exercer des représailles contre une personne parce qu’elle a déposé une plainte, tenté d’en déposer une ou participé au processus de plainte.',
  },
];