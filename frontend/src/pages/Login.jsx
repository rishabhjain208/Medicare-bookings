import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "Login data");

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
      setLoading(false);
    }
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-md shadow-lg md:p-10 ">
        <p className="text-headingColor text-[22px] leading-9 font-bold mb-10 flex items-center justify-center">
          Hello! <span className="text-primaryColor ml-3">Welcome</span> Back 🎉
        </p>

        <form className="py-4 lg:py-0" onSubmit={onSubmit}>
          <div className="mb-5 relative">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7  text-headingColor  placeholder-textColor rounded-md cursor-pointer"
              autoComplete="username"
              required
            />
          </div>
          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7  text-headingColor  placeholder-textColor rounded-md cursor-pointer"
              autoComplete="current-password"
              required
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <button
            disabled={loading}
            className="btn ml-6 lg:ml-0 md:ml-0 w-11/12 lg:w-full flex justify-center rounded-md text-[18px] lg:px-8"
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : "Login"}
          </button>

          <p className="mt-4 flex items-center justify-center text-textColor">
            Don't have an account?
            <span className="ml-2">
              <Link to="/register" className="text-primaryColor">
                Register
              </Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
