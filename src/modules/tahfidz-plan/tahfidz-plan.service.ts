import { Injectable } from '@nestjs/common';
import { CreateTahfidzPlanDto } from './dto/create-tahfidz-plan.dto';
import { UpdateTahfidzPlanDto } from './dto/update-tahfidz-plan.dto';

@Injectable()
export class TahfidzPlanService {
  create(createTahfidzPlanDto: CreateTahfidzPlanDto) {
    return 'This action adds a new tahfidzPlan';
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
