import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import SignInImage from '../images/SignInImage.png';

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
  font-size: var(--font-body-xl);
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
    background-color: var(--color-neutral-400); /* خاکستری کردن دکمه */
  }
`;

const Policy = styled.div`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin-top: var(--global-margin-small);
  text-align: center;
`;

const Span = styled.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`;

const signInSchema = z.object({
  identifier: z.string().min(1, 'لطفا شماره تماس یا ایمیل را وارد کنید'),
});

function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  // 🌟 توضیح: این خطا وقتی پیش میاد که کاربر چند بار دکمه رو بزنه
  const onSubmit = async (data) => {
    const { identifier } = data;
    const isEmail = identifier.includes('@');
    const payload = isEmail ? { email: identifier } : { phone: identifier };

    const { error } = await supabase.auth.signInWithOtp(payload);

    if (error) {
      // اگر خطای Rate Limit بود، به کاربر پیام مناسب بده
      if (error.message.includes('rate limit')) {
        alert('⚠️ شما بیش از حد مجاز درخواست فرستاده‌اید. لطفاً ۱ دقیقه صبر کنید و دوباره تلاش کنید.');
      } else {
        alert(`خطا در ارسال کد: ${error.message}`);
      }
    } else {
      navigate('/Verify-code', { state: { identifier } });
    }
  };

  return (
    <AuthLayout image={SignInImage}>
      <Title>ورود | ثبت نام</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Label htmlFor="input">لطفا شماره تماس یا ایمیل خود را وارد کنید</Label>
        <Input
          id="input"
          placeholder="Example@gmail.com یا 09123456789"
          {...register('identifier')}
        />
        {errors.identifier && <ErrorMessage>{errors.identifier.message}</ErrorMessage>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'در حال ارسال کد...' : 'ادامه'}
        </Button>
      </form>
      <Policy>
        ورود شما به معنای پذیرش شرایط <Span>فیت لند</Span> و{' '}
        <Span>قوانین حریم خصوصی</Span> ماست
      </Policy>
    </AuthLayout>
  );
}

export default SignIn;