import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };

  return (
    <div className="container mx-auto flex items-center justify-center md:p-4 p-2">
      <div className="bg-white rounded-2xl overflow-hidden w-full flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 p-2 md:p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/Logomark.png" alt="MyHoodAfrica Logo" />
              <span className="text-lg font-semibold text-gray-800">
                MyHoodAfrica
              </span>
            </div>

            <h1 className="text-2xl text-center lg:text-left lg:text-3xl font-bold text-gray-800 mb-2">
              Welcome back
            </h1>
            <p className="text-[#0A0A0A] text-center lg:text-left">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="jennywatson@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6556FE] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6556FE] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5 text-gray-400 hover:text-[#0A0A0A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m1 1 22 22"/>
                      <path d="M6.72 6.72a10 10 0 0 0-3.17 5.28c2.46 7.38 5.97 10 8.45 10a7.72 7.72 0 0 0 2.57-.42"/>
                      <path d="M9 9a3 3 0 0 0 6 6"/>
                      <path d="M15.5 12c0-.67-.17-1.32-.48-1.88"/>
                      <path d="M21.17 15.88A10 10 0 0 0 22 12c-2.46-7.38-5.97-10-8.45-10a7.78 7.78 0 0 0-2.31.33"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400 hover:text-[#0A0A0A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-[#0A0A0A]">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="mr-2 rounded border-gray-300 text-[#6556FE] focus:ring-[#6556FE]"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm text-[#6556FE] hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#6556FE] cursor-pointer hover:bg-[#5545E8] text-white font-semibold py-4 rounded-full transition-colors duration-200"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="bg-white px-4 text-gray-500 text-sm">Or</span>
              <div className="border-t border-gray-300 w-full"></div>
            </div>

            {/* Social Sign In */}
            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                className="w-full flex cursor-pointer items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-full transition-colors duration-200"
              >
                <img src="/images/google.svg" alt="Google" className="w-5 h-5" />
                <span className="text-gray-700 font-medium">
                  Sign in with Google
                </span>
              </button>

              <button
                type="button"
                className="w-full flex cursor-pointer items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-full transition-colors duration-200"
              >
                <img src="/images/apple.svg" alt="Apple" className="w-5 h-5" />
                <span className="text-gray-700 font-medium">
                  Sign in with Apple
                </span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <span className="text-[#0A0A0A]">Don't have an account? </span>
              <a
                href="/SignUp"
                className="text-black underline hover:underline font-extrabold"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:flex-1 lg:block hidden lg:min-h-full">
          <div className="rounded-lg lg:rounded-none lg:rounded-r-2xl flex items-center justify-center h-full">
            <img src="/images/signup.svg" alt="Login illustration" className="max-w-full h-auto" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;