import React from 'react';
import './CartTable.css';
import CartItemComponent from '../../molecules/CartItem/CartItem';
import type { CartItem } from '../../../hooks/useCart';

interface CartTableProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartTable: React.FC<CartTableProps> = ({ items, onUpdateQuantity, onRemove }) => {
  if (items.length === 0) {
    return (
      <div className="cart-table__empty">
        <p>Your shopping cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-table-wrapper">
      <h2 className="cart-table__title">Your Shopping Cart</h2>
      <div className="cart-table__container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItemComponent
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                quantity={item.quantity}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
