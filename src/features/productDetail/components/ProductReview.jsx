import ReviewItem from './ReviewItem'
import AddReview from './AddReview'
import styled from 'styled-components'
const ProductReviewcontainer = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width : 490px) {
        flex-direction: column;
    }
`
const ReviewWrapper = styled.div`
flex: 2;
display: flex;
flex-direction: column;
gap: 12px;
`
const NoReview = styled.div`
text-align: center;
padding: 20px;
color: var(--color-neutral-800);
`
function ProductReview({reviews}) {
  return (
    <ProductReviewcontainer>
        <ReviewWrapper >
             {reviews?.length > 0 ? (
                    reviews.map((review, index) => (
                      <ReviewItem
                        review={review}
                        key={review.id || index} 
                      />
                    ))
                  ) : (
                    <NoReview>
                      نظری برای این محصول ثبت نشده است.
                    </NoReview>
                  )}
        </ReviewWrapper>
        <AddReview />
    </ProductReviewcontainer>
  )
}

export default ProductReview