import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
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
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTwoDigits = (num: number) => String(num).padStart(2, '0');

  return (
    <section className={`deals-of-the-day ${className}`}>
      <div className="deals-of-the-day__header">
        <h2 className="deals-of-the-day__title">{title}</h2>
        <div className="deals-countdown">
          <span className="deals-countdown__label">Expires in:</span>
          <div className="deals-countdown__timer">
            <div className="deals-countdown__unit">
              <span className="deals-countdown__value">{formatTwoDigits(timeLeft.hours)}</span>
              <span className="deals-countdown__text">h</span>
            </div>
            <span className="deals-countdown__separator">:</span>
            <div className="deals-countdown__unit">
              <span className="deals-countdown__value">{formatTwoDigits(timeLeft.minutes)}</span>
              <span className="deals-countdown__text">m</span>
            </div>
            <span className="deals-countdown__separator">:</span>
            <div className="deals-countdown__unit">
              <span className="deals-countdown__value">{formatTwoDigits(timeLeft.seconds)}</span>
              <span className="deals-countdown__text">s</span>
            </div>
          </div>
        </div>
      </div>
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