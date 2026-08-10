import React from 'react';
import './PromoBanners.css';
import promo1 from '../../../assets/promo-banner-1.png';
import promo2 from '../../../assets/promo-banner-2.png';
import promo3 from '../../../assets/promo-banner-3.png';

interface PromoBannerProps {
  id: string;
  title: string;
  image: string;
  bgColor: string;
}

const promos: PromoBannerProps[] = [
  { id: '1', title: 'Everyday Fresh & Clean with Our Products', image: promo1, bgColor: '#f0e8d5' },
  { id: '2', title: 'Make your Breakfast Healthy and Easy', image: promo2, bgColor: '#f3e8e8' },
  { id: '3', title: 'The best Organic Products Online', image: promo3, bgColor: '#e7eaf3' },
];

export const PromoBanners: React.FC = () => {
  return (
    <div className="promo-banners">
      {promos.map((promo) => (
        <div key={promo.id} className="promo-banner" style={{ backgroundColor: promo.bgColor }}>
          <div className="promo-banner__content">
            <h3 className="promo-banner__title">{promo.title}</h3>
            <button className="promo-banner__btn">
              Shop Now 
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="promo-banner__icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          <div className="promo-banner__image-wrapper">
            <img src={promo.image} alt={promo.title} className="promo-banner__image" />
          </div>
        </div>
      ))}
    </div>
  );
};
