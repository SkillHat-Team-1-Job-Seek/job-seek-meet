import React from "react"
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
    return (  
      <div data-layer="Profile Screen" className="ProfileScreen w-[1440px] h-[2777px] relative bg-white overflow-hidden">
        <div data-layer="Frame 1686562487" className="Frame1686562487 w-[1240px] h-28 left-[100px] top-[13px] absolute inline-flex justify-start items-center gap-80">
          <img data-layer="image 108" className="Image108 size-20" src="/assets/image 103.png" />
          <div data-layer="Slider" data-state="Pressed" className="Slider w-72 bg-zinc-200 rounded-2xl flex justify-start items-center">
            <div data-layer="👀 Change my Space-Between!" className="ChangeMySpaceBetween size- bg-yellow-400 rounded-tl-[40px] rounded-bl-[40px] flex justify-start items-start gap-24 overflow-hidden">
              <div data-layer="Ellipse 91" className="Ellipse91 size-3 rounded-full" />
              <div data-layer="Ellipse 92" className="Ellipse92 size-3 rounded-full" />
            </div>
            <div data-layer="🚧 Builder - Slider Indicator" data-label="True" data-state="Pressed" className="BuilderSliderIndicator w-7 h-3 relative rounded-2xl">
              <div data-svg-wrapper data-layer="Rectangle 6" className="Rectangle6 left-[-2px] top-[-10px] absolute">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.990234" y="1" width="30" height="30" rx="15" fill="#FCFCFC" stroke="#32A1B0" stroke-width="2"/>
                </svg>
              </div>
              <div data-svg-wrapper data-layer="Indicator Divet" className="IndicatorDivet left-[14px] top-[2px] absolute">
                <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.990234 1V9" stroke="#03363D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div data-layer="Popover Label" className="PopoverLabel h-9 left-[-77px] top-[-52px] absolute inline-flex flex-col justify-start items-center overflow-hidden">
                <div data-layer="Amount" className="Amount size- px-2 py-1 bg-gradient-to-br from-teal-600 to-yellow-300 rounded-lg flex flex-col justify-start items-start gap-2.5">
                  <div data-layer="H1 Large Title - 48p" className="H1LargeTitle48p text-center justify-center text-neutral-50 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight">56% Profile Completed</div>
                </div>
                <div data-svg-wrapper data-layer="Carat" className="Carat">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z" fill="url(#paint0_linear_3002_67)"/>
                  <defs>
                  <linearGradient id="paint0_linear_3002_67" x1="8.05205" y1="5.12132" x2="4.0799" y2="-0.611979" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#138797"/>
                  <stop offset="1" stop-color="#FCDB32"/>
                  </linearGradient>
                  </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => navigate("/editProfile")} className="w-44 px-8 py-4 rounded-xl outline outline-2 outline-teal-600 text-cyan-950 font-semibold bg-white hover:bg-gray-100 transition-colors">
            Edit Profile
          </button>
          {/* <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
            <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
              <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Edit Profile</div>
            </div> */}
          {/* </div> */}
        </div>
        <div data-layer="Footer" className="Footer w-[1440px] h-[563.50px] left-0 top-[2191px] absolute bg-slate-400 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
          <div data-layer="Frame 1866" className="Frame1866 size- left-[421px] top-[23px] absolute inline-flex flex-col justify-start items-center gap-0.5">
            <div data-layer="Join our Community" className="JoinOurCommunity text-center justify-start text-slate-800 text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Join our Community</div>
            <div data-layer="We’re Stronger Together!" className="WeReStrongerTogether w-[572px] text-center justify-start text-slate-800 text-xl font-normal font-['Poppins'] leading-loose tracking-wide">We’re Stronger Together!</div>
          </div>
          <div data-layer="Frame 1865" className="Frame1865 w-[642px] h-16 left-[399px] top-[140px] absolute inline-flex justify-start items-start gap-8">
            <div data-layer="Frame 1841" className="Frame1841 flex-1 inline-flex flex-col justify-start items-start gap-5">
              <div data-layer="Text Input" data-show-icon="True" data-size="Large" data-state="Default" className="TextInput self-stretch px-5 py-3 bg-gray-100 rounded-2xl inline-flex justify-start items-center gap-4">
                <div data-layer="Frame 238" className="Frame238 flex-1 flex justify-start items-center gap-4">
                  <div data-svg-wrapper data-layer="Mail" className="Mail relative">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div data-layer="Frame 205" className="Frame205 flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
                    <div data-layer="Text input label" className="TextInputLabel justify-center text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Email Address</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
              <div data-layer="Button - Primary" data-icon-placement="Icon Only" data-size="Large" data-state="Default" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
                <div data-svg-wrapper data-layer="Forward Arrow" className="ForwardArrow relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2829 5L20.9999 12L14.2829 19M20.0002 12.0317H4" stroke="#141D38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div data-layer="Footer Black" className="FooterBlack w-[1440px] h-80 left-0 top-[258px] absolute bg-slate-900 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
            <div data-layer="Frame 1686562500" className="Frame1686562500 w-[887px] h-72 left-[307px] top-[27px] absolute">
              <div data-layer="Frame 1686562499" className="Frame1686562499 w-[887px] left-0 top-0 absolute inline-flex flex-col justify-start items-center gap-8">
                <div data-layer="Frame 427319213" className="Frame427319213 w-60 h-5 relative">
                  <div data-svg-wrapper data-layer="Vector" className="Vector left-0 top-[-2.50px] absolute">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.152 0.5H7.22L13.51 9.496L21.06 0.5H23.318L14.37 10.728L24 24.5H16.936L10.366 15.106L2.256 24.5H0L9.506 13.876L0.152 0.5Z" fill="#83C4CC"/>
                    </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector left-[60px] top-[0.14px] absolute">
                    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66663 4.30072C4.13937 4.30072 5.33327 3.36945 5.33327 2.22067C5.33327 1.07189 4.13937 0.140625 2.66663 0.140625C1.19389 0.140625 0 1.07189 0 2.22067C0 3.36945 1.19389 4.30072 2.66663 4.30072Z" fill="#83C4CC"/>
                    </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector left-[62.67px] top-[8.46px] absolute">
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66602 2.46094V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector left-[70.67px] top-[8.46px] absolute">
                    <svg width="5" height="15" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66602 2.46094V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector left-[70.67px] top-[8.46px] absolute">
                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66602 7.66106C2.66602 4.79059 5.65265 2.46094 9.3326 2.46094C13.0126 2.46094 15.9992 4.79059 15.9992 7.66106V12.8612" stroke="#83C4CC" stroke-width="4.20007" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector left-[120px] top-[-2.50px] absolute">
                    <svg width="7" height="25" viewBox="0 0 7 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.51347 5.14753V8.4519H0V12.4922H1.51347V24.5H4.62007V12.4934H6.70542C6.70542 12.4934 6.9008 10.5562 6.99549 8.43747H4.63285V5.67421C4.63285 5.26176 4.97101 4.70622 5.30617 4.70622H7V0.5H4.69748C1.43607 0.5 1.51347 4.54389 1.51347 5.14753Z" fill="#83C4CC"/>
                    </svg>
                  </div>
                </div>
                <div data-layer="Frame 427319216" className="Frame427319216 self-stretch flex flex-col justify-start items-center gap-2.5">
                  <div data-layer="Frame 427319215" className="Frame427319215 self-stretch h-12 inline-flex justify-start items-center gap-24">
                    <div data-layer="Blogs" className="Blogs justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Blogs</div>
                    <div data-svg-wrapper data-layer="Vector" className="Vector">
                      <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 0C3.16304 0 3.79892 0.225765 4.26777 0.627628C4.73661 1.02949 5 1.57454 5 2.14286V37.8571C5 38.4255 4.73661 38.9705 4.26777 39.3724C3.79892 39.7742 3.16304 40 2.5 40C1.83696 40 1.20107 39.7742 0.732233 39.3724C0.263392 38.9705 0 38.4255 0 37.8571V2.14286C0 1.57454 0.263392 1.02949 0.732233 0.627628C1.20107 0.225765 1.83696 0 2.5 0Z" fill="white"/>
                      </svg>
                    </div>
                    <div data-layer="Privacy Policy" className="PrivacyPolicy justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Privacy Policy </div>
                    <div data-svg-wrapper data-layer="Vector" className="Vector">
                      <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 0C3.16304 0 3.79892 0.225765 4.26777 0.627628C4.73661 1.02949 5 1.57454 5 2.14286V37.8571C5 38.4255 4.73661 38.9705 4.26777 39.3724C3.79892 39.7742 3.16304 40 2.5 40C1.83696 40 1.20107 39.7742 0.732233 39.3724C0.263392 38.9705 0 38.4255 0 37.8571V2.14286C0 1.57454 0.263392 1.02949 0.732233 0.627628C1.20107 0.225765 1.83696 0 2.5 0Z" fill="white"/>
                      </svg>
                    </div>
                    <div data-layer="Contact Us" className="ContactUs justify-start text-white text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Contact Us</div>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector">
                    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.05673 17.1015C2.06418 19.0713 2.49694 21.0205 3.33029 22.8378C4.16365 24.655 5.38129 26.3048 6.91369 27.6929C8.44609 29.0809 10.2632 30.1801 12.2614 30.9276C14.2595 31.6752 16.3995 32.0564 18.5592 32.0496C20.7189 32.0428 22.856 31.6481 24.8484 30.888C26.8409 30.128 28.6496 29.0174 30.1715 27.6197C31.6934 26.222 32.8985 24.5646 33.7181 22.7421C34.5377 20.9197 34.9557 18.9678 34.9482 16.998C34.9408 15.0282 34.508 13.079 33.6747 11.2617C32.8413 9.44444 31.6237 7.79468 30.0913 6.40661C28.5589 5.01854 26.7417 3.91936 24.7436 3.17182C22.7455 2.42428 20.6054 2.04303 18.4458 2.04982C16.2861 2.05662 14.149 2.45133 12.1566 3.21142C10.1641 3.97152 8.35533 5.08211 6.83347 6.47978C5.3116 7.87746 4.10647 9.53484 3.28688 11.3573C2.46728 13.1798 2.04928 15.1317 2.05673 17.1015Z" fill="#A0A3BD" stroke="black" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector" className="Vector">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.143 3.28462C10.0747 2.4342 8.68802 1.9921 7.27143 2.05025C5.85485 2.10841 4.51735 2.66235 3.53706 3.59689C2.55822 4.52963 2.01403 5.7722 2.01891 7.06335C2.0238 8.35449 2.57737 9.59362 3.56325 10.5202C4.55057 11.4485 5.89223 11.994 7.30923 12.0433C8.72622 12.0925 10.1095 11.6417 11.1714 10.7846" fill="#A0A3BD"/>
                    <path d="M11.143 3.28462C10.0747 2.4342 8.68802 1.9921 7.27143 2.05025C5.85485 2.10841 4.51735 2.66235 3.53706 3.59689C2.55822 4.52963 2.01403 5.7722 2.01891 7.06335C2.0238 8.35449 2.57737 9.59362 3.56325 10.5202C4.55057 11.4485 5.89223 11.994 7.30922 12.0433C8.72622 12.0925 10.1095 11.6417 11.1714 10.7846" stroke="black" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div data-layer="full_name" className="FullName w-[655.64px] justify-start text-slate-400 text-lg font-semibold font-['Poppins'] leading-tight tracking-[6px]">2025 JobBuddies All Rights Reserved</div>
                </div>
              </div>
              <img data-layer="image 108" className="Image108 size-40 left-[332px] top-[121px] absolute" src="https://placehold.co/158x158" />
            </div>
          </div>
        </div>
        <div data-layer="Frame 1686562565" className="Frame1686562565 w-[654.22px] py-8 left-[130px] top-[400px] absolute inline-flex flex-col justify-start items-start gap-9">
          <div data-layer="Frame 1686562518" className="Frame1686562518 self-stretch flex flex-col justify-start items-start gap-1.5">
            <div data-layer="Full Name" className="FullName self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Full Name</div>
            <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
              <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
                <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
              </div>
            </div>
          </div>
          <div data-layer="Frame 1686562519" className="Frame1686562519 self-stretch flex flex-col justify-start items-start gap-1.5">
            <div data-layer="Age" className="Age self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Age</div>
            <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
              <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
                <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
              </div>
            </div>
          </div>
          <div data-layer="Frame 1686562560" className="Frame1686562560 self-stretch flex flex-col justify-start items-start gap-3.5">
            <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch flex flex-col justify-start items-start gap-1.5">
              <div data-layer="Profession" className="Profession self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Profession</div>
              <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 relative">
                <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] h-24 px-7 py-4 left-0 top-0 absolute bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
                  <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
                </div>
              </div>
            </div>
          </div>
          <div data-layer="Frame 1686562599" className="Frame1686562599 self-stretch flex flex-col justify-start items-start gap-1.5">
            <div data-layer="Location" className="Location self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Location</div>
            <div data-layer="Frame 1852" className="Frame1852 self-stretch h-24 inline-flex justify-start items-start gap-12">
              <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654.22px] px-7 py-4 bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
                <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
              </div>
            </div>
          </div>
          <div data-layer="Frame 1686562561" className="Frame1686562561 self-stretch h-72 flex flex-col justify-start items-start gap-3.5">
            <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch flex flex-col justify-start items-start gap-1.5">
              <div data-layer="Bio" className="Bio self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Bio</div>
              <div data-layer="Frame 1852" className="Frame1852 self-stretch h-56 relative">
                <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput w-[654px] h-56 px-7 py-4 left-0 top-[0.05px] absolute bg-gray-100 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
                  <div data-layer="Frame 205" className="Frame205 self-stretch py-2 rounded-3xl flex flex-col justify-start items-start" />
                </div>
              </div>
            </div>
          </div>
          <div data-layer="Frame 1686562562" className="Frame1686562562 self-stretch h-96 flex flex-col justify-start items-start gap-3.5">
            <div data-layer="Frame 1686562520" className="Frame1686562520 self-stretch h-72 flex flex-col justify-start items-start gap-1.5">
              <div data-layer="Tags" className="Tags self-stretch justify-center text-slate-800 text-2xl font-normal font-['Poppins'] leading-10 tracking-wide">Tags</div>
              <div data-layer="Frame 1853" className="Frame1853 self-stretch h-80 inline-flex justify-start items-start gap-8">
                <div data-layer="Text Input" data-show-icon="False" data-size="Large" data-state="Default" className="TextInput flex-1 h-80 px-5 py-3 bg-gray-100 rounded-2xl inline-flex flex-col justify-start items-start gap-4" />
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Frame 1686562598" className="Frame1686562598 size- left-[100px] top-[2027px] absolute inline-flex justify-start items-center gap-14">
          <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
            <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
              <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Preview</div>
            </div>
          </div>
          <button onClick={() => navigate("/profileDashboard")}
            type="submit"
            className="px-8 py-4 bg-yellow-300 rounded-xl text-cyan-950 font-semibold text-base hover:bg-yellow-400 transition-colors"
          >
            Save
          </button>
          {/* <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
            <div data-layer="Button - Primary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonPrimary w-44 px-8 py-4 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
              <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Save</div>
            </div>
          </div> */}
          <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
            <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
              <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Cancel</div>
            </div>
          </div>
        </div>
        <div data-layer="Frame 1686562517" className="Frame1686562517 w-[727px] left-[391px] top-[168px] absolute inline-flex flex-col justify-start items-center">
          <div data-layer="Profile Setup" className="ProfileSetup self-stretch text-center justify-start text-slate-800 text-5xl font-black font-['Poppins'] leading-[70.20px]">Profile Setup</div>
          <div data-layer="Let others know who you are. This helps with better matches and connections" className="LetOthersKnowWhoYouAreThisHelpsWithBetterMatchesAndConnections self-stretch text-center justify-start text-slate-800 text-2xl font-normal font-['Poppins'] leading-loose">Let others know who you are.  This helps with better matches and connections</div>
        </div>
        <div data-layer="Frame 1686562601" className="Frame1686562601 w-80 h-[548px] left-[975px] top-[885px] absolute inline-flex flex-col justify-start items-center gap-6">
          <div data-layer="Frame 1686562600" className="Frame1686562600 self-stretch h-80 px-5 py-40 bg-zinc-300 rounded-tr-[32px] rounded-bl-[32px] flex flex-col justify-center items-center gap-2.5">
            <div data-layer="Frame 1686562751" className="Frame1686562751 size- flex flex-col justify-start items-center gap-2.5">
              <div data-layer="Upload your picture" className="UploadYourPicture text-center justify-center text-slate-900 text-2xl font-normal font-['Poppins'] leading-7 tracking-wide">Upload your picture</div>
              <div data-layer="JPG, PNG format only" className="JpgPngFormatOnly text-center justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">JPG, PNG format only</div>
            </div>
          </div>
          <div data-layer="Frame 1686562599" className="Frame1686562599 w-80 h-40 flex flex-col justify-start items-start gap-6">
            <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
              <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide Age</div>
              <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
                <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
                <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
                  </svg>
                </div>
              </div>
            </div>
            <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
              <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide Gender</div>
              <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
                <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
                <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
                  </svg>
                </div>
              </div>
            </div>
            <div data-layer="Input - Toggle" data-selected="True" data-state="Default" data-swap="False" className="InputToggle self-stretch inline-flex justify-between items-center">
              <div data-layer="Example string content" className="ExampleStringContent justify-center text-slate-900 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Show / Hide profile</div>
              <div data-layer="Input - Toggle Indicator" data-selected="True" data-state="Default" className="InputToggleIndicator w-16 h-9 p-0.5 bg-yellow-400 rounded-[40px] flex justify-end items-center">
                <div data-layer="Rectangle 162" className="Rectangle162 flex-1 self-stretch rounded-[200px]" />
                <div data-svg-wrapper data-layer="Rectangle 161" className="Rectangle161">
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" width="32" height="32" rx="16" fill="#FCFCFC"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
};

export default CreateProfile;


//       <div data-layer="Profile Screen" className="ProfileScreen w-[1440px] h-[2777px] relative bg-white overflow-hidden">
//   {/* <!-- Header Section --> */}
//   <div data-layer="Frame 1686562487" className="Frame1686562487 w-[1240px] h-28 left-[100px] top-[13px] absolute inline-flex justify-start items-center gap-80">
//     <img data-layer="image 108" className="Image108 size-20" src="https://placehold.co/88x88" />

//     {/* <!-- Slider Section --> */}
//     <div data-layer="Slider" data-state="Pressed" className="Slider w-72 bg-zinc-200 rounded-2xl flex justify-start items-center">
//       <div data-layer="\uD83D\uDC40 Change my Space-Between!" className="ChangeMySpaceBetween size- bg-yellow-400 rounded-tl-[40px] rounded-bl-[40px] flex justify-start items-start gap-24 overflow-hidden">
//         <div data-layer="Ellipse 91" className="Ellipse91 size-3 rounded-full" />
//         <div data-layer="Ellipse 92" className="Ellipse92 size-3 rounded-full" />
//       </div>

//       {/* <!-- Slider Indicator --> */}
//       <div data-layer="\uD83D\uDEA7 Builder - Slider Indicator" data-label="True" data-state="Pressed" className="BuilderSliderIndicator w-7 h-3 relative rounded-2xl">
//         <div data-svg-wrapper data-layer="Rectangle 6" className="Rectangle6 left-[-2px] top-[-10px] absolute">
//           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="0.990234" y="1" width="30" height="30" rx="15" fill="#FCFCFC" stroke="#32A1B0" stroke-width="2"/>
//           </svg>
//         </div>
//         <div data-svg-wrapper data-layer="Indicator Divet" className="IndicatorDivet left-[14px] top-[2px] absolute">
//           <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0.990234 1V9" stroke="#03363D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//         </div>
//         <div data-layer="Popover Label" className="PopoverLabel h-9 left-[-77px] top-[-52px] absolute inline-flex flex-col justify-start items-center overflow-hidden">
//           <div data-layer="Amount" className="Amount size- px-2 py-1 bg-gradient-to-br from-teal-600 to-yellow-300 rounded-lg flex flex-col justify-start items-start gap-2.5">
//             <div data-layer="H1 Large Title - 48p" className="H1LargeTitle48p text-center justify-center text-neutral-50 text-sm font-semibold font-['Poppins'] leading-tight tracking-tight">56% Profile Completed</div>
//           </div>
//           <div data-svg-wrapper data-layer="Carat" className="Carat">
//             <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M4.99023 6L0.660107 0L9.32036 0L4.99023 6Z" fill="url(#paint0_linear_3002_67)"/>
//               <defs>
//                 <linearGradient id="paint0_linear_3002_67" x1="8.05205" y1="5.12132" x2="4.0799" y2="-0.611979" gradientUnits="userSpaceOnUse">
//                   <stop stop-color="#138797"/>
//                   <stop offset="1" stop-color="#FCDB32"/>
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* <!-- Edit Button --> */}
//     <div data-layer="Button - Secondary" className="ButtonSecondary size- flex justify-start items-start">
//       <div data-layer="Button - Secondary" data-icon-placement="No Icon" data-size="Large" data-state="Default" className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4">
//         <div data-layer="Button" className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide">Edit Profile</div>
//       </div>
//     </div>
//   </div>

//   {/* <!-- Footer Section --> */}
//   <div data-layer="Footer" className="Footer w-[1440px] h-[563.50px] left-0 top-[2191px] absolute bg-slate-400 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//     <div data-layer="Frame 1866" className="Frame1866 size- left-[421px] top-[23px] absolute inline-flex flex-col justify-start items-center gap-0.5">
//       <div data-layer="Join our Community" className="JoinOurCommunity text-center justify-start text-slate-800 text-4xl font-bold font-['Poppins'] leading-[48px] tracking-wide">Join our Community</div>
//       <div data-layer="We’re Stronger Together!" className="WeReStrongerTogether w-[572px] text-center justify-start text-slate-800 text-xl font-normal font-['Poppins'] leading-loose tracking-wide">We’re Stronger Together!</div>
//     </div>

//     {/* <!-- Email Input + Submit --> */}
//     <div data-layer="Frame 1865" className="Frame1865 w-[642px] h-16 left-[399px] top-[140px] absolute inline-flex justify-start items-start gap-8">
//       <div data-layer="Frame 1841" className="Frame1841 flex-1 inline-flex flex-col justify-start items-start gap-5">
//         <div data-layer="Text Input" data-show-icon="True" data-size="Large" data-state="Default" className="TextInput self-stretch px-5 py-3 bg-gray-100 rounded-2xl inline-flex justify-start items-center gap-4">
//           <div data-layer="Frame 238" className="Frame238 flex-1 flex justify-start items-center gap-4">
//             <div data-svg-wrapper data-layer="Mail" className="Mail relative">
//               <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
//                 <path d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z" stroke="#141D38" stroke-width="2" stroke-linejoin="round"/>
//               </svg>
//             </div>
//             <div data-layer="Frame 205" className="Frame205 flex-1 py-1.5 rounded-2xl inline-flex flex-col justify-start items-start">
//               <div data-layer="Text input label" className="TextInputLabel justify-center text-slate-500 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Email Address</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Submit Button --> */}
//       <div data-layer="Button - Primary" className="ButtonPrimary size- flex justify-start items-start">
//         <div data-layer="Button - Primary" data-icon-placement="Icon Only" data-size="Large" data-state="Default" className="ButtonPrimary w-24 p-5 bg-yellow-300 rounded-xl flex justify-center items-center gap-4">
//           <div data-svg-wrapper data-layer="Forward Arrow" className="ForwardArrow relative">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M14.2829 5L20.9999 12L14.2829 19M20.0002 12.0317H4" stroke="#141D38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* <!-- Footer Black Section --> */}
//     <div data-layer="Footer Black" className="FooterBlack w-[1440px] h-80 left-0 top-[258px] absolute bg-slate-900 outline outline-1 outline-offset-[-1px] outline-black overflow-hidden">
//       {/* <!-- Content will continue here if needed --> */}
//     </div>
//   </div>
// </div>
//   );
// };


  // Removed duplicate export default statement

    
    