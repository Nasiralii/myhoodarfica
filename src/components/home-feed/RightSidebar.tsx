"use client";

import React from "react";

interface Group {
  id: string;
  name: string;
  members: number;
  description: string;
  memberCount: number;
  avatar: string;
}

interface InboxMessage {
  id: string;
  userName: string;
  avatar: string;
  message: string;
  time: string;
  isOnline?: boolean;
}

const RightSidebar: React.FC = () => {
  const suggestedGroups: Group[] = [
    {
      id: "1",
      name: "Lagos Tech Enthusiasts",
      members: 2,
      description:
        "A place for tech lovers in Lagos to share news, events, and job tips.",
      memberCount: 850,
      avatar: "/images/Avatar.svg",
    },
    {
      id: "2",
      name: "Neighborhood Cleanup Team",
      members: 4,
      description: "Organizing monthly community cleanups & awareness events.",
      memberCount: 120,
      avatar: "/api/placeholder/50/50",
    },
    {
      id: "3",
      name: "Mums of Nairobi",
      members: 3,
      description:
        "A group of mums sharing tips, and support fellow mums in Nairobi.",
      memberCount: 430,
      avatar: "/api/placeholder/50/50",
    },
  ];

  const inboxMessages: InboxMessage[] = [
    {
      id: "1",
      userName: "Phoenix Baker",
      avatar: "/images/Avatar.svg",
      message:
        "Hey Olivia, The product query API you have shared on the for sale blog page is still available",
      time: "5min ago",
      isOnline: true,
    },
    {
      id: "2",
      userName: "Phoenix Baker",
      avatar: "/images/Avatar.svg",
      message: "You Sure Thimg, hi there a book today. They are looking great!",
      time: "20min ago",
      isOnline: true,
    },
    {
      id: "3",
      userName: "Phoenix Baker",
      avatar: "/images/Avatar.svg",
      message:
        "I have just published the site again. Looks like it find it. How about if you give me an e...",
      time: "20min ago",
      isOnline: false,
    },
  ];

  return (
    <aside
      className="xl:w-80 lg:w-56 fixed md:top-20 right-0 h-full overflow-y-auto scrollbar-hide bg-gray-50 lg:p-2"
      style={{ height: "-webkit-fill-available" }}
    >
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center flex-wrap justify-between p-4 border-b border-[#E5E5E5]">
            <h3 className="font-semibold text-gray-900">Suggested Groups</h3>
            <button className=" text-sm border p-1 text-[#0A0A0A] border-[#E5E5E5] px-3 rounded-full font-medium  transition-colors">
              View All
            </button>
          </div>
          <div className="p-2 space-y-4">
            {suggestedGroups.map((group) => (
              <div
                key={group.id}
                className="border p-2 rounded-lg border-[#E5E5E5] space-y-3"
              >
                <div className="flex items-start space-x-3">
                  <img src="/images/Avatar.svg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm truncate">
                        {group.name}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      <span className="text-xs text-gray-500">
                        {group.members} friends
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center pt-2 border-t border-[#E5E5E5] justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white"
                        >
                          <img src="/images/Avatar.svg" />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs relative right-4 p-1 text-white bg-[#0A0A0A] rounded-full font-medium">
                      {group.memberCount}
                    </span>
                  </div>
                  <button className=" border border-[#E5E5E5] text-[#0A0A0A] px-3 py-1.5 rounded-full cursor-pointer text-xs font-medium transition-colors">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-[#E5E5E5]">
            <h3 className="font-semibold text-gray-900">Your Inbox</h3>
            <button className=" text-sm border p-1 px-3 text-[#0A0A0A] border-[#E5E5E5] rounded-full font-medium  transition-colors">
              View All
            </button>
          </div>
          <div className="p-4 space-y-4">
            {inboxMessages.map((message) => (
              <div
                key={message.id}
                className="flex border border-[#E5E5E5] items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors"
              >
                <div className="relative flex-shrink-0">
                  <img src="/images/Avatar.svg" />
                  {message.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {message.userName}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {message.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
