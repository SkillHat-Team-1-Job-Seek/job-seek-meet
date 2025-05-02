import React from 'react';

const PeerConnections = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Peer-to-Peer Connection</h2>
          <p className="text-sm text-gray-600">Engage in one and one chats and group discussion</p>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm">
          Connect
        </button>
      </div>

      {/* Content Section: 1-on-1 Matches and Community Groups */}
      <div className="grid grid-cols-2 gap-6">
        {/* 1-on-1 Matches */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">1-on-1 matches</h3>
          <div className="space-y-4">
            {/* Match 1: John Smith */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">John Smith</p>
                  <p className="text-sm text-gray-600">Software engineer, Canada</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-800 px-4 py-1 rounded-lg text-sm">
                Chat
              </button>
            </div>

            {/* Match 2: Esther Howard */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Esther Howard</p>
                  <p className="text-sm text-gray-600">Market specialist, Maryland</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-800 px-4 py-1 rounded-lg text-sm">
                Chat
              </button>
            </div>

            {/* Match 3: Jacob Jones */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Jacob Jones</p>
                  <p className="text-sm text-gray-600">Product designer, Canada</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-800 px-4 py-1 rounded-lg text-sm">
                Chat
              </button>
            </div>
          </div>
        </div>

        {/* Community Groups */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">Community Groups</h3>
          <div className="space-y-4">
            {/* Group 1: The VA’s */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-800">W</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">The VA’s</p>
                  <p className="text-sm text-gray-600">70 members</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-800 px-4 py-1 rounded-lg text-sm">
                Join
              </button>
            </div>

            {/* Group 2: UIUX nexus */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-800">🦅</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">UIUX nexus</p>
                  <p className="text-sm text-gray-600">54 members</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-800 px-4 py-1 rounded-lg text-sm">
                Join
              </button>
            </div>

            {/* Group 3: Dev hub */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-800">🔴</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Dev hub</p>
                  <p className="text-sm text-gray-600">31 members</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-800 px-4 py-1 rounded-lg text-sm">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerConnections;