import React from 'react';

const ProfileCard = ({ name, role, experience }) => {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-center">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>

      {/* Content */}
      <div className="p-10 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{role}</p>
        <p className="text-sm text-gray-500 mb-5">{experience}</p>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;