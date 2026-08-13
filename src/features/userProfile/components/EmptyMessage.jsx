
import styled from 'styled-components';
import NoResultImg from '../images/noResultImage'
const EmptyMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  text-align: center;
  color: var(--color-neutral-800);
  font-size: var(--font-body-large);
  padding: 40px 0;
`;
function EmptyMessage( {text}) {
  return (
    <EmptyMessageWrapper>{text} <NoResultImg /> </EmptyMessageWrapper>
  )
}

export default EmptyMessage