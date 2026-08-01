import React, { useState } from 'react';
import Input from '../../atoms/Input/Input'; 
import Button from '../../atoms/Button/Button';
import './SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Search here...', 
  onSearch 
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      
      <div className="search-bar__input-wrapper">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
      </div>
      
      
      <div className="search-bar__button-wrapper">
        <Button type="submit">
          <svg 
            className="search-bar__icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </Button>
      </div>
    </form>
  );
};