import WishlistItemRow from '../../molecules/WishlistItemRow/WishlistItemRow';
import type { WishlistRowData } from '../../molecules/WishlistItemRow/WishlistItemRow';
import './WishlistTable.css';

interface WishlistTableProps {
  items: WishlistRowData[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const WishlistTable: React.FC<WishlistTableProps> = ({ items, onRemove, onClear }) => {
  if (items.length === 0) {
    return (
      <div className="wishlist-table__empty">
        <div className="wishlist-table__empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#3bb77e" strokeWidth="1.5" width="64" height="64">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <h3 className="wishlist-table__empty-title">Your wishlist is empty</h3>
        <p className="wishlist-table__empty-text">
          Explore our store and tap the heart icon on products to save your favorites here!
        </p>
        <a href="/" className="wishlist-table__empty-btn">
          Explore Products
        </a>
      </div>
    );
  }

  return (
    <div className="wishlist-table-wrapper">
      <div className="wishlist-table__header-toolbar">
        <div className="wishlist-table__title-area">
          <h2 className="wishlist-table__title">Your Wishlist</h2>
          <span className="wishlist-table__count-badge">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
        </div>
        <button
          type="button"
          className="wishlist-table__clear-btn"
          onClick={onClear}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          Clear Wishlist
        </button>
      </div>

      <div className="wishlist-table__container">
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Details</th>
              <th>Unit Price</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <WishlistItemRow
                key={item.id}
                item={item}
                onRemove={onRemove}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistTable;
