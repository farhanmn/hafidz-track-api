import { Test, TestingModule } from '@nestjs/testing';
import { MemorizingService } from './memorizing.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';

describe('MemorizingService', () => {
  let memorizingService: MemorizingService;
  let studentService: StudentsService;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemorizingService, StudentsService, UsersService]
    }).compile();

    memorizingService = module.get<MemorizingService>(MemorizingService);
    studentService = module.get<StudentsService>(StudentsService);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(memorizingService).toBeDefined();
    expect(studentService).toBeDefined();
    expect(userService).toBeDefined();
  });
});
