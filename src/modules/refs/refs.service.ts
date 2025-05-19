import { Injectable } from '@nestjs/common';
import { prismaClient } from '../../application/database';
import { metaPagination } from '../../utils/response.utils';
import { toAyahList, toJuzList, toSurahList } from './mappers/ref.mapper';
import { Pagination } from '../../common/types/pagination.interface';

@Injectable()
export class RefsService {
  async getJuz(pagination?: Pagination) {
    const page = Number(pagination?.page) || 1;
    const limit = Number(pagination?.limit) || 10;

    const juz = await prismaClient.juz.findMany({
      orderBy: {
        juz: 'asc'
      },
      skip: (page - 1) * limit,
      take: limit
    });

    const count = await prismaClient.juz.count({
      skip: (page - 1) * limit,
      take: limit
    });

    return {
      data: toJuzList(juz),
      meta: metaPagination(count, page, limit)
    };
  }

  async getSurahByJuz(juz: number, pagination?: Pagination) {
    const page = Number(pagination?.page) || 1;
    const limit = Number(pagination?.limit) || 0;

    const surah = await prismaClient.surah.findMany({
      where: {
        juz: {
          has: juz
        }
      },
      orderBy: {
        surah_number: 'asc'
      },
      ...(limit !== 0
        ? {
            skip: (page - 1) * limit,
            take: limit
          }
        : {})
    });

    const count = await prismaClient.surah.count({
      where: {
        juz: {
          has: juz
        }
      },
      ...(limit !== 0
        ? {
            skip: (page - 1) * limit,
            take: limit
          }
        : {})
    });

    return {
      data: toSurahList(surah),
      meta: metaPagination(
        count,
        limit !== 0 && pagination ? pagination.page : 1,
        limit !== 0 && pagination ? pagination.limit : count
      )
    };
  }

  async getAyahBySurah(surahId: string, pagination?: Pagination) {
    const page = Number(pagination?.page) || 1;
    const limit = Number(pagination?.limit) || 0;

    const ayah = await prismaClient.ayah.findMany({
      where: {
        surah_id: surahId
      },
      orderBy: {
        ayah_number: 'asc'
      },
      ...(limit !== 0
        ? {
            skip: (page - 1) * limit,
            take: limit
          }
        : {})
    });

    const count = await prismaClient.ayah.count({
      where: {
        surah_id: surahId
      },
      ...(limit !== 0
        ? {
            skip: (page - 1) * limit,
            take: limit
          }
        : {})
    });

    return {
      data: toAyahList(ayah),
      meta: metaPagination(
        count,
        limit !== 0 && pagination ? pagination.page : 1,
        limit !== 0 && pagination ? pagination.limit : count
      )
    };
  }
}
