import { z } from 'zod';

export const signInSchema = z.object({
  phone: z.string()
    .min(1, 'لطفا شماره موبایل را وارد کنید')
    .regex(/^09\d{9}$/, 'شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود'),
});