import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useCountdown } from '../../../hooks/useCountdown';
import './DealsOfTheDay.css';

export interface DealProduct {
  id: string;
  title: string;
  category: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  ratingCount?: number;
}

interface DealsOfTheDayProps {
  title?: string;
  targetDate: Date | string;
  products: DealProduct[];
  className?: string;
}

export const DealsOfTheDay: React.FC<DealsOfTheDayProps> = ({
  title = 'Deals of the Day',
  targetDate,
  products,
  className = '',
}) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  const formatTwoDigits = (num: number) => String(num).padStart(2, '0');

  return (
    <section className={`deals-of-the-day ${className}`}>
      {/* Header Container */}
      <div className="deals-of-the-day__header">
        <h2 className="deals-of-the-day__title">{title}</h2>

        {/* Countdown Timer */}
        <div className="deals-countdown">
          <span className="deals-countdown__label">
            {isExpired ? 'Offer ended' : 'Expires in:'}
          </span>
          {!isExpired && (
            <div className="deals-countdown__timer">
              {days > 0 && (
                <>
                  <div className="deals-countdown__unit">
                    <span className="deals-countdown__value">{formatTwoDigits(days)}</span>
                    <span className="deals-countdown__text">d</span>
                  </div>
                  <span className="deals-countdown__separator">:</span>
                </>
              )}
              <div className="deals-countdown__unit">
                <span className="deals-countdown__value">{formatTwoDigits(hours)}</span>
                <span className="deals-countdown__text">h</span>
              </div>
              <span className="deals-countdown__separator">:</span>
              <div className="deals-countdown__unit">
                <span className="deals-countdown__value">{formatTwoDigits(minutes)}</span>
                <span className="deals-countdown__text">m</span>
              </div>
              <span className="deals-countdown__separator">:</span>
              <div className="deals-countdown__unit">
                <span className="deals-countdown__value">{formatTwoDigits(seconds)}</span>
                <span className="deals-countdown__text">s</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grid-ul cu ProductCards */}
      <div className="deals-of-the-day__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            rating={product.rating ?? 0}
            ratingCount={product.ratingCount ?? 0}
          />
        ))}
      </div>
    </section>
  );
};