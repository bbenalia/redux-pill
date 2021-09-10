import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { filterBySearch } from "../../redux/filters/actions";

import SearchIcon from "../SVGIcons/SearchIcon";

import "./SearchBar.scss";

function SearchBar({ value }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentLocation = window.location.href;
    const searchValue = e.target[1].value;
    dispatch(filterBySearch(searchValue));
    if (currentLocation === "http://localhost:5000/")
      history.push("/dashboard");
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    dispatch(filterBySearch(searchValue));
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
          value={value}
          onChange={handleChange}
          placeholder="| Search..."
          name="s"
          className="w-75 bg-transparent border-0"
        />
      </form>
    </>
  );
}

export default SearchBar;
