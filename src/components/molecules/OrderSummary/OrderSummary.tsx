import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../../hooks/useCart';
import './OrderSummary.css';

export const OrderSummary: React.FC = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
    const discountAmount = subtotal * discount;
    const finalTotal = subtotal - discountAmount;

    const handleClearCart = () => {
        const isConfirmed = window.confirm("Are you sure you want to clear all items from your cart?");
        if (isConfirmed) {
            clearCart();
        }
    };

    const handleApplyCoupon = () => {
        if (couponCode.trim().toUpperCase() === 'NEST10') {
            setDiscount(0.10);
            setCouponMessage('Coupon applied! (10% off)');
        } else {
            setDiscount(0);
            setCouponMessage('Invalid coupon code.');
        }
    };

    return (
        <div className="order-summary">
            <h2 className="order-summary__title">Order Summary</h2>
            
            <div className="order-summary__row">
                <span className="order-summary__label">Subtotal:</span>
                <span className="order-summary__value">${subtotal.toFixed(2)}</span>
            </div>

            {discount > 0 && (
                <div className="order-summary__row order-summary__row--discount">
                    <span className="order-summary__label">Discount (10%):</span>
                    <span className="order-summary__value">-${discountAmount.toFixed(2)}</span>
                </div>
            )}

            <div className="order-summary__divider"></div>

            <div className="order-summary__row order-summary__row--total">
                <span className="order-summary__label">Total:</span>
                <span className="order-summary__value">${finalTotal.toFixed(2)}</span>
            </div>

            <div className="order-summary__coupon">
                <div className="order-summary__coupon-group">
                    <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon (e.g. NEST10)"
                        className="order-summary__coupon-input"
                    />
                    <Button onClick={handleApplyCoupon} className="order-summary__coupon-btn">
                        Apply
                    </Button>
                </div>
                {couponMessage && (
                    <p className={`order-summary__coupon-msg ${discount > 0 ? 'order-summary__coupon-msg--success' : 'order-summary__coupon-msg--error'}`}>
                        {couponMessage}
                    </p>
                )}
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