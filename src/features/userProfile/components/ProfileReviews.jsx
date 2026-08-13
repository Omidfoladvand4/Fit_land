import styled from 'styled-components';
import EmptyMessage from './EmptyMessage';
const ReviewsContainer = styled.div`
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

const ReviewCard = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ReviewProduct = styled.span`
  font-weight: 600;
  color: black;
`;

const ReviewDate = styled.span`
  color: var(--color-neutral-800);
  font-size: var(--font-body-large);
`;

const ReviewStars = styled.div`
  color: #f59e0b;
  font-size: var(--font-body-large);
  margin-bottom: 4px;
`;

const ReviewText = styled.p`
  color: var(--color-neutral-800);
  font-size: var(--font-body-large);
  font-weight: 800;
  line-height: 1.6;
`;

const DeleteReviewBtn = styled.button`
    margin-top: 16px;
    padding: 14px 16px;
    background-color: var(--color-error-200);
    transition: all 0.3s ease;
    border-radius: 12px;
    color: var(--color-base-background);
    &:hover{
        background-color: var(--color-error-500);
    }
    cursor: pointer;
`
function ProfileReviews({ reviews }) {
  if (reviews.length === 0) {
    return <EmptyMessage text ='هنوز دیدگاهی ثبت نشده است'  />
  }

  return (
    <ReviewsContainer>
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <ReviewHeader>
            <ReviewProduct>{review.product}</ReviewProduct>
            <ReviewDate>{review.date}</ReviewDate>
          </ReviewHeader>
          <ReviewStars>{'⭐'.repeat(review.rating)}</ReviewStars>
          <ReviewText>{review.text}</ReviewText>
          <DeleteReviewBtn >حذف دیدگاه</DeleteReviewBtn>
        </ReviewCard>
      ))}
    </ReviewsContainer>
  );
}

export default ProfileReviews;