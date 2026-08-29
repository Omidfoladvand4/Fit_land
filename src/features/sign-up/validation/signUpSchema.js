import { z } from 'zod';

export const signUpSchema = z.object({
  phone: z.string()
    .min(1, 'لطفا شماره موبایل را وارد کنید')
    .regex(/^09\d{9}$/, 'شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود'),
  fullName: z.string().min(1, 'نام و نام خانوادگی الزامی است'),
  password: z.string()
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
  confirmPassword: z.string()
    .min(6, 'تکرار رمز عبور الزامی است'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'رمز عبور و تکرار آن یکسان نیستند',
  path: ['confirmPassword'],
});