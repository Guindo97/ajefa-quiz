# Quiz AJEFA — Droit de la famille

Quiz React + TypeScript avec :

- 5 questions AJEFA sur le droit de la famille ;
- logo officiel AJEFA ;
- bonne réponse en vert / mauvaise en rouge ;
- explications après les réponses ;
- score et progression ;
- bouton **Statistiques** discret sur la même interface ;
- accès aux statistiques protégé par un code administrateur ;
- stockage anonyme des statistiques avec Supabase.

Pour activer les statistiques persistantes, consultez `SETUP_SUPABASE.md`.

## Démarrage

```bash
npm install
npm run dev
```

## Mise à jour hebdomadaire du Quiz du vendredi

Le contenu du quiz est centralisé dans `src/quiz.ts`.
Chaque vendredi, remplacez uniquement `QUIZ_ID`, `QUIZ_TITLE`, `QUIZ_TOPIC` et le tableau `questions` dans ce fichier.
Le `QUIZ_ID` doit être unique pour chaque édition afin que les statistiques Supabase ne se mélangent pas avec celles des semaines précédentes.
