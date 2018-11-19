import { NestFactory } from '@nestjs/core';
import * as httpserver  from 'http-server';
import { AppModule } from './app.module';


async function bootstrap() {
  console.log(a);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
