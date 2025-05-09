import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Upload } from "lucide-react";
import ProfileHeader from "./Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useAuth } from "../hook/useAuth";
import { useToast } from "../hook/useToast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CreateProfile = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = useAuth();
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    profession: "",
    location: "",
    bio: "",
    tags: "",
  });

  const [privacy, setPrivacy] = useState({
    showAge: true,
    showGender: true,
    showProfile: true,
  });

  const [selectedIndustry, setSelectedIndustry] = useState("");
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.name || "",
        age: user.age?.toString() || "",
        profession: user.profession || "",
        location: user.location || "",
        bio: user.bio || "",
        tags: user.tags?.map((tag) => tag.name).join(", ") || "",
      });
      setPrivacy({
        showAge: user.showAge ?? true,
        showGender: user.showGender ?? true,
        showProfile: user.showProfile ?? true,
      });

      setSelectedIndustry(user.industry || "");
      if (user.profileImageUrl) {
        setProfileImagePreview(`${user.profileImageUrl}`);
      }
    }
  }, [user]);
  // Industry options
  const industries = [
    { id: 1, name: "Technology", description: "Software, IT, Data Science" },
    { id: 2, name: "Healthcare", description: "Medical, Nursing, Pharmacy" },
    { id: 3, name: "Finance", description: "Banking, Investment, Insurance" },
    {
      id: 4,
      name: "Education",
      description: "Teaching, Administration, Research",
    },
    {
      id: 5,
      name: "Marketing",
      description: "Advertising, PR, Digital Marketing",
    },
    { id: 6, name: "Creative", description: "Design, Arts, Media" },
  ];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrivacyChange = (setting) => {
    setPrivacy((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleIndustrySelect = (value) => {
    setSelectedIndustry(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.profession || !formData.location) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!selectedIndustry) {
      toast({
        title: "Error",
        description: "Please select an industry",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Parse tags from comma-separated string to array
      const tagArray = formData.tags
        ? formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag)
        : [];

      // Create form data for file upload
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("profession", formData.profession);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("industry", selectedIndustry);

      // Add numeric age if provided
      if (formData.age) {
        formDataToSend.append("age", parseInt(formData.age, 10));
      }

      // Add privacy settings
      formDataToSend.append("showAge", privacy.showAge);
      formDataToSend.append("showProfile", privacy.showProfile);

      tagArray.forEach((tag) => {
        formDataToSend.append("tags[]", tag);
      });

      // Add profile image if selected
      if (profileImage) {
        formDataToSend.append("profileImage", profileImage);
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
        method: "PATCH",
        credentials: "include",
        body: formDataToSend,
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        await fetch(`${API_BASE_URL}/api/v1/users/profile`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        await getCurrentUser();
        toast({
          title: "Success",
          description: "Profile updated successfully!",
          variant: "success",
        });

        navigate("/dashboard");
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to update profile",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-half min-h-screen bg-white">
      {/* Header Section */}
      <ProfileHeader />

      {/* Main Content */}
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header with Progress */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <img src="/assets/image 103.png" alt="Logo" className="h-14 w-14" />
          </div>
          <div className="flex items-center space-x-4 w-72">
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <div className="bg-[#03363D] text-white text-xs rounded-full px-3 py-1 absolute left-[56%] transform -translate-x-1/2 -translate-y-10">
                  56% Profile Completed
                </div>
              </div>
              <div className="relative w-72 h-3 bg-zinc-200 rounded-2xl">
                <div
                  className="h-full bg-gradient-to-r from-teal-600 to-yellow-300 rounded-2xl"
                  style={{ width: "56%" }}
                ></div>
                <div className="absolute left-[56%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-white border-2 border-teal-600 rounded-full flex items-center justify-center">
                    <div className="w-0.5 h-4 bg-teal-900"></div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-900 hover:bg-teal-50"
              onClick={() => navigate("/editProfile")}
            >
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Centered Title and Description */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-2">Profile Setup</h2>
          <p className="text-gray-500">
            Let others know who you are. This helps with better matches and
            connections
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Left Section: Form Fields */}
          <div className="md:col-span-2 space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Profession */}
            <div>
              <label
                htmlFor="profession"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profession <span className="text-red-500">*</span>
              </label>
              <Input
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Your profession or occupation"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Age Field */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <Input
                id="age"
                name="age"
                type="number"
                min="18"
                max="120"
                value={formData.age}
                onChange={handleChange}
                placeholder="Your age"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
              />
            </div>

            {/* Location Field */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location <span className="text-red-500">*</span>
              </label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Industry Selection Dropdown */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Your Industry <span className="text-red-500">*</span>
              </label>
              <Select
                onValueChange={handleIndustrySelect}
                value={selectedIndustry}
              >
                <SelectTrigger className="w-full px-4 py-3 bg-gray-100 rounded-lg">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem
                      key={industry.id}
                      value={industry.name}
                      className="py-3"
                    >
                      <div>
                        <div className="font-medium">{industry.name}</div>
                        <div className="text-xs text-gray-500">
                          {industry.description}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bio Field */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bio
              </label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us a bit about yourself..."
                className="w-full px-4 py-3 bg-gray-100 rounded-lg min-h-28 resize-none"
              />
            </div>

            {/* Tags Field */}
            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags
              </label>
              <Textarea
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g. JavaScript, Node.js, React (comma separated)"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg resize-none"
              />
            </div>
          </div>

          {/* Right Section: Profile Picture Upload */}
          <div className="space-y-6">
            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Your Picture
              </label>
              <div className="flex flex-col items-center justify-center relative">
                <div
                  className="w-60 h-60 bg-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() =>
                    document.getElementById("profile-image").click()
                  }
                >
                  {profileImagePreview ? (
                    <img
                      src={profileImagePreview}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-black">Upload your picture</span>
                      <span className="text-black text-xs mt-2">
                        JPG, PNG format only
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="profile-image"
                />
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">Show / Hide Age</div>
                <Switch
                  checked={privacy.showAge}
                  onCheckedChange={() => handlePrivacyChange("showAge")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">Show / Hide Gender</div>
                <Switch
                  checked={privacy.showGender}
                  onCheckedChange={() => handlePrivacyChange("showGender")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">Show / Hide Profile</div>
                <Switch
                  checked={privacy.showProfile}
                  onCheckedChange={() => handlePrivacyChange("showProfile")}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="md:col-span-3 flex justify-between mt-8">
            <Button
              type="button"
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-xl hover:bg-teal-100 transition-colors"
            >
              Preview
            </Button>

            <Button
              type="submit"
              className="px-14 py-3 bg-yellow-300 text-teal-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin h-5 w-5 border-2 border-teal-900 border-t-transparent rounded-full mr-2"></div>
                  Saving...
                </span>
              ) : (
                "Save"
              )}
            </Button>

            <Button
              type="button"
              onClick={() => navigate("/")}
              variant="outline"
              className="px-10 py-3 border-2 border-teal-600 text-teal-900 font-semibold rounded-lg hover:bg-teal-100 transition-colors"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default CreateProfile;
