import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import DeliveryGuy from '../../../assets/delivery-guy.png';
import EmailIcon from '../../../assets/emailus.svg';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    
    if (val.length === 0) {
      setIsValid(true);
    } else {
      setIsValid(validateEmail(val));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && validateEmail(email)) {
      console.log('Subscribed with:', email);
      setEmail('');
      setIsValid(true);
    } else {
      setIsValid(false);
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
        
        <div className="newsletter-banner__form-container">
          <form className="newsletter-banner__form" onSubmit={handleSubmit}>
            <div className="newsletter-banner__input-wrapper">
              <img src={EmailIcon} alt="" className="newsletter-banner__icon" aria-hidden="true" />
              <Input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={handleChange}
                required
                aria-label="Email address"
                hasError={!isValid}
              />
            </div>
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
          {!isValid && <span className="newsletter-banner__error-text">Invalid email address</span>}
        </div>
      </div>

      <div className="newsletter-banner__image-wrapper">
        <img 
          src={DeliveryGuy} 
          alt="Delivery Person" 
          className="newsletter-banner__image" 
        />
      </div>
    </section>
  );
};

export default Newsletter;
