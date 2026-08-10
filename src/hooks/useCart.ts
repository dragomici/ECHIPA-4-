import { useState } from "react";

export interface CartItem {
  id: string;
  title: string;
  price: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalCount = cartItems.length;

  return {
    cartItems,
    addItem,
    removeItem,
    totalCount,
  };
};
