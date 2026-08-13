import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { WishlistProvider } from './hooks/useWishlist';
import { ToastProvider } from './context/ToastContext';
import { SearchProvider } from './context/SearchContext';
import { ToastContainer } from './components/molecules/ToastContainer/ToastContainer';
import { DashboardLayout } from './components/templates/DashboardLayout/DashboardLayout';
import Spinner from './components/atoms/Spinner/Spinner';
import { CartProvider } from './hooks/useCart';
import PageTransition from './components/atoms/PageTransition/PageTransition';
import { ScrollToTopFAB } from './components/molecules/ScrollToTopFAB/ScrollToTopFAB';

const Home2 = React.lazy(() => import('./components/pages/Home2/Home2'));
const CartPage = React.lazy(() => import('./components/pages/CartPage/CartPage'));

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard Overview</h1>
      <p>Bine ai revenit, Admin! Aici este zona ta securizată.</p>
      <a href="/" style={{ color: "#3b82f6", textDecoration: "underline" }}>
        Înapoi la pagina principală
      </a>
    </DashboardLayout>
  );
};

// Componentă internă pentru declanșarea animației la schimbarea rutei
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home2 />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <ToastProvider>
      <SearchProvider>
        <WishlistProvider>
          <CartProvider>
            <BrowserRouter>
              <React.Suspense fallback={<Spinner />}>
                <AnimatedRoutes />
              </React.Suspense>
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
        <ToastContainer />
        <ScrollToTopFAB />
      </SearchProvider>
    </ToastProvider>
  );
}

export default App;
