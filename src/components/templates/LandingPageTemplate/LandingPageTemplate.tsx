import React from 'react';
import './LandingPageTemplate.css';

interface LandingPageTemplateProps {
  heroSection: React.ReactNode;
  featuresSection: React.ReactNode;
  footerSection: React.ReactNode;
  className?: string;
}

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  heroSection,
  featuresSection,
  footerSection,
  className = '',
}) => {
  return (
    <div className={`landing-page-template ${className}`}>
      <header className="landing-page-template__hero">
        {heroSection}
      </header>

      <main className="landing-page-template__features">
        {featuresSection}
      </main>

      <footer className="landing-page-template__footer">
        {footerSection}
      </footer>
    </div>
  );
};