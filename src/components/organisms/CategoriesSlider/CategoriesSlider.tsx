import React, { useRef } from 'react';
import DairiesIcon from '../../../assets/DairiesIcon.svg';
import WineAlcoholIcon from '../../../assets/WineAlcoholicon.svg';
import ClothingBeautyIcon from '../../../assets/ClothingBeautyIcon.svg';
import PetFoodToyIcon from '../../../assets/PetFoodToyIcon.svg';
import FastFoodIcon from '../../../assets/FastFoodIcon.svg';
import BakingMaterialIcon from '../../../assets/bakingMaterialIcon.svg';
import VegetableIcon from '../../../assets/VegetableIcon.svg';
import SeafoodIcon from '../../../assets/Seafoodicon.png';
import './CategoriesSlider.css';

interface CategoryItem {
  id: string;
  title: string;
  itemsCount: number;
  icon: string;
  bgColor: string;
}

const categories: CategoryItem[] = [
  { id: '1', title: 'Milks and Dairies', itemsCount: 14, icon: DairiesIcon, bgColor: '#F4F6FA' },
  { id: '2', title: 'Wines & Alcohol', itemsCount: 11, icon: WineAlcoholIcon, bgColor: '#F4F6FA' },
  { id: '3', title: 'Clothing & Beauty', itemsCount: 89, icon: ClothingBeautyIcon, bgColor: '#F4F6FA' },
  { id: '4', title: 'Pet Foods & Toy', itemsCount: 78, icon: PetFoodToyIcon, bgColor: '#F4F6FA' },
  { id: '5', title: 'Packaged Fast Food', itemsCount: 56, icon: FastFoodIcon, bgColor: '#F4F6FA' },
  { id: '6', title: 'Baking material', itemsCount: 23, icon: BakingMaterialIcon, bgColor: '#F4F6FA' },
  { id: '7', title: 'Vegetables & tubers', itemsCount: 45, icon: VegetableIcon, bgColor: '#F4F6FA' },
  { id: '8', title: 'Fresh Seafood', itemsCount: 12, icon: SeafoodIcon, bgColor: '#F4F6FA' },
];

export const CategoriesSlider: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="categories-slider">
      <div className="categories-slider__header">
        <h2 className="categories-slider__title">Shop by Categories</h2>
        <div className="categories-slider__nav">
          <button className="categories-slider__nav-btn" onClick={scrollLeft} aria-label="Scroll left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="categories-slider__nav-btn" onClick={scrollRight} aria-label="Scroll right">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="categories-slider__track-container">
        <div className="categories-slider__track" ref={trackRef}>
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="categories-slider__item"
              style={{ backgroundColor: category.bgColor }}
            >
              <div className="categories-slider__item-icon">
                <img src={category.icon} alt={category.title} />
              </div>
              <h3 className="categories-slider__item-title">{category.title}</h3>
              <span className="categories-slider__item-count">{category.itemsCount} items</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};