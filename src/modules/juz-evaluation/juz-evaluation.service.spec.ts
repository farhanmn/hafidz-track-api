import { Test, TestingModule } from '@nestjs/testing';
import { JuzEvaluationService } from './juz-evaluation.service';
import { StudentsService } from '../students/students.service';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import {
  Assessment,
  Gender,
  GradeStatus,
  Role,
  StudentStatus
} from '@prisma/client';
import * as moment from 'moment-timezone';
import { CreateJuzEvaluationDto } from './dto/create-juz-evaluation.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

describe('JuzEvaluationService', () => {
  let jevService: JuzEvaluationService;
  let studentService: StudentsService;
  let userService: UsersService;

  let idJuzEvaluation: string;
  let idStudentTesting: string;

  const musyrifTesting: CreateUserDto = {
    name: 'musyrifTesting',
    email: 'musyrifTesting@testing6.com',
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

  const juzEvaluationTesting: CreateJuzEvaluationDto = {
    student_id: '',
    juz_number: 1,
    evaluation_date: moment('2025-11-11', 'YYYY-MM-DD').toISOString(),
    notes: 'lulus',
    assessment: Assessment.PASS
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuzEvaluationService, StudentsService, UsersService]
    }).compile();

    jevService = module.get<JuzEvaluationService>(JuzEvaluationService);
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
    expect(jevService).toBeDefined();
    expect(studentService).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should be successful create juz evaluation', async () => {
    juzEvaluationTesting.student_id = idStudentTesting;
    const result = await jevService.create(juzEvaluationTesting);
    idJuzEvaluation = result.id;

    expect(result).toHaveProperty('id');
    expect(result.student_id).toBe(juzEvaluationTesting.student_id);
    expect(result.juz_number).toBe(juzEvaluationTesting.juz_number);
    expect(result.assessment).toBe(juzEvaluationTesting.assessment);
    expect(result.notes).toBe(juzEvaluationTesting.notes);
  });

  it('should be successful find all juz evaluation', async () => {
    const juzEvaluationTesting = {
      student_id: expect.any(String) as string,
      juz_number: 1,
      evaluation_date: '2025-11-11',
      notes: 'lulus',
      assessment: Assessment.PASS
    };

    const paginate = {
      page: 1,
      limit: 10
    };

    const result = await jevService.findAll(paginate);
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result.data).toEqual(
      expect.arrayContaining([expect.objectContaining(juzEvaluationTesting)])
    );
  });

  it('should be successful update juz evaluation', async () => {
    const dto = {
      juz_number: 4
    };

    const result = await jevService.update(idJuzEvaluation, dto);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('juz_number');
    expect(result).toHaveProperty('evaluation_date');
    expect(result).toHaveProperty('notes');
    expect(result).toHaveProperty('assessment');
  });

  it('should be successful delete juz evaluation', async () => {
    const result = await jevService.remove(idJuzEvaluation);
    expect(result).toEqual(true);
  });
});
