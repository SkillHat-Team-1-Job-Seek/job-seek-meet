import React from "react";

const HeroSection = ({ onJoin }) => {
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
            onClick={onJoin}
            className="w-44 px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 text-base font-semibold hover:bg-yellow-400 transition"
          >
            Join For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

