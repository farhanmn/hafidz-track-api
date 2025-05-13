import { Controller, Get, HttpException, Param, Query } from '@nestjs/common';
import { RefsService } from './refs.service';
import { errorResponse, successResponse } from '../../utils/response.utils';
import { ApiResponses } from '../../common/types/response.interface';
import { Ayah, Surah } from '@prisma/client';
import { Pagination } from '../../common/types/pagination.interface';
import { Juz as JuzInterface } from '../../common/types/ref.interface';

@Controller('refs')
export class RefsController {
  constructor(private readonly refsService: RefsService) {}

  @Get('juz')
  async findAllJuz(@Query() query: Pagination): Promise<
    ApiResponses<{
      data: JuzInterface[];
      meta: Pagination;
    }>
  > {
    try {
      const juz = await this.refsService.getJuz(query);
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
    @Param('juz_number') juz_number: string,
    @Query() query?: Pagination
  ): Promise<
    ApiResponses<{
      data: Surah[];
      meta: Pagination;
    }>
  > {
    try {
      if (+juz_number < 1 && +juz_number > 30) {
        return errorResponse('No such juz', juz_number);
      }

      const surah = await this.refsService.getSurahByJuz(+juz_number, query);
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
    @Param('surah_id') surah_id: string,
    @Query() query?: Pagination
  ): Promise<
    ApiResponses<{
      data: Ayah[];
      meta: Pagination;
    }>
  > {
    try {
      const ayah = await this.refsService.getAyahBySurah(surah_id, query);
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
