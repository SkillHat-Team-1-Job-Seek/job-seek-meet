import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./ui/PrimaryButton";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: " ",
    password: "",
    keepLoggedIn: false, // Added for the "Keep me logged in" toggle
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
      method: "post",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();
    console.log(dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
    }
    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };
  console.log("data login", data);

  return (
    <div className="w-full min-h-screen bg-teal-900 py-20">
      <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl flex flex-col md:flex-row">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8 text-white">
          {/* JB Logo */}
          <div className="mb-6">
            <img
              src="/assets/image 180.png"
              alt="JB Logo"
              className="w-27 h-9"
            />
          </div>

          {/* Centered Text */}
          <h2 className="text-3xl font-bold mb-2 text-center">Welcome back</h2>
          <p className="text-lg mb-6 text-center">
            Enter your email to receive a one-time passcode
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={data.email}
                onChange={handleOnChange}
                required
                className="px-5 py-3 bg-white rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Password */}
            <div className="flex flex-col relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                value={data.value}
                onChange={handleOnChange}
                required
                className="px-5 py-3 bg-white rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div
                className="absolute right-4 top-1/4 transform translate-y-1/4 cursor-pointer text-xl text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>

            {/* Keep me logged in Toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="keepLoggedIn"
                checked={data.keepLoggedIn}
                onChange={handleOnChange}
                className="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
              />
              <label className="text-sm">Remember me for 30 days</label>
            </div>

            {/* Send 4-digit code Button */}
            <PrimaryButton
              text="Send 4-digit code"
              onClick={handleSubmit}
              className="w-full py-4 bg-yellow-400 rounded-lg text-teal-900 font-semibold text-lg hover:bg-yellow-500 transition-colors"
            />

            {/* Or Separator */}
            <div className="text-center font-extrabold text-white my-4">Or</div>

            {/* Apple and Google Buttons */}

            <button
              className="
    w-full py-3 rounded-lg border-2 border-cyan-950 
    bg-white text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide 
    flex items-center justify-center gap-2 
    hover:bg-gray-100 transition-colors
  "
            >
              <img
                src="/assets/Vector2.png"
                alt="Apple Logo"
                className="w-5 h-5"
              />
              Sign in with Apple ID
            </button>
            <button
              className="
    w-full py-3 rounded-lg border-2 border-cyan-950 
    bg-white text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide 
    flex items-center justify-center gap-2 
    hover:bg-gray-100 transition-colors
  "
            >
              <img
                src="/assets/Group 1000003419.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          </form>
          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm">
              Don’t Have An Account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-yellow-400 underline hover:text-yellow-500"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 p-8">
          <div className="relative h-full flex items-center justify-center">
            <img
              src="/assets/Sign Up Image.png"
              alt="Stronger Together"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bg-yellow-400 text-teal-900 font-bold text-xl px-4 py-2 rounded-lg">
              Stronger Together!
            </div>
          </div>
        </div>
      </div>

      {/* Back to Previous Page */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/")}
          className="text-yellow-400 underline hover:text-yellow-500"
        >
          Back to Previous Page
        </button>
      </div>
    </div>
  );
};

export default Login;