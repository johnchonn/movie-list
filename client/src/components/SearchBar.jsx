import React, { useState, useEffect } from 'react';


const SearchBar = ({ updateQuery, handleSearch }) => {

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    updateQuery(searchValue);
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        Search
      <input onChange={handleChange} type="text" placeholder="Search..." value={searchValue} />
      <button>Go!</button>
      </label>
      </form>
  )
}

export default SearchBar;