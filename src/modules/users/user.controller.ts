import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  HttpCode,
  HttpException,
  Query,
  Patch
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse
} from '@nestjs/swagger';
import { ResponseSchema } from '../../common/dto/response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { ApiResponses } from '../../common/types/response.interface';
import { Pagination } from '../../common/types/pagination.interface';
import { UserData } from '../../common/types/user.interface';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { FindUserDto } from './dto/find-user.dto';
import { Validation } from '../../common/validations/validation';
import { UserValidation } from '../../common/validations/user-validation';
import { Role } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiOkResponse({
    description: 'Create a new user',
    schema: {
      example: {
        statusCode: 201,
        message: 'Create user successfully',
        data: {
          id: 1,
          name: 'John',
          email: 'mail@mail.com',
          role: 'ADMIN',
          created_at: new Date().toISOString()
        }
      }
    }
  })
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(@Body() dto: CreateUserDto): Promise<ApiResponses<UserData>> {
    try {
      const user = await this.userService.create(dto);
      return successResponse('Create user successfully', user);
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

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of all users',
    type: ResponseSchema,
    isArray: true
  })
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async findAll(@Query() query: FindUserDto): Promise<
    ApiResponses<{
      data: UserData[];
      meta: Pagination;
    }>
  > {
    try {
      const validateRequest = Validation.validate(UserValidation.LIST, query);

      const users = await this.userService.findAll({
        name: validateRequest.name,
        role: validateRequest.role,
        pagination: {
          page: parseInt(validateRequest.page),
          limit: parseInt(validateRequest.limit)
        }
      });
      return successResponse('OK', users);
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

  @ApiOperation({ summary: 'Get user by id' })
  @ApiQuery({ name: 'id', required: true, description: 'Id of user' })
  @ApiResponse({
    status: 200,
    description: 'User data',
    type: ResponseSchema
  })
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async findOne(
    @Param('id') id: string
  ): Promise<ApiResponses<UserData | null>> {
    try {
      const user = await this.userService.findOne(id);
      return successResponse('OK', user);
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

  @ApiOperation({ summary: 'Edit user by id' })
  @ApiBody({ type: UpdateUserDto })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: ResponseSchema
  })
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto
  ): Promise<ApiResponses<UserData>> {
    try {
      const user = await this.userService.update(id, dto);
      return successResponse('User updated successfully', user);
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

  @ApiOperation({ summary: 'Delete user by id' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully'
  })
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string): Promise<ApiResponses<boolean>> {
    try {
      const user = await this.userService.remove(id);
      return successResponse('User deleted successfully', user);
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
