import styled from 'styled-components';
import { useState } from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileContent from '../components/ProfileContent';
import { useUser } from '../hooks/useUser';
import Loading from '../../shared/Loading/Loading';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  gap: 24px;
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: var(--font-body-large);
  color: var(--color-error-800);
`;

function UserProfile() {
  const { user, loading, error } = useUser();
  const [activeTab, setActiveTab] = useState('profile');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!user) {
    return <ErrorMessage>کاربری یافت نشد</ErrorMessage>;
  }

  return (
    <ProfileContainer>
      <ProfileSidebar 
        user={user} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      <ProfileContent 
        user={user} 
        activeTab={activeTab} 
      />
    </ProfileContainer>
  );
}

export default UserProfile;