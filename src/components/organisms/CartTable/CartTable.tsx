import React from 'react';
import CartItemComponent from '../../molecules/CartItem/CartItem';
import './CartTable.css';

export interface CartItemType {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  stock?: number;
}

export interface CartTableProps {
  items: CartItemType[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartTable: React.FC<CartTableProps> = ({
  items,
  onUpdateQuantity,
  onRemove,
}) => {
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
                stock={item.stock}
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
