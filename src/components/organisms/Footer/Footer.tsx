import React, { useState } from 'react';
import { SocialGroup } from '../../molecules/SocialGroup/SocialGroup';
import './Footer.css';

export const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <div className={`footer__column ${openSection === 'shop' ? 'footer__column--open' : ''}`}>
            <h4 onClick={() => toggleSection('shop')}>
              Shop
              <span className="footer__accordion-icon">{openSection === 'shop' ? '-' : '+'}</span>
            </h4>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/offers">Special Offers</a></li>
              <li><a href="/new">New Arrivals</a></li>
            </ul>
          </div>
          
          <div className={`footer__column ${openSection === 'support' ? 'footer__column--open' : ''}`}>
            <h4 onClick={() => toggleSection('support')}>
              Support
              <span className="footer__accordion-icon">{openSection === 'support' ? '-' : '+'}</span>
            </h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer__social">
          <SocialGroup items={[]} />
        </div>
      </div>
      
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};