import React from 'react';
import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';
import Star from '../../atoms/Star/Star';
import ProductPrice from '../../molecules/ProductPrice/ProductPrice';
import { useWishlist } from '../../../hooks/useWishlist';
import './ProductCard.css';

interface ProductCardProps {
  imageUrl: string;
  category: string;
  title: string;
  rating: number;
  ratingCount: number;
  currentPrice: number;
  oldPrice?: number;
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
  badgeText,
  badgeVariant,
}) => {
  const { wishlistItems, toggleWishlist } = useWishlist();
  
  const inWishlist = wishlistItems.some(item => item.id === title);
  
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist({ id: title, title });
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img src={imageUrl} alt={title} className="product-card__image" loading="lazy" />
        {badgeText && badgeVariant && (
          <div className="product-card__badge">
            <Badge text={badgeText} variant={badgeVariant} />
          </div>
        )}
        <button 
          className={`product-card__wishlist-btn ${inWishlist ? 'product-card__wishlist-btn--active' : ''}`}
          onClick={handleWishlistClick}
          aria-label="Toggle wishlist"
        >
          <svg viewBox="0 0 24 24" fill={inWishlist ? "#3bb77e" : "none"} stroke="currentColor" strokeWidth="2" width="16" height="16">
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

        <div className="product-card__footer">
          <ProductPrice currentPrice={currentPrice} oldPrice={oldPrice} />
          <Button variant="primary" aria-label={`Add ${title} to cart`}>Add</Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
