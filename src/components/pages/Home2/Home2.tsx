import React, { useState, useEffect } from 'react';
import Header from '../../organisms/Header/Header';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import { DealsOfTheDay } from '../../organisms/DealsOfTheDay/DealsOfTheDay';
import { TopSellingMiniList } from '../../organisms/TopSellingMiniList/TopSellingMiniList';
import Newsletter from '../../organisms/Newsletter/Newsletter';
import Swiper from '../../atoms/Swiper/Swiper';
import ProductCard from '../../organisms/ProductCard/ProductCard';
import { useTranslation } from '../../../hooks/useTranslation';
import { useSearch } from '../../../context/SearchContext';
import { mockProducts, mockDeals, topSellingProducts, trendingProducts, recentlyAddedProducts, topRatedProducts, allProducts } from '../../../utils/mockData';
import { Hero } from '../../organisms/Hero/Hero';
import { CategoriesSlider } from '../../organisms/CategoriesSlider/CategoriesSlider';
import { Footer } from '../../organisms/Footer/Footer';
import { Sidebar } from '../../organisms/Sidebar/Sidebar';
import { PromoBanners } from '../../organisms/PromoBanners/PromoBanners';
import './Home2.css';

const Home2: React.FC = () => {
  const { t } = useTranslation();
  const { searchQuery, selectedCategory } = useSearch();
  const [isLoading, setIsLoading] = useState(true);

  const isFiltering = searchQuery.trim() || selectedCategory !== 'All Categories';

  const filteredProducts = isFiltering
    ? allProducts.filter((p) => {
        const matchesQuery = searchQuery.trim()
          ? p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
          : true;
        const matchesCategory = selectedCategory !== 'All Categories'
          ? p.category === selectedCategory
          : true;
        return matchesQuery && matchesCategory;
      })
    : mockProducts;

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
          <Sidebar />

          <div className="home2__hero">
            <Hero />
            
            <section className="home2__popular-products">
              {isFiltering && (
                <p className="home2__search-info">
                  {filteredProducts.length > 0
                    ? `${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} found`
                    : `No results found`}
                  {searchQuery.trim() ? ` for "${searchQuery}"` : ''}
                  {selectedCategory !== 'All Categories' ? ` in ${selectedCategory}` : ''}
                </p>
              )}
              <ProductGrid 
                title={isFiltering ? 'Search Results' : t('sections.popularProducts')}
                categories={isFiltering ? undefined : ['All', 'Milks & Dairies', 'Coffees & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits']}
                products={filteredProducts} 
                isLoading={isLoading} 
              />
            </section>
            
            <section className="home2__deals">
              <DealsOfTheDay 
                title={t('sections.dealsOfTheDay')} 
                products={mockDeals} 
                isLoading={isLoading}
                targetDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString()}
              />
              <PromoBanners />
            </section>
          </div>
        </div>

        <CategoriesSlider />

        <section className="home2__mini-lists">
          <TopSellingMiniList title={t('sections.topSelling')} products={topSellingProducts} isLoading={isLoading} />
          <TopSellingMiniList title={t('sections.trendingProducts')} products={trendingProducts} isLoading={isLoading} />
          <TopSellingMiniList title={t('sections.recentlyAdded')} products={recentlyAddedProducts} isLoading={isLoading} />
          <TopSellingMiniList title={t('sections.topRated')} products={topRatedProducts} isLoading={isLoading} />
        </section>

        <section className="home2__daily-top-products" style={{ margin: '3rem 0', maxWidth: '100rem', padding: '0 0.9375rem', width: '100%', marginInline: 'auto' }}>
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
