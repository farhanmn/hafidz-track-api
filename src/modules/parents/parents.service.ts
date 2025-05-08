import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { prismaClient } from '../../application/database';
import { toParent, toParentList } from './mappers/parent.mapper';
import { Pagination } from '../../common/types/pagination.interface';
import { metaPagination } from '../../utils/response.utils';

@Injectable()
export class ParentsService {
  async create(createParentDto: CreateParentDto) {
    const parent = await prismaClient.parent.create({
      data: createParentDto,
      include: {
        ParentStudent: true
      }
    });

    return toParent(parent);
  }

  async findAll({
    name,
    pagination
  }: {
    name?: string;
    pagination?: Pagination;
  }) {
    const page = Number(pagination?.page) || 1;
    const limit = Number(pagination?.limit) || 10;
    const parents = await prismaClient.parent.findMany({
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
      include: {
        ParentStudent: true
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        name: 'asc'
      }
    });

    const count = await prismaClient.parent.count({
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
      data: toParentList(parents),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const parent = await prismaClient.parent.findUnique({
      where: {
        id
      },
      include: {
        ParentStudent: true
      }
    });

    if (!parent) {
      return null;
    }

    return toParent(parent);
  }

  async update(id: string, updateParentDto: UpdateParentDto) {
    const parent = await prismaClient.parent.update({
      data: updateParentDto,
      where: {
        id
      },
      include: {
        ParentStudent: true
      }
    });

    return toParent(parent);
  }

  async remove(id: string) {
    const parent = await prismaClient.parent.delete({
      where: {
        id
      }
    });

    if (!parent) {
      return false;
    }

    return true;
  }
}
