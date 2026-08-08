
import styled from 'styled-components' ;
import LikeIcon from './images/icons/like.jpg';
import productIcon from './images/icons/product.png';
import calendarIcon from './images/icons/calendar.png';
import ManImage from './images/icons/man.png'
import FooterImage from './images/icons/FooterImage.png'
import Button from '../Button/Button';
import ButtonIcon from './images/icons/ButtonIcon'
const HeaderContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--global-padding-medium);
  position: relative;
  padding: 0 10%;
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
   align-items: center;
   flex-direction: column;
   gap: 24px;
   `
const LeftSectionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  `
const LeftSectionItemIcon = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LeftSectionItemImg = styled.img`
  display: inline-block;
  width: 100%;
  object-fit: cover;
  `
const LeftSectionDetils = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 8px;

`
const LeftSectionItemCount = styled.div`
  color: var(--color-base-secondary);
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
 font-size: var(--font-body-md);
 color: var(--color-neutral-800);
 font-weight: var(--font-weight-medium);
 
 `
const RightSectionTitle = styled.div`
   font-size: var(--font-body-xxl);
   color: var(--color-base-secondary);
   font-weight: var(--font-weight-medium);
    @media (max-width : 460px) {
 font-size: var(--font-body-large);
  
 }
`
const RightSectionSubTitle = styled.div`
     font-size: var(--font-body-xxxl);
 color: var(--color-base-primary);
   font-weight: var(--font-weight-bold);
       @media (max-width : 460px) {
 font-size: var(--font-body-xl);
  
 }

`
const RightSectionp = styled.div`
 color: var(--color-neutral-800);
   font-weight: var(--font-weight-bold);
       @media (max-width : 460px) {
 font-size: var(--font-body-md);
 margin: 8px 0;
  
 }

  
`
const RightSectionImg = styled.img`
  
  @media (max-width : 460px) {
     width: 55%;
     height: 90%;
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
         <LeftSectionItems >
          <LeftSectionItem >
            <LeftSectionItemIcon>
              <LeftSectionItemImg src= {productIcon} alt = 'product.png' />
            </LeftSectionItemIcon>
            <LeftSectionDetils>
              <LeftSectionItemCount> 300 +</LeftSectionItemCount>
              <LeftSectionItemTitle>محصولات متنوع</LeftSectionItemTitle>
            </LeftSectionDetils>
          </LeftSectionItem>
           <LeftSectionItem >
            <LeftSectionItemIcon>
              <LeftSectionItemImg src= {LikeIcon} alt = 'like.png' />
            </LeftSectionItemIcon>
            <LeftSectionDetils>
              <LeftSectionItemCount> 95 %</LeftSectionItemCount>
              <LeftSectionItemTitle> رضایت مشتری</LeftSectionItemTitle>
            </LeftSectionDetils>
          </LeftSectionItem>

           <LeftSectionItem >
            <LeftSectionItemIcon>
              <LeftSectionItemImg src= {calendarIcon} alt = 'calendar.png' />
            </LeftSectionItemIcon>
            <LeftSectionDetils>
              <LeftSectionItemCount>روز 4</LeftSectionItemCount>
              <LeftSectionItemTitle>از خرید تا دریافت</LeftSectionItemTitle>
            </LeftSectionDetils>
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