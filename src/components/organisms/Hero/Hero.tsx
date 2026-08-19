import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBg1 from '../../../assets/hero-bg.png';
import heroBg2 from '../../../assets/hero-bg-2.png';
import { useToast } from '../../../hooks/useToast';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const { addToast } = useToast();
  const slides = [heroBg1, heroBg2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addToast('Thank you for subscribing to our daily newsletter!', 'success');
      setEmail('');
    }
  };

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${slides[currentSlide]})` }}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          Don't miss amazing<br />grocery deals
        </h1>
        <p className="hero__subtitle">Sign up for the daily newsletter</p>
        
        <form className="hero__subscribe-form" onSubmit={handleSubmit}>
          <div className="hero__input-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero__input-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Invalid email address')}
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            />
          </div>
          <button type="submit" className="hero__subscribe-btn">Subscribe</button>
        </form>
      </div>
      
      <div className="hero__dots">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};