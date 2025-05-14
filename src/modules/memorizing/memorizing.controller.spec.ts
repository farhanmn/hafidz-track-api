import { Test, TestingModule } from '@nestjs/testing';
import { MemorizingController } from './memorizing.controller';
import { MemorizingService } from './memorizing.service';

describe('MemorizingController', () => {
  let controller: MemorizingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemorizingController],
      providers: [MemorizingService],
    }).compile();

    controller = module.get<MemorizingController>(MemorizingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
