import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender, ParentStatus } from '@prisma/client';

export class CreateParentDto {
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  student_id: string;

  @IsString()
  @ApiProperty({ example: 'name' })
  name: string;

  @IsEnum(Gender)
  @ApiProperty({ example: Gender.L })
  gender: Gender;

  @IsString()
  @ApiProperty({ example: '082391827381' })
  @IsOptional()
  phone?: string;

  @IsEnum(ParentStatus)
  @ApiProperty({ example: ParentStatus.PARENTS })
  parent_status: ParentStatus;

  @IsString()
  @ApiProperty({ example: 'description' })
  @IsOptional()
  description?: string;

  @IsString()
  @ApiProperty({ example: 'address' })
  @IsOptional()
  address?: string;
}
