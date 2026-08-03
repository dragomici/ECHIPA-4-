import React from 'react';
import './Link.css';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'muted';
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'primary',
  target = '_self',
  className = '',
}) => {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const variantClass = variant !== 'primary' ? `link--${variant}` : '';
  const combinedClasses = `${variantClass} ${className}`.trim();

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={combinedClasses || undefined}
    >
      {children}
    </a>
  );
};