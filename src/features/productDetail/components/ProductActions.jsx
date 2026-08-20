// src/features/productDetail/components/ProductActions.jsx
import styled from 'styled-components';
import { useState } from 'react';
import ShareIcon from '../images/share';
import CartIcon from '../images/product-cart-icon';
import HeartIcon from '../images/heart';
import ArrowUpIcon from '../images/ArrowUpIcon';
import ArrowDownIcon from '../images/ArrowDownIcon';

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`;

const SectionTitle = styled.span`
  font-size: var(--font-body-large);
  font-weight: 600;
  display: block;
  margin-bottom: 12px;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ColorOption = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({ $active }) => 
    $active ? 'var(--color-base-primary)' : 'var(--color-neutral-800)'
  };
  background: ${({ color }) => color};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    border-color: var(--color-base-primary);
  }
`;

const SizeContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-height: ${({ $isOpen }) => $isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
`;

const SizeOption = styled.button`
  padding: 8px 28px;
  border-radius: 8px;
  border: 2px solid ${({ $active }) => 
    $active ? 'var(--color-base-primary)' : 'var(--color-neutral-300)'
  };
  background: ${({ $active }) => 
    $active ? 'var(--color-base-primary)' : 'var(--color-neutral-500)'
  };
  color: ${({ $active }) => 
    $active ? 'white' : 'black'
  };
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: var(--font-body-md);

  &:hover {
    border-color: var(--color-base-primary);
    background: ${({ $active }) => 
      $active ? 'var(--color-base-primary)' : 'var(--color-neutral-800)'
    };
    color: white;
  }
`;

const QuantityContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 0.15rem solid var(--color-base-primary);
  color: var(--color-base-primary);
`;

const QuantityButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--font-body-xxxl);
  display: flex;
  align-items: center;
  color: var(--color-base-primary);
  background-color: transparent;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-base-primary);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const QuantityDisplay = styled.span`
  font-size: var(--font-body-large);
  font-weight: 700;
  min-width: 30px;
  text-align: center;
`;

const AddToCartButton = styled.button`
  padding: 14px 32px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: var(--font-body-large);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(250, 84, 28, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const WishlistButton = styled.button`
  padding: 12px 24px;
  background: transparent;
  color: var(--color-base-secondary);
  border: 2px solid var(--color-neutral-300);
  border-radius: 12px;
  font-size: var(--font-body-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: var(--color-error-800);
    color: var(--color-error-800);
    background: var(--color-error-50);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SizeTitle = styled(SectionTitle)`
  width: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  user-select: none;
  margin-bottom: 8px;
  
  &:hover {
    color: var(--color-base-primary);
  }
`;

const SizeIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
   width: 24px;     
  height: 24px;
     
  svg {
    width: 20px;
    height: 20px;
  }
`;

function ProductActions({
  colors,
  sizes,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  onAddToCart,
  onAddToWishlist,
  stock,
}) {
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity);
    }
  };

  const toggleSize = () => {
    setIsSizeOpen(!isSizeOpen);
  };

  return (
    <ActionsContainer>
      {colors && colors.length > 0 && (
        <div>
          <SectionTitle>رنگ</SectionTitle>
          <ColorContainer>
            {colors.map((color) => (
              <ColorOption
                key={color.id}
                color={color.hex}
                $active={selectedColor?.id === color.id}
                onClick={() => setSelectedColor(color)}
                title={color.name}
              />
            ))}
          </ColorContainer>
        </div>
      )}

      {sizes && sizes.length > 0 && (
        <div>
          <SizeTitle onClick={toggleSize}>
            سایز
            <SizeIconWrapper $isOpen={isSizeOpen}>
              {isSizeOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </SizeIconWrapper>
          </SizeTitle>
          
          <SizeContainer $isOpen={isSizeOpen}>
            {sizes.map((size) => (
              <SizeOption
                key={size}
                $active={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </SizeOption>
            ))}
          </SizeContainer>
        </div>
      )}

      <div style={{display : 'flex' , alignItems : 'center' , justifyContent : 'space-between'}}>
        <QuantityContainer>
          <QuantityButton 
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
          >
            −
          </QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton 
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= stock}
          >
            +
          </QuantityButton>
        </QuantityContainer>
        <ButtonRow>
          <AddToCartButton 
            onClick={onAddToCart}
            disabled={stock === 0}
          >
            افزودن به سبد خرید <CartIcon />
          </AddToCartButton>
          <WishlistButton onClick={onAddToWishlist}>
            <HeartIcon fill='red'/>
          </WishlistButton>
        </ButtonRow>
        <ShareIcon />
      </div>
    </ActionsContainer>
  );
}

export default ProductActions;