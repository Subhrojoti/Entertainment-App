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
        <MdMovie />
      </div>
      <ul className="nav-icons">
        <li>
          <IoMdHome />
        </li>
        <li>
          <MdLocalMovies />
        </li>
        <li>
          <TbDeviceTvOld />
        </li>
        <li>
          <IoBookmark />
        </li>
      </ul>
      <div className="account">
        <CgProfile />
      </div>
    </nav>
  );
};

export default SideBar;
