const test = require('node:test');
const assert = require('node:assert/strict');
const { HealthController } = require('../dist/health.controller.js');

test('health is ok when PostgreSQL and Redis respond', async () => {
  const controller = new HealthController({ $queryRaw: async () => 1 }, { ping: async () => true });

  const response = await controller.check();

  assert.equal(response.status, 'ok');
  assert.deepEqual(response.checks, { database: 'up', redis: 'up' });
  assert.ok(Number.isFinite(Date.parse(response.timestamp)));
});

test('health is degraded when infrastructure checks fail', async () => {
  const controller = new HealthController(
    {
      $queryRaw: async () => {
        throw new Error('connection refused');
      },
    },
    { ping: async () => false },
  );

  const response = await controller.check();

  assert.equal(response.status, 'degraded');
  assert.deepEqual(response.checks, { database: 'down', redis: 'down' });
});
