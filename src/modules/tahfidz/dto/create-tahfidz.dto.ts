import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Assessment, TahfidzClass, TahfidzType } from '@prisma/client';

export class CreateTahfidzDto {
  @IsUUID()
  @ApiProperty({ example: 'uuid' })
  student_id: string;

  @IsUUID()
  @ApiProperty({ example: 'uuid' })
  musyrif_id: string;

  @IsEnum(TahfidzClass)
  @ApiProperty({ example: TahfidzClass.QURAN })
  class: TahfidzClass;

  @IsNumber()
  @ApiProperty({ example: 2, minimum: 1, maximum: 30 })
  juz: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Al-Fatihah' })
  from_surah?: string | null;

  @IsNumber()
  @ApiProperty({ example: 2, minimum: 1 })
  from_ayah: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Al-Fatihah' })
  to_surah?: string | null;

  @IsNumber()
  @ApiProperty({ example: 2, minimum: 1 })
  to_ayah: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '2025-11-11' })
  submission_date?: string;

  @IsEnum(Assessment)
  @ApiProperty({ example: Assessment.PASS })
  assessment: Assessment;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Lulus bersyarat' })
  notes?: string;

  @IsEnum(TahfidzType)
  @ApiProperty({ example: TahfidzType.MEMORIZING })
  type: TahfidzType;

  @IsBoolean()
  @ApiProperty({ example: true })
  isRepeat: number;
}
