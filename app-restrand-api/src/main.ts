import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // const config = new DocumentBuilder()
  //   .setTitle('Restrand')
  //   .setDescription('API for Restrand app')
  //   .addTag('restrand')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  //SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
