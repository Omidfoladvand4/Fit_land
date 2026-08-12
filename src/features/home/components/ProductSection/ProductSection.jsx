import styled from 'styled-components';
import RegularCard from '../../../shared/cards/regularcard/RegularCard';
import Button from '../../../shared/Button/Button';

const ProductContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin: var(--global-margin-small) auto;
  padding: var(--button-padding-medium);

  @media (max-width: 1024px) {
    width: 100%;
    gap: 12px;
  }

  @media (max-width: 768px) {
    width: 95%;
    gap: 10px;
    padding: 12px;
  }

  @media (max-width: 490px) {
    width: 100%;
    height: auto;
    padding: 8px;
    gap: 8px;
    flex-direction: column;
    align-items: center;
  }
`;

const ProductWrapper = styled.div`
  flex: 1;
  height: 380px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 4px;


  @media (max-width: 1024px) {
    height: 330px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    height: 280px;
    gap: 10px;
  }

  @media (max-width: 490px) {
    height: 230px;
    width: 100%;
    gap: 8px;
    padding: 4px 2px;
    justify-content: center; 
  }

  @media (max-width: 390px) {
    height: 190px;
    gap: 6px;
    justify-content: center; 
  }
`;

const SectionDetails = styled.div`
  width: 33% ;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;


  @media (max-width: 490px) {
    display: none;
  }
`;

const SectionTitle = styled.h2`
  color: var(--color-base-secondary);
  font-size: var(--font-body-xl);
  font-weight: 700;

`;

const SectionParagraph = styled.p`
  color: var(--color-neutral-800);
  font-size: var(--font-body-large);
  
  
  @media (max-width: 768px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

function ProductSection({ products, sectionTitle, sectionParagraph }) {
  if (!products || products.length === 0) {
    return <p>محصولی وجود ندارد</p>;
  }

  return (
    <ProductContainer>
      <ProductWrapper>
        {products.map((product) => (
          <RegularCard key={product.id} item={product} />
        ))}
      </ProductWrapper>

      <SectionDetails>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <SectionParagraph>{sectionParagraph}</SectionParagraph>
        <Button
          backgroundColor="var(--color-base-primary)"
          text="مشاهده همه محصولات"
          path="/"
          width="100%"
        />
      </SectionDetails>
    </ProductContainer>
  );
}

export default ProductSection;