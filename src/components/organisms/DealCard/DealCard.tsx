import React from 'react';
import './DealCard.css';
import { useCountdown } from '../../../hooks/useCountdown';
import { useCart } from '../../../hooks/useCart';

export interface DealCardProps {
  id: string;
  title: string;
  brand?: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  targetDate?: string;
}

const DealCard: React.FC<DealCardProps> = ({
  title,
  brand = 'NestFood',
  currentPrice,
  oldPrice,
  imageUrl,
  rating,
  targetDate = new Date().toISOString(),
}) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const { addToCart } = useCart();
  
  const formatTwoDigits = (num: number) => String(num).padStart(2, '0');

  const handleAddToCart = () => {
    addToCart({
      id: title,
      title,
      price: currentPrice,
      imageUrl,
    });
  };

  return (
    <div className="deal-card">
      <div className="deal-card__image-container">
        <img src={imageUrl} alt={title} className="deal-card__image" />
        
        <div className="deal-card__countdown">
          <div className="deal-card__time-box">
            <span className="deal-card__time-value">{days}</span>
            <span className="deal-card__time-label">Days</span>
          </div>
          <div className="deal-card__time-box">
            <span className="deal-card__time-value">{formatTwoDigits(hours)}</span>
            <span className="deal-card__time-label">Hours</span>
          </div>
          <div className="deal-card__time-box">
            <span className="deal-card__time-value">{formatTwoDigits(minutes)}</span>
            <span className="deal-card__time-label">Mins</span>
          </div>
          <div className="deal-card__time-box">
            <span className="deal-card__time-value">{formatTwoDigits(seconds)}</span>
            <span className="deal-card__time-label">Sec</span>
          </div>
        </div>
      </div>
      
      <div className="deal-card__content-wrapper">
        <div className="deal-card__content">
          <h3 className="deal-card__title">{title}</h3>
          
          <div className="deal-card__rating-area">
            <div className="deal-card__stars">
              <svg viewBox="0 0 24 24" fill="#FDC040" width="14" height="14">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span className="deal-card__rating-count">({rating.toFixed(1)})</span>
          </div>
          
          <div className="deal-card__brand">
            By <span className="deal-card__brand-name">{brand}</span>
          </div>
          
          <div className="deal-card__footer">
            <div className="deal-card__prices">
              <span className="deal-card__price-current">${currentPrice.toFixed(2)}</span>
              {oldPrice && <span className="deal-card__price-old">${oldPrice.toFixed(2)}</span>}
            </div>
            
            <button 
              className="deal-card__add-btn"
              onClick={handleAddToCart}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
