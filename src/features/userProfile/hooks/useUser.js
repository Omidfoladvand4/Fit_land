import { useState, useEffect } from 'react';
import { products } from '../../products/data/products'

const MOCK_USER = {
  id: 1,
  firstName: 'مها',
  lastName: 'شیرین‌زبان',
  nationalCode: '۱۲۳۴۵۶۶۶',
  email: 'mahsashirinzabanV01@gmail.com',
  phone: '۰۹۱۲۳۴۵۶۷۸۹',
  orders: [
    {
      id: 101,
      date: '۱۴۰۳/۰۱/۱۰',
      total: 1250000,
      status: 'delivered',
      items: [
        { name: 'کفش نایک مدل S-2000', quantity: 1, price: 850000 },
        { name: 'لباس ورزشی آدیداس', quantity: 2, price: 200000 },
      ],
    },
    {
      id: 102,
      date: '۱۴۰۳/۰۱/۲۵',
      total: 3200000,
      status: 'processing',
      items: [
        { name: 'تخته اسکیت', quantity: 1, price: 3200000 },
      ],
    },
  ],
  wishlist: products ,
  addresses: [
    { id: 1, title: 'آدرس منزل', text: 'تهران، خیابان ولیعصر، پلاک ۱۲۳، واحد ۵' },
    { id: 2, title: 'آدرس محل کار', text: 'تهران، خیابان انقلاب، پلاک ۴۵' },
  ],
  reviews: [
    { id: 1, product: 'کفش نایک S-2000', rating: 5, date: '۱۴۰۳/۰۱/۱۵', text: 'کیفیت عالی، خیلی راحت است' },
    { id: 2, product: 'ساک ورزشی پوما', rating: 4, date: '۱۴۰۳/۰۱/۲۰', text: 'جنس خوبی داره، فقط کمی گرونه' },
  ],
};

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setUser(MOCK_USER);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('خطا در دریافت اطلاعات کاربر');
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = async (updatedData) => {
    setUser({ ...user, ...updatedData });
  };

  return { user, loading, error, updateUser };
};