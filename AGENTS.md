# threads_connect project guide

## Product vision

Build threads_connect as a premium institutional alumni and student engagement ecosystem: “Beyond Graduation. Beyond Connections.” Connect alumni, students, faculty, and administrators through lasting relationships, belonging, mentorship, and opportunity. Favor clarity, trust, and useful community over feature density.

## Architecture principles

- Keep the web app, API, shared packages, data layer, and future AI service as clear boundaries in this pnpm/Turborepo monorepo.
- Keep domain decisions in the API and share stable contracts through `packages/types` and runtime schemas through `packages/validation`.
- Keep UI primitives reusable and accessible in `packages/ui`; compose product experiences in `apps/web`.
- Treat `services/ai-service` as a future independently deployable Python service; do not add a second runtime until needed.
- Prefer boring, explicit solutions and small dependency surfaces. Do not add abstractions or dependencies without a concrete need.

## Naming conventions

- Use lowercase kebab-case for directories and filenames, PascalCase for React components and types, camelCase for functions and values, and UPPER_SNAKE_CASE for environment variables.
- Scope workspace packages under `@threads-connect/` and name exported APIs for their use, not their implementation.
- Use semantic CSS custom properties and design tokens; avoid unexplained one-off values.

## Coding standards

- Use strict TypeScript and avoid `any`; validate untrusted values at boundaries.
- Keep modules cohesive, functions straightforward, and errors actionable.
- Format with Prettier and lint with the repository ESLint configuration.
- Keep server-only secrets and integrations out of client bundles.

## Security rules

- Never commit secrets, credentials, personal data, or populated local environment files.
- Validate and normalize all user input; use parameterized database access and least-privilege credentials.
- Apply secure defaults to authentication, authorization, CORS, cookies, and HTTP headers as those features are introduced.
- Avoid logging tokens, secrets, or sensitive user data.

## Database rules

- PostgreSQL is the source of truth. Model constraints and indexes alongside data requirements.
- Change schemas through reviewed Prisma migrations; never edit deployed databases manually.
- Use transactions for multi-step writes and keep migrations safe to roll forward.
- Redis is for ephemeral/cache/coordination use, not durable source data.

## Testing requirements

- Add unit tests for business rules and integration tests for persistence and API boundaries.
- Cover success, invalid input, and failure paths for changed behavior.
- Run relevant tests, type checking, linting, and builds before calling work complete; report checks that could not run.

## Documentation requirements

- Document setup, environment variables, architecture changes, and operational commands in `docs/`.
- Update documentation when behavior or developer workflows change.
- Keep examples runnable and never include real secrets.

## UI/UX standards

- Use responsive layouts, semantic HTML, keyboard-accessible interactions, visible focus, and sufficient contrast.
- Support light and dark themes, reduced motion, loading skeletons, empty states, and recoverable error states.
- Use motion sparingly to clarify state changes. Keep spacing and typography intentional and consistent.
- Avoid generic dashboard patterns; every screen should have a clear hierarchy and purposeful content.

## Dependencies and abstractions

- Check whether existing platform or workspace capabilities solve the need before adding a dependency.
- Add only maintained, compatible dependencies with a clear user or engineering benefit.
- Avoid speculative frameworks, wrapper layers, and premature generalization.
