
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LinksTitle = styled.h3`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  margin-bottom: 8px;
    @media (max-width : 490px) {
  font-size: var(--font-body-xxxl);
    
  }
`;

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinksItem = styled.li`
  a {
    color: var(--color-base-background);
    text-decoration: none;
    font-size: var(--font-body-large);
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--color-base-primary);
      padding-right: 4px;
    }
        @media (max-width : 490px) {
  font-size: var(--font-body-xxl);
    
  }
  }
`;

const footerLinks = [
  { name: 'محبوب‌ترین‌ها', path: '/Product/مردانه' },
  { name: 'خدمات مشتریان', path: '/services' },
  { name: 'راهنمای خرید', path: '/guide' },
  { name: 'اطلاعات تماس', path: '/contact' },
  { name: 'سوالات متداول', path: '/faq' },
  { name: 'سوالات ثبت سفارش', path: '/order-questions' },
];

function FooterLinks() {
  return (
    <LinksContainer>
      <LinksTitle>لینک‌های مفید</LinksTitle>
      <LinksList>
        {footerLinks.map((link) => (
          <LinksItem key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </LinksItem>
        ))}
      </LinksList>
    </LinksContainer>
  );
}

export default FooterLinks;