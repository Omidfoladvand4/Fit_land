import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogSvg from '../../../header/images/Logo.svg';
import HomeIcon from './icons/HomeIcon';

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  background: url(${({ $image }) => $image}) no-repeat center / cover;
  background-color: var(--color-base-secondary);
  background-position: top;
  position: relative;
  color: var(--color-base-background);

  @media (max-width: 490px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const LogoImage = styled.img`
  display: block;
  width: 120px;
  height: auto;
`;

const BackToHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-base-background);
  font-size: var(--font-body-xl);
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: translateX(-4px);
  }

  svg {
    color: var(--color-base-background);
    display: block;
  }
`;

function AuthSidebar({SidebarImage}) {
  return (
    <SidebarWrapper $image ={SidebarImage}>
    <Overlay />
      <Content>
        <LogoImage src={LogSvg} alt="لوگوی فیت‌لند" />
        <BackToHome to="/">
          <HomeIcon />
          برگشتن به خانه
        </BackToHome>
      </Content>
    </SidebarWrapper>
  );
}

export default AuthSidebar;