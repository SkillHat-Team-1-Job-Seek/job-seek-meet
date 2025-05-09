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
import Messages from "./components/Messages";
import AuthGuard from "/src/hook/authGuard.jsx";

const App = () => {
  return (
    <ToastContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/messages" element={<Messages />} />

        <Route
          path="/createProfile"
          element={
            <AuthGuard>
              <CreateProfile />
            </AuthGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <ProfileDashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/matchesDashboard"
          element={
            <AuthGuard>
              <MatchesDashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/connections"
          element={
            <AuthGuard>
              <Connections />
            </AuthGuard>
          }
        />
        <Route
          path="/connections/peers"
          element={
            <AuthGuard>
              <PeerConnections />
            </AuthGuard>
          }
        />
        <Route
          path="/editProfile"
          element={
            <AuthGuard>
              <EditProfile />
            </AuthGuard>
          }
        />
      </Routes>
    </ToastContextProvider>
  );
};

export default App;
