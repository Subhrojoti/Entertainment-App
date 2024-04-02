import React from "react";
import trendingCardcss from "../styles/trendingCard.module.css";
import demoPic from "../assets/demoPic.jpg";
import { MdLocalMovies } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { PiTelevision } from "react-icons/pi";
import { Link } from "react-router-dom";

const TrendingCard = ({ name, title, poster, date, mediaType, id, type }) => {
  const movieType = mediaType ? mediaType : type ? type : "movie";
  return (
    <div className={trendingCardcss.card}>
      <Link to={`/detail/${id}/${movieType}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          className={trendingCardcss.cardImg}
          alt="movie"
        />
        <div className={trendingCardcss.cardBody}>
          <div className={trendingCardcss.iconStyle}>
            <div className={trendingCardcss.playIcon}>
              <FaCirclePlay className={trendingCardcss.transparentIcon} />
              <p className={trendingCardcss.playText}>Play</p>
            </div>
          </div>
          <div className={trendingCardcss.info}>
            <div className={trendingCardcss.content}>
              <div className="bg-red-600 bg-opacity-0">
                {date && date.slice(0, 4)}
                <span className={trendingCardcss.dot}>.</span>
              </div>
              <div className={trendingCardcss.dynamicIcon}>
                {movieType === "movie" ? (
                  <MdLocalMovies className="bg-red-600 bg-opacity-0" />
                ) : (
                  <PiTelevision className="bg-red-600 bg-opacity-0" />
                )}
              </div>
              <div className="icon-type bg-red-600 bg-opacity-0">
                <span className={trendingCardcss.dot}>.</span>Movie
                <span className={trendingCardcss.dot}>.</span>
              </div>
              <div className="bg-red-600 bg-opacity-0">PG</div>
            </div>
            <div className={trendingCardcss.movieName}>{title || name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingCard;
