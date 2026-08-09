import styled from 'styled-components';
import UserIcon from '../images/icons/UserIcon';
import BasketIcon from '../images/icons/BasketIcon';

const AuthSectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 14px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 490px) {
    width: 100%;
    justify-content: center;
    box-shadow: none;
    background: var(--color-neutral-800);
    justify-content: space-evenly;
    border-radius: 12px;
    color: var(--color-base-background);
  }
`;

const LoginBtn = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-base-primary);
  }
    @media (max-width: 490px) {
    font-size: var(--font-body-xxl);
    padding:  0 12px;
     
  }
`;

const SignUpBtn = styled.div`
  padding-left: 6px;
  border-left: 2px solid var(--color-base-secondary);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-base-primary);
  }
  @media (max-width: 490px) {
    font-size: var(--font-body-xxl);
     padding: 0 12px;
  }
`;

const UserBasket = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-base-primary);
  border-radius: 14px;
  position: relative;
 
  @media (max-width: 490px) {
    background-color: var(--color-base-primary);
     
  }
`;

const UserBasketCount = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: var(--color-base-secondary);
  color: var(--color-base-background);
  position: absolute;
  top: -10px;
  left: -6px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-sm);
`;

function AuthSection({ isMobile = false }) {
  return (
    <AuthSectionContainer>
      <SignUpBtn>ثبت نام</SignUpBtn>
      <LoginBtn>
        ورود
        <UserIcon color='var(--color-base-secondary)'/>
      </LoginBtn>
      <UserBasket>
        <BasketIcon />
        <UserBasketCount>0</UserBasketCount>
      </UserBasket>
    </AuthSectionContainer>
  );
}

export default AuthSection;