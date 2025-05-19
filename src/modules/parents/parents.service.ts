import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { prismaClient } from '../../application/database';
import { toParent, toParentList } from './mappers/parent.mapper';
import { metaPagination } from '../../utils/response.utils';
import { StudentsService } from '../students/students.service';
import { FindParentDto } from './dto/find-parent.dto';

@Injectable()
export class ParentsService {
  constructor(private studentService: StudentsService) {}
  async create(createParentDto: CreateParentDto) {
    const findStudent = await this.studentService.findOne(
      createParentDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const parent = await prismaClient.parent.create({
      data: createParentDto,
      include: {
        ParentStudent: true
      }
    });

    return toParent(parent);
  }

  async findAll(findParentDto: FindParentDto) {
    const page = Number(findParentDto?.page) || 1;
    const limit = Number(findParentDto?.limit) || 10;
    const parents = await prismaClient.parent.findMany({
      where: {
        ...(findParentDto.name
          ? {
              name: {
                startsWith: `%${findParentDto.name}%`,
                mode: 'insensitive'
              }
            }
          : {}),
        ...(findParentDto.student_id
          ? {
              student_id: findParentDto.student_id
            }
          : {}),
        ...(findParentDto.gender
          ? {
              gender: findParentDto.gender
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
        ...(findParentDto.name
          ? {
              name: {
                startsWith: `%${findParentDto.name}%`,
                mode: 'insensitive'
              }
            }
          : {}),
        ...(findParentDto.student_id
          ? {
              student_id: findParentDto.student_id
            }
          : {}),
        ...(findParentDto.gender
          ? {
              gender: findParentDto.gender
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
