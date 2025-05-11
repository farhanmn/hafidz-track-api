import { Gender, GradeStatus, StudentStatus } from '@prisma/client';

interface Musyrif {
  id: string;
  name: string;
  email: string;
}

interface Student {
  id: string;
  musyrif_id: string;
  name: string;
  gender: Gender;
  grade: string;
  grade_status: GradeStatus;
  birth_date: string;
  join_date: string | undefined;
  status: StudentStatus;
  musyrif?: Musyrif | null;
}

export { Student };
