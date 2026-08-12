
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const Label = styled.span`
  font-size: var(--font-body-large);
  font-weight: 500;
  color: var(--color-base-secondary);
`;

const ToggleButton = styled.button`
  width: 40px;
  height: 20px;
  border-radius: 9999px;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? 'var(--color-base-secondary)' : '#d1d5db')};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ $isActive }) => ($isActive ? '22px' : '2px')};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.3s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
`;

const FilterToggle = ({ label, isActive, onToggle }) => {
  return (
    <ToggleContainer>
      <Label>{label}</Label>
      <ToggleButton $isActive={isActive} onClick={onToggle} />
    </ToggleContainer>
  );
};

export default FilterToggle;