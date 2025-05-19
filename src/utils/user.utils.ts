import { match } from './crypto.utils';
import { config } from 'dotenv';
import {
  LoginRequest,
  User,
  UserJWTObject
} from '../common/types/user.interface';
config();

const verifyPassword = (
  userData: User,
  loginData: LoginRequest
): UserJWTObject | null => {
  if (!userData) {
    return null;
  }

  if (match(loginData.password, userData.password, userData.salt)) {
    return {
      id: userData.id,
      sub: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role
    };
  }
  return null;
};

export { verifyPassword };
