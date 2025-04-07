
import React from "react";

const HeroSection = () => {
    return (
      <section className="w-full bg-white">
        {/* Text content container
        <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Welcome to Job Seekers Community
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
            Connecting job seekers with opportunities.
          </p>
        </div> */}
  
        {/* Full-width image */}
        <div className="w-full">
          <img
            className="w-full h-auto object-cover"
            src="/assets/unsplash_g1Kr4Ozfoac.png"
            alt="Landing Page Banner"
          />
        </div>
      </section>
    );
  };  

  export default HeroSection;