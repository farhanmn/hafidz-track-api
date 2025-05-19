import { Module } from '@nestjs/common';
import { TahfidzPlanService } from './tahfidz-plan.service';
import { TahfidzPlanController } from './tahfidz-plan.controller';

@Module({
  controllers: [TahfidzPlanController],
  providers: [TahfidzPlanService],
})
export class TahfidzPlanModule {}
