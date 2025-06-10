import { Link } from "react-router-dom";;

/**
 * @typedef {Object} ProfileCardProps
 * @property {string} name
 * @property {string} profession
 * @property {string} proUrl
 * @property {number} [connectionCount]
 * @property {boolean} [showMessageButton]
 * @property {number} [matchScore]
 * @property {string} [location]
 * @property {string} [tag]
 * @property {number} [profileId]
 */

export const ProfileCard = ({
  name,
  role,
  imageUrl,
  matchScore,
  location,
  tag,
  profileId,
  onConnect,
  isConnecting,
  connectionSent,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* Profile header with image and name */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={imageUrl || "https://via.placeholder.com/150"}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-medium text-lg">{name}</h3>
            {location && (
              <div className="flex items-center text-gray-500 text-sm">
                <span className="inline-block mr-1">📍</span> {location}
              </div>
            )}
          </div>
        </div>

        {/* Tag/Industry */}
        <div className="mb-3">
          <span className="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm">
            {tag}
          </span>
          <span className="ml-2 inline-block bg-green-100 rounded-full px-3 py-1 text-sm">
            {matchScore}% Match
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-auto p-4 pt-0 flex gap-2">
        <button
          onClick={() => onConnect(profileId)}
          disabled={isConnecting || connectionSent}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md transition-colors"
        >
          {isConnecting
            ? "Connecting..."
            : connectionSent
            ? "Request Sent"
            : "Connect"}
        </button>
        <Link
          to={`/matches/${profileId}`}
          className="flex-1 border border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-md text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
// export function ProfileCard({
//   name,
//   profession,
//   profileImageUrl,
//   connectionCount,
//   showMessageButton = false,
//   matchScore,
//   location,
//   tag,
//   profileId,
//   onConnect,
//   isConnecting = false,
//   connectionSent = false,
// }) {
//   const handleConnectionClick = () => {
//     if (typeof onConnect === "function") {
//       onConnect(profileId);
//     } else {
//       console.warn("onConnect function not provided to ProfileCard");
//     }
//   };
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
//       <div className="flex items-start gap-4">
//         <img
//           src={profileImageUrl}
//           alt={name}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         <div className="flex-1">
//           <h3 className="font-medium text-gray-900">{name}</h3>
//           <p className="text-sm text-gray-500">{profession}</p>

//           {location && (
//             <p className="text-xs text-gray-500 mt-1">
//               <span className="inline-block">📍 {location}</span>
//             </p>
//           )}

//           {tag && (
//             <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded mt-1 mr-2">
//               {tag}
//             </span>
//           )}

//           {matchScore !== undefined && (
//             <div className="mt-1 flex items-center">
//               <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded">
//                 {matchScore}% Match
//               </span>
//             </div>
//           )}

//           {connectionCount !== undefined && (
//             <p className="text-sm text-gray-400 mt-1">
//               {connectionCount} connections
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="mt-4 flex gap-2">
//         <button
//           className={`flex-1 px-4 py-2 rounded-md text-sm flex items-center justify-center transition-colors
//             ${
//               connectionSent
//                 ? "bg-green-100 text-green-800"
//                 : isConnecting
//                 ? "bg-gray-200 text-gray-500"
//                 : "bg-yellow-400 hover:bg-yellow-500 text-black"
//             }`}
//           onClick={handleConnectionClick}
//           disabled={isConnecting || connectionSent}
//         >
//           {" "}
//           {isConnecting ? (
//             <>
//               <Loader2 className="h-4 w-4 mr-1 animate-spin" /> Connecting...
//             </>
//           ) : connectionSent ? (
//             <>
//               <Check className="h-4 w-4 mr-1" /> Requested
//             </>
//           ) : (
//             "Connect"
//           )}
//         </button>
//         {showMessageButton ? (
//           <button className="flex-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-colors">
//             Message
//           </button>
//         ) : (
//           <Link
//             to={`/profile/${profileId || 1}`}
//             className="flex-1 bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors text-center"
//           >
//             View Profile
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }
