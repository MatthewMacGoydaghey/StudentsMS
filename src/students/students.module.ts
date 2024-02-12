import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from 'src/DTO/Student.model';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([{
    name: 'GRADES_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://fzxkocmz:B0ihang6Z6_lxMwy8-kZFsyfXVKLKkrN@jackal.rmq.cloudamqp.com/fzxkocmz'],
      queue: 'grades_queue',
      queueOptions: {
        durable: false
      },
  }}]), SequelizeModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
