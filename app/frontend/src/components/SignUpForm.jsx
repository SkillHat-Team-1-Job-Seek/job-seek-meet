import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./ui/PrimaryButton";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassowrd, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log("apiSummary.signUp.url", apiSummary.signUp.url);
      const dataResponse = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/verify");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check your password ");
    }
  };



  return (
    <div className="w-full min-h-screen bg-teal-900 py-20">
      <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl flex flex-col md:flex-row">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8 text-white">
          {/* JB Logo */}
          <div className="mb-6">
            <img
              src="/assets/image 104.png"
              alt="JB Logo"
              className="w-16 h-16"
            />
          </div>

          {/* Centered Text */}
          <h2 className="text-3xl font-bold mb-2 text-center">
            Create an Account
          </h2>
          <p className="text-lg mb-6 text-center">
            Join the community that grows with you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="px-5 py-3 bg-white rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="px-5 py-3 bg-white rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.value}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="px-5 py-3 bg-white rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <div
                className="absolute right-4 top-1/3 transform -translate-y-1/3 cursor-pointer text-l text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">
                At least 8 characters (1 capital, 1 number, 1 special).
              </p>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col relative">
              <input
                type={showConfirmPassowrd ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your Password"
                className="px-5 py-3 bg-white rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <div
                className="absolute right-4 top-1/4 transform translate-y-1/4 cursor-pointer text-l text-gray-400"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <span>{showConfirmPassowrd ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
              />
              <label className="text-sm">
                I agree to the{" "}
                <span className="underline">Terms and Conditions</span>
              </label>
            </div>

            <PrimaryButton
              text="Sign Up"
              onClick={() => navigate("/createProfile")}
              className="w-full py-4 bg-yellow-400 rounded-lg text-teal-900 font-semibold text-lg hover:bg-yellow-500 transition-colors"
            />
          </form>

          {/* Apple and Google Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <button className="w-1/2 py-3 rounded-lg border-2 border-teal-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-teal-800 transition-colors">
              <img
                src="/assets/Vector.png"
                alt="Apple Logo"
                className="w-5 h-5"
              />
              Apple
            </button>
            <button className="w-1/2 py-3 rounded-lg border-2 border-teal-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-teal-800 transition-colors">
              <img
                src="/assets/Group 1000003419.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
              Google
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-yellow-400 underline hover:text-yellow-500"
              >
                Sign In
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

export default SignUpForm;