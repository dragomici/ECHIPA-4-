import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ResponsiveGrid from '../../atoms/ResponsiveGrid/ResponsiveGrid';
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
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <section className="product-grid-section">
      {title && <h2 className="product-grid-section__title">{title}</h2>}
      <ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 4, xl: 5 }} gap="1.25rem">
        {products.map((product) => (
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
