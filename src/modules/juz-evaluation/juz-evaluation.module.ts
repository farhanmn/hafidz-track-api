import { Module } from '@nestjs/common';
import { JuzEvaluationService } from './juz-evaluation.service';
import { JuzEvaluationController } from './juz-evaluation.controller';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [JuzEvaluationController],
  providers: [JuzEvaluationService, StudentsService, UsersService]
})
export class JuzEvaluationModule {}
