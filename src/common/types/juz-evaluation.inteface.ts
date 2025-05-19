import { GradeStatus, StudentStatus } from '@prisma/client';

interface Student {
  id: string;
  name: string;
  grade: string;
  grade_status: GradeStatus;
  status: StudentStatus;
}

interface JuzEvaluation {
  id: string;
  student_id: string;
  juz_number: number;
  evaluation_date: string;
  assessment: string;
  notes?: string | null;
  Student?: Student | null;
}

export { JuzEvaluation };
