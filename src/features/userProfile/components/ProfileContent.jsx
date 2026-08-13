import styled from 'styled-components';
import ProfileInfoForm from './ProfileInfoForm';
import ProfileOrders from './ProfileOrders';
import ProfileWishlist from './ProfileWishlist';
import ProfileAddresses from './ProfileAddresses';
import ProfileReviews from './ProfileReviews';

const ContentContainer = styled.div`
  flex: 1;
  background: var(--color-base-background);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  animation: animate 0.3s ease ;
  @keyframes animate {
    0%{
     opacity: 0;
     transform: translateX(-100%);
    }
    100%{
opacity: 1;
     transform: translateX(0);
    }
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ContentTitle = styled.h2`
  font-size: var(--font-body-xxl);
  font-weight: 700;
  color: var(--color-base-secondary);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-neutral-200);
`;

function ProfileContent({ user, activeTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfoForm user={user} />;
      case 'orders':
        return <ProfileOrders orders={user.orders || []} />;
      case 'wishlist':
        return <ProfileWishlist items={user.wishlist || []} />;
      case 'addresses':
        return <ProfileAddresses addresses={user.addresses || []} />;
      case 'reviews':
        return <ProfileReviews reviews={user.reviews || []} />;
      default:
        return <ProfileInfoForm user={user} />;
    }
  };

  const getTitle = () => {
    const titles = {
      profile: 'حساب کاربری',
      orders: 'تاریخچه سفارشات',
      wishlist: 'علاقه‌مندی‌ها',
      addresses: 'آدرس‌ها',
      reviews: 'دیدگاه‌ها و نظرات',
    };
    return titles[activeTab] || 'حساب کاربری';
  };

  return (
    <ContentContainer>
      <ContentTitle>{getTitle()}</ContentTitle>
      {renderContent()}
    </ContentContainer>
  );
}

export default ProfileContent;