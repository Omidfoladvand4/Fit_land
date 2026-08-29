import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../hooks/useAuth';
import { signInSchema } from '../validation/signInSchema';
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
  }
`;


function SignIn() {
  const { isSubmitting, authError, checkUserExists } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data) => {
    checkUserExists(data.phone);
  };

  return (
    <AuthLayout image={SignInImage}>
      <Title>ورود | ثبت نام</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Label>شماره موبایل</Label>
        <Input
          placeholder="09123456789"
          {...register('phone')}
          inputMode="numeric"
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

        {authError && <ErrorMessage>{authError}</ErrorMessage>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'در حال بررسی...' : 'ادامه'}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignIn;