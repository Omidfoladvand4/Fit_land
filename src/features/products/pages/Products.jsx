import styled from "styled-components";
import { products } from "../data/products";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ProductFilters from "../components/filters/ProductFilters";
import ProductGrid from "../components/ProductCard/ProductGrid";
import SortBar from "../components/sorting/SortBar";
import Pagination from "../components/pagination/Pagination";
import ResultCount from "../components/result/ResultCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PageWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 24px;
  direction: rtl;
`;

const PageLayout = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  position: relative;
`;

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const params = useParams();

  const decodedCategory = decodeURIComponent(params.category);

  const [filters, setFilters] = useState({
    inStock: false,
    hasDiscount: false,
    priceRange: [0, 5000000],
    selectedColors: [],
    selectedSizes: [],
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = products;

    if (decodedCategory) {
      result = result.filter((product) => product.category === decodedCategory);
    }

    if (filters.inStock) {
      result = result.filter((product) => product.inStock);
    }

    if (filters.hasDiscount) {
      result = result.filter((product) => product.hasDiscount);
    }

    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1],
    );

    if (filters.selectedColors.length > 0) {
      result = result.filter((product) =>
        product.colors.some((color) =>
          filters.selectedColors.includes(color.hex),
        ),
      );
    }

    if (filters.selectedSizes.length > 0) {
      result = result.filter((product) =>
        product.sizes.some((size) => filters.selectedSizes.includes(size)),
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [decodedCategory, filters]);

  const handleSortChange = (sortValue) => {
    setCurrentPage(1);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortValue === "cheapest") return a.price - b.price;
      if (sortValue === "most_expensive") return b.price - a.price;
      if (sortValue === "newest") return b.id - a.id;
      if (sortValue === "bestseller") return (b.sales || 0) - (a.sales || 0);
      return 0;
    });
    setFilteredProducts(sorted);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getBreadcrumbItems = () => {
    if (decodedCategory) {
      return ["خانه", decodedCategory];
    }
    return ["خانه", "همه محصولات"];
  };

  return (
    <PageWrapper>
      <Breadcrumb items={getBreadcrumbItems()} />

      <PageLayout>
        <ProductFilters onFilterChange={setFilters} />

        <ContentArea>
          <ToolbarWrapper>
            <SortBar onSortChange={handleSortChange} />
            <ResultCount count={filteredProducts.length} />
          </ToolbarWrapper>

          <ProductGrid products={currentProducts} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </ContentArea>
      </PageLayout>
    </PageWrapper>
  );
}

export default Products;
