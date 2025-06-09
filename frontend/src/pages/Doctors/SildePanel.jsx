import React, { useState } from "react";
import convertTime from "../../utils/convertTime";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import {FaArrowRight} from "react-icons/fa";
const SildePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [loading, setLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedSlot, setSelectedSlot]= useState(1);
  const toggleSlot = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            {/* <ul className="mt-3">
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
            </ul> */}

            <ul className="mt-3">
      {timeSlots?.map((item, index) => (
        <li key={index} className="flex flex-col">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSlot(index)}>
            <p className="text-[15px] leading-8 text-textColor font-semibold">
              {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[15px] leading-8 text-textColor font-semibold">
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
              {openIndex === index ? (
                <FaArrowRight className="w-4 h-4 text-gray-600" />
              ) : (
                <FaArrowRight className="w-4 h-4 text-gray-600" />
              )}
            </div>
          </div>
          {openIndex === index && (
            <ul className="text-[15px] leading-8 text-textColor">
              <li>
            <input
            type="radio"
            id={1}
            name="timeSlot"
            value={1}
            checked={selectedSlot === 1}
            onChange={() => setSelectedSlot(1)}
            className="w-4 h-4 accent-blue-500"
          />
          <span> 10:00AM</span>
          </li>
           <li>
            <input
            type="radio"
            id={2}
            name="timeSlot"
            value={"11:00 AM"}
            checked={selectedSlot === 2}
            onChange={() => setSelectedSlot(2)}
            className="w-4 h-4 accent-blue-500"
          />
           <span> 11:00AM</span>
          </li>
           <li>
            <input
            type="radio"
            id={3}
            name="timeSlot"
            value={"12:00 PM"}
            checked={selectedSlot ===3}
            onChange={() => setSelectedSlot(3)}
            className="w-4 h-4 accent-blue-500"
          />
           <span> 12:00PM</span>
          </li>
          <li>
            <input
            type="radio"
            id={1}
            name="timeSlot"
            value={"01:00 PM"}
            checked={selectedSlot === 4}
            onChange={() => setSelectedSlot(4)}
            className="w-4 h-4 accent-blue-500"
          />
           <span> 01:00PM</span>
          </li>
          <li>
            <input
            type="radio"
            id={1}
            name="timeSlot"
            value={"03:00 PM"}
            checked={selectedSlot === 5}
            onChange={() => setSelectedSlot(5)}
            className="w-4 h-4 accent-blue-500"
          />
           <span> 03:00PM</span>
          </li>
        
          </ul>
          )}

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
