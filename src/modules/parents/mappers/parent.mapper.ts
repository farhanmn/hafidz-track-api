import { Parent, Student } from '@prisma/client';

export function toParent(parent: Parent & { Student?: Student | null }) {
  return {
    ...parent,
    Student: parent.Student
      ? {
          name: parent.Student.name,
          grade: parent.Student.grade,
          grade_status: parent.Student.grade_status,
          status: parent.Student.status
        }
      : null
  };
}

export function toParentList(parent: Parent[] & { Student?: Student | null }) {
  return parent.map(toParent);
}
