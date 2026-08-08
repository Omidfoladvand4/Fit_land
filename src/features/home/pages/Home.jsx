import styled from "styled-components";
import Header from "../../shared/header/Header";
import ProductSection from "../components/ProductSection/ProductSection";
import NikeImg from "../images/NikeImage.png";
import PumaImg from "../images/PumaImage.png";
import SectionImg from "../images/SectionImage.png";
import Button from "../../shared/Button/Button";
import ProductSlider from "../../shared/Slider/ProductSlider";
import SlideImage_1 from "../images/sliderImage/SlideImage1.png";
import SlideImage_2 from "../images/sliderImage/SlideImage2.png";
import SlideImage_3 from "../images/sliderImage/SlideImage3.png";
import SlideImage_4 from "../images/sliderImage/SlideImage4.png";
import SlideImage_5 from "../images/sliderImage/SlideImage5.png";
import SlideImage_6 from "../images/sliderImage/SlideImage6.png";
import SlideImage_7 from "../images/sliderImage/SlideImage7.png";

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

  @media (max-width: 490px) {
    background-size: cover;
    height: 250px;
  }
`;
const MainBannerContainer = styled.div`
  line-height: 1.7;
  display: flex;
  align-items: flex-start;
  gap: var(--global-margin-small);
  justify-content: space-between;
  flex-direction: column;
  margin-right: 15%;
`;
const MainBannerDetail = styled.div``;
const MainBannerTitle = styled.div`
  font-size: var(--font-body-xl);
  @media (max-width: 490px) {
    font-size: var(--font-body-large);
  }
`;
const MainBannerParagraph = styled.div`
  font-size: var(--font-body-xxl);
  color: var(--color-base-secondary);
  font-weight: var(--font-weight-bold);
  @media (max-width: 490px) {
    font-size: var(--font-body-large);
  }
`;
function Home() {
  const latestProductsList = [
    { id: 1, name: "نایک", image: NikeImg },
    { id: 2, name: "پوما", image: PumaImg },
  ];
  const discountProducts = [
    {
      id: 1,
      name: "سویشرت نایک مدل AQ-14",
      price: "300,000",
      size: "از سایز 1 تا XXL",
      discount: "24",

      image: SlideImage_2,
    },
    {
      id: 2,
      name: "ست نایکی مدل S-200",
      price: "200,000",
      size: "از سایز ۱ تا XXL",
      discount: "24",

      image: SlideImage_1,
    },
    {
      id: 3,
      name: "کفش نایک مدل S-2000",
      price: "1,200,000",
      size: "از سایز ۱ تا XXL",
      discount: "12",
      image: SlideImage_7,
    },

    {
      id: 4,
      name: "اسکوتر مدل A-155",
      price: "5,000,000",
      size: "26 تا 43",
      discount: "40",
      image: SlideImage_5,
    },
  ];

  const LastestShoes = [
    {
      id: 1,
      name: "نایک مدل AO-14",
      price: "3,400,000",
      size: "از سایز 36 تا 45",
      discount: "24",

      image: SlideImage_4,
    },
    {
      id: 2,
      name: "کفش نایک مدل S-2000",
      price: "2,000,000",
      size: "از سایز 36 تا 45",
      discount: "24",

      image: SlideImage_3,
    },
    {
      id: 3,
      name: "کفش نایک مدل 2024",
      price: "4,200,000",
      size: "از سایز 36 تا 45",
      discount: "42",
      image: SlideImage_4,
    },

    {
      id: 4,
      name: "کفش نایک مدل S-2000",
      price: "2,000,000",
      size: "از سایز 36 تا 45",
      discount: "24",

      image: SlideImage_7,
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
        <MainBanner>
          <MainBannerContainer>
            <MainBannerDetail>
              <MainBannerTitle>برای حال خوب</MainBannerTitle>
              <MainBannerParagraph>
                لوازم ایروبیک و تناسب اندام بگیر
              </MainBannerParagraph>
            </MainBannerDetail>
            <Button
              text="مشاهده همه محصولات"
              backgroundColor="var(--color-base-secondary)"
            />
          </MainBannerContainer>
        </MainBanner>
        <ProductSlider
          title="تخفیفات ویژه"
          products={discountProducts}
          background="var(--color-neutral-600)"
        />

        <ProductSlider
          title="جدید ترین کفش های ورزشی"
          products={LastestShoes}
          background="var(--color-base-background)"
        />
      </MainSection>
    </HomeWrapper>
  );
}

export default Home;
