# TASK: UI POLISH (SCROLL UX) & MONGODB TRAINING LANDING PAGE
# CONTEXT: 
#   - We need to improve long-page navigation (Back to Top).
#   - The training page is NOT generic. It is a high-level course on "MongoDB Architecture & Performance".
#   - The user is an Expert Architect, not just a trainer.

technical_stack:
  libraries:
    - "framer-motion" (Essential for the scroll button visibility animation)
    - "lucide-react" (Arrow icons, Database icons)
    - "react-accessible-accordion" (Optional, or build custom)

implementation_steps:

  # --- STEP 1: BACK TO TOP BUTTON (UX) ---
  - action: "create_component"
    path: "components/ui/back-to-top.tsx"
    description: "A floating button that appears when the user scrolls down."
    instructions: |
      1. Use 'use client'.
      2. Use 'framer-motion' (useScroll or AnimatePresence).
      3. Logic: 
         - Hide initially.
         - Show when window.scrollY > 400px.
         - On Click: window.scrollTo({ top: 0, behavior: 'smooth' }).
      4. Design:
         - Circular button, fixed bottom-8 right-8 (z-50).
         - Color: Primary or Accent (Vert Forêt) to stand out.
         - Icon: ArrowUp from Lucide.
         - Animation: Scale in/out cleanly.
      5. Add this component to `app/[lang]/layout.tsx` so it's global.

  # --- STEP 2: MONGODB TRAINING PAGE (Landing Page) ---
  - action: "update_dictionary"
    path: "dictionaries/fr.json & en.json"
    instructions: |
      Add "training":
      - "hero_title": "MongoDB : Architecture & Performance."
      - "value_prop": "Ne subissez plus vos données. Concevez des schémas NoSQL scalables et résilients."
      - "curriculum_title": "Le Programme Expert"
      - "cta_waitlist": "Rejoindre la liste d'attente (Session 2026)"

  - action: "create_component"
    path: "components/training/curriculum-accordion.tsx"
    description: "A clean accordion list showing the MongoDB modules."
    content: |
      - Module 1: Thinking in Documents (Schema Design & Patterns).
      - Module 2: Indexing & Performance Tuning (Explain Plans).
      - Module 3: Architecture (Replica Sets, Sharding, Atlas).
      - Module 4: Aggregation Framework Mastery.

  - action: "create_component"
    path: "components/training/waitlist-form.tsx"
    description: "A specialized form for the MongoDB training interest list."
    instructions: |
      1. Input: Email.
      2. Submit Button: "M'alerter lors de l'ouverture".
      3. Design: Use a 'Database' icon or subtle data-grid background.

  - action: "create_page"
    path: "app/[lang]/formation/mongodb/page.tsx"
    instructions: |
      1. Layout: High-conversion Landing Page.
      2. Hero Section: "Maîtrisez la base de données moderne." (Typography: Merriweather).
      3. Pain Points: "Pourquoi vos requêtes sont lentes ?" / "Pourquoi le relationnel ne suffit plus ?".
      4. Solution: Your expertise as an Architect (not just a dev).
      5. Curriculum Section: Use the Accordion component.
      6. CTA Section: The Waitlist Form.
      7. *Design Note:* Use the 'TechBackground' but emphasize the "Green" accent (MongoDB brand color is green, which fits perfectly with your Forest Green theme).

verification_checklist:
  - "Does the Back-to-Top button work smoothly?"
  - "Is the Training page clearly focused on MongoDB Architecture?"
  - "Does the Green accent color pop on this page (realling strictly with Mongo brand)?"
  - "Is the URL /formation/mongodb accessible?"