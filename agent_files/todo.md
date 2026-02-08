# TASK: ARCHITECTURAL REFACTORING - I18N & THEMING
# CONTEXT: The client requires a bilingual site (FR/EN) and Dark Mode support.
# IMPACT: High. Requires moving files and installing providers.

technical_stack:
  libraries_to_install:
    - "next-themes" # For light/dark mode
    - "lucide-react" # Icons for toggles
    - "negotiator" # For language detection (optional but good)
    - "@formatjs/intl-localematcher" # For locale matching

design_specifications:
  dark_mode_palette:
    background: "hsl(222, 47%, 11%)" # Deep Midnight Blue (#0f172a)
    text: "hsl(210, 40%, 98%)" # Off-white
    accent: "hsl(142, 70%, 50%)" # Neon Green/Emerald for visibility
    grid_pattern: "Opacity should drop to 5% white in dark mode."

  i18n_strategy:
    default_locale: "fr"
    locales: ["fr", "en"]
    method: "Middleware + Dictionary Pattern (Server Components)"

implementation_steps:

  # --- STEP 1: THEMING SETUP ---
  - action: "update_config"
    path: "tailwind.config.ts"
    instruction: "Ensure darkMode is set to 'class'. Update theme colors to use CSS variables correctly defined in globals.css."

  - action: "create_file"
    path: "components/providers/theme-provider.tsx"
    instruction: "Create a Client Component wrapping 'next-themes' ThemeProvider."

  - action: "update_file"
    path: "app/layout.tsx"
    instruction: "Wrap the children in <ThemeProvider attribute='class' defaultTheme='light' enableSystem>."

  - action: "create_component"
    path: "components/ui/theme-toggle.tsx"
    instruction: "A simple icon button (Sun/Moon) using useTheme() to switch modes. Must be a Client Component."

  # --- STEP 2: I18N STRUCTURE (THE BIG MOVE) ---
  - action: "create_file"
    path: "middleware.ts"
    instruction: "Create middleware to detect browser language and redirect to /[lang]/... if missing. Default to 'fr'."

  - action: "create_dictionaries"
    path: "dictionaries/"
    files:
      - "fr.json": { "hero": { "title": "Construire la souveraineté...", "role": "Architecte Logiciel..." }, "nav": { "about": "À Propos", "blog": "Blog" } }
      - "en.json": { "hero": { "title": "Building Digital Sovereignty...", "role": "Software Architect..." }, "nav": { "about": "About", "blog": "Blog" } }

  - action: "create_utility"
    path: "lib/get-dictionary.ts"
    instruction: "Async function to load the correct JSON based on the 'lang' parameter."

  - action: "move_files"
    instruction: "Move 'app/page.tsx' inside a new folder 'app/[lang]/page.tsx'. Update the component to explicitely accept { params: { lang } }."

  # --- STEP 3: UI UPDATES ---
  - action: "update_component"
    path: "components/layout/header.tsx"
    instruction: |
      1. Add the ThemeToggle.
      2. Add a LanguageSwitcher (Dropdown or Toggle FR/EN) that simply redirects to the new URL path.
      3. Use the Dictionary for nav links text instead of hardcoded strings.

  - action: "update_component"
    path: "app/[lang]/page.tsx" (formerly app/page.tsx)
    instruction: "Replace hardcoded text (Hero title, Bio) with variables from the dictionary."

verification_checklist:
  - "Does the URL change to /fr or /en?"
  - "Does switching language update the text immediately?"
  - "Does Dark Mode persist on reload?"
  - "Is the TechBackground visible but subtle in Dark Mode?"