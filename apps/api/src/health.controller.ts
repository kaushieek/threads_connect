import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '@threads-connect/types';
import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';

@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Get()
  async check(): Promise<HealthResponse> {
    const [database, redis] = await Promise.all([
      this.prisma.$queryRaw`SELECT 1`.then(() => true).catch(() => false),
      this.redis.ping(),
    ]);
    return {
      status: database && redis ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      checks: { database: database ? 'up' : 'down', redis: redis ? 'up' : 'down' },
    };
  }
}
