import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout/MainLayout';
import { DashboardLayout } from './components/templates/DashboardLayout/DashboardLayout';

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;