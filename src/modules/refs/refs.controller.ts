import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { RefsService } from './refs.service';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { ApiResponses } from '../../common/types/response.interface';
import { Ayah, Juz, Surah } from '@prisma/client';

@Controller('refs')
export class RefsController {
  constructor(private readonly refsService: RefsService) {}

  @Get('juz')
  async findAllJuz(): Promise<ApiResponses<Juz[]>> {
    try {
      const juz = await this.refsService.getJuz();
      return successResponse('Get all juz', juz);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';

      return errorResponse(message);
    }
  }

  @Get('surah/:juz_number')
  async findSurahByJuz(
    @Param('juz_number') juz_number: number
  ): Promise<ApiResponses<Surah[]>> {
    try {
      const surah = await this.refsService.getSurahByJuz(+juz_number);
      return successResponse('Get surah by juz', surah);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';
      return errorResponse(message);
    }
  }

  @Get('ayah/:surah_id')
  async findAyahBySurah(
    @Param('surah_id') surah_id: string
  ): Promise<ApiResponses<Ayah[]>> {
    try {
      const ayah = await this.refsService.getAyahBySurah(surah_id);
      return successResponse('Get ayah by surah', ayah);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Internal Server Error';
      return errorResponse(message);
    }
  }
}
