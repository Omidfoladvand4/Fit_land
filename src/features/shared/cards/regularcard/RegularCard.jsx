import styled from "styled-components";

const Card = styled.div`
  height: 280px;
  min-width: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  cursor: pointer;
  background: var(--color-neutral-100);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    height: 250px;
    min-width: 140px;
  }
  @media (max-width : 490px) {
     width: 45%;
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
  height: 120px;
  padding: 40px 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-base-background);
  background: var(--color-base-secondary);
  clip-path: polygon(0 28%, 94% 0, 100% 12%, 100% 100%, 0 100%);
  border-radius: 20px 20px 14px 14px;
  z-index: 2;

  @media (max-width: 1024px) {
    height: 105px;
    padding: 35px 12px 12px;
    clip-path: polygon(0 25%, 92% 0, 100% 10%, 100% 100%, 0 100%);
  }

  @media (max-width: 768px) {
    height: 90px;
    padding: 28px 10px 10px;
    clip-path: polygon(0 22%, 90% 0, 100% 8%, 100% 100%, 0 100%);
    border-radius: 14px 14px 10px 10px;
  }

  @media (max-width: 490px) {
    height: 75px;
    padding: 22px 8px 8px;
    clip-path: polygon(0 20%, 88% 0, 100% 6%, 100% 100%, 0 100%);
    border-radius: 10px 10px 8px 8px;
  }

  @media (max-width: 390px) {
    height: 65px;
    padding: 18px 6px 6px;
    clip-path: polygon(0 18%, 85% 0, 100% 5%, 100% 100%, 0 100%);
    border-radius: 8px 8px 6px 6px;
  }
`;

const CardTitle = styled.div`
  margin: 0;
  font-size: var(--font-body-md);
  line-height: 1.6;


  @media (max-width: 768px) {
    line-height: 1.4;
  }

  @media (max-width: 490px) {
    font-size: 8px;
    line-height: 1.3;
  }

  @media (max-width: 390px) {
    line-height: 1.2;
  }
`;

const Discount = styled.span`
  color: var(--color-base-primary);
  font-weight: 900;
  font-size: (--font-body-md);

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