import { MemorizingLogs, Student, User } from '@prisma/client';
import * as moment from 'moment-timezone';

export function toMemorizingLogs(
  memorizing: MemorizingLogs & { Student?: Student | null } & {
    Musyrif?: User | null;
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
    Student: memorizing.Student
      ? {
          id: memorizing.Student.id,
          name: memorizing.Student.name,
          gender: memorizing.Student.gender,
          grade: memorizing.Student.grade,
          grade_status: memorizing.Student.grade_status,
          status: memorizing.Student.status
        }
      : null,
    Musyrif: memorizing.Musyrif
      ? {
          id: memorizing.Musyrif.id,
          name: memorizing.Musyrif.name,
          email: memorizing.Musyrif.email
        }
      : null
  };
}

export function toMemorizingLogsList(
  memorizingLogs: MemorizingLogs[] & { Student?: Student | null } & {
    Musyrif?: User | null;
  }
) {
  return memorizingLogs.map(toMemorizingLogs);
}
