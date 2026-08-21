import styled from "styled-components";
import { useState } from "react";
import ReviewItem from "./ReviewItem";
import ProductDescription from "./ProductDescription";
import ProductSpecs from "./ProductSpecs";
const TabsContainer = styled.div`
  width: 90%;
  margin: 40px auto;
  border: 1px solid var(--color-neutral-200);
  border-radius: 12px;
  overflow: hidden;
      @media (max-width : 490px) {
    width: 100%;
    padding: 0 12px;
  }
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
    $active ? "rgb(207,232,255)" : "transparent"};
  border: none;
  font-size: var(--font-body-md);
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: var(--color-base-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: 12px;

  &:hover {
    background: rgb(207, 232, 255);
  }
  @media (max-width : 490px) {
  font-size: var(--font-body-xl);
  padding: 10px 12px;
  }
`;

const TabContent = styled.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid var(--color-neutral-800);
  margin-top: 12px;
`;

const TabPanel = styled.div`
  display: ${({ $active }) => ($active ? "block" : "none")};
   animation: ${({ $active }) => ($active ? "animate" : "")} 0.5s ease;
   transform-origin: left;
   @keyframes animate {
    0%{
      opacity: 0;
      transform: translateX(100%) scale(.25);
    }
    100%{
      opacity: 1;
    }
   }
`;
const NoReview = styled.div`
text-align: center;
padding: 20px;
color: var(--color-neutral-800);
`

function ProductTabs({ description, specs, reviews }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "specs", label: "ویژگی های محصول" },
    { key: "description", label: "توضیحات" },
    { key: "reviews", label: `نظرات (${reviews?.length || 0})` },
  ];

  return (
    <TabsContainer>
      <TabHeaders>
        {tabs.map((tab) => (
          <TabHeader
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}>
            {tab.label}
          </TabHeader>
        ))}
      </TabHeaders>
      <TabContent>
        <TabPanel $active={activeTab === "description"}>
         <ProductDescription description={description}/>
        </TabPanel>
        <TabPanel $active={activeTab === "specs"}>
          <ProductSpecs specs={specs}/>
        </TabPanel>
        <TabPanel $active={activeTab === "reviews"}>
          {reviews?.length > 0 ? (
            reviews.map((review, index) => (
              <ReviewItem
                review={review}
                key={review.id || index} 
              />
            ))
          ) : (
            <NoReview>
              نظری برای این محصول ثبت نشده است.
            </NoReview>
          )}
        </TabPanel>
      </TabContent>
    </TabsContainer>
  );
}

export default ProductTabs;
