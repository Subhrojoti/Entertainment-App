import React, { useEffect, useState } from "react";
import detailsPic from "../assets/details.jpg";
import Stars from "./Stars";
import { FaLink } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const params = useParams();
  const [content, setContent] = useState({});
  const [credits, setCredits] = useState([]); // pass the array to get the data
  const [genres, setGenres] = useState([]); // pass the array to get the data

  const id = params.movieid || "";
  const _media_type = params.mediatype || "";

  const API_Key = "&api_key=f69acf74b5c812b81e0ece6ad96116a1";
  const base_url = "https://api.themoviedb.org/3";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/${_media_type}/${id}?${API_Key}&language=en-US`
      );
      setContent(data);
      setGenres(data.genres);
    } catch (error) {
      console.error(error);
    }
  };

  const creditsFetch = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/${_media_type}/${id}/credits?${API_Key}`
      );
      setCredits(data.cast);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    creditsFetch();
  }, [_media_type, id]);

  useEffect(
    () => {
      // For testing Data
      // console.log(content);
      // console.log(credits);
      // console.log(genres);
    },
    [content],
    [credits],
    [genres]
  );

  const poster = `${content.poster_path}`;
  const img = `https://image.tmdb.org/t/p/w500${poster}`;
  const title = content.original_name || content.original_title;

  const movieInfo = [
    {
      category: "Length",
      value: content && content.runtime ? content.runtime + " min." : "N/A",
    },
    {
      category: "Language",
      value:
        content &&
        content.spoken_languages &&
        content.spoken_languages.length > 0
          ? content.spoken_languages[0].english_name
          : "N/A",
    },
    {
      category: "Year",
      value:
        content && (content.release_date || content.first_air_date)
          ? (content.release_date || content.first_air_date).slice(0, 4)
          : "N/A",
    },
    {
      category: "Status",
      value: `${content.status}`,
    },
  ];

  return (
    <div className="main flex flex-row bg-custom-background pt-12">
      <div className="poster w-1/3 flex items-start h-screen justify-center ">
        <img src={img} className="w-96 rounded-lg" />
      </div>
      <div className="overview w-2/3 text-white font-normal flex flex-col gap-7">
        <h3 className="text-6xl">{title}</h3>
        <div className="stars">
          <Stars
            stars={(content.vote_average / 2).toFixed(1)}
            numbers={(content.vote_average / 2).toFixed(1)}
          />
        </div>
        <div className="movie-info flex gap-56 ">
          {movieInfo.map((items, i) => {
            return (
              <div key={i}>
                <p className="text-gray-400 text-md">{items.category}</p>
                <p className="text-lg mt-2 font-bold">{items.value}</p>
              </div>
            );
          })}
        </div>
        <div className="genres">
          <p className="font-bold text-lg mb-3">Genres</p>
          <div className="flex gap-2">
            {genres.map((items, i) => {
              return (
                <p
                  key={i}
                  className="bg-white text-custom-background p-px px-3 border rounded-lg font-bold"
                >
                  {items.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="Synopsis flex flex-col gap-2">
          <p className="font-bold">Synopsis</p>
          <p className="text-lg pr-3">{content.overview}</p>
        </div>
        <div className="casts flex flex-col gap-2">
          <p className="font-bold">Casts</p>
          <div className="flex flex-wrap gap-2">
            {credits.map((items, i) => (
              <p
                key={i}
                className="border border-white rounded-lg p-px px-2 font-bold"
              >
                {items.name}
              </p>
            ))}
          </div>
        </div>
        <div className="link flex gap-6 mt-14">
          <a
            href={content.homepage}
            target="_blank"
            className="flex items-center gap-6 
          bg-custom-button p-4 w-48 justify-center rounded-md"
          >
            <p className="font-bold bg-red-500 bg-opacity-0">Website</p>
            <FaLink className="bg-red-500 bg-opacity-0" />
          </a>
          <a
            href={`https://www.imdb.com/title/${content.imdb_id}`}
            target="_blank"
            className="flex items-center gap-12 bg-custom-button p-4 w-48 justify-center rounded-md"
          >
            <p className="font-bold bg-red-500 bg-opacity-0">IMDB</p>
            <FaImdb className="bg-red-500 bg-opacity-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
