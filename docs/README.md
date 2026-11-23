# threads_connect

threads_connect is a conversation-centered collaboration product. This repository starts with a Next.js web app, NestJS API, shared TypeScript packages, Prisma/PostgreSQL, and Redis foundations.

## Prerequisites

- Node.js 22.12 or newer (22.20.0 verified)
- pnpm 11 (11.25.0 verified)
- Docker Desktop with its Linux engine running for local PostgreSQL and Redis

## Setup

1. Copy `.env.example` to `.env` and adjust credentials for local use.
2. Run `pnpm install`.
3. Start services with `pnpm infra:up`.
4. Generate Prisma Client and apply the development migration with `pnpm db:generate` and `pnpm db:migrate`.
5. Run `pnpm dev`; web runs on port 3000 and API on port 4000.

## Workspace

- `apps/web`: Next.js product UI
- `apps/api`: NestJS HTTP API
- `packages/*`: shared UI, types, validation, config, and API client
- `database/prisma`: Prisma schema and migration configuration
- `infrastructure/docker`: local PostgreSQL and Redis
- `services/ai-service`: reserved Python FastAPI service boundary

See [architecture](./architecture.md) for the initial boundaries and [environment](./environment.md) for configuration.
