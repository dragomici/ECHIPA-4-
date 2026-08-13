import React from 'react';
import './SidebarNewProducts.css';
import prod1 from '../../../assets/new-product-1.jpg';
import prod2 from '../../../assets/new-product-2.jpg';
import prod3 from '../../../assets/new-product-3.jpg';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const newProducts: Product[] = [
  { id: '1', name: 'Chen Cardigan', price: 99.50, image: prod1 },
  { id: '2', name: 'Chen Sweater', price: 89.50, image: prod2 },
  { id: '3', name: 'Colorful Jacket', price: 25.00, image: prod3 },
];

export const SidebarNewProducts: React.FC = () => {
  return (
    <div className="sidebar-widget sidebar-new-products">
      <h3 className="sidebar-widget__title">New products</h3>
      
      <div className="sidebar-new-products__list">
        {newProducts.map((prod) => (
          <div key={prod.id} className="sidebar-new-product">
            <div className="sidebar-new-product__img-wrapper">
              <img src={prod.image} alt={prod.name} className="sidebar-new-product__img" />
            </div>
            <div className="sidebar-new-product__info">
              <h4 className="sidebar-new-product__name">{prod.name}</h4>
              <span className="sidebar-new-product__price">${prod.price.toFixed(2)}</span>
              <div className="sidebar-new-product__rating">
                <svg viewBox="0 0 24 24" fill="#FDC040" className="star-icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
