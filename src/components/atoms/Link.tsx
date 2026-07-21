import React from 'react';
import './Link.css';


interface LinkProps {
  href: string;                                    // Destinația link-ului (ex: "/about" sau "https://...")
  children: React.ReactNode;                       // Textul sau iconița din interior
  variant?: 'primary' | 'secondary' | 'muted';     // Stilul vizual
  target?: '_blank' | '_self' | '_parent' | '_top';// Unde se deschide link-ul (ex: _blank pentru fila nouă)
  className?: string;                              // Permite clase suplimentare din exterior
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'primary',
  target = '_self',
  className = '',
}) => {
  
   const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`link link--${variant} ${className}`}
    >
      {children}
    </a>
  );
};