import React, { ReactNode, useState } from "react";
import "./DashboardLayout.css";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout__mobile-header">
        <button
          className="dashboard-layout__hamburger"
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="dashboard-layout__logo-mobile">E-Commerce</div>
      </div>

      {isSidebarOpen && (
        <div
          className="dashboard-layout__overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`dashboard-layout__sidebar ${isSidebarOpen ? "dashboard-layout__sidebar--open" : ""}`}
      >
        <div className="dashboard-layout__sidebar-content">
          <h2>Meniu Sidebar</h2>
          <p>Link-urile vin aici...</p>
        </div>
      </aside>

      <main className="dashboard-layout__main">
        <div className="dashboard-layout__main-inner">{children}</div>
      </main>
    </div>
  );
};
