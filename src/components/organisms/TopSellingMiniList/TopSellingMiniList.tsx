import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './TopSellingMiniList.css';

export interface MiniListProduct {
  id: string;
  title: string;
  category: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  ratingCount?: number;
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
    <div className={`top-selling-mini-list ${className}`}>
      <h3 className="top-selling-mini-list__title">{title}</h3>
      <div className="top-selling-mini-list__items">
        {products.map((product) => (
          <div key={product.id} className="top-selling-mini-list__item">
            <ProductCard
              {...product}
              rating={product.rating ?? 0}
              ratingCount={product.ratingCount ?? 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};