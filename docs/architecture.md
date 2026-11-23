# Architecture

The monorepo uses pnpm workspaces for dependency management and Turborepo for task orchestration. The Next.js app owns presentation and client-side interaction. The NestJS API owns business logic and persistence access. Shared contracts, validation, UI, config, and API access live in narrowly scoped workspace packages.

PostgreSQL is durable storage, accessed through Prisma. Redis is reserved for cache and ephemeral coordination. `services/ai-service` is a future Python FastAPI boundary; it intentionally has no runtime implementation yet.
