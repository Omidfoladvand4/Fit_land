import styled from "styled-components";
import Header from "../../shared/header/Header";
import ProductSection from "../components/ProductSection/ProductSection";
import MainBanner from "../components/Banner/MainBanner";
import NikeImg from "../images/NikeImage.png";
import PumaImg from "../images/PumaImage.png";
import SectionImg from "../images/SectionImage.png";
import Bicycleimage from '../images/BicycleImage.png'
import ProductSlider from "../../shared/Slider/ProductSlider";
import SlideImage_1 from "../images/sliderImage/SlideImage1.png";
import SlideImage_2 from "../images/sliderImage/SlideImage2.png";
import SlideImage_3 from "../images/sliderImage/SlideImage3.png";
import SlideImage_4 from "../images/sliderImage/SlideImage4.png";
import SlideImage_5 from "../images/sliderImage/SlideImage5.png";
import SlideImage_7 from "../images/sliderImage/SlideImage7.png";
import HomeImage from '../images/HomeImage.png'

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const HomeImageBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
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
        <MainBanner image={SectionImg}/>
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
   
        <MainBanner image={Bicycleimage} title="برای لذت بردن از مسیر" paragraph = "دوچرخه ، اسکیت و اسکوتر بگیر"/>
           <ProductSlider
          title="تخفیفات ویژه"
          products={discountProducts}
          background="var(--color-neutral-600)"
        />

             <ProductSection
          products={latestProductsList}
          sectionTitle="پرفروش ترین محصولات"
          sectionParagraph="بهترین و جدیدترین محصولات ورزجدید ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید
"
        />
        <HomeImageBanner src= {HomeImage}/>
      </MainSection>
    </HomeWrapper>
  );
}

export default Home;
