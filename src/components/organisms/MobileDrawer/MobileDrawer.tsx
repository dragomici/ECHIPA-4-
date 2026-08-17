import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NestLogo from '../../../assets/NestIcon.svg';
import './MobileDrawer.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Cart', path: '/cart' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Checkout', path: '/checkout' },
];

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('drawer-open');
      drawerRef.current?.focus();
    } else {
      document.body.classList.remove('drawer-open');
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('drawer-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavClick = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      <div 
        className={`mobile-drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer__header">
          <img 
            src={NestLogo} 
            alt="Nest Logo" 
            className="mobile-drawer__logo" 
            onClick={() => handleNavClick('/')}
            style={{ cursor: 'pointer' }}
          />
          <button 
            className="mobile-drawer__close" 
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="mobile-drawer__content">
          <nav className="mobile-drawer__nav">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`mobile-drawer__link ${isActive ? 'mobile-drawer__link--active' : ''}`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
