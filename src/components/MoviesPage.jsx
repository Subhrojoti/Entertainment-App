import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/moviesPage.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdLocalMovies } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Loader from "./Loader";

const MoviesPage = () => {
  // API key and base URL for The Movie Database (TMDb)
  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  const base_url = "https://api.themoviedb.org/3";

  // State variables
  const [moviesData, setMoviesData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = useState(true);

  // Fetch movie data from TMDb API
  useEffect(() => {
    const urlMovies = `${base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${API_Key}`;
    const urlForSearch = `${base_url}/search/movie?api_key=f69acf74b5c812b81e0ece6ad96116a1`;

    const getMovieData = async () => {
      try {
        const endpoints = searchQuery ? urlForSearch : urlMovies;

        const { data } = await axios.get(endpoints, {
          params: {
            query: searchQuery,
          },
        });

        // Ensure that data.results exists and is an array before setting state
        if (data && data.results && Array.isArray(data.results)) {
          setMoviesData(data.results);
          setLoading(false);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    getMovieData();
  }, [searchQuery]);

  return (
    <>
      <div className="moviesPage">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="mainContent">
          <div className="searchBar">
            {/** Search bar component */}
            <div className="input-wrapper">
              <IoSearch id="search-icon" />
              <input
                type="text"
                placeholder="Search For Movies"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </div>
            {/** End of search bar component */}
          </div>
          {loading ? (
            <div className="w-full flex items-center justify-center ml-28">
              <Loader />
            </div>
          ) : (
            <>
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
                      imdbId={items.imdb_id} // IMDb ID added
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
