import { useState, useEffect } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
            setIsLoading(false);
        }, 800); 

        return () => clearTimeout(timer);
    }, []);

    const saveCart = (items: any[]) => {
        setCartItems(items);
        localStorage.setItem('cart', JSON.stringify(items));
    };

    const addToCart = (product: any) => {
        const updatedCart = [...cartItems, product];
        saveCart(updatedCart);
    };

    const removeFromCart = (indexToRemove: number) => {
        const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
        saveCart(updatedCart);
    };

    const clearCart = () => {
        saveCart([]);
    };

    return {
        cartItems,
        isLoading,
        addToCart,
        removeFromCart,
        clearCart
    };
};