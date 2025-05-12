import { z, ZodType } from 'zod';

export class StudentValidation {
  static readonly CREATE: ZodType = z.object({
    musyrif_id: z.string(),
    gender: z.enum(['L', 'P']),
    name: z.string().min(4).max(100),
    grade: z.string().min(1).max(6),
    grade_status: z.enum([
      'ELEMENTARY_SCHOOL',
      'JUNIOR_HIGH_SCHOOL',
      'SENIOR_HIGH_SCHOOL'
    ]),
    birth_date: z.date()
  });

  static readonly UPDATE: ZodType = z.object({
    musyrif_id: z.string().optional(),
    gender: z.enum(['L', 'P']).optional(),
    name: z.string().min(4).max(100).optional(),
    grade: z.string().min(1).max(6).optional(),
    grade_status: z
      .enum(['ELEMENTARY_SCHOOL', 'JUNIOR_HIGH_SCHOOL', 'SENIOR_HIGH_SCHOOL'])
      .optional(),
    birth_date: z.date().optional()
  });

  static readonly LIST: ZodType = z.object({
    name: z.string().optional().default(''),
    page: z.number().optional(),
    limit: z.number().optional()
  });
}
