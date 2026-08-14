import React from 'react';
import Badge from '../../atoms/Badge/Badge';
import Star from '../../atoms/Star/Star';
import ProductPrice from '../../molecules/ProductPrice/ProductPrice';
import { useWishlist, type WishlistItem } from '../../../hooks/useWishlist';
import { useCart } from '../../../hooks/useCart';
import { useToast } from '../../../hooks/useToast';
import './ProductCard.css';

interface ProductCardProps {
  imageUrl: string;
  category: string;
  title: string;
  rating: number;
  ratingCount: number;
  currentPrice: number;
  oldPrice?: number;
  stock?: number;
  badgeText?: string;
  badgeVariant?: 'hot' | 'sale' | 'new' | 'discount';
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  category,
  title,
  rating,
  ratingCount,
  currentPrice,
  oldPrice,
  stock,
  badgeText,
  badgeVariant,
}) => {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { items, addToCart } = useCart();
  const { addToast } = useToast();

  const inWishlist = wishlistItems.some((item: WishlistItem) => item.id === title);

  const cartItem = items.find((item) => item.title === title || item.id === title);
  const currentCartQty = cartItem ? cartItem.quantity : 0;
  const totalStock = stock !== undefined ? stock : 10;
  const remainingStock = Math.max(0, totalStock - currentCartQty);
  const isStockReached = currentCartQty >= totalStock;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist({
      id: title,
      title,
      price: currentPrice,
      imageUrl,
      stock: totalStock,
      category,
    });
  };

  const handleAddToCart = () => {
    if (isStockReached) {
      addToast(`Maximum stock reached for "${title}". Only ${totalStock} pieces available!`, 'error');
      return;
    }

    addToCart({
      id: title,
      title,
      price: currentPrice,
      imageUrl,
      stock: totalStock,
    });

    if (remainingStock - 1 === 0) {
      addToast(`You added the last available piece of "${title}" to your cart!`, 'info');
    } else {
      addToast(`${title} added to cart! (${remainingStock - 1} pieces left)`, 'success');
    }
  };

  return (
    <article className={`product-card ${isStockReached ? 'product-card--out-of-stock' : ''}`}>
      {badgeText && badgeVariant && (
        <div className="product-card__badge-wrapper">
          <Badge text={badgeText} variant={badgeVariant} />
        </div>
      )}
      <div className="product-card__image-wrapper">
        <img src={imageUrl} alt={title} className="product-card__image" loading="lazy" />
        <button
          className={`product-card__wishlist-btn ${inWishlist ? 'product-card__wishlist-btn--active' : ''}`}
          onClick={handleWishlistClick}
          aria-label="Toggle wishlist"
        >
          <svg viewBox="0 0 24 24" fill={inWishlist ? '#3bb77e' : 'none'} stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="product-card__content">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__rating">
          <div className="product-card__stars">
            {[...Array(5)].map((_, index) => (
              <Star key={index} filled={index < rating} />
            ))}
          </div>
          <span className="product-card__rating-count">({ratingCount.toFixed(1)})</span>
        </div>

        <div className="product-card__brand">
          By <span className="product-card__brand-name">NestFood</span>
        </div>

        <div className="product-card__stock-info">
          {remainingStock <= 0 ? (
            <span className="product-card__stock-badge product-card__stock-badge--out">
              Out of stock
            </span>
          ) : remainingStock <= 5 ? (
            <span className="product-card__stock-badge product-card__stock-badge--low">
              Only {remainingStock} {remainingStock === 1 ? 'piece' : 'pieces'} left
            </span>
          ) : (
            <span className="product-card__stock-badge product-card__stock-badge--in">
              In stock ({remainingStock})
            </span>
          )}
        </div>

        <div className="product-card__footer">
          <ProductPrice currentPrice={currentPrice} oldPrice={oldPrice} />
          <button
            className={`product-card__add-btn ${isStockReached ? 'product-card__add-btn--disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={isStockReached}
            aria-label={`Add ${title} to cart`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
