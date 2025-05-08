import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle dropdown item clicks
  const handleDropdownItemClick = (action) => {
    setIsDropdownOpen(false); // Close dropdown after clicking an item
    if (action === "profileAccess") {
      navigate("/profile"); // Adjust to your profile access route
    } else if (action === "editProfile") {
      navigate("/editProfile"); // Adjust to your edit profile route
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-6">
      {/* Logo */}
      <img src="/assets/image 180.png" alt="JB Logo" className="w-27 h-9" />

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/2">
        <svg
          className="w-5 h-5 text-gray-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          type="text"
          placeholder="Job Title, Keywords, or Company name"
          className="bg-transparent outline-none flex-1 text-gray-700"
        />
        <svg
          className="w-5 h-5 text-gray-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.243l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243 4.243M12 12l-4.243-4.243m4.243 4.243l4.243-4.243M12 12l4.243 4.243M12 12l-4.243 4.243"
          />
        </svg>
        <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg">
          Search
        </button>
      </div>

      {/* Notification and User Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        {/* User Profile with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src="/assets/Malik Mustapha.png"
              alt="Malik Mustapha"
              className="w-16 h-16 rounded-full border-4 border-white"
            />
            <div>
              <p className="font-semibold text-gray-700">Malik Mustapha</p>
              <p className="text-sm text-gray-500">Business Analyst</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="flex items-center px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 cursor-pointer"
                  onClick={() => handleDropdownItemClick("profileAccess")}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Profile Access
                </li>
                <li
                  className="flex items-center px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 cursor-pointer"
                  onClick={() => handleDropdownItemClick("editProfile")}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit Profile
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;




// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const DashboardHeader = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Handle dropdown item clicks
//   const handleDropdownItemClick = (action) => {
//     setIsDropdownOpen(false); // Close dropdown after clicking an item
//     if (action === "profileAccess") {
//       navigate("/profile"); // Adjust to your profile access route
//     } else if (action === "editProfile") {
//       navigate("/editProfile"); // Adjust to your edit profile route
//     }
//   };

//   return (
//     <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-6">
//       {/* Logo */}
//       <img src="/assets/image 180.png" alt="JB Logo" className="w-27 h-9" />

//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/2">
//         <svg
//           className="w-5 h-5 text-gray-500 mr-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
//           />
//         </svg>
//         <input
//           type="text"
//           placeholder="Job Title, Keywords, or Company name"
//           className="bg-transparent outline-none flex-1 text-gray-700"
//         />
//         <svg
//           className="w-5 h-5 text-gray-500 mr-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M17.657 16.243l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243 4.243M12 12l-4.243-4.243m4.243 4.243l4.243-4.243M12 12l4.243 4.243M12 12l-4.243 4.243"
//           />
//         </svg>
//         <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg">
//           Search
//         </button>
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

//         {/* User Profile with Dropdown */}
//         <div className="relative" ref={dropdownRef}>
//           <div
//             className="flex items-center space-x-2 cursor-pointer"
//             onClick={toggleDropdown}
//           >
//             <img
//               src="/assets/Malik Mustapha.png"
//               alt="Malik Mustapha"
//               className="w-16 h-16 rounded-full border-4 border-white"
//             />
//             <div>
//               <p className="font-semibold text-gray-700">Malik Mustapha</p>
//               <p className="text-sm text-gray-500">Business Analyst</p>
//             </div>
//           </div>

//           {/* Dropdown Menu */}
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-10">
//               <ul className="py-2">
//                 <l
//                   className="flex items-center px-4 py-2 text-white custom-teal-2 hover:bg-teal-700 cursor-pointer"
//                   onClick={() => handleDropdownItemClick("profileAccess")}
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   Profile Access
//                 </li>
//                 <li
//                   className="flex items-center px-4 py-2 text-white custom-teal-2 hover:bg-teal-700 cursor-pointer"
//                   onClick={() => handleDropdownItemClick("editProfile")}
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                     />
//                   </svg>
//                   Edit Profile
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;



// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";

// // const DashboardHeader = () => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);

// //   // Toggle dropdown visibility
// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // Handle dropdown item clicks
// //   const handleDropdownItemClick = (action) => {
// //     setIsDropdownOpen(false); // Close dropdown after clicking an item
// //     if (action === "logout") {
// //       // Perform logout logic (e.g., clear token, redirect to login)
// //       localStorage.removeItem("authToken"); // Example: clearing auth token
// //       navigate("/login");
// //     } else if (action === "profile") {
// //       navigate("/dashboard"); // Adjust to your profile route
// //     } else if (action === "settings") {
// //       navigate("/settings"); // Adjust to your settings route
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-6">
// //       {/* Logo */}
// //       <img src="/assets/image 180.png" alt="JB Logo" className="w-27 h-9" />

// //       {/* Search Bar */}
// //       <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/2">
// //         <svg
// //           className="w-5 h-5 text-gray-500 mr-2"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
// //           />
// //         </svg>
// //         <input
// //           type="text"
// //           placeholder="Job Title, Keywords, or Company name"
// //           className="bg-transparent outline-none flex-1 text-gray-700"
// //         />
// //         <svg
// //           className="w-5 h-5 text-gray-500 mr-2"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M17.657 16.243l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243 4.243M12 12l-4.243-4.243m4.243 4.243l4.243-4.243M12 12l4.243 4.243M12 12l-4.243 4.243"
// //           />
// //         </svg>
// //         <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg">
// //           Search
// //         </button>
// //       </div>

// //       {/* Notification and User Profile */}
// //       <div className="flex items-center space-x-4">
// //         {/* Notification Bell */}
// //         <svg
// //           className="w-6 h-6 text-gray-700"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
// //           />
// //         </svg>

// //         {/* User Profile with Dropdown */}
// //         <div className="relative" ref={dropdownRef}>
// //           <div
// //             className="flex items-center space-x-2 cursor-pointer"
// //             onClick={toggleDropdown}
// //           >
// //             <img
// //               src={"/assets/Malik Mustapha.png"}
// //               alt="Malik Mustapha"
// //               className="w-16 h-16 rounded-full border-4 border-white"
// //             />
// //             <div>
// //               <p className="font-semibold text-gray-700">Malik Mustapha</p>
// //               <p className="text-sm text-gray-500">Business Analyst</p>
// //             </div>
// //           </div>

// //           {/* Dropdown Menu */}
// //           {isDropdownOpen && (
// //             <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
// //               <ul className="py-2">
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
// //                   onClick={() => handleDropdownItemClick("profile")}
// //                 >
// //                   View Profile
// //                 </li>
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
// //                   onClick={() => handleDropdownItemClick("settings")}
// //                 >
// //                   Settings
// //                 </li>
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
// //                   onClick={() => handleDropdownItemClick("logout")}
// //                 >
// //                   Logout
// //                 </li>
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardHeader;



