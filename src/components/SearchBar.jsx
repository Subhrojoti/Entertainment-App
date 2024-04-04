import React from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/searchBar.css";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="input-wrapper">
      <IoSearch id="search-icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
