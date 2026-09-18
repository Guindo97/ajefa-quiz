export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

// Mise à jour hebdomadaire du Quiz du vendredi.
// Pour le prochain vendredi, il suffit de remplacer les informations ci-dessous.

export const QUIZ_ID = 'quiz-vendredi-2026-09-18';

export const QUIZ_TITLE = 'Quiz sur la violence familiale et la protection de l’enfant';

export const QUIZ_TOPIC = 'violence familiale et protection de l’enfant';

export const questions: Question[] = [
  {
    question:
      "Qui a l'obligation de signaler une situation où un enfant pourrait avoir besoin de protection ?",
    answers: [
      'Seulement les enseignants et les médecins',
      "Toute personne qui a des motifs raisonnables de croire qu'un enfant a besoin de protection",
      'Seulement les parents ou les membres de la famille',
      'Seulement la police',
    ],
    correct: 1,
    explanation:
      "Toute personne qui a des motifs raisonnables et probables de croire qu'un enfant a besoin d'intervention (protection) doit en faire le signalement sans délai. Cette obligation ne concerne pas seulement les professionnels.",
  },

  {
    question:
      "Un enfant qui est témoin de violence entre ses parents peut-il être touché par la violence familiale, même s'il n'est pas directement victime de violence physique ?",
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation:
      "Un enfant peut être touché par la violence familiale même s'il n'est pas directement victime de violence physique. La loi exige que l'effet de l'exposition à la violence familiale sur un enfant soit pris en compte dans certaines décisions, notamment lors d'une demande d'ordonnance de protection.",
  },

  {
    question:
      "La violence familiale peut-elle continuer après la séparation d’un couple ?",
    answers: [
      'Non, puisqu’ils ne vivent plus ensemble',
      'Oui, la séparation ne met pas nécessairement fin à la violence familiale',
      'Seulement s’ils étaient mariés',
      'Seulement s’il y a eu des violences physiques avant la séparation',
    ],
    correct: 1,
    explanation:
      "La violence familiale peut survenir avant, pendant ou après une séparation. Certains comportements, comme les menaces, le harcèlement ou le contrôle, peuvent se poursuivre même lorsque les personnes ne vivent plus ensemble.",
  },

  {
    question:
      "Une ordonnance de non-communication vise-t-elle toujours uniquement la victime ?",
    answers: [
      'Oui',
      'Non, elle peut aussi viser d’autres personnes indiquées dans l’ordonnance',
    ],
    correct: 1,
    explanation:
      "Une ordonnance de non-communication ne vise pas nécessairement uniquement la victime. Elle peut aussi interdire ou limiter les contacts de l’accusé avec d’autres personnes, comme le conjoint ou les enfants de la victime, ou toute autre personne indiquée dans l’ordonnance.",
  },

  {
    question:
      "Une personne doit-elle être mariée pour être protégée par la loi albertaine sur la violence familiale ?",
    answers: ['Oui', 'Non'],
    correct: 1,
    explanation:
      "La loi vise différentes relations familiales et personnelles — conjoints, conjoints de fait, parents d'un enfant commun, personnes liées par le sang, le mariage ou l'adoption, et non seulement les personnes mariées.",
  },
];