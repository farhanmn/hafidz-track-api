import { Test, TestingModule } from '@nestjs/testing';
import { StudentsService } from './students.service';
import { UsersService } from '../users/users.service';
import { Gender, GradeStatus, Role, StudentStatus } from '@prisma/client';
import { StudentsController } from './students.controller';
import * as moment from 'moment-timezone';

describe('StudentsService', () => {
  let studentsService: StudentsService;
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
    birth_date: moment('2020-11-11', 'YYYY-MM-DD').toISOString(),
    join_date: moment().toISOString(),
    status: StudentStatus.ACTIVE
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [StudentsService, UsersService]
    }).compile();

    studentsService = module.get<StudentsService>(StudentsService);
    userService = module.get<UsersService>(UsersService);

    const userMusyrif = await userService.create(musyrifTesting);
    idMusyrifTesting = userMusyrif.id;
  });

  afterAll(async () => {
    await userService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(studentsService).toBeDefined();
  });

  it('should be successfully create student', async () => {
    studentTesting.musyrif_id = idMusyrifTesting;
    const result = await studentsService.create(studentTesting);
    idStudentsTesting = result.id;

    expect(result).toHaveProperty('id');
    expect(result.name).toBe(studentTesting.name);
    expect(result.status).toBe(studentTesting.status);
    expect(result.gender).toBe(studentTesting.gender);
    expect(result.grade).toBe(studentTesting.grade);
    expect(result.grade_status).toBe(studentTesting.grade_status);
  });

  it('should be successfully get all students', async () => {
    const testingStudent = {
      id: expect.any(String) as string,
      name: studentTesting.name,
      gender: studentTesting.gender,
      grade: studentTesting.grade,
      status: studentTesting.status,
      grade_status: studentTesting.grade_status
    };
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await studentsService.findAll(paginate);
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result.data).toEqual(
      expect.arrayContaining([expect.objectContaining(testingStudent)])
    );
  });

  it('should be successfully update student', async () => {
    const dto = {
      name: 'Student change name'
    };
    const result = await studentsService.update(idStudentsTesting, dto);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('birth_date');
    expect(result).toHaveProperty('gender');
    expect(result).toHaveProperty('grade');
    expect(result).toHaveProperty('grade_status');
    expect(result).toHaveProperty('join_date');
  });

  it('should be successfully delete student', async () => {
    const result = await studentsService.remove(idStudentsTesting);
    expect(result).toEqual(true);
  });
});
