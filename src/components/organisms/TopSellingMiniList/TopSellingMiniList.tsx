import React, { useState, useEffect } from 'react';
import SkeletonMiniCard from '../../molecules/SkeletonMiniCard/SkeletonMiniCard';
import './TopSellingMiniList.css';

export interface MiniListProduct {
  id: string;
  title: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  stock?: number;
}

interface TopSellingMiniListProps {
  title: string;
  products: MiniListProduct[];
  className?: string;
  isLoading?: boolean;
  rotationStep?: number;
  onHoverChange?: (isHovered: boolean) => void;
}

export const TopSellingMiniList: React.FC<TopSellingMiniListProps> = ({
  title,
  products,
  className = '',
  isLoading = false,
  rotationStep = 0,
  onHoverChange,
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const skeletons = Array.from({ length: 3 });

  useEffect(() => {
    if (products.length <= 3 || rotationStep === 0) return;

    // Trigger sliding transition when rotationStep changes
    setIsSliding(true);

    const timer = setTimeout(() => {
      setCurrIndex(rotationStep % products.length);
      setIsSliding(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [rotationStep, products.length]);

  // Compute 4 items when sliding (0: sliding out, 1..3: visible/entering)
  const displayedProducts = React.useMemo(() => {
    if (products.length <= 3) return products;

    const items: MiniListProduct[] = [];
    const count = isSliding ? 4 : 3;
    for (let i = 0; i < count; i++) {
      items.push(products[(currIndex + i) % products.length]);
    }
    return items;
  }, [products, currIndex, isSliding]);

  return (
    <div
      className={`mini-list ${className}`}
      onMouseEnter={() => onHoverChange && onHoverChange(true)}
      onMouseLeave={() => onHoverChange && onHoverChange(false)}
    >
      <h3 className="mini-list__title">{title}</h3>
      <div className="mini-list__viewport">
        <div className={`mini-list__track ${isSliding ? 'mini-list__track--sliding' : ''}`}>
          {isLoading
            ? skeletons.map((_, index) => <SkeletonMiniCard key={index} />)
            : displayedProducts.map((product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  className={`mini-list-card ${
                    isSliding && idx === 0 ? 'mini-list-card--exiting' : ''
                  } ${isSliding && idx === 3 ? 'mini-list-card--entering' : ''}`}
                >
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
    </div>
  );
};