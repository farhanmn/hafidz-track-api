import { z, ZodType } from 'zod';

export class MemorizingValidation {
  static readonly CREATE: ZodType = z.object({
    student_id: z.string(),
    musyrif_id: z.string(),
    juz: z.number().min(1).max(30),
    from_surah: z.string(),
    from_ayah: z.number().min(1),
    to_surah: z.string(),
    to_ayah: z.number().min(1),
    submission_date: z.string().regex(/(\d{4})-(\d{2})-(\d{2})/, {
      message: "Invalid date format. Expected 'YYYY-MM-DD'"
    }),
    assessment: z.enum(['PASS', 'FAIL']),
    notes: z.string().optional(),
    isRepeat: z.number().default(0)
  });

  static readonly LIST: ZodType = z.object({
    student_id: z.string().optional(),
    musyrif_id: z.string().optional(),
    juz: z.number().min(1).max(30).optional(),
    from_surah: z.string().optional(),
    to_surah: z.string().optional(),
    submission_date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional(),
    assessment: z.enum(['PASS', 'FAIL']).optional(),
    page: z.number().optional(),
    limit: z.number().optional()
  });

  static readonly UPDATE: ZodType = z.object({
    student_id: z.string().optional(),
    musyrif_id: z.string().optional(),
    juz: z.number().min(1).max(30).optional(),
    from_surah: z.string().optional(),
    from_ayah: z.number().min(1).optional(),
    to_surah: z.string().optional(),
    to_ayah: z.number().min(1).optional(),
    submission_date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional(),
    assessment: z.enum(['PASS', 'FAIL']).optional(),
    notes: z.string().optional(),
    isRepeat: z.number().default(0).optional()
  });
}
