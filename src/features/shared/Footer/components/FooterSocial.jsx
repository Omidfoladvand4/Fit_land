import styled from 'styled-components';
import insta from '../Icons/insta.png'
import tel from '../Icons/tel.png'
import whatsApp from '../Icons/whatsApp.png'
import YouTube from '../Icons/YouTube.png'
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialTitle = styled.h4`
  font-size: var(--font-body-large);
  font-weight: 600;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-base-background);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-base-primary);
    transform: translateY(-3px);
  }
`;

const socialLinks = [
  { name: 'instagram', Src: insta, url: 'https://instagram.com' },
  { name: 'telegram', Src: tel, url: 'https://telegram.org' },
  { name: 'whatsapp', Src: whatsApp, url: 'https://whatsapp.com' },
  { name: 'youtube', Src: YouTube, url: 'https://youtube.com' },
];

function FooterSocial() {
  return (
    <SocialContainer>
      <SocialTitle>ما را دنبال کنید</SocialTitle>
      <SocialIcons>
        {socialLinks.map((social) => (
          <SocialLink
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img src= {social.Src} alt="" />
          </SocialLink>
        ))}
      </SocialIcons>
    </SocialContainer>
  );
}

export default FooterSocial;