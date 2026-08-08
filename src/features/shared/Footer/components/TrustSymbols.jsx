import styled from 'styled-components';
import Enamad from '../Icons/Enamad.png'
import Kasbokar from '../Icons/Kasbokar.png'
import Samandehi from '../Icons/Samandehi.png'
const TrustContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: var(--global-margin-medium);
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  img {
     width: 120px;
     height: 120px;
    object-fit: cover;
  }
`;

function TrustSymbols() {
  const symbols = [
    { id: 1, name: 'اینماد', image: Enamad },
    { id: 2, name: 'وزارت ارشاد', image: Samandehi },
    { id: 3, name: 'اتحادیه', image:  Kasbokar},
  ];

  return (
    <TrustContainer>
      {symbols.map((symbol) => (
        <TrustItem key={symbol.id}>
          <img src={symbol.image} alt={symbol.name} />
        </TrustItem>
      ))}
    </TrustContainer>
  );
}

export default TrustSymbols;