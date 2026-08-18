import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <div className="not-found__illustration">
          <span className="not-found__code">404</span>
        </div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="not-found__button">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;