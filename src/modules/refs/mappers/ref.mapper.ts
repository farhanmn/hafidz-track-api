import { Ayah, Juz, Surah } from '@prisma/client';

export function toJuz(juz: Juz) {
  return {
    id: juz.id,
    juz: juz.juz,
    start_surah: juz.start_surah,
    start_ayah: juz.start_ayah,
    end_surah: juz.end_surah,
    end_ayah: juz.end_ayah
  };
}

export function toJuzList(juz: Juz[]) {
  return juz.map(toJuz);
}

export function toSurah(surah: Surah) {
  return {
    id: surah.id,
    name: surah.name,
    surah_number: surah.surah_number,
    arabic_name: surah.arabic_name,
    ayah_counts: surah.ayah_counts,
    revelation_type: surah.revelation_type,
    juz: surah.juz
  };
}

export function toSurahList(surahs: Surah[]) {
  return surahs.map(toSurah);
}

export function toAyah(ayah: Ayah) {
  return {
    id: ayah.id,
    surah_id: ayah.surah_id,
    ayah_number: ayah.ayah_number,
    juz_number: ayah.juz_number,
    text: ayah.text
  };
}

export function toAyahList(ayahs: Ayah[]) {
  return ayahs.map(toAyah);
}
