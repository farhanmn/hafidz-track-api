import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
  HttpStatus
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedException)
export class JwtAuthExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const message = exception?.message;

    if (message === 'jwt expired') {
      return response.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: 401,
        message: 'Token expired',
        error: 'Unauthorized'
      });
    }

    return response.status(HttpStatus.UNAUTHORIZED).json({
      statusCode: 401,
      message: 'Invalid token',
      error: 'Unauthorized'
    });
  }
}
