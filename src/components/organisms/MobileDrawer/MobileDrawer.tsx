import React, { useEffect, useRef } from 'react';
import NestLogo from '../../../assets/NestIcon.svg';
import './MobileDrawer.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
          <img src={NestLogo} alt="Nest Logo" className="mobile-drawer__logo" />
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
            <a href="#" className="mobile-drawer__link">Home</a>
            <a href="#" className="mobile-drawer__link">About</a>
            <a href="#" className="mobile-drawer__link">Shop</a>
            <a href="#" className="mobile-drawer__link">Vendors</a>
            <a href="#" className="mobile-drawer__link">Mega menu</a>
            <a href="#" className="mobile-drawer__link">Blog</a>
            <a href="#" className="mobile-drawer__link">Pages</a>
            <a href="#" className="mobile-drawer__link">Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
