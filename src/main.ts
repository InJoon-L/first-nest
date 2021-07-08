import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // @가 없는 어떠한 property의 object를 거른다.
      forbidNonWhitelisted: true, // 지정된 요소가 아니면 거른다.
      transform: true, // 우리가 원하는 타입(자료형)으로 바꿔준다. 예) url 파라미터같은 경우 무조건 string이기에 원하는 타입과 다름
    })
  );
  await app.listen(3000);
}
bootstrap();
