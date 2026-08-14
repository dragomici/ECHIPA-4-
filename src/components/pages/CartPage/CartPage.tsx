import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../organisms/Header/Header';
import CartTable from '../../organisms/CartTable/CartTable';
import OrderSummary from '../../molecules/OrderSummary/OrderSummary';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import { useCart } from '../../../hooks/useCart';
import { mockProducts } from '../../../utils/mockData';
import './CartPage.css';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 5.00 : 0;

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
            
            {items.length > 0 && (
              <div className="cart-page__summary-section">
                <OrderSummary 
                  subtotal={subtotal} 
                  shipping={shipping} 
                  onClearCart={clearCart} 
                  onCheckout={() => navigate('/checkout')} 
                />
              </div>
            )}
          </div>
          
          <div className="cart-page__bottom">
            <section className="cart-page__recommended">
              <ProductGrid 
                title="Recommended" 
                products={mockProducts.slice(0, 5)} 
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
