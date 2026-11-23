# Environment variables

Copy `.env.example` to `.env` for local development. `.env.example` and its database values are **LOCAL DEVELOPMENT ONLY**; never use them in production or commit `.env`.

Production deployments must provide `DATABASE_URL` with a PostgreSQL username and password through the deployment environment or secret manager. The Prisma configuration has no development URL fallback. The local Compose service requires `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` to be provided; it does not silently substitute development credentials.

| Name                | Purpose                                                     | Default                           |
| ------------------- | ----------------------------------------------------------- | --------------------------------- |
| `NODE_ENV`          | Runtime mode                                                | `development`                     |
| `WEB_URL`           | Browser origin allowed by API CORS                          | `http://localhost:3000`           |
| `API_PORT`          | NestJS port                                                 | `4000`                            |
| `POSTGRES_USER`     | Local Compose database user                                 | Local `.env` only                 |
| `POSTGRES_PASSWORD` | Local Compose database password                             | Local `.env` only                 |
| `POSTGRES_DB`       | Local Compose database name                                 | Local `.env` only                 |
| `DATABASE_URL`      | PostgreSQL connection string; required in every environment | Local `.env` or deployment secret |
| `REDIS_URL`         | Redis connection string                                     | Local Docker service              |
