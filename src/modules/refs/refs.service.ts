import { Injectable } from '@nestjs/common';
import { prismaClient } from '../../application/database';

@Injectable()
export class RefsService {
  getJuz() {
    return prismaClient.juz.findMany({
      orderBy: {
        juz: 'asc'
      }
    });
  }

  getSurahByJuz(juz: number) {
    return prismaClient.surah.findMany({
      where: {
        juz: {
          has: juz
        }
      },
      orderBy: {
        surah_number: 'asc'
      }
    });
  }

  getAyahBySurah(surahId: string) {
    return prismaClient.ayah.findMany({
      where: {
        surah_id: surahId
      },
      orderBy: {
        ayah_number: 'asc'
      }
    });
  }
}
