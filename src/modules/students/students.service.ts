import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { prismaClient } from '../../application/database';
import { toStudent, toStudentList } from './mappers/student.mapper';
import { Pagination } from '../../common/types/pagination.interface';
import { metaPagination } from '../../utils/response.utils';

@Injectable()
export class StudentsService {
  async create(createStudentDto: CreateStudentDto) {
    const student = await prismaClient.student.create({
      data: createStudentDto
    });

    return toStudent(student);
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
    const students = await prismaClient.student.findMany({
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
        MusyrifUser: true
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        name: 'asc'
      }
    });

    const count = await prismaClient.student.count({
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
      data: toStudentList(students),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const student = await prismaClient.student.findUnique({
      where: {
        id
      }
    });

    if (!student) {
      return null;
    }

    return toStudent(student);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await prismaClient.student.update({
      data: updateStudentDto,
      where: {
        id
      }
    });

    return toStudent(student);
  }

  async remove(id: string) {
    const student = await prismaClient.student.delete({
      where: {
        id
      }
    });

    if (!student) {
      return false;
    }

    return true;
  }
}
