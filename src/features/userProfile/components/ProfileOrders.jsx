import styled from 'styled-components';

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: animate  0.4s ease;
  @keyframes animate {
    0%{
      opacity: 0;
      transform: translateX(-100%);
    }
    100%{
   opacity: 1;
    }
  }
`;

const OrderCard = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
  background-color: var(--color-base-background);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const OrderId = styled.span`
  font-weight: 600;
  color: black;
`;

const OrderDate = styled.span`
  font-size: var(--font-body-large);
`;

const OrderStatus = styled.span`
  padding: 2px 12px;
  border-radius: 20px;
  font-size: var(--font-body-large);
  font-weight: 600;
  background: ${({ status }) =>
    status === 'delivered' ? 'var(--color-info-800)' :
    status === 'processing' ? 'var(--color-error-800)' :
    'var(--color-neutral-200)'
  };
  color: ${({ status }) =>
    status === 'delivered' ? 'var(--color-base-background)' :
    status === 'processing' ? 'var(--color-base-background)' :
    'var(--color-neutral-800)'
  };
`;

const OrderTotal = styled.span`
  font-weight: 900;
  color: black;
`;

const OrderItems = styled.div`
  margin-top: 8px;
  padding-top: 8px;
  font-size: var(--font-body-large);
  color: var(--color-base-background);
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: var(--color-neutral-600);
  font-size: var(--font-body-large);
  padding: 40px 0;
`;

function ProfileOrders({ orders }) {
  const statusMap = {
    delivered: 'تحویل شده',
    processing: 'در حال پردازش',
    cancelled: 'لغو شده',
  };

  if (orders.length === 0) {
    return <EmptyMessage>هیچ سفارشی ثبت نشده است</EmptyMessage>;
  }

  return (
    <OrdersContainer>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <OrderHeader>
            <OrderId>سفارش #{order.id}</OrderId>
            <OrderDate>{order.date}</OrderDate>
          </OrderHeader>
          <OrderHeader>
            <OrderStatus status={order.status}>
              {statusMap[order.status] || order.status}
            </OrderStatus>
            <OrderTotal>{order.total.toLocaleString()} تومان</OrderTotal>
          </OrderHeader>
          <OrderItems>
            {order.items.map((item, index) => (
              <span key={index}>
                {item.name} × {item.quantity}
                {index < order.items.length - 1 ? '، ' : ''}
              </span>
            ))}
          </OrderItems>
        </OrderCard>
      ))}
    </OrdersContainer>
  );
}

export default ProfileOrders;