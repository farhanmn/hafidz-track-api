import { match } from './crypto';
import { config } from 'dotenv';
import { LoginRequest, User, UserJWTObject } from '../common/models/user';
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
