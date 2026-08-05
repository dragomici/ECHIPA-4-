import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../../atoms/Button/Button';
import './DailyBestSells.css';

export interface BestSellProduct {
  id: string;
  title: string;
  category: string;
  currentPrice: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  ratingCount?: number;
}

interface BannerConfig {
  title: string;
  subtitle?: string;
  buttonText: string;
  bgImageUrl?: string;
  onBannerClick?: () => void;
}

interface DailyBestSellsProps {
  sectionTitle?: string;
  banner: BannerConfig;
  products: BestSellProduct[];
  className?: string;
}

export const DailyBestSells: React.FC<DailyBestSellsProps> = ({
  sectionTitle = 'Daily Best Sells',
  banner,
  products,
  className = '',
}) => {
  return (
    <section className={`daily-best-sells ${className}`}>
      <h2 className="daily-best-sells__title">{sectionTitle}</h2>

      <div className="daily-best-sells__container">
        <aside 
          className="daily-best-sells__banner"
          style={{ backgroundImage: banner.bgImageUrl ? `url(${banner.bgImageUrl})` : undefined }}
        >
          <div className="daily-best-sells__banner-content">
            <h3 className="daily-best-sells__banner-title">{banner.title}</h3>
            {banner.subtitle && (
              <p className="daily-best-sells__banner-subtitle">{banner.subtitle}</p>
            )}
            <Button variant="primary" onClick={banner.onBannerClick}>
              {banner.buttonText}
            </Button>
          </div>
        </aside>
        <div className="daily-best-sells__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              rating={product.rating ?? 0}
              ratingCount={product.ratingCount ?? 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};