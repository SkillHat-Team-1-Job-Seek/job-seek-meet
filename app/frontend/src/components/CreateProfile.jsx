import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "./Footer";
import Header from "./Header";

const CreateProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    profession: "",
    location: "",
    bio: "",
    tags: "",
    openToOneOnOne: false,
    openToGroup: false,
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    alert("Profile Created Successfully! (Simulated)");
    navigate("/dashboard");
  };

  return (
    <div className="w-half min-h-screen bg-white">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        {/* Centered Title and Description */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-2">Profile Setup</h2>
          <p className="text-gray-500">
            Let others know who you are. This helps with better matches and connections
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left Section: Form Fields */}
          <div className="w-full md:w-3/4 flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Age */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Profession */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Profession</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
                required
              />
            </div>

            {/* Tags */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder=" "
                className="px-5 py-3 bg-gray-100 rounded-lg text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>


            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-xl hover:bg-teal-100 transition-colors"
              >
                Preview
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                type="submit"
                className="px-14 py-3 bg-yellow-300 text-teal-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-lg hover:bg-teal-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Right Section: Profile Picture Upload */}
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center min-h-full">
            <label className="text-gray-700 text-sm mb-2">Upload your picture</label>
            <div className="w-60 h-60 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              {formData.profilePicture ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-black">Upload your picture</span>
                  <span className="text-black text-xs mt-2">JPG, PNG format only</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Choose File
                <input
                  type="file"
                  name="profilePicture"
                  onChange={handleChange}
                  accept="image/jpeg,image/png"
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-500">
                {formData.profilePicture ? formData.profilePicture.name : "No file chosen"}
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default CreateProfile;
