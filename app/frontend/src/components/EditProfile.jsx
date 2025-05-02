import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "./Footer";

const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    profession: "",
    location: "",
    bio: "",
    tags: "",
    openToOneOnOne: false,
    openToGroup: false,
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    alert("Profile Created Successfully! (Simulated)");
    navigate("/dashboard");
  };

  return (
    <div className="w-half min-h-screen bg-white">
      {/* Main Content */}
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        {/* Centered Title and Description */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-2">Profile Setup</h2>
          <p className="text-gray-500">
            Let others know who you are. This helps with better matches and connections
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left Section: Form Fields */}
          <div className="w-full md:w-3/4 flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Age */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Profession */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Profession</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
                required
              />
            </div>

            {/* Tags */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>


            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-xl hover:bg-teal-100 transition-colors"
              >
                Preview
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                type="submit"
                className="px-14 py-3 bg-yellow-300 text-teal-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-lg hover:bg-teal-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Right Section: Profile Picture Upload */}
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center min-h-full">
            <label className="text-gray-700 text-sm mb-2">Upload your picture</label>
            <div className="w-60 h-60 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              {formData.profilePicture ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-black">Upload your picture</span>
                  <span className="text-black text-xs mt-2">JPG, PNG format only</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Choose File
                <input
                  type="file"
                  name="profilePicture"
                  onChange={handleChange}
                  accept="image/jpeg,image/png"
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-500">
                {formData.profilePicture ? formData.profilePicture.name : "No file chosen"}
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default EditProfile;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FooterSection from "./Footer";

// const CreateProfile = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     profession: "",
//     location: "",
//     bio: "",
//     tags: "",
//     openToOneOnOne: false,
//     openToGroup: false,
//     profilePicture: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]:
//         type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Profile Data:", formData);
//     alert("Profile Created Successfully! (Simulated)");
//     navigate("/dashboard"); // Redirect to dashboard
//   };

//   return (
//     <div className="w-full min-h-screen bg-white py-20">
//       <div className="w-full min-h-screen bg-white py-20">
//         <div className="w-full min-h-screen bg-white py-20">
//                 <img src="/assets/image 103.png" alt="Logo" className="w-20 h-20" />

//       {/* Slider */}
//       <div className="w-72 h-3 bg-zinc-200 rounded-2xl flex items-center relative">
//         {/* Progress Bar */}
//         <div className="w-[56%] h-full bg-gradient-to-r from-teal-600 to-yellow-300 rounded-2xl flex justify-between items-center px-4">
//           <div className="w-3 h-3 bg-white rounded-full" />
//           <div className="w-3 h-3 bg-white rounded-full" />
//         </div>

//         {/* Slider Indicator */}
//         <div className="absolute left-[56%] transform -translate-x-1/2">
//           <div className="relative">
//             {/* Indicator Circle */}
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect x="0.990234" y="1" width="30" height="30" rx="15" fill="#FCFCFC" stroke="#32A1B0" strokeWidth="2"/>
//               <path d="M16 10 V18" stroke="#03363D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>

//             {/* Popover Label */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 top-[-52px] flex flex-col items-center">
//               <div className="px-2 py-1 bg-gradient-to-br from-teal-600 to-yellow-300 rounded-lg">
//                 <p className="text-neutral-50 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight">
//                   56% Profile Completed
//                 </p>
//               </div>
//               <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
//                 <path d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z" fill="url(#paint0_linear_3002_67)"/>
//                 <defs>
//                   <linearGradient id="paint0_linear_3002_67" x1="8.05205" y1="5.12132" x2="4.0799" y2="-0.611979" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#138797"/>
//                     <stop offset="1" stopColor="#FCDB32"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Profile Button */}
//       <button
//         onClick={() => navigate("/editProfile")}
//         className="w-44 px-8 py-4 rounded-xl border-2 border-teal-600 text-teal-900 font-semibold bg-white hover:bg-gray-100 transition-colors"
//       >
//         Edit Profile
//       </button>
//           <div className="mw-full max-h-screen bg-white rounded-2xl p-8">
//             {/* <h2 className="text-5xl font-bold text-black-800 mb-2">Profile Setup</h2>
//         <p className="text-gray-600 mb-6">Let others know more about you to better match.</p> */}
//             {/* Centered Title and Description */}
//             <div className="text-center mb-20">
//               <h2 className="text-3xl font-bold text-black mb-2">
//                 Profile Setup
//               </h2>
//               <p className="text-gray-500">
//                 Let others know who you are. This helps with better matches and
//                 connections
//               </p>
//             </div>
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col md:flex-row gap-8"
//             >
//               {/* Left Section: Form Fields */}
//               <div className="w-full md:w-3/4 flex flex-col gap-4">
//                 {/* Full Name */}
//                 <div className="flex flex-col">
//                   <label className="text-gray-500 text-sm mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>

//                 {/* Age */}
//                 <div className="flex flex-col">
//                   <label className="text-gray-500 text-sm mb-1">Age</label>
//                   <input
//                     type="number"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>

//                 {/* Profession */}
//                 <div className="flex flex-col">
//                   <label className="text-gray-500 text-sm mb-1">
//                     Profession
//                   </label>
//                   <input
//                     type="text"
//                     name="profession"
//                     value={formData.profession}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>

//                 {/* Location */}
//                 <div className="flex flex-col">
//                   <label className="text-gray-500 text-sm mb-1">Location</label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>

//                 {/* Bio */}
//                 <div className="flex flex-col">
//                   <label className="text-gray-500 text-sm mb-1">Bio</label>
//                   <textarea
//                     name="bio"
//                     value={formData.bio}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
//                     required
//                   />
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-col">
//                   <label className="text-gray-500 text-sm mb-1">Tags</label>
//                   <input
//                     type="text"
//                     name="tags"
//                     value={formData.tags}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     required
//                   />
//                 </div>

//                 {/* Toggles */}
//                 <div className="flex flex-col gap-2">
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       name="openToOneOnOne"
//                       checked={formData.openToOneOnOne}
//                       onChange={handleChange}
//                       className="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
//                     />
//                     <label className="text-gray-700 text-sm">
//                       Open to meet 1-on-1
//                     </label>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       name="openToGroup"
//                       checked={formData.openToGroup}
//                       onChange={handleChange}
//                       className="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
//                     />
//                     <label className="text-gray-700 text-sm">
//                       Open to group meetings
//                     </label>
//                   </div>
//                 </div>
//                 {/* Buttons */}
//                 <div className="flex justify-between mt-8">
//                   <button
//                     onClick={() => navigate("/profileDashboard")}
//                     className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-xl hover:bg-teal-100 transition-colors"
//                   >
//                     Preview
//                   </button>
//                   <button
//                     onClick={() => navigate("/profileDashboard")}
//                     type="submit"
//                     // onClick={handleSubmit}
//                     className="px-14 py-3 bg-yellow-300 text-teal-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => navigate("/")}
//                     className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-lg hover:bg-teal-100 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>

//               {/* Right Section: Profile Picture Upload (Vertically Centered) */}
//               {/* <div className="w-full md:w-3/4 flex flex-col justify-center min-h-full"> */}
//               <div className="w-full md:w-3/4 flex flex-col items-center justify-center min-h-full">
//                 <label className="text-gray-700 text-sm mb-2">
//                   Upload your picture
//                 </label>
//                 <div className="w-60 h-60 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
//                   {formData.profilePicture ? (
//                     <img
//                       src={URL.createObjectURL(formData.profilePicture)}
//                       alt="Profile Preview"
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center">
//                       <span className="text-black">Upload your picture</span>
//                       <span className="text-black text-xs mt-2">
//                         JPG, PNG format only
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <label className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
//                     Choose File
//                     <input
//                       type="file"
//                       name="profilePicture"
//                       onChange={handleChange}
//                       accept="image/jpeg,image/png"
//                       className="hidden"
//                     />
//                   </label>
//                   <span className="text-sm text-gray-500">
//                     {formData.profilePicture
//                       ? formData.profilePicture.name
//                       : "No file chosen"}
//                   </span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <FooterSection />
//     </div>
//   );
// };

// export default CreateProfile;

// import React from "react"
// import { useNavigate } from "react-router-dom";

// const CreateProfile = () => {
//   const navigate = useNavigate();
//     return (
//       <div data-layer="Profile Screen" className="ProfileScreen w-[1440px] h-[2777px] relative bg-white overflow-hidden">
        // <div data-layer="Frame 1686562487" className="Frame1686562487 w-[1240px] h-28 left-[100px] top-[13px] absolute inline-flex justify-start items-center gap-80">
        //   <img data-layer="image 108" className="Image108 size-20" src="/assets/image 103.png" />
        //   <div data-layer="Slider" data-state="Pressed" className="Slider w-72 bg-zinc-200 rounded-2xl flex justify-start items-center">
        //     <div data-layer="👀 Change my Space-Between!" className="ChangeMySpaceBetween size- bg-yellow-400 rounded-tl-[40px] rounded-bl-[40px] flex justify-start items-start gap-24 overflow-hidden">
        //       <div data-layer="Ellipse 91" className="Ellipse91 size-3 rounded-full" />
        //       <div data-layer="Ellipse 92" className="Ellipse92 size-3 rounded-full" />
        //     </div>
        //     <div data-layer="🚧 Builder - Slider Indicator" data-label="True" data-state="Pressed" className="BuilderSliderIndicator w-7 h-3 relative rounded-2xl">
        //       <div data-svg-wrapper data-layer="Rectangle 6" className="Rectangle6 left-[-2px] top-[-10px] absolute">
        //         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <rect x="0.990234" y="1" width="30" height="30" rx="15" fill="#FCFCFC" stroke="#32A1B0" stroke-width="2"/>
        //         </svg>
        //       </div>
        //       <div data-svg-wrapper data-layer="Indicator Divet" className="IndicatorDivet left-[14px] top-[2px] absolute">
        //         <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M0.990234 1V9" stroke="#03363D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        //         </svg>
        //       </div>
        //       <div data-layer="Popover Label" className="PopoverLabel h-9 left-[-77px] top-[-52px] absolute inline-flex flex-col justify-start items-center overflow-hidden">
        //         <div data-layer="Amount" className="Amount size- px-2 py-1 bg-gradient-to-br from-teal-600 to-yellow-300 rounded-lg flex flex-col justify-start items-start gap-2.5">
        //           <div data-layer="H1 Large Title - 48p" className="H1LargeTitle48p text-center justify-center text-neutral-50 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight">56% Profile Completed</div>
        //         </div>
        //         <div data-svg-wrapper data-layer="Carat" className="Carat">
        //           <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        //           <path d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z" fill="url(#paint0_linear_3002_67)"/>
        //           <defs>
        //           <linearGradient id="paint0_linear_3002_67" x1="8.05205" y1="5.12132" x2="4.0799" y2="-0.611979" gradientUnits="userSpaceOnUse">
        //           <stop stop-color="#138797"/>
        //           <stop offset="1" stop-color="#FCDB32"/>
        //           </linearGradient>
        //           </defs>
        //           </svg>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <button onClick={() => navigate("/editProfile")} className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-teal-600 text-cyan-950 font-semibold bg-white hover:bg-gray-100 transition-colors">
        //     Edit Profile
        //   </button>
        //   {/* <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
        //     <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
        //       <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Edit Profile</div>
        //     </div> */}
        //   {/* </div> */}
        // </div>
//         <div data-layer="Footer" className="Footer w-[1440px] h-[563.50px] left-0 top-[2191px] absolute bg-slate-400 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//           <div data-layer="Frame 1866" className="Frame1866 size- left-[421px] top-[23px] absolute inline-flex flex-col justify-start items-center gap-0.5">
//             <div data-layer="Join our Community" className="JoinOurCommunity text-center justify-start text-slate-800 text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Join our Community</div>
//             <div data-layer="We’re Stronger Together!" className="WeReStrongerTogether w-[572px] text-center justify-start text-slate-800 text-xl font-normal font-['Poppins'] leading-loose tracking-wide">We’re Stronger Together!</div>
//           </div>
//           <div data-layer="Frame 1865" className="Frame1865 w-[642px] h-16 left-[399px] top-[140px] absolute inline-flex justify-start items-start gap-8">
//             <div data-layer="Frame 1841" className="Frame1841 flex-1 inline-flex flex-col justify-start items-start gap-5">
//               <div data-layer="Text Input" data-show-icon="True" data-size="Large" data-state="Default" className="TextInput self-stretch px-5 py-3 bg-gray-100 rounded-2xl inline-flex justify-start items-center gap-4">
//                 <div data-layer="Frame 238" className="Frame238 flex-1 flex justify-start items-center gap-4">
//                   <div data-svg-wrapper data-layer="Mail" className="Mail relative">
//                     <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
//                     <path d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
//                     </svg>
//                   </div>
//                   <div data-layer="Frame 205" className="Frame205 flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
//                     <div data-layer="Text input label" className="TextInputLabel justify-center text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Email Address</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//               <div data-layer="Button - Primary" data-icon-placement="Icon Only" data-size="Large" data-state="Default" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//                 <div data-svg-wrapper data-layer="Forward Arrow" className="ForwardArrow relative">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M14.2829 5L20.9999 12L14.2829 19M20.0002 12.0317H4" stroke="#141D38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div data-layer="Footer Black" className="FooterBlack w-[1440px] h-80 left-0 top-[258px] absolute bg-slate-900 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//             <div data-layer="Frame 1686562500" className="Frame1686562500 w-[887px] h-72 left-[307px] top-[27px] absolute">
//               <div data-layer="Frame 1686562499" className="Frame1686562499 w-[887px] left-0 top-0 absolute inline-flex flex-col justify-start items-center gap-8">
//                 <div data-layer="Frame 427319213" className="Frame427319213 w-60 h-5 relative">
//                   <div data-svg-wrapper data-layer="Vector" className="Vector left-0 top-[-2.50px] absolute">
//                     <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0.152 0.5H7.22L13.51 9.496L21.06 0.5H23.318L14.37 10.728L24 24.5H16.936L10.366 15.106L2.256 24.5H0L9.506 13.876L0.152 0.5Z" fill="#83C4CC"/>
//                     </svg>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector left-[60px] top-[0.14px] absolute">
//                     <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2.66663 4.30072C4.13937 4.30072 5.33327 3.36945 5.33327 2.22067C5.33327 1.07189 4.13937 0.140625 2.66663 0.140625C1.19389 0.140625 0 1.07189 0 2.22067C0 3.36945 1.19389 4.30072 2.66663 4.30072Z" fill="#83C4CC"/>
//                     </svg>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector left-[62.67px] top-[8.46px] absolute">
//                     <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2.66602 2.46094V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector left-[70.67px] top-[8.46px] absolute">
//                     <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2.66602 2.46094V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector left-[70.67px] top-[8.46px] absolute">
//                     <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2.66602 7.66106C2.66602 4.79059 5.65265 2.46094 9.3326 2.46094C13.0126 2.46094 15.9992 4.79059 15.9992 7.66106V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector left-[120px] top-[-2.50px] absolute">
//                     <svg width="7" height="25" viewBox="0 0 7 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M1.51347 5.14753V8.4519H0V12.4922H1.51347V24.5H4.62007V12.4934H6.70542C6.70542 12.4934 6.9008 10.5562 6.99549 8.43747H4.63285V5.67421C4.63285 5.26176 4.97101 4.70622 5.30617 4.70622H7V0.5H4.69748C1.43607 0.5 1.51347 4.54389 1.51347 5.14753Z" fill="#83C4CC"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <div data-layer="Frame 427319216" className="Frame427319216 self-stretch flex flex-col justify-start items-center gap-2.5">
//                   <div data-layer="Frame 427319215" className="Frame427319215 self-stretch h-12 inline-flex justify-start items-center gap-24">
//                     <div data-layer="Blogs" className="Blogs justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Blogs</div>
//                     <div data-svg-wrapper data-layer="Vector" className="Vector">
//                       <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2.5 0C3.16304 0 3.79892 0.225765 4.26777 0.627628C4.73661 1.02949 5 1.57454 5 2.14286V37.8571C5 38.4255 4.73661 38.9705 4.26777 39.3724C3.79892 39.7742 3.16304 40 2.5 40C1.83696 40 1.20107 39.7742 0.732233 39.3724C0.263392 38.9705 0 38.4255 0 37.8571V2.14286C0 1.57454 0.263392 1.02949 0.732233 0.627628C1.20107 0.225765 1.83696 0 2.5 0Z" fill="white"/>
//                       </svg>
//                     </div>
//                     <div data-layer="Privacy Policy" className="PrivacyPolicy justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Privacy Policy </div>
//                     <div data-svg-wrapper data-layer="Vector" className="Vector">
//                       <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2.5 0C3.16304 0 3.79892 0.225765 4.26777 0.627628C4.73661 1.02949 5 1.57454 5 2.14286V37.8571C5 38.4255 4.73661 38.9705 4.26777 39.3724C3.79892 39.7742 3.16304 40 2.5 40C1.83696 40 1.20107 39.7742 0.732233 39.3724C0.263392 38.9705 0 38.4255 0 37.8571V2.14286C0 1.57454 0.263392 1.02949 0.732233 0.627628C1.20107 0.225765 1.83696 0 2.5 0Z" fill="white"/>
//                       </svg>
//                     </div>
//                     <div data-layer="Contact Us" className="ContactUs justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Contact Us</div>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector">
//                     <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2.05673 17.1015C2.06418 19.0713 2.49694 21.0205 3.33029 22.8378C4.16365 24.655 5.38129 26.3048 6.91369 27.6929C8.44609 29.0809 10.2632 30.1801 12.2614 30.9276C14.2595 31.6752 16.3995 32.0564 18.5592 32.0496C20.7189 32.0428 22.856 31.6481 24.8484 30.888C26.8409 30.128 28.6496 29.0174 30.1715 27.6197C31.6934 26.222 32.8985 24.5646 33.7181 22.7421C34.5377 20.9197 34.9557 18.9678 34.9482 16.998C34.9408 15.0282 34.508 13.079 33.6747 11.2617C32.8413 9.44444 31.6237 7.79468 30.0913 6.40661C28.5589 5.01854 26.7417 3.91936 24.7436 3.17182C22.7455 2.42428 20.6054 2.04303 18.4458 2.04982C16.2861 2.05662 14.149 2.45133 12.1566 3.21142C10.1641 3.97152 8.35533 5.08211 6.83347 6.47978C5.3116 7.87746 4.10647 9.53484 3.28688 11.3573C2.46728 13.1798 2.04928 15.1317 2.05673 17.1015Z" fill="#A0A3BD" stroke="black" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                   </div>
//                   <div data-svg-wrapper data-layer="Vector" className="Vector">
//                     <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M11.143 3.28462C10.0747 2.4342 8.68802 1.9921 7.27143 2.05025C5.85485 2.10841 4.51735 2.66235 3.53706 3.59689C2.55822 4.52963 2.01403 5.7722 2.01891 7.06335C2.0238 8.35449 2.57737 9.59362 3.56325 10.5202C4.55057 11.4485 5.89223 11.994 7.30923 12.0433C8.72622 12.0925 10.1095 11.6417 11.1714 10.7846" fill="#A0A3BD"/>
//                     <path d="M11.143 3.28462C10.0747 2.4342 8.68802 1.9921 7.27143 2.05025C5.85485 2.10841 4.51735 2.66235 3.53706 3.59689C2.55822 4.52963 2.01403 5.7722 2.01891 7.06335C2.0238 8.35449 2.57737 9.59362 3.56325 10.5202C4.55057 11.4485 5.89223 11.994 7.30922 12.0433C8.72622 12.0925 10.1095 11.6417 11.1714 10.7846" stroke="black" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                   </div>
//                   <div data-layer="full_name" className="FullName w-[655.64px] justify-start text-slate-400 text-lg font-semibold font-['Poppins'] leading-tight tracking-[6px]">2025 JobBuddies All Rights Reserved</div>
//                 </div>
//               </div>
//               <img data-layer="image 108" className="Image108 size-40 left-[332px] top-[121px] absolute" src="https://placehold.co/158x158" />
//             </div>
//           </div>
//         </div>
//         <div data-layer="Frame 1686562565" className="Frame1686562565 w-[654.22px] py-8 left-[130px] top-[400px] absolute inline-flex flex-col justify-start items-start gap-9">
//           <div data-layer="Frame 1686562518" className="Frame1686562518 self-stretch flex flex-col justify-start items-start gap-1.5">
//             <div data-layer="Full Name" className="FullName self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Full Name</div>
//             <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
//               <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//                 <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//               </div>
//             </div>
//           </div>
//           <div data-layer="Frame 1686562519" className="Frame1686562519 self-stretch flex flex-col justify-start items-start gap-1.5">
//             <div data-layer="Age" className="Age self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Age</div>
//             <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
//               <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//                 <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//               </div>
//             </div>
//           </div>
//           <div data-layer="Frame 1686562560" className="Frame1686562560 self-stretch flex flex-col justify-start items-start gap-3.5">
//             <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch flex flex-col justify-start items-start gap-1.5">
//               <div data-layer="Profession" className="Profession self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Profession</div>
//               <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 relative">
//                 <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] h-24 px-7 py-4 left-0 top-0 absolute bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//                   <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div data-layer="Frame 1686562599" className="Frame1686562599 self-stretch flex flex-col justify-start items-start gap-1.5">
//             <div data-layer="Location" className="Location self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Location</div>
//             <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
//               <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//                 <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//               </div>
//             </div>
//           </div>
//           <div data-layer="Frame 1686562561" className="Frame1686562561 self-stretch h-72 flex flex-col justify-start items-start gap-3.5">
//             <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch flex flex-col justify-start items-start gap-1.5">
//               <div data-layer="Bio" className="Bio self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Bio</div>
//               <div data-layer="Frame 1852" className="Frame1852 self-stretch h-56 relative">
//                 <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654px] h-56 px-7 py-4 left-0 top-[0.05px] absolute bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//                   <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div data-layer="Frame 1686562562" className="Frame1686562562 self-stretch h-96 flex flex-col justify-start items-start gap-3.5">
//             <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch h-72 flex flex-col justify-start items-start gap-1.5">
//               <div data-layer="Tags" className="Tags self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Tags</div>
//               <div data-layer="Frame 1853" className="Frame1853 self-stretch h-80 inline-flex justify-start items-start gap-8">
//                 <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput flex-1 h-80 px-5 py-3 bg-gray-100 rounded-2xl inline-flex flex-col justify-start items-start gap-4" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div data-layer="Frame 1686562598" className="Frame1686562598 size- left-[100px] top-[2027px] absolute inline-flex justify-start items-center gap-14">
//           <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
//             <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
//               <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Preview</div>
//             </div>
//           </div>
//           <button onClick={() => navigate("/profileDashboard")}
//             type="submit"
//             className="px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 font-semibold text-base hover:bg-yellow-400 transition-colors"
//           >
//             Save
//           </button>
//           {/* <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//             <div data-layer="Button - Primary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonPrimary w-44 px-8 py-4 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//               <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Save</div>
//             </div>
//           </div> */}
//           <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
//             <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
//               <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Cancel</div>
//             </div>
//           </div>
//         </div>
//         <div data-layer="Frame 1686562517" className="Frame1686562517 w-[727px] left-[391px] top-[168px] absolute inline-flex flex-col justify-start items-center">
//           <div data-layer="Profile Setup" className="ProfileSetup self-stretch text-center justify-start text-slate-800 text-5xl font-black font-['Poppins'] leading-[70.20px]">Profile Setup</div>
//           <div data-layer="Let others know who you are. This helps with better matches and connections" className="LetOthersKnowWhoYouAreThisHelpsWithBetterMatchesAndConnections self-stretch text-center justify-start text-slate-800 text-2xl font-normal font-['Poppins'] leading-loose">Let others know who you are.  This helps with better matches and connections</div>
//         </div>
//         <div data-layer="Frame 1686562601" className="Frame1686562601 w-80 h-[548px] left-[975px] top-[885px] absolute inline-flex flex-col justify-start items-center gap-6">
//           <div data-layer="Frame 1686562600" className="Frame1686562600 self-stretch h-80 px-5 py-40 bg-zinc-300 rounded-tr-[32px] rounded-bl-[32px] flex flex-col justify-center items-center gap-2.5">
//             <div data-layer="Frame 1686562751" className="Frame1686562751 size- flex flex-col justify-start items-center gap-2.5">
//               <div data-layer="Upload your picture" className="UploadYourPicture text-center justify-center text-slate-900 text-2xl font-normal font-['Poppins'] leading-7 tracking-wide">Upload your picture</div>
//               <div data-layer="JPG, PNG format only" className="JpgPngFormatOnly text-center justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">JPG, PNG format only</div>
//             </div>
//           </div>
//           <div data-layer="Frame 1686562599" className="Frame1686562599 w-80 h-40 flex flex-col justify-start items-start gap-6">
//             <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
//               <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide Age</div>
//               <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
//                 <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
//                 <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
//                   <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
//               <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide Gender</div>
//               <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
//                 <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
//                 <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
//                   <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
//               <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide profile</div>
//               <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
//                 <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
//                 <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
//                   <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>);
// };

// export default CreateProfile;

// //       <div data-layer="Profile Screen" className="ProfileScreen w-[1440px] h-[2777px] relative bg-white overflow-hidden">
// //   {/* <!-- Header Section --> */}
// //   <div data-layer="Frame 1686562487" className="Frame1686562487 w-[1240px] h-28 left-[100px] top-[13px] absolute inline-flex justify-start items-center gap-80">
// //     <img data-layer="image 108" className="Image108 size-20" src="https://placehold.co/88x88" />

// //     {/* <!-- Slider Section --> */}
// //     <div data-layer="Slider" data-state="Pressed" className="Slider w-72 bg-zinc-200 rounded-2xl flex justify-start items-center">
// //       <div data-layer="\uD83D\uDC40 Change my Space-Between!" className="ChangeMySpaceBetween size- bg-yellow-400 rounded-tl-[40px] rounded-bl-[40px] flex justify-start items-start gap-24 overflow-hidden">
// //         <div data-layer="Ellipse 91" className="Ellipse91 size-3 rounded-full" />
// //         <div data-layer="Ellipse 92" className="Ellipse92 size-3 rounded-full" />
// //       </div>

// //       {/* <!-- Slider Indicator --> */}
// //       <div data-layer="\uD83D\uDEA7 Builder - Slider Indicator" data-label="True" data-state="Pressed" className="BuilderSliderIndicator w-7 h-3 relative rounded-2xl">
// //         <div data-svg-wrapper data-layer="Rectangle 6" className="Rectangle6 left-[-2px] top-[-10px] absolute">
// //           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <rect x="0.990234" y="1" width="30" height="30" rx="15" fill="#FCFCFC" stroke="#32A1B0" stroke-width="2"/>
// //           </svg>
// //         </div>
// //         <div data-svg-wrapper data-layer="Indicator Divet" className="IndicatorDivet left-[14px] top-[2px] absolute">
// //           <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <path d="M0.990234 1V9" stroke="#03363D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// //           </svg>
// //         </div>
// //         <div data-layer="Popover Label" className="PopoverLabel h-9 left-[-77px] top-[-52px] absolute inline-flex flex-col justify-start items-center overflow-hidden">
// //           <div data-layer="Amount" className="Amount size- px-2 py-1 bg-gradient-to-br from-teal-600 to-yellow-300 rounded-lg flex flex-col justify-start items-start gap-2.5">
// //             <div data-layer="H1 Large Title - 48p" className="H1LargeTitle48p text-center justify-center text-neutral-50 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight">56% Profile Completed</div>
// //           </div>
// //           <div data-svg-wrapper data-layer="Carat" className="Carat">
// //             <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z" fill="url(#paint0_linear_3002_67)"/>
// //               <defs>
// //                 <linearGradient id="paint0_linear_3002_67" x1="8.05205" y1="5.12132" x2="4.0799" y2="-0.611979" gradientUnits="userSpaceOnUse">
// //                   <stop stop-color="#138797"/>
// //                   <stop offset="1" stop-color="#FCDB32"/>
// //                 </linearGradient>
// //               </defs>
// //             </svg>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     {/* <!-- Edit Button --> */}
// //     <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
// //       <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
// //         <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Edit Profile</div>
// //       </div>
// //     </div>
// //   </div>

// //   {/* <!-- Footer Section --> */}
// //   <div data-layer="Footer" className="Footer w-[1440px] h-[563.50px] left-0 top-[2191px] absolute bg-slate-400 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
// //     <div data-layer="Frame 1866" className="Frame1866 size- left-[421px] top-[23px] absolute inline-flex flex-col justify-start items-center gap-0.5">
// //       <div data-layer="Join our Community" className="JoinOurCommunity text-center justify-start text-slate-800 text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Join our Community</div>
// //       <div data-layer="We’re Stronger Together!" className="WeReStrongerTogether w-[572px] text-center justify-start text-slate-800 text-xl font-normal font-['Poppins'] leading-loose tracking-wide">We’re Stronger Together!</div>
// //     </div>

// //     {/* <!-- Email Input + Submit --> */}
// //     <div data-layer="Frame 1865" className="Frame1865 w-[642px] h-16 left-[399px] top-[140px] absolute inline-flex justify-start items-start gap-8">
// //       <div data-layer="Frame 1841" className="Frame1841 flex-1 inline-flex flex-col justify-start items-start gap-5">
// //         <div data-layer="Text Input" data-show-icon="True" data-size="Large" data-state="Default" className="TextInput self-stretch px-5 py-3 bg-gray-100 rounded-2xl inline-flex justify-start items-center gap-4">
// //           <div data-layer="Frame 238" className="Frame238 flex-1 flex justify-start items-center gap-4">
// //             <div data-svg-wrapper data-layer="Mail" className="Mail relative">
// //               <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
// //                 <path d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
// //               </svg>
// //             </div>
// //             <div data-layer="Frame 205" className="Frame205 flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
// //               <div data-layer="Text input label" className="TextInputLabel justify-center text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Email Address</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* <!-- Submit Button --> */}
// //       <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
// //         <div data-layer="Button - Primary" data-icon-placement="Icon Only" data-size="Large" data-state="Default" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
// //           <div data-svg-wrapper data-layer="Forward Arrow" className="ForwardArrow relative">
// //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M14.2829 5L20.9999 12L14.2829 19M20.0002 12.0317H4" stroke="#141D38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// //             </svg>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     {/* <!-- Footer Black Section --> */}
// //     <div data-layer="Footer Black" className="FooterBlack w-[1440px] h-80 left-0 top-[258px] absolute bg-slate-900 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
// //       {/* <!-- Content will continue here if needed --> */}
// //     </div>
// //   </div>
// // </div>
// //   );
// // };

//   // Removed duplicate export default statement



// import React from "react"
// import { useNavigate } from "react-router-dom";

// const EditProfile = () => {
//   const navigate = useNavigate();
//     return (  
// <div data-layer="Edit Profile Screen" className="EditProfileScreen w-[1440px] h-[2895px] relative bg-white overflow-hidden">
//   <div data-layer="Frame 1686562487" className="Frame1686562487 w-[1240px] left-[100px] top-[33px] absolute bg-white inline-flex justify-start items-center gap-9">
//     <div data-svg-wrapper data-layer="Vector" className="Vector">
//       <svg width="54" height="88" viewBox="0 0 54 88" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path fill-rule="evenodd" clip-rule="evenodd" d="M53.9375 11.0046L21.575 44.0009L53.9375 76.9971L43.15 87.9959L0 44.0009L43.15 0.00585937L53.9375 11.0046Z" fill="black"/>
//       </svg>
//     </div>
//     <div data-layer="Frame 1686562517" className="Frame1686562517 w-[727px] inline-flex flex-col justify-start items-center">
//       <div data-layer="Edit your Profile" className="EditYourProfile self-stretch text-center justify-start text-slate-800 text-5xl font-black font-['Poppins'] leading-[70.20px]">Edit your Profile</div>
//       <div data-layer="Update your details to help others know you better and connect meaningfully." className="UpdateYourDetailsToHelpOthersKnowYouBetterAndConnectMeaningfully self-stretch text-center justify-start text-slate-800 text-2xl font-normal font-['Poppins'] leading-loose">Update your details to help others know you better and connect meaningfully.</div>
//     </div>
//     <div data-layer="Frame 1686562597" className="Frame1686562597 size- flex justify-start items-center gap-5">
//       <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
//         <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
//           <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Cancel </div>
//         </div>
//       </div>
//       <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//         <div data-layer="Button - Primary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonPrimary w-44 px-8 py-4 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//           <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Save Changes</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div data-layer="Footer" className="Footer w-[1440px] h-[563.50px] left-0 top-[2309px] absolute bg-slate-400 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//     <div data-layer="Frame 1866" className="Frame1866 size- left-[421px] top-[23px] absolute inline-flex flex-col justify-start items-center gap-0.5">
//       <div data-layer="Join our Community" className="JoinOurCommunity text-center justify-start text-slate-800 text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Join our Community</div>
//       <div data-layer="We’re Stronger Together!" className="WeReStrongerTogether w-[572px] text-center justify-start text-slate-800 text-xl font-normal font-['Poppins'] leading-loose tracking-wide">We’re Stronger Together!</div>
//     </div>
//     <div data-layer="Frame 1865" className="Frame1865 w-[642px] h-16 left-[399px] top-[140px] absolute inline-flex justify-start items-start gap-8">
//       <div data-layer="Frame 1841" className="Frame1841 flex-1 inline-flex flex-col justify-start items-start gap-5">
//         <div data-layer="Text Input" data-show-icon="True" data-size="Large" data-state="Default" className="TextInput self-stretch px-5 py-3 bg-gray-100 rounded-2xl inline-flex justify-start items-center gap-4">
//           <div data-layer="Frame 238" className="Frame238 flex-1 flex justify-start items-center gap-4">
//             <div data-svg-wrapper data-layer="Mail" className="Mail relative">
//               <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
//               <path d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-layer="Frame 205" className="Frame205 flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
//               <div data-layer="Text input label" className="TextInputLabel justify-center text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Email Address</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//         <div data-layer="Button - Primary" data-icon-placement="Icon Only" data-size="Large" data-state="Default" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//           <div data-svg-wrapper data-layer="Forward Arrow" className="ForwardArrow relative">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M14.2829 5L20.9999 12L14.2829 19M20.0002 12.0317H4" stroke="#141D38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Footer Black" className="FooterBlack w-[1440px] h-80 left-0 top-[258px] absolute bg-slate-900 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//       <div data-layer="Frame 1686562500" className="Frame1686562500 w-[887px] h-72 left-[307px] top-[27px] absolute">
//         <div data-layer="Frame 1686562499" className="Frame1686562499 w-[887px] left-0 top-0 absolute inline-flex flex-col justify-start items-center gap-8">
//           <div data-layer="Frame 427319213" className="Frame427319213 w-60 h-5 relative">
//             <div data-svg-wrapper data-layer="Vector" className="Vector left-0 top-[-2.50px] absolute">
//               <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0.152 0.5H7.22L13.51 9.496L21.06 0.5H23.318L14.37 10.728L24 24.5H16.936L10.366 15.106L2.256 24.5H0L9.506 13.876L0.152 0.5Z" fill="#83C4CC"/>
//               </svg>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector left-[60px] top-[0.14px] absolute">
//               <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.66663 4.30072C4.13937 4.30072 5.33327 3.36945 5.33327 2.22067C5.33327 1.07189 4.13937 0.140625 2.66663 0.140625C1.19389 0.140625 0 1.07189 0 2.22067C0 3.36945 1.19389 4.30072 2.66663 4.30072Z" fill="#83C4CC"/>
//               </svg>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector left-[62.67px] top-[8.46px] absolute">
//               <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.66602 2.46094V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector left-[70.67px] top-[8.46px] absolute">
//               <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.66602 2.46094V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector left-[70.67px] top-[8.46px] absolute">
//               <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.66602 7.66106C2.66602 4.79059 5.65265 2.46094 9.3326 2.46094C13.0126 2.46094 15.9992 4.79059 15.9992 7.66106V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector left-[120px] top-[-2.50px] absolute">
//               <svg width="7" height="25" viewBox="0 0 7 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1.51347 5.14753V8.4519H0V12.4922H1.51347V24.5H4.62007V12.4934H6.70542C6.70542 12.4934 6.9008 10.5562 6.99549 8.43747H4.63285V5.67421C4.63285 5.26176 4.97101 4.70622 5.30617 4.70622H7V0.5H4.69748C1.43607 0.5 1.51347 4.54389 1.51347 5.14753Z" fill="#83C4CC"/>
//               </svg>
//             </div>
//           </div>
//           <div data-layer="Frame 427319216" className="Frame427319216 self-stretch flex flex-col justify-start items-center gap-2.5">
//             <div data-layer="Frame 427319215" className="Frame427319215 self-stretch h-12 inline-flex justify-start items-center gap-24">
//               <div data-layer="Blogs" className="Blogs justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Blogs</div>
//               <div data-svg-wrapper data-layer="Vector" className="Vector">
//                 <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2.5 0C3.16304 0 3.79892 0.225765 4.26777 0.627628C4.73661 1.02949 5 1.57454 5 2.14286V37.8571C5 38.4255 4.73661 38.9705 4.26777 39.3724C3.79892 39.7742 3.16304 40 2.5 40C1.83696 40 1.20107 39.7742 0.732233 39.3724C0.263392 38.9705 0 38.4255 0 37.8571V2.14286C0 1.57454 0.263392 1.02949 0.732233 0.627628C1.20107 0.225765 1.83696 0 2.5 0Z" fill="white"/>
//                 </svg>
//               </div>
//               <div data-layer="Privacy Policy" className="PrivacyPolicy justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Privacy Policy </div>
//               <div data-svg-wrapper data-layer="Vector" className="Vector">
//                 <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2.5 0C3.16304 0 3.79892 0.225765 4.26777 0.627628C4.73661 1.02949 5 1.57454 5 2.14286V37.8571C5 38.4255 4.73661 38.9705 4.26777 39.3724C3.79892 39.7742 3.16304 40 2.5 40C1.83696 40 1.20107 39.7742 0.732233 39.3724C0.263392 38.9705 0 38.4255 0 37.8571V2.14286C0 1.57454 0.263392 1.02949 0.732233 0.627628C1.20107 0.225765 1.83696 0 2.5 0Z" fill="white"/>
//                 </svg>
//               </div>
//               <div data-layer="Contact Us" className="ContactUs justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Contact Us</div>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector">
//               <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.05673 17.1015C2.06418 19.0713 2.49694 21.0205 3.33029 22.8378C4.16365 24.655 5.38129 26.3048 6.91369 27.6929C8.44609 29.0809 10.2632 30.1801 12.2614 30.9276C14.2595 31.6752 16.3995 32.0564 18.5592 32.0496C20.7189 32.0428 22.856 31.6481 24.8484 30.888C26.8409 30.128 28.6496 29.0174 30.1715 27.6197C31.6934 26.222 32.8985 24.5646 33.7181 22.7421C34.5377 20.9197 34.9557 18.9678 34.9482 16.998C34.9408 15.0282 34.508 13.079 33.6747 11.2617C32.8413 9.44444 31.6237 7.79468 30.0913 6.40661C28.5589 5.01854 26.7417 3.91936 24.7436 3.17182C22.7455 2.42428 20.6054 2.04303 18.4458 2.04982C16.2861 2.05662 14.149 2.45133 12.1566 3.21142C10.1641 3.97152 8.35533 5.08211 6.83347 6.47978C5.3116 7.87746 4.10647 9.53484 3.28688 11.3573C2.46728 13.1798 2.04928 15.1317 2.05673 17.1015Z" fill="#A0A3BD" stroke="black" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-svg-wrapper data-layer="Vector" className="Vector">
//               <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M11.143 3.28462C10.0747 2.4342 8.68802 1.9921 7.27143 2.05025C5.85485 2.10841 4.51735 2.66235 3.53706 3.59689C2.55822 4.52963 2.01403 5.7722 2.01891 7.06335C2.0238 8.35449 2.57737 9.59362 3.56325 10.5202C4.55057 11.4485 5.89223 11.994 7.30923 12.0433C8.72622 12.0925 10.1095 11.6417 11.1714 10.7846" fill="#A0A3BD"/>
//               <path d="M11.143 3.28462C10.0747 2.4342 8.68802 1.9921 7.27143 2.05025C5.85485 2.10841 4.51735 2.66235 3.53706 3.59689C2.55822 4.52963 2.01403 5.7722 2.01891 7.06335C2.0238 8.35449 2.57737 9.59362 3.56325 10.5202C4.55057 11.4485 5.89223 11.994 7.30922 12.0433C8.72622 12.0925 10.1095 11.6417 11.1714 10.7846" stroke="black" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-layer="full_name" className="FullName w-[655.64px] justify-start text-slate-400 text-lg font-semibold font-['Poppins'] leading-tight tracking-[6px]">2025 JobBuddies All Rights Reserved</div>
//           </div>
//         </div>
//         <img data-layer="image 108" className="Image108 size-40 left-[332px] top-[121px] absolute" src="https://placehold.co/158x158" />
//       </div>
//     </div>
//   </div>
//   <div data-layer="Frame 1686562565" className="Frame1686562565 w-[654.22px] py-8 left-[130px] top-[210px] absolute inline-flex flex-col justify-start items-start gap-9">
//     <div data-layer="Frame 1686562518" className="Frame1686562518 self-stretch flex flex-col justify-start items-start gap-1.5">
//       <div data-layer="Full Name" className="FullName self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Full Name</div>
//       <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
//         <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//           <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562646" className="Frame1686562646 self-stretch h-36 px-12 py-8 relative inline-flex justify-start items-center gap-2.5">
//       <div data-layer="Frame 1686562519" className="Frame1686562519 w-[654.22px] left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-1.5">
//         <div data-layer="Age" className="Age self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Age</div>
//         <div data-layer="Frame 1853" className="Frame1853 self-stretch h-24 inline-flex justify-start items-start gap-12">
//           <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//             <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562647" className="Frame1686562647 self-stretch h-36 px-12 py-8 relative inline-flex justify-start items-center gap-2.5">
//       <div data-layer="Frame 1686562519" className="Frame1686562519 w-[654.22px] left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-1.5">
//         <div data-layer="Profession" className="Profession self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Profession</div>
//         <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
//           <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//             <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562560" className="Frame1686562560 self-stretch flex flex-col justify-start items-start gap-3.5">
//       <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch flex flex-col justify-start items-start gap-1.5">
//         <div data-layer="Location" className="Location self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Location</div>
//         <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 relative">
//           <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] h-24 px-7 py-4 left-0 top-0 absolute bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//             <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//           </div>
//           <div data-layer="Toronto, Canada" className="TorontoCanada left-[41px] top-[35.73px] absolute justify-center text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">Toronto, Canada</div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562561" className="Frame1686562561 self-stretch h-72 flex flex-col justify-start items-start gap-3.5">
//       <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch flex flex-col justify-start items-start gap-1.5">
//         <div data-layer="Bio" className="Bio self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Bio</div>
//         <div data-layer="Frame 1852" className="Frame1852 self-stretch h-56 relative">
//           <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654px] h-56 px-7 py-4 left-0 top-[0.05px] absolute bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
//             <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
//           </div>
//           <div data-layer="Detail-oriented Business Analyst with 3+ years of experience in interpreting data, defining business requirements, and supporting cross-functional teams to deliver impactful digital solutions." className="DetailOrientedBusinessAnalystWith3YearsOfExperienceInInterpretingDataDefiningBusinessRequirementsAndSupportingCrossFunctionalTeamsToDeliverImpactfulDigitalSolutions w-[518px] h-44 left-[41px] top-[30.63px] absolute justify-center text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">Detail-oriented Business Analyst with 3+ years of experience in interpreting data, defining business requirements, and supporting cross-functional teams to deliver impactful digital solutions.<br/><br/></div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562644" className="Frame1686562644 self-stretch h-96 relative">
//       <div data-layer="Frame 1686562562" className="Frame1686562562 w-[654px] h-96 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-3.5">
//         <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch h-12 flex flex-col justify-start items-start gap-1.5">
//           <div data-layer="Tags" className="Tags self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Tags</div>
//           <div data-layer="Frame 1853" className="Frame1853 self-stretch h-80" />
//         </div>
//       </div>
//     </div>
//     <div data-layer="John Smith" className="JohnSmith w-28 h-6 left-[41px] top-[116px] absolute justify-center text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">John Smith</div>
//     <div data-layer="Frame 1686562648" className="Frame1686562648 w-[654px] h-80 px-12 py-6 left-[-9px] top-[1160px] absolute flex flex-col justify-start items-start gap-2.5">
//       <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654px] h-80 px-5 py-3 left-0 top-0 absolute bg-gray-100 rounded-2xl flex flex-col justify-start items-start gap-4" />
//       <div data-layer="Frame 1686562643" className="Frame1686562643 w-[586px] h-64 relative">
//         <div data-layer="Skills: Data Analysis & Reporting, Requirement Gathering, SQL, Excel, Power BI, Agile & Scrum Practices, Stakeholder Communication" className="SkillsDataAnalysisReportingRequirementGatheringSqlExcelPowerBiAgileScrumPracticesStakeholderCommunication w-[586px] h-24 left-0 top-0 absolute justify-center"><span class="text-slate-500 text-xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Skills:</span><span class="text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide"> </span><span class="text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">Data Analysis & Reporting, Requirement Gathering, SQL, Excel, Power BI, Agile & Scrum Practices, Stakeholder Communication</span></div>
//         <div data-layer="Interests: Startup ecosystems, business strategy sessions, professional networking events, data storytelling & visualization" className="InterestsStartupEcosystemsBusinessStrategySessionsProfessionalNetworkingEventsDataStorytellingVisualization w-[586px] h-14 left-0 top-[109px] absolute justify-center"><span class="text-slate-500 text-xl font-bold font-['Poppins'] leading-7 tracking-wide">Interests:</span><span class="text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide"> </span><span class="text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">Startup ecosystems, business strategy sessions, professional networking events, data storytelling & visualization</span></div>
//         <div data-layer="Goals: Transition into a Product Management role, lead data-driven initiatives in tech-forward companies, network with professionals in tech and consulting" className="GoalsTransitionIntoAProductManagementRoleLeadDataDrivenInitiativesInTechForwardCompaniesNetworkWithProfessionalsInTechAndConsulting w-[586px] h-20 left-0 top-[181px] absolute justify-center"><span class="text-slate-500 text-xl font-bold font-['Poppins'] leading-7 tracking-wide">Goals:</span><span class="text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide"> </span><span class="text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">Transition into a Product Management role, lead data-driven initiatives in tech-forward companies, network with professionals in tech and consulting</span></div>
//       </div>
//     </div>
//   </div>
//   <div data-layer="Frame 1686562601" className="Frame1686562601 w-80 h-[548px] left-[945px] top-[577px] absolute inline-flex flex-col justify-start items-center gap-6">
//     <img data-layer="Rectangle 3349" className="Rectangle3349 w-80 flex-1 rounded-tr-[32px] rounded-bl-[32px]" src="https://placehold.co/350x365" />
//     <div data-layer="Frame 1686562599" className="Frame1686562599 w-80 h-40 flex flex-col justify-start items-start gap-6">
//       <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
//         <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide Age</div>
//         <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
//           <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
//           <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
//             <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
//         <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide Gender</div>
//         <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
//           <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
//           <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
//             <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
//         <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide profile</div>
//         <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
//           <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
//           <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
//             <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div data-layer="Frame 1686562627" className="Frame1686562627 w-[654px] left-[130px] top-[1804px] absolute inline-flex flex-col justify-start items-start gap-6">
//     <div data-layer="Frame 1686562625" className="Frame1686562625 self-stretch flex flex-col justify-start items-start gap-6">
//       <div data-layer="Security" className="Security self-stretch h-7 justify-center text-slate-800 text-4xl font-bold font-['Poppins'] leading-7 tracking-wide">Security</div>
//       <div data-layer="Frame 1686562612" className="Frame1686562612 self-stretch h-24 px-5 py-3 opacity-50 bg-gray-200 rounded-2xl inline-flex justify-center items-center gap-4">
//         <div data-layer="Frame 1686562624" className="Frame1686562624 flex-1 flex justify-between items-center">
//           <div data-layer="Change Password" className="ChangePassword flex-1 justify-center text-slate-800/50 text-2xl font-bold font-['Poppins'] leading-7 tracking-wide">Change Password</div>
//           <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//             <div data-layer="Button - Primary" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//               <div data-svg-wrapper data-layer="carbon:password" className="CarbonPassword relative">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M15.75 1.5C14.6959 1.49976 13.6565 1.74642 12.7149 2.22023C11.7734 2.69404 10.9559 3.38181 10.328 4.22844C9.7001 5.07506 9.27925 6.057 9.09917 7.09555C8.91909 8.13411 8.98479 9.20041 9.291 10.209L1.5 18V22.5H6L13.791 14.709C14.7194 14.9908 15.6977 15.0692 16.6591 14.9387C17.6206 14.8083 18.5426 14.4721 19.3624 13.953C20.1821 13.434 20.8804 12.7444 21.4095 11.9311C21.9386 11.1178 22.2862 10.2 22.4285 9.24025C22.5709 8.28049 22.5046 7.30132 22.2343 6.36948C21.964 5.43764 21.496 4.57502 20.8622 3.84042C20.2283 3.10582 19.4436 2.51649 18.5614 2.11261C17.6792 1.70872 16.7203 1.49978 15.75 1.5ZM15.75 13.5C15.2336 13.4999 14.7201 13.4235 14.226 13.2735L13.3657 13.0125L12.7305 13.6478L10.3448 16.0335L9.3105 15L8.25 16.0605L9.28425 17.0947L8.09475 18.2843L7.0605 17.25L6 18.3105L7.03425 19.3447L5.379 21H3V18.621L10.3515 11.2695L10.9875 10.6342L10.7265 9.774C10.4059 8.71724 10.4268 7.58631 10.786 6.54207C11.1453 5.49784 11.8247 4.59347 12.7275 3.95762C13.6304 3.32177 14.7108 2.98681 15.815 3.0004C16.9192 3.01398 17.9911 3.37542 18.878 4.03329C19.765 4.69116 20.4219 5.61197 20.7554 6.66473C21.0888 7.71749 21.0818 8.84859 20.7354 9.89714C20.3889 10.9457 19.7206 11.8583 18.8256 12.5051C17.9305 13.152 16.8543 13.5001 15.75 13.5Z" fill="black"/>
//                 <path d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" fill="black"/>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562626" className="Frame1686562626 self-stretch flex flex-col justify-start items-start gap-6">
//       <div data-layer="Frame 1686562612" className="Frame1686562612 self-stretch h-24 px-5 py-3 opacity-50 bg-gray-200 rounded-2xl inline-flex justify-center items-center gap-4">
//         <div data-layer="Frame 1686562624" className="Frame1686562624 flex-1 flex justify-between items-center">
//           <div data-layer="Delete Account" className="DeleteAccount flex-1 justify-center text-slate-800/50 text-2xl font-bold font-['Poppins'] leading-7 tracking-wide">Delete Account</div>
//           <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//             <div data-layer="Button - Primary" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//               <div data-svg-wrapper data-layer="fluent:delete-16-regular" className="FluentDelete16Regular relative">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M10.5 4.5H13.5C13.5 4.10218 13.342 3.72064 13.0607 3.43934C12.7794 3.15804 12.3978 3 12 3C11.6022 3 11.2206 3.15804 10.9393 3.43934C10.658 3.72064 10.5 4.10218 10.5 4.5ZM9 4.5C9 3.70435 9.31607 2.94129 9.87868 2.37868C10.4413 1.81607 11.2044 1.5 12 1.5C12.7956 1.5 13.5587 1.81607 14.1213 2.37868C14.6839 2.94129 15 3.70435 15 4.5H21C21.1989 4.5 21.3897 4.57902 21.5303 4.71967C21.671 4.86032 21.75 5.05109 21.75 5.25C21.75 5.44891 21.671 5.63968 21.5303 5.78033C21.3897 5.92098 21.1989 6 21 6H20.154L18.3465 19.257C18.2239 20.1554 17.78 20.979 17.0968 21.5752C16.4137 22.1714 15.5377 22.5 14.631 22.5H9.369C8.46228 22.5 7.58626 22.1714 6.90315 21.5752C6.22004 20.979 5.77609 20.1554 5.6535 19.257L3.846 6H3C2.80109 6 2.61032 5.92098 2.46967 5.78033C2.32902 5.63968 2.25 5.44891 2.25 5.25C2.25 5.05109 2.32902 4.86032 2.46967 4.71967C2.61032 4.57902 2.80109 4.5 3 4.5H9ZM10.5 9.75C10.5 9.55109 10.421 9.36032 10.2803 9.21967C10.1397 9.07902 9.94891 9 9.75 9C9.55109 9 9.36032 9.07902 9.21967 9.21967C9.07902 9.36032 9 9.55109 9 9.75V17.25C9 17.4489 9.07902 17.6397 9.21967 17.7803C9.36032 17.921 9.55109 18 9.75 18C9.94891 18 10.1397 17.921 10.2803 17.7803C10.421 17.6397 10.5 17.4489 10.5 17.25V9.75ZM14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V17.25C15 17.4489 14.921 17.6397 14.7803 17.7803C14.6397 17.921 14.4489 18 14.25 18C14.0511 18 13.8603 17.921 13.7197 17.7803C13.579 17.6397 13.5 17.4489 13.5 17.25V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9ZM7.14 19.0545C7.21361 19.5934 7.47997 20.0875 7.88977 20.4451C8.29956 20.8028 8.82506 20.9999 9.369 21H14.631C15.1752 21.0003 15.7011 20.8033 16.1112 20.4456C16.5213 20.0879 16.7879 19.5937 16.8615 19.0545L18.6405 6H5.3595L7.14 19.0545Z" fill="black"/>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div data-layer="Frame 1686562627" className="Frame1686562627 self-stretch flex flex-col justify-start items-start gap-6">
//       <div data-layer="Frame 1686562612" className="Frame1686562612 self-stretch h-24 px-5 py-3 opacity-50 bg-gray-200 rounded-2xl inline-flex justify-center items-center gap-4">
//         <div data-layer="Frame 1686562624" className="Frame1686562624 flex-1 flex justify-between items-center">
//           <div data-layer="Notification Preferences: Email / In app" className="NotificationPreferencesEmailInApp flex-1 justify-center text-slate-800/50 text-2xl font-bold font-['Poppins'] leading-7 tracking-wide">Notification Preferences: Email / In app</div>
//           <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//             <div data-layer="Button - Primary" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//               <div data-svg-wrapper data-layer="mingcute:notification-newdot-line" className="MingcuteNotificationNewdotLine relative">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99969 9.00024C4.99965 8.03191 5.20052 7.07411 5.5896 6.18739C5.97867 5.30067 6.54749 4.50431 7.26008 3.84867C7.97268 3.19303 8.81355 2.69237 9.72954 2.37834C10.6455 2.0643 11.6167 1.94373 12.5817 2.02424C12.7141 2.03297 12.8434 2.06797 12.9622 2.12718C13.0809 2.1864 13.1867 2.26866 13.2733 2.36916C13.3599 2.46967 13.4257 2.58641 13.4668 2.71258C13.5078 2.83875 13.5234 2.97184 13.5125 3.10408C13.5016 3.23632 13.4645 3.36508 13.4034 3.48284C13.3423 3.6006 13.2583 3.70502 13.1564 3.79001C13.0545 3.875 12.9367 3.93886 12.8099 3.97787C12.6831 4.01688 12.5497 4.03027 12.4177 4.01724C11.7282 3.9594 11.0343 4.04528 10.3797 4.26944C9.72514 4.49361 9.12423 4.85119 8.61498 5.31955C8.10573 5.78792 7.69922 6.35687 7.42118 6.99043C7.14314 7.62399 6.99962 8.30835 6.99969 9.00024V12.5282C6.99965 12.9941 6.89112 13.4536 6.68269 13.8702L5.61769 16.0002H18.3817L17.3167 13.8702C17.1083 13.4536 16.9997 12.9941 16.9997 12.5282V11.0002C16.9997 10.735 17.105 10.4807 17.2926 10.2931C17.4801 10.1056 17.7345 10.0002 17.9997 10.0002C18.2649 10.0002 18.5193 10.1056 18.7068 10.2931C18.8943 10.4807 18.9997 10.735 18.9997 11.0002V12.5282C18.9995 12.6834 19.0355 12.8364 19.1047 12.9752L20.8217 16.4082C20.9056 16.576 20.9452 16.7623 20.9367 16.9497C20.9283 17.137 20.8721 17.3191 20.7735 17.4786C20.6749 17.6381 20.5372 17.7698 20.3734 17.8611C20.2096 17.9524 20.0252 18.0003 19.8377 18.0002H15.8737C15.6512 18.8585 15.1501 19.6186 14.4489 20.1612C13.7478 20.7038 12.8863 20.9982 11.9997 20.9982C11.1131 20.9982 10.2516 20.7038 9.55042 20.1612C8.84926 19.6186 8.34812 18.8585 8.12569 18.0002H4.16169C3.97416 18.0003 3.78975 17.9524 3.62595 17.8611C3.46216 17.7698 3.32442 17.6381 3.22583 17.4786C3.12724 17.3191 3.07106 17.137 3.06263 16.9497C3.05421 16.7623 3.09381 16.576 3.17769 16.4082L4.89369 12.9752C4.96323 12.8365 4.99952 12.6834 4.99969 12.5282V9.00024ZM10.2677 18.0002C10.4432 18.3043 10.6957 18.5567 10.9997 18.7322C11.3038 18.9077 11.6486 19.0001 11.9997 19.0001C12.3507 19.0001 12.6956 18.9077 12.9996 18.7322C13.3037 18.5567 13.5561 18.3043 13.7317 18.0002H10.2677ZM17.4997 4.00024C17.3027 4.00024 17.1076 4.03904 16.9257 4.11442C16.7437 4.1898 16.5783 4.30029 16.439 4.43958C16.2997 4.57886 16.1892 4.74422 16.1139 4.92621C16.0385 5.1082 15.9997 5.30325 15.9997 5.50024C15.9997 5.69722 16.0385 5.89227 16.1139 6.07426C16.1892 6.25625 16.2997 6.42161 16.439 6.5609C16.5783 6.70019 16.7437 6.81067 16.9257 6.88606C17.1076 6.96144 17.3027 7.00024 17.4997 7.00024C17.8975 7.00024 18.279 6.8422 18.5603 6.5609C18.8417 6.27959 18.9997 5.89806 18.9997 5.50024C18.9997 5.10241 18.8417 4.72088 18.5603 4.43958C18.279 4.15827 17.8975 4.00024 17.4997 4.00024ZM13.9997 5.50024C13.9997 4.57198 14.3684 3.68174 15.0248 3.02536C15.6812 2.36899 16.5714 2.00024 17.4997 2.00024C18.4279 2.00024 19.3182 2.36899 19.9746 3.02536C20.6309 3.68174 20.9997 4.57198 20.9997 5.50024C20.9997 6.42849 20.6309 7.31873 19.9746 7.97511C19.3182 8.63149 18.4279 9.00024 17.4997 9.00024C16.5714 9.00024 15.6812 8.63149 15.0248 7.97511C14.3684 7.31873 13.9997 6.42849 13.9997 5.50024Z" fill="black"/>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div data-layer="27 years old" className="YearsOld w-32 h-6 left-[171px] top-[505px] absolute justify-center text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">27 years old</div>
//   <div data-layer="Business Analyst" className="BusinessAnalyst w-44 h-6 left-[170px] top-[684px] absolute justify-center text-slate-500 text-lg font-semibold font-['Poppins'] leading-normal tracking-wide">Business Analyst</div>
// </div>
    
    
//     );
// };

// export default EditProfile;

