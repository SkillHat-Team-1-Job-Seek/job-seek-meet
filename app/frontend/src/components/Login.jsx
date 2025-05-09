import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hook/useAuth";
import { useToast } from "../hook/useToast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    keepLoggedIn: false,
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
    setIsLoading(true);

    try {
      const result = await login(data.email, data.password);
      console.log("Login result:", result);
      if (!result.success) {
        toast({
          title: "Error",
          description: result.error || "Login failed",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Success",
        description: "Login successful!",
        variant: "success",
      });

      const userData = result.user || result.data;
      // Second check: Email verification
      if (userData?.isVerified === "false") {
        console.log("User not verified, redirecting to verification");
        navigate("/verify", { state: { email: data.email } });
        return;
      }

      // Third check: Profile completion
      if (userData?.isProfileComplete === "false") {
        console.log("Profile not complete, redirecting to profile creation");
        navigate("/createProfile");
        return;
      }

      // All checks passed: go to dashboard
      console.log("All checks passed, going to dashboard");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const result = await login(data.email, data.password);

  //     // If login was successful but user is not verified
  //     if (result.success && result.user && result.user.isVerified === "false") {
  //       toast({
  //         title: "Verification Required",
  //         description: "Please verify your email to continue",
  //         variant: "warning",
  //       });

  //       navigate("/verify", { state: { email: data.email } });
  //       return;
  //     }

  //     // Normal login success flow
  //     if (result.success) {
  //       toast({
  //         title: "Success",
  //         description: "Login successful!",
  //         variant: "success",
  //       });
  //       navigate("/dashboard");
  //       return;
  //     }
  //     if (result.user?.isVerified === "false") {
  //       // Redirect to verify email
  //       navigate("/verify", { state: { email: data.email } });
  //     } else if (result.user?.isProfileComplete === "false") {
  //       console.log(result.user?.isProfileComplete === "false");
  //       // Redirect to complete profile
  //       navigate("/createProfile");
  //     } else {
  //       navigate("/dashboard");
  //       toast({
  //         title: "Error",
  //         description: result.error || "Login failed",
  //         variant: "destructive",
  //       });
  //     }
  //   } catch (error) {
  //     // Error handling
  //     console.error(error);
  //     toast({
  //       title: "Error",
  //       description: "An error occurred during login",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // if (
  //   result.error?.toLowerCase().includes("verify") ||
  //   result.error?.toLowerCase().includes("verification")
  // ) {
  //   toast({
  //     title: "Verification Required",
  //     description: "Please verify your email to continue",
  //     variant: "warning",
  //   });

  //   navigate("/verify", { state: { email: data.email } });
  //   return;
  // }

  return (
    <div className="w-full min-h-screen bg-teal-900 py-20">
      <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl flex flex-col md:flex-row">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>

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
                value={data.password}
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
              <label className="text-sm">Keep me logged in</label>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 rounded-lg text-teal-900 font-semibold text-lg hover:bg-yellow-500 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const Login = ({ toggleForm, goHome }) => {

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
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
//       const response = await fetch(
//         `${API_BASE_URL}/api/v1/login/access-token`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded", // Change to x-www-form-urlencoded
//           },
//           body: new URLSearchParams({
//             username: formData.email, // Use 'username' to follow the backend
//             password: formData.password,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Login failed");
//       }

//       const data = await response.json();
//       console.log(data);
//       localStorage.setItem("access_token", data.access_token); // Store the token
//       alert("Login Successful");
//       navigate("/"); // Redirect to home page
//     } catch (error) {
//       alert("Login failed: " + error.message);
//     }
//   };

//   return (
//     <div className="SignIn w-full min-h-screen bg-slate-800 py-20">
//       <div className="max-w-5xl mx-auto bg-teal-900 rounded-2xl p-6 relative text-white">
//         <div className="flex items-center justify-between mb-8">
//           <img src="/assets/image 103.png" alt="Logo" className="size-28" />
//           <div className="px-6 py-4 bg-white/25 rounded-3xl outline outline-4 outline-teal-600 backdrop-blur-lg text-center">
//             <h2 className="text-teal-600 text-4xl font-black">
//               Stronger Together!
//             </h2>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           <div className="flex flex-col">
//             <label className="text-white text-base mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-white text-base mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="px-5 py-3 bg-gray-100 rounded-2xl text-base text-black"
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 font-semibold text-base hover:bg-yellow-400 transition-colors"
//           >
//             Log In
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
//             Don’t Have An Account?{" "}
//             <button
//               onClick={() => navigate("/signup")}
//               className="text-yellow-300 underline hover:text-yellow-400"
//             >
//               Sign Up
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

// export default Login;
