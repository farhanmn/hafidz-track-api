import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { StudentsService } from '../students/students.service';

@Module({
  controllers: [AttendancesController],
  providers: [AttendancesService, StudentsService]
})
export class AttendancesModule {}
