export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

// Mise à jour hebdomadaire du Quiz du vendredi.
// Pour le prochain vendredi, il suffit de remplacer les informations ci-dessous.

export const QUIZ_ID = 'quiz-vendredi-2026-09-04';

export const QUIZ_TITLE = 'Quiz sur les droits et responsabilités à l’école';

export const QUIZ_TOPIC = 'droits et responsabilités à l’école';

export const questions: Question[] = [
  {
    question:
      'Un parent peut poser des questions à l’école s’il ne comprend pas les règles ou les procédures scolaires.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation:
      'Les parents peuvent demander des explications concernant les règles, les politiques, les programmes et les décisions qui concernent leur enfant.',
  },
  {
    question:
      'Un parent peut contester une décision de l’école sans manquer de respect au personnel scolaire.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation:
      'Les parents peuvent poser des questions, exprimer leurs préoccupations ou, selon la situation, contester une décision de l’école. Ils doivent toutefois utiliser les mécanismes appropriés et communiquer de manière respectueuse.',
  },
  {
    question:
      'Un élève reçoit plusieurs messages insultants sur un réseau social de la part d’autres élèves de son école. Que peut-il faire?',
    answers: [
      'Conserver les messages ou faire des captures d’écran',
      'En parler à un parent ou à un adulte de confiance',
      'Signaler la situation à l’école',
      'Toutes ces réponses',
    ],
    correct: 3,
    explanation:
      'Conserver les preuves, en parler à un adulte de confiance et signaler la situation à l’école sont des démarches qui peuvent aider à gérer une situation de cyberintimidation.',
  },
  {
    question:
      'Un élève peut publier sur les réseaux sociaux une photo intime ou une vidéo intime d’un autre élève sans le consentement de cette personne.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'La diffusion d’une image ou d’une vidéo intime d’une personne sans son consentement peut avoir de graves conséquences juridiques. Au Canada, la publication ou la distribution non consensuelle d’une image intime peut constituer une infraction criminelle.',
  },
  {
    question:
      'Une école peut refuser l’accès à l’éducation à un élève simplement parce qu’il ne parle pas suffisamment bien l’anglais.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Une difficulté à parler anglais ne permet pas, à elle seule, de refuser à un élève l’accès à l’éducation. L’école peut évaluer ses besoins linguistiques et lui offrir un soutien approprié, notamment dans le cadre de programmes d’apprentissage de l’anglais comme langue supplémentaire (EAL – English as an Additional Language).',
  },
];