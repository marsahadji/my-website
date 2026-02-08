# Roadmap de Développement

Ce projet suit une approche itérative : **Fondations → Contenu → Produits**.

## Phase 1 : Fondations & Identité (MVP)
*Objectif : Mettre en ligne une présence crédible capable de capturer des emails immédiatement.*

- [ ] **Setup Technique :** - Initialisation Next.js + Tailwind.
    - Configuration des polices (Merriweather / Inter).
    - Définition des variables CSS (Couleurs Bleu Nuit / Vert Forêt).
- [ ] **Page d'Accueil (Home) :**
    - Section Hero : Phrase d'accroche + Photo/Illustration + CTA Newsletter.
    - Section "Problèmes résolus" (Bullet points).
    - Footer minimaliste (Liens sociaux + Copyright).
- [ ] **Page À Propos (About) :**
    - Bio narrative (Parcours).
    - Section "Vision & Valeurs".
- [ ] **Système de Lead Gen :**
    - Composant "Newsletter Signup" connecté à un service (ou logué temporairement).
- [ ] **Légal :**
    - Page Mentions Légales & Politique de confidentialité (Squelette).

## Phase 2 : Le Moteur de Contenu (Autorité)
*Objectif : Prouver l'expertise et attirer du trafic organique (SEO).*

- [ ] **Architecture du Blog :**
    - Configuration MDX pour écrire les articles en Markdown.
    - Système de catégories (Tech, Data, Togo, Analyses).
- [ ] **Design Article :**
    - Mise en page optimisée pour la lecture longue (largeur contenue, typographie soignée).
    - Bloc "Auteur" en fin d'article.
    - CTA Newsletter intégré au milieu ou à la fin des articles.
- [ ] **Section Ressources :**
    - Page liste pour téléchargements (PDFs, Templates).
    - Gate (Formulaire) pour accéder aux ressources.

## Phase 3 : Vitrine Projets & Services
*Objectif : Montrer les réalisations concrètes (SaaS).*

- [ ] **Page "Ce que je fais" (Services) :**
    - Consulting / Architecture / Data.
    - Tarification ou méthode de travail.
- [ ] **Portfolio Projets (Logiciels) :**
    - Cartes dédiées pour *Notaris*, *FactuPro*, *School App*.
    - Screenshots, description du problème/solution, lien vers les produits.
    - Badge d'état (En prod / En dév).

## Phase 4 : Lancement Formation WDB
*Objectif : Vente et Monétisation.*

- [ ] **Landing Page WDB :**
    - Copywriting orienté douleur/solution.
    - Programme des modules.
    - Preuve sociale (si disponible).
- [ ] **Tunnel de vente :**
    - Formulaire de pré-inscription ou bouton d'achat (Stripe/LemonSqueezy).

## Règles de Développement (Rules)
1.  **Mobile First :** Tout doit être parfait sur mobile avant le desktop.
2.  **Performance :** Pas de JavaScript inutile. Utiliser les Server Components par défaut.
3.  **Accessibilité :** Contraste élevé (Bleu nuit sur Blanc), balises sémantiques.
4.  **Maintenance :** Code propre, modulaire, commenté là où c'est complexe.