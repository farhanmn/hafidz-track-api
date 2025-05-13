interface Student {
  id: string;
  name: string;
  gender: string;
  grade: string;
  grade_status: string;
  status: string;
}

interface Attendance {
  id: string;
  student_id: string;
  date: string;
  status: string;
  remark?: string | null;
  recorded_by: string;
  created_at: Date;
  Student?: Student | null;
}

export { Attendance };
