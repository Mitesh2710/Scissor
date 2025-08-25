import React, { useState, useRef, useEffect } from "react";



// Minimal stylish button
const Button = ({
  children,
  className = "",
  variant = "luxury",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) => (
  <button
    className={`rounded px-4 py-2 font-semibold transition-colors ${
      variant === "luxury"
        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow hover:from-blue-600"
        : variant === "outline"
        ? "border border-blue-500 text-blue-600 bg-white hover:bg-blue-50"
        : ""
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Minimal Lucide icons (Eye/EyeOff/Phone)
const Eye = ({ className = "" }) => (
  <svg className={className} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
);
const EyeOff = ({ className = "" }) => (
  <svg className={className} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 19c-7 0-11-7-11-7a20.3 20.3 0 0 1 5.06-6.06"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/><path d="M12 5c7 0 11 7 11 7a20.3 20.3 0 0 1-5.06 6.06"/></svg>
);
const Phone = ({ className = "" }) => (
  <svg className={className} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"/></svg>
);

// Internal MobileVerification component
const MobileVerification: React.FC<{ userEmail: string | null; onComplete: () => void }> = ({
  userEmail,
  onComplete,
}) => {
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (sent) {
      timerRef.current = setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [sent]);
  useEffect(() => {
    if (timer === 0 && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [timer]);

  const handleSend = () => {
    setError(null);
    setSent(true);
    setTimer(60);
    setCode("");
  };
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length === 0) {
      setError("Please enter the code.");
      return;
    }
    // Simulate verification success
    onComplete();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h3 className="text-xl font-semibold mb-4 text-center">Mobile Verification</h3>
        {!sent ? (
          <div className="space-y-4">
            <p className="text-gray-700 text-center mb-2">
              Enter your mobile number to receive a verification code.
            </p>
            <input
              type="text"
              value={userEmail || ""}
              disabled
              className="w-full p-3 border rounded bg-gray-100 text-gray-700"
            />
            <Button className="w-full" onClick={handleSend}>
              Send Verification Code
            </Button>
          </div>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <p className="text-gray-700 text-center mb-2">
              Code sent to <span className="font-semibold">{userEmail}</span>
            </p>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full p-3 border rounded text-center tracking-widest text-xl"
              value={code}
              onChange={(e) => setCode(e.target.value.trim())}
              maxLength={6}
              required
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <Button type="submit" className="w-full">
              Verify
            </Button>
            <Button
              type="button"
              variant="outline"
              className={`w-full ${timer > 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={timer > 0}
              onClick={handleSend}
            >
              Resend Code {timer > 0 ? `(${timer}s)` : ""}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

const Auth: React.FC = () => {
  type Mode = "login" | "signup" | "otp" | "forgot";
  const [mode, setMode] = useState<Mode>("login");
  // Login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  // Show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  // OTP
  const [otpContact, setOtpContact] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(0);
  const resendInterval = useRef<NodeJS.Timeout | null>(null);
  // Forgot password
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [forgotError, setForgotError] = useState<string | null>(null);
  // Mobile verification
  const [showMobileVerification, setShowMobileVerification] = useState(false);
  const [verifiedUserEmail, setVerifiedUserEmail] = useState<string | null>(null);

  // Validation helpers
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validatePhone(phone: string) {
    return /^\d{7,15}$/.test(phone);
  }

  // OTP resend timer effect
  useEffect(() => {
    if (resendTimer === 0 && resendInterval.current) {
      clearInterval(resendInterval.current);
      resendInterval.current = null;
    }
  }, [resendTimer]);

  // Handlers
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login successful (simulated)!");
  };
  const handleSignupSuccess = (email: string) => {
    setVerifiedUserEmail(email);
    setShowMobileVerification(true);
  };
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignupSuccess(email);
    alert("Signup successful (simulated)!");
  };
  const handleOtpLoginSuccess = (contact: string) => {
    setVerifiedUserEmail(contact);
    setShowMobileVerification(true);
  };
  const handleSendOtp = () => {
    setOtpError(null);
    if (!validateEmail(otpContact) && !validatePhone(otpContact)) {
      setOtpError("Please enter a valid email or phone number.");
      return;
    }
    setOtpSent(true);
    setOtpCode("");
    setResendTimer(60);
    if (resendInterval.current) clearInterval(resendInterval.current);
    resendInterval.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) {
          if (resendInterval.current) {
            clearInterval(resendInterval.current);
            resendInterval.current = null;
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.trim().length === 0) {
      setOtpError("Please enter the OTP code.");
      return;
    }
    setOtpSent(false);
    setOtpCode("");
    setOtpContact("");
    setOtpError(null);
    handleOtpLoginSuccess(otpContact);
  };
  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    if (!validateEmail(forgotEmail)) {
      setForgotError("Please enter a valid email address.");
      return;
    }
    setResetSent(true);
  };
  const resetForgotState = () => {
    setForgotEmail("");
    setForgotError(null);
    setResetSent(false);
  };
  const resetOtpState = () => {
    setOtpContact("");
    setOtpCode("");
    setOtpError(null);
    setOtpSent(false);
    setResendTimer(0);
    if (resendInterval.current) {
      clearInterval(resendInterval.current);
      resendInterval.current = null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fff" }}>
      <div className="flex w-full max-w-4xl items-center gap-8">
        <div
          className="flex-shrink-0 w-1/2 h-[500px]"
          style={{
            backgroundImage: "url('/src/assets/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundSize: "contain",
          }}
        />
        <div className="flex-1 bg-transparent rounded-lg p-8 flex flex-col gap-8">
          {showMobileVerification && (
            <MobileVerification
              userEmail={verifiedUserEmail}
              onComplete={() => {
                setShowMobileVerification(false);
                setVerifiedUserEmail(null);
                alert("Mobile verification complete!");
              }}
            />
          )}
          <div className="flex-1">
            {mode === "login" && (
              <>
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  <h2 className="text-2xl font-bold text-center">Login</h2>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full p-3 border rounded pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onMouseDown={() => setShowPassword(true)}
                      onMouseUp={() => setShowPassword(false)}
                      onMouseLeave={() => setShowPassword(false)}
                      onTouchStart={() => setShowPassword(true)}
                      onTouchEnd={() => setShowPassword(false)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={() => {
                        setMode("forgot");
                        resetForgotState();
                      }}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <Button type="submit" variant="luxury" className="w-full">
                    Login
                  </Button>
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setMode("signup")}
                        className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        Sign up
                      </button>
                    </p>
                    <div className="flex flex-col items-center mt-2">
                      <span className="text-sm text-gray-600 mb-2">Or use</span>
                      <div className="flex justify-center gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            alert("Google login simulated!");
                          }}
                          className="flex items-center justify-center gap-2 rounded border border-gray-300 p-3 text-gray-700 hover:bg-gray-100"
                        >
                          <img src="/google-logo.svg" alt="Google logo" className="h-5 w-5" />
                          Google
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            resetOtpState();
                            setMode("otp");
                          }}
                          className="flex items-center justify-center gap-2 rounded border border-gray-300 p-3 text-gray-700 hover:bg-gray-100"
                        >
                          <Phone className="w-5 h-5" />
                          OTP Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
            {mode === "signup" && (
              <>
                <form className="space-y-4" onSubmit={handleSignupSubmit}>
                  <h2 className="text-2xl font-bold text-center">Signup</h2>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border rounded"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="relative">
                    <input
                      type={showSignupPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full p-3 border rounded pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onMouseDown={() => setShowSignupPassword(true)}
                      onMouseUp={() => setShowSignupPassword(false)}
                      onMouseLeave={() => setShowSignupPassword(false)}
                      onTouchStart={() => setShowSignupPassword(true)}
                      onTouchEnd={() => setShowSignupPassword(false)}
                      tabIndex={-1}
                    >
                      {showSignupPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <Button type="submit" variant="luxury" className="w-full">
                    Signup
                  </Button>
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setMode("login")}
                        className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        Sign in
                      </button>
                    </p>
                    <div className="flex flex-col items-center mt-2">
                      <span className="text-sm text-gray-600 mb-2">Or use</span>
                      <div className="flex justify-center gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            alert("Google login simulated!");
                          }}
                          className="flex items-center justify-center gap-2 rounded border border-gray-300 p-3 text-gray-700 hover:bg-gray-100"
                        >
                          <img src="/google-logo.svg" alt="Google logo" className="h-5 w-5" />
                          Google
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
            {mode === "otp" && (
              <>
                <h2 className="text-2xl font-bold text-center mb-4">OTP Login</h2>
                {!otpSent ? (
                  <div className="space-y-4 max-w-md mx-auto">
                    <input
                      type="text"
                      placeholder="Enter mobile number or email"
                      className="w-full p-3 border rounded"
                      value={otpContact}
                      onChange={(e) => setOtpContact(e.target.value.trim())}
                      required
                    />
                    {otpError && <div className="text-red-600 text-sm">{otpError}</div>}
                    <Button
                      type="button"
                      variant="luxury"
                      className="w-full"
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </Button>
                    <div className="text-center mt-4">
                      <button
                        type="button"
                        onClick={() => setMode("login")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Back to Login
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-4 max-w-md mx-auto">
                    <p className="text-center text-gray-700">
                      OTP sent to <span className="font-semibold">{otpContact}</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      className="w-full p-3 border rounded text-center tracking-widest text-xl"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.trim())}
                      maxLength={6}
                      required
                    />
                    {otpError && <div className="text-red-600 text-sm">{otpError}</div>}
                    <Button
                      type="submit"
                      variant="luxury"
                      className="w-full"
                    >
                      Verify OTP
                    </Button>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <Button
                        type="button"
                        variant="luxury"
                        className={`px-0 py-0 h-auto bg-transparent shadow-none border-none hover:underline ${
                          resendTimer > 0 ? "opacity-50 cursor-not-allowed" : "text-blue-600"
                        } transition-colors`}
                        disabled={resendTimer > 0}
                        onClick={handleSendOtp}
                        style={{
                          minWidth: 0,
                          minHeight: 0,
                          padding: 0,
                          background: "none",
                          boxShadow: "none",
                        }}
                      >
                        Resend OTP {resendTimer > 0 ? `(${resendTimer}s)` : ""}
                      </Button>
                      <button
                        type="button"
                        onClick={() => {
                          resetOtpState();
                          setMode("login");
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        Back to Login
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
            {mode === "forgot" && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => {
                      setMode("login");
                      resetForgotState();
                    }}
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-semibold mb-4 text-center">Reset Password</h3>
                  {resetSent ? (
                    <div className="space-y-4">
                      <p className="text-green-600 text-center">
                        If an account with that email exists, a reset link has been sent.
                      </p>
                      <Button
                        variant="luxury"
                        className="w-full"
                        onClick={() => {
                          setMode("login");
                          resetForgotState();
                        }}
                      >
                        Back to Login
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setForgotEmail("");
                          setForgotError(null);
                          setResetSent(false);
                        }}
                      >
                        Try Different Email
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleForgotSubmit} className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        required
                      />
                      {forgotError && (
                        <div className="text-red-600 text-sm">{forgotError}</div>
                      )}
                      <Button type="submit" variant="luxury" className="w-full">
                        Send Reset Link
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setMode("login");
                          resetForgotState();
                        }}
                      >
                        Back to Login
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;