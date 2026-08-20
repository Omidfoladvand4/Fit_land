import styled from 'styled-components';
import { useState } from 'react';

const FALLBACK_IMAGE = 'https://picsum.photos/seed/fallback/600/600';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainImage = styled.div`
  width: 100%;
  height: 380px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-neutral-300);
  }
`;

const Thumbnail = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${({ $active }) => 
    $active ? 'var(--color-base-primary)' : 'var(--color-neutral-800)'
  };
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-base-primary);
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <GalleryContainer>
        <MainImage>
          <img 
            src={FALLBACK_IMAGE} 
            alt="تصویر محصول" 
          />
        </MainImage>
      </GalleryContainer>
    );
  }

  return (
    <GalleryContainer>
      <MainImage>
        <img 
          src={images[activeImage]?.url || FALLBACK_IMAGE} 
          alt={images[activeImage]?.alt || 'تصویر محصول'} 
          onError={(e) => {
            e.target.src = FALLBACK_IMAGE;
          }}
        />
      </MainImage>
      <ThumbnailsContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={image.id || index}
            $active={activeImage === index}
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image.url || FALLBACK_IMAGE} 
              alt={image.alt || 'تصویر محصول'}
              onError={(e) => {
                e.target.src = FALLBACK_IMAGE;
              }}
            />
          </Thumbnail>
        ))}
      </ThumbnailsContainer>
    </GalleryContainer>
  );
}

export default ProductGallery;