// src/features/productDetail/components/RelatedProducts.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedContainer = styled.div`
  margin: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-body-xl);
  font-weight: 700;
  color: var(--color-base-secondary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-neutral-200);
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const ProductCard = styled(Link)`
  background: var(--color-base-background);
  border-radius: 12px;
  padding: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--color-neutral-800);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--color-base-primary);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  background: var(--color-neutral-100);
`;

const ProductTitle = styled.h4`
  font-size: var(--font-body-md);
  font-weight: 600;
  color: var(--color-neutral-800);
  margin: 8px 0 4px;
  line-height: 1.3;
`;

const ProductPrice = styled.span`
  font-size: var(--font-body-md);
  font-weight: 700;
  color: var(--color-base-secondary);
`;

const ProductRating = styled.div`
  color: #f59e0b;
  font-size: var(--font-body-sm);
  margin-top: 4px;
`;

function RelatedProducts({ products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <RelatedContainer>
      <SectionTitle>محصولات مشابه</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} to={`/product/${product.id}`}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price.toLocaleString()} تومان</ProductPrice>
            <ProductRating>⭐ {product.rating}</ProductRating>
          </ProductCard>
        ))}
      </ProductsGrid>
    </RelatedContainer>
  );
}

export default RelatedProducts;