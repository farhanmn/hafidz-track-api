import { Test, TestingModule } from '@nestjs/testing';
import { TahfidzPlanService } from './tahfidz-plan.service';

describe('TahfidzPlanService', () => {
  let service: TahfidzPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TahfidzPlanService],
    }).compile();

    service = module.get<TahfidzPlanService>(TahfidzPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
