import {
  Gender,
  GradeStatus,
  ParentStatus,
  StudentStatus
} from '@prisma/client';

interface ParentStudent {
  name: string;
  grade: string;
  grade_status: GradeStatus;
  status: StudentStatus;
}

interface Parent {
  id: string;
  name: string;
  student_id: string;
  gender: Gender;
  phone: string | null;
  parent_status: ParentStatus;
  description: string | null;
  address: string | null;
  Student?: ParentStudent | null;
}

export { Parent };
