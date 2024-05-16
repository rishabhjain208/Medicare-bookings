import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import userlogo from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { AuthContext } from "../../context/AuthContext.jsx";
const Header = () => {
  const navlinks = [
    { path: "/home", display: "Home" },
    { path: "/doctors", display: "Find a Doctor" },
    { path: "/services", display: "Services" },
    { path: "/contact", display: "Contact" },
  ];

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============= {logo}============ */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* =============== menu start ================ */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600] "
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* =============== menu end ================ */}

          {/* ============ nav right start ============== */}

          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {" "}
                    <figure className="w-[35px] h-[35px] rounded-full">
                      <img
                        src={user?.photo}
                        className="w-full rounded-full"
                        alt="userlogo"
                      />
                    </figure>
                    <h2 className="text-textColor font-semibold">
                      {user?.name}
                    </h2>{" "}
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor text-white border hover:text-black border-transparent hover:border-gray-500 hover:bg-gray-100 font-semibold rounded-full inline-flex items-center py-2 px-6  h-12 hover:font-extrabold">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <IoMenu className="w-6 h-6 cursor-pointer"></IoMenu>
            </span>
          </div>
          {/* ============ nav right end ============== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
