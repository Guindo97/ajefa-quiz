
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-11-06';
export const QUIZ_TITLE = 'Quiz sur l’immigration et la citoyenneté';
export const QUIZ_TOPIC = 'immigration et citoyenneté';

export const questions: Question[] = [
  {
    question: "Un travailleur étranger dont le permis est lié à un seul employeur et qui subit de la violence au travail n'a que deux choix : rester chez cet employeur ou quitter le Canada.",
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      "Il peut demander un permis de travail ouvert pour travailleurs vulnérables. Ce permis lui permet de travailler pour presque n'importe quel autre employeur au Canada. La violence peut être physique, sexuelle, psychologique ou financière, et le simple risque d'en subir peut suffire.",
  },
  {
    question: 'Vous êtes travailleur étranger temporaire en Alberta. Quelle affirmation est vraie ?',
    answers: [
      "Le salaire minimum de l'Alberta ne s'applique pas à vous",
      'Vous avez les mêmes protections au travail que les travailleurs canadiens qui font le même emploi',
      'Votre employeur peut garder votre passeport pendant votre contrat',
      "Porter plainte entraîne automatiquement l'annulation de votre permis",
    ],
    correct: 1,
    explanation:
      "Les normes d'emploi de l'Alberta (salaire minimum, heures supplémentaires, congés), la santé et sécurité au travail et l'indemnisation des accidentés s'appliquent aussi aux travailleurs étrangers. Selon les règles fédérales, un employeur ne peut ni confisquer votre passeport ni vous punir parce que vous avez signalé un problème.",
  },
  {
    question: 'Une personne a parrainé son épouse, qui est devenue résidente permanente il y a un an. Le couple se sépare. Que se passe-t-il ?',
    answers: [
      "L'épouse perd automatiquement sa résidence permanente",
      "Le répondant n'a plus aucune obligation envers elle",
      "L'épouse garde son statut, et le répondant reste financièrement responsable jusqu'à la fin de son engagement",
      "L'épouse doit quitter le Canada dans les 90 jours",
    ],
    correct: 2,
    explanation:
      "Pour un époux ou conjoint, l'engagement de parrainage dure 3 ans à partir de l'obtention de la résidence permanente, et une séparation ne l'annule pas.",
  },
  {
    question: "Une étudiante étrangère est entrée au Canada en 2023. Elle veut demander l'asile aujourd'hui. Selon les règles en vigueur depuis mars 2026, que se passe-t-il ?",
    answers: [
      "Rien n'a changé : on peut demander l'asile à tout moment",
      "Sa demande ne sera pas transmise à la Commission de l'immigration et du statut de réfugié, car elle est présentée plus d'un an après son arrivée",
      'Elle doit d’abord attendre 5 ans au Canada',
      'Elle obtient automatiquement la résidence permanente',
    ],
    correct: 1,
    explanation:
      "Selon le document fourni, depuis la loi C-12 (26 mars 2026), une demande d'asile présentée plus d'un an après la première entrée au Canada (pour une entrée après le 24 juin 2020) n'est plus déférée à la CISR. La personne garde toutefois accès à un examen des risques avant renvoi (ERAR), qui la protège contre un renvoi vers un pays où elle serait en danger.",
  },
  {
    question: "Une personne de votre entourage offre de préparer votre demande de résidence permanente pour 2 000 $. Elle n'est ni avocate ni consultante agréée. Que devriez-vous faire ?",
    answers: [
      "Accepter, si elle a déjà aidé d'autres personnes avec succès",
      'Refuser : seuls certains représentants autorisés peuvent être payés pour ce service',
      'Accepter, si vous la payez en argent comptant',
      "Accepter, à condition qu'elle ne signe pas les formulaires",
    ],
    correct: 1,
    explanation:
      "Seuls les représentants autorisés, notamment les avocats et les consultants agréés, peuvent être rémunérés pour des conseils ou une représentation en immigration. Un proche peut vous aider gratuitement, et les formulaires d'IRCC sont gratuits. Vérifiez un représentant sur Canada.ca/representant-immigration.",
  },
];
