import { Student as PrismaStudent } from '@prisma/client';
import { User as PrismaUser } from '@prisma/client';
import * as moment from 'moment';

export function toStudent(
  student: PrismaStudent & { MusyrifUser?: PrismaUser | null }
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
    musyrif: student.MusyrifUser
      ? {
          id: student.MusyrifUser.id,
          name: student.MusyrifUser.name,
          email: student.MusyrifUser.email
        }
      : null
  };
}

export function toStudentList(
  student: PrismaStudent[] & { MusyrifUser?: PrismaUser | null }
) {
  return student.map(toStudent);
}
