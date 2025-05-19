import { Test, TestingModule } from '@nestjs/testing';
import { RefsController } from './refs.controller';
import { RefsService } from './refs.service';

describe('RefsController', () => {
  let controller: RefsController;

  let alFatihahId: string;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefsController],
      providers: [RefsService]
    }).compile();

    controller = module.get<RefsController>(RefsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be successfully get juz', async () => {
    const paginate = {
      page: 1,
      limit: 5
    };
    const result = await controller.findAllJuz(paginate);

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');
  });

  it('should be successfully get surah', async () => {
    const result = await controller.findSurahByJuz('1');

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');

    if (result.success) {
      expect(result.data.data).toHaveLength(2);
      alFatihahId = result.data.data[0].id;
    }
  });

  it('should be successfully get ayah', async () => {
    const result = await controller.findAyahBySurah(alFatihahId);

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('data');

    if (result.success) {
      expect(result.data.data).toHaveLength(7);
    }
  });
});
