import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  Query
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { Student as StudentInterface } from '../../common/types/student.interface';
import { ApiResponses } from '../../common/types/response.interface';
import { Pagination } from '../../common/types/pagination.interface';
import { Validation } from '../../common/validations/validation';
import { StudentValidation } from '../../common/validations/student-validation';
import { FindStudentDto } from './dto/find-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(
    @Body() createStudentDto: CreateStudentDto
  ): Promise<ApiResponses<StudentInterface>> {
    try {
      const validateRequest = Validation.validate(
        StudentValidation.CREATE,
        createStudentDto
      );
      const student = await this.studentsService.create(validateRequest);
      return successResponse('Create student successfully', student);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';

      return errorResponse(message);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MUSYRIF')
  async findAll(@Query() query: FindStudentDto): Promise<
    ApiResponses<{
      data: StudentInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        StudentValidation.LIST,
        query
      );

      const students = await this.studentsService.findAll(validateRequest);
      return successResponse('OK', students);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';

      return errorResponse(message);
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MUSYRIF')
  async findOne(
    @Param('id') id: string
  ): Promise<ApiResponses<StudentInterface | null>> {
    try {
      const student = await this.studentsService.findOne(id);
      return successResponse('OK', student);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';

      return errorResponse(message);
    }
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto
  ): Promise<ApiResponses<StudentInterface>> {
    try {
      const validateRequest = Validation.validate(
        StudentValidation.UPDATE,
        updateStudentDto
      );

      const student = await this.studentsService.update(id, validateRequest);
      return successResponse('Student updated successfully', student);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';

      return errorResponse(message);
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string): Promise<ApiResponses<boolean>> {
    try {
      const student = await this.studentsService.remove(id);
      return successResponse('Student deleted successfully', student);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';

      return errorResponse(message);
    }
  }
}
