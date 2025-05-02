import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-6">
      {/* Logo */}
      <img src="/assets/image 103.png" alt="Logo" className="w-20 h-20" />

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

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <p className="font-semibold text-gray-700">Malik Mustapha</p>
            <p className="text-sm text-gray-500">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
