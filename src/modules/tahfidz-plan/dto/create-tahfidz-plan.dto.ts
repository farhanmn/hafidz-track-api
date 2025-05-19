import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlanType } from '@prisma/client';

export class CreateTahfidzPlanDto {
  @IsUUID()
  @ApiProperty({ example: 'uuid' })
  student_id: string;

  @IsEnum(PlanType)
  @ApiProperty({ example: PlanType.JUZ })
  plan_type: PlanType;

  @IsNumber()
  @ApiProperty({ example: 1, description: 'from 1 - 30' })
  juz_number: number;

  @IsUUID()
  @IsOptional()
  @ApiProperty({ example: 'uuid', description: 'ID surah' })
  surah_id?: string;

  @IsNumber()
  @IsOptional()
  page_number?: number;

  @IsNumber()
  start_ayah: number;

  @IsNumber()
  end_ayah: number;

  @IsDate()
  @ApiProperty({ example: '2011-11-11' })
  target_date: string;

  @IsUUID()
  @ApiProperty({ example: 'uuid', description: 'ID musyrif' })
  assigned_by: string;

  @IsString()
  notes?: string;
}
