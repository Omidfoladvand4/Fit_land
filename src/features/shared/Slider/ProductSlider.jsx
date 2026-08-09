
import  { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import SpecialCard from "../Slider/components/SpecialCard"; 
import Button from "../Button/Button";

const SliderContainer = styled.section`
  width: 100%;
  margin: 40px auto;
  padding: 20px 5%;
  position: relative;
  background: ${({ background }) => background || 'var(--color-base-background)'};
  @media (max-width: 490px) {
     width: 100%;
     padding: 20px 12px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: var(--font-body-xl);
  font-weight: 700;
`;




const StyledSlider = styled.div`
  &.keen-slider {
    overflow: hidden;
    display: flex;
  }
  .keen-slider__slide {
    min-width: calc(33.333% - 12px);
    box-sizing: border-box;
    padding: 0 6px;

    @media (max-width: 1024px) {
      min-width: calc(50% - 8px);
    }
    @media (max-width: 768px) {
      min-width: 100%;
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) =>
    $active ? "var(--color-base-primary)" : "var(--color-base-secondary)"};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: var(--color-base-primary);
  }
`;

function ProductSlider({ title = "جدید ترین کفش های ورزشی", products = []  , background}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 767px)": {
        slides: { perView: 2, spacing: 16 },
      },
    },
    slides: { perView: 3, spacing: 16 },
  });

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <SliderContainer background = {background}>
      <Header>
        <Title>{title}</Title>
       <Button  text= 'مشاهده همه' color='var(--color-base-secondry)' backgroundColor= 'transparent'/>
      </Header>

      <StyledSlider ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <SpecialCard product={product} />
          </div>
        ))}
      </StyledSlider>

      {loaded && instanceRef.current && (
        <DotsContainer>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <Dot
                key={idx}
                $active={currentSlide === idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
              />
            );
          })}
        </DotsContainer>
      )}
    </SliderContainer>
  );
}

export default ProductSlider;