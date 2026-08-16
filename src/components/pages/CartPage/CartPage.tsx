import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Button from '../../components/atoms/Button/Button';
import { OrderSummary } from '../../components/molecules/OrderSummary/OrderSummary';
import './CartPage.css';

export const CartPage = () => {
    const { cartItems, isLoading, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    if (isLoading) {
        return (
            <div className="cart-page-container">
                <div className="cart-items-section">
                    <h2>Your Cart</h2>
                    <div className="cart-items-list">
                        {/* Generăm 3 rânduri de tip Skeleton */}
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="cart-item skeleton-row">
                                <div className="skeleton-info">
                                    <div className="skeleton-text skeleton-title"></div>
                                    <div className="skeleton-text skeleton-price"></div>
                                </div>
                                <div className="skeleton-button"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-summary-section">
                    <div className="skeleton-summary"></div>
                </div>
            </div>
        );
    }

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
                <div className="cart-items-list">
                    {cartItems.map((item: any, index: number) => (
                        <div key={index} className="cart-item">
                            <div className="cart-item-info">
                                <span className="cart-item-name">{item.name}</span>
                                <span className="cart-item-price">${(item.price || 0).toFixed(2)}</span>
                            </div>
                            <Button 
                                onClick={() => removeFromCart(index)} 
                                className="remove-item-btn"
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart-summary-section">
                <OrderSummary />
            </div>
        </div>
    );
};