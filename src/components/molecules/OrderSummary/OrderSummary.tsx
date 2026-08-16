import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../../hooks/useCart';
import './OrderSummary.css';

export const OrderSummary = () => {
    const { cartItems, clearCart } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');
    
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);
    const discountAmount = subtotal * discount;
    const finalTotal = subtotal - discountAmount;

    const handleClearCart = () => {
        const isConfirmed = window.confirm("Are you sure you want to clear all items from your cart?");
        if (isConfirmed) {
            clearCart();
        }
    };

    const handleApplyCoupon = () => {
        if (couponCode.toUpperCase() === 'NEST10') {
            setDiscount(0.10);
            setCouponMessage('Coupon applied successfully! (10% off)');
        } else {
            setDiscount(0);
            setCouponMessage('Invalid coupon code.');
        }
    };

    return (
        <div className="order-summary-container">
            <h2>Order Summary</h2>
            
            <div className="summary-details">
                <p>Total Items: {cartItems.length}</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                {discount > 0 && (
                    <p className="discount-text">Discount: -${discountAmount.toFixed(2)}</p>
                )}
                <p className="final-total">Total Price: ${finalTotal.toFixed(2)}</p>
            </div>

            <div className="coupon-section">
                <div className="coupon-input-group">
                    <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="coupon-input"
                    />
                    <Button onClick={handleApplyCoupon} className="apply-coupon-btn">
                        Apply
                    </Button>
                </div>
                {couponMessage && (
                    <p className={`coupon-message ${discount > 0 ? 'success' : 'error'}`}>
                        {couponMessage}
                    </p>
                )}
            </div>

            <Button onClick={handleClearCart} className="clear-cart-btn">
                Clear Cart
            </Button>
        </div>
    );
};