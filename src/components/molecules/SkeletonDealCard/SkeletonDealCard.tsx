import React from 'react';
import Skeleton from '../../atoms/Skeleton/Skeleton';
import './SkeletonDealCard.css';

const SkeletonDealCard: React.FC = () => {
  return (
    <div className="skeleton-deal-card">
      <div className="skeleton-deal-card__image-wrapper">
        <Skeleton width="100%" height="18.75rem" borderRadius="1rem" />
      </div>
      <div className="skeleton-deal-card__content-wrapper">
        <div className="skeleton-deal-card__content">
          <Skeleton width="80%" height="1.5rem" className="skeleton-deal-card__title" />
          <Skeleton width="40%" height="1rem" className="skeleton-deal-card__rating" />
          <Skeleton width="30%" height="1rem" className="skeleton-deal-card__brand" />
          <div className="skeleton-deal-card__footer">
            <Skeleton width="30%" height="1.5rem" />
            <Skeleton width="4rem" height="2rem" borderRadius="0.25rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDealCard;
