import { Parent, Student, Surah, TahfidzPlan, User } from '@prisma/client';
import moment from 'moment-timezone';

export function toTahfidzPlan(
  tahfidzPlan: TahfidzPlan & { TahfidzPlanStudent?: Student | null } & {
    TahfidzPlanMusyrif?: User | null;
  } & { TahfidzPlanSurah?: Surah | null }
) {
  return {
    id: tahfidzPlan.id,
    student_id: tahfidzPlan.student_id,
    plan_type: tahfidzPlan.plan_type,
    juz_number: tahfidzPlan.juz_number,
    surah_id: tahfidzPlan.surah_id,
    page_number: tahfidzPlan.page_number,
    start_ayah: tahfidzPlan.start_ayah,
    end_ayah: tahfidzPlan.end_ayah,
    target_date: moment(tahfidzPlan.target_date).format('YYYY-MM-DD'),
    assigned_by: tahfidzPlan.assigned_by,
    notes: tahfidzPlan.notes,
    created_at: moment(tahfidzPlan.created_at).toISOString(),
    Student: tahfidzPlan.TahfidzPlanStudent
      ? {
          id: tahfidzPlan.TahfidzPlanStudent.id,
          name: tahfidzPlan.TahfidzPlanStudent.name,
          grade: tahfidzPlan.TahfidzPlanStudent.grade,
          grade_status: tahfidzPlan.TahfidzPlanStudent.grade_status,
          status: tahfidzPlan.TahfidzPlanStudent.status
        }
      : null,
    Musyrif: tahfidzPlan.TahfidzPlanMusyrif
      ? {
          id: tahfidzPlan.TahfidzPlanMusyrif.id,
          name: tahfidzPlan.TahfidzPlanMusyrif.name,
          email: tahfidzPlan.TahfidzPlanMusyrif.email
        }
      : null,
    Surah: tahfidzPlan.TahfidzPlanSurah
      ? {
          id: tahfidzPlan.TahfidzPlanSurah.id,
          name: tahfidzPlan.TahfidzPlanSurah.name,
          surah_number: tahfidzPlan.TahfidzPlanSurah.surah_number,
          ayah_counts: tahfidzPlan.TahfidzPlanSurah.ayah_counts,
          juz: tahfidzPlan.TahfidzPlanSurah.juz
        }
      : null
  };
}

export function toTahfidzPlanList(
  tahfidzPlan: TahfidzPlan[] & { TahfidzPlanStudent?: Student | null } & {
    TahfidzPlanMusyrif?: User | null;
  } & { TahfidzPlanSurah?: Surah | null }
) {
  return tahfidzPlan.map(toTahfidzPlan);
}
