import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import HeaderAction from '../../molecules/HeaderAction/HeaderAction';
import { useWishlist } from '../../../hooks/useWishlist';
import { useCart } from '../../../hooks/useCart';
import NestLogo from '../../../assets/NestIcon.svg';
import CompareIcon from '../../../assets/CompareIcon.svg';
import WishlistIcon from '../../../assets/wishlistIcon.svg';
import CartIcon from '../../../assets/cartIcon.svg';
import AccountIcon from '../../../assets/acountIcon.svg';
import './Header.css';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  return (
    <>
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
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
          
          <button 
            className="header__mobile-menu-btn" 
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

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
              badgeCount={wishlistCount}
            />
            <HeaderAction
              icon={<img src={CartIcon} alt="Cart" />}
              text="Cart"
              badgeCount={cartCount}
              onClick={() => navigate('/cart')}
            />
            <HeaderAction
              icon={<img src={AccountIcon} alt="Account" />}
              text="Account"
            />
          </nav>
        </div>
      </div>
      
      <div className="header__bottom">
        <div className="header__container">
          <button className="header__browse-categories">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="browse-icon">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Browse All Categories
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <nav className="header__nav">
            <a href="#" className="header__nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flame-icon">
                <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
              </svg>
              Deals
            </a>
            <a href="#" className="header__nav-item">Home <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a href="#" className="header__nav-item">About</a>
            <a href="#" className="header__nav-item">Shop <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a href="#" className="header__nav-item">Vendors <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a href="#" className="header__nav-item">Mega menu <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a href="#" className="header__nav-item">Blog <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a href="#" className="header__nav-item">Contact</a>
          </nav>

          <div className="header__support">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="support-icon">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            <div className="header__support-text">
              <span className="header__support-phone">1900 - 888</span>
              <span className="header__support-sub">24/7 Support Center</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
