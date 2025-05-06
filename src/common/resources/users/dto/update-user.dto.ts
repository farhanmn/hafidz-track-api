import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UpdateUserDto {
  @IsOptional()
  @ApiProperty({ example: 'name' })
  name?: string;

  @IsOptional()
  @ApiProperty({ example: 'password' })
  password?: string;

  @IsEnum(Role)
  role: Role;
}
