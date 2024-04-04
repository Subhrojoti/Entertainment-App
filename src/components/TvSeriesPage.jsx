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
  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  const base_url = "https://api.themoviedb.org/3";
  const [tvSeriesData, settvSeriesData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlMovies = `${base_url}/tv/popular?language=en-US&page=1${API_Key}`;
    const urlForSearch = `${base_url}/search/tv?api_key=f69acf74b5c812b81e0ece6ad96116a1`;

    const gettvSeriesData = async () => {
      try {
        const endpoints = searchQuery ? urlForSearch : urlMovies;

        const { data } = await axios.get(endpoints, {
          params: {
            query: searchQuery,
          },
        });
        // console.log(data); // for data testing
        // Ensure that data.results exists and is an array before setting state
        if (data && data.results && Array.isArray(data.results)) {
          settvSeriesData(data.results);
          setLoading(false);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    gettvSeriesData();
  }, [searchQuery]);

  return (
    <div className="moviesPage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContent">
        <div className="searchBar">
          <div className="input-wrapper">
            <IoSearch id="search-icon" />
            <input
              type="text"
              placeholder="Search For Tv Series"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
        {loading ? (
          <div className="w-full flex items-center justify-center ml-28">
            <Loader />
          </div>
        ) : (
          <>
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

export default TvSeriesPage;
