import React from "react";
import NavigationBar from "./NavigationBar";

const LandingPage = ({ navigateTo }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Navigation */}
      <NavigationBar navigateTo={navigateTo} />
      {/* <div className="w-full flex justify-between items-center px-16 py-6 bg-gray-100">
        <img className="w-20 h-20" src="/assets/image 103.png" alt="Logo" />
        <div className="flex gap-8 text-teal-600 text-2xl font-bold">
          <span>About Us</span>
          <span>Features</span>
          <span>How It Works</span>
        </div>
        <button
          onClick={() => navigateTo("login")}
          className="px-6 py-3 bg-white-300 text-xl font-bold text-black"
        >
          Log in
        </button>
        <button
          onClick={() => navigateTo("signup")}
          className="px-6 py-3 bg-yellow-300 text-black rounded-md text-xl font-semibold"
        >
          Sign Up
        </button>
      </div> */}

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl font-bold text-black">Welcome to Job Seekers Community</h1>
        <p className="text-lg text-gray-600 mt-4">
          Connecting job seekers with opportunities.
        </p>
        <img className="mt-6 w-[80%]" src="/assets/unsplash_g1Kr4Ozfoac.png" alt="Landing Page Banner" />
      </div>
    <div className="w-[1440px] p-28 left-0 top-[5037px] absolute bg-slate-400 inline-flex justify-start items-center gap-12 overflow-hidden">
    <div className="flex-1 max-w-[816px] min-w-[762px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-start gap-2.5 overflow-hidden">
        <div className="flex-1 justify-start text-cyan-900 text-6xl font-black font-['Poppins']">Find Your Buddy</div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-6 flex-wrap content-start overflow-hidden">
        <div className="flex-1 min-w-64 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
          <div className="self-stretch justify-start text-black text-4xl font-extrabold font-['Poppins'] leading-[60.04px] tracking-tight">Search Feature</div>
          <div className="self-stretch justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Find your ideal job buddy based on preferences and skills</div>
        </div>
      </div>
      <div className="self-stretch pt-10 inline-flex justify-start items-start gap-2.5 overflow-hidden">
        <div className="flex-1 max-w-96 p-6 bg-yellow-300 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="flex-1 text-center justify-start text-cyan-950 text-xl font-semibold font-['Poppins']">SUBMIT</div>
        </div>
        <div className="w-96 p-6 rounded-[10px] outline outline-4 outline-offset-[-4px] outline-cyan-900 flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="flex-1 text-center justify-start text-yellow-300 text-xl font-semibold font-['Poppins']">SUBMIT</div>
        </div>
      </div>
    </div>
    <img className="w-96 h-64" src="assets/Frame 1686562482.png" />
  </div>
  <div className="w-[1440px] h-[611px] left-0 top-[8249px] absolute bg-gray-200 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
    <div className="w-[1209px] left-[116px] top-[36px] absolute inline-flex justify-start items-center gap-96 flex-wrap content-center">
      <img className="w-56 h-56" src="/assets/image 103.png" />
      <div className="w-28 justify-start text-black text-xl font-medium font-['Poppins']">Features</div>
      <div className="w-36 justify-start text-black text-xl font-medium font-['Poppins']">How it Works</div>
      <div className="w-24 justify-start text-black text-xl font-medium font-['Poppins']">About Us</div>
      <div className="w-20 pt-1.5 inline-flex flex-col justify-center items-start gap-1 overflow-hidden">
        <div className="w-16 justify-start text-black text-xl font-medium font-['Poppins']">Home</div>
      </div>
      <div className="w-14 inline-flex flex-col justify-start items-start gap-8">
        <div className="w-3 h-3 bg-black" />
        <div className="w-0 h-7 outline outline-[11.67px] outline-offset-[-5.83px] outline-black" />
        <div className="w-0 h-7 outline outline-[11.67px] outline-offset-[-5.83px] outline-black" />
        <div className="w-7 h-7 outline outline-[11.67px] outline-offset-[-5.83px] outline-black" />
        <div className="w-10 h-10 bg-black border-black" />
        <div className="w-10 h-9 bg-black border-black" />
        <div className="w-7 h-14 bg-black" />
      </div>
      <div className="w-[1209px] py-3 outline outline-1 outline-offset-[-1px] outline-black inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="w-[1117px] inline-flex justify-center items-center gap-20">
          <div className="w-6 h-6 outline outline-[2.78px] outline-offset-[-1.39px] outline-black" />
          <div className="w-1.5 h-2 outline outline-[2.78px] outline-offset-[-1.39px] outline-black" />
          <div className="w-96 justify-start text-black text-xl font-medium font-['Poppins']">2025 JobBuddies All Rights Reserved</div>
          <div className="w-36 justify-start text-black text-xl font-medium font-['Poppins']">Privacy Policy</div>
          <div className="w-40 justify-start text-black text-xl font-medium font-['Poppins']">Terms of Service</div>
          <div className="w-28 justify-start text-black text-xl font-medium font-['Poppins']">Contact Us</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[1440px] p-28 left-0 top-[6942px] absolute bg-neutral-400 inline-flex flex-col justify-start items-start gap-12 overflow-hidden">
    <div className="self-stretch min-w-[762px] flex flex-col justify-start items-start gap-3 overflow-hidden">
      <div className="self-stretch justify-start text-cyan-900 text-7xl font-black font-['Inter']">FAQ</div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
      <div className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-stone-50 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch min-w-96 p-8 bg-stone-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
          <div className="w-[1552px] h-11 relative overflow-hidden">
            <div className="w-[1552px] left-0 top-0 absolute justify-start text-4xl font-black font-['Inter']">What is JobBuddies?</div>
          </div>
          <div className="w-16 h-16 relative rounded-[60px] overflow-hidden">
            <div className="left-[22px] top-[12px] absolute text-center justify-start text-neutral-400 text-3xl font-black font-['Inter']">+</div>
          </div>
        </div>
        <div className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
          <div className="flex-1 max-w-[1200px] justify-start text-2xl font-normal font-['Inter']">JobBuddies is a web app designed to connect job seekers with mentors who can provide guidance, support, and advice throughout the job search process.</div>
        </div>
      </div>
      <div className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-stone-50 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch min-w-96 p-8 bg-stone-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
          <div className="w-[1552px] h-11 relative overflow-hidden">
            <div className="w-[1552px] left-0 top-0 absolute justify-start text-4xl font-black font-['Inter']">How does JobBuddies work?</div>
          </div>
          <div className="w-16 h-16 relative rounded-[60px] overflow-hidden">
            <div className="left-[22px] top-[12px] absolute text-center justify-start text-neutral-400 text-3xl font-black font-['Inter']">+</div>
          </div>
        </div>
        <div className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
          <div className="flex-1 max-w-[1200px] justify-start text-2xl font-normal font-['Inter']">JobBuddies uses a matching algorithm to pair job seekers with mentors based on their industry, experience, and career goals. Once matched, users can communicate through the platform to schedule meetings and exchange insights.</div>
        </div>
      </div>
      <div className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-stone-50 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch min-w-96 p-8 bg-stone-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
          <div className="w-[1552px] h-11 relative overflow-hidden">
            <div className="w-[1552px] left-0 top-0 absolute justify-start text-4xl font-black font-['Inter']">Is JobBuddies free to use?</div>
          </div>
          <div className="w-16 h-16 relative rounded-[60px] overflow-hidden">
            <div className="left-[22px] top-[12px] absolute text-center justify-start text-neutral-400 text-3xl font-black font-['Inter']">+</div>
          </div>
        </div>
        <div className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
          <div className="flex-1 max-w-[1200px] justify-start text-2xl font-normal font-['Inter']">Yes, JobBuddies is completely free for job seekers. Our mission is to make mentorship and support accessible to all individuals seeking career advancement.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[1440px] p-28 left-0 top-[3945px] absolute bg-slate-400 inline-flex flex-col justify-start items-start gap-12 overflow-hidden">
    <div className="w-full max-w-[816px] flex flex-col justify-start items-start gap-3 overflow-hidden">
      <div className="self-stretch justify-start text-zinc-900 text-6xl font-black font-['Poppins']">How It Works</div>
      <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Discover how JobBuddies works to help job seekers connect and support each other.</div>
    </div>
    <div className="self-stretch inline-flex justify-start items-start flex-wrap content-start overflow-hidden">
      <div className="flex-1 min-w-96 rounded-[20px] inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
          <div className="w-20 px-8 py-6 bg-zinc-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
            <div className="self-stretch text-center justify-center text-neutral-400 text-3xl font-bold font-['Inter']">1</div>
          </div>
          <div className="flex-1 h-0.5 relative bg-zinc-900" />
        </div>
        <div className="self-stretch pr-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
          <div className="self-stretch p-8 bg-stone-50 rounded-[20px] flex flex-col justify-center items-start gap-3 overflow-hidden">
            <div className="self-stretch justify-start text-cyan-950 text-4xl font-black font-['Inter']">Create a Profile</div>
            <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Inter']">Sign up and create a detailed profile to showcase your skills and interests.</div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-96 rounded-[20px] inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
          <div className="w-20 px-8 py-6 bg-zinc-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
            <div className="self-stretch text-center justify-center text-neutral-400 text-3xl font-bold font-['Inter']">2</div>
          </div>
          <div className="flex-1 h-0.5 relative bg-zinc-900" />
        </div>
        <div className="self-stretch pr-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
          <div className="self-stretch p-8 bg-stone-50 rounded-[20px] flex flex-col justify-center items-start gap-3 overflow-hidden">
            <div className="self-stretch justify-start text-cyan-950 text-4xl font-black font-['Inter']">Find Your Buddy</div>
            <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Inter']">Browse through profiles to find a job buddy who shares your career goals and interests.</div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-96 rounded-[20px] inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
          <div className="w-20 px-8 py-6 bg-zinc-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
            <div className="self-stretch text-center justify-center text-neutral-400 text-3xl font-bold font-['Inter']">3</div>
          </div>
          <div className="flex-1 h-0.5 relative bg-zinc-900" />
        </div>
        <div className="self-stretch pr-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
          <div className="self-stretch p-8 bg-stone-50 rounded-[20px] flex flex-col justify-center items-start gap-3 overflow-hidden">
            <div className="self-stretch justify-start text-cyan-950 text-4xl font-black font-['Inter']">Connect and Support</div>
            <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Inter']">Start a conversation, share insights, and support each other in your job search journey.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[480px] p-14 left-[474px] top-[2247px] absolute bg-neutral-50 rounded-[40px] shadow-[0px_35px_40px_0px_rgba(0,0,0,0.06)] inline-flex flex-col justify-start items-start gap-8">
    <div className="w-96 justify-start text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Login</div>
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div data-show-icon="True" data-size="Large" data-state="Filled" className="self-stretch px-5 py-0.5 bg-neutral-400 rounded-2xl inline-flex justify-start items-center gap-4">
        <div className="w-6 h-6 relative">
          <div className="w-5 h-5 left-[22px] top-[22px] absolute origin-top-left -rotate-180 rounded-full outline outline-2 outline-offset-[-1px] outline-slate-500" />
        </div>
        <div className="flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">Email</div>
          <div className="self-stretch justify-center text-base font-normal font-['Poppins'] leading-7 tracking-wide">jane.doe@email.com</div>
        </div>
      </div>
      <div data-show-icon="True" data-size="Large" data-state="Typing" className="self-stretch px-5 py-2 bg-neutral-50 rounded-2xl inline-flex justify-start items-center gap-4">
        <div className="w-6 h-6 relative">
          <div className="w-5 h-5 left-[22px] top-[22px] absolute origin-top-left -rotate-180 rounded-full outline outline-2 outline-offset-[-1px] outline-slate-500" />
        </div>
        <div className="flex-1 rounded-2xl inline-flex flex-col justify-center items-start">
          <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">Password</div>
          <div className="self-stretch justify-center text-base font-normal font-['Poppins'] leading-7 tracking-wide">•••••••••••••</div>
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-3 h-3 left-[6px] top-[6px] absolute" />
        </div>
      </div>
    </div>
    <div data-icon-placement="No Icon" data-size="Large" data-state="Default" className="self-stretch px-8 py-4 bg-yellow-300 rounded-xl inline-flex justify-center items-center gap-4">
      <div className="text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Login</div>
    </div>
  </div>
  <div className="w-[756px] h-96 px-7 py-8 left-[109px] top-[523px] absolute bg-white/25 rounded-[32px] backdrop-blur-lg inline-flex flex-col justify-start items-start gap-2.5">
    <div className="w-[693px] backdrop-blur-[6.40px] flex flex-col justify-start items-start gap-6">
      <div className="self-stretch backdrop-blur-[2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="flex-1 justify-start"><span class="text-yellow-300 text-6xl font-black font-['Poppins']">Welcome to </span><span class="text-teal-600 text-6xl font-black font-['Poppins']">JobBuddies</span></div>
      </div>
      <div className="inline-flex justify-center items-center gap-2.5">
        <div className="w-[674px] opacity-50 justify-start text-slate-900 text-4xl font-extrabold font-['Poppins'] leading-[60.04px] tracking-tight">Finding a job is hard—but having a community makes it easier.</div>
      </div>
    </div>
  </div>
  <div className="w-[816px] max-w-[816px] left-[300px] top-[1323px] absolute inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
    <div className="self-stretch justify-start text-zinc-900 text-6xl font-black font-['Poppins']">About Us</div>
    <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Discover how JobBuddies works to help job seekers connect and support each other.</div>
  </div>
  <img className="w-[1440px] h-[962px] left-0 top-[2865px] absolute" src="/assets/Frame 1686562482.png" />
  </div>
  );
};

export default LandingPage;

// const LandingPage = ({ navigateTo }) => {
//   return (
//     <div className="w-[1440px] h-[8860px] relative bg-white overflow-hidden">
//   <div className="left-[110px] top-[43px] absolute inline-flex justify-start items-center gap-12">
//     <div className="w-[708px] flex justify-between items-center">
//       <img className="w-20 h-20" src="/assets/image 103.png" />
//       <div className="flex justify-start items-center gap-8">
//         <div className="justify-start text-teal-600 text-2xl font-bold font-['Poppins']">About Us</div>
//         <div className="justify-start text-teal-600 text-2xl font-bold font-['Poppins']">Features</div>
//         <div className="justify-start text-teal-600 text-2xl font-bold font-['Poppins']">How It Works</div>
//       </div>
//     </div>
//     <div className="w-32 h-7 text-center justify-start text-stone-950 text-2xl font-bold font-['Poppins']">Log in </div>
//     <div className="flex justify-start items-center gap-1.5">
//       <div className="rounded-md inline-flex flex-col justify-start items-start gap-16">
//         <div className="px-16 py-5 bg-yellow-300 rounded-[10px] inline-flex justify-center items-center gap-2.5">
//           <div className="w-32 h-7 text-center justify-start text-stone-950 text-xl font-semibold font-['Poppins']">Sign up </div>
//           <img className="w-full" alt="Landing Page Banner" src="/assets/unsplash_g1Kr4Ozfoac.png" />
//           <div className="flex gap-4">
//         <button
//           onClick={() => navigateTo("signup")}
//           className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Sign Up
//         </button>
//         <button
//           onClick={() => navigateTo("login")}
//           className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//         >
//           Login
//         </button>
//       </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="w-[1440px] p-28 left-0 top-[5037px] absolute bg-slate-400 inline-flex justify-start items-center gap-12 overflow-hidden">
//     <div className="flex-1 max-w-[816px] min-w-[762px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
//       <div className="self-stretch inline-flex justify-start items-start gap-2.5 overflow-hidden">
//         <div className="flex-1 justify-start text-cyan-900 text-6xl font-black font-['Poppins']">Find Your Buddy</div>
//       </div>
//       <div className="self-stretch inline-flex justify-start items-start gap-6 flex-wrap content-start overflow-hidden">
//         <div className="flex-1 min-w-64 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
//           <div className="self-stretch justify-start text-black text-4xl font-extrabold font-['Poppins'] leading-[60.04px] tracking-tight">Search Feature</div>
//           <div className="self-stretch justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Find your ideal job buddy based on preferences and skills</div>
//         </div>
//       </div>
//       <div className="self-stretch pt-10 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//         <div className="flex-1 max-w-96 p-6 bg-yellow-300 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
//           <div className="flex-1 text-center justify-start text-cyan-950 text-xl font-semibold font-['Poppins']">SUBMIT</div>
//         </div>
//         <div className="w-96 p-6 rounded-[10px] outline outline-4 outline-offset-[-4px] outline-cyan-900 flex justify-center items-center gap-2.5 overflow-hidden">
//           <div className="flex-1 text-center justify-start text-yellow-300 text-xl font-semibold font-['Poppins']">SUBMIT</div>
//         </div>
//       </div>
//     </div>
//     <img className="w-96 h-64" src="assets/Frame 1686562482.png" />
//   </div>
//   <div className="w-[1440px] h-[611px] left-0 top-[8249px] absolute bg-gray-200 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//     <div className="w-[1209px] left-[116px] top-[36px] absolute inline-flex justify-start items-center gap-96 flex-wrap content-center">
//       <img className="w-56 h-56" src="/assets/image 103.png" />
//       <div className="w-28 justify-start text-black text-xl font-medium font-['Poppins']">Features</div>
//       <div className="w-36 justify-start text-black text-xl font-medium font-['Poppins']">How it Works</div>
//       <div className="w-24 justify-start text-black text-xl font-medium font-['Poppins']">About Us</div>
//       <div className="w-20 pt-1.5 inline-flex flex-col justify-center items-start gap-1 overflow-hidden">
//         <div className="w-16 justify-start text-black text-xl font-medium font-['Poppins']">Home</div>
//       </div>
//       <div className="w-14 inline-flex flex-col justify-start items-start gap-8">
//         <div className="w-3 h-3 bg-black" />
//         <div className="w-0 h-7 outline outline-[11.67px] outline-offset-[-5.83px] outline-black" />
//         <div className="w-0 h-7 outline outline-[11.67px] outline-offset-[-5.83px] outline-black" />
//         <div className="w-7 h-7 outline outline-[11.67px] outline-offset-[-5.83px] outline-black" />
//         <div className="w-10 h-10 bg-black border-black" />
//         <div className="w-10 h-9 bg-black border-black" />
//         <div className="w-7 h-14 bg-black" />
//       </div>
//       <div className="w-[1209px] py-3 outline outline-1 outline-offset-[-1px] outline-black inline-flex flex-col justify-start items-start overflow-hidden">
//         <div className="w-[1117px] inline-flex justify-center items-center gap-20">
//           <div className="w-6 h-6 outline outline-[2.78px] outline-offset-[-1.39px] outline-black" />
//           <div className="w-1.5 h-2 outline outline-[2.78px] outline-offset-[-1.39px] outline-black" />
//           <div className="w-96 justify-start text-black text-xl font-medium font-['Poppins']">2025 JobBuddies All Rights Reserved</div>
//           <div className="w-36 justify-start text-black text-xl font-medium font-['Poppins']">Privacy Policy</div>
//           <div className="w-40 justify-start text-black text-xl font-medium font-['Poppins']">Terms of Service</div>
//           <div className="w-28 justify-start text-black text-xl font-medium font-['Poppins']">Contact Us</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="w-[1440px] p-28 left-0 top-[6942px] absolute bg-neutral-400 inline-flex flex-col justify-start items-start gap-12 overflow-hidden">
//     <div className="self-stretch min-w-[762px] flex flex-col justify-start items-start gap-3 overflow-hidden">
//       <div className="self-stretch justify-start text-cyan-900 text-7xl font-black font-['Inter']">FAQ</div>
//     </div>
//     <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
//       <div className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-stone-50 flex flex-col justify-start items-start overflow-hidden">
//         <div className="self-stretch min-w-96 p-8 bg-stone-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
//           <div className="w-[1552px] h-11 relative overflow-hidden">
//             <div className="w-[1552px] left-0 top-0 absolute justify-start text-4xl font-black font-['Inter']">What is JobBuddies?</div>
//           </div>
//           <div className="w-16 h-16 relative rounded-[60px] overflow-hidden">
//             <div className="left-[22px] top-[12px] absolute text-center justify-start text-neutral-400 text-3xl font-black font-['Inter']">+</div>
//           </div>
//         </div>
//         <div className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//           <div className="flex-1 max-w-[1200px] justify-start text-2xl font-normal font-['Inter']">JobBuddies is a web app designed to connect job seekers with mentors who can provide guidance, support, and advice throughout the job search process.</div>
//         </div>
//       </div>
//       <div className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-stone-50 flex flex-col justify-start items-start overflow-hidden">
//         <div className="self-stretch min-w-96 p-8 bg-stone-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
//           <div className="w-[1552px] h-11 relative overflow-hidden">
//             <div className="w-[1552px] left-0 top-0 absolute justify-start text-4xl font-black font-['Inter']">How does JobBuddies work?</div>
//           </div>
//           <div className="w-16 h-16 relative rounded-[60px] overflow-hidden">
//             <div className="left-[22px] top-[12px] absolute text-center justify-start text-neutral-400 text-3xl font-black font-['Inter']">+</div>
//           </div>
//         </div>
//         <div className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//           <div className="flex-1 max-w-[1200px] justify-start text-2xl font-normal font-['Inter']">JobBuddies uses a matching algorithm to pair job seekers with mentors based on their industry, experience, and career goals. Once matched, users can communicate through the platform to schedule meetings and exchange insights.</div>
//         </div>
//       </div>
//       <div className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-stone-50 flex flex-col justify-start items-start overflow-hidden">
//         <div className="self-stretch min-w-96 p-8 bg-stone-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
//           <div className="w-[1552px] h-11 relative overflow-hidden">
//             <div className="w-[1552px] left-0 top-0 absolute justify-start text-4xl font-black font-['Inter']">Is JobBuddies free to use?</div>
//           </div>
//           <div className="w-16 h-16 relative rounded-[60px] overflow-hidden">
//             <div className="left-[22px] top-[12px] absolute text-center justify-start text-neutral-400 text-3xl font-black font-['Inter']">+</div>
//           </div>
//         </div>
//         <div className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//           <div className="flex-1 max-w-[1200px] justify-start text-2xl font-normal font-['Inter']">Yes, JobBuddies is completely free for job seekers. Our mission is to make mentorship and support accessible to all individuals seeking career advancement.</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="w-[1440px] p-28 left-0 top-[3945px] absolute bg-slate-400 inline-flex flex-col justify-start items-start gap-12 overflow-hidden">
//     <div className="w-full max-w-[816px] flex flex-col justify-start items-start gap-3 overflow-hidden">
//       <div className="self-stretch justify-start text-zinc-900 text-6xl font-black font-['Poppins']">How It Works</div>
//       <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Discover how JobBuddies works to help job seekers connect and support each other.</div>
//     </div>
//     <div className="self-stretch inline-flex justify-start items-start flex-wrap content-start overflow-hidden">
//       <div className="flex-1 min-w-96 rounded-[20px] inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
//         <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
//           <div className="w-20 px-8 py-6 bg-zinc-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
//             <div className="self-stretch text-center justify-center text-neutral-400 text-3xl font-bold font-['Inter']">1</div>
//           </div>
//           <div className="flex-1 h-0.5 relative bg-zinc-900" />
//         </div>
//         <div className="self-stretch pr-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
//           <div className="self-stretch p-8 bg-stone-50 rounded-[20px] flex flex-col justify-center items-start gap-3 overflow-hidden">
//             <div className="self-stretch justify-start text-cyan-950 text-4xl font-black font-['Inter']">Create a Profile</div>
//             <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Inter']">Sign up and create a detailed profile to showcase your skills and interests.</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 min-w-96 rounded-[20px] inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
//         <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
//           <div className="w-20 px-8 py-6 bg-zinc-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
//             <div className="self-stretch text-center justify-center text-neutral-400 text-3xl font-bold font-['Inter']">2</div>
//           </div>
//           <div className="flex-1 h-0.5 relative bg-zinc-900" />
//         </div>
//         <div className="self-stretch pr-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
//           <div className="self-stretch p-8 bg-stone-50 rounded-[20px] flex flex-col justify-center items-start gap-3 overflow-hidden">
//             <div className="self-stretch justify-start text-cyan-950 text-4xl font-black font-['Inter']">Find Your Buddy</div>
//             <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Inter']">Browse through profiles to find a job buddy who shares your career goals and interests.</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 min-w-96 rounded-[20px] inline-flex flex-col justify-center items-start gap-3 overflow-hidden">
//         <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
//           <div className="w-20 px-8 py-6 bg-zinc-900 rounded-[60px] inline-flex flex-col justify-center items-center gap-3 overflow-hidden">
//             <div className="self-stretch text-center justify-center text-neutral-400 text-3xl font-bold font-['Inter']">3</div>
//           </div>
//           <div className="flex-1 h-0.5 relative bg-zinc-900" />
//         </div>
//         <div className="self-stretch pr-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
//           <div className="self-stretch p-8 bg-stone-50 rounded-[20px] flex flex-col justify-center items-start gap-3 overflow-hidden">
//             <div className="self-stretch justify-start text-cyan-950 text-4xl font-black font-['Inter']">Connect and Support</div>
//             <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Inter']">Start a conversation, share insights, and support each other in your job search journey.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="w-[480px] p-14 left-[474px] top-[2247px] absolute bg-neutral-50 rounded-[40px] shadow-[0px_35px_40px_0px_rgba(0,0,0,0.06)] inline-flex flex-col justify-start items-start gap-8">
//     <div className="w-96 justify-start text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Login</div>
//     <div className="self-stretch flex flex-col justify-start items-start gap-6">
//       <div data-show-icon="True" data-size="Large" data-state="Filled" className="self-stretch px-5 py-0.5 bg-neutral-400 rounded-2xl inline-flex justify-start items-center gap-4">
//         <div className="w-6 h-6 relative">
//           <div className="w-5 h-5 left-[22px] top-[22px] absolute origin-top-left -rotate-180 rounded-full outline outline-2 outline-offset-[-1px] outline-slate-500" />
//         </div>
//         <div className="flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
//           <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">Email</div>
//           <div className="self-stretch justify-center text-base font-normal font-['Poppins'] leading-7 tracking-wide">jane.doe@email.com</div>
//         </div>
//       </div>
//       <div data-show-icon="True" data-size="Large" data-state="Typing" className="self-stretch px-5 py-2 bg-neutral-50 rounded-2xl inline-flex justify-start items-center gap-4">
//         <div className="w-6 h-6 relative">
//           <div className="w-5 h-5 left-[22px] top-[22px] absolute origin-top-left -rotate-180 rounded-full outline outline-2 outline-offset-[-1px] outline-slate-500" />
//         </div>
//         <div className="flex-1 rounded-2xl inline-flex flex-col justify-center items-start">
//           <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">Password</div>
//           <div className="self-stretch justify-center text-base font-normal font-['Poppins'] leading-7 tracking-wide">•••••••••••••</div>
//         </div>
//         <div className="w-6 h-6 relative">
//           <div className="w-3 h-3 left-[6px] top-[6px] absolute" />
//         </div>
//       </div>
//     </div>
//     <div data-icon-placement="No Icon" data-size="Large" data-state="Default" className="self-stretch px-8 py-4 bg-yellow-300 rounded-xl inline-flex justify-center items-center gap-4">
//       <div className="text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Login</div>
//     </div>
//   </div>
//   <div className="w-[756px] h-96 px-7 py-8 left-[109px] top-[523px] absolute bg-white/25 rounded-[32px] backdrop-blur-lg inline-flex flex-col justify-start items-start gap-2.5">
//     <div className="w-[693px] backdrop-blur-[6.40px] flex flex-col justify-start items-start gap-6">
//       <div className="self-stretch backdrop-blur-[2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
//         <div className="flex-1 justify-start"><span class="text-yellow-300 text-6xl font-black font-['Poppins']">Welcome to </span><span class="text-teal-600 text-6xl font-black font-['Poppins']">JobBuddies</span></div>
//       </div>
//       <div className="inline-flex justify-center items-center gap-2.5">
//         <div className="w-[674px] opacity-50 justify-start text-slate-900 text-4xl font-extrabold font-['Poppins'] leading-[60.04px] tracking-tight">Finding a job is hard—but having a community makes it easier.</div>
//       </div>
//     </div>
//   </div>
//   <div className="w-[816px] max-w-[816px] left-[300px] top-[1323px] absolute inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
//     <div className="self-stretch justify-start text-zinc-900 text-6xl font-black font-['Poppins']">About Us</div>
//     <div className="self-stretch opacity-50 justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Discover how JobBuddies works to help job seekers connect and support each other.</div>
//   </div>
//   <img className="w-[1440px] h-[962px] left-0 top-[2865px] absolute" src="/assets/Frame 1686562482.png" />
// </div>
//   );
// };


// export default LandingPage;
