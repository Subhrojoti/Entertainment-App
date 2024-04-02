import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/moviesPage.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { PiTelevision } from "react-icons/pi";

const TvSeriesPage = () => {
  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  const base_url = "https://api.themoviedb.org/3";
  const [tvSeriesData, settvSeriesData] = useState([]);
  useEffect(() => {
    const urlMovies = `${base_url}/tv/popular?language=en-US&page=1${API_Key}`;

    const gettvSeriesData = async () => {
      try {
        const { data } = await axios.get(urlMovies);
        console.log(data);
        // Ensure that data.results exists and is an array before setting state
        if (data && data.results && Array.isArray(data.results)) {
          settvSeriesData(data.results);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    gettvSeriesData();
  }, []);

  return (
    <div className="moviesPage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContent">
        <div className="searchBar">
          <SearchBar placeholder="Search for TV Series" />
        </div>
        <div className="heading">TV Series</div>
        <div className="card-container">
          {tvSeriesData.map((items, i) => {
            return (
              <Card
                key={i}
                title={items.title}
                poster={items.backdrop_path}
                date={items.first_air_date}
                name={items.name}
                logo={<PiTelevision />}
                id={items.id}
                type="tv"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TvSeriesPage;
