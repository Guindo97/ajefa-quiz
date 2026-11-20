
export type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

export const QUIZ_ID = 'quiz-vendredi-2026-11-20';
export const QUIZ_TITLE = 'Quiz du vendredi';
export const QUIZ_TOPIC = 'droits des adolescents';

export const questions: Question[] = [
  {
    question: 'Un voisin publie sur Facebook le nom et la photo d’un adolescent de 16 ans accusé d’un vol dans le quartier. Comme l’information est vraie, c’est permis.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation: 'Il est interdit de publier le nom d’un adolescent, ou toute information qui permet de l’identifier, lorsqu’il est poursuivi en vertu de la Loi sur le système de justice pénale pour les adolescents (LSJPA). Cette interdiction vaut pour tout le monde, y compris sur les réseaux sociaux. Seuls un tribunal ou, en cas d’urgence et de danger pour le public, la police peuvent faire une exception, dans des cas très limités. Les jeunes victimes et les jeunes témoins sont aussi protégés.'
  },
  {
    question: 'Un adolescent sans antécédents commet une première infraction mineure, sans violence. Que peut faire la police?',
    answers: [
      'Elle doit obligatoirement porter des accusations',
      'Elle peut donner un avertissement, une mise en garde ou diriger l’adolescent vers un programme dans la communauté',
      'Elle doit imposer une amende aux parents',
      'Elle doit le garder en prison jusqu’à son procès'
    ],
    correct: 1,
    explanation: 'Avant de porter des accusations, la police doit d’abord envisager des mesures extrajudiciaires, comme un avertissement, une mise en garde ou un renvoi vers un programme. Pour une première infraction sans violence, la Loi sur le système de justice pénale pour les adolescents (LSJPA) présume que ces mesures suffisent. Elles permettent à l’adolescent d’assumer ses actes sans passer par le tribunal.'
  },
  {
    question: 'Un enfant de 14 ans veut quitter l’école pour travailler et aider la famille. Que dit la loi en Alberta?',
    answers: [
      'C’est permis si les parents sont d’accord',
      'La fréquentation scolaire est obligatoire jusqu’à 16 ans',
      'La fréquentation scolaire est obligatoire jusqu’à 18 ans',
      'La fréquentation scolaire est obligatoire seulement pour les citoyens canadiens'
    ],
    correct: 1,
    explanation: 'En Alberta, les enfants qui résident dans la province, dont un parent réside au Canada, et qui ont 6 ans ou plus au 1er septembre et moins de 16 ans doivent fréquenter l’école, sauf exception prévue par la loi (par exemple l’éducation à domicile). L’accord des parents ne change rien. Ces règles visent aussi les familles nouvellement arrivées qui vivent en Alberta. De plus, un jeune de 14 ans ne peut pas travailler pendant les heures de classe. En cas d’absences répétées, l’autorité scolaire peut renvoyer le dossier à un comité provincial (Attendance Board), qui peut rendre des ordonnances visant l’enfant et ses parents.'
  },
  {
    question: 'Deux élèves de 15 ans s’échangent des photos intimes. L’un d’eux transfère la photo de l’autre à ses amis. Que dit la loi?',
    answers: [
      'Ce n’est pas grave, ce sont deux mineurs',
      'C’est permis si la photo a d’abord été envoyée volontairement',
      'C’est un crime, même entre adolescents',
      'C’est seulement interdit à l’école'
    ],
    correct: 2,
    explanation: 'Partager une image intime de quelqu’un sans son consentement est un crime au Canada, même entre adolescents. Depuis juillet 2026, menacer de la partager est aussi un crime, et la loi vise également les fausses images sexuelles créées avec l’intelligence artificielle. Si la personne a moins de 18 ans, l’image peut aussi être considérée comme de la pornographie juvénile. Un parent ou un jeune peut signaler la situation à la police ou à Cyberaide.ca, et obtenir de l’aide pour faire retirer l’image sur AidezMoiSVP.ca.'
  },
  {
    question: 'Un adolescent résident permanent reçoit une peine pour adolescents (peine spécifique) pour un vol. Peut-il perdre son statut d’immigration pour cette raison?',
    answers: [
      'Oui, toujours',
      'Oui, mais seulement s’il a plus de 14 ans',
      'En règle générale, non',
      'Seulement si ses parents ne sont pas citoyens'
    ],
    correct: 2,
    explanation: 'La Loi sur l’immigration et la protection des réfugiés (LIPR) prévoit qu’une peine spécifique imposée en vertu de la Loi sur le système de justice pénale pour les adolescents ne peut pas, à elle seule, servir de motif d’interdiction de territoire pour criminalité. C’est différent si l’adolescent reçoit une peine applicable aux adultes. Chaque situation est unique : il est important de consulter un avocat en immigration dès le début.'
  }
];
