import React from "react";
import "../styles/sideBar.css";
import { MdMovie } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { IoBookmark } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav>
      <div className="logo">
        <div className="icon-wrapper">
          <Link to="/">
            <MdMovie className="icon" />
          </Link>
        </div>
      </div>
      <ul className="nav-icons">
        <li>
          <div className="icon-wrapper">
            <Link to="/">
              <IoMdHome className="icon" />
            </Link>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Link to="/movies">
              <MdLocalMovies className="icon" />
            </Link>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Link to="/tvseries">
              <TbDeviceTvOld className="icon" />
            </Link>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <IoBookmark className="icon" />
          </div>
        </li>
      </ul>
      <div className="icon-wrapper">
        <div className="account">
          <Link to="/signup">
            <CgProfile className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
