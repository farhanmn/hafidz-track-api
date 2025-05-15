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
import { MurojaahService } from './murojaah.service';
import { CreateMurojaahDto } from './dto/create-murojaah.dto';
import { UpdateMurojaahDto } from './dto/update-murojaah.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { LoggedUser } from '../../common/types/user.interface';
import { ApiResponses } from '../../common/types/response.interface';
import { Murojaah as MurojaahInterface } from '../../common/types/murojaah.interface';
import { Validation } from '../../common/validations/validation';
import { MurojaahValidation } from '../../common/validations/murojaah-validation';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { FindMurojaahDto } from './dto/find-murojaah.dto';
import { Pagination } from '../../common/types/pagination.interface';
import { MemorizingValidation } from '../../common/validations/memorizing-validation';

@Controller('murojaah')
export class MurojaahController {
  constructor(private readonly murojaahService: MurojaahService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MUSYRIF')
  async create(
    @Body() createMurojaahDto: CreateMurojaahDto,
    @CurrentUser() user: LoggedUser
  ): Promise<ApiResponses<MurojaahInterface>> {
    try {
      const validateRequest = Validation.validate(MurojaahValidation.CREATE, {
        ...createMurojaahDto,
        musyrif_id: user.userId
      });

      const murojaah = await this.murojaahService.create(validateRequest);
      return successResponse('Record murojaah successfully', murojaah);
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
  async findAll(@Query() query: FindMurojaahDto): Promise<
    ApiResponses<{
      data: MurojaahInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        MurojaahValidation.LIST,
        query
      );

      const murojaah = await this.murojaahService.findAll(validateRequest);
      return successResponse('OK', murojaah);
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
  ): Promise<ApiResponses<MurojaahInterface | null>> {
    try {
      const murojaah = await this.murojaahService.findOne(id);
      return successResponse('OK', murojaah);
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
    @Body() updateMurojaahDto: UpdateMurojaahDto
  ): Promise<ApiResponses<MurojaahInterface>> {
    try {
      const validateRequest = Validation.validate(
        MemorizingValidation.UPDATE,
        updateMurojaahDto
      );

      const murojaah = await this.murojaahService.update(id, validateRequest);
      return successResponse('Murojaah data update successfully', murojaah);
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
      const murojaah = await this.murojaahService.remove(id);
      return successResponse('Murojaah record delete successfully', murojaah);
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
