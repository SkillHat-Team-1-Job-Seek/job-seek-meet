import React from 'react';

const SecondaryButton = ({ label, onClick }) => {
  return (
    <div
      className={`
        relative w-44 rounded-xl p-[2px]
        bg-transparent
        transition-all duration-300
      `}
    >
      <button
        data-layer="Button - Secondary"
        data-icon-placement="No Icon"
        data-size="Large"
        data-state="Default"
        className={`
          w-full px-8 py-4 rounded-xl 
          outline outline-2 outline-offset-[-2px] outline-cyan-950 
          flex justify-center items-center gap-4 
          bg-transparent text-cyan-950
          hover:bg-transparent hover:outline-2 hover:outline-custom-primary-teal 
          [background-clip:padding-box]
        `}
        onClick={onClick}
      >
        <span
          data-layer="Button"
          className="text-center text-base font-semibold font-['Poppins'] leading-7 tracking-wide"
        >
          {label}
        </span>
      </button>
    </div>
  );
};

export default SecondaryButton;