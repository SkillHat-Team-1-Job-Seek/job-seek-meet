import React from 'react';

const Matches = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Profile Matches</h2>
          <p className="text-sm text-gray-600">You’ve been matched with 3 new professionals</p>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm">
          Meet Your Buddy
        </button>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* Card 1: Jane Queen
        <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-800">Rita Daniels</h3>
          <p className="text-sm text-gray-600">Product Designer</p>
          <p className="text-sm text-gray-500 mb-4">Has had 4 years experience</p>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm">
            View
          </button>
        </div> */}

    {/* Card 1: Jane Queen */}
    <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
      <img
        src={"/assets/Rita Daniels.png"}
        alt="Jane Queen"
        className="w-24 h-24 rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">Rita Daniels</h3>
      <p className="text-sm text-gray-600">Product Designer</p>
      <p className="text-sm text-gray-500 mb-4">Has had 4 years experience</p>
      <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm">
        View
      </button>
    </div>


        {/* Card 2: Femi Zacc */}
        <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
        <img
        src={"/assets/Femi Zacc.png"}
        alt="Jane Queen"
        className="w-24 h-24 rounded-lg mb-4"
      />
          <h3 className="text-lg font-semibold text-gray-800">Femi Zacc</h3>
          <p className="text-sm text-gray-600">Frontend Dev</p>
          <p className="text-sm text-gray-500 mb-4">Has had 3 years experience</p>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm">
            View
          </button>
        </div>

        {/* Card 3: Mary John */}
        <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
        <img
        src={"/assets/Mary John.png"}
        alt="Jane Queen"
        className="w-24 h-24 rounded-lg mb-4"
      />
          <h3 className="text-lg font-semibold text-gray-800">Mary John</h3>
          <p className="text-sm text-gray-600">Business Analyst</p>
          <p className="text-sm text-gray-500 mb-4">Has had 5+ years experience</p>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Matches;