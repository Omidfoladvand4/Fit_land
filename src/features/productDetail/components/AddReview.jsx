import styled from "styled-components";
import { useState } from "react";

const AddReviewContainer = styled.div`
  flex: 1.3;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  @media (max-width : 490px) {
     padding: 0;
  
  }
`;
const Header = styled.div`
  margin-bottom: var(--header-margin-medium);
`;
const Title = styled.div`
  font-size: var(--font-body-large);
  border-bottom: 1px solid var(--color-neutral-800);
  padding: 8px 0;
`;
const Alert = styled.div`
  font-size: var(--font-body-sm);
  color: var(--color-neutral-800);
  padding: 8px 0;
`;
const AddReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  padding: 12px 14px;
  border-radius: 10px;
  margin: 16px;
  position: relative;
  border: 1px solid var(--color-neutral-800);
  transition: border-color 0.2s ease;
  &:focus-within {
    border: 1px solid var(--color-base-primary);
  }
    @media (max-width : 490px) {
     padding: 10px 0;
     input {
        padding-right: 12px;
     }
  
  }
`;
const Lable = styled.label`
  position: absolute;
  top: -16px;
  background-color: white;
  padding: 0 8px;
`;
const NameInput = styled.input`
  width: 100%;
  height: 100%;
`;
const EmailInput = styled(NameInput)``;
const ReviewContentBox = styled(InputBox)`
  height: 165px;
`;
const ReviewContent = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 8px 12px;
`;
const ReviewFooter = styled.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
const RateContainer = styled.div`
  display: flex;
  gap: 4px;
  direction: ltr;
`;

const StarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({ $active }) => 
    $active ? "#f39c12" : "var(--color-neutral-800)"}; 
  transition: transform 0.15s ease, color 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }
  
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  @media (max-width: 490px ) {
    svg{
       width: 16px;
    height: 16px; 
    }
  }
`;

const SubmitBtn = styled.button`
  width: 45%;
  padding: 10px 8px;
  color: var(--color-base-primary);
  border: 1px solid var(--color-base-primary);
  background-color: transparent;
  border-radius: 12px;
  font-size: var(--font-body-large);
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    color: var(--color-base-background);
    background-color: var(--color-base-primary);
  }
`;

function AddReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (star) => {
    setRating(star); 
  };

  return (
    <AddReviewContainer>
      <Header>
        <Title>نظرت رو برامون بنویس</Title>
        <Alert>ایمیل شما نشان داده نمی شود.</Alert>
      </Header>
      <AddReviewWrapper>
        <InputBox>
          <Lable >نام</Lable>
          <NameInput  type="text"/>
        </InputBox>
        <InputBox>
          <Lable>ایمیل</Lable>
          <EmailInput type="email"/>
        </InputBox>
        <ReviewContentBox>
          <Lable>نظر شما</Lable>
          <ReviewContent  minLength={6} maxLength={250}/>
        </ReviewContentBox>
      </AddReviewWrapper>
      <ReviewFooter>
        <RateContainer>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarButton
              key={star}
              $active={(hoverRating || rating) >= star}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </StarButton>
          ))}
        </RateContainer>
        <SubmitBtn>ثبت نظر و امتیاز</SubmitBtn>
      </ReviewFooter>
    </AddReviewContainer>
  );
}

export default AddReview;