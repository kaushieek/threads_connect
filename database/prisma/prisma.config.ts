import { config as loadEnvironmentFile } from 'dotenv';
import { fileURLToPath } from 'node:url';
import { defineConfig, env } from 'prisma/config';

if (process.env.NODE_ENV !== 'production') {
  loadEnvironmentFile({ path: fileURLToPath(new URL('../../.env', import.meta.url)) });
}

export default defineConfig({
  schema: 'schema.prisma',
  migrations: { path: 'migrations' },
  // No development fallback: local runs load .env; deployments must provide DATABASE_URL.
  datasource: { url: env('DATABASE_URL') },
});
