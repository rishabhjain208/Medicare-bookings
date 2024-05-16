import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ===============aboutimg================== */}
          <div className="relative w-3/4 lg:w-1/2 xl:[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className=" absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCard} alt="aboutCard" />
            </div>
          </div>

          {/* ================== about content================= */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg-order-2">
            <h2 className="heading">
              Proud to stand alongside the nation's finest team
            </h2>
            <p className="text__para text-textColor">
              As a doctor, I am deeply honored and proud to contribute my
              expertise to our nation's premier healthcare team. Each day, I am
              driven by a sense of duty and responsibility to provide the
              highest quality care to my patients and to uphold the standards of
              excellence that our healthcare system represents. Being a part of
              this esteemed team allows me to collaborate with other dedicated
              professionals, share knowledge, and continually strive for
              innovation in medical practice.
            </p>
            <p className="text__para text-textColor">
              My commitment to medicine extends beyond the confines of the
              clinic or hospital walls. I am dedicated to serving my community
              and making a positive impact on the lives of those around me.
              Whether it's through preventative care, accurate diagnoses, or
              compassionate treatment, I am dedicated to ensuring that each
              patient receives the personalized attention and care they deserve.
              Together, as a cohesive team, we stand at the forefront of
              healthcare, working tirelessly to improve outcomes, advance
              medical knowledge, and ultimately, enhance the well-being of our
              nation.
            </p>

            <Link to="/">
              <button className="btn ">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
