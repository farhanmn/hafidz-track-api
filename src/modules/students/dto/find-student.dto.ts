import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GradeStatus } from '@prisma/client';

export class FindStudentDto {
  @IsOptional()
  @IsUUID()
  @ApiProperty({ description: 'Musyrif ID' })
  musyrif_id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'name' })
  name?: string;

  @IsOptional()
  @IsEnum(GradeStatus)
  @ApiProperty({ example: GradeStatus.JUNIOR_HIGH_SCHOOL })
  grade_status?: GradeStatus;

  @IsOptional()
  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @IsOptional()
  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
