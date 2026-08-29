import styled from "styled-components";

const DescriptionWrapper = styled.div`
  line-height: 1.8;
  white-space: pre-wrap;
`;
function ProductDescription({ description }) {
  return <DescriptionWrapper>{description}</DescriptionWrapper>;
}

export default ProductDescription;
