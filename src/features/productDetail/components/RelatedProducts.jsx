import styled from "styled-components";
import ProductSlider from "../../shared/Slider/ProductSlider";

const RelatedContainer = styled.div`
  margin: 40px 0;
`;

function RelatedProducts({ products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <RelatedContainer>
      <ProductSlider
        title="محصولات مشابه"
        products={products}
        background="var(--color-info-200)"
      />
    </RelatedContainer>
  );
}

export default RelatedProducts;
