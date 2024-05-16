import React from "react";
import { services } from "../assets/data/services";
import ServicesCard from "../components/Services/ServicesCard";
const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px]">
          {services.map((item, index) => (
            <ServicesCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
