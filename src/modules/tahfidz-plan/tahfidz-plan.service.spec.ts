import { Test, TestingModule } from '@nestjs/testing';
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

describe('TahfidzPlanService', () => {
  let tpService: TahfidzPlanService;
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
      providers: [TahfidzPlanService, StudentsService, UsersService]
    }).compile();

    tpService = module.get<TahfidzPlanService>(TahfidzPlanService);
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
    expect(tpService).toBeDefined();
    expect(studentService).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should be successful create tahfidz plan', async () => {
    const result = await tpService.create(tahfidzPlanTesting);
    idTahfidzPlan = result.id;

    expect(result).toHaveProperty('id');
    expect(result.student_id).toBe(tahfidzPlanTesting.student_id);
    expect(result.juz_number).toBe(tahfidzPlanTesting.juz_number);
    expect(result.plan_type).toBe(tahfidzPlanTesting.plan_type);
    expect(result.start_ayah).toBe(tahfidzPlanTesting.start_ayah);
    expect(result.end_ayah).toBe(tahfidzPlanTesting.end_ayah);
  });

  it('should be successful find all tahfidz plan', async () => {
    const tpTesting = {
      student_id: expect.any(String) as string,
      juz_number: tahfidzPlanTesting.juz_number,
      start_ayah: tahfidzPlanTesting.start_ayah,
      end_ayah: tahfidzPlanTesting.end_ayah,
      plan_type: tahfidzPlanTesting.plan_type
    };

    const paginate = {
      page: 1,
      limit: 10
    };

    const result = await tpService.findAll(paginate);
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result.data).toEqual(
      expect.arrayContaining([expect.objectContaining(tpTesting)])
    );
  });

  it('should be successful update tahfidz plan', async () => {
    const dto = {
      plan_type: PlanType.SURAH
    };

    const result = await tpService.update(idTahfidzPlan, dto);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('juz_number');
    expect(result).toHaveProperty('plan_type');
  });

  it('should be successful delete tahfidz plan', async () => {
    const result = await tpService.remove(idTahfidzPlan);
    expect(result).toEqual(true);
  });
});
