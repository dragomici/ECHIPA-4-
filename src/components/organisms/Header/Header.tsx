import React from 'react';
import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import HeaderAction from '../../molecules/HeaderAction/HeaderAction';
import NestLogo from '../../../assets/NestIcon.svg';
import CompareIcon from '../../../assets/CompareIcon.svg';
import WishlistIcon from '../../../assets/wishlistIcon.svg';
import CartIcon from '../../../assets/cartIcon.svg';
import AccountIcon from '../../../assets/acountIcon.svg';
import './Header.css';

const Header: React.FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`header ${scrollDirection === 'down' ? 'header--hidden' : ''}`}>
      <div className="header__top-bar">
        <div className="header__top-bar-container">
          <div className="header__top-bar-left">
            <span>About Us</span>
            <span className="header__top-bar-divider">|</span>
            <span>My Account</span>
            <span className="header__top-bar-divider">|</span>
            <span>Wishlist</span>
            <span className="header__top-bar-divider">|</span>
            <span>Order Tracking</span>
          </div>
          
          <div className="header__top-bar-center">
            <span>100% Secure delivery without contacting the courier</span>
          </div>
          
          <div className="header__top-bar-right">
            <span>Need help? Call Us: <span className="header__top-bar-highlight">+ 1800 900</span></span>
            <span className="header__top-bar-divider">|</span>
            <span className="header__top-bar-dropdown">English <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
            <span className="header__top-bar-divider">|</span>
            <span className="header__top-bar-dropdown">USD <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
        </div>
      </div>
      
      <div className="header__main">
        <div className="header__container">
        <div className="header__logo">
          <img src={NestLogo} alt="Nest Logo" />
        </div>
        
        <div className="header__search-area">
          <SearchBar />
          
          <button className="header__location-btn" aria-label="Your Location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="location-text">Your Location</span>
            <svg className="location-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <nav className="header__actions" aria-label="Primary Actions">
          <HeaderAction
            icon={<img src={CompareIcon} alt="Compare" />}
            text="Compare"
          />
          <HeaderAction
            icon={<img src={WishlistIcon} alt="Wishlist" />}
            text="Wishlist"
          />
          <HeaderAction
            icon={<img src={CartIcon} alt="Cart" />}
            text="Cart"
          />
          <HeaderAction
            icon={<img src={AccountIcon} alt="Account" />}
            text="Account"
          />
        </nav>
      </div>
    </div>
  </header>
  );
};

export default Header;
