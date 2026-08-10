import React from 'react';
import { IconWrapper } from '../../atoms/IconWrapper/IconWrapper';
import { Link } from '../../atoms/Link/Link';
import './NavItem.css';

interface NavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  icon,
  isActive = false,
  className = '',
}) => {
  const activeClass = isActive ? 'nav-item--active' : '';

  return (
    <div className={`nav-item ${activeClass} ${className}`}>
      <Link href={href} className="nav-item__link">
        {icon && (
          <IconWrapper size="md" className="nav-item__icon">
            {icon}
          </IconWrapper>
        )}
        <span className="nav-item__text">{label}</span>
      </Link>
    </div>
  );
};