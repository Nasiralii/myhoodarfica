"use client";

import React, { useState } from "react";

interface InviteModalProps {}

const InviteModal: React.FC<InviteModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Kimuu");

  const locations = ["Kilimani", "Nairobi", "Kenya"];

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  const handleSendSMS = () => {
    console.log("Sending SMS to:", phoneNumber);
    // Implement SMS sending logic
  };

  const handleSendEmail = () => {
    console.log("Sending email to:", email);
    // Implement email sending logic
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://myhoodafrica.com/invite/tunde123");
    // Show success toast
  };

  return (
    <div className="min-h-[89vh] flex items-center justify-center p-4">
      {/* Main Content */}
      <div className="text-center max-w-md">
        {/* Logo Icon */}
        <div className="mb-8 flex justify-center">
          <img src="/images/custom-icon.png" />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Help Build Your
          <br />
          Neighborhood Online!
        </h1>

        <p className="text-lg mb-8 leading-relaxed">
          Invite friends, family, and neighbors to join MyHoodAfrica and
          strengthen your local community.
        </p>

        <button
          onClick={openModal}
          className="px-16 text-white py-3 cursor-pointer bg-[#6556FE] rounded-full"
        >
          Invite Now
        </button>
      </div>

      {/* Right Sidebar Modal */}
      {isModalOpen && (
       <div className={`fixed inset-0 bg-black/50 flex items-center justify-end z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`bg-white w-full max-w-sm h-full overflow-y-auto shadow-xl transform transition-transform duration-300 ease-out ${
            isAnimating ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Invite Neighbors
                </h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center p-2 border rounded-full cursor-pointer justify-center text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Location Selection */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">
                    You're Inviting People In:
                  </span>
                  <button className="text-sm text-[#6556FE] underline font-extrabold">
                    Change Location
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {locations.map((location) => (
                    <div
                      key={location}
                      className={`flex items-center px-3 gap-2 py-2 rounded-full text-sm border cursor-pointer transition-all ${
                        selectedLocation === location
                          ? "bg-white border-blue-500 text-gray-900 shadow-sm"
                          : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                        <img src="/images/map.svg"/>
                     
                      {location}
                    </div>
                  ))}
                </div>
              </div>

              {/* Invite by Phone */}
              <div className="mb-4 p-4 border border-[#E5E5E5] rounded-2xl">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Invite by Phone Number
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Enter your neighbor's phone number
                </p>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
                      <img className="mr-3" src="/images/phone.svg"/>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+234 5678 901"
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleSendSMS}
                  className="w-full py-3 rounded-full cursor-pointer bg-[#6556FE] text-white font-semibold transition-colors text-sm"
                >
                  Send SMS Invite
                </button>
              </div>

              {/* Invite by Email */}
              <div className="mb-4 p-4 border border-[#E5E5E5] rounded-2xl">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Invite by Email
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Send an email invite to friends
                </p>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
                <img className="mr-3" src="/images/email.svg"/>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johnyenglish@gmail.com"
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleSendEmail}
                  className="w-full bg-[#6556FE] cursor-pointer text-white py-3 rounded-full font-semibold transition-colors text-sm"
                >
                  Send Email
                </button>
              </div>

              {/* Invite by Link */}
              <div className="mb-2 p-4 border border-[#E5E5E5] rounded-2xl">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Invite by Link
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Share your invite link
                </p>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
                  <span className="text-sm text-gray-400 mr-1">http://</span>
                  <input 
                    type="text"
                    value="myhoodafrica.com/invite/tunde123"
                    className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none"
                  />
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 bg-[#6556FE] cursor-pointer text-white h-12 mt-1 rounded-full font-semibold transition-colors text-sm"
                  >
                    Copy Link
                  </button>

                <img className="cursor-pointer" src="/images/whatsapp.svg"/>

               <img className="cursor-pointer" src="/images/facebook-icon.svg"/>

               <img className="cursor-pointer" src="/images/x-icon.svg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteModal;