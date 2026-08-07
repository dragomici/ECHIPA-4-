import React from 'react';
import './TopSellingMiniList.css';

export interface MiniListProduct {
  id: string;
  title: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
}

interface TopSellingMiniListProps {
  title: string;
  products: MiniListProduct[];
  className?: string;
}

export const TopSellingMiniList: React.FC<TopSellingMiniListProps> = ({
  title,
  products,
  className = '',
}) => {
  return (
    <div className={`mini-list ${className}`}>
      <h3 className="mini-list__title">{title}</h3>
      <div className="mini-list__items">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="mini-list-card">
            <div className="mini-list-card__image-container">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="mini-list-card__info">
              <h4 className="mini-list-card__title">{product.title}</h4>
              <div className="mini-list-card__rating">
                 <svg viewBox="0 0 24 24" fill="#FDC040" width="14" height="14">
                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                 </svg>
                 <span className="mini-list-card__rating-value">({product.rating.toFixed(1)})</span>
              </div>
              <div className="mini-list-card__price">
                <span className="current-price">${product.currentPrice.toFixed(2)}</span>
                {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};