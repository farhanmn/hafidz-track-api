import { z, ZodType } from 'zod';

export class ParentValidation {
  static readonly CREATE: ZodType = z.object({
    student_id: z.string(),
    name: z.string().min(4).max(100),
    gender: z.enum(['L', 'P']),
    phone: z.string().min(8).max(15).optional(),
    parent_status: z.enum(['PARENTS', 'NEAR_FAMILY']),
    description: z.string().optional(),
    address: z.string().optional()
  });

  static readonly UPDATE: ZodType = z.object({
    student_id: z.string().optional(),
    name: z.string().min(4).max(100).optional(),
    gender: z.enum(['L', 'P']).optional(),
    phone: z.string().min(8).max(15).optional(),
    parent_status: z.enum(['PARENTS', 'NEAR_FAMILY']).optional(),
    description: z.string().optional(),
    address: z.string().optional()
  });

  static readonly LIST: ZodType = z.object({
    student_id: z.string().optional(),
    name: z.string().min(4).max(100).optional(),
    gender: z.enum(['L', 'P']).optional(),
    page: z.number().optional(),
    limit: z.number().optional()
  });
}
