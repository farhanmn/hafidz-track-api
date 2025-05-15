import { MurojaahLogs, Student, User } from '@prisma/client';
import * as moment from 'moment-timezone';

export function toMurojaahLogs(
  murojaah: MurojaahLogs & { MurojaahLogsStudent?: Student | null } & {
    MurojaahLogsMusyrif?: User | null;
  }
) {
  return {
    id: murojaah.id,
    student_id: murojaah.student_id,
    musyrif_id: murojaah.musyrif_id,
    juz: murojaah.juz,
    from_surah: murojaah.from_surah,
    from_ayah: murojaah.from_ayah,
    to_surah: murojaah.to_surah,
    to_ayah: murojaah.to_ayah,
    submission_date: moment(murojaah.submission_date).format('YYYY-MM-DD'),
    assessment: murojaah.assessment,
    notes: murojaah.notes,
    isRepeat: murojaah.isRepeat,
    created_at: murojaah.created_at,
    Student: murojaah.MurojaahLogsStudent
      ? {
          id: murojaah.MurojaahLogsStudent.id,
          name: murojaah.MurojaahLogsStudent.name,
          gender: murojaah.MurojaahLogsStudent.gender,
          grade: murojaah.MurojaahLogsStudent.grade,
          grade_status: murojaah.MurojaahLogsStudent.grade_status,
          status: murojaah.MurojaahLogsStudent.status
        }
      : null,
    Musyrif: murojaah.MurojaahLogsMusyrif
      ? {
          id: murojaah.MurojaahLogsMusyrif.id,
          name: murojaah.MurojaahLogsMusyrif.name,
          email: murojaah.MurojaahLogsMusyrif.email
        }
      : null
  };
}

export function toMurojaahLogsList(
  murojaahLogs: MurojaahLogs[] & { MurojaahLogsStudent?: Student | null } & {
    MurojaahLogsMusyrif?: User | null;
  }
) {
  return murojaahLogs.map(toMurojaahLogs);
}
