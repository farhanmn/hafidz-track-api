import { PrismaClient, Revelation } from '@prisma/client';
import { JuzReq, Surah, SurahReq } from '../src/common/types/ref.interface';
import { prismaClient } from '../src/application/database';

const prisma = new PrismaClient();

const refJuz: JuzReq[] = [
  {
    juz: 1,
    start_surah: 'Al-Fatihah',
    start_ayah: 1,
    end_surah: 'Al-Baqarah',
    end_ayah: 141
  },
  {
    juz: 2,
    start_surah: 'Al-Baqarah',
    start_ayah: 142,
    end_surah: 'Al-Baqarah',
    end_ayah: 252
  },
  {
    juz: 3,
    start_surah: 'Al-Baqarah',
    start_ayah: 253,
    end_surah: 'Ali Imran',
    end_ayah: 92
  },
  {
    juz: 4,
    start_surah: 'Ali Imran',
    start_ayah: 93,
    end_surah: "An-Nisa'",
    end_ayah: 23
  },
  {
    juz: 5,
    start_surah: "An-Nisa'",
    start_ayah: 24,
    end_surah: "An-Nisa'",
    end_ayah: 147
  },
  {
    juz: 6,
    start_surah: "An-Nisa'",
    start_ayah: 148,
    end_surah: "Al-An'am",
    end_ayah: 110
  },
  {
    juz: 7,
    start_surah: "Al-An'am",
    start_ayah: 111,
    end_surah: "Al-A'raf",
    end_ayah: 87
  },
  {
    juz: 8,
    start_surah: "Al-A'raf",
    start_ayah: 88,
    end_surah: 'Al-Anfal',
    end_ayah: 40
  },
  {
    juz: 9,
    start_surah: 'Al-Anfal',
    start_ayah: 41,
    end_surah: 'At-Taubah',
    end_ayah: 92
  },
  {
    juz: 10,
    start_surah: 'At-Taubah',
    start_ayah: 93,
    end_surah: 'Hud',
    end_ayah: 5
  },
  {
    juz: 11,
    start_surah: 'Hud',
    start_ayah: 6,
    end_surah: 'Yusuf',
    end_ayah: 52
  },
  {
    juz: 12,
    start_surah: 'Yusuf',
    start_ayah: 53,
    end_surah: 'Ibrahim',
    end_ayah: 52
  },
  {
    juz: 13,
    start_surah: 'Ibrahim',
    start_ayah: 52,
    end_surah: 'An-Nahl',
    end_ayah: 128
  },
  {
    juz: 14,
    start_surah: 'Al-Hijr',
    start_ayah: 1,
    end_surah: 'An-Nahl',
    end_ayah: 128
  },
  {
    juz: 15,
    start_surah: "Al-Isra'",
    start_ayah: 1,
    end_surah: 'Al-Kahfi',
    end_ayah: 74
  },
  {
    juz: 16,
    start_surah: 'Al-Kahfi',
    start_ayah: 75,
    end_surah: 'Taha',
    end_ayah: 135
  },
  {
    juz: 17,
    start_surah: 'Al-Anbiya',
    start_ayah: 1,
    end_surah: 'Al-Hajj',
    end_ayah: 78
  },
  {
    juz: 18,
    start_surah: 'Al-Mu’minun',
    start_ayah: 1,
    end_surah: 'Al-Furqan',
    end_ayah: 20
  },
  {
    juz: 19,
    start_surah: 'Al-Furqan',
    start_ayah: 21,
    end_surah: 'An-Naml',
    end_ayah: 55
  },
  {
    juz: 20,
    start_surah: 'An-Naml',
    start_ayah: 56,
    end_surah: 'Al-Ankabut',
    end_ayah: 45
  },
  {
    juz: 21,
    start_surah: 'Al-Ankabut',
    start_ayah: 46,
    end_surah: 'Al-Ahzab',
    end_ayah: 30
  },
  {
    juz: 22,
    start_surah: 'Al-Ahzab',
    start_ayah: 31,
    end_surah: 'Yasin',
    end_ayah: 27
  },
  {
    juz: 23,
    start_surah: 'Yasin',
    start_ayah: 28,
    end_surah: 'Az-Zumar',
    end_ayah: 31
  },
  {
    juz: 24,
    start_surah: 'Az-Zumar',
    start_ayah: 32,
    end_surah: 'Fussilat',
    end_ayah: 46
  },
  {
    juz: 25,
    start_surah: 'Fussilat',
    start_ayah: 47,
    end_surah: 'Al-Jathiyah',
    end_ayah: 37
  },
  {
    juz: 26,
    start_surah: 'Al-Ahqaf',
    start_ayah: 1,
    end_surah: 'Adh-Dhariyat',
    end_ayah: 30
  },
  {
    juz: 27,
    start_surah: 'Adh-Dhariyat',
    start_ayah: 31,
    end_surah: 'Al-Hadid',
    end_ayah: 29
  },
  {
    juz: 28,
    start_surah: 'Al-Mujadilah',
    start_ayah: 1,
    end_surah: 'At-Tahrim',
    end_ayah: 12
  },
  {
    juz: 29,
    start_surah: 'Al-Mulk',
    start_ayah: 1,
    end_surah: 'Al-Mursalat',
    end_ayah: 50
  },
  {
    juz: 30,
    start_surah: 'An-Naba',
    start_ayah: 1,
    end_surah: 'An-Nas',
    end_ayah: 6
  }
];

async function fetchData(i): Promise<Surah> {
  const res = await fetch(
    `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${i + 1}.json`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: Surah = await res.json();
  return data;
}

const main = async () => {
  await prismaClient.juz.createMany({
    data: refJuz
  });

  const surahData = [
    {
      name: 'Al-Fatihah',
      arabic_name: 'الفاتحة',
      ayah_counts: 7,
      revelation_type: Revelation.MECCAN,
      juz: [1],
      surah_number: 1
    },
    {
      name: 'Al-Baqarah',
      arabic_name: 'البقرة',
      ayah_counts: 286,
      revelation_type: Revelation.MEDINAN,
      juz: [1, 2, 3],
      surah_number: 2
    },
    {
      name: 'Ali Imran',
      arabic_name: 'آل عمران',
      ayah_counts: 200,
      revelation_type: Revelation.MEDINAN,
      juz: [3, 4],
      surah_number: 3
    },
    {
      name: "An-Nisa'",
      arabic_name: 'النساء',
      ayah_counts: 176,
      revelation_type: Revelation.MEDINAN,
      juz: [4, 5, 6],
      surah_number: 4
    },
    {
      name: "Al-Ma'idah",
      arabic_name: 'المائدة',
      ayah_counts: 120,
      revelation_type: Revelation.MEDINAN,
      juz: [6, 7],
      surah_number: 5
    },
    {
      name: "Al-An'am",
      arabic_name: 'الأنعام',
      ayah_counts: 165,
      revelation_type: Revelation.MECCAN,
      juz: [7, 8],
      surah_number: 6
    },
    {
      name: "Al-A'raf",
      arabic_name: 'الأعراف',
      ayah_counts: 206,
      revelation_type: Revelation.MECCAN,
      juz: [8, 9],
      surah_number: 7
    },
    {
      name: 'Al-Anfal',
      arabic_name: 'الأنفال',
      ayah_counts: 75,
      revelation_type: Revelation.MEDINAN,
      juz: [9, 10],
      surah_number: 8
    },
    {
      name: 'At-Taubah',
      arabic_name: 'التوبة',
      ayah_counts: 129,
      revelation_type: Revelation.MEDINAN,
      juz: [10, 11],
      surah_number: 115
    },
    {
      name: 'Yunus',
      arabic_name: 'يونس',
      ayah_counts: 109,
      revelation_type: Revelation.MECCAN,
      juz: [11],
      surah_number: 10
    },
    {
      name: 'Hud',
      arabic_name: 'هود',
      ayah_counts: 123,
      revelation_type: Revelation.MECCAN,
      juz: [11, 12],
      surah_number: 11
    },
    {
      name: 'Yusuf',
      arabic_name: 'يوسف',
      ayah_counts: 111,
      revelation_type: Revelation.MECCAN,
      juz: [12, 13],
      surah_number: 12
    },
    {
      name: "Ar-Ra'd",
      arabic_name: 'الرعد',
      ayah_counts: 43,
      revelation_type: Revelation.MEDINAN,
      juz: [13],
      surah_number: 13
    },
    {
      name: 'Ibrahim',
      arabic_name: 'إبراهيم',
      ayah_counts: 52,
      revelation_type: Revelation.MECCAN,
      juz: [13],
      surah_number: 14
    },
    {
      name: 'Al-Hijr',
      arabic_name: 'الحجر',
      ayah_counts: 99,
      revelation_type: Revelation.MECCAN,
      juz: [14],
      surah_number: 15
    },
    {
      name: 'An-Nahl',
      arabic_name: 'النحل',
      ayah_counts: 128,
      revelation_type: Revelation.MECCAN,
      juz: [14],
      surah_number: 16
    },
    {
      name: 'Al-Isra',
      arabic_name: 'الإسراء',
      ayah_counts: 111,
      revelation_type: Revelation.MECCAN,
      juz: [15],
      surah_number: 17
    },
    {
      name: 'Al-Kahfi',
      arabic_name: 'الكهف',
      ayah_counts: 110,
      revelation_type: Revelation.MECCAN,
      juz: [15, 16],
      surah_number: 18
    },
    {
      name: 'Maryam',
      arabic_name: 'مريم',
      ayah_counts: 98,
      revelation_type: Revelation.MECCAN,
      juz: [16],
      surah_number: 19
    },
    {
      name: 'Taha',
      arabic_name: 'طه',
      ayah_counts: 135,
      revelation_type: Revelation.MECCAN,
      juz: [16],
      surah_number: 20
    },
    {
      name: 'Al-Anbiya',
      arabic_name: 'الأنبياء',
      ayah_counts: 112,
      revelation_type: Revelation.MECCAN,
      juz: [17],
      surah_number: 21
    },
    {
      name: 'Al-Hajj',
      arabic_name: 'الحج',
      ayah_counts: 78,
      revelation_type: Revelation.MEDINAN,
      juz: [17],
      surah_number: 22
    },
    {
      name: "Al-Mu'minun",
      arabic_name: 'المؤمنون',
      ayah_counts: 118,
      revelation_type: Revelation.MECCAN,
      juz: [18],
      surah_number: 23
    },
    {
      name: 'An-Nur',
      arabic_name: 'النور',
      ayah_counts: 64,
      revelation_type: Revelation.MEDINAN,
      juz: [18],
      surah_number: 24
    },
    {
      name: 'Al-Furqan',
      arabic_name: 'الفرقان',
      ayah_counts: 77,
      revelation_type: Revelation.MECCAN,
      juz: [18, 19],
      surah_number: 25
    },
    {
      name: "Ash-Shu'ara",
      arabic_name: 'الشعراء',
      ayah_counts: 227,
      revelation_type: Revelation.MECCAN,
      juz: [19],
      surah_number: 26
    },
    {
      name: 'An-Naml',
      arabic_name: 'النمل',
      ayah_counts: 93,
      revelation_type: Revelation.MECCAN,
      juz: [19, 20],
      surah_number: 27
    },
    {
      name: 'Al-Qasas',
      arabic_name: 'القصص',
      ayah_counts: 88,
      revelation_type: Revelation.MECCAN,
      juz: [20],
      surah_number: 28
    },
    {
      name: 'Al-Ankabut',
      arabic_name: 'العنكبوت',
      ayah_counts: 69,
      revelation_type: Revelation.MECCAN,
      juz: [20, 21],
      surah_number: 29
    },
    {
      name: 'Ar-Rum',
      arabic_name: 'الروم',
      ayah_counts: 60,
      revelation_type: Revelation.MECCAN,
      juz: [21],
      surah_number: 30
    },
    {
      name: 'Luqman',
      arabic_name: 'لقمان',
      ayah_counts: 34,
      revelation_type: Revelation.MECCAN,
      juz: [21],
      surah_number: 31
    },
    {
      name: 'As-Sajdah',
      arabic_name: 'السجدة',
      ayah_counts: 30,
      revelation_type: Revelation.MECCAN,
      juz: [21],
      surah_number: 32
    },
    {
      name: 'Al-Ahzab',
      arabic_name: 'الأحزاب',
      ayah_counts: 73,
      revelation_type: Revelation.MEDINAN,
      juz: [21, 22],
      surah_number: 33
    },
    {
      name: "Saba'",
      arabic_name: 'سبأ',
      ayah_counts: 54,
      revelation_type: Revelation.MECCAN,
      juz: [22],
      surah_number: 34
    },
    {
      name: 'Fatir',
      arabic_name: 'فاطر',
      ayah_counts: 45,
      revelation_type: Revelation.MECCAN,
      juz: [22],
      surah_number: 35
    },
    {
      name: 'Yasin',
      arabic_name: 'يس',
      ayah_counts: 83,
      revelation_type: Revelation.MECCAN,
      juz: [22, 23],
      surah_number: 36
    },
    {
      name: 'As-Saffat',
      arabic_name: 'الصافات',
      ayah_counts: 182,
      revelation_type: Revelation.MECCAN,
      juz: [23],
      surah_number: 37
    },
    {
      name: 'Sad',
      arabic_name: 'ص',
      ayah_counts: 88,
      revelation_type: Revelation.MECCAN,
      juz: [23],
      surah_number: 38
    },
    {
      name: 'Az-Zumar',
      arabic_name: 'الزمر',
      ayah_counts: 75,
      revelation_type: Revelation.MECCAN,
      juz: [23, 24],
      surah_number: 39
    },
    {
      name: 'Ghafir',
      arabic_name: 'غافر',
      ayah_counts: 85,
      revelation_type: Revelation.MECCAN,
      juz: [24],
      surah_number: 40
    },
    {
      name: 'Fussilat',
      arabic_name: 'فصلت',
      ayah_counts: 54,
      revelation_type: Revelation.MECCAN,
      juz: [24, 25],
      surah_number: 41
    },
    {
      name: 'Ash-Shuraa',
      arabic_name: 'الشورى',
      ayah_counts: 53,
      revelation_type: Revelation.MECCAN,
      juz: [25],
      surah_number: 42
    },
    {
      name: 'Az-Zukhruf',
      arabic_name: 'الزخرف',
      ayah_counts: 89,
      revelation_type: Revelation.MECCAN,
      juz: [25],
      surah_number: 43
    },
    {
      name: 'Ad-Dukhan',
      arabic_name: 'الدخان',
      ayah_counts: 59,
      revelation_type: Revelation.MECCAN,
      juz: [25],
      surah_number: 44
    },
    {
      name: 'Al-Jathiyah',
      arabic_name: 'الجاثية',
      ayah_counts: 37,
      revelation_type: Revelation.MECCAN,
      juz: [25],
      surah_number: 45
    },
    {
      name: 'Al-Ahqaf',
      arabic_name: 'الأحقاف',
      ayah_counts: 35,
      revelation_type: Revelation.MECCAN,
      juz: [26],
      surah_number: 46
    },
    {
      name: 'Muhammad',
      arabic_name: 'محمد',
      ayah_counts: 38,
      revelation_type: Revelation.MEDINAN,
      juz: [26],
      surah_number: 47
    },
    {
      name: 'Al-Fath',
      arabic_name: 'الفتح',
      ayah_counts: 29,
      revelation_type: Revelation.MEDINAN,
      juz: [26],
      surah_number: 48
    },
    {
      name: 'Al-Hujurat',
      arabic_name: 'الحجرات',
      ayah_counts: 18,
      revelation_type: Revelation.MEDINAN,
      juz: [26],
      surah_number: 49
    },
    {
      name: 'Qaf',
      arabic_name: 'ق',
      ayah_counts: 45,
      revelation_type: Revelation.MECCAN,
      juz: [26],
      surah_number: 50
    },
    {
      name: 'Adh-Dhariyat',
      arabic_name: 'الذاريات',
      ayah_counts: 60,
      revelation_type: Revelation.MECCAN,
      juz: [26, 27],
      surah_number: 51
    },
    {
      name: 'At-Tur',
      arabic_name: 'الطور',
      ayah_counts: 49,
      revelation_type: Revelation.MECCAN,
      juz: [27],
      surah_number: 52
    },
    {
      name: 'An-Najm',
      arabic_name: 'النجم',
      ayah_counts: 62,
      revelation_type: Revelation.MECCAN,
      juz: [27],
      surah_number: 53
    },
    {
      name: 'Al-Qamar',
      arabic_name: 'القمر',
      ayah_counts: 55,
      revelation_type: Revelation.MECCAN,
      juz: [27],
      surah_number: 54
    },
    {
      name: 'Ar-Rahman',
      arabic_name: 'الرحمن',
      ayah_counts: 78,
      revelation_type: Revelation.MEDINAN,
      juz: [27],
      surah_number: 55
    },
    {
      name: "Al-Waqi'ah",
      arabic_name: 'الواقعة',
      ayah_counts: 96,
      revelation_type: Revelation.MECCAN,
      juz: [27],
      surah_number: 56
    },
    {
      name: 'Al-Hadid',
      arabic_name: 'الحديد',
      ayah_counts: 29,
      revelation_type: Revelation.MEDINAN,
      juz: [27],
      surah_number: 57
    },
    {
      name: 'Al-Mujadilah',
      arabic_name: 'المجادلة',
      ayah_counts: 22,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 58
    },
    {
      name: 'Al-Hashr',
      arabic_name: 'الحشر',
      ayah_counts: 24,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 59
    },
    {
      name: 'Al-Mumtahanah',
      arabic_name: 'الممتحنة',
      ayah_counts: 13,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 60
    },
    {
      name: 'As-Saf',
      arabic_name: 'الصف',
      ayah_counts: 14,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 61
    },
    {
      name: "Al-Jumu'ah",
      arabic_name: 'الجمعة',
      ayah_counts: 11,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 62
    },
    {
      name: 'Al-Munafiqun',
      arabic_name: 'المنافقون',
      ayah_counts: 11,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 63
    },
    {
      name: 'At-Taghabun',
      arabic_name: 'التغابن',
      ayah_counts: 18,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 64
    },
    {
      name: 'At-Talaq',
      arabic_name: 'الطلاق',
      ayah_counts: 12,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 65
    },
    {
      name: 'At-Tahrim',
      arabic_name: 'التحريم',
      ayah_counts: 12,
      revelation_type: Revelation.MEDINAN,
      juz: [28],
      surah_number: 66
    },
    {
      name: 'Al-Mulk',
      arabic_name: 'الملك',
      ayah_counts: 30,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 67
    },
    {
      name: 'Al-Qalam',
      arabic_name: 'القلم',
      ayah_counts: 52,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 68
    },
    {
      name: 'Al-Haqqah',
      arabic_name: 'الحاقة',
      ayah_counts: 52,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 69
    },
    {
      name: "Al-Ma'arij",
      arabic_name: 'المعارج',
      ayah_counts: 44,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 70
    },
    {
      name: 'Nuh',
      arabic_name: 'نوح',
      ayah_counts: 28,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 71
    },
    {
      name: 'Al-Jinn',
      arabic_name: 'الجن',
      ayah_counts: 28,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 72
    },
    {
      name: 'Al-Muzzammil',
      arabic_name: 'المزمل',
      ayah_counts: 20,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 73
    },
    {
      name: 'Al-Muddaththir',
      arabic_name: 'المدثر',
      ayah_counts: 56,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 74
    },
    {
      name: 'Al-Qiyamah',
      arabic_name: 'القيامة',
      ayah_counts: 40,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 75
    },
    {
      name: 'Al-Insan',
      arabic_name: 'الإنسان',
      ayah_counts: 31,
      revelation_type: Revelation.MEDINAN,
      juz: [29],
      surah_number: 76
    },
    {
      name: 'Al-Mursalat',
      arabic_name: 'المرسلات',
      ayah_counts: 50,
      revelation_type: Revelation.MECCAN,
      juz: [29],
      surah_number: 77
    },
    {
      name: "An-Naba'",
      arabic_name: 'النبأ',
      ayah_counts: 40,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 78
    },
    {
      name: "An-Nazi'at",
      arabic_name: 'النازعات',
      ayah_counts: 46,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 79
    },
    {
      name: 'Abasa',
      arabic_name: 'عبس',
      ayah_counts: 42,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 80
    },
    {
      name: 'At-Takwir',
      arabic_name: 'التكوير',
      ayah_counts: 29,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 81
    },
    {
      name: 'Al-Infithar',
      arabic_name: 'الإنفطار',
      ayah_counts: 19,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 82
    },
    {
      name: 'Al-Mutaffifin',
      arabic_name: 'المطففين',
      ayah_counts: 36,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 83
    },
    {
      name: 'Al-Inshiqaq',
      arabic_name: 'الإنشقاق',
      ayah_counts: 25,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 84
    },
    {
      name: 'Al-Buruj',
      arabic_name: 'البروج',
      ayah_counts: 22,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 85
    },
    {
      name: 'At-Tariq',
      arabic_name: 'الطارق',
      ayah_counts: 17,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 86
    },
    {
      name: "Al-A'la",
      arabic_name: 'الأعلى',
      ayah_counts: 19,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 87
    },
    {
      name: 'Al-Ghashiyah',
      arabic_name: 'الغاشية',
      ayah_counts: 26,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 88
    },
    {
      name: 'Al-Fajr',
      arabic_name: 'الفجر',
      ayah_counts: 30,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 89
    },
    {
      name: 'Al-Balad',
      arabic_name: 'البلد',
      ayah_counts: 20,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 90
    },
    {
      name: 'Ash-Shams',
      arabic_name: 'الشمس',
      ayah_counts: 15,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 91
    },
    {
      name: 'Al-Lail',
      arabic_name: 'الليل',
      ayah_counts: 21,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 92
    },
    {
      name: 'Ad-Duha',
      arabic_name: 'الضحى',
      ayah_counts: 11,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 93
    },
    {
      name: 'Ash-Sharh',
      arabic_name: 'الشرح',
      ayah_counts: 8,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 94
    },
    {
      name: 'At-Tin',
      arabic_name: 'التين',
      ayah_counts: 8,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 95
    },
    {
      name: 'Al-Alaq',
      arabic_name: 'العلق',
      ayah_counts: 19,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 96
    },
    {
      name: 'Al-Qadr',
      arabic_name: 'القدر',
      ayah_counts: 5,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 97
    },
    {
      name: 'Al-Bayyinah',
      arabic_name: 'البينة',
      ayah_counts: 8,
      revelation_type: Revelation.MEDINAN,
      juz: [30],
      surah_number: 98
    },
    {
      name: 'Az-Zalzalah',
      arabic_name: 'الزلزلة',
      ayah_counts: 8,
      revelation_type: Revelation.MEDINAN,
      juz: [30],
      surah_number: 99
    },
    {
      name: "Al-'Adiyat",
      arabic_name: 'العاديات',
      ayah_counts: 11,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 100
    },
    {
      name: "Al-Qari'ah",
      arabic_name: 'القارعة',
      ayah_counts: 11,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 101
    },
    {
      name: 'Al-Takathur',
      arabic_name: 'التكاثر',
      ayah_counts: 8,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 102
    },
    {
      name: "Al-'Asr",
      arabic_name: 'العصر',
      ayah_counts: 3,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 103
    },
    {
      name: 'Al-Humazah',
      arabic_name: 'الهمزة',
      ayah_counts: 9,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 104
    },
    {
      name: 'Al-Fil',
      arabic_name: 'الفيل',
      ayah_counts: 5,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 105
    },
    {
      name: 'Quraish',
      arabic_name: 'قريش',
      ayah_counts: 4,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 106
    },
    {
      name: "Al-Ma'un",
      arabic_name: 'الماعون',
      ayah_counts: 7,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 107
    },
    {
      name: 'Al-Kauthar',
      arabic_name: 'الكوثر',
      ayah_counts: 3,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 108
    },
    {
      name: 'Al-Kafirun',
      arabic_name: 'الكافرون',
      ayah_counts: 6,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 109
    },
    {
      name: 'An-Nasr',
      arabic_name: 'النصر',
      ayah_counts: 3,
      revelation_type: Revelation.MEDINAN,
      juz: [30],
      surah_number: 110
    },
    {
      name: 'Al-Masad',
      arabic_name: 'المسد',
      ayah_counts: 5,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 111
    },
    {
      name: 'Al-Ikhlas',
      arabic_name: 'الإخلاص',
      ayah_counts: 4,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 112
    },
    {
      name: 'Al-Falaq',
      arabic_name: 'الفلق',
      ayah_counts: 5,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 113
    },
    {
      name: 'An-Nas',
      arabic_name: 'الناس',
      ayah_counts: 6,
      revelation_type: Revelation.MECCAN,
      juz: [30],
      surah_number: 114
    }
  ];

  const insertSurahData = await prismaClient.surah.createManyAndReturn({
    data: surahData
  });

  for (let i = 0; i < 114; i++) {
    const result: Surah = await fetchData(i);
    const idSurah = insertSurahData[i].id;
    const query: SurahReq[] = [];

    result.juz.map((item) => {
      const subQuery: SurahReq[] = [];
      const juzNumber = parseInt(item.index);
      const [, rangeStart] = item.verse.start.split('_');
      const [, rangeEnd] = item.verse.end.split('_');

      for (let i = parseInt(rangeStart, 10); i <= parseInt(rangeEnd, 10); i++) {
        subQuery.push({
          surah_id: idSurah,
          ayah_number: i,
          juz_number: juzNumber,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          text: result.verse[`verse_${i}`]
        });
      }

      query.push(...subQuery);
    });

    await prismaClient.ayah.createMany({
      data: query
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
