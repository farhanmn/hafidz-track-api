import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender, StudentStatus } from '@prisma/client';

export class CreateStudentDto {
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  musyrif_id: string;

  @IsEnum(Gender)
  @ApiProperty({ example: Gender.L })
  gender: Gender;

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
