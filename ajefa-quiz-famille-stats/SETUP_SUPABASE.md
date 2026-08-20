# Activer les statistiques AJEFA (environ 10 minutes)

Le quiz contient maintenant un bouton **Statistiques** directement sur la même interface. Les visiteurs peuvent jouer normalement. Pour consulter les chiffres, l'administrateur clique sur **Statistiques** puis entre son code privé.

## 1. Créer un projet Supabase gratuit

Créez un projet sur Supabase.

## 2. Installer la base de données

Dans **SQL Editor**, ouvrez le fichier `supabase.sql` de ce projet.

Avant de l'exécuter, remplacez :

`MON-CODE-ADMIN`

par le code privé que vous souhaitez utiliser, puis exécutez tout le script.

## 3. Copier les deux informations Supabase

Dans **Project Settings > API**, récupérez :

- Project URL
- anon/public key

Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=https://VOTRE-PROJET.supabase.co
VITE_SUPABASE_ANON_KEY=VOTRE_CLE_ANON
VITE_QUIZ_ID=droit-famille-2026
```

La clé `anon` est prévue pour être utilisée côté navigateur. Les données de statistiques restent protégées par les règles RLS et la fonction protégée par votre code administrateur.

## 4. Lancer / publier

```bash
npm install
npm run dev
```

Puis déployez sur Vercel. Ajoutez les mêmes variables d'environnement dans **Vercel > Project Settings > Environment Variables**.

## Ce que le bouton Statistiques affiche

- nombre de personnes ayant ouvert le quiz ;
- nombre de personnes ayant commencé ;
- nombre de personnes ayant terminé ;
- taux de complétion ;
- score moyen ;
- nombre de réponses et taux de bonnes réponses pour chaque question.

Aucun nom, courriel ou numéro de téléphone n'est demandé aux participants.
