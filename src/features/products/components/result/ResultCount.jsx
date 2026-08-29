import styled from "styled-components";

const CountWrapper = styled.div`
  font-size: var(--font-body-large);
  font-weight: 500;
  color: var(--color-neutral-800);
  white-space: nowrap;
`;

const ResultCount = ({ count }) => {
  return <CountWrapper>محصول {count.toLocaleString()} </CountWrapper>;
};

export default ResultCount;
