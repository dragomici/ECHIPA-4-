import React, { createContext, useContext, useState } from 'react';

interface SidebarFilterState {
  maxPrice: number;
  colors: string[];
  conditions: string[];
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  appliedFilters: SidebarFilterState;
  applySidebarFilters: (filters: SidebarFilterState) => void;
  resetAllFilters: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const CATEGORIES = [
  'All Categories',
  'Milks & Dairies',
  'Coffees & Teas',
  'Pet Foods',
  'Meats',
  'Vegetables',
  'Fresh Fruit',
  'Cereals',
  'Snack',
];

const initialSidebarFilters: SidebarFilterState = {
  maxPrice: 100,
  colors: [],
  conditions: [],
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [appliedFilters, setAppliedFilters] = useState<SidebarFilterState>(initialSidebarFilters);

  const applySidebarFilters = (filters: SidebarFilterState) => {
    setAppliedFilters(filters);
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setAppliedFilters(initialSidebarFilters);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        appliedFilters,
        applySidebarFilters,
        resetAllFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
