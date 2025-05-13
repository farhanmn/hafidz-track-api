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
import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Validation } from '../../common/validations/validation';
import { AttendanceValidation } from '../../common/validations/attendance-validation';
import { Attendance as AttendanceInterface } from '../../common/types/attendance.interface';
import { ApiResponses } from '../../common/types/response.interface';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { FindAttendanceDto } from './dto/find-attendance.dto';
import { Pagination } from '../../common/types/pagination.interface';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { LoggedUser } from '../../common/types/user.interface';

@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MUSYRIF')
  async create(
    @Body() createAttendanceDto: CreateAttendanceDto,
    @CurrentUser() user: LoggedUser
  ): Promise<ApiResponses<AttendanceInterface>> {
    try {
      const validateRequest = Validation.validate(AttendanceValidation.CREATE, {
        ...createAttendanceDto,
        recorded_by: user.userId
      });

      const attendance = await this.attendancesService.create(validateRequest);
      return successResponse('Record attendance successfully', attendance);
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
  async findAll(@Query() findAttendanceDto: FindAttendanceDto): Promise<
    ApiResponses<{
      data: AttendanceInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        AttendanceValidation.LIST,
        findAttendanceDto
      );

      const attendances =
        await this.attendancesService.findAll(validateRequest);
      return successResponse('OK', attendances);
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
  ): Promise<ApiResponses<AttendanceInterface | null>> {
    try {
      const attendance = await this.attendancesService.findOne(id);
      return successResponse('OK', attendance);
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
  @Roles('ADMIN', 'MUSYRIF')
  async update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto
  ): Promise<ApiResponses<AttendanceInterface>> {
    try {
      const validateRequest = Validation.validate(
        AttendanceValidation.UPDATE,
        updateAttendanceDto
      );

      const attendance = await this.attendancesService.update(
        id,
        validateRequest
      );
      return successResponse('Attendance updated successfully', attendance);
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
  @Roles('ADMIN', 'MUSYRIF')
  async remove(@Param('id') id: string): Promise<ApiResponses<boolean>> {
    try {
      const attendance = await this.attendancesService.remove(id);
      return successResponse('Attendance deleted successfully', attendance);
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
