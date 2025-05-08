import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    StudentsModule
    // other modules
  ]
})
export class AppModule {}
