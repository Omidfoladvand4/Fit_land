// src/context/ShopContext.jsx
import { createContext, useContext, useState, useMemo, useCallback } from "react";
import { toast } from "sonner";

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  // State سبد خرید
  const [cartItems, setCartItems] = useState([]);
  
  // State علاقه‌مندی‌ها
  const [wishlistItems, setWishlistItems] = useState([]);

  // --- توابع سبد خرید ---

  const addToCart = useCallback((product, quantity = 1, size = null, color = null) => {
    setCartItems((prevItems) => {
      // بررسی می‌کنیم آیا محصول با همان سایز و رنگ قبلاً اضافه شده است یا خیر
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor?.id === color?.id
      );

      if (existingItemIndex > -1) {
        // اگر وجود داشت، فقط تعداد را افزایش می‌دهیم
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      }

      // اگر وجود نداشت، آیتم جدید اضافه می‌کنیم
      return [
        ...prevItems,
        {
          ...product,
          quantity,
          selectedSize: size,
          selectedColor: color,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    toast.success( 'با موفقیت سبد خرید حذف شد')
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  const updateCartQuantity = useCallback((itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // --- توابع علاقه‌مندی‌ها ---

  const addToWishlist = useCallback((product) => {
    setWishlistItems((prevItems) => {
      // اگر محصول قبلاً در لیست بود، حذفش می‌کنیم (Toggle)
      const exists = prevItems.some((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  }, []);

  const removeFromWishlist = useCallback((itemId) => {
     toast.success( 'با موفقیت  از علاقه مندی ها حذف شد')
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  const isInWishlist = useCallback((productId) => {
    return wishlistItems.some((item) => item.id === productId);
  }, [wishlistItems]);

  // --- محاسبات سبد خرید ---

  const cartTotalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const cartTotalDiscount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) =>
        sum + (item.hasDiscount ? (item.originalPrice - item.price) * item.quantity : 0),
      0
    );
  }, [cartItems]);

  const finalPrice = cartTotalPrice - cartTotalDiscount;
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    cartTotalPrice,
    cartTotalDiscount,
    finalPrice,
    cartCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// هوک سفارشی برای استفاده آسان
export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};