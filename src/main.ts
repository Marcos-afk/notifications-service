import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Signale } from 'signale';

async function bootstrap() {
  const log = new Signale();

  try {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.listen(process.env.PORT);

    return log
      .scope('Server')
      .success(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    log.scope('Server').error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
}

bootstrap();
