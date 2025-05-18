import { Test, TestingModule } from '@nestjs/testing';
import { JuzEvaluationController } from './juz-evaluation.controller';
import { JuzEvaluationService } from './juz-evaluation.service';

describe('JuzEvaluationController', () => {
  let controller: JuzEvaluationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuzEvaluationController],
      providers: [JuzEvaluationService],
    }).compile();

    controller = module.get<JuzEvaluationController>(JuzEvaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
