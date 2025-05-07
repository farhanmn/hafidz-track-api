import { IsDate, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender, StudentStatus } from '@prisma/client';

export class UpdateStudentDto {
  @IsEnum(Gender)
  @IsOptional()
  @ApiProperty({ example: Gender.L })
  gender: Gender | null;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2000-11-11' })
  birth_date: Date | null;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2000-11-11' })
  join_date: Date | null;

  @IsEnum(StudentStatus)
  @IsOptional()
  @ApiProperty({ example: StudentStatus.ACTIVE })
  status: StudentStatus | null;
}
