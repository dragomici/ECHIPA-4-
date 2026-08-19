import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../../hooks/useCart';
import './OrderSummary.css';

export const OrderSummary: React.FC = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
    const finalTotal = subtotal;

    const handleClearCart = () => {
        const isConfirmed = window.confirm("Are you sure you want to clear all items from your cart?");
        if (isConfirmed) {
            clearCart();
        }
    };

    return (
        <div className="order-summary">
            <h2 className="order-summary__title">Order Summary</h2>
            
            <div className="order-summary__row">
                <span className="order-summary__label">Subtotal:</span>
                <span className="order-summary__value">${subtotal.toFixed(2)}</span>
            </div>

            <div className="order-summary__divider"></div>

            <div className="order-summary__row order-summary__row--total">
                <span className="order-summary__label">Total:</span>
                <span className="order-summary__value">${finalTotal.toFixed(2)}</span>
            </div>

            <div className="order-summary__actions">
                <Button 
                    className="order-summary__checkout-btn"
                    onClick={() => navigate('/checkout')}
                    disabled={cartItems.length === 0}
                >
                    Proceed to Checkout
                </Button>
                <Button 
                    className="order-summary__clear-btn" 
                    onClick={handleClearCart}
                    disabled={cartItems.length === 0}
                >
                    Clear Cart
                </Button>
            </div>
        </div>
    );
};