import React, { useState } from "react";

import staricon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SildePanel from "./SildePanel";
import { BASE_URL } from "../../config";
import UseFetchData from "../../Hooks/UseFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";

const Doctordetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = UseFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = doctor;
  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div classlane="grid md:grid-cols-3 gap-[50px]">
              <div className="md:col-span-2 flex flex-col lg:flex-row md:flex-row  ">
                <div className="flex items-center gap-5">
                  <figure className="max-w-[200px] max-h-[200px]">
                    <img src={photo} alt="" className="w-full" />
                  </figure>
                  <div>
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:leading-7 font-semibold rounded lg:text-[16px]">
                      {specialization}
                    </span>
                    <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                      {name}
                    </h3>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                        <img src={staricon} alt="" /> {averageRating}
                      </span>
                      <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                        ({totalRating})
                      </span>
                    </div>

                    <p className="text__para text-[14px] leading-6 md:text-[15px] max-w-[390px]">
                      {/* I have taken medical service from them. They treat so well
                      and they are providing the best medical service. */}
                      {bio}
                    </p>
                  </div>
                  {/* <div className="flex flex-col lg:flex-row">
                  <SildePanel />
                </div> */}
                </div>
                <div className="mt-10 mr-16 ml-0">
                  <SildePanel
                    doctorId={doctor._id}
                    ticketPrice={ticketPrice}
                    timeSlots={timeSlots}
                  />
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#00666ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] text-headingColor font-semibold leading-7`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] text-headingColor font-semibold leading-7`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctordetails;
