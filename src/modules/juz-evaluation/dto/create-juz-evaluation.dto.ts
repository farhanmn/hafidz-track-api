import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Assessment } from '@prisma/client';

export class CreateJuzEvaluationDto {
  @IsUUID()
  student_id: string;

  @IsNumber()
  juz_number: number;

  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2000-11-11', default: Date.now() })
  evaluation_date?: string;

  @IsEnum(Assessment)
  @ApiProperty({ example: 'PASS', default: Assessment.PASS })
  assessment: Assessment;

  @IsOptional()
  @IsString()
  notes?: string | null;
}
