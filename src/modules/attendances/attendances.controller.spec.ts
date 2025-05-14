import { Test, TestingModule } from '@nestjs/testing';
import { AttendancesController } from './attendances.controller';
import { AttendancesService } from './attendances.service';
import { StudentsController } from '../students/students.controller';
import { StudentsService } from '../students/students.service';

describe('AttendancesController', () => {
  let attendancesController: AttendancesController;
  let studentController: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendancesController, StudentsController],
      providers: [AttendancesService, StudentsService]
    }).compile();

    attendancesController = module.get<AttendancesController>(
      AttendancesController
    );
    studentController = module.get<StudentsController>(StudentsController);
  });

  it('should be defined', () => {
    expect(attendancesController).toBeDefined();
    expect(studentController).toBeDefined();
  });
});
