import { Module } from '@nestjs/common';
import { MurojaahService } from './murojaah.service';
import { MurojaahController } from './murojaah.controller';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [MurojaahController],
  providers: [MurojaahService, StudentsService, UsersService]
})
export class MurojaahModule {}
