// // src/features/auth/pages/SignUp.jsx
// import styled from 'styled-components';
// import AuthLayout from '../../shared/AuthLayout/AuthLayout';
// import SignInImage from '../images/SignInImage.png';

// const Title = styled.div`
//   width: 100%;
//   color: var(--color-base-secondary);
//   font-size: var(--font-body-xxxl);
//   font-weight: var(--font-weight-bold);
// `;

// const Label = styled.label`
//   width: 100%;
//   font-size: var(--font-body-large);
//   color: var(--color-neutral-800);
//   font-weight: var(--font-weight-bold);
// `;

// const Input = styled.input`
//   width: 100%;
//   border: 1px solid var(--color-neutral-800);
//   padding: 12px 14px;
//   border-radius: 12px;
//   font-size: var(--font-body-md);
//   outline: none;

//   &:focus {
//     border-color: var(--color-base-primary);
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px 14px;
//   font-weight: var(--font-weight-bold);
//   color: var(--color-base-background);
//   background-color: var(--color-base-primary);
//   font-size: var(--font-body-xl);
//   border-radius: 12px;
//   margin-top: 16px;
//   cursor: pointer;
//   border: none;
//   transition: all 0.3s ease;

//   &:hover {
//     opacity: 0.85;
//     transform: translateY(-2px);
//   }
// `;

// const Policy = styled.div`
//   width: 100%;
//   font-size: var(--font-body-large);
//   color: var(--color-neutral-800);
//   margin-top: var(--global-margin-small);
//   text-align: center;
// `;

// const Span = styled.span`
//   font-weight: var(--font-weight-bold);
//   color: var(--color-base-secondary);
// `;

// function SignUp() {
//   return (
//     <AuthLayout image={SignInImage}>
//       <Title>ثبت نام</Title>
//       <Label>اطلاعات خود را کامل کنید</Label>
//       <Input placeholder="نام و نام خانوادگی" />
//       <Input placeholder="ایمیل" />
//       <Input type="password" placeholder="رمز عبور" />
//       <Button>ثبت نام</Button>
//       <Policy>
//         با ثبت نام، شرایط <Span>فیت لند</Span> را می‌پذیرید
//       </Policy>
//     </AuthLayout>
//   );
// }

// export default SignUp;
// src/features/auth/pages/SignIn.jsx
import styled from 'styled-components';
import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import SignInImage from '../images/SignInImage.png';
import { useNavigate } from 'react-router-dom';

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

function SignIn() {
  const navigate = useNavigate();
  const SignInHandler = () => {
    navigate('/Verify-code');
  }

  return (
    <AuthLayout image={SignInImage}>
      <Title>ورود | ثبت نام</Title>
      <Label htmlFor="input">لطفا شماره تماس یا ایمیل خود را وارد کنید</Label>
      <Input
        id="input"
        placeholder="Example@gmail.com یا 09123456789"
      />
      <Button onClick={() => SignInHandler()}>ادامه</Button>
      <Policy>
        ورود شما به معنای پذیرش شرایط <Span>فیت لند</Span> و{' '}
        <Span>قوانین حریم خصوصی</Span> ماست
      </Policy>
    </AuthLayout>
  );
}

export default SignIn;