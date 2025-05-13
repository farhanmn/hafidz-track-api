import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AttendanceStatus } from '@prisma/client';

export class FindAttendanceDto {
  @IsOptional()
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  student_id?: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2000-11-11' })
  date?: string;

  @IsOptional()
  @IsEnum(AttendanceStatus)
  @ApiProperty({
    example: AttendanceStatus.PRESENT
  })
  status?: AttendanceStatus;

  @ApiProperty({ example: 1, default: 1 })
  page: number;

  @ApiProperty({ example: 10, default: 10 })
  limit: number;
}
