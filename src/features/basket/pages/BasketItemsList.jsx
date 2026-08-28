// src/features/basket/pages/BasketItemsList.jsx
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";

const BasketItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmptyBasketMessage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-xl);
  color: var(--color-neutral-800);
  border: 1px dashed var(--color-neutral-300);
  border-radius: 12px;
`;

function BasketItemsList() {
  const { items, removeFromCart, updateCartQuantity } = useOutletContext();

  if (!items || items.length === 0) {
    return (
      <BasketItemsContainer>
        <EmptyBasketMessage>
          سبد خرید شما خالی است.
        </EmptyBasketMessage>
      </BasketItemsContainer>
    );
  }

  return (
    <BasketItemsContainer>
      {items.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          onRemove={removeFromCart}
          onUpdateQuantity={updateCartQuantity}
        />
      ))}
    </BasketItemsContainer>
  );
}

export default BasketItemsList;