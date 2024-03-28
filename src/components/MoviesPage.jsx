import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/moviesPage.css";
import Card from "./Card";

const MoviesPage = () => {
  return (
    <div className="moviesPage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContent">
      <div className="searchBar">
        <SearchBar placeholder="Search for movies" />
      </div>
      <div className="heading">
        Movies
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </div>
  );
};

export default MoviesPage;
