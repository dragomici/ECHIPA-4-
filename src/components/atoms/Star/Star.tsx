import React from 'react';
import './Star.css';

interface StarProps {
  filled?: boolean;
}

const Star: React.FC<StarProps> = ({ filled = true }) => {
  const modifierClass = filled ? 'star--filled' : 'star--empty';

  return (
    <svg
      className={`star ${modifierClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );
};

export default Star;