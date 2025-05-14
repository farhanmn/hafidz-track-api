import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { prismaClient } from '../../application/database';
import { toAttendace, toAttendanceList } from './mappers/attendance.mapper';
import { FindAttendanceDto } from './dto/find-attendance.dto';
import { metaPagination } from '../../utils/response.utils';
import { StudentsService } from '../students/students.service';
import { beforeSaveDate } from '../../utils/date.utils';

@Injectable()
export class AttendancesService {
  constructor(private studentService: StudentsService) {}
  async create(createAttendanceDto: CreateAttendanceDto) {
    const findStudent = await this.studentService.findOne(
      createAttendanceDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const attendance = await prismaClient.attendance.create({
      data: {
        ...createAttendanceDto,
        date: beforeSaveDate(
          createAttendanceDto.date
            ? createAttendanceDto.date
            : new Date().toISOString(),
          1
        )
      },
      include: {
        AttendanceStudent: true,
        AttendanceMusyrif: true
      }
    });

    return toAttendace(attendance);
  }

  async findAll(findAttendanceDto: FindAttendanceDto) {
    const page = Number(findAttendanceDto?.page) || 1;
    const limit = Number(findAttendanceDto?.limit) || 10;

    const attendance = await prismaClient.attendance.findMany({
      where: {
        ...(findAttendanceDto.student_id
          ? {
              student_id: findAttendanceDto.student_id
            }
          : {}),
        ...(findAttendanceDto.date
          ? {
              date: findAttendanceDto.date
            }
          : {}),
        ...(findAttendanceDto.status
          ? {
              status: findAttendanceDto.status
            }
          : {})
      },
      include: {
        AttendanceStudent: true,
        AttendanceMusyrif: true
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        date: 'desc'
      }
    });

    const count = await prismaClient.attendance.count({
      where: {
        ...(findAttendanceDto.student_id
          ? {
              student_id: findAttendanceDto.student_id
            }
          : {}),
        ...(findAttendanceDto.date
          ? {
              date: findAttendanceDto.date
            }
          : {}),
        ...(findAttendanceDto.status
          ? {
              status: findAttendanceDto.status
            }
          : {})
      }
    });

    return {
      data: toAttendanceList(attendance),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const attendance = await prismaClient.attendance.findUnique({
      where: {
        id
      },
      include: {
        AttendanceStudent: true,
        AttendanceMusyrif: true
      }
    });

    if (!attendance) {
      return null;
    }

    return toAttendace(attendance);
  }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    if (updateAttendanceDto.date) {
      updateAttendanceDto.date = beforeSaveDate(updateAttendanceDto.date, 1);
    }
    const attendance = await prismaClient.attendance.update({
      data: updateAttendanceDto,
      where: {
        id
      },
      include: {
        AttendanceStudent: true,
        AttendanceMusyrif: true
      }
    });

    return toAttendace(attendance);
  }

  async remove(id: string) {
    const attendance = await prismaClient.attendance.delete({
      where: {
        id
      }
    });

    if (!attendance) {
      return false;
    }

    return true;
  }
}
