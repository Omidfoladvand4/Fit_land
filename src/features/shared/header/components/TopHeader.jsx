// src/features/shared/header/components/TopHeader.jsx
import styled from "styled-components";
import { useEffect, useState } from "react";
import LogoSvg from "../images/Logo.svg";
import SearchIcon from "../images/icons/SearchIcon";
import StarIcon from "../images/icons/StarIcon";
import TrendingIcon from "../images/icons/TrendingIcon";
import DiscountIcon from "../images/icons/DiscountIcon";
import MenuIcon from "../images/icons/MenuIcon";
import CloseIcon from "../images/icons/CloseIcon";
import AuthSection from "./AuthSection";
import { Link, useLocation } from "react-router-dom";

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

  @media (max-width: 490px) {
    display: block;
  }
`;

const TopHeaderMessage = styled.div`
  width: 100%;
  text-align: center;
  background: var(--color-base-secondary);
  color: var(--color-base-background);
  font-size: var(--font-body-md);
  font-weight: 700;
  padding: 10px 8px;

`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: var(--header-margin-medium);
`;

const TopSectionBanner = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 490px) {
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

  @media (max-width: 490px) {
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

  @media (max-width: 490px) {
    width: 100%;
    padding: 10px 14px;
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

const DesktopAuthSection = styled.div`
  @media (max-width: 490px) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-neutral-700);
  margin-top: var(--global-margin-medium);
  padding: var(--global-padding-small);
  font-weight: var(--font-weight-bold);
  border-radius: 14px;
  svg{
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding : 0 ;
  }
  @media (max-width: 490px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    width: 100%;
    height: 100vh;
    gap: 32px;
    flex-direction: column;
    justify-content: flex-start;
    background: var(--color-base-background);
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    padding: 80px 24px 24px 24px;
    border-radius: 0;
    margin: 0;
    overflow-y: auto;
  }
`;

const MenuItems = styled.ul`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 490px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 16px;
  }
  `;

const MenuItem = styled(Link)`
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: var(--font-body-large);
  color: black;
  font-weight: 700;

  &:hover {
    color: var(--color-base-primary);
  }
  @media (max-width : 490px) {
  font-size: var(--font-body-xxxl);
     
  }
`;

const MenuFeatures = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
    @media (max-width: 1024px) {
    width: 55%;
  }
  
  
  @media (max-width: 490px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 16px;
  }
  `;

const MenuFeatur = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-large);
  color: black;
  font-weight: 700;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-base-primary);
  }
    @media (max-width : 490px) {
  font-size: var(--font-body-xxxl);
     
  }
`;

const MobileAuthWrapper = styled.div`
  display: none;

  @media (max-width: 490px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    width: 100%;
  }
`;

const MENU_ITEMS = ["مردانه", "زنانه", "بچگانه", "لوازم ورزشی", "شیکر و جاگ"];

function TopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation()
     useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
    if (location.pathname === '/Sign-in' || location.pathname === '/Sign-up' || location.pathname === '/Verify-code') {
    return null;
  }
  return (
    <TopHeaderContainer>
      <MobileMenu onClick={() => setIsMenuOpen((prev) => !prev)}>
       <MenuIcon />
      </MobileMenu>

    {location.pathname === "/" && (
  <TopHeaderMessage>
    با عضویت در فیت لند اولین ارسال را مهمان ما باشید :)
  </TopHeaderMessage>
)}

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

          <DesktopAuthSection>
            <AuthSection />
          </DesktopAuthSection>
        </TopSectionBanner>

        <Menu $open={isMenuOpen}>
          {isMenuOpen && <CloseIcon setIsOpen={setIsMenuOpen}/>}
          <MenuItems>
            {MENU_ITEMS.map((item, index) => (
              <MenuItem to={`/products/${item}`} key={index}>
                {item}
              </MenuItem>
            ))}
          </MenuItems>

          <MenuFeatures>
            <MenuFeatur to="/products/جدیدترین محصولات">
              <StarIcon />
              جدیدترین محصولات
            </MenuFeatur>
            <MenuFeatur to= '/products/تخفیفات ویژه'>
              <DiscountIcon  />
              تخفیفات ویژه
            </MenuFeatur>
            <MenuFeatur to= '/products/پرفروش ترین ها'>
              <TrendingIcon />
              پرفروش ترین ها
            </MenuFeatur>
          </MenuFeatures>

          <MobileAuthWrapper $open={isMenuOpen}>
            <AuthSection isMobile={true} />
          </MobileAuthWrapper>
        </Menu>
      </TopSection>
    </TopHeaderContainer>
  );
}

export default TopHeader;