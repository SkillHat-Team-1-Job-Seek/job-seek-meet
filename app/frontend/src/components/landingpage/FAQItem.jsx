import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div data-layer="card_wrapper" className="self-stretch rounded-[20px] outline outline-2 outline-offset-[-2px] outline-gray-50 flex flex-col justify-start items-start overflow-hidden">
      <div
        data-layer="header"
        className="self-stretch min-w-96 p-8 bg-gray-50 rounded-tl-[20px] rounded-tr-[20px] inline-flex justify-between items-center overflow-hidden cursor-pointer"
        onClick={toggleExpand}
      >
        <div data-layer="Frame 31" className="w-[1168px] h-11 relative overflow-hidden">
          <div data-layer="question" className="w-[1168px] left-0 top-0 absolute justify-start text-cyan-950 text-4xl font-black font-['Poppins']">
            {question}
          </div>
        </div>
        <div data-layer="photoWrapper" className="size-16 relative bg-cyan-950 rounded-[60px] overflow-hidden">
          <div data-layer="plus" className="left-[22px] top-[12px] absolute text-center justify-start text-gray-200 text-3xl font-black font-['Inter']">
            {isExpanded ? '−' : '+'}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div data-layer="answer_wrap" className="self-stretch p-8 inline-flex justify-start items-start gap-2.5 overflow-hidden">
          <div data-layer="answer" className="flex-1 max-w-[1200px] justify-start text-cyan-950 text-2xl font-normal font-['Poppins']">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;