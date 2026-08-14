import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  stock?: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === newItem.title || item.id === newItem.id);
      if (existingItem) {
        if (newItem.stock !== undefined && existingItem.quantity >= newItem.stock) {
          return prevItems;
        }
        return prevItems.map((item) =>
          (item.title === newItem.title || item.id === newItem.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) => {
        if (item.id === id) {
          const targetQuantity = item.stock !== undefined ? Math.min(quantity, item.stock) : quantity;
          return { ...item, quantity: targetQuantity };
        }
        return item;
      });
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQuantity, removeFromCart, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
