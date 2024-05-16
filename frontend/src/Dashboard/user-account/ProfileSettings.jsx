import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const ProfileSettings = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    photo: null,
    bloodType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      gender: user.gender,
      photo: user.photo,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value || "" });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    try {
      const data = await uploadImageToCloudinary(file);
      // console.log(data);

      setSelectedFile(data.url);
      setFormData({ ...formData, photo: data.url });
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error uploading image
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <section>
      <div>
        <form onSubmit={onSubmit} className="py-4 lg:py-0">
          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7  text-headingColor  placeholder-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7  text-headingColor  placeholder-textColor rounded-md cursor-pointer"
              autoComplete="username"
              aria-readonly
              readOnly
            />
          </div>
          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder-textColor rounded-ed cursor-pointer"
              autoComplete="current-password"
            />

            {/* <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span> */}
          </div>
          <div className="mb-5 relative">
            <input
              type="text"
              placeholder="Blood Type"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder-textColor rounded-ed cursor-pointer"
              required
            />
          </div>

          <div className="mb-5 flex items-center">
            <label className=" text-headingColor font-bold text-[16px] leading-7 ">
              Gender
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="text-textColor font-semibold text-[15px] leading-7 px-4 -3 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="mb-5 flex items-center gap-3">
            {formData.photo && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full rounded-full"
                />
              </figure>
            )}

            <div className="relative w-[130px] h-[50px]">
              <input
                type="file"
                name="photo"
                // value={formData.photo || ""}
                onChange={handleFileInputChange}
                id="customFile"
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />

              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] font-semibold rounded-lg truncate cursor-pointer text-headingColor"
              >
                {selectedFile ? selectedFile.name : "Upload photo"}
              </label>
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="btn ml-6 lg:ml-0 md:ml-0 w-11/12 lg:w-full flex justify-center rounded-md text-[18px] lg:px-8"
          >
            {loading ? <HashLoader size={25} color="#ffffff" /> : "Update"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProfileSettings;
