import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is JobBuddies?',
      answer: 'JobBuddies is a web app designed to connect job seekers with fellow job seekers, and also possibly mentors who can provide guidance, support, and advice throughout the job search process.',
    },
    {
      question: 'How does JobBuddies work?',
      answer: 'JobBuddies uses a matching algorithm to pair job seekers across the globe; and sometimes with mentors based on their industry, experience, and career goals. Once matched, users can communicate through the platform to schedule meetings and exchange insights.',
    },
    {
      question: 'Is JobBuddies free to use?',
      answer: 'Yes, JobBuddies is completely free for job seekers. Our mission is to make mentorship and support accessible to all individuals seeking career advancement.',
    },
  ];

  return (
    <div data-layer="[screen] Faq" className="w-full p-28 bg-gray-200 inline-flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div data-layer="text_wrapper" className="self-stretch min-w-[762px] flex flex-col justify-start items-start gap-3 overflow-hidden">
        <div data-layer="heading" className="self-stretch justify-start text-cyan-950 text-7xl font-black font-['Poppins']">
          FAQ
        </div>
      </div>
      <div data-layer="wrapper" className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;


// import React from 'react';

// const FAQSection = () => {
//   return (

// <div data-layer="[screen] Faq" className="w-full p-28 bg-gray-200 inline-flex flex-col justify-start items-start gap-12 overflow-hidden">
//   <div data-layer="text_wrapper" className="self-stretch min-w-[762px] flex flex-col justify-start items-start gap-3 overflow-hidden">
//     <div data-layer="heading" className="self-stretch justify-start text-cyan-950 text-7xl font-black font-['Poppins']">FAQ</div>
//   </div>
//   <div data-layer="wrapper" className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
//     <div data-layer="card_wrapper" className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-gray-50 flex flex-col justify-start items-start overflow-hidden">
//       <div data-layer="header" className="self-stretch min-w-96 p-8 bg-gray-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
//         <div data-layer="Frame 31" className="w-[1168px] h-11 relative overflow-hidden">
//           <div data-layer="question" className="w-[1168px] left-0 top-0 absolute justify-start text-cyan-950 text-4xl font-black font-['Poppins']">What is JobBuddies?</div>
//         </div>
//         <div data-layer="photoWrapper" className="size-16 relative bg-cyan-950 rounded-[60px] overflow-hidden">
//           <div data-layer="plus" className="left-[22px] top-[12px] absolute text-center justify-start text-gray-200 text-3xl font-black font-['Inter']">+</div>
//         </div>
//       </div>
//       <div data-layer="answer_wrap" className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//         <div data-layer="answer" className="flex-1 max-w-[1200px] justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">JobBuddies is a web app designed to connect job seekers with  fellow job seekers, and also possibly mentors who can provide guidance, support, and advice throughout the job search process.</div>
//       </div>
//     </div>
//     <div data-layer="card_wrapper" className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-gray-50 flex flex-col justify-start items-start overflow-hidden">
//       <div data-layer="header" className="self-stretch min-w-96 p-8 bg-gray-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
//         <div data-layer="Frame 31" className="w-[1168px] h-11 relative overflow-hidden">
//           <div data-layer="question" className="w-[1168px] left-0 top-0 absolute justify-start text-cyan-950 text-4xl font-black font-['Poppins']">How does JobBuddies work?</div>
//         </div>
//         <div data-layer="photoWrapper" className="size-16 relative bg-cyan-950 rounded-[60px] overflow-hidden">
//           <div data-layer="plus" className="left-[22px] top-[12px] absolute text-center justify-start text-gray-200 text-3xl font-black font-['Inter']">+</div>
//         </div>
//       </div>
//       <div data-layer="answer_wrap" className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//         <div data-layer="answer" className="flex-1 max-w-[1200px] justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">JobBuddies uses a matching algorithm to pair job seekers across the globe; and sometimes with mentors based on their industry, experience, and career goals. Once matched, users can communicate through the platform to schedule meetings and exchange insights.</div>
//       </div>
//     </div>
//     <div data-layer="card_wrapper" className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-gray-50 flex flex-col justify-start items-start overflow-hidden">
//       <div data-layer="header" className="self-stretch min-w-96 p-8 bg-gray-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden">
//         <div data-layer="Frame 31" className="w-[1168px] h-11 relative overflow-hidden">
//           <div data-layer="question" className="w-[1146px] left-0 top-0 absolute justify-start text-cyan-950 text-4xl font-black font-['Poppins']">Is JobBuddies free to use?</div>
//         </div>
//         <div data-layer="photoWrapper" className="size-16 relative bg-cyan-950 rounded-[60px] overflow-hidden">
//           <div data-layer="plus" className="left-[22px] top-[12px] absolute text-center justify-start text-gray-200 text-3xl font-black font-['Inter']">+</div>
//         </div>
//       </div>
//       <div data-layer="answer_wrap" className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
//         <div data-layer="answer" className="flex-1 max-w-[1200px] justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">Yes, JobBuddies is completely free for job seekers. Our mission is to make mentorship and support accessible to all individuals seeking career advancement.</div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default FAQSection;