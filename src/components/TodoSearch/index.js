import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading, totalTodos }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const empty = (totalTodos === 0)
  return (
    <input
      className="TodoSearch"
      placeholder="Find your TODO here"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading || empty}
    />
  );
}

export { TodoSearch };
