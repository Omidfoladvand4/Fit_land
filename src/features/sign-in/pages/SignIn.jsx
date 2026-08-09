import styled from 'styled-components';
import SignInImage from '../images/SignInImage.png'
import LogSvg from '../../shared/header/images/Logo.svg'
import { Link } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
const SignInContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  `;

const LeftSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  background: url(${SignInImage}) , rgba(0,0,0,.9);
  background-size:cover;
  background-position: top;
  background-repeat: no-repeat;
  color: var(--color-base-background);
  @media (max-width : 490px) {
     display: none;
  }
`;
const LogoImage = styled.img`
display: block;
`
const BackToHome = styled(Link)`
  display: block;
  display: flex;
  gap: 6px;
  color: var(--color-base-background);
  font-size: var(--font-body-xl);
  
  svg{
    color: var(--color-base-background);
    display: block;
  }
`
const RightSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: var(--color-base-background);
   @media (max-width : 490px) {
    width: 100%;
  }
  `;
const RightSectionWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    
    `
const Title = styled.div`
color: var(--color-base-secondary);
   font-size : var(--font-body-xxl);
   font-weight: var(--font-weight-bold);
`
const Labal = styled.label`
  font-size: var(--font-body-md);
  color: var(--color-neutral-800);
   font-weight: var(--font-weight-bold);

`
const Input = styled.input`
  width: 90%;
  border: 1px solid var(--color-neutral-800);
  padding: 12px 14px;
  border-radius: 12px;
  &::placeholder{
       font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-neutral-800);
  border: none;


  }
`
const Button = styled.button`
  width: 90%;
  padding: 12px 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-background);
  background-color: var(--color-base-primary);
  font-size: var(--font-body-large);
  border-radius: 12px;
  margin-top: 16px ;
  cursor: pointer;
`
const Policy = styled.div`
  font-size: var(--font-body-sm);
  color: var(--color-neutral-800);
  margin-top: var(--global-margin-small);

`
const Span = styled.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-base-secondary);
`
const MoblieNavBar = styled.div`
   width: 100%;
   display: none;
   align-items: center;
   justify-content: space-between;
   position: absolute;
   top: 0;
   left: 0;
   padding: var(--global-padding-small);
   @media (max-width: 490px) {
      display: flex;
   }
`
const BackIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
function SignIn() {
  return (
    <SignInContainer>
      <MoblieNavBar >
          <BackIcon > برگشتن</BackIcon>
          <CloseIcon >بستن</CloseIcon>
      </MoblieNavBar>
      <RightSection>
       <RightSectionWrapper>
         <Title>ورود | ثبت نام</Title>
         <Labal htmlFor='input'>لطفا شماره تماس یا ایمیل خود را وارد کنید</Labal>
        <Input placeholder='Example@gamil.com یا 09123456789 '/>
        <Button >ادامه</Button>
        <Policy>ورود شما به معنای پذیرش شرایط <Span>فیت لند</Span>و <Span>قوانین حریم خصوصی </Span>ماست</Policy>
       </RightSectionWrapper>
      </RightSection>
      <LeftSection>
        <LogoImage  src={LogSvg}/>
        <BackToHome  to='/'><HomeIcon /> برگشتن به خانه  </BackToHome>
      </LeftSection>
    </SignInContainer>
  );
}

export default SignIn;