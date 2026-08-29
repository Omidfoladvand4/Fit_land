// src/context/ShopContext.jsx
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { toast } from "sonner";

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = useCallback(
    (product, quantity = 1, size = null, color = null) => {
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) =>
            item.id === product.id &&
            item.selectedSize === size &&
            item.selectedColor?.id === color?.id,
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantity,
          };
          return updatedItems;
        }

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
    },
    [],
  );
  const isInCart = useCallback(
    (productId, size = null, color = null) => {
      return cartItems.some(
        (item) =>
          item.id === productId &&
          (size ? item.selectedSize === size : true) &&
          (color ? item.selectedColor?.id === color.id : true),
      );
    },
    [cartItems],
  );
  const removeFromCart = useCallback((itemId) => {
    toast.success("با موفقیت سبد خرید حذف شد");
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  const updateCartQuantity = useCallback((itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const addToWishlist = useCallback((product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  }, []);

  const removeFromWishlist = useCallback((itemId) => {
    toast.success("با موفقیت  از علاقه مندی ها حذف شد");
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId),
    );
  }, []);

  const isInWishlist = useCallback(
    (productId) => {
      return wishlistItems.some((item) => item.id === productId);
    },
    [wishlistItems],
  );

  const cartTotalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const cartTotalDiscount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) =>
        sum +
        (item.hasDiscount
          ? (item.originalPrice - item.price) * item.quantity
          : 0),
      0,
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
    isInCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
