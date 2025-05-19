import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { Gender, ParentStatus } from '@prisma/client';

export class UpdateParentDto {
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  @IsOptional()
  student_id?: string;

  @IsString()
  @ApiProperty({ example: 'name' })
  @IsOptional()
  name?: string;

  @IsEnum(Gender)
  @ApiProperty({ example: Gender.L })
  @IsOptional()
  gender?: Gender;

  @IsString()
  @ApiProperty({ example: '082391827381' })
  @IsOptional()
  phone?: string;

  @IsEnum(ParentStatus)
  @ApiProperty({ example: ParentStatus.PARENTS })
  @IsOptional()
  parent_status?: ParentStatus;

  @IsString()
  @ApiProperty({ example: 'description' })
  @IsOptional()
  description?: string;

  @IsString()
  @ApiProperty({ example: 'address' })
  @IsOptional()
  address?: string;
}
