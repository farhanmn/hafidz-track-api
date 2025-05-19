import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class FindParentDto {
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  student_id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'name' })
  name?: string;

  @IsOptional()
  @IsEnum(Gender)
  @ApiProperty({ example: Gender.L })
  gender?: Gender;

  @IsOptional()
  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @IsOptional()
  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
