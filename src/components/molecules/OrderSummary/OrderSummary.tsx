import React from 'react';
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
