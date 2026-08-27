import styled from "styled-components"
import ArrowIcon from "../Icons/Arrow"
import ShoppingCartIcon from "../Icons/ShoppingIcon"
import AddLocIcon from "../Icons/LocationIcon"
import WalletIcon from "../Icons/WalletIcon"
const BasketSteptsContanier = styled.div`
    position: absolute;
    top: 0;
    left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: var(--color-neutral-800);
`
const Step = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const StepTitle = styled.div`
    
`
function BasketSteps() {
  return (
    <BasketSteptsContanier>
        <Step >
            <ShoppingCartIcon />
            <StepTitle >سبد خرید</StepTitle>
        </Step>
        <ArrowIcon/>
         <Step >
            <AddLocIcon />
            <StepTitle >ثبت نشانی</StepTitle>
        </Step>
        <ArrowIcon/>
         <Step >
             <WalletIcon />
            <StepTitle >پرداخت</StepTitle>
        </Step>
    </BasketSteptsContanier>
  )
}

export default BasketSteps