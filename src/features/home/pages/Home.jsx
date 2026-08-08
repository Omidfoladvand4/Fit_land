// src/features/home/pages/Home.jsx
import styled from 'styled-components';
import Header from '../../shared/header/Header';
import ProductSection from '../components/ProductSection/ProductSection';
import NikeImg from '../images/NikeImage.png';
import PumaImg from '../images/PumaImage.png';

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  width: 100%;
  margin: 0 auto;
`;

function Home() {
  const latestProductsList = [
    { id: 1, name: 'نایک', image: NikeImg },
    { id: 2, name: 'پوما', image: PumaImg },
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
      </MainSection>
    </HomeWrapper>
  );
}

export default Home;