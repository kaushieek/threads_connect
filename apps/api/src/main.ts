import 'reflect-metadata';
import { config as loadEnvironmentFile } from 'dotenv';
import { resolve } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { parseEnvironment } from '@threads-connect/config';
import { AppModule } from './app.module';

async function bootstrap() {
  loadEnvironmentFile({ path: resolve(__dirname, '../../../.env') });
  const env = parseEnvironment(process.env);
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: env.WEB_URL, credentials: true });
  await app.listen(env.API_PORT, '0.0.0.0');
}

void bootstrap();
