
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-10-09';
export const QUIZ_TITLE = 'Quiz sur les droits des locataires en Alberta';
export const QUIZ_TOPIC = 'droits des locataires en Alberta';

export const questions: Question[] = [
  {
    question: "Un locataire quitte le logement et ne doit rien : ni loyer, ni dommages, ni nettoyage. L’inspection du logement a également été effectuée. Dans quel délai le propriétaire doit-il lui rendre son dépôt?",
    answers: [
      '5 jours',
      '10 jours',
      '30 jours',
      '60 jours'
    ],
    correct: 1,
    explanation: "Le propriétaire doit rendre le dépôt dans les 10 jours qui suivent le départ du locataire."
  },
  {
    question: "L'inspection du logement à l'arrivée et au départ est facultative ?",
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: "Les deux inspections sont obligatoires. La première se fait dans la semaine qui précède ou qui suit l'emménagement. La seconde se fait dans la semaine qui précède ou qui suit le déménagement."
  },
  {
    question: "Un locataire conteste une retenue sur son dépôt. Quel organisme peut trancher ce différend?",
    answers: [
      'Le Residential Tenancy Dispute Resolution Service (RTDRS)',
      'Le registre foncier',
      'Service Canada',
      "La Société canadienne d'hypothèques et de logement"
    ],
    correct: 0,
    explanation: "Le RTDRS est un service du gouvernement de l'Alberta qui règle les différends entre locataires et propriétaires, notamment sur le remboursement du dépôt."
  },
  {
    question: "Vous avez un bail d’un an. Après six mois, le propriétaire peut augmenter le loyer s’il vous donne un préavis de trois mois.",
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: "Le loyer ne peut pas être augmenté pendant un bail à durée déterminée. Une hausse peut être prévue pour un nouveau bail à la fin du bail, à condition que les règles applicables aux augmentations de loyer soient respectées."
  },
  {
    question: "Un propriétaire veut entrer dans le logement pour faire une réparation. Quel préavis doit-il donner à son locataire?",
    answers: [
      "Aucun, c'est son immeuble",
      'Un appel la veille',
      "Un avis écrit d'au moins 24 heures",
      "Un avis d'une semaine"
    ],
    correct: 2,
    explanation: "Il faut un avis écrit et signé, remis au moins 24 heures à l'avance, qui indique la raison, la date et l'heure de l'entrée."
  }
];
