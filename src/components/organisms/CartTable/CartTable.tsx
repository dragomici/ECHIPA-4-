import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Button from '../../components/atoms/Button/Button';
import { OrderSummary } from '../../components/molecules/OrderSummary/OrderSummary';
import './CartPage.css';

export const CartPage = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page-empty">
                <h2>Your cart is currently empty.</h2>
                <Button onClick={handleContinueShopping} className="continue-shopping-btn">
                    Continue Shopping
                </Button>
            </div>
        );
    }

    return (
        <div className="cart-page-container">
            <div className="cart-items-section">
                <h2>Your Cart</h2>
                {cartItems.map((item: any, index: number) => (
                    <div key={index} className="cart-item">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </div>
                ))}
            </div>
            <div className="cart-summary-section">
                <OrderSummary />
            </div>
        </div>
    );
};