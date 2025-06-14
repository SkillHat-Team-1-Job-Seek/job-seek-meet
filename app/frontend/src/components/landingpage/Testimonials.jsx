import React from 'react';
import backgroundImage from './testimonials-bg.png'; // Adjust the filename if necessary
import PrimaryButton from '../ui/PrimaryButton'; // Adjust the import path if necessary

const Testimonials = () => {
  return (
    <div
      className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 sm:py-10 relative flex flex-col justify-start items-center gap-6 sm:gap-10 lg:gap-14"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative w-full flex flex-col justify-start items-center">
        {/* Heading and Paragraph */}
        <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-3">
          <div className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-tight sm:leading-[72px] lg:leading-[88px] tracking-wide">
            Success Stories
          </div>
          <div className="opacity-50 text-center text-gray-50 text-lg sm:text-xl lg:text-2xl font-bold font-['Poppins']">
            Our users love the ease of creating profiles with JobBuddies. Here's what they have to say:
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-10 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative">
          {/* Opening Quote SVG */}
          <div className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 lg:-top-12 lg:-left-12">
            <svg width="60" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.185 15.25C15.7809 15.25 18.3185 16.0198 20.4769 17.462C22.6353 18.9042 24.3175 20.954 25.3109 23.3523C26.3043 25.7506 26.5642 28.3896 26.0578 30.9356C25.5514 33.4816 24.3013 35.8202 22.4658 37.6558C20.6302 39.4913 18.2916 40.7414 15.7456 41.2478C13.1996 41.7542 10.5606 41.4943 8.16228 40.5009C5.764 39.5075 3.71416 37.8253 2.27196 35.6669C0.829768 33.5085 0.06 30.9709 0.06 28.375L0 26.5C0 19.5381 2.76562 12.8613 7.68845 7.93845C12.6113 3.01562 19.2881 0.25 26.25 0.25V7.75C23.7866 7.74338 21.3464 8.22516 19.0704 9.16749C16.7944 10.1098 14.7277 11.494 12.99 13.24C12.3145 13.914 11.6914 14.6386 11.1263 15.4075C11.7988 15.3 12.4838 15.2463 13.1813 15.2463L13.185 15.25ZM46.935 15.25C49.5309 15.25 52.0685 16.0198 54.2269 17.462C56.3853 18.9042 58.0675 20.954 59.0609 23.3523C60.0543 25.7506 60.3142 28.3896 59.8078 30.9356C59.3014 33.4816 58.0513 35.8202 56.2158 37.6558C54.3802 39.4913 52.0416 40.7414 49.4956 41.2478C46.9496 41.7542 44.3106 41.4943 41.9123 40.5009C39.514 39.5075 37.4642 37.8253 36.022 35.6669C34.5798 33.5085 33.81 30.9709 33.81 28.375L33.75 26.5C33.75 19.5381 36.5156 12.8613 41.4384 7.93845C46.3613 3.01562 53.0381 0.25 60 0.25V7.75C57.5366 7.74338 55.0964 8.22516 52.8204 9.16749C50.5444 10.1098 48.4777 11.494 46.74 13.24C46.0645 13.914 45.4414 14.6386 44.8763 15.4075C45.5488 15.3 46.235 15.25 46.935 15.25Z"
                fill="#83C4CC"
              />
            </svg>
          </div>

          {/* First Row: Emily Johnson and Michael Smith */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1: Emily Johnson */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-[450px] lg:max-w-[560px] p-4 sm:p-6 bg-white rounded-tr-[32px] rounded-bl-[32px] flex justify-start items-start gap-4">
              <img
                className="size-12 sm:size-16 relative rounded-full"
                src="/assets/photoWrapper.png"
                alt="Emily Johnson"
              />
              <div className="flex-1 pt-1.5 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch text-cyan-950 text-lg sm:text-xl font-black font-['Poppins']">
                  Emily Johnson
                </div>
                <div className="self-stretch text-gray-600 text-base sm:text-xl font-normal font-['Poppins']">
                  JobBuddies made it so simple to showcase my skills and experience. I got job offers within days of creating my profile!
                </div>
              </div>
            </div>

            {/* Card 2: Michael Smith */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-[450px] lg:max-w-[560px] p-4 sm:p-6 bg-white rounded-tr-[32px] rounded-bl-[32px] flex justify-start items-start gap-4">
              <img
                className="size-12 sm:size-16 relative rounded-full"
                src="/assets/photoWrapper 2.png"
                alt="Michael Smith"
              />
              <div className="flex-1 pt-1.5 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch text-cyan-950 text-lg sm:text-xl font-black font-['Poppins']">
                  Michael Smith
                </div>
                <div className="self-stretch text-gray-600 text-base sm:text-xl font-normal font-['Poppins']">
                  I was amazed by how user-friendly JobBuddies is. Creating my profile was a breeze, and I landed my dream job thanks to this platform.
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Sophia Williams */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-[450px] lg:max-w-[560px] p-4 sm:p-6 bg-white rounded-tr-[32px] rounded-bl-[32px] flex justify-start items-start gap-4 relative">
              <img
                className="size-12 sm:size-16 relative rounded-full"
                src="/assets/photoWrapper 3.png"
                alt="Sophia Williams"
              />
              <div className="flex-1 pt-1.5 flex flex-col justify-center items-start gap-1">
                <div className="self-stretch text-cyan-950 text-lg sm:text-xl font-black font-['Poppins']">
                  Sophia Williams
                </div>
                <div className="self-stretch text-gray-600 text-base sm:text-xl font-normal font-['Poppins']">
                  JobBuddies helped me highlight my strengths and stand out to employers. I highly recommend it to anyone looking to boost their career.
                </div>
              </div>
              {/* Closing Quote SVG */}
              <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 lg:-bottom-12 lg:-right-12">
                <svg width="60" height="55" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.8282 35C44.2349 35 41.6998 33.9736 39.5436 32.0507C37.3874 30.1278 35.7068 27.3947 34.7144 24.197C33.722 20.9993 33.4623 17.4806 33.9682 14.0859C34.4741 10.6913 35.7229 7.57306 37.5567 5.12564C39.3904 2.67822 41.7267 1.01151 44.2702 0.336265C46.8136 -0.338976 49.45 0.00758245 51.8459 1.33212C54.2418 2.65665 56.2896 4.89967 57.7303 7.77753C59.1711 10.6554 59.9401 14.0388 59.9401 17.5L60 20C60 24.5963 59.3217 29.1475 58.0038 33.3939C56.686 37.6403 54.7543 41.4987 52.3192 44.7487C49.8841 47.9988 46.9932 50.5769 43.8116 52.3358C40.63 54.0947 37.22 55 33.7762 55V45C36.2371 45.0088 38.6749 44.3665 40.9487 43.11C43.2224 41.8536 45.287 40.008 47.023 37.68C47.6978 36.7813 48.3202 35.8152 48.8849 34.79C48.2044 34.9316 47.5168 35.0035 46.8282 35.005V35ZM13.1119 35C10.5186 35 7.98356 33.9736 5.82732 32.0507C3.67108 30.1278 1.9905 27.3947 0.998089 24.197C0.00568127 20.9993 -0.253978 17.4806 0.251947 14.0859C0.757872 10.6913 2.00666 7.57306 3.84039 5.12564C5.67412 2.67822 8.01043 1.01151 10.5539 0.336265C13.0973 -0.338976 15.7337 0.00758245 18.1296 1.33212C20.5255 2.65665 22.5733 4.89967 24.014 7.77753C25.4548 10.6554 26.2238 14.0388 26.2238 17.5L26.2837 20C26.2837 29.2826 23.5209 38.185 18.603 44.7487C13.685 51.3125 7.01492 55 0.0599459 55V45C2.52085 45.0088 4.95866 44.3665 7.2324 43.11C9.50613 41.8536 11.5707 40.008 13.3067 37.68C13.9815 36.7813 14.604 35.8152 15.1686 34.79C14.4881 34.9316 13.8006 35.0035 13.1119 35.005V35Z"
                    fill="#83C4CC"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="w-full max-w-xs sm:max-w-sm lg:max-w-96 p-4 sm:p-6 bg-yellow-300 rounded-[10px] flex justify-center items-center gap-2.5 mt-6 sm:mt-10">
          <div className="flex-1 text-center text-cyan-950 text-lg sm:text-xl font-semibold font-['Poppins']">
            Explore More
          </div>
        </div> */}
         <PrimaryButton
          text="Explore More"
          onClick={() => {
            window.location.href = '/signup'; 
          }}
        />
      </div>
    </div>
  );
};

export default Testimonials;