
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-10-16';
export const QUIZ_TITLE = 'Quiz sur les testaments et successions en Alberta';
export const QUIZ_TOPIC = 'testaments et successions en Alberta';

export const questions: Question[] = [
  {
    question: "Une personne peut rédiger elle-même son testament entièrement à la main et le signer, sans témoins, en Alberta.",
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation: "L’Alberta reconnaît le testament olographe, c’est-à-dire un testament entièrement écrit à la main et signé par la personne qui le fait. Aucun témoin n’est nécessaire.",
  },
  {
    question: "Une personne domiciliée en Alberta décède sans avoir fait de testament. Quelles règles s’appliquent généralement à sa succession ?",
    answers: [
      'Ses biens sont automatiquement remis au gouvernement.',
      'Sa famille peut décider librement comment partager ses biens.',
      'Les règles de la Wills and Succession Act s’appliquent.',
      'Les règles du pays d’origine de la personne s’appliquent automatiquement.',
    ],
    correct: 2,
    explanation: "Lorsqu’une personne décède sans avoir fait de testament, on dit qu’elle est décédée « intestat ». La Wills and Succession Act prévoit alors des règles précises qui déterminent qui peut hériter et dans quelle proportion.",
  },
  {
    question: "Une personne immigrée en Alberta possède un testament qu’elle a fait dans son pays d’origine. Quelle affirmation est la plus exacte ?",
    answers: [
      'Le testament est automatiquement invalide en Alberta.',
      'Le testament est automatiquement valide en Alberta.',
      'Le testament peut être reconnu en Alberta, mais il est prudent de le faire vérifier.',
      'Le testament doit obligatoirement être détruit et remplacé.',
    ],
    correct: 2,
    explanation: "La loi albertaine peut reconnaître un testament fait à l’étranger, notamment s’il respecte les règles de forme du pays où il a été fait. Toutefois, d’autres règles de l’Alberta peuvent s’appliquer, par exemple pour les biens immobiliers situés dans la province. Il est donc important de faire vérifier le testament par un juriste.",
  },
  {
    question: "Lequel des changements suivants constitue une bonne raison de revoir son testament ?",
    answers: [
      'Un mariage ou une séparation.',
      'La naissance ou l’adoption d’un enfant.',
      'L’achat ou la vente d’un bien important.',
      'Tous ces changements.',
    ],
    correct: 3,
    explanation: "Les changements dans la situation familiale ou financière peuvent avoir une incidence sur les volontés successorales. Par exemple, en Alberta, le mariage n’annule plus automatiquement un testament. Il est donc utile de revoir son testament après tout changement important.",
  },
  {
    question: "Les dettes d’une personne décédée disparaissent automatiquement au moment de son décès.",
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: "Les dettes ne disparaissent pas automatiquement. Le représentant personnel doit notamment déterminer les dettes de la succession et les régler à même les biens de celle-ci, avant de partager ce qui reste entre les héritiers.",
  },
];
