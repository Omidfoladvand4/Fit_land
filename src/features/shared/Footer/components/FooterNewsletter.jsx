
import styled from 'styled-components';
import { useState } from 'react';

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const NewsletterTitle = styled.h3`
  font-size: var(--font-body-large);
  font-weight: 700;
`;

const NewsletterText = styled.p`
  font-size: var(--font-body-md);
  opacity: 0.8;
`;

const Form = styled.form`
  display: flex;
  gap: 8px;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-base-background);
  font-size: var(--font-body-md);
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--color-base-primary);
  color: var(--color-base-background);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ایمیل ثبت شد:', email);
    setEmail('');
  };

  return (
    <NewsletterContainer>
      <NewsletterTitle>خبرنامه فیت‌لند</NewsletterTitle>
      <NewsletterText>
        برای دریافت تخفیف‌های بیشتر ما را دنبال کنید!
      </NewsletterText>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="ایمیل خود را وارد کنید..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">عضویت</Button>
      </Form>
    </NewsletterContainer>
  );
}

export default FooterNewsletter;