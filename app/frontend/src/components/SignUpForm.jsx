import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

import { useAuth } from "../hook/useAuth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassowrd, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "", // Changed from firstName to fullName
    email: "",
    password: "",
    confirmPassword: "", // Added confirmPassword field
    agreeToTerms: false, // Added for terms checkbox
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

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Error",
        description: "You must agree to the Terms and Conditions",
        variant: "destructive",
      });
      return;
    }

    const result = await signup({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      toast({
        title: "Success",
        description: "Account created successfully",
        variant: "success",
      });
      navigate("/verify", { state: { email: formData.email } });
    }

    // if (formData.password === formData.confirmPassword) {
    //   console.log("apiSummary.signUp.url", apiSummary.signUp.url);
    //   const dataResponse = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
    //     method: "post",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const dataApi = await dataResponse.json();

    //   if (dataApi.success) {
    //     toast.success(dataApi.message);
    //     navigate("/verify");
    //   }

    //   if (dataApi.error) {
    //     toast.error(dataApi.message);
    //   }
    // } else {
    //   toast.error("Please check your password ");
    // }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Basic validation for password match
  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   if (!formData.agreeToTerms) {
  //     alert("You must agree to the Terms and Conditions!");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         fullName: formData.fullName,
  //         email: formData.email,
  //         password: formData.password,
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log("Response data:", data);

  //     if (!response.ok) {
  //       throw new Error(data.detail || "Sign-up failed");
  //     }

  //     console.log("User registered successfully:", data);
  //     alert(`Sign Up Successful! ${data.message}`);
  //     navigate("/"); // Redirect to homepage
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     alert(`Sign-up failed: ${error.message}`);
  //   }
  // };

  return (
    <div className="w-full min-h-screen bg-teal-900 py-20">
      <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl flex flex-col md:flex-row">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
          <p className="text-lg mb-6">
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
                value={formData.password}
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

            {/* Sign Up Button */}
            {/* <button */}
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 rounded-lg text-teal-900 font-semibold text-lg hover:bg-yellow-500 transition-colors"
            >
              Sign Up
            </button>
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
              src="/assets/Sign Up Image.png" // Replace with the actual image path
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const SignUpForm = ({ toggleForm }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${API_BASE_URL}/api/v1/users/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || "Sign-up failed");
//       }

//       console.log("User registered successfully:", data);
//       alert(`Sign Up Successful! ${data.message}`);
//       navigate("/"); // ✅ this does the redirect
//     } catch (error) {
//       console.error("Error:", error.message);
//       alert(`Sign-up failed: ${error.message}`);
//     }
//   };

//   return (
//     <div className="SignUp w-full min-h-screen bg-slate-800 py-20">
//       <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl p-6 relative text-white">
//         <div className="flex items-center justify-between mb-8">
//           <img src="/assets/image 103.png" alt="Logo" className="size-28" />
//           <div className="px-6 py-4 bg-white/25 rounded-3xl outline outline-4 outline-teal-600 backdrop-blur-lg text-center">
//             <h2 className="text-teal-600 text-4xl font-black">
//               Join the Movement!
//             </h2>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           <div className="flex flex-col">
//             <label className="text-white text-base mb-1">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-white text-base mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your Email"
//               className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-white text-base mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your Password"
//               className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
//               required
//             />
//           </div>

//           <button onClick={() => navigate("/createProfile")}
//             type="submit"
//             className="px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 font-semibold text-base hover:bg-yellow-400 transition-colors"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="flex justify-center items-center my-6">
//           <span className="text-white text-2xl font-bold">or</span>
//         </div>

//         <div className="flex justify-center gap-8 mb-6">
//           <button className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-teal-600 text-cyan-950 font-semibold bg-white hover:bg-gray-100 transition-colors">
//             Apple
//           </button>
//           <button className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-teal-600 text-cyan-950 font-semibold bg-white hover:bg-gray-100 transition-colors">
//             Google
//           </button>
//         </div>

//         <div className="text-center text-white text-lg">
//           <p>
//             Already have an account?{" "}
//             <button onClick={() => navigate("/login")} className="text-yellow-300 underline hover:text-yellow-400">
//               Sign In
//             </button>
//           </p>
//         </div>

//         <div className="text-center mt-4">
//           <button onClick={() => navigate("/")}>Back to Previous Page</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;
