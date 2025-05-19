import { Module } from '@nestjs/common';
import { TahfidzService } from './tahfidz.service';
import { TahfidzController } from './tahfidz.controller';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [TahfidzController],
  providers: [TahfidzService, StudentsService, UsersService]
})
export class TahfidzModule {}
