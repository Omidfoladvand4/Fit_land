import styled from 'styled-components';
import EmptyMessage from './EmptyMessage';
const AddressesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
    animation: animate  0.4s ease;
  @keyframes animate {
    0%{
      opacity: 0;
      transform: translateX(-100%);
    }
    100%{
   opacity: 1;
    }
  }
`;

const AddressCard = styled.div`
  border: 1px solid var(--color-neutral-800);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (max-width : 786px) {
     flex-direction: column;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AddressTitle = styled.span`
  font-weight: 600;
  color: black;
`;

const AddressText = styled.span`
  color: var(--color-neutral-800);
  font-size: var(--font-body-xxl);
`;

const AddressActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  padding: 4px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: var(--font-body-xxl);
  background: ${({ variant }) =>
    variant === 'edit' ? 'var(--color-info-500)' : 'var(--color-error-500)'
  };
  color: var(--color-base-background);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

`;


function ProfileAddresses({ addresses }) {
  if (addresses.length === 0) {
    return <EmptyMessage   text = 'آدرسی ثبت نشده است' />
  }

  return (
    <AddressesContainer>
      {addresses.map((address) => (
        <AddressCard key={address.id}>
          <AddressInfo>
            <AddressTitle>{address.title}</AddressTitle>
            <AddressText>{address.text}</AddressText>
          </AddressInfo>
          <AddressActions>
            <ActionButton variant="edit">ویرایش</ActionButton>
            <ActionButton>حذف</ActionButton>
          </AddressActions>
        </AddressCard>
      ))}
    </AddressesContainer>
  );
}

export default ProfileAddresses;