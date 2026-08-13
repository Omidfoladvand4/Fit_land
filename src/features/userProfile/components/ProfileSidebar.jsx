import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 280px;
  flex-shrink: 0;
  background:  var(--color-base-background);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  height: fit-content;
  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  text-align: center;
    padding: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-neutral-800);
  background: linear-gradient( 135deg , var(--color-base-primary) , var(--color-base-background));
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-base-background);
  color: var(--color-base-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-xxl);
  font-weight: 700;
  margin: 0 auto 12px;
`;

const UserName = styled.h3`
  font-size: var(--font-body-xxxl);
  font-weight: 700;
  color: black;
`;

const UserEmail = styled.p`
  font-size: var(--font-body-xl);
  color: black;
  
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--font-body-xxl);
  color: ${({ $active }) => 
    $active ? 'var(--color-base-secondary)' : 'black'
  };
  font-weight: ${({ $active }) => $active ? '900' : '400'};
  border-bottom: ${({ $active }) => 
    $active ? '2px solid var(--color-base-secondary)' : '1px solid transparent'
  };

  &:hover {
    background: var(--color-neutral-700);
    color: var(--color-base-secondary);
    border-bottom: 1px solid var(--color-base-secondary);
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const LogoutItem = styled(MenuItem)`
  color: var(--color-error-500);
  margin-top: 12px;
  border-top: 1px solid var(--color-neutral-200);
  padding-top: 16px;
  border-radius: 0;

  &:hover {
    background: var(--color-error-200);
    color: var(--color-error-800);
  }
`;

const menuItems = [
  { key: 'profile', label: 'حساب کاربری' },
  { key: 'orders', label: 'تاریخچه سفارشات' },
  { key: 'wishlist', label: 'علاقه‌مندی‌ها' },
  { key: 'addresses', label: 'آدرس‌ها' },
  { key: 'reviews', label: 'دیدگاه‌ها و نظرات' },
];

function ProfileSidebar({ user, activeTab, onTabChange }) {
  const getInitials = () => {
    if (!user) return '?';
    return `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`;
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/Sign-in';
  };

  return (
    <SidebarContainer>
      <UserInfo>
        <Avatar>{getInitials()}</Avatar>
        <UserName>{user?.firstName} {user?.lastName}</UserName>
        <UserEmail>{user?.email}</UserEmail>
      </UserInfo>

      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            $active={activeTab === item.key}
            onClick={() => onTabChange(item.key)}
          >
            {item.label}
          </MenuItem>
        ))}
        <LogoutItem onClick={handleLogout}>خروج</LogoutItem>
      </MenuList>
    </SidebarContainer>
  );
}

export default ProfileSidebar;