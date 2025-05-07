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
    name: z.string().min(1).max(100),
    password: z.string().max(100).optional(),
    role: z.enum(['ADMIN', 'MUSYRIF']),
    email: z.string().email().max(100)
  });

  static readonly LIST: ZodType = z.object({
    search: z.string().optional().default(''),
    page: z.number().optional(),
    limit: z.number().optional(),
    sort_by: z.enum(['name', 'phone', 'email']).optional(),
    sort_dir: z.enum(['asc', 'desc']).optional(),
    role: z.enum(['OPERATIONS', 'SALES']).optional()
  });
}
