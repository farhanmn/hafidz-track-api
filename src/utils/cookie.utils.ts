import * as process from 'node:process';
import { Response } from 'express';
import { LoginResponse } from '../common/types/user.interface';

export function setCookie(user: LoginResponse, response: Response) {
  response.cookie('token', user.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  });
}

export function removeCookie(response: Response) {
  response.clearCookie('token', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  });
}
