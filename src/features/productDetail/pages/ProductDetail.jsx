// src/features/productDetail/pages/ProductDetail.jsx
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import Loading from '../../shared/Loading/Loading';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductTabs from '../components/ProductTabs';
import RelatedProducts from '../components/RelatedProducts';
import StoreFeatures  from '../../home/components/StoreFeatures/StoreFeatures'

const PageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 24px;
  @media (max-width : 490px) {
     padding: 12px 0;
  }
`;

const ProductSection = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 24px auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;
const RelatedproductsContainer = styled.div`
  width: 90% ;
  margin:  16px auto;
`
const StoreFeaturesContainer = styled.div`
 max-width: 100%;
  @media (max-width : 490px) {
    display: none;
  }
`
const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: var(--font-body-large);
  color: var(--color-error-800);
`;

function ProductDetail() {
  const { productId } = useParams();
  const { product, loading, error, addToCart, addToWishlist  ,relatedProduct} = useProduct(productId);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!product) {
    return <ErrorMessage>محصولی یافت نشد</ErrorMessage>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('لطفاً سایز مورد نظر را انتخاب کنید');
      return;
    }
    addToCart(quantity, selectedSize, selectedColor);
    alert(`${product.title} به سبد خرید اضافه شد!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist();
    alert(`${product.title} به علاقه‌مندی‌ها اضافه شد!`);
  };

  return (
    <PageContainer>
      
      <ProductSection>
        <ProductGallery images={product.images} />
        <ProductInfo
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </ProductSection>

      <ProductTabs
        description={product.description}
        specs={product.specs}
        reviews={product.reviews}
      />

      <RelatedproductsContainer >
        <RelatedProducts products={relatedProduct} />
      </RelatedproductsContainer>
      <StoreFeaturesContainer >
         <StoreFeatures />
      </StoreFeaturesContainer>
    </PageContainer>
  );
}

export default ProductDetail;