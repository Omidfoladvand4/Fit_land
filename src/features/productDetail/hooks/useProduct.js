// src/features/productDetail/hooks/useProduct.js
import { useState, useEffect } from 'react';
import { products } from '../../products/data/products'; 

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        setTimeout(() => {
          const foundProduct = products.find((p) => p.id === Number(productId));

          if (foundProduct) {
            setProduct(foundProduct);
            setError(null);
          } else {
            setProduct(null);
            setError('محصول مورد نظر یافت نشد');
          }

          setLoading(false);
        }, 600);

      } catch (err) {
        setError('خطا در دریافت اطلاعات محصول');
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      setLoading(false);
      setError('شناسه محصول نامعتبر است');
    }
  }, [productId]);

  const addToCart = (quantity, size, color) => {
    console.log(`محصول ${product?.title} با تعداد ${quantity} و سایز ${size} به سبد خرید اضافه شد`);
    return true;
  };

  const addToWishlist = () => {
    console.log(`محصول ${product?.title} به علاقه‌مندی‌ها اضافه شد`);
    return true;
  };

  return { product, loading, error, addToCart, addToWishlist };
};