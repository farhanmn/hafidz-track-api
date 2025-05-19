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
import { TahfidzPlanService } from './tahfidz-plan.service';
import { CreateTahfidzPlanDto } from './dto/create-tahfidz-plan.dto';
import { UpdateTahfidzPlanDto } from './dto/update-tahfidz-plan.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApiResponses } from '../../common/types/response.interface';
import { TahfidzPlan as TahfidzPlanInterface } from '../../common/types/tahfidz-plan.inteface';
import { Validation } from '../../common/validations/validation';
import { TahfidzPlanValidation } from '../../common/validations/tahfidz-plan-validation';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { FindTahfidzPlanDto } from './dto/find-tahfidz-plan.dto';
import { Pagination } from '../../common/types/pagination.interface';

@Controller('tahfidz-plan')
export class TahfidzPlanController {
  constructor(private readonly tahfidzPlanService: TahfidzPlanService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MUSYRIF')
  async create(
    @Body() createTahfidzPlanDto: CreateTahfidzPlanDto
  ): Promise<ApiResponses<TahfidzPlanInterface>> {
    try {
      const validateRequest = Validation.validate(
        TahfidzPlanValidation.CREATE,
        createTahfidzPlanDto
      );

      const tahfidzPlan = await this.tahfidzPlanService.create(validateRequest);

      return successResponse('Successfully add tahfidz plan', tahfidzPlan);
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
  async findAll(@Query() findTahfidzPlanDto: FindTahfidzPlanDto): Promise<
    ApiResponses<{
      data: TahfidzPlanInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        TahfidzPlanValidation.LIST,
        findTahfidzPlanDto
      );

      const tahfidzPlan =
        await this.tahfidzPlanService.findAll(validateRequest);
      return successResponse('OK', tahfidzPlan);
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
  ): Promise<ApiResponses<TahfidzPlanInterface | null>> {
    try {
      const tahfidzPlan = await this.tahfidzPlanService.findOne(id);
      return successResponse('OK', tahfidzPlan);
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
    @Body() updateTahfidzPlanDto: UpdateTahfidzPlanDto
  ): Promise<ApiResponses<TahfidzPlanInterface>> {
    try {
      const validateRequest = Validation.validate(
        TahfidzPlanValidation.UPDATE,
        updateTahfidzPlanDto
      );

      const tahfidzPlan = await this.tahfidzPlanService.update(
        id,
        validateRequest
      );
      return successResponse('Successfully update tahfidz plan', tahfidzPlan);
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
      const tahfidzPlan = await this.tahfidzPlanService.remove(id);
      return successResponse('Successfully delete tahfidz plan', tahfidzPlan);
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
