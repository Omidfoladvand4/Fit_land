import styled from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BasketSteps from "./components/BasketSteps";
import OrderSummary from "./components/OrderSummary";
import { useShop } from "../../context/ShopContext";

const BasketContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 32px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BasketContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-left: 24px;

  @media (max-width: 768px) {
    padding-top: 0;
    margin-left: 0;
  }
`;

function Basket() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, removeFromCart, updateCartQuantity } = useShop();

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

        <Outlet
          context={{
            items: cartItems,
            removeFromCart,
            updateCartQuantity,
          }}
        />
      </BasketContent>

      {location.pathname === "/Basket/" && (
        <OrderSummary items={cartItems} onProceed={handleProceed} />
      )}
    </BasketContainer>
  );
}

export default Basket;
