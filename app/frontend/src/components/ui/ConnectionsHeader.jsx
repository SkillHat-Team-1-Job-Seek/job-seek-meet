import React from 'react';

const ConnectionsHeader = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-12">
      {/* My 1:1 Connection Header */}
      <div className="flex items-center mb-4">
        {/* Centered Text Container */}
        <div className="flex-1 text-center">
          <h2 className="text-5xl font-bold text-gray-800">My 1:1 Connection</h2>
          <p className="text-sm text-gray-600 mt-2">
            Your circle of support—engage, grow, thrive together.
          </p>
        </div>
        {/* Active / Inactive Toggle */}
        <div className="flex items-center space-x-2 ml-auto">
          <div className="w-4 h-4 bg-green-600 rounded-full"></div>
          <span className="text-sm text-gray-600">Active / Inactive</span>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      {/* Placeholder for connection list */}
      <div className="text-gray-600">Connection list placeholder</div>
    </div>
  );
};

export default ConnectionsHeader;