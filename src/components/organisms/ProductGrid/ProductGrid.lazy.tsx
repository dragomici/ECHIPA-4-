import React, { lazy, Suspense } from 'react';

const ProductGridLazy = lazy(() => import('./ProductGrid'));

export const LazyProductGrid = (props: React.ComponentProps<typeof ProductGridLazy>) => (
  <Suspense fallback={<div className="product-grid-loader">Loading products...</div>}>
    <ProductGridLazy {...props} />
  </Suspense>
);

export default LazyProductGrid;