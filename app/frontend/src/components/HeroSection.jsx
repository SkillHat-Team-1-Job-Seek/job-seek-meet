import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Background Image with Overlay */}
      <div className="relative w-full min-h-screen">
        <img
          className="w-full h-full object-cover absolute inset-0"
          src="/assets/unsplash_g1Kr4Ozfoac.png"
          alt="Landing Page Banner"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Text Content Overlaid */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-9">
          {/* Headline */}
          <div className="backdrop-blur-sm px-4">
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
          <button
            onClick={() => console.log('Join For Free')}
            className="w-44 px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide hover:bg-yellow-400 transition"
          >
            Join For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




// const HeroSection = () => {
//   return (
//     <section className="relative w-full bg-white">
//       {/* Background Image with Overlay */}
//       <div className="relative w-full">
//         <img
//           className="w-full h-auto object-cover"
//           src="/assets/unsplash_g1Kr4Ozfoac.png"
//           alt="Landing Page Banner"
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Text Content Overlaid */}
//       <div className="absolute top-1/2 left-1/2 w-full px-4 transform -translate-x-1/2 -translate-y-1/2">
//         <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-9">
//           {/* Headline */}
//           <div className="text-center backdrop-blur-sm px-4">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Poppins'] tracking-wider text-gray-50 leading-tight">
//               Your <br />
//               <span className="text-teal-600">Community-Powered</span>{' '}
//               <span className="text-gray-50">Career Space</span>
//             </h1>
//           </div>

//           {/* Subtext */}
//           <p className="w-full max-w-2xl text-center text-gray-50 text-lg sm:text-xl md:text-2xl font-normal font-['Poppins'] px-4">
//             Finding a job is hard—but having a community makes it easier.
//           </p>

//           {/* Call to Action Button */}
//           <button
//             onClick={() => console.log('Join For Free')}
//             className="w-44 px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide hover:bg-yellow-400 transition"
//           >
//             Join For Free
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// const HeroSection = () => {
//     return (
//       <section className="w-full bg-white">
//         {/* Text content container
//         <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
//             Welcome to Job Seekers Community
//           </h1>
//           <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
//             Connecting job seekers with opportunities.
//           </p>
//         </div> */}
  
//         {/* Full-width image */}
//         <div className="w-full">
//           <img
//             className="w-full h-auto object-cover"
//             src="/assets/unsplash_g1Kr4Ozfoac.png"
//             alt="Landing Page Banner"
//           />
//         </div>
//       </section>
//     );
//   };  

//   export default HeroSection;