import React from 'react';
import Skeleton from '../../atoms/Skeleton/Skeleton';
import './SkeletonProductCard.css';

const SkeletonProductCard: React.FC = () => {
  return (
    <article className="skeleton-product-card">
      <div className="skeleton-product-card__image-wrapper">
        <Skeleton width="100%" height="100%" borderRadius="0" />
      </div>
      <div className="skeleton-product-card__content">
        <Skeleton width="40%" height="1rem" className="skeleton-product-card__category" />
        <Skeleton width="80%" height="1.25rem" className="skeleton-product-card__title" />
        
        <div className="skeleton-product-card__rating">
          <Skeleton width="6rem" height="1rem" />
        </div>

        <div className="skeleton-product-card__footer">
          <Skeleton width="40%" height="1.5rem" />
          <Skeleton width="30%" height="2rem" borderRadius="0.25rem" />
        </div>
      </div>
    </article>
  );
};

export default SkeletonProductCard;
