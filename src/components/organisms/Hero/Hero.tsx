import React from 'react';
import { HeroTextBlock } from '../../molecules/HeroTextBlock/HeroTextBlock';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <HeroTextBlock title="Welcome" description="Discover amazing products" ctaText="Shop Now" />
        </div>
      </div>
    </section>
  );
};