import React from 'react';
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const Connections = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (e.g., clear auth token)
    navigate('/login');
  };

  const connections = [
    { name: 'John Smith', role: 'Software Engineer', description: 'Collaborating on projects', status: 'Active', img: '/assets/John Smith.png' },
    { name: 'Esther Howard', role: 'Marketing Specialist', description: 'Looking for internships', status: 'Inactive', img: '/assets/Esther Howard.png' },
    { name: 'Jacob Jones', role: 'Product Designer', description: 'Open to mentorship', status: 'Active', img: '/assets/Jacob Jones.png' },
    { name: 'Lovelyn Mars', role: 'Data Analyst', description: 'Open to mentorship', status: 'Active', img: '/assets/Lovelyn Mars.png' },
    { name: 'Kelvin Hunt', role: 'Software  Engineer ', description: 'Looking for internships', status: 'Active', img: '/assets/Kelvin Hunt.png' },
    { name: 'Bianca Hugs', role: 'Software  Engineer ', description: 'Looking for internships', status: 'Active', img: '/assets/Bianca Hugs.png' },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
         {/* Header */}
         <DashboardHeader />
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* My 1:1 Connection Header */}
        <div className="bg-white p-6 rounded-lg shadow mb-12">
          <div className="flex items-center mb-24">
            {/* Centered Text Container */}
            <div className="flex-1 text-center">
              <h2 className="text-5xl font-bold text-gray-800">My 1:1 Connection</h2>
              <p className="text-sm text-gray-600 mt-2">
                Your circle of support—engage, grow, thrive together.
              </p>
            </div>
            {/* Active / Inactive Toggle */}
            <div className="flex items-center space-x-2 ml-auto">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Active / Inactive</span>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Connection List */}
          <div className="space-y-4">
            {connections.map((connection, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg w-full">
                <div className="flex items-center space-x-3">
                  {/* Image Placeholder */}
                  <img
                    src={`${connection.img}`}
                    alt={`${connection.name} avatar`}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  {/* Name, Role, and Description */}
                  <div>
                    <p className="text-3xl font-semibold text-gray-600">{connection.name}</p>
                    <p className="text-3xl font-medium text-gray-400">{connection.role}</p>
                    <p className="text-3xl font-medium text-gray-400">{connection.description}</p>
                  </div>
                </div>
                {/* Message Button */}
                <button className="ml-auto px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                  Message
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Connections;


    {/* <div
      data-layer="Connections"
      className="Connections w-[1440px] h-[2401px] relative bg-white overflow-hidden"
    >
      <div
        data-layer="Connections"
        className="Connections left-[150px] top-[72px] absolute text-center justify-start text-slate-800 text-5xl font-black font-['Poppins'] leading-[70.20px]"
      >
        Connections
      </div>
      <div
        data-layer="Frame 1686562619"
        className="Frame1686562619 w-[1150px] left-[144px] top-[191px] absolute bg-teal-500/5 inline-flex justify-start items-center gap-24"
      >
        <div
          data-layer="Frame 1686562612"
          className="Frame1686562612 w-80 h-16 px-5 py-3 opacity-50 bg-gray-200 rounded-2xl flex justify-center items-center gap-4"
        >
          <div
            data-layer="Search"
            className="Search flex-1 justify-center text-slate-800/50 text-2xl font-bold font-['Poppins'] leading-7 tracking-wide"
          >
            Search
          </div>
        </div>
        <div
          data-layer="Frame 1686562614"
          className="Frame1686562614 w-56 h-16 px-5 py-3 opacity-50 bg-gray-200 rounded-2xl flex justify-center items-center gap-4"
        >
          <div
            data-layer="Industry"
            className="Industry flex-1 justify-center text-slate-800 text-2xl font-bold font-['Poppins'] leading-7 tracking-wide"
          >
            Industry
          </div>
          <div data-svg-wrapper data-layer="Vector" className="Vector">
            <svg
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 0L13 9.6L22.75 0L26 3.2L13 16L0 3.2L3.25 0Z"
                fill="#4E4B66"
              />
            </svg>
          </div>
        </div>
        <div
          data-layer="Frame 1686562613"
          className="Frame1686562613 w-96 h-16 px-5 py-3 opacity-50 bg-gray-200 rounded-2xl flex justify-center items-center gap-4"
        >
          <div
            data-layer="Invite New Connection"
            className="InviteNewConnection flex-1 text-center justify-center text-slate-800 text-2xl font-bold font-['Poppins'] leading-7 tracking-wide"
          >
            Invite New Connection
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 1686562621"
        className="Frame1686562621 w-48 p-2.5 left-[631px] top-[1964px] absolute bg-slate-50 inline-flex flex-col justify-start items-start gap-2.5"
      >
        <div
          data-layer="Stepper - Increment"
          data-number="False"
          data-orientation="Horizontal"
          className="StepperIncrement self-stretch inline-flex justify-start items-center gap-5"
        >
          <div
            data-layer="🚧 Builder - Increment Inputs"
            data-action="Remove"
            data-state="Default"
            className="BuilderIncrementInputs size-20 bg-neutral-50 rounded-[53.62px] inline-flex flex-col justify-center items-center gap-6 overflow-hidden"
          >
            <div data-svg-wrapper data-layer="Minus" className="Minus relative">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.03125 15L25.9687 15"
                  stroke="#14142B"
                  stroke-width="4.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            data-layer="🚧 Builder - Increment Inputs"
            data-action="Add"
            data-state="Default"
            className="BuilderIncrementInputs size-20 bg-neutral-50 rounded-[53.62px] inline-flex flex-col justify-center items-center gap-14 overflow-hidden"
          >
            <div data-svg-wrapper data-layer="Plus" className="Plus relative">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 4.03125V25.9688M4.53125 15H26.4688"
                  stroke="#14142B"
                  stroke-width="4.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 1686562617"
        className="Frame1686562617 size- left-[1065px] top-[309px] absolute inline-flex justify-start items-center gap-2"
      >
        <div data-svg-wrapper data-layer="Ellipse 29" className="Ellipse29">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="#008A00" />
          </svg>
        </div>
        <div
          data-layer="Active / Inactive"
          className="ActiveInactive justify-start text-black text-base font-semibold font-['Poppins'] leading-tight tracking-wide"
        >
          Active / Inactive
        </div>
        <div data-svg-wrapper data-layer="Ellipse 30" className="Ellipse30">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="#D9DBE9" />
          </svg>
        </div>
      </div>
      <div
        data-layer="Frame 1686562620"
        className="Frame1686562620 w-[1147px] h-[1557.60px] left-[150px] top-[383px] absolute bg-teal-500/5 rounded-[32px] outline outline-2 outline-offset-[-2px] outline-cyan-950"
      >
        <div
          data-layer="Frame 1686562610"
          className="Frame1686562610 w-[1147px] px-4 left-0 top-0 absolute inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 1686562596"
            className="Frame1686562596 size- flex justify-start items-center"
          >
            <div
              data-layer="Frame 1686562629"
              className="Frame1686562629 size-24 px-0.5 py-2.5 rounded-[50px] flex justify-end items-end gap-2.5"
            >
              <div
                data-svg-wrapper
                data-layer="Ellipse 36"
                className="Ellipse36"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8.80078" r="8" fill="#008A00" />
                </svg>
              </div>
            </div>
            <div
              data-layer="Frame 166"
              className="Frame166 size- px-8 py-4 inline-flex flex-col justify-start items-start overflow-hidden"
            >
              <div
                data-layer="John Smith"
                className="JohnSmith justify-center text-gray-600 text-3xl font-semibold font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                John Smith
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Software Engineer{" "}
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Collaborating on projects{" "}
              </div>
            </div>
          </div>
          <div
            data-layer="Button - Secondary"
            className="ButtonSecondary size- flex justify-start items-start"
          >
            <div
              data-layer="Button - Secondary"
              data-icon-placement="No Icon"
              data-size="Large"
              data-state="Default"
              className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
            >
              <div
                data-layer="Button"
                className="Button text-center justify-center text-cyan-950 text-lg font-semibold font-['Poppins'] leading-loose tracking-wide"
              >
                Message
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 1686562611"
          className="Frame1686562611 w-[1147px] px-4 left-0 top-[260px] absolute inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 1686562596"
            className="Frame1686562596 size- flex justify-start items-center"
          >
            <div
              data-layer="Frame 1686562630"
              className="Frame1686562630 size-24 px-[5px] py-2.5 rounded-[50px] flex justify-end items-end gap-2.5"
            >
              <div
                data-svg-wrapper
                data-layer="Ellipse 35"
                className="Ellipse35"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8.80078" r="8" fill="#008A00" />
                </svg>
              </div>
            </div>
            <div
              data-layer="Frame 166"
              className="Frame166 size- px-8 py-4 inline-flex flex-col justify-start items-start overflow-hidden"
            >
              <div
                data-layer="Esther Howard"
                className="EstherHoward justify-center text-gray-600 text-3xl font-semibold font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Esther Howard
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Marketing Specialist{" "}
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Looking for internships{" "}
              </div>
            </div>
          </div>
          <div
            data-layer="Button - Secondary"
            className="ButtonSecondary size- flex justify-start items-start"
          >
            <div
              data-layer="Button - Secondary"
              data-icon-placement="No Icon"
              data-size="Large"
              data-state="Default"
              className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
            >
              <div
                data-layer="Button"
                className="Button text-center justify-center text-cyan-950 text-lg font-semibold font-['Poppins'] leading-loose tracking-wide"
              >
                Message
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 1686562606"
          className="Frame1686562606 w-[1147px] px-4 left-0 top-[520px] absolute inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 1686562596"
            className="Frame1686562596 size- flex justify-start items-center"
          >
            <img
              data-layer="Ellipse 101"
              className="Ellipse101 size-24 rounded-full"
              src="https://placehold.co/100x100"
            />
            <div
              data-layer="Frame 166"
              className="Frame166 size- px-8 py-4 inline-flex flex-col justify-start items-start overflow-hidden"
            >
              <div
                data-layer="Jacob Jones"
                className="JacobJones justify-center text-gray-600 text-3xl font-semibold font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Jacob Jones
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Product Designer{" "}
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Open to mentorship{" "}
              </div>
            </div>
          </div>
          <div
            data-layer="Button - Secondary"
            className="ButtonSecondary size- flex justify-start items-start"
          >
            <div
              data-layer="Button - Secondary"
              data-icon-placement="No Icon"
              data-size="Large"
              data-state="Default"
              className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
            >
              <div
                data-layer="Button"
                className="Button text-center justify-center text-cyan-950 text-lg font-semibold font-['Poppins'] leading-loose tracking-wide"
              >
                Message
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 1686562612"
          className="Frame1686562612 w-[1147px] px-4 left-0 top-[780px] absolute inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 1686562596"
            className="Frame1686562596 size- flex justify-start items-center"
          >
            <div
              data-layer="Frame 1686562630"
              className="Frame1686562630 size-24 px-[5px] py-2.5 rounded-[50px] flex justify-end items-end gap-2.5"
            >
              <div
                data-svg-wrapper
                data-layer="Ellipse 37"
                className="Ellipse37"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8.80078" r="8" fill="#008A00" />
                </svg>
              </div>
            </div>
            <div
              data-layer="Frame 166"
              className="Frame166 size- px-8 py-4 inline-flex flex-col justify-start items-start overflow-hidden"
            >
              <div
                data-layer="Lovelyn Mars"
                className="LovelynMars justify-center text-gray-600 text-3xl font-semibold font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Lovelyn Mars
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Data Analyst
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Open to mentorship
              </div>
            </div>
          </div>
          <div
            data-layer="Button - Secondary"
            className="ButtonSecondary size- flex justify-start items-start"
          >
            <div
              data-layer="Button - Secondary"
              data-icon-placement="No Icon"
              data-size="Large"
              data-state="Default"
              className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
            >
              <div
                data-layer="Button"
                className="Button text-center justify-center text-cyan-950 text-lg font-semibold font-['Poppins'] leading-loose tracking-wide"
              >
                Message
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 1686562613"
          className="Frame1686562613 w-[1147px] px-4 left-0 top-[1040px] absolute inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 1686562596"
            className="Frame1686562596 size- flex justify-start items-center"
          >
            <div
              data-layer="Frame 1686562631"
              className="Frame1686562631 size-24 px-[5px] py-2.5 rounded-[50px] flex justify-end items-end gap-2.5"
            >
              <div
                data-svg-wrapper
                data-layer="Ellipse 38"
                className="Ellipse38"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8.80078" r="8" fill="#008A00" />
                </svg>
              </div>
            </div>
            <div
              data-layer="Frame 166"
              className="Frame166 size- px-8 py-4 inline-flex flex-col justify-start items-start overflow-hidden"
            >
              <div
                data-layer="Kelvin Hunt"
                className="KelvinHunt justify-center text-gray-600 text-3xl font-semibold font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Kelvin Hunt
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Software Engineer{" "}
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Looking for internships
              </div>
            </div>
          </div>
          <div
            data-layer="Button - Secondary"
            className="ButtonSecondary size- flex justify-start items-start"
          >
            <div
              data-layer="Button - Secondary"
              data-icon-placement="No Icon"
              data-size="Large"
              data-state="Default"
              className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
            >
              <div
                data-layer="Button"
                className="Button text-center justify-center text-cyan-950 text-lg font-semibold font-['Poppins'] leading-loose tracking-wide"
              >
                Message
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 1686562607"
          className="Frame1686562607 w-[1147px] px-4 left-0 top-[1300px] absolute inline-flex justify-between items-center"
        >
          <div
            data-layer="Frame 1686562596"
            className="Frame1686562596 size- flex justify-start items-center"
          >
            <img
              data-layer="Ellipse 101"
              className="Ellipse101 size-24 rounded-full"
              src="https://placehold.co/100x100"
            />
            <div
              data-layer="Frame 166"
              className="Frame166 size- px-8 py-4 inline-flex flex-col justify-start items-start overflow-hidden"
            >
              <div
                data-layer="Bianca Hugs"
                className="BiancaHugs justify-center text-gray-600 text-3xl font-semibold font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Bianca Hugs
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Web Developer
              </div>
              <div
                data-layer="Meta"
                className="Meta justify-center text-slate-400 text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
              >
                Collaborating on projects
              </div>
            </div>
          </div>
          <div
            data-layer="Button - Secondary"
            className="ButtonSecondary size- flex justify-start items-start"
          >
            <div
              data-layer="Button - Secondary"
              data-icon-placement="No Icon"
              data-size="Large"
              data-state="Default"
              className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
            >
              <div
                data-layer="Button"
                className="Button text-center justify-center text-cyan-950 text-lg font-semibold font-['Poppins'] leading-loose tracking-wide"
              >
                Message
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Button - Secondary"
        className="ButtonSecondary size- left-[1112px] top-[2265px] absolute inline-flex justify-start items-start"
      >
        <div
          data-layer="Button - Secondary"
          data-icon-placement="No Icon"
          data-size="Large"
          data-state="Default"
          className="ButtonSecondary w-44 px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-cyan-950 flex justify-center items-center gap-4"
        >
          <div
            data-layer="Button"
            className="Button text-center justify-center text-cyan-950 text-base font-semibold font-['Poppins'] leading-7 tracking-wide"
          >
            Back
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 1686562618"
        className="Frame1686562618 w-[1143px] h-20 left-[150px] top-[2085px] absolute bg-slate-50 rounded-[32px] inline-flex justify-start items-center gap-6"
      >
        <div
          data-layer="Frame 1686562610"
          className="Frame1686562610 w-96 p-2.5 flex justify-center items-center gap-2.5"
        >
          <div data-svg-wrapper data-layer="Vector" className="Vector">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1484 17.8828C21.6641 18.1328 22.125 18.4453 22.5312 18.8203C22.9375 19.1953 23.2891 19.6172 23.5859 20.0859C23.8828 20.5547 24.1094 21.0547 24.2656 21.5859C24.4219 22.1172 24.5 22.6719 24.5 23.25H23C23 22.6328 22.8828 22.0508 22.6484 21.5039C22.4141 20.957 22.0898 20.4805 21.6758 20.0742C21.2617 19.668 20.7852 19.3477 20.2461 19.1133C19.707 18.8789 19.125 18.7578 18.5 18.75C17.8828 18.75 17.3008 18.8672 16.7539 19.1016C16.207 19.3359 15.7305 19.6602 15.3242 20.0742C14.918 20.4883 14.5977 20.9648 14.3633 21.5039C14.1289 22.043 14.0078 22.625 14 23.25H12.5C12.5 22.6797 12.5781 22.1289 12.7344 21.5977C12.8906 21.0664 13.1133 20.5664 13.4023 20.0977C13.6914 19.6289 14.043 19.207 14.457 18.832C14.8711 18.457 15.3359 18.1406 15.8516 17.8828C15.2656 17.4609 14.8125 16.9336 14.4922 16.3008C14.1719 15.668 14.0078 14.9844 14 14.25C14 13.6328 14.1172 13.0508 14.3516 12.5039C14.5859 11.957 14.9062 11.4805 15.3125 11.0742C15.7188 10.668 16.1953 10.3438 16.7422 10.1016C17.2891 9.85938 17.875 9.74219 18.5 9.75C19.1172 9.75 19.6992 9.86719 20.2461 10.1016C20.793 10.3359 21.2695 10.6562 21.6758 11.0625C22.082 11.4688 22.4062 11.9492 22.6484 12.5039C22.8906 13.0586 23.0078 13.6406 23 14.25C23 14.9766 22.8398 15.6562 22.5195 16.2891C22.1992 16.9219 21.7422 17.4531 21.1484 17.8828ZM18.5 17.25C18.9141 17.25 19.3008 17.1719 19.6602 17.0156C20.0195 16.8594 20.3398 16.6445 20.6211 16.3711C20.9023 16.0977 21.1172 15.7812 21.2656 15.4219C21.4141 15.0625 21.4922 14.6719 21.5 14.25C21.5 13.8359 21.4219 13.4492 21.2656 13.0898C21.1094 12.7305 20.8945 12.4102 20.6211 12.1289C20.3477 11.8477 20.0312 11.6328 19.6719 11.4844C19.3125 11.3359 18.9219 11.2578 18.5 11.25C18.0859 11.25 17.6992 11.3281 17.3398 11.4844C16.9805 11.6406 16.6602 11.8555 16.3789 12.1289C16.0977 12.4023 15.8828 12.7188 15.7344 13.0781C15.5859 13.4375 15.5078 13.8281 15.5 14.25C15.5 14.6641 15.5781 15.0508 15.7344 15.4102C15.8906 15.7695 16.1055 16.0898 16.3789 16.3711C16.6523 16.6523 16.9688 16.8672 17.3281 17.0156C17.6875 17.1641 18.0781 17.2422 18.5 17.25ZM24.5 0.75V12.75C24.5 12.375 24.4648 12.0469 24.3945 11.7656C24.3242 11.4844 24.2266 11.2227 24.1016 10.9805C23.9766 10.7383 23.8203 10.5039 23.6328 10.2773C23.4453 10.0508 23.2344 9.80469 23 9.53906V2.25H2V15.75H5V18.8789L8.12891 15.75H12.6992C12.7617 16.0156 12.8438 16.2734 12.9453 16.5234C13.0469 16.7734 13.168 17.0156 13.3086 17.25H8.75L3.5 22.5V17.25H0.5V0.75H24.5Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            data-layer="Invite New Connection"
            className="InviteNewConnection justify-center text-black text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
          >
            Invite New Connection
          </div>
        </div>
        <div
          data-layer="Frame 1686562616"
          className="Frame1686562616 w-56 p-2.5 flex justify-center items-center gap-2.5"
        >
          <div data-svg-wrapper data-layer="Vector" className="Vector">
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2274 15.2176L17.8866 13.5584L20.3637 16.0472L22.8408 13.5701L24.5 15.2176L22.0112 17.6947L24.5 20.1719L22.8408 21.8311L20.3637 19.3423L17.8866 21.8311L16.2274 20.1719L18.7162 17.6947L16.239 15.2176M12.1845 0.167969C18.611 0.167969 23.869 4.35103 23.869 9.51558C23.869 10.1933 23.7756 10.8476 23.612 11.4786C22.9226 11.128 22.1748 10.871 21.3919 10.7541C21.4854 10.3569 21.5321 9.93623 21.5321 9.51558C21.5321 5.64801 17.3491 2.50487 12.1845 2.50487C7.01996 2.50487 2.8369 5.64801 2.8369 9.51558C2.8369 13.3832 7.01996 16.5263 12.1845 16.5263L13.4581 16.4679L13.353 17.6947L13.4464 18.8048L12.1845 18.8632C10.7941 18.8632 9.4036 18.6646 8.05988 18.279C5.92162 20.0316 3.26923 21.0716 0.5 21.2001C3.22249 18.4776 3.71324 16.6431 3.71324 15.9421C2.7376 15.1735 1.94371 14.1989 1.38826 13.088C0.832805 11.9771 0.529499 10.7573 0.5 9.51558C0.5 4.35103 5.75803 0.167969 12.1845 0.167969Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            data-layer="Remove"
            className="Remove justify-center text-black text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
          >
            Remove{" "}
          </div>
        </div>
        <div
          data-layer="Frame 1686562615"
          className="Frame1686562615 w-44 p-2.5 flex justify-center items-center gap-2.5"
        >
          <div data-svg-wrapper data-layer="Vector" className="Vector">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.424 4.59 21.5692 3.51 20.49C2.43 19.4108 1.5752 18.1408 0.945601 16.68C0.316001 15.2192 0.000801518 13.6592 1.51899e-06 12C-0.00079848 10.3408 0.314401 8.7808 0.945601 7.32C1.5768 5.8592 2.4316 4.5892 3.51 3.51C4.5884 2.4308 5.8584 1.576 7.32 0.945599C8.7816 0.3152 10.3416 0 12 0C13.6584 0 15.2184 0.3152 16.68 0.945599C18.1416 1.576 19.4116 2.4308 20.49 3.51C21.5684 4.5892 22.4236 5.8592 23.0556 7.32C23.6876 8.7808 24.0024 10.3408 24 12C23.9976 13.6592 23.6824 15.2192 23.0544 16.68C22.4264 18.1408 21.5716 19.4108 20.49 20.49C19.4084 21.5692 18.1384 22.4244 16.68 23.0556C15.2216 23.6868 13.6616 24.0016 12 24ZM12 21.6C13.08 21.6 14.12 21.4252 15.12 21.0756C16.12 20.726 17.04 20.2208 17.88 19.56L4.44 6.12C3.78 6.96 3.2748 7.87999 2.9244 8.87999C2.574 9.87999 2.3992 10.92 2.4 12C2.4 14.68 3.33 16.95 5.19 18.81C7.05 20.67 9.31999 21.6 12 21.6ZM19.56 17.88C20.22 17.04 20.7252 16.12 21.0756 15.12C21.426 14.12 21.6008 13.08 21.6 12C21.6 9.31999 20.67 7.04999 18.81 5.19C16.95 3.33 14.68 2.4 12 2.4C10.92 2.4 9.87999 2.5748 8.88 2.9244C7.88 3.274 6.96 3.7792 6.12 4.44L19.56 17.88Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            data-layer="Block"
            className="Block justify-center text-black text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
          >
            Block
          </div>
        </div>
        <div
          data-layer="Frame 1686562611"
          className="Frame1686562611 w-48 p-2.5 flex justify-center items-center gap-2.5"
        >
          <div data-svg-wrapper data-layer="Vector" className="Vector">
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.78571 13.4016C2.17619 13.4016 1.64286 13.1954 1.18571 12.7831C0.728571 12.3707 0.5 11.8896 0.5 11.3398V9.27804C0.5 9.15777 0.519048 9.02891 0.557143 8.89146C0.595238 8.75401 0.633333 8.62514 0.671429 8.50487L4.1 1.23707C4.27143 0.893441 4.55714 0.601355 4.95714 0.360813C5.35714 0.120271 5.77619 0 6.21429 0H18.7857V13.4016L11.9286 19.5354C11.6429 19.7932 11.3046 19.9437 10.9137 19.987C10.5229 20.0303 10.1469 19.9657 9.78571 19.7932C9.42457 19.6207 9.1579 19.3801 8.98571 19.0715C8.81352 18.763 8.77543 18.4451 8.87143 18.118L10.1571 13.4016H2.78571ZM16.5 12.5254V2.06179H6.21429L2.78571 9.27804V11.3398H13.0714L11.5286 17.0097L16.5 12.5254ZM22.2143 0C22.8429 0 23.3811 0.202055 23.8291 0.606166C24.2771 1.01028 24.5008 1.49548 24.5 2.06179V11.3398C24.5 11.9068 24.2764 12.3924 23.8291 12.7965C23.3819 13.2006 22.8436 13.4023 22.2143 13.4016H18.7857V11.3398H22.2143V2.06179H18.7857V0H22.2143Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            data-layer="Report"
            className="Report justify-center text-black text-3xl font-medium font-['Poppins'] leading-[63.20px] tracking-wide"
          >
            Report
          </div>
        </div>
      </div>
      <div
        data-svg-wrapper
        data-layer="Frame 1686562622"
        className="Frame1686562622 left-[1148px] top-[2279px] absolute"
      >
        <svg
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2667 15L10 20M10 20L14.2667 25M10 20H21.7333C22.8649 20 23.9502 19.4732 24.7503 18.5355C25.5505 17.5979 26 16.3261 26 15C26 13.6739 25.5505 12.4021 24.7503 11.4645C23.9502 10.5268 22.8649 10 21.7333 10H20.6667"
            stroke="black"
            stroke-width="2.53333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>*/}
//      </div>
//     </div>
//     </div>
//   );
// };

// export default Connections;

