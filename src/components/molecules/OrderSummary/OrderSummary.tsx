import React from 'react';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../../hooks/useCart';
import './OrderSummary.css';

export const OrderSummary = () => {
    const { cartItems, clearCart } = useCart();
    
    const total = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

    const handleClearCart = () => {
        const isConfirmed = window.confirm("Are you sure you want to clear all items from your cart?");
        if (isConfirmed) {
            clearCart();
        }
    };

    return (
        <div className="order-summary-container">
            <h2>Order Summary</h2>
            <div className="summary-details">
                <p>Total Items: {cartItems.length}</p>
                <p>Total Price: ${total.toFixed(2)}</p>
            </div>
            <Button onClick={handleClearCart} className="clear-cart-btn">
                Clear Cart
            </Button>
        </div>
    );
};