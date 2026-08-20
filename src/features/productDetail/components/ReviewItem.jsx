import styled from 'styled-components';

const ReviewCard = styled.div`
  border-bottom: 1px solid var(--color-neutral-800);
  padding: 16px 0;
  
  &:last-child {
    border-bottom: none;
  }
  `;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-base-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-body-sm);
  flex-shrink: 0;
`;

const ReviewUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.strong`
  color: var(--color-neutral-800);
  font-size: var(--font-body-md);
`;

const ReviewDate = styled.span`
  color: var(--color-neutral-600);
  font-size: var(--font-body-xs);
`;

const StarsContainer = styled.div`
  color: #f59e0b;
  font-size: var(--font-body-md);
  margin-bottom: 4px;
`;

const ReviewText = styled.p`
  font-size: var(--font-body-sm);
  line-height: 1.6;
  margin: 0;
  padding-right: 52px;
`;

function ReviewItem({ review }) {
  return (
    <ReviewCard>
      <ReviewHeader>
        <Avatar>{review.avatar}</Avatar>
        <ReviewUserInfo>
          <UserName>{review.user}</UserName>
          <ReviewDate>{review.date}</ReviewDate>
        </ReviewUserInfo>
      </ReviewHeader>
      <StarsContainer>
        {'⭐'.repeat(review.rating)}
      </StarsContainer>
      <ReviewText>{review.text}</ReviewText>
    </ReviewCard>
  );
}

export default ReviewItem;