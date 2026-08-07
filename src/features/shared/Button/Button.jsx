// src/features/shared/components/Button.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: var(--font-weight-bold, 600);
  font-size: var(--font-body-md, 14px);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  color: ${({ color }) => color || 'var(--color-base-background, #fff)'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--color-base-primary, #FA541C)'};

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;

function Button({ icon, text, path, color, backgroundColor }) {
  return (
    <ButtonContainer
      to={path || '/'}
      color={color}
      backgroundColor={backgroundColor}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </ButtonContainer>
  );
}

export default Button;