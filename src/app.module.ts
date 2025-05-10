import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { StudentsModule } from './modules/students/students.module';
import { ParentsModule } from './modules/parents/parents.module';
import { RefsModule } from './modules/refs/refs.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    StudentsModule,
    ParentsModule,
    RefsModule
    // other modules
  ]
})
export class AppModule {}
