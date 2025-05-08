import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader"; 
import FooterSection from "./Footer";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about"); // Default to "About Me"

  return (
    <div className="w-half min-h-screen bg-white">
    <div className="flex justify-center">

      {/* Main Content */}
      <div className="max-w-5xl py-20 px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">
            {/* {formData.fullName}'s Detailed View */}
            Malik's Detailed View
          </h2>
          <p className="text-gray-500 font-semibold">Stronger Together!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-64 w-half mx-auto">
          {/* Left Section: Profile Details */}
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg border-2"
     style={{ borderImage: 'linear-gradient(to right, #2dd4bf, #14b8a6) 1' }}>
            <h3 className="text-2xl font-semibold text-black">
              {/* {formData.fullName} */}
              Malik Mustapha
            </h3>

            {/* Age */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1 font-medium">
                Age
              </label>
              {/* <p className="text-base text-black">{formData.age} years old</p> */}
              <p className="text-base text-black"> 28 years old</p>
            </div>

            {/* Profession */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1 font-medium">
                Profession
              </label>
              {/* <p className="text-base text-black">{formData.profession}</p> */}
              <p className="text-base text-black">BusinessAnalyst</p>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1 font-medium">
                Location
              </label>
              {/* <p className="text-base text-black">{formData.location}</p> */}
              <p className="text-base text-black">Toronto, Canada</p>
            </div>

            {/* Bio */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1 font-medium">
                Bio
              </label>
              {/* <p className="text-base text-black">{formData.bio}</p> */}
              <p className="text-base text-black">
                Detail-oriented Business Analyst with 3+ years of experience in
                interpreting data, defining business requirements, and
                supporting cross-functional teams to deliver impactful digital
                solutions.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1 font-medium">
                Top Skills
              </label>
              {/* <p className="text-base text-black">{formData.tags}</p> */}
              <p className="text-base text-black">
                {" "}
                Data Analysis & Reporting, Requirement Gathering, SQL, Excel,
                Power BI, Agile & Scrum Practices, Stakeholder Communication
              </p>
            </div>

            {/* Role */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1 font-medium">
                Role
              </label>
              <p className="text-base text-black">
                Transition into a Product Management role, lead data-driven
                initiatives in tech-forward companies, network with
                professionals in tech and consulting
              </p>
            </div>
          </div>

          {/* Right Section: Profile Picture */}
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
            <div className="w-60 h-60 bg-gray-200 flex justify-center mb-4">
                {/* Placeholder for Profile Picture */}
                <img
                    src="/assets/Malik Mustapha.png"
                    alt="Profile Picture"
                    className="w-full h-full object-cover rounded-lg"
                />
              {/* <img
                src={
                  formData.profilePicture
                    ? URL.createObjectURL(formData.profilePicture)
                    : "/assets/Malik Mustapha.png"
                }
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-lg"
              /> */}
            </div>
            <button
              onClick={() => navigate("/connect")}
              className="px-14 py-3 bg-yellow-300 text-teal-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
          {/* Footer Section */}
          <FooterSection />
    </div>
  );
};

export default Profile;
