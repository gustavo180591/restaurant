async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: '*' });
    app.useGlobalGuards(new JwtAuthGuard());
    await app.listen(4000);
  }
  bootstrap();
  