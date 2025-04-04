import React from "react";

const NavigationBar = ({ navigateTo }) => {
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <img className="w-20 h-20" src="/assets/image 103.png" alt="Logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center space-x-12 text-cyan-950 text-2xl font-bold font-['Poppins']">
          <span className="cursor-pointer hover:text-teal-800">Home</span>
          <span className="cursor-pointer hover:text-teal-800">About Us</span>
          <span className="cursor-pointer hover:text-teal-800">Features</span>
          <span className="cursor-pointer hover:text-teal-800">How It Works</span>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-x-4">
          <button
            onClick={() => navigateTo("login")}
            className="px-6 py-2 border border-black rounded-md text-l text-black hover:bg-gray-200"
          >
            Log in
          </button>
          <button
            onClick={() => navigateTo("signup")}
            className="px-6 py-2 bg-yellow-300 text-black rounded-md text-l hover:bg-yellow-400"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon (Optional) */}
        <div className="md:hidden">
          <button className="text-black text-3xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;


// const NavigationBar = ({ navigateTo }) => {
//     return (
//         <nav className="bg-white shadow-md p-4 flex justify-between items-center">
     
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
//           {/* Logo */}
//           <img className="w-20 h-20" src="/assets/image 103.png" alt="Logo" />
  
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex flex-grow justify-center space-x-12 text-cyan-950 text-2xl font-bold font-['Poppins']">
//           <span className="cursor-pointer hover:text-teal-800">Home</span>
//           <span className="cursor-pointer hover:text-teal-800">About Us</span>
//           <span className="cursor-pointer hover:text-teal-800">Features</span>
//           <span className="cursor-pointer hover:text-teal-800">How It Works</span>
//         </div>
  
//           {/* Buttons */}
//           <div className="hidden md:flex gap-x-4">
//             <button
//               onClick={() => navigateTo("login")}
//               className="px-6 py-2 border border-black rounded-md text-xl font-semibold text-black hover:bg-gray-200"
//             >
//               Log in
//             </button>
//             <button
//               onClick={() => navigateTo("signup")}
//               className="px-6 py-2 bg-yellow-300 text-black rounded-md text-xl font-semibold hover:bg-yellow-400"
//             >
//               Sign Up
//             </button>
//           </div>
  
//           {/* Mobile Menu Icon (Optional) */}
//           <div className="md:hidden">
//             <button className="text-black text-3xl">&#9776;</button>
//           </div>
//         </div>
//       </nav>


    //   <nav className="w-full flex justify-between items-center px-16 py-6 bg-gray-100">
    //     {/* Logo */}
    //     <img className="w-20 h-20" src="/assets/image 103.png" alt="Logo" />
  
    //     {/* Desktop Navigation */}
    //     <NavigationBar navigateTo={navigateTo} />
        
    //     <div className="hidden md:flex flex-grow justify-center space-x-12 text-cyan-950 text-2xl font-bold font-['Poppins']">
    //       <span className="cursor-pointer hover:text-teal-800">Home</span>
    //       <span className="cursor-pointer hover:text-teal-800">About Us</span>
    //       <span className="cursor-pointer hover:text-teal-800">Features</span>
    //       <span className="cursor-pointer hover:text-teal-800">How It Works</span>
    //     </div>
  
    //     {/* Auth Buttons */}
    //     <div className="flex items-center space-x-4">
    //       <button
    //         onClick={() => navigateTo("login")}
    //         className="px-6 py-3 border border-black text-xl font-bold text-black rounded-md hover:bg-gray-200 transition"
    //       >
    //         Log in
    //       </button>
    //       <button
    //         onClick={() => navigateTo("signup")}
    //         className="px-6 py-3 bg-yellow-300 text-black rounded-md text-xl font-semibold hover:bg-yellow-400 transition"
    //       >
    //         Sign Up
    //       </button>
    //     </div>
    //   </nav>
//     );
//   };
  
//   export default NavigationBar;