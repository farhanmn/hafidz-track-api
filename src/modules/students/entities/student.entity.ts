import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID
} from 'class-validator';
import { Gender, StudentStatus } from '@prisma/client';

export class Student {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  musyrif_id: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDate()
  birth_date: Date;

  @IsDate()
  @IsOptional()
  join_date?: Date;

  @IsEnum(StudentStatus)
  status: StudentStatus;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
