import React from "react";
import trendingCardcss from "../styles/trendingCard.module.css";
import demoPic from "../assets/demoPic.jpg";
import { MdLocalMovies } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

const TrendingCard = () => {
  return (
    <div className={trendingCardcss.card}>
      <img src={demoPic} className={trendingCardcss.cardImg} alt="movie" />
      <div className={trendingCardcss.cardBody}>
        <div className={trendingCardcss.iconStyle}>
          <div className={trendingCardcss.playIcon}>
            <FaCirclePlay />
            <p className={trendingCardcss.playText}>Play</p>
          </div>
        </div>
        <div className={trendingCardcss.info}>
          <div className={trendingCardcss.content}>
            <div className="year">
              2019<span className={trendingCardcss.dot}>.</span>
            </div>
            <div className={trendingCardcss.dynamicIcon}>
              <MdLocalMovies />
            </div>
            <div className="icon-type">
              <span className={trendingCardcss.dot}>.</span>Movie
              <span className={trendingCardcss.dot}>.</span>
            </div>
            <div className="type">PG</div>
          </div>
          <div className={trendingCardcss.movieName}>Pushpa</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
