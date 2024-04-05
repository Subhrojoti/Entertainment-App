import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/moviesPage.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { PiTelevision } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import Loader from "./Loader";

const TvSeriesPage = () => {
  // API Key for accessing TMDB API
  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  // Base URL for TMDB API
  const base_url = "https://api.themoviedb.org/3";
  // State for storing TV series data
  const [tvSeriesData, settvSeriesData] = useState([]);
  // State for storing search query
  const [searchQuery, setSearchQuery] = React.useState("");
  // State for tracking loading state
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch TV series data
  useEffect(() => {
    // URL for fetching popular TV series
    const urlMovies = `${base_url}/tv/popular?language=en-US&page=1${API_Key}`;
    // URL for searching TV series
    const urlForSearch = `${base_url}/search/tv?api_key=f69acf74b5c812b81e0ece6ad96116a1`;

    // Async function to fetch TV series data
    const gettvSeriesData = async () => {
      try {
        // Determine the endpoint based on whether there is a search query or not
        const endpoints = searchQuery ? urlForSearch : urlMovies;

        // Fetch data from the endpoint
        const { data } = await axios.get(endpoints, {
          params: {
            query: searchQuery,
          },
        });

        // Check if the response contains the expected structure before updating the state
        if (data && data.results && Array.isArray(data.results)) {
          // Update TV series data and set loading to false
          settvSeriesData(data.results);
          setLoading(false);
        } else {
          // Log an error if the response format is unexpected
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        // Log an error if there's an error fetching the data
        console.error("Error fetching TV series data:", error);
      }
    };
    // Call the function to fetch TV series data
    gettvSeriesData();
  }, [searchQuery]);

  // JSX for rendering the TV series page
  return (
    <div className="moviesPage">
      {/* SideBar component */}
      <div className="sideBar">
        <SideBar />
      </div>
      {/* Main content */}
      <div className="mainContent">
        {/* SearchBar component */}
        <div className="searchBar">
          <div className="input-wrapper">
            {/* Search icon */}
            <IoSearch id="search-icon" />
            {/* Input field for searching TV series */}
            <input
              type="text"
              placeholder="Search For Tv Series"
              onChange={(e) => {
                // Update search query state based on user input
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </div>
        {/* Conditional rendering based on loading state */}
        {loading ? (
          // Display loader component if loading is true
          <div className="w-full flex items-center justify-center ml-28">
            <Loader />
          </div>
        ) : (
          // Render TV series cards if loading is false
          <>
            {/* Heading for TV series section */}
            <div className="heading">TV Series</div>
            {/* Container for TV series cards */}
            <div className="card-container">
              {/* Mapping through TV series data and rendering Card component for each */}
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
                    releaseData={items.release_date}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Exporting TvSeriesPage component
export default TvSeriesPage;
