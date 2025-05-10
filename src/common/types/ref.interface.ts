interface Juz {
  index: string;
  verse: {
    start: string;
    end: string;
  };
}

interface Surah {
  index: string;
  name: string;
  verse: object;
  count: number;
  juz: Juz[];
}

interface SurahReq {
  surah_id: string;
  ayah_number: number;
  juz_number: number;
  text: string;
}

interface JuzReq {
  juz: number;
  start_surah: string;
  start_ayah: number;
  end_surah: string;
  end_ayah: number;
}

export { Surah, SurahReq, JuzReq };
