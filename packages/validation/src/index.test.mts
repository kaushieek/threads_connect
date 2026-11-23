import test from 'node:test';
import assert from 'node:assert/strict';
import { environmentSchema, parseEnvironment } from '../dist/index.js';

test('environment schema supplies local defaults but requires DATABASE_URL', () => {
  const parsed = environmentSchema.parse({
    DATABASE_URL: 'postgresql://threads:local-test@localhost:5433/threads_connect?schema=public',
  });
  assert.equal(parsed.API_PORT, 4000);
  assert.equal(parsed.NODE_ENV, 'development');
  assert.equal(parsed.REDIS_URL, 'redis://localhost:6379');
  assert.equal(environmentSchema.safeParse({}).success, false);
});

test('environment schema rejects invalid ports and URLs', () => {
  const parsed = environmentSchema.safeParse({ API_PORT: '70000', REDIS_URL: 'not-a-url' });
  assert.equal(parsed.success, false);
});

test('environment parser reports field names without echoing invalid values', () => {
  assert.throws(
    () => parseEnvironment({ DATABASE_URL: 'sensitive-invalid-value' }),
    /DATABASE_URL: Invalid URL/,
  );
});

test('production rejects local databases and missing database credentials', () => {
  assert.equal(
    environmentSchema.safeParse({
      NODE_ENV: 'production',
      DATABASE_URL: 'postgresql://localhost:5432/threads_connect',
    }).success,
    false,
  );
  assert.equal(
    environmentSchema.safeParse({
      NODE_ENV: 'production',
      DATABASE_URL: 'postgresql://database.example:5432/threads_connect',
    }).success,
    false,
  );
});
