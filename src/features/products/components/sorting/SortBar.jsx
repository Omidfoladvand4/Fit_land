import { useState } from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  direction: rtl;
  margin-right: auto;

  @media (max-width: 768px) {
    flex: 1;
    gap: 2px;
    margin-right: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 2px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const SortTab = styled.div`
  padding: 6px 16px;
  font-size: var(--font-body-large);
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
    font-size: var(--font-body-md);
    border-bottom-width: 2px;
  }

  @media (max-width: 768px) {
    padding: 4px 12px;
    font-size: var(--font-body-sm);
    border-bottom-width: 2px;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
    border-bottom-width: 2px;
    flex: 1 0 auto;
    text-align: center;
    min-width: 60px;
  }

  @media (max-width: 360px) {
    padding: 3px 8px;
    font-size: 11px;
    min-width: 50px;
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