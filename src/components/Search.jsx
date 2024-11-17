import React, { useState, useEffect, useCallback } from 'react';
import { IoSearch } from 'react-icons/io5';
import debounce from 'lodash/debounce';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, 500),
    [onSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleChange}
          className="w-full px-4 py-3 pl-12 text-white bg-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
    </form>
  );
};

export default Search;