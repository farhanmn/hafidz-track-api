import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender, GradeStatus, StudentStatus } from '@prisma/client';

export class UpdateStudentDto {
  @IsEnum(Gender)
  @IsOptional()
  @ApiProperty({ example: Gender.L })
  gender?: Gender;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2000-11-11' })
  birth_date?: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2000-11-11' })
  join_date?: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'student_name' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '10' })
  grade?: string;

  @IsEnum(GradeStatus)
  @IsOptional()
  @ApiProperty({ example: GradeStatus.SENIOR_HIGH_SCHOOL })
  gradeStatus?: GradeStatus;

  @IsEnum(StudentStatus)
  @IsOptional()
  @ApiProperty({ example: StudentStatus.ACTIVE })
  status?: StudentStatus;
}
