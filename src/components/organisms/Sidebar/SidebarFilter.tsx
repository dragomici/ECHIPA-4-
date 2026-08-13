import React from 'react';
import './SidebarFilter.css';
import cabbageImg from '../../../assets/cabbage.png';

export const SidebarFilter: React.FC = () => {
  return (
    <div className="sidebar-widget sidebar-filter">
      <h3 className="sidebar-widget__title">Fill by price</h3>
      
      <div className="sidebar-filter__price-slider">
        {/* Mock slider track */}
        <div className="price-slider__track">
          <div className="price-slider__progress" style={{ left: '20%', right: '20%' }}></div>
          <div className="price-slider__thumb" style={{ left: '20%' }}></div>
          <div className="price-slider__thumb" style={{ left: '80%' }}></div>
        </div>
        <div className="price-slider__values">
          <span>From: <strong className="text-brand">$500</strong></span>
          <span>To: <strong className="text-brand">$1,000</strong></span>
        </div>
      </div>

      <div className="sidebar-filter__group">
        <h4 className="sidebar-filter__group-title">Color</h4>
        <label className="sidebar-filter__checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Red (56)
        </label>
        <label className="sidebar-filter__checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Green (78)
        </label>
        <label className="sidebar-filter__checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Blue (54)
        </label>
      </div>

      <div className="sidebar-filter__group">
        <h4 className="sidebar-filter__group-title">Item Condition</h4>
        <label className="sidebar-filter__checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          New (1506)
        </label>
        <label className="sidebar-filter__checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Refurbished (27)
        </label>
        <label className="sidebar-filter__checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Used (45)
        </label>
      </div>

      <div className="sidebar-filter__actions">
        <button className="sidebar-filter__btn">
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
