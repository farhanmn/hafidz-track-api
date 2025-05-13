import { Attendance, Student, User } from '@prisma/client';

export function toAttendace(
  attendance: Attendance & { AttendanceStudent?: Student | null } & {
    AttendanceMusyrif?: User | null;
  }
) {
  return {
    id: attendance.id,
    student_id: attendance.student_id,
    date: attendance.date,
    status: attendance.status,
    remark: attendance.remark,
    recorded_by: attendance.recorded_by,
    created_at: attendance.created_at,
    Student: attendance.AttendanceStudent
      ? {
          id: attendance.AttendanceStudent.id,
          name: attendance.AttendanceStudent.name,
          gender: attendance.AttendanceStudent.gender,
          grade: attendance.AttendanceStudent.grade,
          grade_status: attendance.AttendanceStudent.grade_status,
          status: attendance.AttendanceStudent.status
        }
      : null,
    Musyrif: attendance.AttendanceMusyrif
      ? {
          id: attendance.AttendanceMusyrif.id,
          name: attendance.AttendanceMusyrif.name,
          email: attendance.AttendanceMusyrif.email
        }
      : null
  };
}

export function toAttendanceList(
  attendance: Attendance[] & { AttendanceStudent?: Student | null } & {
    AttendanceMusyrif?: User | null;
  }
) {
  return attendance.map(toAttendace);
}
