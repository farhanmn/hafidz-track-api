import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Assessment } from '@prisma/client';

export class FindMemorizingDto {
  @IsUUID()
  @IsOptional()
  @ApiProperty({ example: 'uuid' })
  student_id?: string;

  @IsUUID()
  @IsOptional()
  @ApiProperty({ example: 'uuid' })
  musyrif_id?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 2, minimum: 1, maximum: 30 })
  juz?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Al-Fatihah' })
  from_surah?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Al-Fatihah' })
  to_surah?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '2025-11-11' })
  submission_date?: string;

  @IsEnum(Assessment)
  @IsOptional()
  @ApiProperty({ example: Assessment.PASS })
  assessment?: Assessment;

  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
