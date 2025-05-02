import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
// import createProfile from "./components/CreateProfile";
// import Dashboard from "./components/Profile";
import "./index.css";
import CreateProfile from "./components/CreateProfile";
import EditProfile from "./components/EditProfile";
import ProfileDashboard from "./components/maindashboard/ProfileDashboard";
import MatchesDashboard from "./components/matchesdashboard/MatchesDashboard";
import Connections from "./components/Connections";
import Messages from "./components/Messages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createProfile" element={<CreateProfile />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/dashboard" element={<ProfileDashboard />} />
      <Route path="/matchesDashboard" element={<MatchesDashboard />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/messages" element={<Messages />} />
      
      
      {/* <Route path="/findbuddies" element={<FindBuddies />} /> */}
    </Routes>
  );
};

export default App;
