import React from 'react';
import { useToast } from '../../../hooks/useToast';
import './CartItem.css';

interface CartItemProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  stock?: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  imageUrl,
  price,
  quantity,
  stock,
  onUpdateQuantity,
  onRemove,
}) => {
  const { addToast } = useToast();
  const subtotal = price * quantity;

  const handleIncrement = () => {
    if (stock !== undefined && quantity >= stock) {
      addToast(`Maximum stock limit reached for "${title}". Only ${stock} pieces available!`, 'error');
      return;
    }
    onUpdateQuantity(id, quantity + 1);
  };

  return (
    <tr className="cart-item">
      <td className="cart-item__product">
        <img src={imageUrl} alt={title} className="cart-item__image" />
      </td>
      <td className="cart-item__details">
        <h4 className="cart-item__title">{title}</h4>
        <span className="cart-item__subtitle">Price: ${price.toFixed(2)} USD</span>
        {stock !== undefined && (
          <span className="cart-item__stock-tag">
            {quantity >= stock ? 'Max stock reached' : `${stock - quantity} left in stock`}
          </span>
        )}
      </td>
      <td className="cart-item__price">
        ${price.toFixed(2)} USD
      </td>
      <td className="cart-item__quantity">
        <div className="cart-item__quantity-controls">
          <button 
            type="button" 
            className="cart-item__quantity-btn"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
          >
            -
          </button>
          <span className="cart-item__quantity-value">{quantity}</span>
          <button 
            type="button" 
            className={`cart-item__quantity-btn ${stock !== undefined && quantity >= stock ? 'cart-item__quantity-btn--disabled' : ''}`}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </td>
      <td className="cart-item__subtotal">
        ${subtotal.toFixed(2)} USD
      </td>
      <td className="cart-item__actions">
        <button 
          type="button" 
          className="cart-item__remove-btn"
          onClick={() => onRemove(id)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
