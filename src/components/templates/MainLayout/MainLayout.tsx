import React, { useState, type ReactNode } from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <button 
          className="main-layout__mobile-menu-btn" 
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
        <h2>Main Layout Header</h2>
      </header>

      <div className="main-layout__body">
        <aside className={`main-layout__sidebar ${isSidebarOpen ? 'main-layout__sidebar--open' : ''}`}>
          <div className="sidebar-content">
            <h3>Filters & Sidebar</h3>
            <p>Category filters and quick navigation.</p>
          </div>
        </aside>

        <main className="main-layout__content">
          {children}
        </main>
      </div>

      <footer className="main-layout__footer">
        <p>Main Layout Footer © 2026</p>
      </footer>
    </div>
  );
};

export default MainLayout;