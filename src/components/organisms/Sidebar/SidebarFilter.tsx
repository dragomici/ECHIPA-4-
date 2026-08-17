import React, { useState } from 'react';
import { useSearch } from '../../../context/SearchContext';
import './SidebarFilter.css';
import cabbageImg from '../../../assets/cabbage.png';

const COLORS = [
  { name: 'Red', count: 56 },
  { name: 'Green', count: 78 },
  { name: 'Blue', count: 54 },
];

const CONDITIONS = [
  { name: 'New', count: 1506 },
  { name: 'Refurbished', count: 27 },
  { name: 'Used', count: 45 },
];

export const SidebarFilter: React.FC = () => {
  const { appliedFilters, applySidebarFilters, resetAllFilters } = useSearch();

  const [localMaxPrice, setLocalMaxPrice] = useState(appliedFilters.maxPrice);
  const [localColors, setLocalColors] = useState<string[]>(appliedFilters.colors);
  const [localConditions, setLocalConditions] = useState<string[]>(appliedFilters.conditions);

  const toggleLocalColor = (color: string) => {
    setLocalColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleLocalCondition = (condition: string) => {
    setLocalConditions((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition]
    );
  };

  const handleFilterClick = () => {
    applySidebarFilters({
      maxPrice: localMaxPrice,
      colors: localColors,
      conditions: localConditions,
    });

    const popularSection = document.querySelector('.home2__popular-products');
    if (popularSection) {
      popularSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetClick = () => {
    setLocalMaxPrice(100);
    setLocalColors([]);
    setLocalConditions([]);
    resetAllFilters();
  };

  const isFiltered =
    localMaxPrice < 100 ||
    localColors.length > 0 ||
    localConditions.length > 0 ||
    appliedFilters.maxPrice < 100 ||
    appliedFilters.colors.length > 0 ||
    appliedFilters.conditions.length > 0;

  return (
    <div className="sidebar-widget sidebar-filter">
      <div className="sidebar-filter__header">
        <h3 className="sidebar-widget__title">Fill by price</h3>
        {isFiltered && (
          <button className="sidebar-filter__reset-btn" onClick={handleResetClick}>
            Reset All
          </button>
        )}
      </div>

      <div className="sidebar-filter__price-slider">
        <div className="price-slider__inputs">
          <input
            type="range"
            min="0"
            max="100"
            value={localMaxPrice}
            onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
            className="price-slider__range-input"
            aria-label="Max price"
          />
        </div>
        <div className="price-slider__values">
          <span>From: <strong className="text-brand">$0</strong></span>
          <span>To: <strong className="text-brand">${localMaxPrice}</strong></span>
        </div>
      </div>

      <div className="sidebar-filter__group">
        <h4 className="sidebar-filter__group-title">Color</h4>
        {COLORS.map((c) => (
          <label key={c.name} className="sidebar-filter__checkbox-label">
            <input
              type="checkbox"
              checked={localColors.includes(c.name)}
              onChange={() => toggleLocalColor(c.name)}
            />
            <span className="checkmark"></span>
            {c.name} ({c.count})
          </label>
        ))}
      </div>

      <div className="sidebar-filter__group">
        <h4 className="sidebar-filter__group-title">Item Condition</h4>
        {CONDITIONS.map((cond) => (
          <label key={cond.name} className="sidebar-filter__checkbox-label">
            <input
              type="checkbox"
              checked={localConditions.includes(cond.name)}
              onChange={() => toggleLocalCondition(cond.name)}
            />
            <span className="checkmark"></span>
            {cond.name} ({cond.count})
          </label>
        ))}
      </div>

      <div className="sidebar-filter__actions">
        <button className="sidebar-filter__btn" onClick={handleFilterClick}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-icon">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filter
        </button>
        <img src={cabbageImg} alt="Fresh cabbage" className="sidebar-filter__decor-img" />
      </div>
    </div>
  );
};
