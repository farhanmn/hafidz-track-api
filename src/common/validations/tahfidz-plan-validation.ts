import { z, ZodType } from 'zod';

export class TahfidzPlanValidation {
  static readonly CREATE: ZodType = z.object({
    student_id: z.string(),
    plan_type: z.enum(['SURAH', 'JUZ', 'PAGE']),
    juz_number: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0 && val < 31, {
        message: 'Allowed value from 1 - 31'
      })
      .optional(),
    surah_id: z.string().optional(),
    page_number: z.string().optional(),
    start_ayah: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0, {
        message: 'Value must be positive'
      }),
    end_ayah: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0, {
        message: 'Value must be positive'
      }),
    target_date: z.string().regex(/(\d{4})-(\d{2})-(\d{2})/, {
      message: "Invalid date format. Expected 'YYYY-MM-DD'"
    }),
    assigned_by: z.string(),
    notes: z.string().optional()
  });

  static readonly LIST: ZodType = z.object({
    student_id: z.string().optional(),
    plan_type: z.enum(['SURAH', 'JUZ', 'PAGE']).optional(),
    target_date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional()
  });

  static readonly UPDATE: ZodType = z.object({
    student_id: z.string().optional(),
    plan_type: z.enum(['SURAH', 'JUZ', 'PAGE']).optional(),
    juz_number: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0 && val < 31, {
        message: 'Allowed value from 1 - 31'
      })
      .optional(),
    surah_id: z.string().optional(),
    page_number: z.string().optional(),
    start_ayah: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0, {
        message: 'Value must be positive'
      })
      .optional(),
    end_ayah: z
      .string()
      .transform((val) => +val)
      .refine((val) => val > 0, {
        message: 'Value must be positive'
      })
      .optional(),
    target_date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional(),
    assigned_by: z.string().optional(),
    notes: z.string().optional()
  });
}
