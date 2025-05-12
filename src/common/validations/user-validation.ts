import { z, ZodType } from 'zod';

export class UserValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(1).max(100),
    password: z.string().min(4).max(100),
    email: z.string().email().max(100),
    role: z.enum(['ADMIN', 'MUSYRIF'])
  });

  static readonly LOGIN: ZodType = z.object({
    email: z.string(),
    password: z.string()
  });

  static readonly UPDATE: ZodType = z.object({
    name: z.string().min(1).max(100).optional(),
    password: z.string().max(100).optional(),
    role: z.enum(['ADMIN', 'MUSYRIF']).optional()
  });

  static readonly LIST: ZodType = z.object({
    name: z.string().optional().default(''),
    role: z
      .string()
      .transform((val) => val.split(',').map((s) => s.trim().toUpperCase()))
      .refine((arr) => arr.every((s) => ['ADMIN', 'MUSYRIF'].includes(s)), {
        message: 'Invalid status. Only allowed ADMIN, MUSYRIF'
      })
      .optional(),
    page: z.number().optional(),
    limit: z.number().optional()
  });
}
