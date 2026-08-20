// src/features/productDetail/components/ProductThumbnail.jsx
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${({ $active }) => 
    $active ? 'var(--color-base-primary)' : 'var(--color-neutral-200)'
  };
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-base-primary);
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function ProductThumbnail({ image, isActive, onClick, alt }) {
  return (
    <ThumbnailContainer $active={isActive} onClick={onClick}>
      <ThumbnailImage src={image} alt={alt} />
    </ThumbnailContainer>
  );
}

export default ProductThumbnail;