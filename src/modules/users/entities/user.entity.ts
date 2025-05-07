import { IsDate, IsEmail, IsEnum, IsString, IsUUID } from 'class-validator';
import { Role } from '@prisma/client';

export class User {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password?: string;

  @IsString()
  salt?: string;

  @IsEnum(Role)
  role: Role;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at?: Date;
}
