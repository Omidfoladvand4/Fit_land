import styled from "styled-components";
import LogoSvg from '../header/images/Logo.svg';

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: var(--color-base-background);
`;

const Spinner = styled.img`
  width: 50%;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: scale(1.5);
    }
    to {
      transform: scale(1);
    }
  }
`;

function Loading() {
  return (
    <LoadingContainer>
      <Spinner src={LogoSvg} alt="در حال بارگذاری..." />
    </LoadingContainer>
  );
}

export default Loading;