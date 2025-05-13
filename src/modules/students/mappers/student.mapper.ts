import { Parent, Student, User } from '@prisma/client';
import * as moment from 'moment-timezone';

export function toStudent(
  student: Student & { MusyrifUser?: User | null } & {
    Parent?: Parent[] | null;
  }
) {
  return {
    id: student.id,
    musyrif_id: student.musyrif_id,
    name: student.name,
    gender: student.gender,
    grade: student.grade,
    grade_status: student.grade_status,
    birth_date: moment(student.birth_date).format('YYYY-MM-DD'),
    join_date: moment(student.join_date).format('YYYY-MM-DD') || undefined,
    status: student.status,
    Musyrif: student.MusyrifUser
      ? {
          id: student.MusyrifUser.id,
          name: student.MusyrifUser.name,
          email: student.MusyrifUser.email
        }
      : null,
    Parent: student.Parent?.map((parent) => {
      return {
        id: parent.id,
        name: parent.name,
        gender: parent.gender,
        phone: parent.phone,
        parent_status: parent.parent_status,
        address: parent.address
      };
    })
  };
}

export function toStudentList(
  student: Student[] & { MusyrifUser?: User | null }
) {
  return student.map(toStudent);
}
