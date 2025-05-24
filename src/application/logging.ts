import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request } from 'express';
import { logger } from '../utils/logger.utils';

@Injectable()
export class RestLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { method, url, body, query, params } = req;

    let finalResBody;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (body?.password) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      finalResBody = { ...body, password: '******' };
    }
    finalResBody = JSON.stringify(finalResBody);

    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - now;
        let parameter: string = '';
        if (Object.keys(query).length > 0) {
          parameter = `| query: ${JSON.stringify(query)} `;
        }
        if (Object.keys(params).length > 0) {
          parameter = parameter + `| params: ${JSON.stringify(params)} `;
        }
        if (finalResBody) {
          parameter = parameter + `| body: ${finalResBody} `;
        }

        logger.info(
          `${method} ${url} ${parameter}| response-time: ${duration}ms`
        );
      })
    );
  }
}
