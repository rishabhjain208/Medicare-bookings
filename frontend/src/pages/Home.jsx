import React from "react";
import heroimg1 from "../assets/images/hero-img01.png";
import heroimg2 from "../assets/images/hero-img02.png";
import heroimg3 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import { FaArrowRight } from "react-icons/fa";
import ServicesList from "../components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import vedioImg from "../assets/images/video-icon.png";
import avatorImg from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";

import DoctorsList from "../components/Doctors/DoctorsList";
import FaqItem from "../components/Faq/FaqItem";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      {/* ============== hero  section start ============= */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            {/* ============== hero  content ============= */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="  text-4xl font-[800] text-headingColor md:text-6xl ">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text__para">
                  "Welcome to our platform where we empower patients to live
                  healthier, longer lives. Through our services, we aim to
                  enhance your well-being and longevity. Join us on the journey
                  towards better health and vitality. Your path to a thriving
                  life starts here."
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/* ============== hero  counter ============= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row md:items-center gap-5 md:gap-[30px]">
                <div>
                  <h2 className="text-4xl font-[700] text-headingColor md:text-5xl">
                    30+
                  </h2>
                  <span className="w-[100px] h-2  bg-yellowColor rounded-full block  "></span>
                  <p className="text__para">Year of Expericence</p>
                </div>

                <div>
                  <h2 className="text-4xl font-[700] text-headingColor md:text-5xl">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block  "></span>
                  <p className="text__para">Clinic Loaction</p>
                </div>
                <div>
                  <h2 className="text-4xl font-[700] text-headingColor md:text-5xl">
                    100%
                  </h2>
                  <span className="w-[120px] h-2  bg-irisBlueColor rounded-full block  "></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ============== hero  content ============= */}
            <div className="flex gap-11 w-full">
              <div className="flex gap-[30px] justify-end">
                <img className="w-full h-[90%]" src={heroimg1} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroimg2} alt="doctor" />
                <img className="w-full" src={heroimg3} alt="doctor" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============== hero  section end ============= */}

      {/*=======================Providing the best medical service start==================== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical service
            </h2>
            <p className="text__para text-center">
              "Providing the best medical service entails delivering
              compassionate care with cutting-edge expertise, ensuring optimal
              patient outcomes and satisfaction."
            </p>
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt[55px]">
            {/*======================Find a Doctor================ */}
            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className=" text-[26px] font-[700] text-center text-headingColor leading-9  ">
                  Find a Doctor{" "}
                </h2>
                <p className=" text__para text-center text-textColor leading-7 mt-4">
                  "Providing the best medical service requires a combination of
                  expertise, compassion"
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <FaArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            {/*======================Find a Location================ */}

            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className=" text-[26px] font-[700] text-center text-headingColor leading-9  ">
                  Find a Location{" "}
                </h2>
                <p className=" text__para text-center text-textColor leading-7 mt-4">
                  "Streamlining the search process for optimal medical service
                  access, prioritizing convenience and quality".
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <FaArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/*======================Book Appointment================ */}
            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className=" text-[26px] font-[700] text-center text-headingColor leading-9  ">
                  Book Appointment{" "}
                </h2>
                <p className=" text__para text-center text-textColor leading-7 mt-4">
                  "Providing the best medical service with care and expertise."
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <FaArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/*======================Book Appointment end ================ */}
          </div>
        </div>
      </section>

      {/* ==================about section  start================== */}
      <About />
      {/* ==================about section  end================== */}

      {/*=========================== service section start.================== */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center text-textColor">
              World-class healthcare services provide a beacon of reliability
              and excellence, offering trusted care that transcends borders,
              ensuring patients receive unparalleled treatment and peace of
              mind.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/*=========================== service section end.================== */}

      {/*=========================== features section start.================== */}

      <section>
        <div className="container">
          <div className="flex justify-between items-center flex-col lg:flex-row ">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime
              </h2>
              <ul className="text__para">
                <li>1. Schedule the appointment directly </li>
                <li>2. Search for physician here, and contact their office</li>
                <li>
                  3. View our physicians who accepting new patients, use the
                  online scheduling tool to select appointment time{" "}
                </li>
              </ul>
              <Link to="/">
                <button className="btn ">Learn More</button>
              </Link>
            </div>

            <div className=" relative flex  justify-end lg:mt-0 xl:w-[770px] z-10 mt-50px">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] h-[100px] md:h-[120px] lg:h-[200px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 pb-3 lg:px-4 lg:pb-26px rounded-[10px] ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] mt-5 lg:text-[14px] lg:leading-5  text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] mt-5 lg:text-[14px] lg:leading-5  text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] mt-5 lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] mr-3 lg:py-3 lg:px-[9px]">
                    <img src={vedioImg} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] rounded-full py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                  Consultation
                </div>

                <div className="flex mb-9 items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatorImg} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[122px] text-headingColor font-[700] ">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=========================== Our Great doctors end.================== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great doctors</h2>
            <p className="text__para text-center text-textColor">
              World-class healthcare services provide a beacon of reliability
              and excellence, offering trusted care that transcends borders,
              ensuring patients receive unparalleled treatment and peace of
              mind.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>
      {/*=========================== Our Great doctors end.================== */}

      {/*=========================== FAQ start.================== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:1/2">
              <h2 className="heading  ml-11">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*=========================== FAQ end.================== */}

      {/*======================== testimonial====================== */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center text-textColor">
              "Booking appointments has never been easier! Efficient,
              convenient, and hassle-free service"
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
