// src/features/productDetail/hooks/useProduct.js
import { useState, useEffect } from 'react';
import PosterImage  from '../../home/images/sliderImage/SlideImage7.png'
import PosterImage2  from '../../home/images/sliderImage/SlideImage6.png'
import PosterImage3  from '../../home/images/sliderImage/SlideImage5.png'
import PosterImage4  from '../../home/images/sliderImage/SlideImage2.png'
const PRODUCT_IMAGES = [
  PosterImage ,
  PosterImage2 ,
  PosterImage3 ,
  PosterImage4 ,
  
];

const RELATED_IMAGES = [
  PosterImage ,
  PosterImage2 ,
  PosterImage3 ,
  PosterImage4 ,
];

const MOCK_PRODUCT = {
  id: 1,
  title: 'کفش ورزشی نایک مدل Air Max 2024',
  slug: 'nike-air-max-2024',
  price: 4200000,
  discount: 10,
  finalPrice: 3780000,
  rating: 4.8,
  reviewsCount: 124,
  description: `
    کفش ورزشی نایک ایر مکس ۲۰۲۴ با طراحی مدرن و فناوری‌های روز دنیا
    مناسب برای دویدن، پیاده‌روی و ورزش‌های روزمره.
    
    ویژگی‌ها:
    • کفی بسیار نرم با فناوری Air Max
    • رویه مشبک برای تنفس بهتر پا
    • زیره لاستیکی با چسبندگی عالی
    • وزن سبک و مناسب برای استفاده طولانی‌مدت
  `,
  specs: {
    'برند': 'نایک',
    'مدل': 'Air Max 2024',
    'جنسیت': 'مردانه / زنانه',
    'وزن': '۲۵۰ گرم',
    'جنس رویه': 'مش و چرم مصنوعی',
    'جنس زیره': 'لاستیک فشرده',
    'کشور سازنده': 'ویتنام',
  },
  colors: [
    { id: 1, name: 'سفید و مشکی', hex: '#FFFFFF' },
    { id: 2, name: 'قرمز و مشکی', hex: '#FF0000' },
    { id: 3, name: 'آبی مشکی', hex: '#0000FF' },
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44],
  stock: 150,
  images: [
    { id: 1, url: PRODUCT_IMAGES[0], alt: 'کفش نایک نمای جلو' },
    { id: 2, url: PRODUCT_IMAGES[1], alt: 'کفش نایک نمای پهلو' },
    { id: 3, url: PRODUCT_IMAGES[2], alt: 'کفش نایک نمای پشت' },
    { id: 4, url: PRODUCT_IMAGES[3], alt: 'کفش نایک زیره' },
  ],
  relatedProducts: [
    { id: 2, title: 'کفش آدیداس UltraBoost', price: 3850000, image: RELATED_IMAGES[0], rating: 4.6 },
    { id: 3, title: 'کفش پوما RS-X', price: 3200000, image: RELATED_IMAGES[1], rating: 4.4 },
    { id: 4, title: 'کفش نیوبالانس 574', price: 2800000, image: RELATED_IMAGES[2], rating: 4.7 },
    { id: 5, title: 'کفش ریباک کلاسیک', price: 2500000, image: RELATED_IMAGES[3], rating: 4.3 },
  ],
  reviews: [
    { id: 1, user: 'علی رضایی', avatar: 'AR', date: '۱۴۰۳/۰۱/۱۵', rating: 5, text: 'کیفیت عالی، خیلی راحت است و سبک. ارزش خرید دارد.' },
    { id: 2, user: 'سارا محمدی', avatar: 'SM', date: '۱۴۰۳/۰۱/۱۰', rating: 4, text: 'جنس خوبی داره، فقط کمی گرونه ولی در کل راضیم.' },
    { id: 3, user: 'مهدی کریمی', avatar: 'MK', date: '۱۴۰۳/۰۱/۰۵', rating: 5, text: 'بهترین کفشی که تا حالا خریدم. فوق‌العاده راحت.' },
  ],
  breadcrumb: ['خانه', 'محصولات ورزشی', 'کفش', 'نایک ایر مکس ۲۰۲۴'],
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setProduct(MOCK_PRODUCT);
          setLoading(false);
        }, 600);
      } catch (err) {
        setError('خطا در دریافت اطلاعات محصول');
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
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