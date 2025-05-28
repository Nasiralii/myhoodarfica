import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    neighborhood: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl overflow-hidden  w-full flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 md:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/Logomark.png" />
              <span className="text-lg font-semibold text-gray-800">
                MyHoodAfrica
              </span>
            </div>

            <h1 className="text-2xl text-center lg:text-3xl font-bold text-gray-800 mb-2">
              Sign up to MyHoodAfrica
            </h1>
            <p className=" text-center">Send, spend and save smarter</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* User icon placeholder */}
                    <div className="w-5 h-5">
                      <img src="/images/user.svg" />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jenny"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* User icon placeholder */}
                    <div className="w-5 h-5">
                      <img src="/images/user.svg" />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Jenny Watson"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none "
                  />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Phone icon placeholder */}
                  <div className="w-5 h-5  rounded">
                    <img src="/images/mobile.svg" />
                  </div>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+234 9078 901"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none "
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Email icon placeholder */}
                  <div className="w-5 h-5 rounded">
                    <img src="/images/email.svg" />
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="jennywatson@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none "
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Lock icon placeholder */}
                  <div className="w-5 h-5 rounded">
                    <img src="/images/lock.svg" />
                  </div>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none "
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 pr-1 flex items-center"
                >
                  {/* Eye icon for show/hide password */}
                  <div className="w-5 h-5 rounded">
                    {showPassword ? (
                      // Eye slash icon (password is visible, click to hide)
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="min-w-5 min-h-5 text-gray-500"
                      >
                        <path d="m1 1 22 22" />
                        <path d="M6.72 6.72a10 10 0 0 0-3.17 5.28c2.46 7.38 5.97 10 8.45 10a7.72 7.72 0 0 0 2.57-.42" />
                        <path d="M9 9a3 3 0 0 0 6 6" />
                        <path d="M15.5 12c0-.67-.17-1.32-.48-1.88" />
                        <path d="M21.17 15.88A10 10 0 0 0 22 12c-2.46-7.38-5.97-10-8.45-10a7.78 7.78 0 0 0-2.31.33" />
                      </svg>
                    ) : (
                      // Eye icon (password is hidden, click to show)
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="min-w-5 min-h-5 text-gray-500"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Neighborhood */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Neighbourhood / City
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Location icon placeholder */}
                  <div className="w-5 h-5 rounded">
                    <img src="/images/map.svg" />
                  </div>
                </div>
                <select
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={(e) =>
                    handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
                  }
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  <option value="Algeria">Algeria</option>
                  <option value="Angola">Angola</option>
                  <option value="Benin">Benin</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde (Cape Verde)</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Democratic Republic of the Congo">
                    Democratic Republic of the Congo
                  </option>
                  <option value="Republic of the Congo">
                    Republic of the Congo
                  </option>
                  <option value="Cote d'Ivoire">
                    Cote d'Ivoire (Ivory Coast)
                  </option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Eswatini">Eswatini (Swaziland)</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Mali">Mali</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Togo">Togo</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {/* Search icon placeholder */}
                  <div className="w-5 h-5  rounded"></div>
                </button>
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="text-sm  mb-6">
              <input className="mr-2 pt-1" type="checkbox" />
              By creating an account, you agreeing to our{" "}
              <a
                href="#"
                className="underline text-black font-extrabold hover:underline"
              >
                Service
              </a>{" "}
              &{" "}
              <a
                href="#"
                className="underline text-black font-extrabold hover:underline"
              >
                Privacy Policy
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6556FE] text-white font-semibold py-4 rounded-full transition-colors duration-200 mb-6"
            >
              Sign Up & Join My Hood
            </button>

            {/* Divider */}
            <div className="text-center text-gray-500 mb-6">Or</div>

            {/* Social Sign Up */}
            <div className="grid md:grid-cols-2 gap-5">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-gray-300 cursor-pointer py-3 rounded-full transition-colors duration-200"
              >
                {/* Google icon placeholder */}
                <div className="w-5 h-5 rounded">
                  <img src="/images/google.svg" />
                </div>
                <span className="text-gray-700 font-medium">
                  Sign Up with Google
                </span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-gray-300  py-3 rounded-full cursor-pointer transition-colors duration-200"
              >
                {/* Apple icon placeholder */}
                <div className="w-5 h-5 rounded">
                  <img src="/images/apple.svg" />
                </div>
                <span className="text-gray-700 font-medium">
                  Sign Up with Apple
                </span>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <span className="">Already have an account? </span>
              <a
                href="#"
                className="text-black underline hover:underline font-medium"
              >
                Sign In
              </a>
            </div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="lg:flex-1 lg:block hidden lg:min-h-full">
          <div className=" rounded-lg lg:rounded-none lg:rounded-r-2xl flex items-center justify-center">
            {/* Image placeholder - replace with your image */}
            <img src="/images/signup.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
