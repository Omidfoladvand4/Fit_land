import styled from "styled-components";
import LogoSvg from "../images/Logo.svg";
import SearchIcon from "../images/icons/SearchIcon";
import UserIcon from "../images/icons/UserIcon";
import BasketIcon from "../images/icons/BasketIcon";
import StarIcon from "../images/icons/StarIcon";
import TrendingIcon from "../images/icons/TrendingIcon";
import DiscountIcon from "../images/icons/DiscountIcon";
import MenuIcon from "../images/icons/MenuIcon";
import { useState } from "react";
const TopHeaderContainer = styled.header`
  width: 100%;
`;

const MobileMenu = styled.div`
width: 30px;
position: absolute;
left: 0;
top: 60px;
display: none;
cursor: pointer;
z-index: 99;
@media (max-width : 460px) {
   display: block;
}
`
const TopHeaderMessage = styled.div`
  width: 100%;
  text-align: center;
  background: var(--color-base-secondary);
  color: var(--color-base-background);
  font-size: var(--font-body-md);
  padding  :  10px 8px;
  @media (max-width : 460px) {
  font-size: var(--font-body-xs);
  }
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: var(--header-margin-medium);
`;

const TopSectionBanner = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
      @media (max-width : 460px) {
   flex-direction: column;
   gap: 16px;
   width: 100%;
  }
`;

const LogoWrapper = styled.div`
line-height: 3;
`;

const LogoImage = styled.img`
  display: block;
`;

const LogoTitle = styled.div`
  color: var(--color-neutral-800);
  @media (max-width : 460px ) {
     display: none;
  }
`;

const SearchBoxWrapper = styled.div`
  width: 50%;
  padding: var(--global-padding-small);
  border-radius: 14px;
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid var(--color-neutral-800);
  background: var(--color-neutral-700);
  svg {
    display: block;
    cursor: pointer;
  }

  @media (max-width : 460px) {
     width: 100%;
     padding:  10px 14px;
  }
`;

const SearchBoxInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding-right: 12px;
  color: var(--color-neutral-800);
  background-color: transparent;
  ::placeholder {
    color: var(--color-neutral-800);
  }
`;

const LastSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media (max-width : 460px) {
     display: none;
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: var(--global-padding-small);
  border-radius: 14px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

const LoginBtn = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-base-primary);
  }
`;

const SignUpBtn = styled.div`
  padding-left: 6px;
  border-left: 2px solid var(--color-base-secondary);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-base-primary);
  }
`;

const UserBasket = styled.div`
  display: flex;
  background-color: var(--color-base-primary);
  padding: var(--global-padding-small);
  border-radius: 14px;
  position: relative;
`;

const UserBasketCount = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: var(--color-base-secondary);
  color: var(--color-base-background);
  position: absolute;
  top: -10px;
  left: -6px;
  border-radius: 100%;
`;

const Menu = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var( --color-neutral-700);
  margin-top: var(--global-margin-medium);
  padding: var(--global-padding-small);
  font-weight: var(--font-weight-bold);
  border-radius: 14px;
  @media (max-width : 460px) {
      display: ${({ $open }) => $open ? 'block' : 'none'};
     width: 100%;
     gap: 12px;
     flex-direction: column;
     z-index: 99;
     position: fixed;
  }
`;

const MenuItems = styled.ul`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width : 460px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    font-size: var(--font-body-xl);
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-base-primary);
  }
`;

const MenuFeatures = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
    @media (max-width : 460px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    font-size: var(--font-body-xl);
  }
`;

const MenuFeatur = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-base-primary);
  }
`;

function TopHeader() {
  const [isMenuOpen , SetIsMenuOpen] = useState(false)
  return (
    <TopHeaderContainer>
      <MobileMenu onClick={() => SetIsMenuOpen(prev => !prev)}>
        <MenuIcon />
      </MobileMenu>
      <TopHeaderMessage>
        باعضویت در فیت لنداولین ارسال را مهمون ما باشید :)
      </TopHeaderMessage>
      <TopSection>
        <TopSectionBanner>
          <LogoWrapper>
            <LogoImage src={LogoSvg} alt="Fit Land Logo" />
            <LogoTitle>فروشگاه لوازم ورزشی فیت لند</LogoTitle>
          </LogoWrapper>
          <SearchBoxWrapper>
            <SearchIcon color="var(--color-base-primary)" />
            <SearchBoxInput placeholder="جستجو" />
          </SearchBoxWrapper>
          <LastSection>
            <AuthSection>
              <SignUpBtn>ثبت نام</SignUpBtn>

              <LoginBtn>
                ورود
                <UserIcon />
              </LoginBtn>
            </AuthSection>
            <UserBasket>
              <BasketIcon />
              <UserBasketCount>0</UserBasketCount>
            </UserBasket>
          </LastSection>
        </TopSectionBanner>
        <Menu $open ={isMenuOpen}>
          <MenuItems>
            <MenuItem>مردانه</MenuItem>
            <MenuItem>زنانه</MenuItem>
            <MenuItem>بچگانه</MenuItem>
            <MenuItem>لوازم ورزشی</MenuItem>
            <MenuItem>شیکر و جاگ</MenuItem>
          </MenuItems>
          <MenuFeatures>
            <MenuFeatur>
              <StarIcon />
              جدیدترین محصولات
            </MenuFeatur>
            <MenuFeatur>
              <DiscountIcon />
              تخفیفات ویژه
            </MenuFeatur>
            <MenuFeatur>
              <TrendingIcon />
              پرفروش ترین ها
            </MenuFeatur>
          </MenuFeatures>
        </Menu>
      </TopSection>
    </TopHeaderContainer>
  );
}

export default TopHeader;
