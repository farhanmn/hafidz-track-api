import { z, ZodType } from 'zod';

export class JuzEvaluationValidation {
  static readonly CREATE: ZodType = z.object({
    student_id: z.string(),
    juz: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0 && val < 31, {
        message: 'Allowed value from 1 - 30'
      }),
    evaluation_date: z.string().optional(),
    assessment: z.enum(['PASS', 'FAIL']),
    notes: z.string().optional()
  });

  static readonly LIST: ZodType = z.object({
    student_id: z.string().optional(),
    juz: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0 && val < 31, {
        message: 'Allowed value from 1 - 30'
      })
      .optional(),
    evaluation_date: z.string().optional(),
    assessment: z.enum(['PASS', 'FAIL'])
  });

  static readonly UPDATE: ZodType = z.object({
    student_id: z.string().optional(),
    juz: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0 && val < 31, {
        message: 'Allowed value from 1 - 30'
      })
      .optional(),
    evaluation_date: z.string().optional(),
    assessment: z.enum(['PASS', 'FAIL']).optional(),
    notes: z.string().optional()
  });
}
