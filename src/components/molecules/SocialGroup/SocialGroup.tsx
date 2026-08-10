import React from 'react';
import { IconWrapper } from '../../atoms/IconWrapper/IconWrapper';
import './SocialGroup.css';

export interface SocialItem {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface SocialGroupProps {
  items: SocialItem[];
  className?: string;
}

export const SocialGroup: React.FC<SocialGroupProps> = ({
  items,
  className = '',
}) => {
  return (
    <div className={`social-group ${className}`}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
          className="social-group__link"
        >
          <IconWrapper size="md" className="social-group__icon">
            {item.icon}
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};