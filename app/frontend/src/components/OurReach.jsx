import React from "react";

const OurReachSection = () => {
  const data = [
    {
      number: "12,000+",
      label: "Meaningful Peer Connections",
    },
    {
      number: "85%",
      label: "Users Feel More Confident in Their Job Search",
    },
    {
      number: "25+",
      label: "Active Community in Professional Fields",
    },
  ];

  return (
    <section className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {data.map(({ number, label }, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 sm:p-8 w-full sm:w-[280px] md:w-[300px] lg:w-[360px] min-h-[150px] bg-white rounded-tr-3xl rounded-bl-3xl outline outline-2 sm:outline-4 outline-offset-[-4px] outline-teal-600 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-cyan-950 text-4xl sm:text-5xl md:text-6xl font-bold font-['DM_Sans'] leading-tight tracking-wide text-center">
              {number}
            </div>
            <div className="text-cyan-950 text-lg sm:text-xl md:text-2xl font-normal font-['Poppins'] leading-relaxed tracking-wide text-center mt-4">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurReachSection;


// import React from "react";

// const OurReachSection = () => {
//   return (
//     <div className="OurReachSocialProofs flex flex-wrap justify-center gap-6 w-full px-4 py-10">
//   {[ 
//     {
//       number: "12,000+",
//       label: "Meaningful Peer Connections",
//     },
//     {
//       number: "85%",
//       label: "Users Feel More Confident in Their Job Search",
//     },
//     {
//       number: "25+",
//       label: "Active Community in Professional Fields",
//     }
//   ].map(({ number, label }, index) => (
//     <div
//       key={index}
//       className="flex flex-col justify-between p-8 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] min-h-[150px] bg-white rounded-tr-[32px] rounded-bl-[32px] outline outline-4 outline-offset-[-4px] outline-teal-600"
//     >
//       <div className="text-cyan-950 text-6xl font-bold font-['DM_Sans'] leading-[76px] tracking-wide">
//         {number}
//       </div>
//       <div className="text-cyan-950 text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">
//         {label}
//       </div>
//     </div>
//   ))}
// </div>

//   );
// };

// export default OurReachSection;
