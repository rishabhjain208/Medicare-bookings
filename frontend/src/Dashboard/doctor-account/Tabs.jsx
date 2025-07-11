import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor font-semibold"
              : "bg-transparent text-headingColor font-semibold"
          }  w-full  items-center  py-[15px] px-[35px] mt-0 rounded-md`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor font-semibold"
              : "bg-transparent text-headingColor font-semibold"
          }  w-full  items-center  py-[15px] px-[35px] mt-0 rounded-md`}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor font-semibold"
              : "bg-transparent text-headingColor font-semibold"
          } w-full  items-center  py-[15px] px-[35px] mt-0 rounded-md`}
        >
          Profile Settings
        </button>

        <div className="mt-[50px] w-full">
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
    </div>
  );
};

export default Tabs;
