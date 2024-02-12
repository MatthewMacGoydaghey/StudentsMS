import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentsModule } from './students/students.module';
import { Student } from './DTO/Student.model';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'DB',
    models: [Student],
    autoLoadModels: true
  }), StudentsModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
