import styled from 'styled-components';
import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import VerifyImage from '../images/SignInImage.png';

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
  text-align: center;
  letter-spacing: 8px;
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
`;

const ResendLink = styled.button`
  background: none;
  border: none;
  color: var(--color-base-primary);
  font-size: var(--font-body-sm);
  cursor: pointer;
  margin-top: 12px;
  text-align: center;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

function VerifyCode() {
  return (
    <AuthLayout image={VerifyImage}>
      <Title>تأیید کد</Title>
      <Label>کد ۶ رقمی ارسال شده را وارد کنید</Label>
      <Input
        placeholder="۰ ۰ ۰ ۰ ۰ ۰"
        maxLength={6}
      />
      <Button>تأیید کد</Button>
      <ResendLink>ارسال مجدد کد</ResendLink>
    </AuthLayout>
  );
}

export default VerifyCode;