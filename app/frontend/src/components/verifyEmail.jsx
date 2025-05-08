import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { Progress } from "../components/ui/progress";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Get user data from location state or localStorage
  const email = location.state?.email;

  // Focus first input on component mount
  useEffect(() => {
    if (!email) {
      toast.error("Email information is missing");
      navigate("/login");
    }
    inputRefs.current[0]?.focus();
  }, [email, navigate]);

  const handleCodeChange = (index, value) => {
    if (value.length > 1) {
      const chars = value.split("");
      const updatedCode = [...code];

      for (let i = 0; i < Math.min(chars.length, 4 - index); i++) {
        if (/^[0-9]$/.test(chars[i])) {
          updatedCode[index + i] = chars[i];
        }
      }

      setCode(updatedCode);

      const nextIndex = Math.min(index + chars.length, 3);
      inputRefs.current[nextIndex]?.focus();

      return;
    }

    if (value === "" || /^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value !== "" && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    if (verificationCode.length !== 4) {
      toast.error("Please enter all 4 digits of the verification code");
      return;
    }

    if (!email) {
      toast.error("User information is missing. Please login again.");
      navigate("/login");
      return;
    }

    setIsVerifying(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          verifyToken: verificationCode,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: "Email verified successfully! You can now log in.",
          variant: "success",
        });
        navigate("/login");
      } else {
        toast.error(data.message || "Verification failed. Please try again.");
        setCode(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error("An error occurred during verification. Please try again.");

      setCode(["", "", "", ""]);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("User email is missing. Please login again.");
      navigate("/login");
      return;
    }

    setIsResending(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/auth/resend-verification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
          credentials: "include",
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(
          data.message || "A new verification code has been sent to your email"
        );
        // Clear existing code
        setCode(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      } else {
        toast.error(data.message || "Failed to resend verification code");
      }
    } catch (error) {
      console.error("Error resending verification code:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {/* Header with Logo and Progress */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-teal-600 text-3xl font-bold">JobBuddies</div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 w-48">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 text-white text-xs rounded-full px-3 py-1">
                  25% Profile Completed
                </div>
              </div>
              <div className="relative w-full">
                <Progress value={25} className="h-2 bg-gray-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              Complete Your Onboarding
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              We've sent a 4-digit verification code to your email. Please enter
              it below to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col items-center">
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700 mb-3 w-full text-center"
              >
                Verification Code
              </label>

              <div className="flex justify-center gap-3 w-full">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={code[index]}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-16 h-16 text-center text-xl font-semibold bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                ))}
              </div>

              <div className="text-sm text-gray-500 mt-3">
                Didn't receive a code?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-teal-600 hover:text-teal-800 font-medium"
                >
                  Resend Code
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full max-w-xs bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 rounded-lg transition-all flex items-center justify-center gap-2 border-none"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <div className="animate-spin h-5 w-5 border-2 border-gray-800 border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <Check className="h-5 w-5" />
                    Verify Email
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
