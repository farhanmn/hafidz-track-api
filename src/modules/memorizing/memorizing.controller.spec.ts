import { Test, TestingModule } from '@nestjs/testing';
import { MemorizingController } from './memorizing.controller';
import { MemorizingService } from './memorizing.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { StudentsController } from '../students/students.controller';
import { UserController } from '../users/user.controller';

describe('MemorizingController', () => {
  let memorizingController: MemorizingController;
  let studentController: StudentsController;
  let userController: UserController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemorizingController, StudentsController, UserController],
      providers: [MemorizingService, StudentsService, UsersService]
    }).compile();

    memorizingController =
      module.get<MemorizingController>(MemorizingController);
    studentController = module.get<StudentsController>(StudentsController);
    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(memorizingController).toBeDefined();
    expect(studentController).toBeDefined();
    expect(userController).toBeDefined();
  });
});
