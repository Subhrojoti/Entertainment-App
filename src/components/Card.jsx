import React, { useState } from "react";
import demoPic from "../assets/demoPic.jpg";
import { MdLocalMovies, MdBookmark, MdBookmarkBorder } from "react-icons/md";
import card from "../styles/card.module.css";
import { Link } from "react-router-dom";
import noImage from "../assets/noImage.jpg";

const Card = ({
  title,
  poster,
  date,
  name,
  logo,
  id,
  mediaType,
  type,
  releaseData,
}) => {
  const movieType = mediaType ? mediaType : type ? type : "movie";
  const posterImg = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : noImage;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const realDate = date ? date : releaseData;

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <div className={card.cardContainer}>
        <div className={card.imageContainer}>
          {isBookmarked ? (
            <MdBookmark
              className={card.bookmarkIcon}
              onClick={toggleBookmark}
            />
          ) : (
            <MdBookmarkBorder
              className={card.bookmarkIcon}
              onClick={toggleBookmark}
            />
          )}
          <img src={posterImg} alt="img" />
        </div>
        <Link to={`/detail/${id}/${movieType}`}>

          <div className={card.totalContent}>
            <div className={card.content}>
              <div className="year">
                {realDate && realDate.slice(0, 4)}

                <span className={card.dot}>.</span>
              </div>
              <div className={card.dynamicIcon}>{logo}</div>
              <div className="icon-type">
                <span className={card.dot}>.</span>Movie
                <span className={card.dot}>.</span>
              </div>
              <div className="type">PG</div>
            </div>
            <div className={card.movieName}>{title || name}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;


