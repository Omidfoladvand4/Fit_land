import styled from 'styled-components';
import ProductCard from './ProductCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProductGrid = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        محصولی یافت نشد.
      </div>
    );
  }

  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          originalPrice={product.originalPrice}
          rating={product.rating}
          colors={product.colors}
          sizes={product.sizes}
        />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;