import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { verifyPassword } from '../../utils/user.utils';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User as UserWithPass,
  UserJWTObject
} from '../../common/types/user.interface';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signUp(
    request: RegisterRequest
  ): Promise<Omit<User, 'password' | 'salt' | 'updated_at'>> {
    const user = await this.usersService.findEmail(request.email);

    if (user) {
      throw new Error('Email already exists');
    }

    // const hashPassword = hash(request.password);
    const newUser = {
      ...request,
      password: request.password,
      role: request.role,
      created_at: request.created_at
    };

    return await this.usersService.create(newUser);
  }

  async signIn(request: LoginRequest): Promise<LoginResponse> {
    const user: UserWithPass | null = await this.usersService.findEmail(
      request.email
    );

    if (!user) {
      throw new Error('Invalid email');
    }

    const verifyPass: UserJWTObject | null = verifyPassword(user, {
      email: request.email,
      password: request.password
    });

    if (!verifyPass) {
      throw new UnauthorizedException();
    }

    const token: string = this.jwtService.sign(verifyPass);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
      token
    };
  }
}
