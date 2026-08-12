import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  direction: ltr;
`;

const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  font-size: var(--font-body-md);
  color: #4b5563;
  font-weight: 500;
`;

const MinMaxLabels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  font-size: var(--font-body-md);
  color: #9ca3af;
`;

const StyledSlider = styled(Slider)`
  margin: 8px 4px;
  width: calc(100% - 8px);

  .rc-slider-rail {
    background-color: #e5e7eb;
    height: 4px;
    border-radius: 4px;
  }
  .rc-slider-track {
    background-color: #374151;
    height: 4px;
    border-radius: 4px;
  }
  .rc-slider-handle {
    background-color: #ffffff;
    border: 2px solid #374151;
    width: 16px;
    height: 16px;
    margin-top: -6px;
    opacity: 1;
    border-radius: 50%;
    box-shadow: none;
    transition: all 0.2s ease;
  }
  .rc-slider-handle:hover, .rc-slider-handle:active {
    border-color: #000000;
    transform: scale(1.05);
  }
`;


const PriceRangeSlider = ({ min = 0, max = 5000000, step = 100000, value, onChange }) => {
  const formatPrice = (price) => price.toLocaleString();

  return (
    <Wrapper>
      <PriceLabels>
        <span>{formatPrice(value[0])} تومان</span>
        <span>تا</span>
        <span>{formatPrice(value[1])} تومان</span>
      </PriceLabels>

      <StyledSlider
        range
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />

      <MinMaxLabels>
        <span>{formatPrice(min)}</span>
        <span>{formatPrice(max)}</span>
      </MinMaxLabels>
    </Wrapper>
  );
};

export default PriceRangeSlider;