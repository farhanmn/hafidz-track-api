import { z, ZodType } from 'zod';
import { AttendanceStatus } from '@prisma/client';

export class AttendanceValidation {
  static readonly CREATE: ZodType = z.object({
    student_id: z.string(),
    status: z.enum(['PRESENT', 'ABSENT', 'LATE', 'EXCUSED']).default('PRESENT'),
    date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional(),
    remark: z.string().optional(),
    recorded_by: z.string()
  });

  static readonly LIST: ZodType = z.object({
    student_id: z.string().optional(),
    date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional(),
    status: z.enum(['PRESENT', 'LATE', 'ABSENT', 'EXCUSED']).optional(),
    page: z.number().optional(),
    limit: z.number().optional()
  });

  static readonly UPDATE: ZodType = z.object({
    student_id: z.string().optional(),
    status: z.enum(['PRESENT', 'ABSENT', 'LATE', 'EXCUSED']).optional(),
    date: z
      .string()
      .regex(/(\d{4})-(\d{2})-(\d{2})/, {
        message: "Invalid date format. Expected 'YYYY-MM-DD'"
      })
      .optional(),
    remark: z.string().optional()
  });
}
