import styled from 'styled-components';
import FilterToggle from './FilterToggle';
import FilterColor from './FilterColor';
import FilterSize from './FilterSize';
import PriceRangeSlider from './PriceRangeSlider';
import { useState, useEffect } from 'react';

const SidebarContainer = styled.div`
  width: 100%;
  max-width: 260px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  position: sticky;
  top: 16px;
  height: fit-content;

  @media (max-width: 1024px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    min-width: 100vw;
    min-height: 100vh;
    z-index: 999;
    padding: 24px 20px;
    border-radius: 0;
    border: none;
    overflow-y: auto;
    background: var(--color-base-background, #ffffff);
    animation: slideIn 0.3s ease;

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const Title = styled.h2`
  font-size: var(--font-body-xl);
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    font-size: var(--font-body-xxl);
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e7eb;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 1024px) {
    display: block;
    width: 36px;
    height: 36px;
    font-size: 24px;
    color: #374151;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.span`
  display: block;
  font-size: var(--font-body-large);
  font-weight: 500;
  color: #374151;
  margin-bottom: 12px;
`;

const OpenFilterButton = styled.button`
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-base-primary, #2563eb);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FilterBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductFilters = ({ onFilterChange }) => {
  const colors = ['#000000', '#FFFFFF', '#E74C3C', '#3498DB', '#2ECC71', '#F1C40F'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  const [filters, setFilters] = useState({
    inStock: false,
    hasDiscount: false,
    priceRange: [0, 5000000],
    selectedColors: [],
    selectedSizes: [],
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const handleArrayToggle = (key, value) => {
    const currentList = filters[key];
    const newList = currentList.includes(value)
      ? currentList.filter((item) => item !== value)
      : [...currentList, value];
    updateFilter(key, newList);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.inStock) count++;
    if (filters.hasDiscount) count++;
    count += filters.selectedColors.length;
    count += filters.selectedSizes.length;
    return count;
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <OpenFilterButton onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
        {getActiveFilterCount() > 0 && (
          <FilterBadge>{getActiveFilterCount()}</FilterBadge>
        )}
      </OpenFilterButton>

      <Overlay $isOpen={isOpen} onClick={handleClose} />

      <SidebarContainer $isOpen={isOpen}>
        <Title>
          فیلترها
          <CloseButton onClick={handleClose}>
            ✕
          </CloseButton>
        </Title>

        <Section>
          <FilterToggle
            label="محصولات موجود"
            isActive={filters.inStock}
            onToggle={() => updateFilter('inStock', !filters.inStock)}
          />
          <FilterToggle
            label="محصولات تخفیف‌دار"
            isActive={filters.hasDiscount}
            onToggle={() => updateFilter('hasDiscount', !filters.hasDiscount)}
          />
        </Section>

        <Section>
          <SectionTitle>قیمت</SectionTitle>
          <PriceRangeSlider
            min={0}
            max={5000000}
            step={100000}
            value={filters.priceRange}
            onChange={(val) => updateFilter('priceRange', val)}
          />
        </Section>

        <Section>
          <SectionTitle>رنگ</SectionTitle>
          <FilterColor
            colors={colors}
            selectedColors={filters.selectedColors}
            onColorSelect={(color) => handleArrayToggle('selectedColors', color)}
          />
        </Section>

        <Section>
          <SectionTitle>سایز</SectionTitle>
          <FilterSize
            sizes={sizes}
            selectedSizes={filters.selectedSizes}
            onSizeSelect={(size) => handleArrayToggle('selectedSizes', size)}
          />
        </Section>
      </SidebarContainer>
    </>
  );
};

export default ProductFilters;