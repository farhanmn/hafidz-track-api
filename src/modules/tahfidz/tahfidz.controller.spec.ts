import { Test, TestingModule } from '@nestjs/testing';
import { TahfidzController } from './tahfidz.controller';
import { TahfidzService } from './tahfidz.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { StudentsController } from '../students/students.controller';
import { UserController } from '../users/user.controller';
import { LoggedUser } from '../../common/types/user.interface';
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

describe('TahfidzController', () => {
  let tahfidzController: TahfidzController;
  let studentController: StudentsController;
  let usersController: UserController;
  let usersService: UsersService;

  let tahfidzId: string;
  let loggedUser: LoggedUser;

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

  const tahfidzLogs: CreateTahfidzDto = {
    student_id: '',
    musyrif_id: '',
    class: TahfidzClass.QURAN,
    juz: 1,
    from_surah: 'Al-Fatihah',
    to_surah: 'Al-Fatihah',
    from_ayah: 1,
    to_ayah: 7,
    assessment: Assessment.PASS,
    isRepeat: 0,
    type: TahfidzType.MEMORIZING
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TahfidzController, StudentsController, UserController],
      providers: [TahfidzService, StudentsService, UsersService]
    }).compile();

    tahfidzController = module.get<TahfidzController>(TahfidzController);
    studentController = module.get<StudentsController>(StudentsController);
    usersController = module.get<UserController>(UserController);
    usersService = module.get<UsersService>(UsersService);

    const userMusyrif = await usersController.create(musyrifTesting);
    if (userMusyrif.success) {
      studentTesting.musyrif_id = userMusyrif.data.id;
      tahfidzLogs.musyrif_id = userMusyrif.data.id;

      loggedUser = {
        userId: userMusyrif.data.id,
        email: userMusyrif.data.email,
        role: userMusyrif.data.role
      };
    }

    const userStudent = await studentController.create(studentTesting);
    if (userStudent.success) {
      tahfidzLogs.student_id = userStudent.data.id;
    }
  });

  afterAll(async () => {
    await usersService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(tahfidzController).toBeDefined();
    expect(studentController).toBeDefined();
    expect(usersController).toBeDefined();
  });

  it('should be successfully created tahfidz log', async () => {
    const result = await tahfidzController.create(tahfidzLogs, loggedUser);
    if (result.success) {
      tahfidzId = result.data.id;
    }

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get all tahfidz logs', async () => {
    const paginate = {
      page: 1,
      limit: 10
    };
    const result = await tahfidzController.findAll(paginate);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully update tahfidz log', async () => {
    const dto = {
      assessment: Assessment.FAIL
    };

    const result = await tahfidzController.update(tahfidzId, dto);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully delete tahfidz log', async () => {
    const result = await tahfidzController.remove(tahfidzId);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });
});
