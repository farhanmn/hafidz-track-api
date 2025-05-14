import { IsBoolean, IsEnum, IsNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Assessment } from '@prisma/client';

export class CreateMemorizingDto {
  @IsUUID()
  @ApiProperty({ example: 'uuid' })
  student_id: string;

  @IsUUID()
  @ApiProperty({ example: 'uuid' })
  musyrif_id: string;

  @IsNumber()
  @ApiProperty({ example: 2, minimum: 1, maximum: 30 })
  juz: number;

  @IsString()
  @ApiProperty({ example: 'Al-Fatihah' })
  from_surah: string;

  @IsNumber()
  @ApiProperty({ example: 2, minimum: 1 })
  from_ayah: number;

  @IsString()
  @ApiProperty({ example: 'Al-Fatihah' })
  to_surah: string;

  @IsNumber()
  @ApiProperty({ example: 2, minimum: 1 })
  to_ayah: number;

  @IsString()
  @ApiProperty({ example: '2025-11-11' })
  submission_date: string;

  @IsEnum(Assessment)
  @ApiProperty({ example: Assessment.PASS })
  assessment: Assessment;

  @IsString()
  @ApiProperty({ example: 'Lulus bersyarat' })
  notes: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isRepeat: number;
}
