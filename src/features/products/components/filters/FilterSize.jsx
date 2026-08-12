
import styled from 'styled-components';

const SizeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const SizeButton = styled.button`
  min-width: 40px;
  height: 32px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-md);
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? 'var(--color-base-secondary)' : '#d1d5db')};
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--color-base-secondary)' : 'var(--color-base-background')};
  color: ${({ $isSelected }) => ($isSelected ? 'var(--color-base-background)' : 'var(--color-base-secondary)')};
  cursor: pointer;
  transition: all 0.2s ease;

`;

const FilterSize = ({ sizes, selectedSizes, onSizeSelect }) => {
  return (
    <SizeGrid>
      {sizes.map((size) => (
        <SizeButton
          key={size}
          $isSelected={selectedSizes.includes(size)}
          onClick={() => onSizeSelect(size)}
        >
          {size}
        </SizeButton>
      ))}
    </SizeGrid>
  );
};

export default FilterSize;