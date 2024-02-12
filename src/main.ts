import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://fzxkocmz:B0ihang6Z6_lxMwy8-kZFsyfXVKLKkrN@jackal.rmq.cloudamqp.com/fzxkocmz'],
      queue: 'students_queue',
      queueOptions: {
        durable: false
      },
    },
  })
  await app.listen()
  console.log('Students service started')
}
bootstrap();
