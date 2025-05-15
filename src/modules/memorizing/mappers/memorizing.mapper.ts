import { MemorizingLogs, Student, User } from '@prisma/client';
import * as moment from 'moment-timezone';

export function toMemorizingLogs(
  memorizing: MemorizingLogs & { MemorizingLogsStudent?: Student | null } & {
    MemorizingLogsMusyrif?: User | null;
  }
) {
  return {
    id: memorizing.id,
    student_id: memorizing.student_id,
    musyrif_id: memorizing.musyrif_id,
    juz: memorizing.juz,
    from_surah: memorizing.from_surah,
    from_ayah: memorizing.from_ayah,
    to_surah: memorizing.to_surah,
    to_ayah: memorizing.to_ayah,
    submission_date: moment(memorizing.submission_date).format('YYYY-MM-DD'),
    assessment: memorizing.assessment,
    notes: memorizing.notes,
    isRepeat: memorizing.isRepeat,
    created_at: memorizing.created_at,
    Student: memorizing.MemorizingLogsStudent
      ? {
          id: memorizing.MemorizingLogsStudent.id,
          name: memorizing.MemorizingLogsStudent.name,
          gender: memorizing.MemorizingLogsStudent.gender,
          grade: memorizing.MemorizingLogsStudent.grade,
          grade_status: memorizing.MemorizingLogsStudent.grade_status,
          status: memorizing.MemorizingLogsStudent.status
        }
      : null,
    Musyrif: memorizing.MemorizingLogsMusyrif
      ? {
          id: memorizing.MemorizingLogsMusyrif.id,
          name: memorizing.MemorizingLogsMusyrif.name,
          email: memorizing.MemorizingLogsMusyrif.email
        }
      : null
  };
}

export function toMemorizingLogsList(
  memorizingLogs: MemorizingLogs[] & {
    MemorizingLogsStudent?: Student | null;
  } & {
    MemorizingLogsMusyrif?: User | null;
  }
) {
  return memorizingLogs.map(toMemorizingLogs);
}
