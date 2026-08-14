import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ResponsiveGrid from '../../atoms/ResponsiveGrid/ResponsiveGrid';
import SkeletonProductCard from '../../molecules/SkeletonProductCard/SkeletonProductCard';
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
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, categories, products, isLoading = false }) => {
  const skeletons = Array.from({ length: 10 });
  const [activeCategory, setActiveCategory] = React.useState<string>(categories ? categories[0] : '');

  return (
    <section className="product-grid-section">
      <div className="product-grid-section__header">
        {title && <h2 className="product-grid-section__title">{title}</h2>}
        {categories && (
          <div className="product-grid-section__tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`product-grid-section__tab ${activeCategory === cat ? 'product-grid-section__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>
      <ResponsiveGrid columns={{ mobile: 2, tablet: 3, desktop: 4, xl: 5 }} gap="1.25rem">
        {isLoading
          ? skeletons.map((_, index) => <SkeletonProductCard key={index} />)
          : products.map((product) => (
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
      </ResponsiveGrid>
    </section>
  );
};

export default ProductGrid;
