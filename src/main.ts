import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);

  const ga = 'https://www.google-analytics.com';
  const gas = 'https://ssl.google-analytics.com';
  const fbs = 'https://firebasestorage.googleapis.com';
  const gtm = 'https://www.googletagmanager.com';

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'base-uri': ["'self'"],
          'block-all-mixed-content': [],
          'font-src': ["'self'", 'https:', 'data:'],
          'form-action': ["'self'"],
          'frame-ancestors': ["'self'"],
          'img-src': ["'self'", 'data:', '*'],
          'object-src': ["'none'"],
          'script-src': ["'self'", ga, gas, gtm],
          'script-src-attr': ["'none'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          'upgrade-insecure-requests': [],
          'connect-src': ["'self'", ga],
        },
      },
    }),
  );
  app.enableCors({
    origin: [`http://localhost:${port}`],
  });

  await app.listen(port);

  console.log(`http://localhost:${port}`);
}
bootstrap();
