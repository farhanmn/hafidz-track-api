import { Test, TestingModule } from '@nestjs/testing';
import { MemorizingService } from './memorizing.service';

describe('MemorizingService', () => {
  let service: MemorizingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemorizingService],
    }).compile();

    service = module.get<MemorizingService>(MemorizingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
