import styled from "styled-components";

const Card = styled.div`
  height: 360px;

  position: relative;
  overflow: hidden;

  border-radius: 16px;
  cursor: pointer;

  background: var(--color-neutral-100);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImg = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: 165px;

  padding: 55px 24px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: var(--color-base-background);
  background: var(--color-base-secondary);

  clip-path: polygon(
    0 28%,
    94% 0,
    100% 12%,
    100% 100%,
    0 100%
  );

  border-radius: 24px 24px 16px 16px;

  z-index: 2;
   @media (max-width : 390px) {
     padding: 55px 5px 20px;
   }
`;

const CardTitle = styled.div`
  margin: 0;

  font-size: var(font-body-xs);
`;

const Discount = styled.span`
  color: var(--color-base-primary);
  font-weight: 900;
`;

function RegularCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />

      <CardOverlay>
        <CardTitle>
          جدیدترین تخفیفات فصل برند {item.name}
          <Discount>۵۰٪</Discount> تخفیف روی تمام محصولات
        </CardTitle>
      </CardOverlay>
    </Card>
  );
}

export default RegularCard;