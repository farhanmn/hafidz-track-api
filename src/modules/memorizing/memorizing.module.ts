import { Module } from '@nestjs/common';
import { MemorizingService } from './memorizing.service';
import { MemorizingController } from './memorizing.controller';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [MemorizingController],
  providers: [MemorizingService, StudentsService, UsersService]
})
export class MemorizingModule {}
