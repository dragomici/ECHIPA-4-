import React from 'react';
import { SocialGroup, type SocialItem } from '../../molecules/SocialGroup/SocialGroup';
import NestLogo from '../../../assets/NestIcon.svg';
import AppleStoreImg from '../../../assets/AppleStore.png';
import GooglePlayImg from '../../../assets/GooglePlay.png';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialItems: SocialItem[] = [
    {
      id: 'fb',
      href: '#',
      label: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      id: 'tw',
      href: '#',
      label: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )
    },
    {
      id: 'ig',
      href: '#',
      label: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 'pi',
      href: '#',
      label: 'Pinterest',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 2a10 10 0 0 0-3.66 19.3c.1-.92.2-2.33.46-3.32.24-1 .4-1.68.73-2.91a4 4 0 0 0-.17-3.8c-.31-.5-.7-1.12-.7-1.8A4.14 4.14 0 0 1 9.8 6a4.4 4.4 0 0 1 3.2-1.3c1.78 0 3.3.8 3.3 2.5 0 1.5-.7 3.3-1.6 4.9-.8 1.4-1.9 2.5-3 2.5-1.2 0-2.2-.9-2.2-2.2 0-1.5.8-3.1 1.6-4.5.6-1.1 1.4-2.3 2.3-2.3 1.3 0 2.2 1.3 2.2 3.1 0 2.8-1.7 5.7-4.1 5.7-1.1 0-2.1-.6-2.5-1.3l-.7 2.8c-.3 1.1-.9 2.4-1.4 3.3A10 10 0 1 0 12 2z"></path>
        </svg>
      )
    },
    {
      id: 'yt',
      href: '#',
      label: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col footer__col--info">
          <img src={NestLogo} alt="Nest Logo" className="footer__logo" />
          <p className="footer__tagline">Awesome grocery store website template</p>
          
          <ul className="footer__contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__contact-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__contact-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <strong>Call Us:</strong> (+91) - 540-025-124553
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__contact-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong>Email:</strong> sale@Nest.com
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__contact-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
              </div>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <ul className="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Account</h4>
          <ul className="footer__links">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">View Cart</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Help Ticket</a></li>
            <li><a href="#">Shipping Details</a></li>
            <li><a href="#">Compare products</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Corporate</h4>
          <ul className="footer__links">
            <li><a href="#">Become a Vendor</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Farm Business</a></li>
            <li><a href="#">Farm Careers</a></li>
            <li><a href="#">Our Suppliers</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Popular</h4>
          <ul className="footer__links">
            <li><a href="#">Milk &amp; Flavoured Milk</a></li>
            <li><a href="#">Butter and Margarine</a></li>
            <li><a href="#">Eggs Substitutes</a></li>
            <li><a href="#">Marmalades</a></li>
            <li><a href="#">Sour Cream and Dips</a></li>
            <li><a href="#">Tea &amp; Kombucha</a></li>
            <li><a href="#">Cheese</a></li>
          </ul>
        </div>

        <div className="footer__col footer__col--install">
          <h4 className="footer__col-title">Install App</h4>
          
          <div className="footer__app-buttons">
            <a href="#" className="footer__store-link" aria-label="Download on the App Store">
              <img src={AppleStoreImg} alt="App Store" />
            </a>
            <a href="#" className="footer__store-link" aria-label="Get it on Google Play">
              <img src={GooglePlayImg} alt="Google Play" />
            </a>
          </div>
          
          <p className="footer__payment-desc">Secured Payment Gateways</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <p>&copy; {currentYear}, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template</p>
          <p>All rights reserved</p>
        </div>

        <div className="footer__bottom-center">
          <div className="footer__phone-block">
            <div className="footer__phone-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="footer__phone-text">
              <span className="footer__phone-number">1900 - 6666</span>
              <span className="footer__phone-desc">Working 8:00 - 22:00</span>
            </div>
          </div>
          <div className="footer__phone-block">
            <div className="footer__phone-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="footer__phone-text">
              <span className="footer__phone-number">1900 - 8888</span>
              <span className="footer__phone-desc">24/7 Support Center</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom-right">
          <div className="footer__social-wrapper">
            <span className="footer__social-label">Follow Us</span>
            <SocialGroup items={socialItems} />
          </div>
          <p className="footer__discount-text">Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </footer>
  );
};