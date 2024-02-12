import { IsString } from "@nestjs/class-validator";



export class StudentDTO {
@IsString()
name: string

@IsString()
lastName: string
}