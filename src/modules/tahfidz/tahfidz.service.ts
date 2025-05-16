import { Injectable } from '@nestjs/common';
import { CreateTahfidzDto } from './dto/create-tahfidz.dto';
import { UpdateTahfidzDto } from './dto/update-tahfidz.dto';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { prismaClient } from '../../application/database';
import { toTahfidzLogs, toTahfidzLogsList } from './mappers/tahfidz.mapper';
import { FindTahfidzDto } from './dto/find-tahfidz.dto';
import { metaPagination } from '../../utils/response.utils';
import { beforeSaveDate } from '../../utils/date.utils';

@Injectable()
export class TahfidzService {
  constructor(
    private studentService: StudentsService,
    private usersService: UsersService
  ) {}
  async create(createTahfidzDto: CreateTahfidzDto) {
    const findStudent = await this.studentService.findOne(
      createTahfidzDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const findMusyrif = await this.usersService.findOne(
      createTahfidzDto.musyrif_id
    );

    if (!findMusyrif) {
      throw new Error('Musyrif not found');
    }

    const addMemorizing = await prismaClient.tahfidzLogs.create({
      data: {
        ...createTahfidzDto,
        submission_date: createTahfidzDto.submission_date
          ? beforeSaveDate(createTahfidzDto.submission_date, 1)
          : beforeSaveDate(new Date().toISOString(), 1)
      },
      include: {
        TahfidzLogsStudent: true,
        TahfidzLogsMusyrif: true
      }
    });

    return toTahfidzLogs(addMemorizing);
  }

  async findAll(findTahfidzDto: FindTahfidzDto) {
    const page = Number(findTahfidzDto?.page) || 1;
    const limit = Number(findTahfidzDto?.limit) || 10;

    const tahfidzLogs = await prismaClient.tahfidzLogs.findMany({
      where: {
        ...(findTahfidzDto.student_id
          ? {
              student_id: findTahfidzDto.student_id
            }
          : {}),
        ...(findTahfidzDto.musyrif_id
          ? {
              musyrif_id: findTahfidzDto.musyrif_id
            }
          : {}),
        ...(findTahfidzDto.from_surah
          ? {
              from_surah: findTahfidzDto.from_surah
            }
          : {}),
        ...(findTahfidzDto.to_surah
          ? {
              to_surah: findTahfidzDto.to_surah
            }
          : {}),
        ...(findTahfidzDto.juz
          ? {
              juz: +findTahfidzDto.juz
            }
          : {}),
        ...(findTahfidzDto.assessment
          ? {
              assessment: findTahfidzDto.assessment
            }
          : {})
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        submission_date: 'desc'
      }
    });

    const count = await prismaClient.tahfidzLogs.count({
      where: {
        ...(findTahfidzDto.student_id
          ? {
              student_id: findTahfidzDto.student_id
            }
          : {}),
        ...(findTahfidzDto.musyrif_id
          ? {
              musyrif_id: findTahfidzDto.musyrif_id
            }
          : {}),
        ...(findTahfidzDto.from_surah
          ? {
              from_surah: findTahfidzDto.from_surah
            }
          : {}),
        ...(findTahfidzDto.to_surah
          ? {
              to_surah: findTahfidzDto.to_surah
            }
          : {}),
        ...(findTahfidzDto.juz
          ? {
              juz: +findTahfidzDto.juz
            }
          : {}),
        ...(findTahfidzDto.assessment
          ? {
              assessment: findTahfidzDto.assessment
            }
          : {})
      }
    });

    return {
      data: toTahfidzLogsList(tahfidzLogs),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const tahfidzLog = await prismaClient.tahfidzLogs.findUnique({
      where: {
        id
      },
      include: {
        TahfidzLogsStudent: true,
        TahfidzLogsMusyrif: true
      }
    });

    if (!tahfidzLog) {
      return null;
    }

    return toTahfidzLogs(tahfidzLog);
  }

  async update(id: string, updateMemorizingDto: UpdateTahfidzDto) {
    const tahfidzLog = await prismaClient.tahfidzLogs.update({
      data: updateMemorizingDto,
      where: {
        id
      }
    });

    return toTahfidzLogs(tahfidzLog);
  }

  async remove(id: string) {
    const tahfidzLog = await prismaClient.tahfidzLogs.delete({
      where: {
        id
      }
    });

    if (!tahfidzLog) {
      return false;
    }

    return true;
  }
}
