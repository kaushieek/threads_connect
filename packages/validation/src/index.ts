import { z } from 'zod';

export const environmentSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    WEB_URL: z.url().default('http://localhost:3000'),
    API_PORT: z.coerce.number().int().min(1).max(65535).default(4000),
    DATABASE_URL: z
      .url()
      .refine(
        (value) => value.startsWith('postgresql://') || value.startsWith('postgres://'),
        'Must be a PostgreSQL URL',
      ),
    REDIS_URL: z.url().default('redis://localhost:6379'),
  })
  .superRefine((environment, context) => {
    if (environment.NODE_ENV !== 'production') return;

    const databaseUrl = new URL(environment.DATABASE_URL);
    if (!databaseUrl.username || !databaseUrl.password) {
      context.addIssue({
        code: 'custom',
        path: ['DATABASE_URL'],
        message: 'Production DATABASE_URL must include environment-provided credentials',
      });
    }
    if (['localhost', '127.0.0.1', '::1', '[::1]'].includes(databaseUrl.hostname)) {
      context.addIssue({
        code: 'custom',
        path: ['DATABASE_URL'],
        message: 'Production DATABASE_URL must not point to a local development database',
      });
    }
  });

export type Environment = z.infer<typeof environmentSchema>;

export function parseEnvironment(input: Record<string, string | undefined> = {}): Environment {
  const parsed = environmentSchema.safeParse(input);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map(({ path, message }) => `${path.join('.') || 'environment'}: ${message}`)
      .join('; ');
    throw new Error(`Invalid environment configuration: ${issues}`);
  }
  return parsed.data;
}
