import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query)
  };

  return (
   <form action="" onSubmit={handleSearch} className='w-full max-w-2xl mx-auto'>
     <div className="relative">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 pl-12 text-white bg-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button> */}

      <IoSearch  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
    </div>
   </form>
  );
};

export default SearchBar;
