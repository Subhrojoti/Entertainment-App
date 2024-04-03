import React, { useEffect, useState } from "react";
import home from "../styles/home.module.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import TrendingCard from "./TrendingCard";
import { MdChevronLeft, MdChevronRight, MdLocalMovies } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { PiTelevision } from "react-icons/pi";
import Loader from "./Loader";

const Home = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  const base_url = "https://api.themoviedb.org/3";
  const [moviesData, setMoviesData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlForTrending = `${base_url}/trending/all/day?language=en-US${API_Key}`;

    const getTrendingData = async () => {
      try {
        const { data } = await axios.get(urlForTrending);
        // console.log(data);

        // Ensure that data.results exists and is an array before setting state
        if (data && data.results && Array.isArray(data.results)) {
          setTrendingData(data.results);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    getTrendingData();
  }, []);

  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    const urlRecomendedForYou = `${base_url}/movie/top_rated?language=en-US&page=1${API_Key}`;
    const urlForSearch = `${base_url}/search/multi?api_key=f69acf74b5c812b81e0ece6ad96116a1`;

    const getRecData = async () => {
      try {
        const endpoints = searchQuery ? urlForSearch : urlRecomendedForYou;

        const { data } = await axios.get(endpoints, {
          params: {
            query: searchQuery,
          },
        });
        setLoading(false);

        // console.log(data);
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
    getRecData();
  }, [searchQuery]);

  return (
    <div className={home.main}>
      <section className={home.sideBar}>
        <SideBar />
      </section>
      <section className={home.content}>
        <div className={home.searchBar}>
          <div className="input-wrapper">
            <IoSearch id="search-icon" />
            <input
              type="text"
              placeholder="Search For Movie And Tv Series"
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
            <div className={home.trending}>
              <div className={home.trendingtxt}>
                <h1>Trending</h1>
              </div>
              <div className="relative flex items-center">
                <MdChevronLeft
                  onClick={slideLeft}
                  size={30}
                  className="cursor-pointer text-white opacity-50 hover:opacity-100"
                />
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                  {trendingData.map((items, i) => {
                    return (
                      <div
                        key={i}
                        className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-200 p-4"
                      >
                        <TrendingCard
                          title={items.title}
                          poster={items.backdrop_path}
                          date={items.release_date || items.first_air_date}
                          name={items.name}
                          mediaType={items.media_type}
                          id={items.id}
                          type={items.type}
                        />
                      </div>
                    );
                  })}
                </div>
                <MdChevronRight
                  onClick={slideRight}
                  size={30}
                  className="cursor-pointer text-white opacity-50 hover:opacity-100"
                />
              </div>
            </div>
            <div className={home.recforyou}>
              <div className={home.recforyoutxt}>
                <h2>Recommended for you</h2>
              </div>
              <div className={home.recforyouTrendingCard}>
                {moviesData.map((items, i) => {
                  const logo =
                    items.media_type === "tv" ? (
                      <PiTelevision />
                    ) : (
                      <MdLocalMovies />
                    );

                  return (
                    <div className={home.individualRecCard} key={i}>
                      <Card
                        title={items.title}
                        poster={items.backdrop_path}
                        date={items.release_date}
                        releaseData={items.first_air_date}
                        name={items.name}
                        logo={logo}
                        mediaType={items.media_type}
                        id={items.id}
                        type={items.type}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
