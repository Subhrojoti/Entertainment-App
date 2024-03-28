import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/moviesPage.css";
import Card from "./Card";

const TvSeriesPage = () => {
  return (
    <div className="moviesPage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContent">
      <div className="searchBar">
        <SearchBar placeholder="Search for TV Series" />
      </div>
      <div className="heading">
        TV Series
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

export default TvSeriesPage;
