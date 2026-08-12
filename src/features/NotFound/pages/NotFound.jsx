import styled from "styled-components"
import NotFoundImage from "../images/NotFoundImage.png"
import HomeIcon from "../../shared/AuthLayout/components/AuthSidebar/icons/HomeIcon"
const NotFoundContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 10% 20%;
  font-weight: bold;
  @media (max-width: 768px) {
    padding: 10% 5%; 
    }
`
const NotFountWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  @media (max-width: 768px) {
    width: 100%;
  }
  `
const GoToHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  gap: 10px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size : var(--font-body-md);
  background-color: var(--color-base-secondary);
  color: var(--color-base-background);
  padding: 10px 20px;
    `
const NotFoundText = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`
const NotFoundImg = styled.img`
  width: 100%; 
  `
const GoToHomeButton = styled.button`
  margin-top: 20px; 
    `

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFountWrapper>
        <NotFoundImg src={NotFoundImage} alt="404 Not Found" />
        <NotFoundText>صفحه مورد نظر یافت نشد</NotFoundText>
        <GoToHomeContainer onClick={() => window.location.href = '/'}>
          <GoToHomeButton  />
            <HomeIcon /> بازگشت به صفحه اصلی
        </GoToHomeContainer>
      </NotFountWrapper>
    </NotFoundContainer>
  )
}

export default NotFound