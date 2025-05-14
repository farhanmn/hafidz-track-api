import { Test, TestingModule } from '@nestjs/testing';
import { AttendancesService } from './attendances.service';
import { StudentsService } from '../students/students.service';

describe('AttendancesService', () => {
  let attendancesService: AttendancesService;
  let studentService: StudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendancesService, StudentsService]
    }).compile();

    attendancesService = module.get<AttendancesService>(AttendancesService);
    studentService = module.get<StudentsService>(StudentsService);
  });

  it('should be defined', () => {
    expect(attendancesService).toBeDefined();
    expect(studentService).toBeDefined();
  });
});
