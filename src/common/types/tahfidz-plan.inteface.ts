import { GradeStatus, StudentStatus } from '@prisma/client';

interface Surah {
  id: string;
  name: string;
  surah_number: number;
  ayah_counts: number;
  juz: number[];
}

interface Student {
  id: string;
  name: string;
  grade: string;
  grade_status: GradeStatus;
  status: StudentStatus;
}

interface Musyrif {
  id: string;
  name: string;
  email: string;
}

interface TahfidzPlan {
  id: string;
  student_id: string;
  plan_type: string;
  juz_number?: number | null;
  surah_id?: string | null;
  page_number?: number | null;
  start_ayah: number;
  end_ayah: number;
  target_date: string;
  assigned_by: string;
  notes?: string | null;
  created_at: string;
  Student?: Student | null;
  Musyrif?: Musyrif | null;
  Surah?: Surah | null;
}

export { TahfidzPlan };
