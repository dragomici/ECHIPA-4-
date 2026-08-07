import React from 'react';
import DealCard from '../DealCard/DealCard';
import SkeletonDealCard from '../../molecules/SkeletonDealCard/SkeletonDealCard';
import './DealsOfTheDay.css';

export interface DealProduct {
  id: string;
  title: string;
  brand?: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  targetDate: string;
}

interface DealsOfTheDayProps {
  title?: string;
  targetDate: Date | string;
  products: DealProduct[];
  className?: string;
  isLoading?: boolean;
}

export const DealsOfTheDay: React.FC<DealsOfTheDayProps> = ({
  title = 'Deals Of The Day',
  products,
  className = '',
  isLoading = false,
}) => {
  const skeletons = Array.from({ length: 4 });

  return (
    <section className={`deals-of-the-day ${className}`}>
      {/* Header Container */}
      <div className="deals-of-the-day__header">
        <h2 className="deals-of-the-day__title">{title}</h2>

        <a href="#" className="deals-of-the-day__link">
          All Deals 
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>

      <div className="deals-of-the-day__grid">
        {isLoading 
          ? skeletons.map((_, index) => <SkeletonDealCard key={index} />)
          : products.map((product, idx) => {
              // Provide a fallback targetDate if it's missing (e.g., from generic mockData)
              const fallbackDate = new Date(Date.now() + (idx + 1) * 24 * 60 * 60 * 1000).toISOString();
              return (
                <DealCard
                  key={product.id}
                  {...product}
                  targetDate={product.targetDate || fallbackDate}
                />
              );
            })
        }
      </div>
    </section>
  );
};