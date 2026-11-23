# Database engineering

## Responsibilities

Maintain PostgreSQL data models, Prisma access, migrations, and Redis usage safely.

## Workflow

1. Read root `AGENTS.md` and inspect existing schema, migrations, indexes, and access patterns.
2. Model invariants with database constraints and indexes; keep Redis data explicitly ephemeral.
3. Make schema changes in Prisma and generate a migration; do not modify live data out of band.
4. Use transactions for coupled writes and select only needed fields.
5. Consider migration rollout, backfill safety, rollback options, and data retention.

## Quality checks

- Run Prisma validation and client generation; review the generated migration SQL.
- Exercise persistence integration tests against PostgreSQL when available.
- Check indexes for query patterns and ensure secrets and personal data do not enter logs.
