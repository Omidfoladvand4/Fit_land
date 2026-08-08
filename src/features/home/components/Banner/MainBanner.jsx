import styled from 'styled-components';
import Button from '../../../shared/Button/Button';

const BannerWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 490px) {
    height: 250px;
  }
`;

const Overlay = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  @media (max-width : 490px) {
    display: block;
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
  position: relative;
  z-index: 2;
  color: var(--color-base-background);
`;

const BannerDetail = styled.div``;

const BannerTitle = styled.div`
  font-size: var(--font-body-xl);
  color: var(--color-base-background);

  @media (max-width: 490px) {
    font-size: var(--font-body-large);
  }
`;

const BannerParagraph = styled.div`
  font-size: var(--font-body-xxl);
  color: var(--color-info-500);
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
      <Overlay />
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