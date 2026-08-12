
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  margin-bottom: 8px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: var(--font-body-large);
`;

const ContactLabel = styled.span`
  opacity: 0.6;
  font-size: var(--font-body-large);
`;

const ContactValue = styled.span`
  color: var(--color-base-primary);
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const contactInfo = [
  { label: 'پست الکترونیک', value: 'info@fitland.com' },
  { label: 'ساعت کاری', value: 'شنبه تا چهارشنبه ۹ تا ۱۷' },
  { label: 'شماره تماس', value: '۰۲۱-۱۲۳۴-۵۶۷۸' },
  { label: 'شماره تماس', value: '۰۲۱-۸۷۶۵-۴۳۲۱' },
];

function FooterContact() {
  return (
    <ContactContainer>
      <ContactTitle>اطلاعات تماس</ContactTitle>
      <ContactList>
        {contactInfo.map((item, index) => (
          <ContactItem key={index}>
            <ContactLabel>{item.label}</ContactLabel>
            <ContactValue>{item.value}</ContactValue>
          </ContactItem>
        ))}
      </ContactList>
    </ContactContainer>
  );
}

export default FooterContact;