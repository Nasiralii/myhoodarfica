"use client";

import RightSidebar from "@/components/home-feed/RightSidebar";
import SocialMedia from "@/components/home-feed/SocialMedia";
import React, { useState } from "react";

export default function HomeFeed() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 relative bg-transparent overflow-hidden">
      {/* 🔘 Toggle Button — Small Screens Only */}
      <button
        onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        className="xl:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isRightSidebarOpen ? (
          // ❌ Close Icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // ☰ Sidebar Icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
        )}
      </button>

      {/* 🔲 Overlay — Small Screens */}
      {isRightSidebarOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-[#00000042] bg-opacity-50 z-40"
          onClick={() => setIsRightSidebarOpen(false)}
        />
      )}

      {/* 📦 Right Sidebar */}
      <div
        className={`
        transition-transform duration-300 ease-in-out
        lg:w-[25%] lg:order-2 lg:relative lg:z-auto
        ${
          isRightSidebarOpen
            ? "fixed right-0 top-0 h-full w-80 z-50 bg-white"
            : "hidden"
        }
        xl:block
      `}
      >
        <div className="lg:sticky lg:top-6 max-h-screen z-50 overflow-y-auto p-4">
          <div className="xl:hidden flex justify-end mb-4">
            <button
              onClick={() => setIsRightSidebarOpen(false)}
              className="p-2  hover:bg-gray-500 rounded-full z-50"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <RightSidebar />
        </div>
      </div>

      {/* 📄 Main Content */}
      <div className="w-full 2xl:w-[80%] xl:w-[68%] lg:order-1 overflow-hidden">
        <div className="min-h-screen mt-2 overflow-x-hidden">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
