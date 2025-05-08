import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { User as UserWithPass } from '../../common/types/user.interface';
import { prismaClient } from '../../application/database';
import { toUser, toUserList } from './mappers/user.mapper';
import { Pagination } from '../../common/types/pagination.interface';
import { metaPagination } from '../../utils/response.utils';
import { hash } from '../../utils/crypto.utils';

@Injectable()
export class UsersService {
  async create(
    createUserDto: CreateUserDto
  ): Promise<Omit<User, 'password' | 'salt' | 'updated_at'>> {
    const { pwd, salt } = hash(createUserDto.password);
    const user = await prismaClient.user.create({
      data: {
        ...createUserDto,
        password: pwd,
        salt
      }
    });

    return toUser(user);
  }

  async findAll({
    name,
    pagination
  }: {
    name?: string;
    pagination?: Pagination;
  }): Promise<{
    data: Omit<User, 'password' | 'salt' | 'updated_at'>[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  }> {
    const page = Number(pagination?.page) || 1;
    const limit = Number(pagination?.limit) || 10;
    const users = await prismaClient.user.findMany({
      where: {
        ...(name
          ? {
              name: {
                startsWith: `%${name}%`,
                mode: 'insensitive'
              }
            }
          : {})
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        name: 'asc'
      }
    });

    const count = await prismaClient.user.count({
      where: {
        ...(name
          ? {
              name: {
                startsWith: `%${name}%`,
                mode: 'insensitive'
              }
            }
          : {})
      }
    });

    return {
      data: toUserList(users),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(
    id: string
  ): Promise<Omit<User, 'password' | 'salt' | 'updated_at'> | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    });

    if (!user) {
      return null;
    }

    return toUser(user);
  }

  async findEmail(email: string): Promise<UserWithPass | null> {
    return prismaClient.user.findFirst({
      where: {
        email
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        salt: true,
        role: true,
        created_at: true
      }
    });
  }

  async update(
    id: string,
    updateUserInput: UpdateUserDto
  ): Promise<Omit<User, 'password' | 'salt' | 'updated_at'>> {
    const user = await prismaClient.user.update({
      data: updateUserInput,
      where: {
        id
      }
    });

    return toUser(user);
  }

  async remove(id: string) {
    const user = await prismaClient.user.delete({
      where: {
        id
      }
    });

    if (!user) {
      return false;
    }

    return true;
  }

  async deleteTestingUser(email: string[]) {
    const user = await prismaClient.user.deleteMany({
      where: {
        email: {
          in: email
        }
      }
    });

    if (!user) {
      return false;
    }

    return true;
  }
}
