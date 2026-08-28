import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";

const BasketItemsContainer = styled.div`
  width: 807px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width : 1024px) {
      width: 100%;
      margin-top: 18px;
      align-items: center;
  }
`;

function BasketItemsList() {
  const { items, onRemove } = useOutletContext();

  if (!items || items.length === 0) {
    return <div>سبد خرید شما خالی است.</div>;
  }

  return (
    <BasketItemsContainer>
      {items.map((item) => (
        <BasketItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </BasketItemsContainer>
  );
}
export default BasketItemsList;