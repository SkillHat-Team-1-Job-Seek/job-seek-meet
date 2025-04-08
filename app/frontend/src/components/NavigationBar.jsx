import React from "react";

const NavigationBar = ({ navigateTo }) => {
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
          <span className="cursor-pointer hover:text-teal-800">Home</span>
          <span className="cursor-pointer hover:text-teal-800">Features</span>
          <span className="cursor-pointer hover:text-teal-800">About Us</span>
          <span className="cursor-pointer hover:text-teal-800">How It Works</span>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-x-5">
          <button
            onClick={() => navigateTo("login")}
            className="w-44 px-8 py-4 text-base font-semibold text-cyan-950 font-['Poppins'] border-2 border-cyan-950 rounded-xl flex items-center justify-center hover:bg-cyan-50 transition"
          >
            Log in
          </button>
          <button
            onClick={() => navigateTo("signup")}
            className="w-44 px-8 py-4 bg-yellow-300 text-base font-semibold text-cyan-950 font-['Poppins'] rounded-xl flex items-center justify-center hover:bg-yellow-400 transition"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;


// import { LogIn, UserPlus } from "lucide-react"; // optional: install lucide-react for icons

// const NavigationBar = ({ navigateTo }) => {
//   return (
//     <nav className="w-full bg-white">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
        
//         {/* Logo */}
//         <img
//           className="w-20 h-20"
//           src="/assets/image 103.png"
//           alt="JobBuddies Logo"
//         />

//         {/* Navigation Links */}
//         <div className="hidden md:flex flex-grow justify-center space-x-12 text-cyan-950 text-2xl font-bold font-['Poppins']">
//           <span className="cursor-pointer hover:text-teal-800">Home</span>
//           <span className="cursor-pointer hover:text-teal-800">Features</span>
//           <span className="cursor-pointer hover:text-teal-800">About Us</span>
//           <span className="cursor-pointer hover:text-teal-800">How It Works</span>
//         </div>

//         {/* Buttons */}
//         <div className="hidden md:flex items-center gap-x-5">
//           <button
//             onClick={() => navigateTo("login")}
//             className="w-44 px-8 py-4 text-base font-semibold text-cyan-950 font-['Poppins'] border-2 border-cyan-950 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition"
//           >
//             <LogIn size={20} /> {/* icon */}
//             Log in
//           </button>
//           <button
//             onClick={() => navigateTo("signup")}
//             className="w-44 px-8 py-4 bg-yellow-300 text-base font-semibold text-cyan-950 font-['Poppins'] rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition"
//           >
//             <UserPlus size={20} /> {/* icon */}
//             Sign up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;


// const NavigationBar = ({ navigateTo }) => {
//   return (
// <div data-layer="Frame 1686562487" className="size- left-[110px] top-[43px] absolute inline-flex justify-start items-center gap-24">
//     <img data-layer="image 108" className="size-20" src="/assets/image 103.png" />
//     <div data-layer="Frame 1686562480" className="size- flex justify-start items-center gap-8">
//       <div data-layer="Home" className="justify-start text-cyan-950 text-2xl font-bold font-['Poppins']">Home</div>
//       <div data-layer="Features" className="justify-start text-cyan-950 text-2xl font-bold font-['Poppins']">Features</div>
//       <div data-layer="About Us" className="justify-start text-cyan-950 text-2xl font-bold font-['Poppins']">About Us</div>
//       <div data-layer="How It Works" className="justify-start text-cyan-950 text-2xl font-bold font-['Poppins']">How It Works</div>
//     </div>
//     <div data-layer="Frame 1686562486" className="size- flex justify-start items-center gap-5">
//       <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
//         <div data-layer="Button" className="text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Log in</div>
//       </div>
//       <div data-layer="Button - Primary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="w-44 px-8 py-4 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//         <div data-layer="Button" className="text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Sign up</div>
//       </div>
//     </div>
//   </div>

//     // <nav className="w-full">
//     //   <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
//     //     {/* Logo */}
//     //     <img className="w-20 h-20" src="/assets/image 103.png" alt="Logo" />

//     //     {/* Desktop Navigation */}
//     //     <div className="hidden md:flex flex-grow justify-center space-x-12 text-cyan-950 text-2xl font-bold font-['Poppins']">
//     //       <span className="cursor-pointer hover:text-teal-800">Home</span>
//     //       <span className="cursor-pointer hover:text-teal-800">About Us</span>
//     //       <span className="cursor-pointer hover:text-teal-800">Features</span>
//     //       <span className="cursor-pointer hover:text-teal-800">How It Works</span>
//     //     </div>

//     //     {/* Buttons */}
//     //     <div className="hidden md:flex gap-x-4">
//     //       <button
//     //         onClick={() => navigateTo("login")}
//     //         className="px-6 py-2 border border-black rounded-md text-l text-black hover:bg-gray-200"
//     //       >
//     //         Log in
//     //       </button>
//     //       <button
//     //         onClick={() => navigateTo("signup")}
//     //         className="px-6 py-2 bg-yellow-300 text-black rounded-md text-l hover:bg-yellow-400"
//     //       >
//     //         Sign Up
//     //       </button>
//     //     </div>

//     //     {/* Mobile Menu Icon (Optional) */}
//     //     <div className="md:hidden">
//     //       <button className="text-black text-3xl">&#9776;</button>
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// };

// export default NavigationBar;


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