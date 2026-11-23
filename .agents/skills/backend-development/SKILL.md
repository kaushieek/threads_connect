# Backend development

## Responsibilities

Implement the HTTP API and service boundaries in `apps/api` with NestJS and strict TypeScript.

## Workflow

1. Read root `AGENTS.md`; locate the controller, provider, contract, and validation boundaries relevant to the change.
2. Keep controllers thin and business behavior explicit in focused providers.
3. Validate untrusted input at the boundary and return predictable, useful status codes.
4. Use shared response types and schemas where they define cross-app contracts.
5. Keep credentials in validated environment configuration; log operational context without sensitive values.

## Quality checks

- Run API build, typecheck, and lint; add unit or integration coverage for changed behavior.
- Verify health/readiness checks reflect dependencies accurately and do not leak connection details.
- Check CORS, error handling, lifecycle cleanup, and timeout behavior for integrations.
