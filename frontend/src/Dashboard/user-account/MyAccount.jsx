import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "./../../context/AuthContext";
import userImg from "../../assets/images/doctor-img01.png";
import MyBookings from "./MyBookings";
import ProfileSettings from "./ProfileSettings";
import useGetProfile from "../../Hooks/UseFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
const MyAccount = () => {
  const { dispatch } = useContext(AuthContext);
  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section>
      {" "}
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    alt="User"
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>
              <div>
                <div className="text-center text-4xl">
                  <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                    {userData.name}
                  </h3>
                </div>
                <p className="text-textColor text-[15px] leading-6 font-medium text-center">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium text-center">
                  Blood Type :{" "}
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] hover:bg-black p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-500 text-white hover:bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  }p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor h-12`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  }py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor h-12`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <ProfileSettings user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
