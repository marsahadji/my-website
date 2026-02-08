 system_role: Architecte DevOps / Next.js Specialist
context: Fix Netlify Deployment Error (Edge Runtime vs Mongoose)

instructions:
  - action: "Nettoyer le Middleware (src/middleware.ts ou src/proxy.ts)"
    details: |
      Le middleware ne doit JAMAIS importer `mongoose` ou tes modèles de base de données directement. 
      - Si tu vérifies les rôles, utilise uniquement le token JWT décodé par `next-auth`. 
      - Assure-toi que ton fichier `src/auth.ts` n'importe pas non plus de fichiers touchant à la DB dans sa configuration de base si celle-ci est utilisée par le middleware.

  - action: "Vérifier l'importation de Mongoose"
    details: |
      Vérifie si ton middleware importe par erreur un fichier comme `src/lib/db.ts` ou `src/lib/models/User.ts`. 
      Si c'est le cas, remplace cette logique. Le middleware doit rester "stateless".

  - action: "Ajouter la configuration de runtime (Optionnel mais recommandé)"
    path: "src/middleware.ts"
    code: |
      // Force le middleware à ne pas utiliser l'edge si nécessaire (selon la version de Next/Netlify)
      // Mais la meilleure pratique reste de supprimer l'import de Mongoose.
      export const config = {
        matcher: ["/dashboard/:path*", "/admin/:path*"],
      };

  - action: "Utiliser les Callbacks de NextAuth pour les Rôles"
    details: |
      Pour que le middleware connaisse les flags (isPro, isClient) sans interroger la DB :
      1. Dans `src/auth.ts`, ajoute ces données au `token` dans le callback `jwt`.
      2. Ajoute-les ensuite à la `session` dans le callback `session`.
      3. Le middleware lira ces flags directement depuis le cookie de session chiffré.