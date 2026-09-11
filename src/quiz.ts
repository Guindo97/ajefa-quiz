export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

// Mise à jour hebdomadaire du Quiz du vendredi.
// Pour le prochain vendredi, il suffit de remplacer les informations ci-dessous.

export const QUIZ_ID = 'quiz-vendredi-2026-09-11';

export const QUIZ_TITLE = 'Quiz sur le droit criminel et les droits devant la justice';

export const QUIZ_TOPIC = 'droit criminel et droits devant la justice';

export const questions: Question[] = [
  {
    question:
      'À partir de quel âge une personne peut-elle être accusée d’un crime au Canada?',
    answers: ['10 ans', '12 ans', '14 ans', '16 ans'],
    correct: 1,
    explanation:
      'Un enfant de moins de 12 ans ne peut jamais être poursuivi criminellement. Entre 12 et 17 ans, c’est la Loi sur le système de justice pénale pour les adolescents (LSJPA) qui s’applique.',
  },
  {
    question:
      'Un casier judiciaire disparaît automatiquement après quelques années.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Il faut présenter une demande de suspension du casier, anciennement appelée pardon; rien ne s’efface automatiquement, sauf dans certains cas précis d’absolution.',
  },
  {
    question:
      'Menacer de partager une image intime de quelqu’un, sans jamais la partager réellement, n’est pas un crime.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Depuis 2026, menacer de distribuer une image intime, y compris un hypertrucage, constitue une infraction distincte, même si l’image n’est jamais partagée.',
  },
  {
    question:
      'Une personne arrêtée par la police doit répondre à toutes ses questions immédiatement.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Toute personne a le droit de garder le silence et de demander à parler à un avocat avant de répondre.',
  },
  {
    question:
      'Une personne qui ne parle pas bien anglais a droit à un interprète devant un tribunal.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation:
      'C’est un droit garanti, peu importe la langue maternelle de la personne.',
  },
];