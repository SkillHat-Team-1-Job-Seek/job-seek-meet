// import React from "react";
// import { useAuth } from "../hook/useAuth";

// const DashboardHeader = () => {
//   const { user } = useAuth();

//   // Use default values if user data is not available
//   const userName = user?.name || "Guest User";
//   const userProfession = user?.profession || "No profession set";
//   const profileImageUrl = user?.profileImageUrl;

//   return (
//     <div className="flex items-center justify-between bg-white p-4 pt-14 rounded-lg shadow mb-6">
//       {/* Logo */}
//       <img src="/assets/image 180.png" alt="Logo" className="w-27 h-9" />

//       <div className="w-60 h-2 bg-gray-200 rounded-2xl flex items-center relative">
//         {/* Progress Bar */}
//         <div className="w-[55%] h-full bg-customYellow rounded-2xl" />

//         {/* Slider Indicator */}
//         <div className="absolute left-[55%] transform -translate-x-1/2">
//           <div className="relative">
//             {/* Indicator Circle */}
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect
//                 x="1"
//                 y="1"
//                 width="22"
//                 height="22"
//                 rx="11"
//                 fill="#FCFCFC"
//                 stroke="#32A1B0"
//                 strokeWidth="2"
//               />
//               <path
//                 d="M12 8 V16"
//                 stroke="#03363D"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>

//             {/* Popover Label */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 top-[-48px] flex flex-col items-center">
//               <div className="px-2 py-1 bg-custom-primary-teal rounded-lg">
//                 <p className="text-black text-xs font-semibold font-['Poppins'] leading-tight tracking-tight whitespace-nowrap">
//                   55% Profile Completed
//                 </p>
//               </div>
//               <svg
//                 width="10"
//                 height="6"
//                 viewBox="0 0 10 6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="mt-1"
//               >
//                 <path
//                   d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z"
//                   fill="url(#paint0_linear_3002_67)"
//                 />
//                 <defs>
//                   <linearGradient
//                     id="paint0_linear_3002_67"
//                     x1="8.05205"
//                     y1="5.12132"
//                     x2="4.0799"
//                     y2="-0.611979"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#0A5D5D" />
//                     <stop offset="1" stopColor="#138797" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Notification and User Profile */}
//       <div className="flex items-center space-x-4">
//         {/* Notification Bell */}
//         <svg
//           className="w-6 h-6 text-gray-700"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//           />
//         </svg>

//         {/* User Profile */}
//         <div className="flex items-center space-x-2">
//           {profileImageUrl ? (
//             <img
//               src={profileImageUrl}
//               alt={userName}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//           ) : (
//             <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//               {userName.charAt(0).toUpperCase()}
//             </div>
//           )}
//           <div>
//             <p className="font-semibold text-gray-700">{userName}</p>
//             <p className="text-sm text-gray-500">{userProfession}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;

import React from "react";
import { useAuth } from "../hook/useAuth";

const DashboardHeader = () => {
  const { user } = useAuth();

  // Use default values if user data is not available
  const userName = user?.name || "Guest User";
  const userProfession = user?.profession || "No profession set";
  const profileImageUrl = user?.profileImageUrl;

  return (
    <div className="flex items-center justify-between bg-white p-4 pt-14 rounded-lg shadow mb-6">
      {/* Logo */}
      <img src="/assets/image 180.png" alt="Logo" className="w-27 h-9" />

      <div className="w-60 h-2 bg-gray-200 rounded-2xl flex items-center relative">
        {/* Progress Bar */}
        <div className="w-[55%] h-full bg-customYellow rounded-2xl" />

        {/* Slider Indicator */}
        <div className="absolute left-[55%] transform -translate-x-1/2">
          <div className="relative">
            {/* Indicator Circle */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="11"
                fill="#FCFCFC"
                stroke="#32A1B0"
                strokeWidth="2"
              />
              <path
                d="M12 8 V16"
                stroke="#03363D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Popover Label */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-48px] flex flex-col items-center">
              <div className="px-2 py-1 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg">
                <p className="text-black text-xs font-semibold font-['Poppins'] leading-tight tracking-tight whitespace-nowrap">
                  55% Profile Completed
                </p>
              </div>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z"
                  fill="url(#paint0_linear_3002_67)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3002_67"
                    x1="8.05205"
                    y1="5.12132"
                    x2="4.0799"
                    y2="-0.611979"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0A5D5D" />
                    <stop offset="1" stopColor="#138797" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Notification and User Profile */}
      <div className="flex items-center space-x-4">
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

export default DashboardHeader;
