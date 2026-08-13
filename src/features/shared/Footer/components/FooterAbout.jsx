import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AboutTitle = styled.div`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  margin-bottom: 8px;
  @media (max-width : 490px) {
  font-size: var(--font-body-xxxl);
    
  }
`;

const AboutText = styled.p`
  font-size: var(--font-body-large);
  line-height: 1.8;
  opacity: 0.85;
   @media (max-width : 490px) {
  font-size: var(--font-body-xl);
    
  }
`;

const Guarantee = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  font-size: var(--font-body-large);
  font-weight: 600;
  color: var(--color-base-primary);
    @media (max-width : 490px) {
  font-size: var(--font-body-xxl);
    
  }
`;

function FooterAbout() {
  return (
    <AboutContainer>
      <AboutTitle>فروشگاه اینترنتی فیت‌لند</AboutTitle>
      <AboutText>
        فروشگاه لوازم ورزشی فیت‌لند در سال ۱۴۰۳ کار خود را به صورت حرفه‌ای آغاز کرد 
        و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، 
        والیبال، تنیس و... همچنین پوشش ورزشی و تجهیزات ورزشی، از برندهای مختلف 
        دنیا در محیط کاربری استفاده می‌کند.
      </AboutText>
      <AboutText>
        اطمینان و با مجرب‌ترین مشاوران و کارشناسان ورزشی فعالیت می‌کنند. 
        فروشگاه فیت‌لند دارای تمامی خدمات و خدمات ورزشی برای شما در این بخش 
        می‌باشند و تمامی محصولات خود را با ۷ روز ضمانت بازگشت همراه با کارتنی، 
        سلامت فیزیکی، با سریع‌ترین روش‌های ارسال به سراسر ایران در اختیار 
        مشتریان خود قرار می‌دهد.
      </AboutText>
      <Guarantee> یک هفته ضمانت بازگشت</Guarantee>
    </AboutContainer>
  );
}

export default FooterAbout;