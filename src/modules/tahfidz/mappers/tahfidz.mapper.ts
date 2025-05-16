import { Student, TahfidzLogs, User } from '@prisma/client';
import * as moment from 'moment-timezone';

export function toTahfidzLogs(
  tahfidz: TahfidzLogs & { TahfidzLogsStudent?: Student | null } & {
    TahfidzLogsMusyrif?: User | null;
  }
) {
  return {
    id: tahfidz.id,
    student_id: tahfidz.student_id,
    musyrif_id: tahfidz.musyrif_id,
    class: tahfidz.class,
    juz: tahfidz.juz,
    from_surah: tahfidz.from_surah,
    from_ayah: tahfidz.from_ayah,
    to_surah: tahfidz.to_surah,
    to_ayah: tahfidz.to_ayah,
    submission_date: moment(tahfidz.submission_date).format('YYYY-MM-DD'),
    assessment: tahfidz.assessment,
    notes: tahfidz.notes,
    isRepeat: tahfidz.isRepeat,
    type: tahfidz.type,
    created_at: tahfidz.created_at,
    Student: tahfidz.TahfidzLogsStudent
      ? {
          id: tahfidz.TahfidzLogsStudent.id,
          name: tahfidz.TahfidzLogsStudent.name,
          gender: tahfidz.TahfidzLogsStudent.gender,
          grade: tahfidz.TahfidzLogsStudent.grade,
          grade_status: tahfidz.TahfidzLogsStudent.grade_status,
          status: tahfidz.TahfidzLogsStudent.status
        }
      : null,
    Musyrif: tahfidz.TahfidzLogsMusyrif
      ? {
          id: tahfidz.TahfidzLogsMusyrif.id,
          name: tahfidz.TahfidzLogsMusyrif.name,
          email: tahfidz.TahfidzLogsMusyrif.email
        }
      : null
  };
}

export function toTahfidzLogsList(
  tahfidz: TahfidzLogs[] & {
    TahfidzLogsStudent?: Student | null;
  } & {
    TahfidzLogsMusyrif?: User | null;
  }
) {
  return tahfidz.map(toTahfidzLogs);
}
