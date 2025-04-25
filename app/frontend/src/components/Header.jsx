import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
<div className="w-full h-40 flex justify-around items-center px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <img src="/assets/image 103.png" alt="Logo" className="w-20 h-20" />

      {/* Slider */}
      <div className="w-72 h-3 bg-zinc-200 rounded-2xl flex items-center relative">
        {/* Progress Bar */}
        <div className="w-[56%] h-full bg-gradient-to-r from-teal-600 to-yellow-300 rounded-2xl flex justify-between items-center px-4">
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>

        {/* Slider Indicator */}
        <div className="absolute left-[56%] transform -translate-x-1/2">
          <div className="relative">
            {/* Indicator Circle */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.990234" y="1" width="30" height="30" rx="15" fill="#FCFCFC" stroke="#32A1B0" strokeWidth="2"/>
              <path d="M16 10 V18" stroke="#03363D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {/* Popover Label */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-52px] flex flex-col items-center">
              <div className="px-2 py-1 bg-gradient-to-br from-teal-600 to-yellow-300 rounded-lg">
                <p className="text-neutral-50 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight">
                  56% Profile Completed
                </p>
              </div>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                <path d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z" fill="url(#paint0_linear_3002_67)"/>
                <defs>
                  <linearGradient id="paint0_linear_3002_67" x1="8.05205" y1="5.12132" x2="4.0799" y2="-0.611979" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#138797"/>
                    <stop offset="1" stopColor="#FCDB32"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Button */}
      <button
        onClick={() => navigate("/editProfile")}
        className="w-44 px-8 py-4 rounded-xl border-2 border-teal-600 text-teal-900 font-semibold bg-white hover:bg-gray-100 transition-colors"
      >
        Edit Profile
      </button>
    </div>
    </div>
  );
};

export default Header;