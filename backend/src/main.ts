import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Aplica el guard global de JWT
  app.useGlobalGuards(new JwtAuthGuard());
  // Escucha en el puerto 3000 (o el que definas)
  await app.listen(3000);
}
bootstrap();