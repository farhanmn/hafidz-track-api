import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Revelation } from '@prisma/client';

export class CreateSurahDto {
  @IsString()
  name: string;

  @IsString()
  arabic_name: string;

  @IsNumber()
  ayah_counts: number;

  @IsEnum(Revelation)
  revelation_type: Revelation;
}
