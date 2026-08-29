import styled from "styled-components";
const ReviewCard = styled.div`
  height: max-content;
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px 24px;
  position: relative;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-base-primary);
  color: var(--color-base-background);
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
  color: var(--color-neutral-800);
  font-size: var(--font-body-xs);
`;

const StarsContainer = styled.div`
  color: #f59e0b;
  font-size: var(--font-body-md);
  margin-bottom: 4px;
  position: absolute;
  top: 15px;
  left: 16px;
`;

const ReviewText = styled.p`
  font-size: var(--font-body-md);
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
      <StarsContainer>{"⭐".repeat(review.rating)}</StarsContainer>
      <ReviewText>{review.text}</ReviewText>
    </ReviewCard>
  );
}

export default ReviewItem;
