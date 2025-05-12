import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Gender, GradeStatus, Role, StudentStatus } from '@prisma/client';
import { UserController } from '../users/user.controller';
import { UsersService } from '../users/users.service';

describe('StudentsController', () => {
  let studentController: StudentsController;
  let userController: UserController;
  let userService: UsersService;

  let idMusyrifTesting: string;
  let idStudentsTesting: string;

  const musyrifTesting = {
    name: 'musyrifTesting',
    email: 'musyrifTesting@testing1.com',
    password: 'passwordTesting',
    role: Role.MUSYRIF,
    created_at: new Date()
  };

  const studentTesting = {
    musyrif_id: '',
    gender: Gender.L,
    name: 'studentTesting',
    grade: '10',
    grade_status: GradeStatus.JUNIOR_HIGH_SCHOOL,
    birth_date: new Date(),
    join_date: new Date(),
    status: StudentStatus.ACTIVE
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController, UserController],
      providers: [StudentsService, UsersService],
      exports: [UsersService]
    }).compile();

    studentController = module.get<StudentsController>(StudentsController);
    userController = module.get<UserController>(UserController);
    userService = module.get<UsersService>(UsersService);

    const userMusyrif = await userController.create(musyrifTesting);
    if (userMusyrif.success) {
      idMusyrifTesting = userMusyrif.data.id;
    }
  });

  afterAll(async () => {
    await userService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(studentController).toBeDefined();
    expect(userController).toBeDefined();
  });

  it('should be successfully create student', async () => {
    studentTesting.musyrif_id = idMusyrifTesting;
    const result = await studentController.create(studentTesting);
    if (result.success) {
      idStudentsTesting = result.data.id;
    }

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get all students', async () => {
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await studentController.findAll(paginate);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully update student', async () => {
    const dto = {
      name: 'Student change name'
    };
    const result = await studentController.update(idStudentsTesting, dto);
    console.log(result);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully delete student', async () => {
    const result = await studentController.remove(idStudentsTesting);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });
});
