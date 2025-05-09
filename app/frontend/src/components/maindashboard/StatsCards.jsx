import React from "react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Card 1: Potential Matches */}
      <div
        className="
    flex flex-col justify-center items-center p-6 sm:p-8 w-full sm:w-[280px] md:w-[300px] lg:w-[360px] min-h-[150px] 
    bg-white rounded-tr-3xl rounded-bl-3xl 
    border-2 border-t-teal-600 border-r-yellow-400 border-b-yellow-400 border-l-teal-600 
    shadow-md hover:shadow-lg transition-shadow
  "
      >
        <h2 className="text-3xl font-bold text-gray-800">10</h2>
        <p className="text-sm text-gray-600 mt-2">POTENTIAL MATCHES</p>
      </div>

      {/* Card 2: 1 on 1 Peer(s) */}
      <div
        className="
    flex flex-col justify-center items-center p-6 sm:p-8 w-full sm:w-[280px] md:w-[300px] lg:w-[360px] min-h-[150px] 
    bg-white rounded-tr-3xl rounded-bl-3xl 
    border-2 border-t-teal-600 border-r-yellow-400 border-b-yellow-400 border-l-teal-600 
    shadow-md hover:shadow-lg transition-shadow
  "
      >
        <h2 className="text-3xl font-bold text-gray-800">8</h2>
        <p className="text-sm text-gray-600 mt-2">1 ON 1 PEER(S)</p>
      </div>

      {/* Card 3: Group Joined */}
      <div
        className="
    flex flex-col justify-center items-center p-6 sm:p-8 w-full sm:w-[280px] md:w-[300px] lg:w-[360px] min-h-[150px] 
    bg-white rounded-tr-3xl rounded-bl-3xl 
    border-2 border-t-teal-600 border-r-yellow-400 border-b-yellow-400 border-l-teal-600 
    shadow-md hover:shadow-lg transition-shadow
  "
      >
        <h2 className="text-3xl font-bold text-gray-800">4</h2>
        <p className="text-sm text-gray-600 mt-2">GROUP JOINED</p>
      </div>

      {/* <div className="bg-white py-20 p-4 rounded-lg shadow border-2 border-t-teal-600 border-r-yellow-400 border-b-yellow-400 border-l-teal-600 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800">5</h2>
        <p className="text-sm text-gray-600">GROUP JOINED</p>
      </div> */}

      {/* Card 4: Saved Jobs */}
      <div
        className="
    flex flex-col justify-center items-center p-6 sm:p-8 w-full sm:w-[280px] md:w-[300px] lg:w-[360px] min-h-[240px] 
    bg-white rounded-tr-3xl rounded-bl-3xl 
    border-2 border-t-teal-600 border-r-yellow-400 border-b-yellow-400 border-l-teal-600 
    shadow-md hover:shadow-lg transition-shadow
  "
      >
        <h2 className="text-3xl font-bold text-gray-800">5</h2>
        <p className="text-sm text-gray-600 mt-2">SAVED JOBS</p>
      </div>
    </div>
  );
};

export default StatsCards;
