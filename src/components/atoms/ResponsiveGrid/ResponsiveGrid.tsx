import React, { useState, useEffect } from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 4, xl: 5 },
  gap = '1.5rem',
  className = '',
}) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let currentColumns = columns.xl || columns.desktop || 4;
  
  if (windowWidth < 768) {
    currentColumns = columns.mobile || 1;
  } else if (windowWidth < 1024) {
    currentColumns = columns.tablet || 2;
  } else if (windowWidth < 1200) {
    currentColumns = columns.desktop || 4;
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
    gap: gap,
  };

  return (
    <div style={gridStyle} className={className}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
