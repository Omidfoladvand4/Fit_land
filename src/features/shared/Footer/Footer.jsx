// src/features/shared/components/Footer/Footer.jsx
import styled from 'styled-components';
import FooterLinks from './components/FooterLinks';
import FooterAbout from './components/FooterAbout';
import FooterNewsletter from './components/FooterNewsletter';
import FooterContact from './components/FooterContact';
import FooterSocial from './components/FooterSocial';

const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--color-base-secondary);
  color: var(--color-base-background);
  padding: 40px 0 0 0;
  margin-top: 60px;
`;

const FooterContainer = styled.div`
  width: 80%;
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
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* بخش اول: درباره فروشگاه */}
        <FooterAbout />
        
        {/* بخش دوم: لینک‌های مفید */}
        <FooterLinks />
        
        {/* بخش سوم: اطلاعات تماس */}
        <FooterContact />
        
        {/* بخش چهارم: خبرنامه و سوشال مدیا */}
        <div>
          <FooterNewsletter />
          <FooterSocial />
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;