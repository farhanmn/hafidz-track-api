import { Injectable } from '@nestjs/common';
import { CreateMemorizingDto } from './dto/create-memorizing.dto';
import { UpdateMemorizingDto } from './dto/update-memorizing.dto';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { prismaClient } from '../../application/database';
import {
  toMemorizingLogs,
  toMemorizingLogsList
} from './mappers/memorizing.mapper';
import { FindMemorizingDto } from './dto/find-memorizing.dto';
import { metaPagination } from '../../utils/response.utils';
import { beforeSaveDate } from '../../utils/date.utils';

@Injectable()
export class MemorizingService {
  constructor(
    private studentService: StudentsService,
    private usersService: UsersService
  ) {}
  async create(createMemorizingDto: CreateMemorizingDto) {
    const findStudent = await this.studentService.findOne(
      createMemorizingDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const findMusyrif = await this.usersService.findOne(
      createMemorizingDto.musyrif_id
    );

    if (!findMusyrif) {
      throw new Error('Musyrif not found');
    }

    const addMemorizing = await prismaClient.memorizingLogs.create({
      data: {
        ...createMemorizingDto,
        submission_date: createMemorizingDto.submission_date
          ? beforeSaveDate(createMemorizingDto.submission_date, 1)
          : beforeSaveDate(new Date().toISOString(), 1)
      },
      include: {
        MemorizingLogsStudent: true,
        MemorizingLogsMusyrif: true
      }
    });

    return toMemorizingLogs(addMemorizing);
  }

  async findAll(findMemorizingDto: FindMemorizingDto) {
    const page = Number(findMemorizingDto?.page) || 1;
    const limit = Number(findMemorizingDto?.limit) || 10;

    const memorizingLogs = await prismaClient.memorizingLogs.findMany({
      where: {
        ...(findMemorizingDto.student_id
          ? {
              student_id: findMemorizingDto.student_id
            }
          : {}),
        ...(findMemorizingDto.musyrif_id
          ? {
              musyrif_id: findMemorizingDto.musyrif_id
            }
          : {}),
        ...(findMemorizingDto.from_surah
          ? {
              from_surah: findMemorizingDto.from_surah
            }
          : {}),
        ...(findMemorizingDto.to_surah
          ? {
              to_surah: findMemorizingDto.to_surah
            }
          : {}),
        ...(findMemorizingDto.juz
          ? {
              juz: +findMemorizingDto.juz
            }
          : {}),
        ...(findMemorizingDto.assessment
          ? {
              assessment: findMemorizingDto.assessment
            }
          : {})
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        submission_date: 'desc'
      }
    });

    const count = await prismaClient.memorizingLogs.count({
      where: {
        ...(findMemorizingDto.student_id
          ? {
              student_id: findMemorizingDto.student_id
            }
          : {}),
        ...(findMemorizingDto.musyrif_id
          ? {
              musyrif_id: findMemorizingDto.musyrif_id
            }
          : {}),
        ...(findMemorizingDto.from_surah
          ? {
              from_surah: findMemorizingDto.from_surah
            }
          : {}),
        ...(findMemorizingDto.to_surah
          ? {
              to_surah: findMemorizingDto.to_surah
            }
          : {}),
        ...(findMemorizingDto.juz
          ? {
              juz: +findMemorizingDto.juz
            }
          : {}),
        ...(findMemorizingDto.assessment
          ? {
              assessment: findMemorizingDto.assessment
            }
          : {})
      }
    });

    return {
      data: toMemorizingLogsList(memorizingLogs),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const memorizingLog = await prismaClient.memorizingLogs.findUnique({
      where: {
        id
      },
      include: {
        MemorizingLogsStudent: true,
        MemorizingLogsMusyrif: true
      }
    });

    if (!memorizingLog) {
      return null;
    }

    return toMemorizingLogs(memorizingLog);
  }

  async update(id: string, updateMemorizingDto: UpdateMemorizingDto) {
    const memorizingLog = await prismaClient.memorizingLogs.update({
      data: updateMemorizingDto,
      where: {
        id
      }
    });

    return toMemorizingLogs(memorizingLog);
  }

  async remove(id: string) {
    const memorizingLog = await prismaClient.memorizingLogs.delete({
      where: {
        id
      }
    });

    if (!memorizingLog) {
      return false;
    }

    return true;
  }
}
