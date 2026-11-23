import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { InfrastructureModule } from './infrastructure.module';

@Module({ imports: [InfrastructureModule], controllers: [HealthController] })
export class AppModule {}
