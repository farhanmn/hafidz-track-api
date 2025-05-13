import { IsDate, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AttendanceStatus } from '@prisma/client';

export class CreateAttendanceDto {
  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  student_id: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2000-11-11', default: Date.now() })
  date?: string;

  @IsOptional()
  @IsEnum(AttendanceStatus)
  @ApiProperty({
    example: AttendanceStatus.PRESENT,
    default: AttendanceStatus.PRESENT
  })
  status?: AttendanceStatus;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'santri berperilaku baik saat halaqah', default: '' })
  remark?: string;

  @IsUUID()
  @ApiProperty({ example: 'UUID' })
  recorded_by: string;
}
