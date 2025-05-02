import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = ({ onLogout }) => {
  const location = useLocation();

  // Define the navigation links with their corresponding routes
  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Matches', path: '/matchesDashboard' },
    { name: 'Connections', path: '/connections' },
    { name: 'Messages', path: '/messages' },
    { name: 'Resources', path: '/resources' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    // <div className="w-64 bg-light-teal text-white p-4 flex flex-col h-screen">
    <div className="w-64 bg-light-teal text-white p-4 flex flex-col rounded-lg">
      {/* Navigation Links */}
      <nav className="space-y-4 flex-1">
        {navLinks.map((link) => (
          <div key={link.name} className="flex items-center justify-between">
            <Link
              to={link.path}
              className={`block text-lg p-2 rounded w-full ${
                location.pathname === link.path
                  ? 'bg-gradient-to-br from-teal-600 to-yellow-300 font-semibold'
                  : 'hover:bg-teal-700'
              }`}
            >
              {link.name}
            </Link>
            {link.name === 'Connections' && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        ))}
        <button
          onClick={onLogout}
          className="block text-lg hover:bg-teal-700 p-2 rounded w-full text-left"
        >
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;