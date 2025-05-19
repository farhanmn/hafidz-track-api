import { Injectable } from '@nestjs/common';
import { CreateTahfidzPlanDto } from './dto/create-tahfidz-plan.dto';
import { UpdateTahfidzPlanDto } from './dto/update-tahfidz-plan.dto';
import { prismaClient } from '../../application/database';
import {
  toTahfidzPlan,
  toTahfidzPlanList
} from './mappers/tahfidz-plan.mapper';
import { FindTahfidzPlanDto } from './dto/find-tahfidz-plan.dto';
import { metaPagination } from '../../utils/response.utils';
import { StudentsService } from '../students/students.service';

@Injectable()
export class TahfidzPlanService {
  constructor(private readonly studentService: StudentsService) {}

  async create(createTahfidzPlanDto: CreateTahfidzPlanDto) {
    const findStudent = await this.studentService.findOne(
      createTahfidzPlanDto.student_id
    );

    if (!findStudent) {
      throw new Error('Student not found');
    }

    const tahfidzPlan = await prismaClient.tahfidzPlan.create({
      data: createTahfidzPlanDto,
      include: {
        TahfidzPlanStudents: true,
        TahfidzPlanMusyrif: true
      }
    });

    return toTahfidzPlan(tahfidzPlan);
  }

  async findAll(findTahfidzPlanDto: FindTahfidzPlanDto) {
    const page = Number(findTahfidzPlanDto?.page) || 1;
    const limit = Number(findTahfidzPlanDto?.limit) || 10;
    const tahfidzPlan = await prismaClient.tahfidzPlan.findMany({
      where: {
        ...(findTahfidzPlanDto.student_id
          ? {
              student_id: findTahfidzPlanDto.student_id
            }
          : {}),
        ...(findTahfidzPlanDto.plan_type
          ? {
              plan_type: findTahfidzPlanDto.plan_type
            }
          : {}),
        ...(findTahfidzPlanDto.target_date
          ? {
              target_date: findTahfidzPlanDto.target_date
            }
          : {})
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        created_at: 'desc'
      }
    });

    const count = await prismaClient.tahfidzPlan.count({
      where: {
        ...(findTahfidzPlanDto.student_id
          ? {
              student_id: findTahfidzPlanDto.student_id
            }
          : {}),
        ...(findTahfidzPlanDto.plan_type
          ? {
              plan_type: findTahfidzPlanDto.plan_type
            }
          : {}),
        ...(findTahfidzPlanDto.target_date
          ? {
              target_date: findTahfidzPlanDto.target_date
            }
          : {})
      }
    });

    return {
      data: toTahfidzPlanList(tahfidzPlan),
      meta: metaPagination(count, page, limit)
    };
  }

  async findOne(id: string) {
    const tahfidzPlan = await prismaClient.tahfidzPlan.findFirst({
      where: {
        id
      },
      include: {
        TahfidzPlanStudents: true,
        TahfidzPlanMusyrif: true,
        TahfidzPlanSurah: true
      }
    });

    if (!tahfidzPlan) {
      return null;
    }

    return toTahfidzPlan(tahfidzPlan);
  }

  async update(id: string, updateTahfidzPlanDto: UpdateTahfidzPlanDto) {
    const tahfidzPlan = await prismaClient.tahfidzPlan.update({
      data: updateTahfidzPlanDto,
      where: {
        id
      },
      include: {
        TahfidzPlanStudents: true,
        TahfidzPlanMusyrif: true,
        TahfidzPlanSurah: true
      }
    });

    return toTahfidzPlan(tahfidzPlan);
  }

  async remove(id: string) {
    const tahfidzPlan = await prismaClient.tahfidzPlan.delete({
      where: {
        id
      }
    });

    if (!tahfidzPlan) {
      return false;
    }

    return true;
  }
}
