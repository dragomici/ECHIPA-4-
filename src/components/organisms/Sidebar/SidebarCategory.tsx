import React from 'react';
import DairiesIcon from '../../../assets/DairiesIcon.svg';
import ClothingIcon from '../../../assets/ClothingBeautyIcon.svg';
import PetFoodIcon from '../../../assets/PetFoodToyIcon.svg';
import BakingIcon from '../../../assets/bakingMaterialIcon.svg';
import FruitIcon from '../../../assets/VegetableIcon.svg';
import './SidebarCategory.css';

interface CategoryItem {
  id: string;
  name: string;
  count: number;
  icon: string;
}

const categories: CategoryItem[] = [
  { id: '1', name: 'Milks & Dairies', count: 3, icon: DairiesIcon },
  { id: '2', name: 'Clothing', count: 4, icon: ClothingIcon },
  { id: '3', name: 'Pet Foods', count: 5, icon: PetFoodIcon },
  { id: '4', name: 'Baking material', count: 6, icon: BakingIcon },
  { id: '5', name: 'Fresh Fruit', count: 10, icon: FruitIcon },
];

export const SidebarCategory: React.FC = () => {
  return (
    <div className="sidebar-widget sidebar-category">
      <h3 className="sidebar-widget__title">Category</h3>
      <div className="sidebar-category__line"></div>
      <ul className="sidebar-category__list">
        {categories.map((cat) => (
          <li key={cat.id} className="sidebar-category__item">
            <div className="sidebar-category__item-left">
              <img src={cat.icon} alt={cat.name} className="sidebar-category__icon" />
              <span className="sidebar-category__name">{cat.name}</span>
            </div>
            <span className="sidebar-category__count">{cat.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
