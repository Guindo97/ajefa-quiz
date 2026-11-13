
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-11-13';
export const QUIZ_TITLE = 'Quiz sur la violence familiale';
export const QUIZ_TOPIC = 'violence familiale';

export const questions: Question[] = [
  {
    question: 'Peut-on obtenir une ordonnance de protection d’urgence (OPU) contre une personne qu’on fréquente, si on ne vit pas ensemble et qu’on n’a pas d’enfant ensemble?',
    answers: [
      'Oui, toute relation amoureuse est couverte',
      'Non, mais il existe d’autres recours',
      'Oui, si la relation dure depuis plus de six mois',
      'Seulement s’il y a eu une blessure physique',
    ],
    correct: 1,
    explanation:
      'On ne peut pas obtenir d’OPU contre une personne qu’on fréquente, sauf si on vit ensemble dans une relation intime ou si on a des enfants ensemble. On peut quand même signaler la violence à la police ou demander d’autres ordonnances pour tenir cette personne à distance.',
  },
  {
    question: 'Une fois qu’une victime de violence familiale a donné à son propriétaire son préavis accompagné du certificat Safer Spaces, elle n’a plus de loyer à payer.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Le certificat permet de mettre fin au bail sans pénalité, avec un préavis d’au moins 28 jours. Le loyer reste toutefois à payer pendant cette période de préavis.',
  },
  {
    question: 'En Alberta, que deviennent les jours de congé pour violence familiale qu’un employé n’a pas utilisés à la fin de l’année?',
    answers: [
      'Ils sont reportés à l’année suivante',
      'Ils sont payés par l’employeur',
      'Ils sont perdus : ni reportés ni payés',
      'Ils sont ajoutés aux vacances',
    ],
    correct: 2,
    explanation:
      'Un employé admissible peut prendre jusqu’à 10 jours de congé non payé par année civile, après 90 jours de travail chez le même employeur. Les jours non utilisés ne sont pas reportés et l’employeur n’a pas à les payer, même si l’emploi prend fin.',
  },
  {
    question: 'Que risque une personne déclarée coupable de plus d’une violation d’une ordonnance de protection d’urgence?',
    answers: [
      'Un avertissement',
      'Une amende seulement',
      'Une peine de prison automatique',
      'Aucune sanction si la victime l’a invitée',
    ],
    correct: 2,
    explanation:
      'Une personne déclarée coupable d’avoir violé une OPU peut recevoir une amende ou une peine de prison. En cas de plus d’une violation, la peine de prison est automatique. Si l’ordonnance n’est pas respectée, il faut appeler la police et toujours garder une copie de l’OPU sur soi.',
  },
  {
    question: 'Une personne qui craint d’être mariée de force, mais qui ne veut pas que sa famille soit accusée d’un crime, peut :',
    answers: [
      'Seulement attendre que le mariage ait lieu pour porter plainte',
      'Seulement demander l’aide de l’ambassade de son pays d’origine',
      'Demander à un juge une ordonnance préventive (engagement de ne pas troubler l’ordre public)',
      'Seulement porter plainte contre ses parents',
    ],
    correct: 2,
    explanation:
      'Le mariage forcé est un crime au Canada, et le mariage exige le consentement libre et éclairé des deux personnes. La loi prévoit une ordonnance préventive qui protège la personne sans que sa famille soit accusée. C’est aussi un crime d’emmener un enfant hors du Canada pour le marier de force à l’étranger.',
  },
];
