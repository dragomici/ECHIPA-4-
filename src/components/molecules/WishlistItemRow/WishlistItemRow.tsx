import React from 'react';
import { useCart } from '../../../hooks/useCart';
import { useToast } from '../../../hooks/useToast';
import './WishlistItemRow.css';

export interface WishlistRowData {
  id: string;
  title: string;
  price?: number;
  imageUrl?: string;
  stock?: number;
  category?: string;
}

interface WishlistItemRowProps {
  item: WishlistRowData;
  onRemove: (id: string) => void;
}

const WishlistItemRow: React.FC<WishlistItemRowProps> = ({ item, onRemove }) => {
  const { items: cartItems, addToCart } = useCart();
  const { addToast } = useToast();

  const price = item.price ?? 29.99;
  const imageUrl = item.imageUrl ?? '';
  const category = item.category ?? 'Groceries';
  const totalStock = item.stock !== undefined ? item.stock : 10;

  const inCart = cartItems.find((c) => c.title === item.title || c.id === item.id);
  const cartQty = inCart ? inCart.quantity : 0;
  const remainingStock = Math.max(0, totalStock - cartQty);
  const isOutOfStock = remainingStock <= 0;

  const handleAddToCart = () => {
    if (isOutOfStock) {
      addToast(`Maximum stock limit reached for "${item.title}". Only ${totalStock} available in stock.`, 'error');
      return;
    }

    addToCart({
      id: item.title,
      title: item.title,
      price,
      imageUrl,
      stock: totalStock,
    });

    addToast(`"${item.title}" added to your cart!`, 'success');
  };

  return (
    <tr className="wishlist-row">
      <td className="wishlist-row__product">
        {imageUrl ? (
          <img src={imageUrl} alt={item.title} className="wishlist-row__image" />
        ) : (
          <div className="wishlist-row__placeholder-img" />
        )}
      </td>
      <td className="wishlist-row__details">
        <span className="wishlist-row__category">{category}</span>
        <h4 className="wishlist-row__title">{item.title}</h4>
      </td>
      <td className="wishlist-row__price">
        ${price.toFixed(2)} USD
      </td>
      <td className="wishlist-row__stock">
        {isOutOfStock ? (
          <span className="wishlist-row__stock-badge wishlist-row__stock-badge--out">
            Out of Stock
          </span>
        ) : (
          <span className="wishlist-row__stock-badge wishlist-row__stock-badge--in">
            In Stock ({remainingStock})
          </span>
        )}
      </td>
      <td className="wishlist-row__actions">
        <div className="wishlist-row__btn-group">
          <button
            type="button"
            className={`wishlist-row__add-btn ${isOutOfStock ? 'wishlist-row__add-btn--disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to Cart
          </button>
          <button
            type="button"
            className="wishlist-row__remove-btn"
            onClick={() => onRemove(item.id)}
            title="Remove item"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WishlistItemRow;
