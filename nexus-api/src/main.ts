import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.enableCors(); // Permite que o Next.js (3000) acesse esta API (3001)
  
  await app.listen(3001);
  console.log(`🚀 Nexus-API rodando em: http://localhost:3001`);
}
bootstrap();