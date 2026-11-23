# Frontend development

## Responsibilities

Build the threads_connect web experience in `apps/web` with React, Next.js, TypeScript, and shared UI from `packages/ui`.

## Workflow

1. Read root `AGENTS.md`, the nearest app guidance, and existing route/component patterns.
2. Keep server components by default; add client boundaries only for browser state or interaction.
3. Consume shared contracts and validation rather than duplicating API shapes.
4. Use semantic HTML, accessible names, keyboard support, responsive CSS, and shared theme tokens.
5. Represent loading, empty, error, and success states deliberately; keep secrets server-side.

## Quality checks

- Run web build, typecheck, and lint for changed surfaces.
- Verify mobile and desktop structure, light and dark themes, focus states, and reduced motion.
- Avoid unnecessary packages, duplicated primitives, and oversized client bundles.
