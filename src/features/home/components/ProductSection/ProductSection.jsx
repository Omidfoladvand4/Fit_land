import styled from 'styled-components';
import RegularCard from '../../../shared/cards/regularcard/RegularCard';
import Button from '../../../shared/Button/Button';

const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin: var(--global-margin-small)  auto;
  padding: var(--button-padding-medium);
  @media (max-width : 490px) {
    width: 100%;
    height: 40vh;
}
`;

const ProductWrapper = styled.div`
flex: 1;
height: 100%;
display: flex;
align-items: center;
gap: 16px;
@media (max-width : 490px) {
    width: 100%;
}
`

const SectionDetails = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  @media (max-width : 490px) {
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
  font-size: var(--font-body-md);
`;

function ProductSection({ products, sectionTitle, sectionParagraph }) {
  if (!products || products.length === 0) {
    return <p>محصولی وجود ندارد</p>;
  }

  return (
    <ProductContainer>
      <ProductWrapper style={{display : 'flex'}}>
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
          width='100%'
        />
        </SectionDetails>

   
    </ProductContainer>
  );
}

export default ProductSection;