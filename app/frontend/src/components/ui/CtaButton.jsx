import React, { useState } from 'react';

const CtaButton = ({ label = 'Find Your Buddy', onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(!isClicked);
    if (onClick) onClick(e);
  };

  return (
    <div
      data-layer="cta_button"
    >
      <div
        data-layer="Property 1=Default"
        className={`w-full max-w-96 p-6 rounded-[10px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden transition-colors duration-300 hover:bg-[#138797] ${
          isClicked
            ? 'bg-teal-600 outline-yellow-300'
            : 'bg-gradient-to-br from-teal-600 to-yellow-300 outline-teal-600'
        }`}
        onClick={handleClick}
      >
        <div
          data-layer="cta_text"
          className="CtaText text-center text-cyan-950 text-xl font-semibold font-['Poppins']"
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default CtaButton;