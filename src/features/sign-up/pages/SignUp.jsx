import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../sign-in/hooks/useAuth';
import { signUpSchema } from '../validation/signUpSchema';
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
 margin: 8px 0;
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

function SignUp() {
  const location = useLocation();
  
  const initialPhone = location.state?.fullPhone || '';

  const { isSubmitting, authError, fieldErrors, registerUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      phone: initialPhone,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
    registerUser({ ...data });
  };

  return (
    <AuthLayout image={SignUpImage}>
      <Title>ثبت نام</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>

        <Label>نام و نام خانوادگی *</Label>
        <Input placeholder="نام و نام خانوادگی" {...register('fullName')} />
        {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
        
        <Label>شماره موبایل *</Label>
        <Input
          placeholder="09123456789"
          inputMode="numeric"
          {...register('phone')}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

        <Label>رمز عبور *</Label>
        <Input type="password" placeholder="رمز عبور (حداقل ۶ کاراکتر)" {...register('password')} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Label>تکرار رمز عبور *</Label>
        <Input type="password" placeholder="تکرار رمز عبور" {...register('confirmPassword')} />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

        {fieldErrors.phone && <ErrorMessage>{fieldErrors.phone}</ErrorMessage>}
        {authError && <ErrorMessage>{authError}</ErrorMessage>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'در حال ثبت‌نام...' : 'ثبت نام'}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignUp;