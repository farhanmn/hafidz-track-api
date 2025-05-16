import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  UseGuards,
  Query
} from '@nestjs/common';
import { TahfidzService } from './tahfidz.service';
import { CreateTahfidzDto } from './dto/create-tahfidz.dto';
import { UpdateTahfidzDto } from './dto/update-tahfidz.dto';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { Validation } from '../../common/validations/validation';
import { TahfidzValidation } from '../../common/validations/tahfidz-validation';
import { ApiResponses } from '../../common/types/response.interface';
import { Tahfidz as TahfidzInterface } from '../../common/types/tahfidz.interface';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { FindTahfidzDto } from './dto/find-tahfidz.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { LoggedUser } from '../../common/types/user.interface';
import { Pagination } from '../../common/types/pagination.interface';

@Controller('tahfidz')
export class TahfidzController {
  constructor(private readonly tahfidzService: TahfidzService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MUSYRIF')
  async create(
    @Body() createTahfidzDto: CreateTahfidzDto,
    @CurrentUser() user: LoggedUser
  ): Promise<ApiResponses<TahfidzInterface>> {
    try {
      const validateRequest = Validation.validate(TahfidzValidation.CREATE, {
        ...createTahfidzDto,
        musyrif_id: user.userId
      });

      const tahfidz = await this.tahfidzService.create(validateRequest);
      return successResponse('Record tahfidz successfully', tahfidz);
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
  async findAll(@Query() query: FindTahfidzDto): Promise<
    ApiResponses<{
      data: TahfidzInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        TahfidzValidation.LIST,
        query
      );

      const tahfidz = await this.tahfidzService.findAll(validateRequest);
      return successResponse('OK', tahfidz);
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
  ): Promise<ApiResponses<TahfidzInterface | null>> {
    try {
      const tahfidz = await this.tahfidzService.findOne(id);
      return successResponse('OK', tahfidz);
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
    @Body() updateTahfidzDto: UpdateTahfidzDto
  ): Promise<ApiResponses<TahfidzInterface>> {
    try {
      const validateRequest = Validation.validate(
        TahfidzValidation.UPDATE,
        updateTahfidzDto
      );

      const tahfidz = await this.tahfidzService.update(id, validateRequest);
      return successResponse('Tahfidz data update successfully', tahfidz);
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
      const tahfidz = await this.tahfidzService.remove(id);
      return successResponse('Tahfidz record delete successfully', tahfidz);
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
