import React from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Card from "./Card";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";

const BookMarkPage = () => {
  return (
    <div className="bookMark-main flex h-screen">
      <div className="sidebar w-32 mt-[2rem] ml-[2rem] ">
        <SideBar />
      </div>
      <div className="content w-full mt-[3rem]">
        <div className="srcBar">
          <SearchBar placeholder="Search For Bookamrk Shows" />
        </div>
        <div
          style={{
            fontFamily: "jost",
            fontWeight: "400",
            fontSize: "30px",
            color: "#ededee",
          }}
          className="mt-[2rem] mb-[1rem]"
        >
          BookMarked Movies
        </div>
        <div className="bookmarkCard flex flex-wrap gap-[2rem] mt-[2rem]">
          <Card
            title="3 idiots"
            date="2009"
            typeName="Movie"
            logo={<MdLocalMovies />}
            poster="https://image.tmdb.org/t/p/w500/u7kuUaySqXBVAtqEl9vkTkAzHV9.jpg"
            bookmark="false"
          />
          <Card
            title="Interstellar"
            date="2014"
            typeName="Movie"
            logo={<MdLocalMovies />}
            poster="https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg"
            bookmark="false"
          />
        </div>
        <div
          style={{
            fontFamily: "jost",
            fontWeight: "400",
            fontSize: "30px",
            color: "#ededee",
          }}
          className="mt-[2rem] mb-[1rem]"
        >
          BookMarked TvSeries
        </div>
        <div className="bookmarkCard flex flex-wrap gap-[2rem] mt-[2rem]">
          <Card
            title="Dragon Ball Z"
            date="1989"
            typeName="TvSeries"
            logo={<PiTelevision />}
            poster="https://image.tmdb.org/t/p/w500/ydf1CeiBLfdxiyNTpskM0802TKl.jpg"
            bookmark="false"
          />
          <Card
            title="The Great Kapil Sharma Show"
            date="2024"
            typeName="TvSeries"
            logo={<PiTelevision />}
            poster="https://image.tmdb.org/t/p/w500/5nEC6LXJt11jscs2iCFub8oFPqj.jpg"
            bookmark="false"
          />
          <Card
            title="Shark Tank India"
            date="2021"
            typeName="TvSeries"
            logo={<PiTelevision />}
            poster="https://image.tmdb.org/t/p/w500/tLL91JBiCCvBF7oKSN6dFR7yd8c.jpg"
            bookmark="false"
          />
        </div>
      </div>
    </div>
  );
};

export default BookMarkPage;
