// import React from 'react';

// const ProfileCard = ({ name, role, experience }) => {
//   return (
//     <div className="bg-white rounded-lg shadow flex flex-col items-center">
//       {/* Image Placeholder */}
//       <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>

//       {/* Content */}
//       <div className="p-10 flex flex-col items-center">
//         <h3 className="text-lg font-semibold text-gray-800 mb-5">{name}</h3>
//         <p className="text-sm text-gray-600 mb-2">{role}</p>
//         <p className="text-sm text-gray-500 mb-5">{experience}</p>
//         <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm">
//           View Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;


// import React from 'react';

// const ProfileCard = ({
//   name, title, skills, location, matchScore,sharedInterests, image
//   // name = 'James King',
//   // title = 'Frontend Developer',
//   // skills = 'React, Tailwind, Accessibility',
//   // location = 'Toronto, Canada',
//   // matchScore = '88% Match',
//   // sharedInterests = 'Remote Work, Open Source',
//   // image = '/assets/James King.png', // Replace with the actual path to your image
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow w-80 h-96 relative flex flex-col">
//       {/* Profile Image */}
//       <img
//         src={image}
//         alt={name}
//         className="w-16 h-16 rounded-lg border-4 border-white absolute -top-4 left-4"
//       />

//       {/* Content */}
//       <div className="p-4 pt-16 flex flex-col items-start flex-grow justify-between">
//         <div>
//           <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
//           <p className="text-sm text-gray-600 mb-1">
//             <span className="font-semibold">Title: </span>{title}
//           </p>
//           <p className="text-sm text-gray-600 mb-1">
//             <span className="font-semibold">Top Skills: </span>{skills}
//           </p>
//           <p className="text-sm text-cyan-500 mb-1">
//             <span className="font-semibold text-gray-600">Location: </span>{location}
//           </p>
//           <p className="text-sm text-cyan-500 mb-1">
//             <span className="font-semibold text-gray-600">Match Score: </span>{matchScore}
//           </p>
//           <p className="text-sm text-gray-600 mb-4">
//             <span className="font-semibold">Shared Interests: </span>{sharedInterests}
//           </p>
//         </div>
//         <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm self-start">
//           View Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;

import React from 'react';

const ProfileCard = ({name, title, skills, location, matchScore,sharedInterests, image}) => {
  return (
    <div className="bg-white rounded-lg shadow w-80 h-96 relative flex flex-col">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-lg border-4 border-white absolute -top-4 left-4"
      />

      {/* Content */}
      <div className="p-4 pt-16 flex flex-col items-start flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-semibold">Title: </span>{title}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-semibold">Top Skills: </span>{skills}
          </p>
          <p className="text-sm text-cyan-500 mb-3">
            <span className="font-semibold text-gray-600">Location: </span>{location}
          </p>
          <p className="text-sm text-cyan-500 mb-3">
            <span className="font-semibold text-gray-600">Match Score: </span>{matchScore}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Shared Interests: </span>{sharedInterests}
          </p>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm self-start">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;