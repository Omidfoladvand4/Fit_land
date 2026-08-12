import styled from 'styled-components';

const Button = styled.button`
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-md);
  font-weight: 500;
  border-radius: 8px;
  border: ${({ $isActive }) => ($isActive ? '1px solid var(--color-base-secondary)' : '1px solid transparent')};
  background-color: ${({ $isActive }) => ($isActive ? 'var(--color-base-secondary)' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? 'var(--color-base-background)' : '#374151')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#1f2937' : '#f3f4f6')};
    border-color: ${({ $isActive }) => ($isActive ? '#1f2937' : '#e5e7eb')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      border-color: transparent;
    }
  }
`;

const PageButton = ({ number, isActive, isDisabled, onClick }) => {
  return (
    <Button 
      $isActive={isActive} 
      disabled={isDisabled}
      onClick={() => !isDisabled && onClick(number)}
    >
      {number}
    </Button>
  );
};

export default PageButton;