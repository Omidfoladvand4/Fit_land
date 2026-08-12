import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-base-background);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  direction: rtl;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 12px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 120px;
    min-width: 120px;
    aspect-ratio: 3 / 4;
    border-radius: 8px;
  }
`;

const CardSizeWrapper = styled.div`
  width: 100%;
  height: 45%;
  position: absolute;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  background-color: var(--color-neutral-800);
  z-index: 99;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
  transform: translateY(100%);

  ${CardWrapper}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const CardSize = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-base-background);
  font-size: var(--font-body-large);
  font-weight: 900;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-base-primary);
    color: var(--color-base-background);
  }
`;

const CardInformation = styled.div`
  padding: 12px 14px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #f59e0b;
  font-size: var(--font-body-md);
  margin-bottom: 4px;

  span {
    color: #d1d5db;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 2px;
  }
`;

const Title = styled.h3`
  font-size: var(--font-body-md);
  font-weight: 600;
  color: black;
  line-height: 1.5;
  margin-bottom: 4px;
  text-align: right;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 700;
    -webkit-line-clamp: 1;
    margin-bottom: 0;
  }
`;

const SizeRange = styled.div`
  font-size: var(--font-body-sm);
  font-weight: 400;
  color: #6b7280;
  text-align: right;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 0;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  text-align: right;
  direction: rtl;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    margin-top: 0;
    gap: 6px;
  }
`;

const Price = styled.div`
  font-size: var(--font-body-md);
  font-weight: 700;
  color: var(--color-base-primary);

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const OriginalPrice = styled.div`
  font-size: var(--font-body-sm);
  font-weight: 400;
  color: #9ca3af;
  text-decoration: line-through;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  margin-top: 10px;

  @media (max-width: 480px) {
    margin-top: 4px;
    gap: 4px;
  }
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 1px solid #e5e7eb;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

const ProductCard = ({
  image = '/placeholder-image.jpg',
  title = 'NCY تیشرت زنانه',
  price = 160000,
  originalPrice = 200000,
  rating = 4.5,
  colors = ['#000000', '#b5651d', '#ffffff'],
  sizes = ['XL', 'L', 'S', '2XL', 'M']
}) => {
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) stars.push('★');
    if (hasHalf) stars.push('★');
    while (stars.length < 5) stars.push(<span key={stars.length}>★</span>);

    return stars;
  };

  const hasDiscount = originalPrice && originalPrice > price;

  const getSizeRange = (sizes) => {
    if (!sizes || sizes.length === 0) return '';
    const sorted = [...sizes].sort((a, b) => {
      const order = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
      return order.indexOf(a) - order.indexOf(b);
    });
    return `از سایز ${sorted[0]} تا ${sorted[sorted.length - 1]}`;
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={image} alt={title} />
        <CardSizeWrapper>
          {sizes.slice(0, 5).map((item, index) => (
            <CardSize key={index}>{item}</CardSize>
          ))}
        </CardSizeWrapper>
      </ImageWrapper>

      <CardInformation>
        <RatingStars>
          {renderRating(rating)}
        </RatingStars>

        <Title>{title}</Title>

        <SizeRange>{getSizeRange(sizes)}</SizeRange>

        <PriceWrapper>
          <Price>{price.toLocaleString()} تومان</Price>
          {hasDiscount && (
            <OriginalPrice>{originalPrice.toLocaleString()} تومان</OriginalPrice>
          )}
        </PriceWrapper>

        <ColorOptions>
          {colors.slice(0, 3).map((color, index) => (
            <ColorCircle key={index} $color={color} />
          ))}
          {colors.length > 3 && (
            <ColorCircle 
              $color="#e5e7eb" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '8px', 
                fontWeight: 'bold', 
                color: '#6b7280' 
              }}
            >
              +{colors.length - 3}
            </ColorCircle>
          )}
        </ColorOptions>
      </CardInformation>
    </CardWrapper>
  );
};

export default ProductCard;