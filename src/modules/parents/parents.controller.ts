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
import { ParentsService } from './parents.service';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { ApiResponses } from '../../common/types/response.interface';
import { Parent as ParentInterface } from '../../common/types/parent.interface';
import { Pagination } from '../../common/types/pagination.interface';
import { Validation } from '../../common/validations/validation';
import { ParentValidation } from '../../common/validations/parent-validation';
import { FindParentDto } from './dto/find-parent.dto';

@Controller('parents')
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(
    @Body() createParentDto: CreateParentDto
  ): Promise<ApiResponses<ParentInterface>> {
    try {
      const validateRequest = Validation.validate(
        ParentValidation.CREATE,
        createParentDto
      );

      const parent = await this.parentsService.create(validateRequest);
      return successResponse('Create user successfully', parent);
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
  async findAll(@Query() query: FindParentDto): Promise<
    ApiResponses<{
      data: ParentInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(ParentValidation.LIST, query);

      const parents = await this.parentsService.findAll({
        name: validateRequest.name ?? '',
        gender: validateRequest.gender ?? '',
        student_id: validateRequest.student_id ?? '',
        pagination: {
          page: +validateRequest.page,
          limit: +validateRequest.limit
        }
      });
      return successResponse('OK', parents);
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
  ): Promise<ApiResponses<ParentInterface | null>> {
    try {
      const parent = await this.parentsService.findOne(id);
      return successResponse('OK', parent);
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
    @Body() updateParentDto: UpdateParentDto
  ): Promise<ApiResponses<ParentInterface>> {
    try {
      const validateRequest = Validation.validate(
        ParentValidation.UPDATE,
        updateParentDto
      );

      const parent = await this.parentsService.update(id, validateRequest);
      return successResponse('Parent updated successfully', parent);
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
      const parent = await this.parentsService.remove(id);
      return successResponse('Parent deleted successfully', parent);
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
