import React from "react";

import SearchIcon from "../SVGIcons/SearchIcon";

function SearchBar() {
  return (
    <>
      <form
        action="/"
        method="get"
        className="m-2 border border-2 rounded-pill bg-warning"
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
