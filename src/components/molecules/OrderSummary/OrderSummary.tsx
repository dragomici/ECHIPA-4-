import React from 'react';
<<<<<<< HEAD
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
=======
import './OrderSummary.css';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  onClearCart: () => void;
  onCheckout: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  onClearCart,
  onCheckout,
}) => {
  const total = subtotal + shipping;

  return (
    <aside className="order-summary">
      <h3 className="order-summary__title">Order Summary</h3>
      
      <div className="order-summary__row">
        <span className="order-summary__label">Subtotal:</span>
        <span className="order-summary__value">{subtotal.toFixed(2)} USD</span>
      </div>
      
      <div className="order-summary__row">
        <span className="order-summary__label">Shipping:</span>
        <span className="order-summary__value">{shipping.toFixed(2)} USD</span>
      </div>
      
      <div className="order-summary__divider"></div>
      
      <div className="order-summary__row order-summary__row--total">
        <span className="order-summary__label">Total:</span>
        <span className="order-summary__value">{total.toFixed(2)} USD</span>
      </div>
      
      <div className="order-summary__actions">
        <button 
          type="button" 
          className="order-summary__clear-btn" 
          onClick={onClearCart}
        >
          Clear Cart
        </button>
        <button 
          type="button"
          onClick={onCheckout}
          className="order-summary__checkout-btn"
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default OrderSummary;
>>>>>>> 3b415cc390c70a48df5d89c79423a7d4c32714b3
