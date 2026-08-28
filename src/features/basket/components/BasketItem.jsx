import styled from "styled-components";
import CloseIcon from "../../shared/header/images/icons/CloseIcon";
import { useState } from "react";

const CartItem = styled.div`
  width: 100%;
  display: flex;
  height: 230px;
  gap: 16px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-neutral-800);
  position: relative;
`;
const ImageBoxItem = styled.div`
  width: 40%;
  position: relative;
  @media (max-width : 768px) {
     width: 30%;
  }
`;
const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Discount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width:  4em;
  height: 2em;
  background-color: var(--color-base-primary);
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 25%;
  color: var(--color-base-background);
  font-weight: 600;
`;
const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  position: relative;
  line-height: 1.8;
`;
const ItemName = styled.h1`
  font-size: var(--font-body-xl);
  margin-left: 15px;
`;
const ItemCategory = styled.h2`
  font-size: var(--font-body-md);
  color: var(--color-neutral-800);
`;
const Price = styled.div`
  font-size: var(--font-body-large);
  color: var(--color-base-secondary);
  font-weight: bolder;
`;
const Oldprice = styled.div`
  font-size: var(--font-body-large);
  color: var(--color-neutral-800);
  font-weight: 500;
  text-decoration: line-through;
  @media (max-width : 768px) {
     display: none;
  }
`;
const Size = styled.div`
  color: var(--color-base-secondary);
  font-weight: 700;
  font-size: var(--font-body-large);
`;
const ColorBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;
const ColorName = styled.div`
  color: var(--color-neutral-800);
`;
const Color = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor || "var(--color-neutral-300)"};
`;
const Buttons = styled.div`
  width: 6em;
  position: absolute;
  bottom: 14px;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-neutral-800);
  border: 1px solid black;
`;
const Count = styled.div`
  font-size: var(--font-body-large);
`;
const Btn = styled.div`
  cursor: pointer;
  font-size: var(--font-body-large);
  font-weight: bolder;
`;
const DeleteIcon = styled.div`
  position: absolute;
  top: 7px;
  left: 8px;
  cursor: pointer;
`;

function BasketItem({ item, onRemove }) {
  const [quantity, setQuantity] = useState(1); // State داخلی برای تعداد

  return (
    <CartItem>
      <ImageBoxItem>
        <ImageItem src={item.image} />
        {item.hasDiscount && <Discount>%{item.discount}</Discount>}
      </ImageBoxItem>
      <ItemInfo>
        <ItemName>{item.title}</ItemName>
        <ItemCategory>{item.category}</ItemCategory>
        <Price>{item.price.toLocaleString()} تومان</Price>
        {item.hasDiscount && (
          <Oldprice>{item.originalPrice.toLocaleString()} تومان</Oldprice>
        )}
        <Size>سایز: {item.sizes[0]}</Size>
        <ColorBox>
          <ColorName>رنگ: {item.colors[0].name}</ColorName>
          <Color $bgColor={item.colors[0].hex} />
        </ColorBox>
        <Buttons>
          <Btn onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</Btn>
          <Count>{quantity}</Count>
          <Btn onClick={() => setQuantity((q) => q + 1)}>+</Btn>
        </Buttons>
      </ItemInfo>
      <DeleteIcon onClick={() => onRemove(item.id)}>
        <CloseIcon />
      </DeleteIcon>
    </CartItem>
  );
}

export default BasketItem;
