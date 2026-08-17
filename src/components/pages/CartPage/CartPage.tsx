import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';
import CartTable from '../../organisms/CartTable/CartTable';
import { OrderSummary } from '../../molecules/OrderSummary/OrderSummary';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../../hooks/useCart';
import { mockProducts } from '../../../utils/mockData';
import './CartPage.css';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <main className="cart-page__main">
          <div className="cart-page__empty">
            <h2 className="cart-page__empty-title">Your cart is currently empty.</h2>
            <Button onClick={() => navigate('/')} className="cart-page__continue-btn">
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      
      <main className="cart-page__main">
        <div className="cart-page__content">
          <div className="cart-page__top-section">
            <div className="cart-page__table-section">
              <CartTable 
                items={items} 
                onUpdateQuantity={updateQuantity} 
                onRemove={removeFromCart} 
              />
            </div>
            
            <div className="cart-page__summary-section">
              <OrderSummary />
            </div>
          </div>
          
          <div className="cart-page__bottom">
            <section className="cart-page__recommended">
              <ProductGrid 
                title="Recommended Products" 
                products={mockProducts.slice(0, 5)} 
                enablePagination={false}
              />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;