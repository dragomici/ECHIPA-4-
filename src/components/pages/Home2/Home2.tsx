import React, { useState, useEffect } from 'react';
import Header from '../../organisms/Header/Header';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import { DealsOfTheDay } from '../../organisms/DealsOfTheDay/DealsOfTheDay';
import { TopSellingMiniList } from '../../organisms/TopSellingMiniList/TopSellingMiniList';
import Newsletter from '../../organisms/Newsletter/Newsletter';
import Swiper from '../../atoms/Swiper/Swiper';
import ProductCard from '../../organisms/ProductCard/ProductCard';
import { useTranslation } from '../../../hooks/useTranslation';
import { mockProducts, mockDeals } from '../../../utils/mockData';
import { Hero } from '../../organisms/Hero/Hero';
import { CategoriesSlider } from '../../organisms/CategoriesSlider/CategoriesSlider';
import { Footer } from '../../organisms/Footer/Footer';
import './Home2.css';

const Home2: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home2">
      <Header />
      
      <main className="home2__main">
        <div className="home2__top">
          <aside className="home2__sidebar-placeholder">
            <div className="placeholder-box">Categories Sidebar (WIP)</div>
          </aside>
          
          <div className="home2__hero">
            <Hero />
            
            <section className="home2__deals">
              <DealsOfTheDay 
                title={t('sections.dealsOfTheDay')} 
                products={mockDeals} 
                isLoading={isLoading}
                targetDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString()}
              />
            </section>
            
            <section className="home2__popular-products">
              <ProductGrid title={t('sections.popularProducts')} products={mockProducts} isLoading={isLoading} />
            </section>
            
            <section className="home2__deals">
              <DealsOfTheDay 
                title={t('sections.dealsOfTheDay')} 
                products={mockDeals} 
                isLoading={isLoading}
                targetDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString()}
              />
            </section>
          </div>
        </div>

        <CategoriesSlider />

        <section className="home2__mini-lists">
          <TopSellingMiniList title={t('sections.topSelling')} products={mockProducts} isLoading={isLoading} />
          <TopSellingMiniList title={t('sections.trendingProducts')} products={mockProducts} isLoading={isLoading} />
          <TopSellingMiniList title={t('sections.recentlyAdded')} products={mockProducts} isLoading={isLoading} />
          <TopSellingMiniList title={t('sections.topRated')} products={mockProducts} isLoading={isLoading} />
        </section>

        <section className="home2__daily-best-sells" style={{ margin: '3rem 0', maxWidth: '100rem', padding: '0 0.9375rem', width: '100%', marginInline: 'auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#253D4E', marginBottom: '1.5rem' }}>Daily Best Sells</h2>
          <Swiper>
            {mockProducts.map((product) => (
              <div key={`daily-${product.id}`} style={{ width: '15.625rem' }}>
                <ProductCard
                  imageUrl={product.imageUrl}
                  category={product.category}
                  title={product.title}
                  rating={product.rating}
                  ratingCount={product.ratingCount}
                  currentPrice={product.currentPrice}
                  oldPrice={product.oldPrice}
                  badgeText={product.badgeText}
                  badgeVariant={product.badgeVariant}
                />
              </div>
            ))}
          </Swiper>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Home2;
