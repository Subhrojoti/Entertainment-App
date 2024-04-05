import React, { useState } from "react";
import demoPic from "../assets/demoPic.jpg"; // Importing a demo picture (not used in this component)
import { MdLocalMovies, MdBookmark, MdBookmarkBorder } from "react-icons/md"; // Importing icons for bookmarking
import card from "../styles/card.module.css"; // Importing CSS module for styling
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import noImage from "../assets/noImage.jpg"; // Importing a placeholder image for cases where poster is not available

/**
 * Card Component
 * @param {string} title - The title of the movie or TV show
 * @param {string} poster - The URL of the poster image
 * @param {string} date - The release date of the movie or TV show
 * @param {string} name - The name of the movie or TV show
 * @param {JSX} logo - JSX representing the logo/icon for the movie or TV show
 * @param {string} id - The unique identifier of the movie or TV show
 * @param {string} mediaType - The type of media (e.g., movie, TV show)
 * @param {string} type - An alternate type of the media (e.g., movie, TV show)
 * @param {string} releaseData - The release date of the media
 */

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
  // Determine the type of media (movie or TV show)
  const movieType = mediaType ? mediaType : type ? type : "movie";

  // Prepare the poster image URL
  const posterImg = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : noImage;

  // State for bookmarking functionality
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Format the date
  const realDate = date ? date : releaseData;

  // Toggle bookmark status
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <div className={card.cardContainer}>
        <div className={card.imageContainer}>
          {/* Conditional rendering of bookmark icons based on bookmark status */}
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
          {/* Render the poster image */}
          <img src={posterImg} alt="img" />
        </div>
        {/* Link to navigate to the detail page of the media */}
        <Link to={`/detail/${id}/${movieType}`}>
          <div className={card.totalContent}>
            <div className={card.content}>
              {/* Display the year of release */}
              <div className="year">
                {realDate && realDate.slice(0, 4)}
                <span className={card.dot}>.</span>
              </div>
              {/* Display the logo/icon */}
              <div className={card.dynamicIcon}>{logo}</div>
              {/* Display the type of media */}
              <div className="icon-type">
                <span className={card.dot}>.</span>Movie
                <span className={card.dot}>.</span>
              </div>
              {/* Placeholder for the rating or classification */}
              <div className="type">PG</div>
            </div>
            {/* Display the title or name of the media */}
            <div className={card.movieName}>{title || name}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
