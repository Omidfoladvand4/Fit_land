import React from 'react';
import styled from 'styled-components';
import ArrowLeft from './icons/ArrowLeft';
const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-body-large);
  color: var(--color-neutral-800); 
  direction: rtl;
  width: 100%;
  margin-bottom: 16px; 
`;

const BreadcrumbItem = styled.span`
  color: ${({ $isLast }) => ($isLast ? 'var(--color-base-secondary)' : 'var(--color-neutral-800)')};
  font-weight: ${({ $isLast }) => ($isLast ? '600' : '400')};
  cursor: ${({ $isLast }) => ($isLast ? 'default' : 'pointer')};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $isLast }) => ($isLast ? 'var(--color-base-secondary)' : 'var( --color-info-800)')};
  }
`;

const Separator = styled.span`
  font-size: var(--font-body-md);
  user-select: none;
`;

const Breadcrumb = ({ items = [] }) => {
  
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <BreadcrumbItem $isLast={isLast}>
              {item}
            </BreadcrumbItem>
            
            {!isLast && <Separator><ArrowLeft /></Separator>}
          </React.Fragment>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;