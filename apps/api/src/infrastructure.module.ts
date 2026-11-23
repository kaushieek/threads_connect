import { Global, Module } from '@nestjs/common';
import { parseEnvironment } from '@threads-connect/config';
import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [
    {
      provide: PrismaService,
      useFactory: () => new PrismaService(parseEnvironment(process.env).DATABASE_URL),
    },
    {
      provide: RedisService,
      useFactory: () => new RedisService(parseEnvironment(process.env).REDIS_URL),
    },
  ],
  exports: [PrismaService, RedisService],
})
export class InfrastructureModule {}
