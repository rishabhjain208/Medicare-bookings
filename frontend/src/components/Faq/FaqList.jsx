import React from "react";
import FaqItem from "./FaqItem";
import { faqs } from "./../../assets/data/faqs";
const FaqList = () => {
  return (
    <div className="mt-[38px] ml-11 ">
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </div>
  );
};

export default FaqList;
