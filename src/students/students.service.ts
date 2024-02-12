import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from 'src/DTO/Student.model';
import { StudentDTO } from 'src/DTO/student.dto';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class StudentsService {
  constructor(
  @InjectModel(Student)
  private studentModel: typeof Student
  ) {}


  async findStudent(personalCode: string) {
    try {
      const foundStudent = await this.studentModel.findOne({where: {personalCode: personalCode}})
  if (!foundStudent) {
    throw new NotFoundException({message: `Student with personal code ${personalCode} not found`})
  }
  return foundStudent
    } catch (error) {
      console.log(error)
    }
  }



  async createStudent(data: StudentDTO): Promise<Student> {
  const student = {
    personalCode: uuidv4(),
    name: data.name,
    lastName: data.lastName
  }
  return this.studentModel.create(student)
  }

}
