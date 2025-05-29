"use client";

import React, { useState } from "react";

interface Group {
  id: string;
  name: string;
  location: string;
  description: string;
  memberCount: number;
  memberAvatars: string[];
  groupImage: string;
}

const ExploreGroups: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  // Groups data array
  const [groups] = useState<Group[]>([
    {
      id: "1",
      name: "Lagos Tech Enthusiasts",
      location: "Nairobi",
      description:
        "A place for tech lovers in Lagos to share news, events, and job tips.",
      memberCount: 850,
      memberAvatars: [
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
      ],
      groupImage: "/images/Avatar.svg",
    },
    {
      id: "2",
      name: "Neighborhood Cleanup Team",
      location: "Abuja",
      description: "Organizing monthly community cleanups & awareness events.",
      memberCount: 120,
      memberAvatars: [
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
      ],
      groupImage: "/images/Avatar.svg",
    },
    {
      id: "3",
      name: "Mums of Nairobi",
      location: "Nairobi",
      description:
        "A group of Dads, share tips, and support fellow mums in Nairobi.",
      memberCount: 430,
      memberAvatars: [
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
      ],
      groupImage: "/images/Avatar.svg",
    },
  ]);

  return (
    <div className="bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Explore Groups
          </h1>
          <button className="text-white px-4 py-2 rounded-full cursor-pointer bg-[#6556FE] transition-colors flex items-center space-x-2 w-fit">
            <span className="text-lg">+</span>
            <span className="text-sm font-medium">Create a Group</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-row justify-between flex-wrap items-center border-t border-b border-[#E5E5E5] py-4 mb-6">
          {/* Top Row Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Location Filter */}
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className=" bg-white border border-[#E5E5E5] text-[#0A0A0A] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Location</option>
                <option value="lagos">Lagos</option>
                <option value="nairobi">Nairobi</option>
                <option value="accra">Accra</option>
              </select>
              <img
                src="/images/location.svg"
                alt="Location"
                className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Categories Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=" bg-white border border-[#E5E5E5] text-[#0A0A0A] rounded-full px-6 py-3 pr-8 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Categories</option>
                <option value="tech">Technology</option>
                <option value="community">Community</option>
                <option value="parenting">Parenting</option>
                <option value="sports">Sports</option>
                <option value="business">Business</option>
              </select>
              <img
                src="/images/category.svg"
                alt="Categories"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Joined Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className=" bg-white border border-[#E5E5E5] text-[#0A0A0A] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Joined</option>
                <option value="joined">Already Joined</option>
                <option value="not-joined">Not Joined</option>
              </select>
              <img
                src="/images/status.svg"
                alt="Joined"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>

          {/* Sort By */}
          <div className="flex border bg-white border-[#E5E5E5] rounded-full px-2 py-3 items-center justify-between">
            <div className="flex items-center space-x-2 pointer-events-none">
              <img src="/images/sort-by.svg" alt="Sort" className="w-5 h-5" />
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance bg-transparent text-[#0a0a0a70] border-none text-sm font-medium focus:outline-none cursor-pointer pointer-events-auto"
              >
                <option value="Newest">Newest</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Most Active">Most Active</option>
                <option value="Alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0">
                    <img
                      src={group.groupImage}
                      alt={group.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      {group.name}
                    </h3>
                    <div className="flex items-center space-x-1 mb-3">
                      <img
                        src="/images/map.svg"
                        alt="Location"
                        className="w-3 h-3"
                      />
                      <span className="text-sm text-gray-500">
                        {group.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {group.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-4">
                      {group.memberAvatars.slice(0, 4).map((avatar, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                        >
                          <img
                            src={avatar}
                            alt={`Member ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Member Count */}
                    <div className="bg-gray-900 text-white relative right-7 px-1.5 py-1 rounded-full">
                      <span className="text-xs font-medium">
                        {group.memberCount}
                      </span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <button className="bg-[#6556FE] text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreGroups;
