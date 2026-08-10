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
  badgeText?: string;
  badgeVariant?: 'hot' | 'sale' | 'new' | 'discount';
}

interface ProductGridProps {
  title?: string;
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products, isLoading = false }) => {
  const skeletons = Array.from({ length: 10 });

  return (
    <section className="product-grid-section">
      {title && <h2 className="product-grid-section__title">{title}</h2>}
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
                badgeText={product.badgeText}
                badgeVariant={product.badgeVariant}
              />
            ))}
      </ResponsiveGrid>
    </section>
  );
};

export default ProductGrid;
