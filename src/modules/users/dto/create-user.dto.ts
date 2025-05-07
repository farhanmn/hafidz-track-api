import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'name' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'mail@mail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'password' })
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsDate()
  created_at: Date;
}
