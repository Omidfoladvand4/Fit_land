
import styled from 'styled-components';

const Card = styled.div`
  min-height: 367px;
  background: var(--color-base-background);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid transparent;
  transition: border 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-neutral-800);
    img {
        transform: scaleX(1.01) ;
        opacity: 1 ;
    }
  }
`;

const DiscountBadge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: var(--font-body-xs);
  font-weight: 600;
  z-index: 2;
  position: absolute;
  top: 6px;
  left: 2px;
  background-color: var(--color-base-primary);
`;
const Productimage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    opacity: 0.8;
    transition: all 0.3s ease;
`
const VipBadge = styled.div`
  font-weight: 700;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  line-height: 1.3;
  padding: var(--button-padding-medium);
`;

const ProductName = styled.h3`
  font-size: var(--font-body-lg);
  font-weight: 600;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: var(--font-body-md);
  opacity: 0.9;
`;

const ProductSize = styled.p`
  font-size: var(--font-body-sm);
  opacity: 0.7;
`;


function SpecialCard({product}) {
  return (
    <Card>
      <DiscountBadge>
        %{product.discount ||  'VIP'}
      </DiscountBadge>
      <Productimage loading='lazy' src= {product.image} alt= {product.name}/>
      <ProductInfo>
      <VipBadge>{product.name}</VipBadge>
        <ProductName>{product.title}</ProductName>
        <ProductPrice>{product.price} تومان</ProductPrice>
        <ProductSize>{product.size}</ProductSize>
      </ProductInfo>
    </Card>
  );
}

export default SpecialCard;