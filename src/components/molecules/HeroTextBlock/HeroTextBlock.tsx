import React from 'react';
import  Button from '../../atoms/Button/Button';
import './HeroTextBlock.css';

interface HeroTextBlockProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  className?: string;
}

export const HeroTextBlock: React.FC<HeroTextBlockProps> = ({
  title,
  description,
  ctaText,
  onCtaClick,
  className = '',
}) => {
  return (
    <div className={`hero-text-block ${className}`}>
      <h1 className="hero-text-block__title">{title}</h1>
      <p className="hero-text-block__description">{description}</p>
      <div className="hero-text-block__cta">
        <Button variant="primary" onClick={onCtaClick}>
          {ctaText}
        </Button>
      </div>
    </div>
  );
};