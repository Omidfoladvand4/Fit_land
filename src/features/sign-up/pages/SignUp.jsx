import styled from 'styled-components';
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
  `
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
    transform-origin: center;
    color: var(--color-base-primary);
   }

  `


function SignUp() {
  return (
    <AuthLayout image={SignUpImage}>
      <Title>ثبت نام</Title>
      <Label>نام و نام خانوادگی *</Label>
      <Input placeholder="نام و نام خانوادگی" />
      <Label>رمز عبور *</Label>
      <Input type="password" placeholder="رمز عبور" />
      <Label>ایمیل (اختیاری)</Label>
      <Input placeholder="ایمیل" />
      <Button>ثبت نام</Button>
      <Policy>
        <ConfirmInput type="checkbox" />
       <Span>قوانین ومقررات </Span> را خوانده و قبول دارم. 
      </Policy>
      <BackButton onClick={() => window.history.back()}>صفحه قبلی</BackButton>
    </AuthLayout>
  );
}

export default SignUp;