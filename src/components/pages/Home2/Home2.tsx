import React, { useState, useEffect } from 'react';
import Header from '../../organisms/Header/Header';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import { DealsOfTheDay } from '../../organisms/DealsOfTheDay/DealsOfTheDay';
import { TopSellingMiniList } from '../../organisms/TopSellingMiniList/TopSellingMiniList';
import Newsletter from '../../organisms/Newsletter/Newsletter';
import { useTranslation } from '../../../hooks/useTranslation';
import { mockProducts, mockDeals } from '../../../utils/mockData';
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
            <div className="home2__hero-placeholder placeholder-box">
              <h2>{t('hero.title')}</h2>
              <p>{t('hero.subtitle')}</p>
              <span>Hero Banner (WIP)</span>
            </div>
            
            <section className="home2__popular-products">
              <ProductGrid title={t('sections.popularProducts')} products={mockProducts} isLoading={isLoading} />
            </section>
            
            <section className="home2__deals">
              <DealsOfTheDay 
                title={t('sections.dealsOfTheDay')} 
                products={mockDeals} 
              />
            </section>
          </div>
        </div>

        <section className="home2__categories placeholder-box">
          <h2>{t('sections.shopByCategories')}</h2>
          <span>Categories Slider (WIP)</span>
        </section>

        <section className="home2__mini-lists">
          <TopSellingMiniList title={t('sections.topSelling')} products={mockProducts} />
          <TopSellingMiniList title={t('sections.trendingProducts')} products={mockProducts} />
          <TopSellingMiniList title={t('sections.recentlyAdded')} products={mockProducts} />
          <TopSellingMiniList title={t('sections.topRated')} products={mockProducts} />
        </section>

        <Newsletter />
      </main>

      <footer className="home2__footer-placeholder placeholder-box">
        <div className="home2__footer-columns">
          <span>{t('footer.company')}</span>
          <span>{t('footer.account')}</span>
          <span>{t('footer.corporate')}</span>
          <span>{t('footer.popular')}</span>
          <span>{t('footer.installApp')}</span>
        </div>
        <span>Footer (WIP)</span>
      </footer>
    </div>
  );
};

export default Home2;
