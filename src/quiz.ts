
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-10-30';
export const QUIZ_TITLE = 'Quiz sur la prévention de la fraude et la protection de l’identité';
export const QUIZ_TOPIC = 'prévention de la fraude et protection de l’identité au Canada';

export const questions: Question[] = [
  {
    question: 'Service Canada peut suspendre votre numéro d’assurance sociale (NAS) s’il est lié à une activité criminelle.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Selon le gouvernement du Canada, un NAS n’est pas « suspendu ». C’est un mensonge fréquent des fraudeurs pour obtenir votre NAS ou votre argent. Si quelqu’un vous appelle pour vous demander votre NAS, ne le donnez pas.',
  },
  {
    question: 'Quelles sont les deux agences d’évaluation du crédit au Canada, auprès desquelles vous pouvez demander une alerte à la fraude en cas de vol d’identité ?',
    answers: [
      'L’Agence du revenu du Canada et Service Canada',
      'Visa et Mastercard',
      'Equifax et TransUnion',
      'La Banque du Canada',
    ],
    correct: 2,
    explanation:
      'Equifax et TransUnion gèrent les dossiers de crédit au Canada. Une alerte à la fraude ajoutée à votre dossier demande aux prêteurs de vérifier votre identité avant d’ouvrir un nouveau compte à votre nom. Consultez aussi votre dossier de crédit régulièrement pour repérer toute activité inconnue.',
  },
  {
    question: 'Vous recevez un appel de l’« Agence du revenu du Canada (ARC) ». On vous dit que vous devez des impôts et que la police viendra vous arrêter aujourd’hui si vous ne payez pas en cartes-cadeaux. Que devez-vous faire ?',
    answers: [
      'Payer rapidement pour éviter l’arrestation',
      'Raccrocher, puis contacter l’ARC au numéro inscrit sur son site officiel',
      'Donner votre numéro d’assurance sociale (NAS) pour prouver votre identité',
      'Rappeler le numéro laissé par l’agent',
    ],
    correct: 1,
    explanation:
      'L’ARC ne demande jamais de paiement en cartes-cadeaux ou en cryptomonnaie et ne menace pas d’arrestation immédiate.',
  },
  {
    question: 'Vous avez le droit de refuser de donner votre numéro d’assurance sociale (NAS) à un propriétaire qui veut vous louer un logement.',
    answers: ['Vrai', 'Faux'],
    correct: 0,
    explanation:
      'Un propriétaire n’a pas besoin de votre NAS pour évaluer votre demande de location, et vous pouvez refuser de le donner. Offrez plutôt une autre pièce d’identité. Le NAS n’est pas une pièce d’identité : ne le donnez que lorsque la loi l’exige, par exemple à votre employeur, à votre banque ou au gouvernement.',
  },
  {
    question: 'Si je n’ai pas perdu d’argent, ce n’est pas la peine de signaler une tentative de fraude.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Il faut signaler même une simple tentative. Les signalements aident les autorités à repérer les nouvelles arnaques et à prévenir d’autres victimes. Vous pouvez signaler une fraude au Centre antifraude du Canada, en ligne ou au 1-888-495-8501 (sans frais).',
  },
];
