import React from 'react';
import { SocialGroup } from '../../molecules/SocialGroup/SocialGroup';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <div className="footer__column">
            <h4>Shop</h4>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/offers">Special Offers</a></li>
              <li><a href="/new">New Arrivals</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Support</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <SocialGroup />
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};