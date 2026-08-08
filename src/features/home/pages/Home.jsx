
import styled from 'styled-components';
import Header from '../../shared/header/Header';
import ProductSection from '../components/ProductSection/ProductSection';
import NikeImg from '../images/NikeImage.png';
import PumaImg from '../images/PumaImage.png';
import SectionImg from '../images/SectionImage.png'
import Button from '../../shared/Button/Button';
import ProductSlider from '../../shared/Slider/ProductSlider'

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  background: url(${SectionImg});
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width : 490px) {
     background-size: cover;
     height: 250px;
  }
  
`
const MainBannerContainer = styled.div `
   line-height: 1.7;
   display: flex;
   align-items: flex-start;
   gap: var(--global-margin-small);
   justify-content: space-between;
   flex-direction: column;
   margin-right: 15%;


`
const MainBannerDetail = styled.div`

 
`
const MainBannerTitle = styled.div`
font-size: var(--font-body-xl);
 @media (max-width : 490px) {
font-size: var(--font-body-large);
   
 }

`
const MainBannerParagraph = styled.div`
font-size: var(--font-body-xxl);
color: var(--color-base-secondary);
font-weight: var(--font-weight-bold);
 @media (max-width : 490px) {

font-size: var(--font-body-large);
   
 }
`
function Home() {
  const latestProductsList = [
    { id: 1, name: 'نایک', image: NikeImg },
    { id: 2, name: 'پوما', image: PumaImg },
  ];
const discountProducts = [
    {
      id: 1,
      name: "کفش نایک مدل S-2000",
      price: "۲۰۰,۰۰۰",
      size: "از سایز ۱ تا XXL",
      discount: "۲۴",
      vipLabel: "VIP",
      image : PumaImg
    },
        {
      id: 2,
      name: "کفش نایک مدل S-2000",
      price: "۲۰۰,۰۰۰",
      size: "از سایز ۱ تا XXL",
      discount: "۲۴",
      vipLabel: "VIP",
       image : PumaImg
    },
        {
      id: 3,
      name: "کفش نایک مدل S-2000",
      price: "۲۰۰,۰۰۰",
      size: "از سایز ۱ تا XXL",
      discount: "۲۴",
      vipLabel: "VIP",
       image : PumaImg
    },

     {
      id: 4,
      name: "کفش نایک مدل S-2000",
      price: "۲۰۰,۰۰۰",
      size: "از سایز ۱ تا XXL",
      discount: "۲۴",
      vipLabel: "VIP",
       image : PumaImg
    },
     {
      id: 5,
      name: "کفش نایک مدل S-2000",
      price: "۲۰۰,۰۰۰",
      size: "از سایز ۱ تا XXL",
      discount: "۲۴",
      vipLabel: "VIP",
       image : PumaImg
    },
    
  ];
  return (
    <HomeWrapper>
      <Header />
      <MainSection>
        <ProductSection
          products={latestProductsList}
          sectionTitle="جدیدترین محصولات"
          sectionParagraph="بهترین و جدیدترین محصولات ورزجدید ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید
"
        />
        <MainBanner >
            <MainBannerContainer>
                   <MainBannerDetail>
                     <MainBannerTitle>برای حال خوب</MainBannerTitle>
                    <MainBannerParagraph>لوازم ایروبیک و تناسب اندام بگیر</MainBannerParagraph>
                   </MainBannerDetail>
                      <Button  text='مشاهده همه محصولات' backgroundColor='var(--color-base-secondary)'/>
            </MainBannerContainer>
        </MainBanner>
        <ProductSlider
        title="جدید ترین کفش های ورزشی"
        products={discountProducts}
        background = 'var(--color-neutral-600)'
      />
      </MainSection>
    </HomeWrapper>
  );
}

export default Home;