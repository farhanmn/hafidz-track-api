import { Test, TestingModule } from '@nestjs/testing';
import { MurojaahController } from './murojaah.controller';
import { MurojaahService } from './murojaah.service';
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
import { CreateMurojaahDto } from './dto/create-murojaah.dto';
import { LoggedUser } from '../../common/types/user.interface';

describe('MurojaahController', () => {
  let murojaahController: MurojaahController;
  let studentController: StudentsController;
  let usersController: UserController;
  let usersService: UsersService;

  let murojaahId: string;
  let loggedUser: LoggedUser;

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
      controllers: [MurojaahController, StudentsController, UserController],
      providers: [MurojaahService, StudentsService, UsersService]
    }).compile();

    murojaahController = module.get<MurojaahController>(MurojaahController);
    studentController = module.get<StudentsController>(StudentsController);
    usersController = module.get<UserController>(UserController);
    usersService = module.get<UsersService>(UsersService);

    const userMusyrif = await usersController.create(musyrifTesting);
    if (userMusyrif.success) {
      studentTesting.musyrif_id = userMusyrif.data.id;
      murojaahLogs.musyrif_id = userMusyrif.data.id;

      loggedUser = {
        userId: userMusyrif.data.id,
        email: userMusyrif.data.email,
        role: userMusyrif.data.role
      };
    }

    const userStudent = await studentController.create(studentTesting);
    if (userStudent.success) {
      murojaahLogs.student_id = userStudent.data.id;
    }
  });

  afterAll(async () => {
    await usersService.deleteTestingUser([musyrifTesting.email]);
  });

  it('should be defined', () => {
    expect(murojaahController).toBeDefined();
    expect(studentController).toBeDefined();
    expect(usersController).toBeDefined();
  });

  it('should be successfully created murojaah log', async () => {
    const result = await murojaahController.create(murojaahLogs, loggedUser);
    if (result.success) {
      murojaahId = result.data.id;
    }

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get all murojaah logs', async () => {
    const paginate = {
      page: 1,
      limit: 10
    };
    const result = await murojaahController.findAll(paginate);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully update murojaah log', async () => {
    const dto = {
      assessment: Assessment.FAIL
    };

    const result = await murojaahController.update(murojaahId, dto);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully delete murojaah log', async () => {
    const result = await murojaahController.remove(murojaahId);
    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });
});
