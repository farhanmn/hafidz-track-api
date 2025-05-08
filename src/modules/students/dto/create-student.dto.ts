import { IsDate, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender, GradeStatus, StudentStatus } from '@prisma/client';

export class CreateStudentDto {
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  musyrif_id: string;

  @IsEnum(Gender)
  @ApiProperty({ example: Gender.L })
  gender: Gender;

  @IsString()
  name: string;

  @IsString()
  grade: string;

  @IsEnum(GradeStatus)
  gradeStatus: GradeStatus;

  @IsDate()
  @ApiProperty({ example: '2000-11-11' })
  birth_date: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2000-11-11' })
  join_date: Date | null;

  @IsEnum(StudentStatus)
  @ApiProperty({ example: StudentStatus.ACTIVE })
  status: StudentStatus;
}
