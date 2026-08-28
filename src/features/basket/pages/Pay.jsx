import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 30px;
  margin: 16px 0;
`;
const Title = styled.h2`
  font-size: var(--font-body-lg);
  color: var(--color-base-secondary);
`;
const Box = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 20px;
  background: white;
`;
const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const MethodRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  cursor: pointer;
  background: ${({ $selected }) =>
    $selected ? "var(--color-info-100)" : "white"};
  border-color: ${({ $selected }) =>
    $selected ? "var(--color-base-primary)" : "var(--color-neutral-300)"};
`;
const MethodLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: var(--color-base-secondary);
`;
const AddressBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  color: var(--color-base-secondary);
  font-size: var(--font-body-md);
  line-height: 1.8;
`;
const AddressText = styled.div`
  flex: 1;
`;
const MapThumbnail = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;
const TimeSelection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-base-secondary);
`;
const TimeButton = styled.button`
  background: var(--color-base-primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

function Pay() {
  const { items } = useOutletContext();

  return (
    <PaymentContainer>
      <Title>انتخاب نحوه پرداخت</Title>
      <PaymentMethod>
        <MethodRow $selected>
          <MethodLabel>
            <span>🏦</span> بانک مسکن
          </MethodLabel>
          <input type="radio" checked readOnly />
        </MethodRow>
        <MethodRow>
          <MethodLabel>
            <span>💳</span> تو بانک
          </MethodLabel>
          <input type="radio" />
        </MethodRow>
      </PaymentMethod>

      <Box>
        <Title style={{ marginBottom: "16px" }}>خلاصه محصولات</Title>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
              borderBottom: "1px solid #eee",
              paddingBottom: "8px",
            }}>
            <div>
              <strong>{item.title}</strong>
              <div>سایز: {item.sizes[0]}</div>
            </div>
            <div>{item.price.toLocaleString()} تومان</div>
          </div>
        ))}
      </Box>

      <Box>
        <Title style={{ marginBottom: "16px" }}>آدرس انتخابی شما</Title>
        <AddressBox>
          <AddressText>
            بجنورد، میدان شهید بهشتی، خیابان ۱۷ شهریور، کوچه عزیز معرف پلاک ۱۳
          </AddressText>
          <MapThumbnail
            src="https://via.placeholder.com/150x100?text=Map"
            alt="نقشه"
          />
        </AddressBox>
      </Box>

      <Box>
        <TimeSelection>
          <Title>زمان ارسال انتخابی شما</Title>
          <TimeButton>فردا</TimeButton>
        </TimeSelection>
      </Box>
    </PaymentContainer>
  );
}
export default Pay;
