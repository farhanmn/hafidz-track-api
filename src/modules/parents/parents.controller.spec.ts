import { Test, TestingModule } from '@nestjs/testing';
import { ParentsController } from './parents.controller';
import { ParentsService } from './parents.service';
import { StudentsService } from '../students/students.service';
import { StudentsController } from '../students/students.controller';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import {
  Gender,
  GradeStatus,
  ParentStatus,
  Role,
  StudentStatus
} from '@prisma/client';
import * as moment from 'moment-timezone';
import { CreateParentDto } from './dto/create-parent.dto';
import { UserController } from '../users/user.controller';
import { UsersService } from '../users/users.service';

describe('ParentsController', () => {
  let parentController: ParentsController;
  let studentController: StudentsController;
  let userController: UserController;
  let userService: UsersService;

  let idStudentTesting: string;
  let idParentTesting: string;

  const musyrifTesting: CreateUserDto = {
    name: 'musyrifTesting',
    email: 'musyrifTesting@testing2.com',
    password: 'passwordTesting',
    role: Role.MUSYRIF,
    created_at: new Date()
  };

  const studentTesting: CreateStudentDto = {
    musyrif_id: '',
    gender: Gender.L,
    name: 'studentTesting',
    grade: '10',
    grade_status: GradeStatus.JUNIOR_HIGH_SCHOOL,
    birth_date: moment('2020-11-11', 'YYYY-MM-DD').toISOString(),
    join_date: moment().toISOString(),
    status: StudentStatus.ACTIVE
  };

  const parentTesting: CreateParentDto = {
    student_id: '',
    name: 'parentTesting',
    gender: Gender.L,
    phone: '082391827381',
    parent_status: ParentStatus.PARENTS,
    address: 'address'
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentsController, StudentsController, UserController],
      providers: [ParentsService, StudentsService, UsersService]
    }).compile();

    parentController = module.get<ParentsController>(ParentsController);
    studentController = module.get<StudentsController>(StudentsController);
    userController = module.get<UserController>(UserController);
    userService = module.get<UsersService>(UsersService);

    const userMusyrif = await userController.create(musyrifTesting);
    if (userMusyrif.success) {
      studentTesting.musyrif_id = userMusyrif.data.id;
    }

    const student = await studentController.create(studentTesting);
    if (student.success) {
      idStudentTesting = student.data.id;
    }
  });

  afterAll(async () => {
    await userService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(parentController).toBeDefined();
    expect(studentController).toBeDefined();
    expect(userController).toBeDefined();
  });

  it('should be successfully create parent', async () => {
    parentTesting.student_id = idStudentTesting;
    const result = await parentController.create(parentTesting);
    if (result.success) {
      idParentTesting = result.data.id;
    }

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get all parent', async () => {
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await parentController.findAll(paginate);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully update parent', async () => {
    const dto = {
      name: 'Parent change name'
    };
    const result = await parentController.update(idParentTesting, dto);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully delete parent', async () => {
    const result = await parentController.remove(idParentTesting);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });
});
