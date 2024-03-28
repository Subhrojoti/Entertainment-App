import React from "react";
import "../styles/sideBar.css";
import { MdMovie } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { IoBookmark } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <nav>
      <div className="logo">
      <div className="icon-wrapper">
        <MdMovie className="icon"/>
        </div>
      </div>
      <ul className="nav-icons">
        <li>
          <div className="icon-wrapper">
          <IoMdHome className="icon" />
          </div>
        </li>
        <li>
        <div className="icon-wrapper">
          <MdLocalMovies className="icon"/>
          </div>
        </li>
        <li>
        <div className="icon-wrapper">
          <TbDeviceTvOld className="icon"/>
          </div>
        </li>
        <li>
        <div className="icon-wrapper">
          <IoBookmark className="icon"/>
          </div>
        </li>
      </ul>
      <div className="icon-wrapper">
      <div className="account">
        <CgProfile className="icon"/>
      </div>
      </div>
    </nav>
  );
};

export default SideBar;
