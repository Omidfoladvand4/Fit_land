import styled from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BasketSteps from "./components/BasketSteps";
import OrderSummary from "./components/OrderSummary";
import { products } from "../products/data/products";

const BasketContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  position: relative;

  @media (max-width: 1030px) {
    flex-direction: column;
    padding: 0 10px;
    width: 100%;
  }
`;

const BasketContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px; /* فاصله از بالا برای استپ‌ها */
  margin-left: 24px;

  @media (max-width: 1030px) {
    padding-top: 0;
    margin-left: 0;
    width: 100%;
  }
`;
const SubmitButton = styled.button`
  width: 400px;
  margin-top: 16px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: var(--font-body-large);
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
  @media (max-width : 1024px) {
     width: 95%;
     margin: 12px auto;
     
  }
`;

function Basket() {
  const location = useLocation();
  const navigate = useNavigate();

  // مدیریت State (بدون Context)
  const basketItems = [products[0], products[5], products[2], products[3]];
  const removeItem = (itemId) => {
    // اینجا می‌توانید State واقعی بگذارید یا به سرور بفرستید
    console.log("حذف آیتم با شناسه:", itemId);
  };

  const handleProceed = () => {
    if (location.pathname === "/Basket/") {
      navigate("/Basket/address");
    } else if (location.pathname === "/Basket/address") {
      navigate("/Basket/pay");
    }
  };

  return (
    <BasketContainer>
      <BasketContent>
      <BasketSteps />

        {/* اینجا داده‌ها از طریق useOutletContext به فرزندان می‌رسند */}
        <Outlet context={{ items: basketItems, onRemove: removeItem }} />
      </BasketContent>

      {location.pathname === "/Basket/" && (
        <OrderSummary items={basketItems} onProceed={handleProceed} />
      )}
       {location.pathname === "/Basket/address" && (
             <SubmitButton onClick={handleProceed}>
          ثبت نشانی <span>←</span>
      </SubmitButton>
      )}
      
    </BasketContainer>
  );
}

export default Basket;
