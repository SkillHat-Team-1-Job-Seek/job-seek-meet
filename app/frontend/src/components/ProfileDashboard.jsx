import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "./SideBar";
import Header from './Header';
import StatsCards from './StatsCards';
import Matches from './Matches';
import PeerConnections from './PeerConnections';

const ProfileDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (e.g., clear auth token)
    navigate('/login');
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
                  {/* Header */}
                  <Header />
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Centered Welcome Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome back Malik!
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Here’s what’s new for you today
          </p>
          {/* Slider */}
          <div className="mb-20"></div>
          <div className="w-72 h-3 bg-zinc-200 rounded-2xl flex items-center relative mx-auto">
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
        </div>

        {/* Stats Cards Section */}
        <StatsCards />

        {/* Other Sections */}
        <div className="space-y-6">
          <Matches />
          <PeerConnections />
        </div>
      </div>
    </div>
        </div>
  );
};

export default ProfileDashboard;
