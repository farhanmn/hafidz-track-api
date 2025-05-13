import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';
import { ParentsController } from './parents.controller';
import { StudentsService } from '../students/students.service';

@Module({
  controllers: [ParentsController],
  providers: [ParentsService, StudentsService]
})
export class ParentsModule {}
