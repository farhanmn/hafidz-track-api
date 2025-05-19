import { Module } from '@nestjs/common';
import { TahfidzPlanService } from './tahfidz-plan.service';
import { TahfidzPlanController } from './tahfidz-plan.controller';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [TahfidzPlanController],
  providers: [TahfidzPlanService, StudentsService, UsersService]
})
export class TahfidzPlanModule {}
