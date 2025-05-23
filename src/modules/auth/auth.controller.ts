import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Response as Res
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { ApiResponses } from '../../common/types/response.interface';
import { UserData } from '../../common/types/user.interface';
import { Validation } from '../../common/validations/validation';
import { UserValidation } from '../../common/validations/user-validation';
import * as process from 'node:process';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a user' })
  @ApiBody({ type: registerDto })
  @ApiResponse({
    status: 201,
    description: 'User registered'
  })
  async register(@Body() dto: registerDto): Promise<ApiResponses<UserData>> {
    try {
      const validateRequest = Validation.validate(UserValidation.CREATE, dto);
      const user = await this.authService.signUp(validateRequest);
      return successResponse('CREATED', user);
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

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: loginDto })
  @ApiResponse({
    status: 200,
    description: 'User login'
  })
  async login(
    @Body() dto: loginDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<
    ApiResponses<{
      id: string;
      email: string;
      name: string;
      token: string;
    }>
  > {
    try {
      const validateRequest = Validation.validate(UserValidation.LOGIN, dto);
      const user = await this.authService.signIn(validateRequest);

      response.cookie('token', user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000
      });
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

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Logout a user' })
  @ApiBody({ type: loginDto })
  @ApiResponse({
    status: 200,
    description: 'User logout'
  })
  logout(@Res({ passthrough: true }) response: Response): ApiResponses<{
    message: string;
  }> {
    response.clearCookie('token');
    return successResponse('OK', { message: 'Logged out' });
  }
}
