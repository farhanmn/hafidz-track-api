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
import { JuzEvaluationService } from './juz-evaluation.service';
import { CreateJuzEvaluationDto } from './dto/create-juz-evaluation.dto';
import { UpdateJuzEvaluationDto } from './dto/update-juz-evaluation.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApiResponses } from '../../common/types/response.interface';
import { JuzEvaluation as JuzEvaluationInterface } from '../../common/types/juz-evaluation.inteface';
import { Validation } from '../../common/validations/validation';
import { JuzEvaluationValidation } from '../../common/validations/juz-evaluation-validation';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { FindJuzEvaluationDto } from './dto/find-juz-evaluation.dto';
import { Pagination } from '../../common/types/pagination.interface';

@Controller('juz-evaluation')
export class JuzEvaluationController {
  constructor(private readonly juzEvaluationService: JuzEvaluationService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('MUSYRIF')
  async create(
    @Body() createJuzEvaluationDto: CreateJuzEvaluationDto
  ): Promise<ApiResponses<JuzEvaluationInterface>> {
    try {
      const validateRequest = Validation.validate(
        JuzEvaluationValidation.CREATE,
        createJuzEvaluationDto
      );

      const juzEvaluation =
        await this.juzEvaluationService.create(validateRequest);

      return successResponse('Successfully add juz evaluation', juzEvaluation);
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
  async findAll(@Query() findJuzEvaluationDto: FindJuzEvaluationDto): Promise<
    ApiResponses<{
      data: JuzEvaluationInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        JuzEvaluationValidation.LIST,
        findJuzEvaluationDto
      );

      const juzEvaluation =
        await this.juzEvaluationService.findAll(validateRequest);

      return successResponse('OK', juzEvaluation);
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
  @Roles('MUSYRIF')
  async findOne(
    @Param('id') id: string
  ): Promise<ApiResponses<JuzEvaluationInterface | null>> {
    try {
      const juzEvaluation = await this.juzEvaluationService.findOne(id);
      return successResponse('OK', juzEvaluation);
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
  @Roles('MUSYRIF')
  async update(
    @Param('id') id: string,
    @Body() updateJuzEvaluationDto: UpdateJuzEvaluationDto
  ): Promise<ApiResponses<JuzEvaluationInterface>> {
    try {
      const validateRequest = Validation.validate(
        JuzEvaluationValidation.UPDATE,
        updateJuzEvaluationDto
      );

      const juzEvaluation = await this.juzEvaluationService.update(
        id,
        validateRequest
      );
      return successResponse(
        'Successfully updated juz evaluation',
        juzEvaluation
      );
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
      const juzEvaluation = await this.juzEvaluationService.remove(id);

      return successResponse(
        'Successfully removed juz evaluation',
        juzEvaluation
      );
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
