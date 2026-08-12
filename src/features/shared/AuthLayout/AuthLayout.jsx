import styled from "styled-components";
import AuthSidebar from "./components/AuthSidebar/AuthSidebar";
import AuthNavgation from "./components/AuthNavigation/AuthNavgation";
import BImage from "./images/BImage.png";
import AImage from "./images/AImage.png";

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background-color: var(--color-base-background);
  position: relative;
`;

const LeftSection = styled.div`
  width: 50%;
  height: 100vh;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  background-color: var(--color-base-background);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    top: -10px;
    left: -10px;
    background: url(${AImage}) no-repeat center / contain;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    bottom: -10px;
    right: -10px;
    background: url(${BImage}) no-repeat center / contain;
    z-index: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    animation: animate 0.5s ease;
    @keyframes animate {
      0%{
        transform: translateX(100%);
        opacity: 0;
      }
        100%{
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const RightContent = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  padding: 14px 16px;
  gap: 8px;
  position: relative;
  z-index: 1;
  background-color: var(--color-base-background);

  @media (max-width: 490px) {
   padding: 10px 14px;
  }
`;

function AuthLayout({ image, children }) {
  return (
    <LayoutContainer>
      <RightSection>
        <AuthNavgation />
        <RightContent>{children}</RightContent>
      </RightSection>
      <LeftSection>
        <AuthSidebar SidebarImage={image} />
      </LeftSection>
    </LayoutContainer>
  );
}

export default AuthLayout;
