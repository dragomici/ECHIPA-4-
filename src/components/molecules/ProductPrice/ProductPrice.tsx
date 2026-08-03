import React from 'react';
import './ProductPrice.css';

interface ProductPriceProps {
  currentPrice: number;
  oldPrice?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ currentPrice, oldPrice }) => {
  return (
    <div className="product-price">
      <span className="product-price__current">${currentPrice.toFixed(2)}</span>
      {oldPrice && (
        <span className="product-price__old">${oldPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
