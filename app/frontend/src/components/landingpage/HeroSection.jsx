// import React from "react";
// import PrimaryButton from '../ui/PrimaryButton';

// const HeroSection = ({ onJoin }) => {
//   return (
//     <section className="relative w-full bg-white">
//       {/* Background Image */}
//       <div className="relative w-full min-h-screen">
//         <img
//           className="w-full h-full object-cover absolute inset-0"
//           src="/assets/unsplash_g1Kr4Ozfoac.png"
//           alt="Landing Page Banner"
//         />

// <div className="absolute inset-0 bg-black/60" />
// <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-9">
//   {/* Headline */}
//   <div className="px-4">
//     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Poppins'] tracking-wider text-gray-50 leading-tight">
//       <span className="block">Your</span>
//       <span className="block text-teal-600">Community-Powered</span>
//       <span className="block">Career Space</span>
//     </h1>
//   </div>

//   {/* Subtext */}
//   <p className="w-full max-w-2xl text-gray-50 text-lg sm:text-xl md:text-2xl font-normal font-['Poppins'] px-4">
//     Finding a job is hard—but having a community makes it easier.
//   </p>

//   {/* Call to Action Button */}
//   <div className="flex justify-center">
//     <PrimaryButton
//       text="Join For Free"
//       onClick={onJoin}
//     />
//   </div>
// </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const HeroSection = ({ onJoin }) => {
  // Array of background images (replace with actual image paths from Figma)
  const images = [
    "/assets/unsplash_g1Kr4Ozfoac.png",
    "/assets/Frame 1686562546.png",
    "/assets/Frame 1686562548.png",
    "/assets/Frame 1686562550.png",
    "/assets/Frame 1686562549.png",
    "/assets/Frame 1686562551.png",
    "/assets/Frame 1686562547.png",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full bg-white">
      {/* Background Image Carousel */}
      <div className="relative w-full min-h-screen">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image}
            alt={`Landing Page Banner ${index + 1}`}
          />
        ))}

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-9">
          {/* Headline */}
          <div className="px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Poppins'] tracking-wider text-gray-50 leading-tight">
              <span className="block">Your</span>
              <span className="block text-teal-600">Community-Powered</span>
              <span className="block">Career Space</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="w-full max-w-2xl text-gray-50 text-lg sm:text-xl md:text-2xl font-normal font-['Poppins'] px-4">
            Finding a job is hard—but having a community makes it easier.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <PrimaryButton text="Join For Free" onClick={onJoin} />
          </div>
        </div>

        {/* Text Content Overlaid
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-9">
          {/* Headline with subtle background */}
        {/*<div className="bg-black/40 px-4 py-2 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Poppins'] tracking-wider text-gray-50 leading-tight drop-shadow-lg">
              <span className="block">Your</span>
              <span className="block text-teal-600">Community-Powered</span>
              <span className="block">Career Space</span>
            </h1>
          </div>

          {/* Subtext with subtle background */}
        {/*<div className="bg-black/40 px-4 py-2 rounded-lg">
            <p className="w-full max-w-2xl text-gray-50 text-lg sm:text-xl md:text-2xl font-normal font-['Poppins'] drop-shadow-md">
              Finding a job is hard—but having a community makes it easier.
            </p>
          </div>

          {/* Call to Action Button */}
        {/*<div className="flex justify-center">
            <PrimaryButton
              text="Join For Free"
              onClick={onJoin}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
