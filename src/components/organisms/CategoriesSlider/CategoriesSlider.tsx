import React from 'react';
import { Category } from '../../molecules/Category/Category';
import './CategoriesSlider.css';

export const CategoriesSlider: React.FC = () => {
  const categories = [
    { id: '1', title: 'Peach' },
    { id: '2', title: 'Apple' },
    { id: '3', title: 'Snack' },
    { id: '4', title: 'Beverages' },
    { id: '5', title: 'Bakery' },
    { id: '6', title: 'Vegetables' }
  ];

  return (
    <section className="categories-slider">
      <div className="categories-slider__track">
        {categories.map((category) => (
          <div key={category.id} className="categories-slider__item">
            <Category title={category.title} />
          </div>
        ))}
      </div>
    </section>
  );
};