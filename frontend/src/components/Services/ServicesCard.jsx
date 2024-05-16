import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] font-[700] text-center text-headingColor leading-9">
        {name}
      </h2>
      <p className="text__para text-center text-textColor leading-7 mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        {" "}
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <FaArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="flex items-center justify-center h-[44px] w-[44px] leading-[30px] font-[600] text-[18px]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
