import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';


const NavigationBar = ({ scrollTo }) => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <img
          className="w-20 h-20"
          src="/assets/image 103.png"
          alt="JobBuddies Logo"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-12 text-cyan-950 text-2xl font-bold font-['Poppins']">
          <span
            className="cursor-pointer hover:text-teal-800"
            onClick={() => scrollTo("features")}
          >
            Features
          </span>
          <span
            className="cursor-pointer hover:text-teal-800"
            onClick={() => scrollTo("about")}
          >
            About Us
          </span>
          <span
            className="cursor-pointer hover:text-teal-800"
            onClick={() => scrollTo("howItWorks")}
          >
            How It Works
          </span>
          <span
            className="cursor-pointer hover:text-teal-800"
            onClick={() => scrollTo("faq")}
          >
            FAQs
          </span>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-x-5">

          <SecondaryButton
            label="Log in"
            onClick={() => navigate("/login")}
          />
          <PrimaryButton
            text="Sign up"
            onClick={() => navigate("/signup")}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;