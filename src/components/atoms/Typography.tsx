import React from 'react';
import './Typography.css';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
}) => {
  
    const Component = variant === 'body' || variant === 'caption' ? 'p' : variant;

  return (
    <Component className={`typography typography--${variant} ${className}`}>
      {children}
    </Component>
  );
};