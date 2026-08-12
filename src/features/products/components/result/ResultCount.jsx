
import styled from 'styled-components';

const CountWrapper = styled.div`
  font-size: var(--font-body-large);
  font-weight: 500;
  color: var(--color-neutral-800 ); 
  white-space: nowrap;
  @media (max-width : 490px) {
    position: absolute;
    top: -120%;
    left: 0;
  }
`;

const ResultCount = ({ count }) => {
  return (
    <CountWrapper>
      {count.toLocaleString()} کالا
    </CountWrapper>
  );
};

export default ResultCount;