export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

// Mise à jour hebdomadaire du Quiz du vendredi.
// Pour le prochain vendredi, il suffit de remplacer les informations ci-dessous.
export const QUIZ_ID = 'quiz-vendredi-2026-08-28';
export const QUIZ_TITLE = 'Quiz sur le droit du travail';
export const QUIZ_TOPIC = 'droit du travail';

export const questions: Question[] = [
  {
    question: 'Un employeur peut-il payer un employé moins que le salaire minimum simplement parce que l’employé accepte ?',
    answers: ['Oui', 'Non'],
    correct: 1,
    explanation:
      'Un employeur doit respecter le salaire minimum prévu par la loi, même si l’employé accepte de recevoir un salaire inférieur. Un accord entre l’employeur et l’employé ne permet pas de contourner les normes d’emploi.',
  },
  {
    question: "Un employeur peut harceler un employé tant qu'il n'y a pas de violence physique.",
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Le harcèlement au travail ne se limite pas à la violence physique. Certains comportements, paroles ou gestes peuvent constituer du harcèlement ou de la violence au travail.',
  },
  {
    question: 'Tous les employés ont droit à des vacances annuelles payées.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation:
      'Les employés visés par les normes d’emploi ont droit à des vacances annuelles payées. La durée minimale des vacances peut augmenter avec l’ancienneté.',
  },
  {
    question: 'Pendant un congé de maternité ou parental, l’employeur doit nécessairement continuer à verser le salaire habituel de l’employé.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Les employeurs ne sont pas tenus de verser un salaire ou des avantages sociaux pendant ce congé, sauf si le contrat de travail ou une convention collective prévoit le contraire.',
  },
  {
    question: 'Que signifie « accommodement » au travail ?',
    answers: ['Une promotion', 'Une adaptation pour répondre à un besoin particulier de l’employé', 'Une augmentation de salaire'],
    correct: 1,
    explanation:
      'L’accommodement consiste à adapter certaines conditions de travail afin de répondre à un besoin particulier de l’employé, lorsque ce besoin est lié à un motif protégé par les droits de la personne.',
  },
];
