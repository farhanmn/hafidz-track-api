import { Test, TestingModule } from '@nestjs/testing';
import { TahfidzPlanController } from './tahfidz-plan.controller';
import { TahfidzPlanService } from './tahfidz-plan.service';

describe('TahfidzPlanController', () => {
  let controller: TahfidzPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TahfidzPlanController],
      providers: [TahfidzPlanService],
    }).compile();

    controller = module.get<TahfidzPlanController>(TahfidzPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
