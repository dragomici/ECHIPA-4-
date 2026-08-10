import React, { ReactNode } from "react";
import "./MainLayout.css";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <h2>Navbar Placeholder</h2>
      </header>

      <main className="main-layout__content">{children}</main>

      <footer className="main-layout__footer">
        <p>Footer Placeholder © 2026</p>
      </footer>
    </div>
  );
};
