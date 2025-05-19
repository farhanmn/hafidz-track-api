import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
  @IsOptional()
  @ApiProperty({ example: 'name' })
  name?: string;

  @IsOptional()
  @ApiProperty({ example: 'ADMIN,MUSYRIF' })
  role?: string;

  @IsOptional()
  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @IsOptional()
  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
