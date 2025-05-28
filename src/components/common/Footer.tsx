import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  return (
    <div className="bg-[#1C1741] text-white relative">
      <div className="lg:mx-20 md:mx-8 rounded-2xl relative bottom-16 bg-[#6556FE]">
        <div className="container mx-auto p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Side - Text Content */}
            <div className="text-white flex-1">
              <h1 className="text-2xl md:text-start text-center md:text-3xl font-bold mb-2">
                Ready to connect with your hood?
              </h1>
              <p className="text-base md:text-start text-center md:text-lg">
                The #1 local community & classifieds network in Africa.
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div className="flex-shrink-0">
              <button className="bg-white text-[#1C1741] px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                Join Your Hood Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 items-center lg:items-start gap-8 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/Logomark.png" />
                <span className="text-lg font-semibold">MyHoodAfrica</span>
              </div>
              <p className=" mb-6 text-[#EAECF0] text-sm py-3">
                The #1 local community & classifieds network in Africa.
              </p>

              <nav className="flex flex-wrap lg:gap-6 gap-3 text-sm">
                <a href="#" className="text-[#EAECF0] transition-colors">
                  About
                </a>
                <a href="#" className="text-[#EAECF0] transition-colors">
                  How It Works
                </a>
                <a href="#" className="text-[#EAECF0] transition-colors">
                  Contact
                </a>
                <a href="#" className="text-[#EAECF0] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#EAECF0] transition-colors">
                  Terms
                </a>
              </nav>
            </div>

            {/* Right Side - Newsletter Signup */}
            <div className="flex-shrink-0 justify-end ml-auto w-full lg:w-auto">
              <h3 className="text-sm font-medium mb-3">Stay up to Date</h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 rounded bg-white text-gray-900 placeholder-gray-500 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#6556FE] px-4 py-2 rounded font-medium text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-600 pt-6 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs">
                © 2025 MyHoodAfrica. Made for Africa, by Africans.
              </p>

              {/* Social Media Icons Placeholders */}
              <div className="flex gap-8">
                <div className="w-5 h-5 cursor-pointer">
                  <img src="/images/x.svg" />
                </div>
                <div className="w-5 h-5 cursor-pointer">
                  <img src="/images/linkedin.svg" />
                </div>
                <div className="w-5 h-5 cursor-pointer">
                  {" "}
                  <img src="/images/facebook.svg" />
                </div>
                <div className="w-5 h-5 cursor-pointer">
                  {" "}
                  <img src="/images/github.svg" />
                </div>
                <div className="w-5 h-5 cursor-pointer">
                  {" "}
                  <img src="/images/win.svg" />
                </div>
                <div className="w-5 h-5 cursor-pointer">
                  {" "}
                  <img src="/images/website.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
