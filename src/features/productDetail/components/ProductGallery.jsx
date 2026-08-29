import styled from "styled-components";
import { useState } from "react";

const FALLBACK_IMAGE = "https://picsum.photos/seed/fallback/600/600";

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
  flex-wrap: nowrap;
  max-width: 100%;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-neutral-500);
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Thumbnail = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${({ $active }) =>
      $active ? "var(--color-base-primary)" : "var(--color-neutral-800)"};
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
    width: 85px;
    height: 85px;
    border-radius: 10px;
    margin-left: -50px;
  }
`;

const MoreImagesButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 120px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid var(--color-neutral-800);
  background: var(--color-neutral-500);
  color: var(--color-base-secondary);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-base-primary);
    color: var(--color-base-primary);
    background: var(--color-base-primary-light);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    width: 85px;
    height: 85px;
    font-size: 10px;
    border-radius: 10px;
    background: var(--color-neutral-500);
  }
`;

function ProductGallery({ images, onShowAllImages }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <GalleryContainer>
        <MainImage>
          <img src={FALLBACK_IMAGE} alt="تصویر محصول" />
        </MainImage>
      </GalleryContainer>
    );
  }

  const shouldShowMoreButton = images.length > 3;

  return (
    <GalleryContainer>
      <MainImage>
        <img
          src={images[activeImage]?.url || FALLBACK_IMAGE}
          alt={images[activeImage]?.alt || "تصویر محصول"}
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
            onClick={() => setActiveImage(index)}>
            <img
              src={image.url || FALLBACK_IMAGE}
              alt={image.alt || "تصویر محصول"}
              onError={(e) => {
                e.target.src = FALLBACK_IMAGE;
              }}
            />
          </Thumbnail>
        ))}
        {shouldShowMoreButton && (
          <MoreImagesButton onClick={onShowAllImages}>
            <MainImage />
            <span>تصاویر بیشتر</span>
          </MoreImagesButton>
        )}
      </ThumbnailsContainer>
    </GalleryContainer>
  );
}

export default ProductGallery;
