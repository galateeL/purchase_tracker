/* eslint-disable react/prop-types */
import React from "react";
import { ImSearch } from "react-icons/im";
import "./Search.css";

function Search(props) {
  const { searchValue, setSearchValue } = props;
  return (
    <div className="input-search-container">
      <ImSearch className="icon-search" />
      <input
        className="input-search"
        value={searchValue}
        type="text"
        placeholder="Research an item..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
