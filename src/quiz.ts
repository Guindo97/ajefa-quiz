
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-10-23';
export const QUIZ_TITLE = 'Quiz sur le droit de la famille en Alberta';
export const QUIZ_TOPIC = 'droit de la famille en Alberta';

export const questions: Question[] = [
  {
    question: 'Un divorce religieux (prononcé par exemple par un imam, un rabbin ou un prêtre) suffit pour être légalement divorcé au Canada.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: 'Au Canada, seul un tribunal peut prononcer un divorce. Un divorce religieux peut être important pour la communauté religieuse, mais il n’a aucun effet juridique. Sans jugement de divorce du tribunal, la personne reste légalement mariée et ne peut pas se remarier.',
  },
  {
    question: 'Un héritage reçu de sa propre famille pendant le mariage est toujours partagé à 50 % avec l’autre conjoint.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: 'Un héritage ou un don reçu d’une autre personne est généralement exclu du partage, pour sa valeur au moment où il a été reçu. Par contre, l’augmentation de sa valeur pendant la relation peut être partagée.',
  },
  {
    question: 'Les dettes accumulées pendant la relation peuvent aussi être prises en compte lors du partage.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation: 'Le partage ne porte pas seulement sur ce que le couple possède, mais aussi sur ce qu’il doit : prêt hypothécaire, prêts, cartes de crédit, etc.',
  },
  {
    question: 'Une pension alimentaire pour l’époux est versée automatiquement à la femme après un divorce.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: 'La pension alimentaire pour l’époux n’est ni automatique ni liée au genre. Elle dépend notamment des besoins et des moyens de chacun, de la durée de la relation et des rôles joués pendant la vie commune (par exemple, rester à la maison pour s’occuper des enfants).',
  },
  {
    question: 'En Alberta, un parent qui ne paie pas sa pension alimentaire peut se voir suspendre son permis de conduire ou son passeport.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation: 'Le Programme d’exécution des ordonnances alimentaires de l’Alberta (Maintenance Enforcement Program) peut prendre plusieurs mesures contre un parent qui ne paie pas : saisie de salaire, suspension du permis de conduire, refus ou suspension du passeport, etc.',
  },
];
