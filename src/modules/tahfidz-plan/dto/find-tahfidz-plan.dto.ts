import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PlanType } from '@prisma/client';

export class FindTahfidzPlanDto {
  @IsUUID()
  @IsOptional()
  @ApiProperty({ example: 'uuid' })
  student_id?: string;

  @IsEnum(PlanType)
  @IsOptional()
  @ApiProperty({ example: PlanType.JUZ })
  plan_type?: PlanType;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2011-11-11' })
  target_date?: string;

  @IsOptional()
  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @IsOptional()
  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
