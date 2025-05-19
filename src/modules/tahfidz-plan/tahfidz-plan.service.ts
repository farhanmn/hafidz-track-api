import { Injectable } from '@nestjs/common';
import { CreateTahfidzPlanDto } from './dto/create-tahfidz-plan.dto';
import { UpdateTahfidzPlanDto } from './dto/update-tahfidz-plan.dto';
import { prismaClient } from '../../application/database';
import { toTahfidzPlan } from './mappers/tahfidz-plan.mapper';

@Injectable()
export class TahfidzPlanService {
  async create(createTahfidzPlanDto: CreateTahfidzPlanDto) {
    const tahfidzPlan = await prismaClient.tahfidzPlan.create({
      data: createTahfidzPlanDto,
      include: {
        TahfidzPlanStudents: true,
        TahfidzPlanMusyrif: true
      }
    });

    return toTahfidzPlan(tahfidzPlan);
  }

  findAll() {
    return `This action returns all tahfidzPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tahfidzPlan`;
  }

  update(id: number, updateTahfidzPlanDto: UpdateTahfidzPlanDto) {
    return `This action updates a #${id} tahfidzPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} tahfidzPlan`;
  }
}
