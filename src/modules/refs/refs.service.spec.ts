import { Test, TestingModule } from '@nestjs/testing';
import { RefsService } from './refs.service';

describe('RefsService', () => {
  let service: RefsService;

  let alFatihahId: string;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefsService]
    }).compile();

    service = module.get<RefsService>(RefsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be successfully create ref', async () => {
    const result = await service.getJuz();

    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
  });

  it('should be successfully get surah', async () => {
    const result = await service.getSurahByJuz(1);

    expect(result).toHaveProperty('data');
    expect(result.data).toHaveLength(2);
    alFatihahId = result.data[0].id;

    expect(result).toHaveProperty('meta');
  });

  it('should be successfully get ayah', async () => {
    const result = await service.getAyahBySurah(alFatihahId);

    expect(result).toHaveProperty('data');
    expect(result.data).toHaveLength(7);
    expect(result).toHaveProperty('meta');
  });
});
