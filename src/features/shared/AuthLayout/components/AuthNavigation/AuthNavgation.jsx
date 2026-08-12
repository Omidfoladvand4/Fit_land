import styled from 'styled-components';
import { replace, useNavigate } from 'react-router-dom';
import CloseIcon from '../AuthNavigation/images/CloseIcon';
import ArrowRightIcon from '../AuthNavigation/images/ArrowRight';
const NavigationContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  svg{
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
     opacity: 0.85;
     transform: translateY(-2px);
    }
  }
  @media (max-width: 490px) {
    display: flex;
  }
  `
function AuthNavgation() {
    const navigate = useNavigate();
    const handleBack = () => {
       
        navigate(-1 , { replace: true });
        
    }
  return (
    <NavigationContainer>
     <div onClick={handleBack}>
         <ArrowRightIcon   />
     </div>
        <div onClick={() => navigate('/')}>
             <CloseIcon  />
        </div>
    </NavigationContainer>
  )
}

export default AuthNavgation