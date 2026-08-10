import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/templates/DashboardLayout/DashboardLayout';
import Spinner from './components/atoms/Spinner/Spinner';
import { CartProvider } from './hooks/useCart';

const Home2 = React.lazy(() => import('./components/pages/Home2/Home2'));
const CartPage = React.lazy(() => import('./components/pages/CartPage/CartPage'));

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard Overview</h1>
      <p>Bine ai revenit, Admin! Aici este zona ta securizată.</p>
      <a href="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Înapoi la pagina principală</a>
    </DashboardLayout>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <React.Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/cart" element={<CartPage />} />
            
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;