import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { TransformInterceptor } from "./infrastructure/interceptors/transform.interceptor";
import { ErrorInterceptor } from "./infrastructure/interceptors/error.interceptor";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor(), new ErrorInterceptor());
  const swaggerConfig = new DocumentBuilder()
    .setTitle(configService.get('APP_NAME'))
    .setContact(configService.get('APP_CONTACT_NAME'),configService.get('APP_CONTACT_URL'),configService.get('APP_CONTACT_EMAIL'))
    .setVersion(configService.get('APP_VERSION'))
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app,swaggerConfig)
  SwaggerModule.setup(configService.get('OPENAPI_PATH'),app, swaggerDocument)
  console.log(configService.get('OPENAPI_PATH'))

  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
