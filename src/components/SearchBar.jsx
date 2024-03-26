import React from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/searchBar.css";

const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <IoSearch id="search-icon" />
      <input placeholder="Search for movies or TV series" />
    </div>
  );
};

export default SearchBar;
