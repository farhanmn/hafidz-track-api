import { JuzEvaluation, Student } from '@prisma/client';
import * as moment from 'moment-timezone';

export function toJuzEvaluation(
  juzEvaluation: JuzEvaluation & { EvaluationStudent?: Student | null }
) {
  return {
    id: juzEvaluation.id,
    student_id: juzEvaluation.student_id,
    juz_number: juzEvaluation.juz_number,
    evaluation_date: moment(juzEvaluation.evaluation_date).format('YYYY-MM-DD'),
    assessment: juzEvaluation.assessment,
    notes: juzEvaluation.notes,
    Student: juzEvaluation.EvaluationStudent
      ? {
          id: juzEvaluation.EvaluationStudent.id,
          name: juzEvaluation.EvaluationStudent.name,
          grade: juzEvaluation.EvaluationStudent.grade,
          grade_status: juzEvaluation.EvaluationStudent.grade_status,
          status: juzEvaluation.EvaluationStudent.status
        }
      : null
  };
}

export function toJuzEvaluationList(
  juzEvaluation: JuzEvaluation[] & { EvaluationStudent?: Student | null }
) {
  return juzEvaluation.map(toJuzEvaluation);
}
