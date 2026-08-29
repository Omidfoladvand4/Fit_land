import styled from "styled-components";
import { useState } from "react";
import ProductReview from "./ProductReview";
import ProductDescription from "./ProductDescription";
import ProductSpecs from "./ProductSpecs";
const TabsContainer = styled.div`
  width: 90%;
  margin: 40px auto;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 490px) {
    width: 100%;
    padding: 0 12px;
  }
`;

const TabHeaders = styled.div`
  display: flex;
  gap: 8px;
  background-color: var(--color-neutral-800);
  padding: 8px 4px;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

const TabHeader = styled.button`
  padding: 14px 24px;
  background: ${({ $active }) =>
    $active ? "var(--color-base-primary-light)" : "transparent"};
  border: none;
  font-size: var(--font-body-md);
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: var(--color-base-background);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: 12px;

  &:hover {
    background: var(--color-base-primary);
  }
  @media (max-width: 490px) {
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
    0% {
      opacity: 0;
      transform: translateX(100%) scale(0.25);
    }
    100% {
      opacity: 1;
    }
  }
`;

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
          <ProductDescription description={description} />
        </TabPanel>
        <TabPanel $active={activeTab === "specs"}>
          <ProductSpecs specs={specs} />
        </TabPanel>
        <TabPanel $active={activeTab === "reviews"}>
          <ProductReview reviews={reviews} />
        </TabPanel>
      </TabContent>
    </TabsContainer>
  );
}

export default ProductTabs;
