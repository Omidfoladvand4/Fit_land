import styled from 'styled-components';
import { useRef } from 'react';
import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import VerifyImage from '../images/SignInImage.png';

const Title = styled.div`
  width: 80%;
  color: var(--color-base-secondary);
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
    margin : 0 auto ;
`;

const Subtitle = styled.p`
  width: 80%;
  font-size: var(--font-body-md);
  color: var(--color-neutral-600);
  margin : 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  direction: ltr;
`;

const CodeInput = styled.input`
  width: 52px;
  height: 65px;
  text-align: center;
  font-size: var(--font-body-xxxl);
  font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
  background-color: var(--color-base-background);
  color: var(--color-base-secondary);

  &:focus {
    border-color: var(--color-base-primary);
    box-shadow: 0 0 0 4px rgba(250, 84, 28, 0.15);
  }

  &::placeholder {
    
    color: var(--color-neutral-400);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-body-xxxl);
    position: relative;
    top: 20%;
    color: var(--color-neutral-800);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 490px) {
    width: 42px;
    height: 55px;
    font-size: var(--font-body-xl);
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
`;

const ResendContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px auto;
`;

const ResendLink = styled.button`
  width: max-content;
  background: none;
  border: none;
  color: var(--color-base-primary);
  font-size: var(--font-body-sm);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const Timer = styled.span`
  font-size: var(--font-body-sm);
  color: var(--color-neutral-600);
  font-weight: var(--font-weight-bold);
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function VerifyCode() {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current.focus();
    }

    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      inputRefs[index - 1].current.focus();
    }
  };

  const getFullCode = () => {
    return inputRefs.map(ref => ref.current?.value || '').join('');
  };

  const handleSubmit = () => {
    const code = getFullCode();
    console.log('کد کامل:', code);
  };

  return (
    <AuthLayout image={VerifyImage}>
      <Title>کد تایید را وارد کنید</Title>

      <InputContainer>
        {[...Array(6)].map((_, index) => (
          <CodeInput
            key={index}
            ref={inputRefs[index]}
            type="number"
            maxLength={1}
            placeholder="_"
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </InputContainer>


      <ResendContainer>
         <Subtitle>کد برای شما ارسال شد</Subtitle>
        <Timer>01:29   <ResendLink>ارسال دوباره</ResendLink></Timer>
      </ResendContainer>
      <Button onClick={handleSubmit}>ثبت</Button>
    </AuthLayout>
  );
}

export default VerifyCode;