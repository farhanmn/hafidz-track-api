import { Test, TestingModule } from '@nestjs/testing';
import { TahfidzPlanController } from './tahfidz-plan.controller';
import { TahfidzPlanService } from './tahfidz-plan.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import {
  Gender,
  GradeStatus,
  PlanType,
  Role,
  StudentStatus
} from '@prisma/client';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import * as moment from 'moment-timezone';
import { CreateTahfidzPlanDto } from './dto/create-tahfidz-plan.dto';

describe('TahfidzPlanController', () => {
  let tpController: TahfidzPlanController;
  let studentService: StudentsService;
  let userService: UsersService;

  let idTahfidzPlan: string;

  const musyrifTesting: CreateUserDto = {
    name: 'musyrifTesting',
    email: 'musyrifTesting@testing7.com',
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

  const tahfidzPlanTesting: CreateTahfidzPlanDto = {
    student_id: '',
    plan_type: PlanType.JUZ,
    juz_number: 1,
    start_ayah: 1,
    end_ayah: 5,
    target_date: moment('2025-12-12').toISOString(),
    assigned_by: ''
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TahfidzPlanController],
      providers: [TahfidzPlanService, StudentsService, UsersService]
    }).compile();

    tpController = module.get<TahfidzPlanController>(TahfidzPlanController);
    studentService = module.get<StudentsService>(StudentsService);
    userService = module.get<UsersService>(UsersService);

    const userMusyrif = await userService.create(musyrifTesting);
    studentTesting.musyrif_id = userMusyrif.id;
    tahfidzPlanTesting.assigned_by = userMusyrif.id;

    const student = await studentService.create(studentTesting);
    tahfidzPlanTesting.student_id = student.id;
  });

  afterAll(async () => {
    await userService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(tpController).toBeDefined();
  });

  it('should be successfully create tahfidz plan', async () => {
    const result = await tpController.create(tahfidzPlanTesting);
    if (result.success) {
      idTahfidzPlan = result.data.id;
    }

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get all tahfidz plan', async () => {
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await tpController.findAll(paginate);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully update tahfidz plan', async () => {
    const dto = {
      juz_number: 3
    };
    const result = await tpController.update(idTahfidzPlan, dto);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully delete tahfidz plan', async () => {
    const result = await tpController.remove(idTahfidzPlan);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });
});
