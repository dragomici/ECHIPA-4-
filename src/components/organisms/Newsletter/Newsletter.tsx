import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import StayHomeImage from '../../../assets/StayHome.png';
import EmailIcon from '../../../assets/emailus.svg';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-banner" aria-label="Newsletter Subscription">
      <div className="newsletter-banner__content">
        <h2 className="newsletter-banner__title">
          Stay home & get your daily <br />
          needs from our shop
        </h2>
        <p className="newsletter-banner__subtitle">
          Start Your Daily Shopping with <span className="newsletter-banner__highlight">Nest Mart</span>
        </p>
        
        <form className="newsletter-banner__form" onSubmit={handleSubmit}>
          <div className="newsletter-banner__input-wrapper">
            <img src={EmailIcon} alt="" className="newsletter-banner__icon" aria-hidden="true" />
            <Input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
          </div>
          <Button type="submit" variant="primary">Subscribe</Button>
        </form>
      </div>

      <div className="newsletter-banner__image-wrapper">
        <img 
          src={StayHomeImage} 
          alt="Delivery man with fresh groceries" 
          className="newsletter-banner__image" 
          loading="lazy" 
        />
      </div>
    </section>
  );
};

export default Newsletter;
