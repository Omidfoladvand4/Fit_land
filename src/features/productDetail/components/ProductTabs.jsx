// src/features/productDetail/components/ProductTabs.jsx
import styled from 'styled-components';
import { useState } from 'react';

const TabsContainer = styled.div`
  margin: 40px 0;
  border: 1px solid var(--color-neutral-200);
  border-radius: 12px;
  overflow: hidden;
`;

const TabHeaders = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-neutral-200);
  background: var(--color-neutral-50);
  gap: 8px;

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

const TabHeader = styled.button`
  padding: 14px 24px;
  background: ${({ $active }) => 
    $active ? 'rgb(207,232,255)' : 'transparent'
  };
  border: none;
  font-size: var(--font-body-md);
  font-weight: ${({ $active }) => $active ? '700' : '400'};
  color: var(--color-base-secondary) ;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: 12px;

  &:hover {
    background: rgb(207,232,255);
  }
`;

const TabContent = styled.div`
  padding: 24px;
  border-radius: 10px;
  border : 1px solid var(--color-neutral-800) ;
  margin-top : 12px
`;

const TabPanel = styled.div`
  display: ${({ $active }) => $active ? 'block' : 'none'};
`;

const SpecsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid var(--color-neutral-800);
    padding: 12px 16px;
  }
  tr:last-child {
      border: none;
  }

  td {
    padding: 10px 12px;
    font-size: var(--font-body-md);
  }

  td:first-child {
    font-weight: 600;
    width: 30%;
  }

  td:last-child {
  }
`;

function ProductTabs({ description, specs, reviews }) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { key: 'specs', label: 'ویژگی های محصول' },
    { key: 'description', label: 'توضیحات' },
    { key: 'reviews', label: `نظرات (${reviews?.length || 0})` },
  ];

  return (
    <TabsContainer>
      <TabHeaders>
        {tabs.map((tab) => (
          <TabHeader
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </TabHeader>
        ))}
      </TabHeaders>
      <TabContent>
        <TabPanel $active={activeTab === 'description'}>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
            {description}
          </div>
        </TabPanel>
        <TabPanel $active={activeTab === 'specs'}>
          <SpecsTable>
            <tbody>
              {specs && Object.entries(specs).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </SpecsTable>
        </TabPanel>
        <TabPanel $active={activeTab === 'reviews'}>
          {reviews && reviews.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {reviews.map((review) => (
                <div key={review.id} style={{ borderBottom: '1px solid var(--color-neutral-100)', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <div style={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      background: 'var(--color-base-primary)', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700'
                    }}>
                      {review.avatar}
                    </div>
                    <div>
                      <strong>{review.user}</strong>
                      <div style={{ fontSize: 'var(--font-body-sm)', color: 'var(--color-neutral-600)' }}>
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <div style={{ color: '#f59e0b', marginBottom: '4px' }}>
                    {'⭐'.repeat(review.rating)}
                  </div>
                  <p style={{ margin: 0, color: 'var(--color-neutral-700)' }}>{review.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--color-neutral-600)', padding: '20px 0' }}>
              هنوز نظری ثبت نشده است
            </p>
          )}
        </TabPanel>
      </TabContent>
    </TabsContainer>
  );
}

export default ProductTabs;