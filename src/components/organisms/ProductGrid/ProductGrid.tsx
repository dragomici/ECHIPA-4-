import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SkeletonProductCard from '../../molecules/SkeletonProductCard/SkeletonProductCard';
import { Pagination } from '../../molecules/Pagination/Pagination';
import './ProductGrid.css';

export interface Product {
  id: string | number;
  imageUrl: string;
  category: string;
  title: string;
  rating: number;
  ratingCount: number;
  currentPrice: number;
  oldPrice?: number;
  stock?: number;
  badgeText?: string;
  badgeVariant?: 'hot' | 'sale' | 'new' | 'discount';
}

interface ProductGridProps {
  title?: string;
  categories?: string[];
  products: Product[];
  isLoading?: boolean;
  enablePagination?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  categories, 
  products, 
  isLoading = false,
  enablePagination = true
}) => {
  const skeletons = Array.from({ length: 10 });
  const [activeCategory, setActiveCategory] = useState<string>(categories ? categories[0] : 'All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = (activeCategory === 'All' || !categories) 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = enablePagination 
    ? filteredProducts.slice(startIndex, startIndex + itemsPerPage) 
    : filteredProducts;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="product-grid-section">
      {(title || categories) && (
        <div className="product-grid-section__header">
          {title && <h2 className="product-grid-section__title">{title}</h2>}
          {categories && (
            <div className="product-grid-section__tabs">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`product-grid-section__tab ${activeCategory === cat ? 'product-grid-section__tab--active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className="product-grid">
        {isLoading
          ? skeletons.map((_, index) => <SkeletonProductCard key={index} />)
          : currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                category={product.category}
                title={product.title}
                rating={product.rating}
                ratingCount={product.ratingCount}
                currentPrice={product.currentPrice}
                oldPrice={product.oldPrice}
                stock={product.stock}
                badgeText={product.badgeText}
                badgeVariant={product.badgeVariant}
              />
            ))}
      </div>

      {enablePagination && totalPages > 1 && !isLoading && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </section>
  );
};

export default ProductGrid;
