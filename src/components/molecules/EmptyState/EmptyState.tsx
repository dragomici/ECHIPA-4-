import React from 'react';
import './EmptyState.css';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionButton?: React.ReactNode;
}

const DefaultEmptyIcon = () => (
  <svg 
    width="120" 
    height="120" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#e8e8e8" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M9 11l4-4" />
  </svg>
);

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon = <DefaultEmptyIcon />,
  actionButton,
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state__icon-wrapper">
        {icon}
      </div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
      {actionButton && (
        <div className="empty-state__action">
          {actionButton}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
