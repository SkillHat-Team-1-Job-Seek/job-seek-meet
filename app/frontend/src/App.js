import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";  
import Login from "./components/Login";          

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  // Function to toggle between SignUp and Login
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div>
      {isSignUp ? <SignUpForm toggleForm={toggleForm} /> : <Login toggleForm={toggleForm} />}
    </div>
  );
};

export default App;
