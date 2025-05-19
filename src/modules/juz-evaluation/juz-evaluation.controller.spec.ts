import { Test, TestingModule } from '@nestjs/testing';
import { JuzEvaluationController } from './juz-evaluation.controller';
import { JuzEvaluationService } from './juz-evaluation.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { StudentsController } from '../students/students.controller';
import { UserController } from '../users/user.controller';
import { CreateUserDto } from '../users/dto/create-user.dto';
import {
  Assessment,
  Gender,
  GradeStatus,
  Role,
  StudentStatus
} from '@prisma/client';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import * as moment from 'moment-timezone';
import { CreateJuzEvaluationDto } from './dto/create-juz-evaluation.dto';

describe('JuzEvaluationController', () => {
  let jevController: JuzEvaluationController;
  let studentService: StudentsService;
  let usersService: UsersService;

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
      controllers: [
        JuzEvaluationController,
        StudentsController,
        UserController
      ],
      providers: [JuzEvaluationService, StudentsService, UsersService]
    }).compile();

    jevController = module.get<JuzEvaluationController>(
      JuzEvaluationController
    );
    studentService = module.get<StudentsService>(StudentsService);
    usersService = module.get<UsersService>(UsersService);

    const userMusyrif = await usersService.create(musyrifTesting);
    studentTesting.musyrif_id = userMusyrif.id;

    const student = await studentService.create(studentTesting);
    idStudentTesting = student.id;
  });

  afterAll(async () => {
    await usersService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(jevController).toBeDefined();
  });

  it('should be successfully create juz evaluation', async () => {
    juzEvaluationTesting.student_id = idStudentTesting;
    const result = await jevController.create(juzEvaluationTesting);
    if (result.success) {
      idJuzEvaluation = result.data.id;
    }

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get all juz evaluation', async () => {
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await jevController.findAll(paginate);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully update juz evaluation', async () => {
    const dto = {
      juz_number: 3
    };
    const result = await jevController.update(idJuzEvaluation, dto);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully delete juz evaluation', async () => {
    const result = await jevController.remove(idJuzEvaluation);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });
});
