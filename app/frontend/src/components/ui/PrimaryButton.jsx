// import React, { useState } from 'react';

// const PrimaryButton = ({ text, onClick }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = (e) => {
//     setIsClicked(!isClicked); // Toggle the clicked state
//     if (onClick) {
//       onClick(e); // Call the custom onClick handler if provided
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`w-44 px-8 py-4 rounded-xl flex justify-center items-center gap-4 transition-all duration-300 ${
//         isClicked
//           ? 'bg-gradient-to-br from-teal-600/50 to-yellow-300/50'
//           : 'bg-yellow-300'
//       }`}
//     >
//       <span className="text-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">
//         {text}
//       </span>
//     </button>
//   );
// };

// export default PrimaryButton;

import React, { useState } from 'react';

const PrimaryButton = ({ text, onClick }) => {
  const [isTapped, setIsTapped] = useState(false);

  const handleClick = (e) => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 300); // Revert after 300ms
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={onClick}
      className="px-8 py-4 rounded-xl flex justify-center items-center gap-4 bg-yellow-300 hover:bg-gradient-to-br hover:from-teal-600/50 hover:to-yellow-300/50 transition-all duration-300"
    >
      <span className="text-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide whitespace-nowrap">
        {text}
      </span>
    </button>
  );
};

export default PrimaryButton;