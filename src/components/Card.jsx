
import React, { useState } from "react";
import demoPic from "../assets/demoPic.jpg";
import { MdLocalMovies, MdBookmark, MdBookmarkBorder } from "react-icons/md";
import card from "../styles/card.module.css";

const Card = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <div className={card.cardContainer}>
        <div className={card.imageContainer}>
          {isBookmarked ? (
            <MdBookmark className={card.bookmarkIcon} onClick={toggleBookmark} />
          ) : (
            <MdBookmarkBorder className={card.bookmarkIcon} onClick={toggleBookmark} />
          )}
          <img src={demoPic} alt="img" />
        </div>
        <div className={card.totalContent}>
          <div className={card.content}>
            <div className="year">
              2019<span className={card.dot}>.</span>
            </div>
            <div className={card.dynamicIcon}>
              <MdLocalMovies />
            </div>
            <div className="icon-type">
              <span className={card.dot}>.</span>Movie
              <span className={card.dot}>.</span>
            </div>
            <div className="type">PG</div>
          </div>
          <div className={card.movieName}>Pushpa</div>
        </div>
      </div>
    </>
  );
};

export default Card;
