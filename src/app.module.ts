import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserController } from './modules/users/user.controller';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    StudentsModule
    // other modules
  ],
  controllers: [UserController]
})
export class AppModule {}
