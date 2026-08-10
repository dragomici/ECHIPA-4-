import React from 'react';
import Button from '../../atoms/Button/Button';
import './NotFoundTemplate.css';

interface NotFoundTemplateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onHomeClick?: () => void;
  className?: string;
}

export const NotFoundTemplate: React.FC<NotFoundTemplateProps> = ({
  title = '404 - Page Not Found',
  description = 'Oops! The page you are looking for does not exist or has been moved.',
  buttonText = 'Back to Home',
  onHomeClick,
  className = '',
}) => {
  return (
    <div className={`not-found-template ${className}`}>
      <div className={`not-found-template__content`}>
        <h1 className="not-found-template__title">{title}</h1>
        <p className="not-found-template__description">{description}</p>
        <div className="not-found-template__action">
          <Button variant="primary" onClick={onHomeClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};