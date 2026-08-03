import React from 'react';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import HeaderAction from '../../molecules/HeaderAction/HeaderAction';
import NestLogo from '../../../assets/NestIcon.svg';
import CompareIcon from '../../../assets/CompareIcon.svg';
import WishlistIcon from '../../../assets/wishlistIcon.svg';
import CartIcon from '../../../assets/cartIcon.svg';
import AccountIcon from '../../../assets/acountIcon.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={NestLogo} alt="Nest Logo" />
        </div>
        
        <div className="header__search">
          <SearchBar />
        </div>

        <nav className="header__actions" aria-label="Primary Actions">
          <HeaderAction
            icon={<img src={CompareIcon} alt="Compare" />}
            text="Compare"
            badgeCount={3}
          />
          <HeaderAction
            icon={<img src={WishlistIcon} alt="Wishlist" />}
            text="Wishlist"
            badgeCount={6}
          />
          <HeaderAction
            icon={<img src={CartIcon} alt="Cart" />}
            text="Cart"
            badgeCount={2}
          />
          <HeaderAction
            icon={<img src={AccountIcon} alt="Account" />}
            text="Account"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
