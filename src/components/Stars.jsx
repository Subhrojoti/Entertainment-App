import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Stars = ({ stars, numbers }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex flex-row items-center gap-0.5 text-white">
      <p className="text-4xl font-bold mr-5">{numbers}</p>
      {ratingStar}
    </div>
  );
};

export default Stars;
