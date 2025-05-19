import { IsDate, IsEnum, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { Assessment } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FindJuzEvaluationDto {
  @IsOptional()
  @IsUUID()
  student_id?: string | null;

  @IsOptional()
  @IsNumber()
  juz_number?: number | null;

  @IsOptional()
  @IsDate()
  evaluation_date?: string | null;

  @IsOptional()
  @IsEnum(Assessment)
  assessment?: Assessment | null;

  @IsOptional()
  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @IsOptional()
  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
