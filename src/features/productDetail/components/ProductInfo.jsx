// src/features/productDetail/components/ProductInfo.jsx
import styled from 'styled-components';
import ProductActions from './ProductActions';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  color: var(--color-base-secondary);
  margin: 0;
  line-height: 1.3;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  gap: 8px;
  background-color: rgba(250, 84, 28, 0.3);
  font-size: var(--font-body-md);
  border-radius: 6px;

  .stars {
    color: #f59e0b;
    display: block;
  }

  .count {
    display: block;
    font-weight: bolder;
    
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
font-size: var(--font-body-large);
`;

const Price = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-base-secondary);
`;

const OriginalPrice = styled.span`
  color: var(--color-neutral-800);
  text-decoration: line-through;
`;

const DiscountBadge = styled.span`
  padding: 4px 10px;
  background: var(--color-base-primary);
  color: var(--color-base-background);
  font-size: var(--font-body-sm);
  font-weight: 600;
  margin-right: 12px;
  border-radius: 6px;
`;


function ProductInfo({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  onAddToCart,
  onAddToWishlist,
}) {

  return (
    <InfoContainer>
      <InfoHeader>
        <Title>{product.title}</Title>
      
      <Rating>
        <div className="stars">⭐</div>
        <div className="count">{product.rating}</div>
      </Rating>
      </InfoHeader>

      <PriceContainer>
        <Price>{product.finalPrice.toLocaleString()} تومان</Price>
        {product.discount > 0 && (
          <div>
            <OriginalPrice>{product.price.toLocaleString()} </OriginalPrice>
            <DiscountBadge>٪ {product.discount}</DiscountBadge>
          </div>
        )}
      </PriceContainer>



      <ProductActions
        colors={product.colors}
        sizes={product.sizes}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        quantity={quantity}
        setQuantity={setQuantity}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
        stock={product.stock}
      />
    </InfoContainer>
  );
}

export default ProductInfo;