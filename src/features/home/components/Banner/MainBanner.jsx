
import styled from 'styled-components';
import Button from '../../../shared/Button/Button';

const BannerWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: url(${({ $image }) => $image});
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 490px) {
    background-size: cover;
    height: 250px;
  }
`;

const BannerContainer = styled.div`
  line-height: 1.7;
  display: flex;
  align-items: flex-start;
  gap: var(--global-margin-small);
  justify-content: space-between;
  flex-direction: column;
  margin-right: 15%;
`;

const BannerDetail = styled.div``;

const BannerTitle = styled.div`
  font-size: var(--font-body-xl);
  
  @media (max-width: 490px) {
    font-size: var(--font-body-large);
  }
`;

const BannerParagraph = styled.div`
  font-size: var(--font-body-xxl);
  color: var(--color-base-secondary);
  font-weight: var(--font-weight-bold);
  
  @media (max-width: 490px) {
    font-size: var(--font-body-large);
  }
`;

function MainBanner({
  image,
  title = "برای حال خوب",
  paragraph = "لوازم ایروبیک و تناسب اندام بگیر",
  buttonText = "مشاهده همه محصولات",
  buttonBackground = "var(--color-base-secondary)",
  onButtonClick,
}) {
  return (
    <BannerWrapper $image={image}>
      <BannerContainer>
        <BannerDetail>
          <BannerTitle>{title}</BannerTitle>
          <BannerParagraph>{paragraph}</BannerParagraph>
        </BannerDetail>
        <Button
          text={buttonText}
          backgroundColor={buttonBackground}
          onClick={onButtonClick}
        />
      </BannerContainer>
    </BannerWrapper>
  );
}

export default MainBanner;