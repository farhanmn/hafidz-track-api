import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { prismaClient } from '../../application/database';
import { toStudent, toStudentList } from './mappers/student.mapper';
import { metaPagination } from '../../utils/response.utils';
import { beforeSaveDate } from '../../utils/date.utils';
import { FindStudentDto } from './dto/find-student.dto';

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

  async findAll(findStudentDto: FindStudentDto) {
    const page = Number(findStudentDto?.page) || 1;
    const limit = Number(findStudentDto?.limit) || 10;
    const students = await prismaClient.student.findMany({
      where: {
        ...(findStudentDto.name
          ? {
              name: {
                startsWith: `%${findStudentDto.name}%`,
                mode: 'insensitive'
              }
            }
          : {}),
        ...(findStudentDto.grade_status
          ? {
              grade_status: findStudentDto.grade_status
            }
          : {}),
        ...(findStudentDto.musyrif_id
          ? {
              musyrif_id: findStudentDto.musyrif_id
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
        ...(findStudentDto.name
          ? {
              name: {
                startsWith: `%${findStudentDto.name}%`,
                mode: 'insensitive'
              }
            }
          : {}),
        ...(findStudentDto.grade_status
          ? {
              grade_status: findStudentDto.grade_status
            }
          : {}),
        ...(findStudentDto.musyrif_id
          ? {
              musyrif_id: findStudentDto.musyrif_id
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
