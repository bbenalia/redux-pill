import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { filterBySearch } from "../../redux/filters/actions";
// import { setFilteredProducts } from "../../redux/products/actions";

import SearchIcon from "../SVGIcons/SearchIcon";

function SearchBar() {
  // const { filters } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentLocation = window.location.href;
    const searchValue = e.target[1].value;
    dispatch(filterBySearch(searchValue));
    // dispatch(setFilteredProducts(filters));
    if (currentLocation === "http://localhost:5000/")
      history.push("/dashboard");
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
