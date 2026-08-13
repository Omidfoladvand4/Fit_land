import styled from 'styled-components';
import { products } from '../data/products';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ProductFilters from '../components/filters/ProductFilters';
import ProductGrid from '../components/ProductCard/ProductGrid';
import SortBar from '../components/sorting/SortBar';
import Pagination from '../components/pagination/Pagination';
import ResultCount from '../components/result/ResultCount';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PageWrapper = styled.div`
  max-width: 1200px;
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

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (decodedCategory) {
      const filtered = products.filter((product) => {

        return product.category === decodedCategory;
      });
      setFilteredProducts(filtered);
      setCurrentPage(1);
    } else {
      setFilteredProducts(products);
    }
  }, [decodedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleFilterChange = (filters) => {
    setCurrentPage(1);
    console.log('فیلترهای انتخاب شده:', filters);

    let filtered = products.filter((product) => {
      if (decodedCategory && product.category !== decodedCategory) {
        return false;
      }
      return true;
    });

    // اینجا می‌توانید فیلترهای دیگر مثل قیمت، رنگ، سایز و ... را اعمال کنید
    // فعلاً فقط نمونه:

    if (filters?.minPrice) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice);
    }
    if (filters?.maxPrice) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  // ---------- هندلر مرتب‌سازی ----------
  const handleSortChange = (sortValue) => {
    setCurrentPage(1);
    console.log('مرتب‌سازی بر اساس:', sortValue);

    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortValue === 'cheapest') return a.price - b.price;
      if (sortValue === 'most_expensive') return b.price - a.price;
      if (sortValue === 'newest') return b.id - a.id;
      if (sortValue === 'bestseller') return (b.sales || 0) - (a.sales || 0);
      return 0;
    });
    setFilteredProducts(sorted);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const getBreadcrumbItems = () => {
  if (decodedCategory) {
    return ['خانه', decodedCategory];
  }
  return ['خانه', 'همه محصولات'];
};

  return (
    <PageWrapper>

      <Breadcrumb items={getBreadcrumbItems()} />

      <PageLayout>
        <ProductFilters onFilterChange={handleFilterChange} />
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