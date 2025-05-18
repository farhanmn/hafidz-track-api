import { Test, TestingModule } from '@nestjs/testing';
import { JuzEvaluationService } from './juz-evaluation.service';

describe('JuzEvaluationService', () => {
  let service: JuzEvaluationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuzEvaluationService],
    }).compile();

    service = module.get<JuzEvaluationService>(JuzEvaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
