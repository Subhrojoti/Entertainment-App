import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/moviesPage.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdLocalMovies } from "react-icons/md";

const MoviesPage = () => {
  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  const base_url = "https://api.themoviedb.org/3";
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    const urlMovies = `${base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${API_Key}`;

    const getMovieData = async () => {
      try {
        const { data } = await axios.get(urlMovies);
        console.log(data);
        // Ensure that data.results exists and is an array before setting state
        if (data && data.results && Array.isArray(data.results)) {
          setMoviesData(data.results);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    getMovieData();
  }, []);

  return (
    <div className="moviesPage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContent">
        <div className="searchBar">
          <SearchBar placeholder="Search for movies" />
        </div>
        <div className="heading">Movies</div>
        <div className="card-container">
          {moviesData.map((items, i) => {
            return (
              <Card
                key={i}
                title={items.title}
                poster={items.backdrop_path}
                date={items.release_date}
                logo={<MdLocalMovies />}
                id={items.id}
                type={items.type}
                imdbId={items.imdb_id} // only this thing added nothing more
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
