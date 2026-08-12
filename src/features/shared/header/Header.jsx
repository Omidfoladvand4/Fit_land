
import styled from 'styled-components' ;
import LikeIcon from './images/icons/like.png';
import productIcon from './images/icons/product.png';
import calendarIcon from './images/icons/calendar.png';
import ManImage from './images/icons/man.png'
import FooterImage from './images/icons/FooterImage.png'
import Button from '../Button/Button';
import ButtonIcon from './images/icons/ButtonIcon'
const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--global-padding-medium);
  position: relative;
`
const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  @media (max-width : 460px) {
     display: none;
  }
`
const LeftSectionItems = styled.div`
   display: flex;
   align-items:  flex-start;
   justify-content: center;
   flex-direction: column;
   gap: 24px;
   `
const LeftSectionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  `
const LeftSectionItemIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-info-200);
  flex-shrink: 0;
  border-radius: 12px;
`
const LeftSectionItemImg = styled.img`
  display: block;
  width: 60px;
  object-fit: cover;
  `
const LeftSectionDetails = styled.div`
  display: flex;
  background-color: transparent;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  justify-content: center; 
  height: 100%; 
`

const LeftSectionItemCount = styled.div`
  color: var(--color-base-secondary);
   font-size: var(--font-body-xl);
  font-weight: 700;
  
  `
const LeftSectionItemTitle = styled.div`
font-size: var(--font-body-md);
  
`
const RightSection = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  @media (max-width : 460px) {
     width: 100%;
  }
`
const RightSectionList = styled.div`
   line-height: 2.1;
   display: flex;
   align-items: flex-start;
   gap: 4px;
   flex-direction: column;
   @media (max-width : 460px) {
     width: 80%;
     line-height: 1.2;
   }
`
const RightSectionDiv = styled.div`
 font-size: var(--font-body-large);
 color: var(--color-neutral-800);
 font-weight: var(--font-weight-medium);
 
 `
const RightSectionTitle = styled.div`
   font-size: var(--font-body-xxl);
   color: var(--color-base-secondary);
   font-weight: var(--font-weight-medium);

`
const RightSectionSubTitle = styled.div`
     font-size: var(--font-body-xxxl);
 color: var(--color-base-primary);
   font-weight: var(--font-weight-bold);

`
const RightSectionp = styled.div`
 color: var(--color-neutral-800);
   font-weight: var(--font-weight-bold);
       @media (max-width : 460px) {
 margin: 8px 0;
  
 }

  
`
const RightSectionImg = styled.img`
  
  @media (max-width : 460px) {
     width: 130px;
     height: 149px;
     object-fit: cover;
     position: absolute;
     z-index: 98;
     button: 0;
     left: -40px;
     z-index: -1;
  }
`
const  Footer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom : 25px;
  z-index: -1;
  @media (max-width : 460px) {
    display: none;
  }
`
const FooterImg = styled.img`
  width: 100%;
  object-fit: cover;
`
function Header() {
  return (
    <HeaderContainer>
      <RightSection >
        
        <RightSectionList>
          <RightSectionDiv>راحت و مطمئن خرید کنید</RightSectionDiv>
          <RightSectionTitle>همراه تو درمسیر سلامتی</RightSectionTitle>
          <RightSectionSubTitle>سهم  بزرگ خودتان راامروز بگیرید!</RightSectionSubTitle>
          <RightSectionp>بزرگترین حراج فصل فیت لند همین حالا شروع کن و محصولات  را با یک تخفیف شفت انگیز بخر</RightSectionp>
          <Button 
          text='مشاهده محصولات' 
          path= '/' color= 'var(--color-base-background)' 
          backgroundColor = 'var(--color-base-secondary)'
          icon={<ButtonIcon />}
          />
        </RightSectionList>
        <RightSectionImg src={ManImage} alt='man.png'/>
      </RightSection>
      <LeftSection>
  <LeftSectionItems>
    <LeftSectionItem>
      <LeftSectionItemIcon>
        <LeftSectionItemImg src={productIcon} alt="آیکون محصولات" />
      </LeftSectionItemIcon>
      <LeftSectionDetails>
        <LeftSectionItemCount>۳۰۰ +</LeftSectionItemCount>
        <LeftSectionItemTitle>محصولات متنوع</LeftSectionItemTitle>
      </LeftSectionDetails>
    </LeftSectionItem>

    <LeftSectionItem>
      <LeftSectionItemIcon>
        <LeftSectionItemImg src={LikeIcon} alt="آیکون پسندیدن" />
      </LeftSectionItemIcon>
      <LeftSectionDetails>
        <LeftSectionItemCount>۹۵ %</LeftSectionItemCount>
        <LeftSectionItemTitle>رضایت مشتری</LeftSectionItemTitle>
      </LeftSectionDetails>
    </LeftSectionItem>

    <LeftSectionItem>
      <LeftSectionItemIcon>
        <LeftSectionItemImg src={calendarIcon} alt="آیکون تقویم" />
      </LeftSectionItemIcon>
      <LeftSectionDetails>
        <LeftSectionItemCount>۴ روز</LeftSectionItemCount>
        <LeftSectionItemTitle>از خرید تا دریافت</LeftSectionItemTitle>
      </LeftSectionDetails>
    </LeftSectionItem>
  </LeftSectionItems>
</LeftSection>
      <Footer > 
        <FooterImg  src = {FooterImage}/>
      </Footer>
    </HeaderContainer>
  )
}

export default Header