import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
  };

  return (
    <SearchContext.Provider 
      value={{ 
        searchTerm, 
        setSearchTerm, 
        filteredProducts, 
        setFilteredProducts,
        isSearching,
        setIsSearching,
        handleSearch 
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);