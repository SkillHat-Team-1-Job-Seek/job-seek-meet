import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SignUpForm = ({ toggleForm }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Sign-up failed");
      }

      console.log("User registered successfully:", data);
      alert(`Sign Up Successful! ${data.message}`);
      navigate("/"); // ✅ this does the redirect
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Sign-up failed: ${error.message}`);
    }
  };

  return (
    <div className="SignUp w-full min-h-screen bg-slate-800 py-20">
      <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl p-6 relative text-white">
        <div className="flex items-center justify-between mb-8">
          <img src="/assets/image 103.png" alt="Logo" className="size-28" />
          <div className="px-6 py-4 bg-white/25 rounded-3xl outline outline-4 outline-teal-600 backdrop-blur-lg text-center">
            <h2 className="text-teal-600 text-4xl font-black">
              Join the Movement!
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-white text-base mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-base mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-base mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 font-semibold text-base hover:bg-yellow-400 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center items-center my-6">
          <span className="text-white text-2xl font-bold">or</span>
        </div>

        <div className="flex justify-center gap-8 mb-6">
          <button className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-teal-600 text-cyan-950 font-semibold bg-white hover:bg-gray-100 transition-colors">
            Apple
          </button>
          <button className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-teal-600 text-cyan-950 font-semibold bg-white hover:bg-gray-100 transition-colors">
            Google
          </button>
        </div>

        <div className="text-center text-white text-lg">
          <p>
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="text-yellow-300 underline hover:text-yellow-400">
              Sign In
            </button>
          </p>
        </div>

        <div className="text-center mt-4">
          <button onClick={() => navigate("/")}>Back to Previous Page</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
