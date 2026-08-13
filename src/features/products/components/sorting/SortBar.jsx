import { useState } from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 2px;
    margin-right: 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 2px;
  }
`;

const SortTab = styled.div`
  padding: 6px 16px;
  font-size: var(--font-size-large);
  font-weight: ${({ $isActive }) => ($isActive ? '900' : '600')};
  color: ${({ $isActive }) => ($isActive ? 'var(--color-base-primary)' : 'black')};
  border-bottom: 3px solid ${({ $isActive }) => ($isActive ? 'var(--color-base-primary)' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: var(--color-base-secondary);
  }

  @media (max-width: 1024px) {
    padding: 5px 14px;
    border-bottom-width: 2px;
  }

  @media (max-width: 768px) {
    padding: 4px 12px;
    border-bottom-width: 2px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
const SelectWrapper = styled.div`
  display: none;
  width: 100%;
  position: relative;
  
  @media (max-width: 480px) {
    display: block;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 16px;
  font-size: var(--font-body-large);
  font-weight: 600;
  background-color: var(--color-info-500);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  padding-left: 36px;

  &:focus {
    border-color: var(--color-base-primary);
    
  }
   option {
    padding: 12px 16px;
    font-size: var(--font-body-large);
    font-weight: 500;
    color: var(--color-neutral-900);
    background-color: var(--color-base-background);
    border: none;
    outline: none;
  }

  option:hover {
    background-color: var(--color-base-primary) !important;
    color: var(--color-base-background) !important;
  }

  option:checked {
    background-color: var(--color-base-primary);
    color: var(--color-base-background);
    font-weight: 700;
  }
`;

const SortBar = ({ onSortChange }) => {
  const sortOptions = [
    { label: 'جدیدترین', value: 'newest' },
    { label: 'پرفروش‌ترین', value: 'bestseller' },
    { label: 'گران‌ترین', value: 'most_expensive' },
    { label: 'ارزان‌ترین', value: 'cheapest' },
  ];

  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  const handleOptionClick = (value) => {
    const foundOption = sortOptions.find((opt) => opt.value === value);
    setSelectedOption(foundOption);

    if (onSortChange) {
      onSortChange(value);
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const foundOption = sortOptions.find((opt) => opt.value === value);
    setSelectedOption(foundOption);

    if (onSortChange) {
      onSortChange(value);
    }
  };

  return (
    <SortContainer>
      {sortOptions.map((option) => (
        <SortTab
          key={option.value}
          $isActive={selectedOption.value === option.value}
          onClick={() => handleOptionClick(option.value)}
        >
          {option.label}
        </SortTab>
      ))}

      <SelectWrapper>
        <StyledSelect value={selectedOption.value} onChange={handleSelectChange}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </SortContainer>
  );
};

export default SortBar;