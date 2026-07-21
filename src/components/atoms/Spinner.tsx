import React from 'react';
import './Spinner.css';

const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <div className="spinner__circle"></div>
    </div>
  );
};

export default Spinner;