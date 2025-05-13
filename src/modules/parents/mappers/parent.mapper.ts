import { Parent, Student } from '@prisma/client';

export function toParent(parent: Parent & { ParentStudent?: Student | null }) {
  return {
    id: parent.id,
    student_id: parent.student_id,
    name: parent.name,
    gender: parent.gender,
    phone: parent.phone,
    parent_status: parent.parent_status,
    description: parent.description,
    address: parent.address,
    Student: parent.ParentStudent
      ? {
          id: parent.ParentStudent.id,
          name: parent.ParentStudent.name,
          grade: parent.ParentStudent.grade,
          grade_status: parent.ParentStudent.grade_status,
          status: parent.ParentStudent.status
        }
      : null
  };
}

export function toParentList(
  parent: Parent[] & { ParentStudent?: Student | null }
) {
  return parent.map(toParent);
}
