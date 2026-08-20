// src/features/auth/components/SignUp.jsx
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import SignUpImage from '../images/SignUpImage.png';

const Title = styled.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
`;

const Label = styled.label`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: var(--font-weight-bold);
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-neutral-800);
  padding: 12px 14px;
  border-radius: 12px;
  font-size: var(--font-body-md);
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-base-primary);
  }
  &::placeholder {
    font-weight: var(--font-weight-regular);
    color: var(--color-neutral-400);
  }
`;

const ErrorMessage = styled.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
  margin-top: -4px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-background);
  background-color: var(--color-base-primary);
  font-size: var(--font-body-xxl);
  border-radius: 12px;
  margin-top: 16px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Policy = styled.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin: var(--global-margin-small) 0 0 0;
`;

const Span = styled.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`;
const ConfirmInput = styled.input`
  margin-left: 8px;
  accent-color: var(--color-base-primary);
`;

const BackButton = styled.button`
  width: max-content;
  text-align: start;
  background: none;
  font-size: var(--font-body-xxl);
  font-weight: var(--font-weight-bold);
  color: var(--color-base-neutral-800);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    color: var(--color-base-primary);
  }
`;

// اعتبارسنجی اطلاعات ثبت‌نام (بدون کد ملی)
const signUpSchema = z.object({
  fullName: z.string().min(1, 'نام و نام خانوادگی الزامی است'),
  email: z.string().email('ایمیل معتبر وارد کنید'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'لطفا قوانین و مقررات را بپذیرید',
  }),
});

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { acceptTerms: false },
  });

  // ثبت‌نام در Supabase با رمز عبور
  const onSubmit = async (data) => {
    const { fullName, email, password } = data;

    // ۱. ثبت‌نام کاربر با ایمیل و رمز عبور در Supabase Auth
    const { data: authData, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      alert(`خطا در ثبت‌نام: ${error.message}`);
    } else {
      // ✅ اصلاح: کاربر به صفحه ورود برمی‌گردد تا کد OTP را وارد کند
      alert('ثبت‌نام با موفقیت انجام شد! لطفاً برای ورود، کد تایید ارسال شده به ایمیل خود را وارد کنید.');
      
      // به صفحه ورود برمی‌گردیم و ایمیل رو به عنوان مقدار اولیه می‌فرستیم تا کاربر دوباره تایپ نکنه
      navigate('/Sign-in', { 
        state: { 
          emailToAutoFill: email,
        } 
      });
    }
  };

  return (
    <AuthLayout image={SignUpImage}>
      <Title>ثبت نام</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Label>نام و نام خانوادگی *</Label>
        <Input placeholder="نام و نام خانوادگی" {...register('fullName')} />
        {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}

        <Label>ایمیل *</Label>
        <Input placeholder="ایمیل" {...register('email')} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Label>رمز عبور *</Label>
        <Input type="password" placeholder="رمز عبور (حداقل ۶ کاراکتر)" {...register('password')} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'در حال ثبت‌نام...' : 'ثبت نام'}
        </Button>

        <Policy>
          <ConfirmInput type="checkbox" {...register('acceptTerms')} />
          <Span>قوانین ومقررات </Span> را خوانده و قبول دارم.
          {errors.acceptTerms && <ErrorMessage>{errors.acceptTerms.message}</ErrorMessage>}
        </Policy>
      </form>

      <BackButton onClick={() => window.history.back()}>صفحه قبلی</BackButton>
    </AuthLayout>
  );
}

export default SignUp;