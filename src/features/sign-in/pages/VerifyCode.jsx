
import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import VerifyImage from '../images/VerifyImage.png';


const Title = styled.div`
  width: 100%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
  margin: 0 auto;
`;

const Subtitle = styled.p`
  width: 100%;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  margin: 0 auto;
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
    color: var(--color-neutral-400);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-background);
  background-color: var(--color-base-primary);
  font-size: var(--font-body-xl);
  border-radius: 12px;
  margin-top: 24px;
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
const ErrorMessage = styled.p`
  width: 100%;
  color: var(--color-error-800);
  font-size: var(--font-body-xs);
  margin: 8px 0;
`;
function VerifyCode() {
  const location = useLocation();
  const phone = location.state?.phone;

  const { isSubmitting, authError, loginWithPassword } = useAuth();
  const [password, setPassword] = useState('');

  if (!phone) {
    return null; 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('لطفا رمز عبور را وارد کنید');
      return;
    }
    loginWithPassword(phone, password);
  };

  return (
    <AuthLayout image={VerifyImage}>
      <Title>ورود</Title>
      <Subtitle>شماره موبایل: {phone}</Subtitle>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Label>رمز عبور</Label>
        <Input
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {authError && <ErrorMessage>{authError}</ErrorMessage>}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'در حال ورود...' : 'ورود'}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default VerifyCode;