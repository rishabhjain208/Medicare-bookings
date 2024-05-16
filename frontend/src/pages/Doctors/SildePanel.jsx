import React, { useState } from "react";
import convertTime from "../../utils/convertTime";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import HashLoader from "react-spinners/HashLoader";
const SildePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [loading, setLoading] = useState(false);
  const bookingHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(`${data.message}. Please try again`);
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mr-9 lg:mr-0 md:mr-0 lg:ml-44 h-[100%] shadow-panelShadow p-3 lg:p-5 rounded-md max-w-[570px] text-balance ">
        <div className="flex flex-col">
          <div className="flex  justify-between items-center mb-5">
            <p className=" flex flex-row  text__para mt-0 w-full font-bold text-[18px] text-headingColor mr-28">
              Appointment Fees
            </p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-bold mr-3">
              ₹{ticketPrice}
            </span>
          </div>
          <div>
            <p className="text__para font-semibold mt-0 text-headingColor">
              Available Time Slots:
            </p>
            <ul className="mt-3">
              {timeSlots?.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <p className="text-[15px] leading-8 text-textColor font-semibold">
                    {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                  </p>
                  <p className="text-[15px] leading-8 text-textColor font-semibold">
                    {convertTime(item.startingTime)} -{" "}
                    {convertTime(item.endingTime)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              onClick={bookingHandler}
              className="btn flex justify-center  px-2 w-full rounded-md items-center "
            >
              {loading ? <HashLoader size={35} color="#ffffff" /> : "Book Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SildePanel;
