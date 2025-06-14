import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import { FaArrowRight } from "react-icons/fa";
const DoctorCard = ({ doctor }) => {
  const { name, specialization, avgRating, totalRating, photo, experiences } =
    doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="heading text-[18px] lg:text-[26px] leading-[30px] lg:leading-9 text-textColor mt-3 lg:mt-5 font-[700]">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:leading-7 font-semibold rounded lg:text-[16px]">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7  text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[180px] lg:mt-5 flex items-center justify-between">
        <div>
          {/* <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalPatients}patients
          </h3> */}
          <p className="text-[14px] leading-6 font-[400] text-textColor ">
            At {experiences && experiences[0]?.hospital}
          </p>
        </div>
        <Link
          to={`/doctors/${doctor._id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <FaArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
