import { Test, TestingModule } from '@nestjs/testing';
import { TahfidzService } from './tahfidz.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import {
  Assessment,
  Gender,
  GradeStatus,
  Role,
  StudentStatus,
  TahfidzClass,
  TahfidzType
} from '@prisma/client';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import * as moment from 'moment-timezone';
import { CreateTahfidzDto } from './dto/create-tahfidz.dto';

describe('TahfidzService', () => {
  let tahfidzService: TahfidzService;
  let studentService: StudentsService;
  let usersService: UsersService;

  let tahfidzId: string;

  const musyrifTesting: CreateUserDto = {
    name: 'musyrifTesting',
    email: 'musyrifTesting@testing4.com',
    password: 'passwordTesting',
    role: Role.MUSYRIF,
    created_at: new Date()
  };

  const studentTesting: CreateStudentDto = {
    musyrif_id: '',
    gender: Gender.L,
    name: 'studentTesting4',
    grade: '10',
    grade_status: GradeStatus.JUNIOR_HIGH_SCHOOL,
    birth_date: moment('2020-11-11', 'YYYY-MM-DD').toISOString(),
    join_date: moment().toISOString(),
    status: StudentStatus.ACTIVE
  };

  const tahfidzLog: CreateTahfidzDto = {
    student_id: '',
    musyrif_id: '',
    class: TahfidzClass.QURAN,
    juz: 1,
    from_surah: 'Al-Fatihah',
    to_surah: 'Al-Fatihah',
    from_ayah: 1,
    to_ayah: 7,
    assessment: Assessment.PASS,
    type: TahfidzType.MEMORIZING,
    isRepeat: 0
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TahfidzService, StudentsService, UsersService]
    }).compile();

    tahfidzService = module.get<TahfidzService>(TahfidzService);
    studentService = module.get<StudentsService>(StudentsService);
    usersService = module.get<UsersService>(UsersService);

    const userMusyrif = await usersService.create(musyrifTesting);
    studentTesting.musyrif_id = userMusyrif.id;
    tahfidzLog.musyrif_id = userMusyrif.id;

    const userStudent = await studentService.create(studentTesting);
    tahfidzLog.student_id = userStudent.id;
  });

  afterAll(async () => {
    await usersService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(tahfidzService).toBeDefined();
    expect(studentService).toBeDefined();
    expect(usersService).toBeDefined();
  });

  it('should be successfully created tahfidz log', async () => {
    const result = await tahfidzService.create(tahfidzLog);
    tahfidzId = result.id;

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

  it('should be successfully get all tahfidz logs', async () => {
    const paginate = {
      page: 1,
      limit: 10
    };
    const result = await tahfidzService.findAll(paginate);
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result.data).toEqual(
      expect.arrayContaining([expect.objectContaining(tahfidzLog)])
    );
  });

  it('should be successfully update tahfidz log', async () => {
    const dto = {
      assessment: Assessment.FAIL
    };

    const result = await tahfidzService.update(tahfidzId, dto);
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

  it('should be successfully delete tahfidz log', async () => {
    const result = await tahfidzService.remove(tahfidzId);
    expect(result).toEqual(true);
  });
});
