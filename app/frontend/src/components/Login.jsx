import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Context from "../context";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: " ",
    password: "",
  });

  const navigate = useNavigate();
  // const { fetchUserDetails } = useContext(Context);

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
      fetchUserDetails();
    }
    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };
  console.log("data login", data);

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
              value={data.email}
              onChange={handleOnChange}
              required
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-white text-base mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your Password"
              value={data.value}
              onChange={handleOnChange}
              required
              className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black w-full pr-12"
            />
            <div
              className="absolute right-4 top-1/2 transform translate-y-1/3 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </div>
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
