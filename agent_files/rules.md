# ------------------------------------------------------------------
# MASTER CODING GUIDELINES & ARCHITECTURE STANDARDS
# Project: AFRICAHOME
# Stack: Next.js 16 (App Router) | Tailwind CSS 4 | MongoDB (Mongoose) | TypeScript
# ------------------------------------------------------------------

global_context:
  role: "Senior Full Stack Architect"
  philosophy: "Clean Code, Atomic Commits, Server-First, Type-Safe."
  language: "French (Comments & Commits in English or French as per project pref)"

# ------------------------------------------------------------------
# 1. TECH STACK SPECIFICS
# ------------------------------------------------------------------
stack_rules:
  package_manager:
    tool: "pnpm"
    rule: "Strictly use pnpm for dependency management. Do not use npm or yarn."
    lockfile: "pnpm-lock.yaml (Must be committed)"
    commands:
      install: "pnpm add [package]"
      dev: "pnpm dev"
      execute: "pnpm dlx [command]"

  nextjs:
    version: "16.x"
    router: "App Router (src/app)"
    middleware: "Renamed to Proxy (src/proxy.ts). Use named export `export const proxy = ...`"
    data_fetching: "Server Components by default. Use `await` for params/searchParams."
  
  styling:
    framework: "Tailwind CSS 4.0"
    methodology: "Utility-first. No @apply in CSS unless strictly necessary."
    theme: "Use CSS variables for colors (e.g., --brand, --secondary) defined in globals.css/tailwind config."
    icons: "Lucide React."

  database:
    orm: "Mongoose"
    connection: "Singleton pattern (cached connection) to prevent hot-reload exhaustion."
    schema_location: "src/lib/models"

# ------------------------------------------------------------------
# 2. CODING CONVENTIONS
# ------------------------------------------------------------------
coding_standards:
  server_vs_client:
    rule: "Default to Server Components."
    exception: "Add 'use client' ONLY for interactive elements (onClick, useState, useEffect, hooks)."
    pattern: "Pass data from Server Parent -> Client Child via props."

  navigation:
    rule: "STRICTLY use `import Link from 'next/link'` for all internal navigation."
    forbidden: "<a href='/about'> (Causes full page reload)"
    allowed: "<Link href='/about'> (Client-side transition)"
    exception: "Use <a> ONLY for external links (http/https), mailto:, tel:, or file downloads."


  async_params:
    rule: "In Next.js 16+, dynamic route params are Promises."
    bad: "const id = params.id"
    good: "const { id } = await params"

  html_entities:
    rule: "Strictly escape special characters in JSX to prevent build errors."
    forbidden: 
      - "L'argent" 
      - "C'est"
      - " \"Quote\" "
    allowed:
      - "L&apos;argent"
      - "{`C'est`}"
      - "&quot;Quote&quot;"

  type_safety:
    rule: "No 'any'. Define interfaces for Props and Mongoose Documents."
    zod: "Use Zod for Server Action validation."

# ------------------------------------------------------------------
# 3. WORKFLOW & GIT STRATEGY (CRITICAL)
# ------------------------------------------------------------------
workflow:
  commit_policy:
    frequency: "EXTREME. You must commit after EACH logical unit of work."
    trigger_events:
      - "After creating/updating a Mongoose Model."
      - "After creating/updating a Server Action."
      - "After creating/updating a UI Component."
      - "IMMEDIATELY after fixing a bug/error."
    rule: "Never accumulate multiple major changes in a single commit."

  step_execution:
    1: "Analyze the specific feature request."
    2: "Write/Update Model -> COMMIT (feat: model update)."
    3: "Create/Update Server Action -> COMMIT (feat: logic update)."
    4: "Create/Update UI Component -> COMMIT (feat: ui update)."
    5: "Verify hydration/escaping -> If fix needed -> Fix -> COMMIT (fix: hydration/escaping)."

  git_strategy:
    command_sequence:
      - "git add ."
      - "git commit -m 'type(scope): brief description'"
    commit_types:
      - "feat: New feature"
      - "fix: Bug fix"
      - "ui: Styling/CSS updates"
      - "chore: Config or maintenance"
      - "refactor: Code restructuring without logic change"

# ------------------------------------------------------------------
# 4. ERROR HANDLING & ROBUSTNESS
# ------------------------------------------------------------------
robustness:
  db_errors:
    rule: "Wrap Mongoose operations in try/catch blocks."
    action: "Return { error: string } or { success: true, data: ... } from Server Actions."
  
  ui_feedback:
    rule: "Use 'sonner' or 'toast' for user feedback on Server Action completion."
    loading_states: "Use `useTransition` or `useFormStatus` for pending states."

# ------------------------------------------------------------------
# 5. REUSABLE PATTERNS (TEMPLATES)
# ------------------------------------------------------------------
patterns:
  singleton_db: |
    // src/lib/db.ts
    import mongoose from 'mongoose';
    const MONGODB_URI = process.env.MONGODB_URI!;
    if (!MONGODB_URI) throw new Error('MONGODB_URI missing');
    
    let cached = (global as any).mongoose || { conn: null, promise: null };
    
    export const connectDB = async () => {
      if (cached.conn) return cached.conn;
      if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
      cached.conn = await cached.promise;
      return cached.conn;
    };