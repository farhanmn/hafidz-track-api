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
import { MemorizingService } from './memorizing.service';
import { CreateMemorizingDto } from './dto/create-memorizing.dto';
import { UpdateMemorizingDto } from './dto/update-memorizing.dto';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { Validation } from '../../common/validations/validation';
import { MemorizingValidation } from '../../common/validations/memorizing-validation';
import { ApiResponses } from '../../common/types/response.interface';
import { Memorizing as MemorizingInterface } from '../../common/types/memorizing.interface';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { FindMemorizingDto } from './dto/find-memorizing.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { LoggedUser } from '../../common/types/user.interface';
import { Pagination } from '../../common/types/pagination.interface';

@Controller('memorizing')
export class MemorizingController {
  constructor(private readonly memorizingService: MemorizingService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('MUSYRIF')
  async create(
    @Body() createMemorizingDto: CreateMemorizingDto,
    @CurrentUser() user: LoggedUser
  ): Promise<ApiResponses<MemorizingInterface>> {
    try {
      const validateRequest = Validation.validate(MemorizingValidation.CREATE, {
        ...createMemorizingDto,
        musyrif_id: user.userId
      });

      const memorizing = await this.memorizingService.create(validateRequest);
      return successResponse('Record attendance successfully', memorizing);
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
  async findAll(@Query() query: FindMemorizingDto): Promise<
    ApiResponses<{
      data: MemorizingInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(
        MemorizingValidation.LIST,
        query
      );

      const memorizing = await this.memorizingService.findAll(validateRequest);
      return successResponse('OK', memorizing);
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
  ): Promise<ApiResponses<MemorizingInterface | null>> {
    try {
      const memorizing = await this.memorizingService.findOne(id);
      return successResponse('OK', memorizing);
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
    @Body() updateMemorizingDto: UpdateMemorizingDto
  ): Promise<ApiResponses<MemorizingInterface>> {
    try {
      const validateRequest = Validation.validate(
        MemorizingValidation.UPDATE,
        updateMemorizingDto
      );

      const memorizing = await this.memorizingService.update(
        id,
        validateRequest
      );
      return successResponse('Memorizing data update successfully', memorizing);
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
      const memorizing = await this.memorizingService.remove(id);
      return successResponse('OK', memorizing);
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
