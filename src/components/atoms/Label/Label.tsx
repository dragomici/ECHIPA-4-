import React from 'react';
import './Label.css';

interface LabelProps {
  htmlFor: string;
  text: string;
  required?: boolean;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
  required = false,
  className = '',
}) => {
  return (
    <label htmlFor={htmlFor} className={className.trim() || undefined}>
      {text}
      {required && <span className="label__required">*</span>}
    </label>
  );
};