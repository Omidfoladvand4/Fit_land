// src/features/auth/pages/VerifyCode.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-base-secondary);
`;

const VerifyBox = styled.div`
  background: var(--color-base-background);
  padding: 40px 32px;
  border-radius: 16px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: var(--font-body-xl);
  font-weight: 700;
  color: var(--color-neutral-800);
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: var(--font-body-sm);
  color: var(--color-neutral-600);
  text-align: center;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-neutral-300);
  border-radius: 8px;
  font-size: var(--font-body-md);
  text-align: center;
  letter-spacing: 8px;
  direction: ltr;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-base-primary);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--color-base-primary);
  color: var(--color-base-background);
  border: none;
  border-radius: 8px;
  font-size: var(--font-body-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ResendLink = styled.button`
  background: none;
  border: none;
  color: var(--color-base-primary);
  font-size: var(--font-body-sm);
  cursor: pointer;
  margin-top: 16px;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: var(--font-body-xs);
  text-align: center;
  margin-top: 8px;
`;

function VerifyCode() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();

  // دریافت ایمیل یا شماره از صفحه قبلی
  const { email, phone } = location.state || {};

  const handleVerify = async () => {
    if (code.length !== 6) {
      setError('کد تایید باید ۶ رقم باشد');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // ✅ درخواست به سرور برای تأیید کد
      const response = await fetch('/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone,
          code,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ تأیید موفق - هدایت به صفحه اصلی
        navigate('/', { replace: true });
      } else {
        setError(data.message || 'کد تایید اشتباه است');
      }
    } catch (err) {
      setError('مشکلی در ارتباط با سرور پیش آمده است');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setTimer(60);
    try {
      await fetch('/api/resend-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      });
    } catch (err) {
      console.error('خطا در ارسال مجدد کد');
    }
  };

  return (
    <VerifyContainer>
      <VerifyBox>
        <Title>تأیید کد</Title>
        <Subtitle>
          کد ۶ رقمی ارسال شده به {email || phone} را وارد کنید
        </Subtitle>

        <Input
          type="text"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
          placeholder="۰ ۰ ۰ ۰ ۰ ۰"
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button onClick={handleVerify} disabled={loading}>
          {loading ? 'در حال بررسی...' : 'تأیید کد'}
        </Button>

        <ResendLink onClick={handleResendCode} disabled={timer > 0}>
          {timer > 0 ? `ارسال مجدد کد (${timer} ثانیه)` : 'ارسال مجدد کد'}
        </ResendLink>
      </VerifyBox>
    </VerifyContainer>
  );
}

export default VerifyCode;