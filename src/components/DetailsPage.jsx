import React from "react";
import detailsPic from "../assets/details.jpg";
import Stars from "./Stars";
import { FaLink } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";

const DetailsPage = () => {
  const movieInfo = [
    {
      category: "Length",
      value: "88 min.",
    },
    {
      category: "Langauge",
      value: "English",
    },
    {
      category: "Year",
      value: 2023,
    },
    {
      category: "Status",
      value: "N/A",
    },
  ];

  const genres = ["Documentory", "History"];
  const cast = [
    "Cillian Murphy",
    "Emily Blunt",
    "Robert Downey Jr.",
    "Matt Damon",
    "Rami Malek",
    "Benedict Cumberbatch",
    "Sam Rockwell",
    "Rebecca Hall",
    "Josh Brolin",
    "Jake Gyllenhaal",
    "Natalie Portman",
    "Tom Hardy",
    "Viola Davis",
    "Michael Fassbender",
    "Charlize Theron",
    "Oscar Isaac",
    "Emma Stone",
    "Mark Ruffalo",
  ];
  return (
    <div className="main flex flex-row bg-custom-background pt-12">
      <div className="poster w-1/3 flex items-start h-screen justify-center ">
        <img src={detailsPic} className="w-96 rounded-lg" />
      </div>
      <div className="overview w-2/3 text-white font-normal flex flex-col gap-7">
        <h3 className="text-6xl">
          The End All War : Oppenheimer & the Atomic Bomb
        </h3>
        <div className="stars">
          <Stars stars="4.5" numbers="4.5" />
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
                  {items}
                </p>
              );
            })}
          </div>
        </div>
        <div className="Synopsis flex flex-col gap-2">
          <p className="font-bold">Synopsis</p>
          <p className="text-lg pr-3">
            Oppenheimer" is a gripping drama that chronicles the life of J.
            Robert Oppenheimer, the brilliant physicist behind the development
            of the atomic bomb during World War II. The film explores his
            pivotal role in the Manhattan Project, his ethical dilemmas, and his
            relationships with colleagues. It offers a compelling portrayal of
            Oppenheimer's complex character and the moral complexities of
            scientific innovation.
          </p>
        </div>
        <div className="casts flex flex-col gap-2">
          <p className="font-bold">Casts</p>
          <div className="flex flex-wrap gap-2">
            {cast.map((items, i) => (
              <p
                key={i}
                className="border border-white rounded-lg p-px px-2 font-bold"
              >
                {items}
              </p>
            ))}
          </div>
        </div>
        <div className="link flex gap-6 mt-14">
          <a
            href="https://www.google.com"
            target="_blank"
            className="flex items-center gap-6 
          bg-custom-button p-4 w-48 justify-center rounded-md"
          >
            <p className="font-bold">Website</p>
            <FaLink />
          </a>
          <a
            href="https://www.imdb .com"
            target="_blank"
            className="flex items-center gap-12 bg-custom-button p-4 w-48 justify-center rounded-md"
          >
            <p className="font-bold">IMDB</p>
            <FaImdb />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
