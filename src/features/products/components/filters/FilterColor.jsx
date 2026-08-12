
import styled from 'styled-components';

const ColorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const ColorCircle = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 2px solid ${({ $isSelected }) => ($isSelected ? 'var(--color-neutral-800)' : 'var(--color-base-primary)')};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const FilterColor = ({ colors, selectedColors, onColorSelect }) => {
  return (
    <ColorGrid>
      {colors.map((color) => (
        <ColorCircle
          key={color}
          $color={color}
          $isSelected={selectedColors.includes(color)}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </ColorGrid>
  );
};

export default FilterColor;