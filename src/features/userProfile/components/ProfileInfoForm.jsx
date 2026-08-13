import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
    animation: animate  0.4s ease;
  @keyframes animate {
    0%{
      opacity: 0;
      transform: translateX(-100%);
    }
    100%{
   opacity: 1;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: calc(50% - 8px);
  margin-top: 18px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: var(--font-body-xl);
  font-weight: 600;
  position: absolute;
  top: -20px;
  right: 12px;
  background-color: var(--color-base-background);
  transition: all 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  font-size: var(--font-body-xl);
  outline: none;
  transition: border-color 0.2s ease;
  height: 48px;
  box-sizing: border-box;

  &:focus {
    border-color: var(--color-base-primary);
  }

  &:focus + label {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
`;

const ButtonWrapper = styled.div`
  width: calc(50% - 8px);
  margin-top: 18px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: var(--font-body-xxl);
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

function ProfileInfoForm({ user }) {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    nationalCode: user?.nationalCode || '',
    email: user?.email || '',
    number: user?.number || '',
    gender: user?.gender || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('اطلاعات با موفقیت به‌روزرسانی شد!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="نام خود را وارد کنید"
        />
        <Label htmlFor="firstName">نام و نام خانوادگی</Label>
      </FormGroup>

      <FormGroup>
        <Input
          name="nationalCode"
          value={formData.nationalCode}
          onChange={handleChange}
          placeholder="کد ملی خود را وارد کنید"
        />
        <Label htmlFor="nationalCode">کد ملی</Label>
      </FormGroup>

      <FormGroup>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ایمیل خود را وارد کنید"
        />
        <Label htmlFor="email">ایمیل</Label>
      </FormGroup>

      <FormGroup>
        <Input
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="۰۹۱۲۱۲۳۴۵۶"
        />
        <Label htmlFor="number">شماره تماس</Label>
      </FormGroup>

      <FormGroup>
        <Input
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="زن / مرد"
        />
        <Label htmlFor="gender">جنسیت</Label>
      </FormGroup>

      <ButtonWrapper>
        <Button type="submit">ثبت</Button>
      </ButtonWrapper>
    </Form>
  );
}

export default ProfileInfoForm;