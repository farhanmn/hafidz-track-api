import { Test, TestingModule } from '@nestjs/testing';
import { RefsController } from './refs.controller';
import { RefsService } from './refs.service';

describe('RefsController', () => {
  let controller: RefsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefsController],
      providers: [RefsService],
    }).compile();

    controller = module.get<RefsController>(RefsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
