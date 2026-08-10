import React, { ReactNode } from 'react';
import './Grid.css';

interface GridProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export const Grid: React.FC<GridProps> = ({ title, subtitle, children }) => {
  return (
    <section className="grid">
      <div className="grid__header">
        {title && <h2 className="grid__title">{title}</h2>}
        {subtitle && <p className="grid__subtitle">{subtitle}</p>}
      </div>
      <div className="grid__content">
        {children}
      </div>
    </section>
  );
};