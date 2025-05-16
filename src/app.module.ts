import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { StudentsModule } from './modules/students/students.module';
import { ParentsModule } from './modules/parents/parents.module';
import { RefsModule } from './modules/refs/refs.module';
import { AttendancesModule } from './modules/attendances/attendances.module';
import { TahfidzModule } from './modules/tahfidz/tahfidz.module';
@Module({
  imports: [
    UsersModule,
    AuthModule,
    StudentsModule,
    ParentsModule,
    RefsModule,
    AttendancesModule,
    TahfidzModule
    // other modules
  ]
})
export class AppModule {}
