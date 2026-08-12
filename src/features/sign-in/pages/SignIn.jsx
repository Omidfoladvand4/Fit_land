import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthSidebar from '../../shared/AuthSidebar/AuthSidebar';
import Image from '../images/SignInImage.png'

const SignInContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const RightSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: var(--color-base-background);
  
  @media (max-width: 490px) {
    width: 100%;
  }
`;

const RightSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  max-width: 400px;

  @media (max-width: 490px) {
    width: 90%;
    margin: 0 auto;
    align-items: center;
  }
`;

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

const MobileNavBar = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--global-padding-small);
  z-index: 10;

  @media (max-width: 490px) {
    display: flex;
  }
`;

const BackIcon = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-neutral-800);
  text-decoration: none;
  font-size: var(--font-body-sm);
  cursor: pointer;

  &:hover {
    color: var(--color-base-primary);
  }
`;

const CloseIcon = styled(BackIcon)``;

function SignIn() {
  return (
    <SignInContainer>
      <MobileNavBar>
        <BackIcon to="/">← برگشتن</BackIcon>
        <CloseIcon to="/">✕ بستن</CloseIcon>
      </MobileNavBar>

      <RightSection>
        <RightSectionWrapper>
          <Title>ورود | ثبت نام</Title>
          <Label htmlFor="input">لطفا شماره تماس یا ایمیل خود را وارد کنید</Label>
          <Input
            id="input"
            placeholder="Example@gmail.com یا 09123456789"
          />
          <Button>ادامه</Button>
          <Policy>
            ورود شما به معنای پذیرش شرایط <Span>فیت لند</Span> و{' '}
            <Span>قوانین حریم خصوصی</Span> ماست
          </Policy>
        </RightSectionWrapper>
      </RightSection>

      <AuthSidebar SidebarImage={Image}/>
    </SignInContainer>
  );
}

export default SignIn;