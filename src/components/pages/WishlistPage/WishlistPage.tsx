import React from 'react';
import Header from '../../organisms/Header/Header';
import WishlistTable from '../../organisms/WishlistTable/WishlistTable';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import { useWishlist } from '../../../hooks/useWishlist';
import { allProducts, mockProducts } from '../../../utils/mockData';
import { Footer } from '../../organisms/Footer/Footer';
import './WishlistPage.css';

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  // Populate wishlist items with full product data from allProducts if available
  const populatedItems = wishlistItems.map((item) => {
    const foundProduct = allProducts.find(
      (p) => p.title === item.title || p.id === item.id || p.title === item.id
    );

    return {
      id: item.id,
      title: item.title,
      price: item.price ?? foundProduct?.currentPrice ?? 29.99,
      imageUrl: item.imageUrl ?? foundProduct?.imageUrl ?? '',
      stock: item.stock ?? foundProduct?.stock ?? 10,
      category: item.category ?? foundProduct?.category ?? 'Groceries',
    };
  });

  return (
    <div className="wishlist-page">
      <Header />

      <main className="wishlist-page__main">
        <div className="wishlist-page__content">
          <div className="wishlist-page__table-section">
            <WishlistTable
              items={populatedItems}
              onRemove={removeFromWishlist}
              onClear={clearWishlist}
            />
          </div>

          <div className="wishlist-page__bottom">
            <section className="wishlist-page__recommended">
              <ProductGrid
                title="You May Also Like"
                products={mockProducts.slice(0, 5)}
              />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WishlistPage;
