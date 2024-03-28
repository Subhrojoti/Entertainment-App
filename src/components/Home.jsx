import React, { useRef } from "react";
import home from "../styles/home.module.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import TrendingCard from "./TrendingCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Home = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className={home.main}>
      <section className={home.sideBar}>
        <SideBar />
      </section>
      <section className={home.content}>
        <div className={home.searchBar}>
          <SearchBar />
        </div>
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
              <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-200 p-4">
                <TrendingCard />
              </div>
              <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-200 p-4">
                <TrendingCard />
              </div>
              <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-200 p-4">
                <TrendingCard />
              </div>
              <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-200 p-4">
                <TrendingCard />
              </div>
              <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-200 p-4">
                <TrendingCard />
              </div>
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
            <div className={home.individualRecCard}>
              <Card />
            </div>
            <div className={home.individualRecCard}>
              <Card />
            </div>
            <div className={home.individualRecCard}>
              <Card />
            </div>
            <div className={home.individualRecCard}>
              <Card />
            </div>
            <div className={home.individualRecCard}>
              <Card />
            </div>
            <div className={home.individualRecCard}>
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
