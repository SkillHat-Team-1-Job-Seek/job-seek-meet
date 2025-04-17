import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = ({ toggleForm, goHome }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await fetch(
        `${API_BASE_URL}/api/v1/login/access-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Change to x-www-form-urlencoded
          },
          body: new URLSearchParams({
            username: formData.email, // Use 'username' to follow the backend
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem("access_token", data.access_token); // Store the token
      alert("Login Successful");
      navigate("/"); // Redirect to home page
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="SignIn w-full min-h-screen bg-slate-800 py-20">
      <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl p-6 relative text-white">
        <div className="flex items-center justify-between mb-8">
          <img src="/assets/image 103.png" alt="Logo" className="size-28" />
          <div className="px-6 py-4 bg-white/25 rounded-3xl outline outline-4 outline-teal-600 backdrop-blur-lg text-center">
            <h2 className="text-teal-600 text-4xl font-black">
              Stronger Together!
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-white text-base mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-base mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 font-semibold text-base hover:bg-yellow-400 transition-colors"
          >
            Log In
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
            Don’t Have An Account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-yellow-300 underline hover:text-yellow-400"
            >
              Sign Up
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

export default Login;