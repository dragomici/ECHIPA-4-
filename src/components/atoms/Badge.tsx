import React from 'react';
import './Badge.css';

// Interfața TypeScript pentru proprietățile Badge-ului
interface BadgeProps {
  text: string;                                                      // Textul afișat (ex: "Hot", "Sale", "-14%")
  variant?: 'hot' | 'new' | 'sale' | 'success' | 'warning' | 'info'; // Culorile etichetei
  className?: string;                                                // Clase suplimentare din exterior
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'hot',
  className = '',
}) => {
  return (
    <span className={`badge badge--${variant} ${className}`}>
      {text}
    </span>
  );
};