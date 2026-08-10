import React from 'react';
import './Swiper.css';

interface SwiperProps {
  children: React.ReactNode;
  className?: string;
}

const Swiper: React.FC<SwiperProps> = ({ children, className = '' }) => {
  return (
    <div className={`swiper-container ${className}`}>
      {children}
    </div>
  );
};

export default Swiper;
