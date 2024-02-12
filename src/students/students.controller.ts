import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { StudentsService } from './students.service';
import { StudentDTO } from 'src/DTO/student.dto';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly studentsService: StudentsService
  ) {}


  @MessagePattern('getStudent')
  getStudent(@Payload() personalCode: string) {
  return this.studentsService.findStudent(personalCode)
  }
  
  @MessagePattern('createStudent')
  createStudent(@Payload() data: StudentDTO) {
  return this.studentsService.createStudent(data)
  }


}
