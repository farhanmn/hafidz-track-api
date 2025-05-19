import { Injectable } from '@nestjs/common';
import { CreateJuzEvaluationDto } from './dto/create-juz-evaluation.dto';
import { UpdateJuzEvaluationDto } from './dto/update-juz-evaluation.dto';
import { prismaClient } from '../../application/database';
import {
  toJuzEvaluation,
  toJuzEvaluationList
} from './mappers/juz-evaluation.mapper';
import { FindJuzEvaluationDto } from './dto/find-juz-evaluation.dto';
import { StudentsService } from '../students/students.service';
import { metaPagination } from '../../utils/response.utils';

@Injectable()
export class JuzEvaluationService {
  constructor(private studentService: StudentsService) {}
  async create(createJuzEvaluationDto: CreateJuzEvaluationDto) {
    const findStudent = await this.studentService.findOne(
      createJuzEvaluationDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const juzEvaluation = await prismaClient.juzEvaluation.create({
      data: createJuzEvaluationDto,
      include: {
        EvaluationStudent: true
      }
    });

    return toJuzEvaluation(juzEvaluation);
  }

  async findAll(findJuzEvaluation: FindJuzEvaluationDto) {
    const page = Number(findJuzEvaluation?.page) || 1;
    const limit = Number(findJuzEvaluation?.limit) || 10;

    const juzEvaluation = await prismaClient.juzEvaluation.findMany({
      where: {
        ...(findJuzEvaluation.student_id
          ? {
              student_id: findJuzEvaluation.student_id
            }
          : {}),
        ...(findJuzEvaluation.juz_number
          ? {
              juz_number: +findJuzEvaluation.juz_number
            }
          : {}),
        ...(findJuzEvaluation.evaluation_date
          ? {
              evaluation_date: findJuzEvaluation.evaluation_date
            }
          : {}),
        ...(findJuzEvaluation.assessment
          ? {
              assessment: findJuzEvaluation.assessment
            }
          : {})
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        evaluation_date: 'desc'
      }
    });

    const count = await prismaClient.juzEvaluation.count({
      where: {
        ...(findJuzEvaluation.student_id
          ? {
              student_id: findJuzEvaluation.student_id
            }
          : {}),
        ...(findJuzEvaluation.juz_number
          ? {
              juz_number: +findJuzEvaluation.juz_number
            }
          : {}),
        ...(findJuzEvaluation.evaluation_date
          ? {
              evaluation_date: findJuzEvaluation.evaluation_date
            }
          : {}),
        ...(findJuzEvaluation.assessment
          ? {
              assessment: findJuzEvaluation.assessment
            }
          : {})
      }
    });

    return {
      data: toJuzEvaluationList(juzEvaluation),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const juzEvaluation = await prismaClient.juzEvaluation.findUnique({
      where: {
        id
      },
      include: {
        EvaluationStudent: true
      }
    });

    if (!juzEvaluation) {
      return null;
    }

    return toJuzEvaluation(juzEvaluation);
  }

  async update(id: string, updateJuzEvaluationDto: UpdateJuzEvaluationDto) {
    if (updateJuzEvaluationDto.student_id) {
      const findStudent = await this.studentService.findOne(
        updateJuzEvaluationDto.student_id
      );

      if (!findStudent) {
        throw new Error('Student not found');
      }
    }

    const juzEvaluation = await prismaClient.juzEvaluation.update({
      data: updateJuzEvaluationDto,
      where: {
        id
      },
      include: {
        EvaluationStudent: true
      }
    });

    return toJuzEvaluation(juzEvaluation);
  }

  async remove(id: string) {
    const juzEvaluation = await prismaClient.juzEvaluation.delete({
      where: {
        id
      }
    });

    if (!juzEvaluation) {
      return false;
    }

    return true;
  }
}
