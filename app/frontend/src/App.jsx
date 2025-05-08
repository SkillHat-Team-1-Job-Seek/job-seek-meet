import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
// import createProfile from "./components/CreateProfile";
// import Dashboard from "./components/Profile";
import PeerConnections from "./components/PeerConnections";
import "./index.css";
import { ToastContextProvider } from "./hook/useToast";
import CreateProfile from "./components/CreateProfile";
import EditProfile from "./components/EditProfile";
import ProfileDashboard from "./components/maindashboard/ProfileDashboard";
import MatchesDashboard from "./components/matchesdashboard/MatchesDashboard";
import Connections from "./components/Connections";
import VerifyEmail from "./components/verifyEmail";
// import Messages from "./components/Messages";

const App = () => {
  return (
    <ToastContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/createProfile" element={<CreateProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/dashboard" element={<ProfileDashboard />} />
        <Route path="/matchesDashboard" element={<MatchesDashboard />} />
        <Route path="/connections" element={<Connections />} />
        {/* <Route path="/messages" element={<Messages />} /> */}

        <Route path="/connections/peers" element={<PeerConnections />} />
      </Routes>
    </ToastContextProvider>
  );
};

export default App;
