interface JuzType {
  index: string;
  verse: {
    start: string;
    end: string;
  };
}

interface SurahType {
  index: string;
  name: string;
  verse: object;
  count: number;
  juz: JuzType[];
}

interface SurahTypeReq {
  surah_id: string;
  ayah_number: number;
  juz_number: number;
  text: string;
}

interface JuzTypeReq {
  juz: number;
  start_surah: string;
  start_ayah: number;
  end_surah: string;
  end_ayah: number;
}

interface Juz {
  id: string;
  juz: number;
  start_surah: string;
  start_ayah: number;
  end_surah: string;
  end_ayah: number;
}

export { SurahType, SurahTypeReq, JuzTypeReq, Juz };
