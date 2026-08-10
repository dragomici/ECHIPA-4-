import React from 'react';
import { SidebarCategory } from './SidebarCategory';
import { SidebarFilter } from './SidebarFilter';
import { SidebarNewProducts } from './SidebarNewProducts';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <SidebarCategory />
      <SidebarFilter />
      <SidebarNewProducts />
    </aside>
  );
};
