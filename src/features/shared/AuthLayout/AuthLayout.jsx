import styled from 'styled-components';
import AuthSidebar from './components/AuthSidebar/AuthSidebar';

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background-color: var(--color-base-background);
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

const RightContent = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
   border: 1px solid var(--color-neutral-800);
   border-radius: 8px;
   padding: 14px 16px;
  gap: 16px;

  @media (max-width: 490px) {
    width: 90%;
  }
`;

function AuthLayout({ image, children }) {
  return (
    <LayoutContainer>
      
      <RightSection>
        <RightContent>
          {children}
        </RightContent>
      </RightSection>
      <LeftSection>
        <AuthSidebar SidebarImage={image} />
      </LeftSection>
    </LayoutContainer>
  );
}

export default AuthLayout;