import { Assessment } from '@prisma/client';

interface Student {
  id: string;
  name: string;
  gender: string;
  grade: string;
  grade_status: string;
  status: string;
}

interface Musyrif {
  id: string;
  name: string;
  email: string;
}

interface Tahfidz {
  id: string;
  student_id: string;
  musyrif_id: string;
  class: string;
  juz: number;
  from_surah?: string | null;
  from_ayah: number;
  to_surah?: string | null;
  to_ayah: number;
  submission_date: string;
  assessment: Assessment;
  notes?: string | null;
  isRepeat: number;
  type: string;
  created_at: Date;
  Student?: Student | null;
  Musyrif?: Musyrif | null;
}

export { Tahfidz };
