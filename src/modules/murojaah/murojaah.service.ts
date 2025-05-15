import { Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { CreateMurojaahDto } from './dto/create-murojaah.dto';
import { prismaClient } from '../../application/database';
import { beforeSaveDate } from '../../utils/date.utils';
import { toMurojaahLogs, toMurojaahLogsList } from './mappers/murojaah.mapper';
import { FindMurojaahDto } from './dto/find-murojaah.dto';
import { metaPagination } from '../../utils/response.utils';
import { UpdateMurojaahDto } from './dto/update-murojaah.dto';

@Injectable()
export class MurojaahService {
  constructor(
    private studentService: StudentsService,
    private usersService: UsersService
  ) {}
  async create(createMurojaahDto: CreateMurojaahDto) {
    const findStudent = await this.studentService.findOne(
      createMurojaahDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const findMusyrif = await this.usersService.findOne(
      createMurojaahDto.musyrif_id
    );

    if (!findMusyrif) {
      throw new Error('Musyrif not found');
    }

    const addMurojaah = await prismaClient.murojaahLogs.create({
      data: {
        ...createMurojaahDto,
        submission_date: createMurojaahDto.submission_date
          ? beforeSaveDate(createMurojaahDto.submission_date, 1)
          : beforeSaveDate(new Date().toISOString(), 1)
      },
      include: {
        MurojaahLogsStudent: true,
        MurojaahLogsMusyrif: true
      }
    });

    return toMurojaahLogs(addMurojaah);
  }

  async findAll(findMurojaahDto: FindMurojaahDto) {
    const page = Number(findMurojaahDto?.page) || 1;
    const limit = Number(findMurojaahDto?.limit) || 10;

    const murojaahLogs = await prismaClient.murojaahLogs.findMany({
      where: {
        ...(findMurojaahDto.student_id
          ? {
              student_id: findMurojaahDto.student_id
            }
          : {}),
        ...(findMurojaahDto.musyrif_id
          ? {
              musyrif_id: findMurojaahDto.musyrif_id
            }
          : {}),
        ...(findMurojaahDto.from_surah
          ? {
              from_surah: findMurojaahDto.from_surah
            }
          : {}),
        ...(findMurojaahDto.to_surah
          ? {
              to_surah: findMurojaahDto.to_surah
            }
          : {}),
        ...(findMurojaahDto.juz
          ? {
              juz: +findMurojaahDto.juz
            }
          : {}),
        ...(findMurojaahDto.assessment
          ? {
              assessment: findMurojaahDto.assessment
            }
          : {})
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        submission_date: 'desc'
      }
    });

    const count = await prismaClient.murojaahLogs.count({
      where: {
        ...(findMurojaahDto.student_id
          ? {
              student_id: findMurojaahDto.student_id
            }
          : {}),
        ...(findMurojaahDto.musyrif_id
          ? {
              musyrif_id: findMurojaahDto.musyrif_id
            }
          : {}),
        ...(findMurojaahDto.from_surah
          ? {
              from_surah: findMurojaahDto.from_surah
            }
          : {}),
        ...(findMurojaahDto.to_surah
          ? {
              to_surah: findMurojaahDto.to_surah
            }
          : {}),
        ...(findMurojaahDto.juz
          ? {
              juz: +findMurojaahDto.juz
            }
          : {}),
        ...(findMurojaahDto.assessment
          ? {
              assessment: findMurojaahDto.assessment
            }
          : {})
      }
    });

    return {
      data: toMurojaahLogsList(murojaahLogs),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const murojaahLog = await prismaClient.murojaahLogs.findUnique({
      where: {
        id
      },
      include: {
        MurojaahLogsStudent: true,
        MurojaahLogsMusyrif: true
      }
    });

    if (!murojaahLog) {
      return null;
    }

    return toMurojaahLogs(murojaahLog);
  }

  async update(id: string, updateMurojaahDto: UpdateMurojaahDto) {
    const murojaahLog = await prismaClient.murojaahLogs.update({
      data: updateMurojaahDto,
      where: {
        id
      }
    });

    return toMurojaahLogs(murojaahLog);
  }

  async remove(id: string) {
    const murojaahLog = await prismaClient.murojaahLogs.delete({
      where: {
        id
      }
    });

    if (!murojaahLog) {
      return false;
    }

    return true;
  }
}
