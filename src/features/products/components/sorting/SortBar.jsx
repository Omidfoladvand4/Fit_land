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
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const SortTab = styled.div`
  padding: 6px 16px;
  font-size: calc(var(--font-body-xl) - 3px);
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
    padding: 4px 10px;
    border-bottom-width: 2px;
    flex: 1 0 auto;
    text-align: center;
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
    </SortContainer>
  );
};

export default SortBar;