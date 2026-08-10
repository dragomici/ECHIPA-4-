import React from 'react';
import Skeleton from '../../atoms/Skeleton/Skeleton';
import './SkeletonMiniCard.css';

const SkeletonMiniCard: React.FC = () => {
  return (
    <div className="skeleton-mini-card">
      <div className="skeleton-mini-card__image-container">
        <Skeleton width="100%" height="100%" borderRadius="0.5rem" />
      </div>
      <div className="skeleton-mini-card__info">
        <Skeleton width="90%" height="1rem" className="skeleton-mini-card__title" />
        <Skeleton width="50%" height="0.875rem" className="skeleton-mini-card__rating" />
        <Skeleton width="40%" height="1rem" />
      </div>
    </div>
  );
};

export default SkeletonMiniCard;
