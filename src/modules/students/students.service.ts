import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { prismaClient } from '../../application/database';
import { toStudent, toStudentList } from './mappers/student.mapper';
import { Pagination } from '../../common/types/pagination.interface';
import { metaPagination } from '../../utils/response.utils';
import { GradeStatus } from '@prisma/client';
import { beforeSaveDate } from '../../utils/date.utils';

@Injectable()
export class StudentsService {
  async create(createStudentDto: CreateStudentDto) {
    const student = await prismaClient.student.create({
      data: {
        ...createStudentDto,
        birth_date: beforeSaveDate(createStudentDto.birth_date, 1),
        join_date: createStudentDto.join_date
          ? beforeSaveDate(createStudentDto.join_date, 1)
          : beforeSaveDate(new Date().toISOString(), 1)
      }
    });

    return toStudent(student);
  }

  async findAll({
    name,
    musyrif_id,
    grade_status,
    pagination
  }: {
    name?: string;
    musyrif_id?: string;
    grade_status?: string;
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
          : {}),
        ...(grade_status
          ? {
              grade_status: grade_status as GradeStatus
            }
          : {}),
        ...(musyrif_id
          ? {
              musyrif_id
            }
          : {})
      },
      include: {
        MusyrifUser: true,
        Parent: true
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
          : {}),
        ...(grade_status
          ? {
              grade_status: grade_status as GradeStatus
            }
          : {}),
        ...(musyrif_id
          ? {
              musyrif_id
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
    if (updateStudentDto.birth_date) {
      updateStudentDto.birth_date = beforeSaveDate(
        updateStudentDto.birth_date,
        1
      );
    }
    if (updateStudentDto.join_date) {
      updateStudentDto.join_date = beforeSaveDate(
        updateStudentDto.join_date,
        1
      );
    }

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
