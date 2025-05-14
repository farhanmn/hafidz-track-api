import { Test, TestingModule } from '@nestjs/testing';
import { ParentsService } from './parents.service';
import { StudentsService } from '../students/students.service';
import {
  Gender,
  GradeStatus,
  ParentStatus,
  Role,
  StudentStatus
} from '@prisma/client';
import * as moment from 'moment-timezone';
import { CreateParentDto } from './dto/create-parent.dto';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

describe('ParentsService', () => {
  let parentService: ParentsService;
  let studentService: StudentsService;
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
      providers: [ParentsService, StudentsService, UsersService]
    }).compile();

    parentService = module.get<ParentsService>(ParentsService);
    studentService = module.get<StudentsService>(StudentsService);
    userService = module.get<UsersService>(UsersService);

    const userMusyrif = await userService.create(musyrifTesting);
    studentTesting.musyrif_id = userMusyrif.id;

    const student = await studentService.create(studentTesting);
    idStudentTesting = student.id;
  });

  afterAll(async () => {
    await userService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(parentService).toBeDefined();
    expect(studentService).toBeDefined();
  });

  it('should be successful create parent', async () => {
    parentTesting.student_id = idStudentTesting;
    const result = await parentService.create(parentTesting);
    idParentTesting = result.id;

    expect(result).toHaveProperty('id');
    expect(result.name).toBe(parentTesting.name);
    expect(result.gender).toBe(parentTesting.gender);
    expect(result.phone).toBe(parentTesting.phone);
    expect(result.parent_status).toBe(parentTesting.parent_status);
    expect(result.address).toBe(parentTesting.address);
  });

  it('should be successful get all parents', async () => {
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await parentService.findAll(paginate);
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result.data).toEqual(
      expect.arrayContaining([expect.objectContaining(parentTesting)])
    );
  });

  it('should be successfully update parent', async () => {
    const dto = {
      name: 'Parent change name'
    };
    const result = await parentService.update(idParentTesting, dto);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('gender');
    expect(result).toHaveProperty('phone');
    expect(result).toHaveProperty('parent_status');
    expect(result).toHaveProperty('address');
  });

  it('should be successfully delete parent', async () => {
    const result = await parentService.remove(idParentTesting);
    expect(result).toEqual(true);
  });
});
