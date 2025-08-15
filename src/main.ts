import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { testDBConnection } from './application/database';
import { RestLoggingInterceptor } from './application/logging';
import { JwtAuthExceptionFilter } from './modules/auth/filters/jwt-auth-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { logger } from './utils/logger.utils';

async function bootstrap() {
  await testDBConnection();
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }
  });
  app.use(cookieParser());
  app.useGlobalInterceptors(new RestLoggingInterceptor());
  app.useGlobalFilters(new JwtAuthExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Nest Boilerplate')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app
    .listen(process.env.PORT ?? 3000)
    .then(() =>
      logger.info(`Server started on port ${process.env.PORT ?? 3000}`)
    )
    .catch((error) => console.error(error));
}
bootstrap();
