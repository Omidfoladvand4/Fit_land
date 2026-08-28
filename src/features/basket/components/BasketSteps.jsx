import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ArrowIcon from "../Icons/Arrow";
import ShoppingCartIcon from "../Icons/ShoppingIcon";
import AddLocIcon from "../Icons/LocationIcon";
import WalletIcon from "../Icons/WalletIcon";

const ACTIVE_COLOR = "var(--color-base-secondary)";
const INACTIVE_COLOR = "var(--color-neutral-800)";

const BasketStepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  color: var(--color-neutral-800);
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width : 1026px) {
    width: 100%;
    justify-content: center;
    position: static;
    margin: 16px 0;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ $isReached }) =>
    $isReached ? ACTIVE_COLOR : INACTIVE_COLOR};
`;

const StepTitle = styled.div`
  font-weight: ${({ $isReached }) => ($isReached ? "800" : "400")};
  font-size: var(--font-body-md);
  @media (max-width : 380px) {
  font-size: var(--font-body-xs);
    
  }
`;

function BasketSteps() {
  const location = useLocation();

  // محاسبه شماره مرحله فعلی (0 = سبد خرید، 1 = آدرس، 2 = پرداخت)
  let currentStep = 0;
  if (location.pathname === "/Basket/address") currentStep = 1;
  if (location.pathname === "/Basket/pay") currentStep = 2;

  // آیا این مرحله رسیده شده است؟ (مرحله فعلی + مراحل قبلی)
  const isBasketReached = currentStep >= 0; // همیشه درست است
  const isAddressReached = currentStep >= 1;
  const isPaymentReached = currentStep >= 2;

  // رنگ فلش‌ها
  // فلش اول: وقتی به مرحله آدرس یا بعد از آن رسیده‌ایم
  const isArrow1Active = currentStep >= 1;
  // فلش دوم: وقتی به مرحله پرداخت رسیده‌ایم
  const isArrow2Active = currentStep >= 2;

  return (
    <BasketStepsContainer>
      <Step $isReached={isBasketReached}>
        <ShoppingCartIcon color={isBasketReached ? ACTIVE_COLOR : INACTIVE_COLOR} />
        <StepTitle $isReached={isBasketReached}>سبد خرید</StepTitle>
      </Step>
      
      {/* فلش اول */}
      <ArrowIcon color={isArrow1Active ? ACTIVE_COLOR : INACTIVE_COLOR} />
      
      <Step $isReached={isAddressReached}>
        <AddLocIcon color={isAddressReached ? ACTIVE_COLOR : INACTIVE_COLOR} />
        <StepTitle $isReached={isAddressReached}>ثبت نشانی</StepTitle>
      </Step>
      
      {/* فلش دوم */}
      <ArrowIcon color={isArrow2Active ? ACTIVE_COLOR : INACTIVE_COLOR} />
      
      <Step $isReached={isPaymentReached}>
        <WalletIcon color={isPaymentReached ? ACTIVE_COLOR : INACTIVE_COLOR} />
        <StepTitle $isReached={isPaymentReached}>پرداخت</StepTitle>
      </Step>
    </BasketStepsContainer>
  );
}

export default BasketSteps;