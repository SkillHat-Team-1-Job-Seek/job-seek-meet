
import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-96 py-5 bg-custom-teal flex flex-col justify-start items-center gap-2.5 overflow-hidden">
      {/* Custom styles for gradient border */}
      <style>
        {`
          .gradient-border {
            position: relative;
            border-radius: 32px 0 32px 0;
          }
          .gradient-border::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 32px 0 32px 0;
            padding: 4px;
            background: linear-gradient(135deg, #26A69A, #FBBF24);
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
        `}
      </style>

      <div className="w-full flex flex-col justify-start items-center gap-5">
        <div className="self-stretch text-center text-cyan-950 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-tight sm:leading-[72px] lg:leading-[88px] tracking-wide">
          About Us
        </div>
        <div className="self-stretch bg-neutral-50 rounded-[40px] shadow-[0px_35px_40px_0px_rgba(0,0,0,0.06)] p-4 sm:p-6 lg:p-8">
          {/* Top Row: Text and Image */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Text Card */}
            <div className="w-full lg:flex-1 gradient-border">
              <div className="h-80 bg-white rounded-tl-[32px] rounded-br-[32px] flex flex-col justify-center items-center gap-8 p-6">
                <div className="text-center text-slate-900 text-lg sm:text-xl lg:text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">
                  JobBuddies is passionate about creating a supportive ecosystem for job seekers. We believe that community and connection are key to successful career journeys.
                </div>
              </div>
            </div>
            {/* Image Card */}
            <div className="w-full lg:flex-1 gradient-border">
              <img
                className="w-full h-80 rounded-tl-[32px] rounded-br-[32px] object-cover"
                src="/assets/unsplash_gMsnXqILjp4.png"
                alt="Team meeting"
              />
            </div>
          </div>

          {/* Bottom Row: Vision and Mission */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 mt-4 sm:mt-6 lg:mt-8">
            {/* Vision Card */}
            <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-4">
              <div className="text-cyan-950 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-tight tracking-wide">
                Vision
              </div>
              <div className="w-full gradient-border">
                <div className="h-80 bg-white rounded-tl-[32px] rounded-br-[32px] flex flex-col justify-center items-center gap-8 p-6">
                  <div className="text-center text-slate-900 text-lg sm:text-xl lg:text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">
                    To build the most empowering job-seeking community where professionals connect, collaborate, and grow together.
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-4">
              <div className="text-cyan-950 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-tight tracking-wide">
                Mission
              </div>
              <div className="w-full gradient-border">
                <div className="h-80 bg-white rounded-tl-[32px] rounded-br-[32px] flex flex-col justify-center items-center gap-8 p-6">
                  <div className="text-center text-slate-900 text-lg sm:text-xl lg:text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">
                    JobBuddies is committed to fostering meaningful peer-to-peer connections, enabling job seekers to match with like-minded professionals, and navigate their career paths with confidence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-96 p-4 sm:p-6 bg-yellow-300 rounded-[10px] flex justify-center items-center gap-2.5 mt-6 sm:mt-8 lg:mt-10">
          <div className="flex-1 text-center text-cyan-950 text-lg sm:text-xl font-semibold font-['Poppins']">
            Why JobBuddies
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;