import styled from "styled-components";

const SummaryContainer = styled.div`
  width: 420px;
  background: var(--color-neutral-100);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid var(--color-neutral-800);
  height: fit-content;
  position: sticky;
  top: 20px;
  margin-top: 32px;
  @media (max-width : 1030px) {
     width: 100%;
     margin-bottom: 16px;
  }
`;

const SummaryTitle = styled.h3`
  font-size: var(--font-body-large);
  margin-bottom: 16px;
  color: var(--color-base-secondary);
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: var(--color-base-secondary);
  font-size: var(--font-body-md);
`;
const RowTotal = styled(Row)`
  font-weight: 800;
  color: var(--color-base-secondary);
  border-top: 1px solid var(--color-neutral-800);
  padding-top: 12px;
`;
const Price = styled.span`
  font-weight: bold;
  color: var(--color-base-secondary);
`;
const DiscountAmount = styled.span`
  color: var(--color-error-800);
  font-weight: bold;
`;
const SubmitButton = styled.button`
  width: 100%;
  margin-top: 16px;
  background: var(--color-base-primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: var(--font-body-large);
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

function OrderSummary({ items, onProceed }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const totalDiscount = items.reduce(
    (sum, item) =>
      sum + (item.hasDiscount ? item.originalPrice - item.price : 0),
    0,
  );
  const finalPrice = totalPrice - totalDiscount;

  return (
    <SummaryContainer>
      <SummaryTitle>کد تخفیف</SummaryTitle>
      <Row>
        <input
          type="text"
          placeholder="تیتر"
          style={{
            padding: "8px",
            border: "1px solid var(--color-neutral-800)",
            borderRadius: "8px",
            width: "100%",
            marginBottom: "12px",
          }}
        />
      </Row>
      <Row>
        قیمت کالاها <Price>{totalPrice.toLocaleString()} تومان</Price>
      </Row>
      <Row>
        سود شما از خرید{" "}
        <DiscountAmount>{totalDiscount.toLocaleString()} تومان</DiscountAmount>
      </Row>
      <Row>
        هزینه ارسال <Price>رایگان</Price>
      </Row>
      <RowTotal>
        مبلغ قابل پرداخت <Price>{finalPrice.toLocaleString()} تومان</Price>
      </RowTotal>
      <SubmitButton onClick={onProceed}>
        تکمیل فرآیند خرید <span>←</span>
      </SubmitButton>
    </SummaryContainer>
  );
}

export default OrderSummary;
