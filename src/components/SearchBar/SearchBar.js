import React from "react";

import SearchIcon from "../SVGIcons/SearchIcon";

function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const searchValue = e.target[1].value;
  };

  return (
    <>
      <form
        className="m-2 border border-2 rounded-pill bg-warning"
        onSubmit={handleSubmit}
      >
        <label htmlFor="header-search">
          <span className="visually-hidden">Search</span>
        </label>
        <button type="submit" className="p-2 ms-2 bg-transparent border-0">
          <SearchIcon />
        </button>
        <input
          type="text"
          id="header-search"
          placeholder="| Search..."
          name="s"
          className="w-75 bg-transparent border-0"
        />
      </form>
    </>
  );
}

export default SearchBar;
