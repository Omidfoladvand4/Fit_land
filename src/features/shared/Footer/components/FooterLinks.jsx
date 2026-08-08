
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LinksTitle = styled.h3`
  font-size: var(--font-body-lg);
  font-weight: 700;
  margin-bottom: 8px;
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
    font-size: var(--font-body-sm);
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--color-base-primary);
      padding-right: 4px;
    }
  }
`;

const footerLinks = [
  { name: 'محبوب‌ترین‌ها', path: '/popular' },
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