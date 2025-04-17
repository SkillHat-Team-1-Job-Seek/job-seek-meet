import React from "react";

const OurReachSection = () => {
  return (
    <div className="OurReachSocialProofs flex flex-wrap justify-center gap-6 w-full px-4 py-10">
  {[ 
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
    }
  ].map(({ number, label }, index) => (
    <div
      key={index}
      className="flex flex-col justify-between p-8 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] min-h-[150px] bg-white rounded-tr-[32px] rounded-bl-[32px] outline outline-4 outline-offset-[-4px] outline-teal-600"
    >
      <div className="text-cyan-950 text-6xl font-bold font-['DM_Sans'] leading-[76px] tracking-wide">
        {number}
      </div>
      <div className="text-cyan-950 text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">
        {label}
      </div>
    </div>
  ))}
</div>

  //   <div data-layer="Our Reach / Social Proofs" className="OurReachSocialProofs size- inline-flex justify-start items-center gap-9">
  // <div data-layer="Auto Layout Vertical" className="AutoLayoutVertical w-80 p-8 rounded-tr-[32px] rounded-bl-[32px] outline outline-4 outline-offset-[-4px] outline-teal-600 inline-flex flex-col justify-start items-start gap-4">
  //   <div data-layer="12,000+" className="000 self-stretch justify-center text-cyan-950 text-6xl font-bold font-['DM_Sans'] leading-[76px] tracking-wide">12,000+</div>
  //   <div data-layer="Meaningful Peer Connections" className="MeaningfulPeerConnections self-stretch justify-center text-cyan-950 text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">Meaningful Peer Connections</div>
  // </div>
  // <div data-layer="Auto Layout Vertical" className="AutoLayoutVertical w-96 p-8 rounded-tr-[32px] rounded-bl-[32px] outline outline-4 outline-offset-[-4px] outline-teal-600 inline-flex flex-col justify-start items-start gap-4">
  //   <div data-layer="85%" className="self-stretch justify-center text-cyan-950 text-6xl font-bold font-['DM_Sans'] leading-[76px] tracking-wide">85% </div>
  //   <div data-layer="Users Feel More Confident in Their Job Search" className="UsersFeelMoreConfidentInTheirJobSearch w-80 justify-center text-cyan-950 text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">Users Feel More Confident in Their Job Search</div>
  // </div>
  // <div data-layer="Auto Layout Vertical" className="AutoLayoutVertical w-96 p-8 rounded-tr-[32px] rounded-bl-[32px] outline outline-4 outline-offset-[-4px] outline-teal-600 inline-flex flex-col justify-start items-start gap-4">
  //   <div data-layer="25+" className="self-stretch justify-center text-cyan-950 text-6xl font-bold font-['DM_Sans'] leading-[76px] tracking-wide">25+</div>
  //   <div data-layer="Active Community in Professional Fields" className="ActiveCommunityInProfessionalFields self-stretch justify-center text-cyan-950 text-2xl font-normal font-['Poppins'] leading-loose tracking-wide">Active Community in Professional Fields</div>
  // </div>
// </div>
  );
};

export default OurReachSection;
