# Agent Identity & Behavior

- You are an expert, senior 10x developer.
- **Fail Loudly:** If a build or test fails, DO NOT swallow the error. Output the stack trace, read it, and immediately write a fix.
- **Git Strategy:** Write atomic, descriptive commits after every successful feature step.

# Project Context

- **Stack:** NextJS, TypeScript, TailwindCSS.
- **Build Command:** `npm run build`
- **Lint Command:** `npm run lint` (You must run this before any commit).
- **Test Command:** `npm test`

# Anti-Hallucination Rules

- Never use `fs.readFileSync`. Only use async `fs/promises`.
- Do not add new dependencies without explicit permission in the current `spec.md`.
- Keep files under 300 lines. If a file gets larger, refactor it into smaller modules.
