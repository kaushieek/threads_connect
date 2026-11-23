# threads_connect design system

The web experience uses a quiet editorial language inspired by institutional life: warm paper surfaces, evergreen brand color, fine rules and generous whitespace. The visual identity pairs an open woven-thread mark with a high-contrast display serif and a practical sans-serif. It is designed to feel established, welcoming and useful across generations.

## Foundations

- **Color:** `--tc-bg` and `--tc-surface` define the canvas and raised surfaces. `--tc-text`, `--tc-muted`, `--tc-line`, `--tc-primary`, `--tc-primary-hover`, `--tc-on-primary`, `--tc-accent` and `--tc-gold` carry semantic roles. Dark mode overrides the same tokens on `:root[data-theme='dark']`.
- **Type:** system sans-serif for interface and reading; system editorial serif for large headlines and selected emphasis. Avoid downloaded fonts so the shell remains fast and works offline.
- **Spacing:** page gutters use `--tc-gutter`; content width uses `--tc-content`. Layouts use a consistent 4/8/12/16/24/32 pixel rhythm with responsive section spacing.
- **Shape and depth:** small, medium, large and extra-large radii use `--tc-radius-*`. Borders and flat surface shifts establish hierarchy; reserve `--tc-shadow-soft` for floating surfaces.
- **Motion:** use Motion for brief entrance and interaction feedback. Respect `useReducedMotion` in React and the global reduced-motion stylesheet rule.

## Shared UI

Use the exports from `@threads-connect/ui` before adding another implementation. The package provides buttons, the threads_connect wordmark and brand mark, badges, avatars, labeled inputs and selects, native accessible dialogs, disclosure-based dropdowns, tooltips, navigation and Lucide icons. Styles live in `packages/ui/src/styles.css`; app-level layout and tokens live in `apps/web/app/globals.css`.

Prefer semantic elements and native browser behavior. Every control needs an accessible name, a visible focus state, a working destination or action, and a clear disabled/error state where relevant. Preserve text contrast in both themes and test keyboard navigation at narrow and wide viewports.

## Tailwind

Tailwind CSS 4 is enabled through the app's PostCSS plugin. The `@theme inline` block maps the semantic application tokens into utilities. Continue to use semantic CSS classes for named product patterns and Tailwind utilities for small layout adjustments; do not create parallel color palettes.

## Landing page

The public page is an introduction to an institutional community, not an analytics dashboard. Keep the hierarchy editorial: one primary promise, human-scale example, role-specific value and a clear next step. Avoid invented outcome metrics, fake partner logos, dense card grids and decorative gradients.
