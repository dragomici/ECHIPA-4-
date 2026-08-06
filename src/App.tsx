import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout/MainLayout';
import { DashboardLayout } from './components/templates/DashboardLayout/DashboardLayout';
import Spinner from './components/atoms/Spinner/Spinner';
import PageTransition from './components/atoms/PageTransition/PageTransition';

const LandingPage = () => {
  return (
    <MainLayout>
      <h1>Bine ai venit pe E-Commerce Landing Page!</h1>
      <p>Acesta este conținutul public. Accesează <a href="/dashboard">Dashboard-ul aici</a>.</p>
    </MainLayout>
  );
};

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard Overview</h1>
      <p>Bine ai revenit, Admin! Aici este zona ta securizată.</p>
      <a href="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Înapoi la pagina principală</a>
    </DashboardLayout>
  );
};

// Componentă internă pentru declanșarea animației la schimbarea rutei
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner />}>
        <AnimatedRoutes />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;