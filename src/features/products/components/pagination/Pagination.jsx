import React from 'react';
import styled from 'styled-components';
import PageButton from './PageButton';

// ---------- استایل‌های کانتینر ----------
const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 24px 0 8px 0;
  direction: rtl;
`;

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #ffffff;
      border-color: #e5e7eb;
    }
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 10, 
  onPageChange 
}) => {
  
  const getPageNumbers = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  return (
    <PaginationContainer>
      <ArrowButton 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </ArrowButton>

      {pageNumbers.map((number, index) => (
        <React.Fragment key={index}>
          {number === '...' ? (
            <span style={{ padding: '0 8px', color: '#9ca3af', fontSize: 'var(--font-body-large)' }}>...</span>
          ) : (
            <PageButton
              number={number}
              isActive={number === currentPage}
              onClick={onPageChange}
            />
          )}
        </React.Fragment>
      ))}

      <ArrowButton 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;