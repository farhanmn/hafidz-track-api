import { Test, TestingModule } from '@nestjs/testing';
import { MurojaahService } from './murojaah.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import {
  Assessment,
  Gender,
  GradeStatus,
  Role,
  StudentStatus
} from '@prisma/client';
import { CreateMurojaahDto } from './dto/create-murojaah.dto';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import * as moment from 'moment-timezone';

describe('MurojaahService', () => {
  let murojaahService: MurojaahService;
  let studentService: StudentsService;
  let usersService: UsersService;

  let murojaahId: string;

  const musyrifTesting: CreateUserDto = {
    name: 'musyrifTesting',
    email: 'musyrifTesting@testing3.com',
    password: 'passwordTesting',
    role: Role.MUSYRIF,
    created_at: new Date()
  };

  const studentTesting: CreateStudentDto = {
    musyrif_id: '',
    gender: Gender.L,
    name: 'studentTesting1',
    grade: '10',
    grade_status: GradeStatus.JUNIOR_HIGH_SCHOOL,
    birth_date: moment('2020-11-11', 'YYYY-MM-DD').toISOString(),
    join_date: moment().toISOString(),
    status: StudentStatus.ACTIVE
  };

  const murojaahLogs: CreateMurojaahDto = {
    student_id: '',
    musyrif_id: '',
    juz: 1,
    from_surah: 'Al-Fatihah',
    to_surah: 'Al-Fatihah',
    from_ayah: 1,
    to_ayah: 7,
    assessment: Assessment.PASS,
    isRepeat: 0
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MurojaahService, StudentsService, UsersService]
    }).compile();

    murojaahService = module.get<MurojaahService>(MurojaahService);
    studentService = module.get<StudentsService>(StudentsService);
    usersService = module.get<UsersService>(UsersService);

    const userMusyrif = await usersService.create(musyrifTesting);
    studentTesting.musyrif_id = userMusyrif.id;
    murojaahLogs.musyrif_id = userMusyrif.id;

    const userStudent = await studentService.create(studentTesting);
    murojaahLogs.student_id = userStudent.id;
  });

  afterAll(async () => {
    await usersService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(murojaahService).toBeDefined();
    expect(studentService).toBeDefined();
    expect(usersService).toBeDefined();
  });

  it('should be successfully created murojaah log', async () => {
    const result = await murojaahService.create(murojaahLogs);
    murojaahId = result.id;

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('student_id');
    expect(result).toHaveProperty('musyrif_id');
    expect(result).toHaveProperty('juz');
    expect(result).toHaveProperty('from_surah');
    expect(result).toHaveProperty('to_surah');
    expect(result).toHaveProperty('from_ayah');
    expect(result).toHaveProperty('to_ayah');
    expect(result).toHaveProperty('assessment');
    expect(result).toHaveProperty('isRepeat');
  });

  it('should be successfully get all murojaah logs', async () => {
    const paginate = {
      page: 1,
      limit: 10
    };
    const result = await murojaahService.findAll(paginate);
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result.data).toEqual(
      expect.arrayContaining([expect.objectContaining(murojaahLogs)])
    );
  });

  it('should be successfully update murojaah log', async () => {
    const dto = {
      assessment: Assessment.FAIL
    };

    const result = await murojaahService.update(murojaahId, dto);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('student_id');
    expect(result).toHaveProperty('musyrif_id');
    expect(result).toHaveProperty('juz');
    expect(result).toHaveProperty('from_surah');
    expect(result).toHaveProperty('to_surah');
    expect(result).toHaveProperty('from_ayah');
    expect(result).toHaveProperty('to_ayah');
    expect(result).toHaveProperty('assessment');
    expect(result).toHaveProperty('isRepeat');
  });

  it('should be successfully delete murojaah log', async () => {
    const result = await murojaahService.remove(murojaahId);
    expect(result).toEqual(true);
  });
});
