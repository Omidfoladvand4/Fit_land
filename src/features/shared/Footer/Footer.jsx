import styled from 'styled-components';
import FooterLinks from './components/FooterLinks';
import FooterAbout from './components/FooterAbout';
import FooterNewsletter from './components/FooterNewsletter';
import FooterContact from './components/FooterContact';
import FooterSocial from './components/FooterSocial';
import TrustSymbols from './components/TrustSymbols';
import { useLocation } from 'react-router-dom';

const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--color-base-secondary);
  color: var(--color-base-background);
  margin: 0 auto;
  padding: 40px 0 0 0;
`;

const FooterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    width: 90%;
  }
`;

function Footer() {
  const location = useLocation()
    if (location.pathname === '/Sign-in' || location.pathname === '/Sign-up' || location.pathname === '/Verify-code' || location.pathname === '/User-Profile') {
    return null;
  }
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterAbout />
        
        <FooterLinks />
        
        <FooterContact />
        
        <div>
          <FooterNewsletter />
          <FooterSocial />
          <TrustSymbols />
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;