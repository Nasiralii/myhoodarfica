"use client";

import React, { useState } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  image: string;
  attendees: number;
  attendeeAvatars: string[];
}

const ExploreEvents: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [sortBy, setSortBy] = useState("Upcoming");

  // Events data array
  const [events] = useState<Event[]>([
    {
      id: "1",
      title: "Community Cleanup Drive",
      date: "Saturday, May 25",
      time: "2:00 PM",
      location: "Lagos",
      organizer: "Lagos Cleanup Squad",
      image: "/images/image-13.svg",
      attendees: 58,
      attendeeAvatars: [
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
      ],
    },
    {
      id: "2",
      title: "Kids Art Workshop",
      date: "Sunday, May 26",
      time: "2:00 PM",
      location: "Nairobi",
      organizer: "Mums of Nairobi Group",
      image: "/images/image-13.svg",
      attendees: 32,
      attendeeAvatars: [
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
      ],
    },
    {
      id: "3",
      title: "Eid Celebration Potluck",
      date: "Sunday, May 26",
      time: "2:00 PM",
      location: "Local Mosque ...",
      organizer: "ABC Community Center",
      image: "/images/image-13.svg",
      attendees: 58,
      attendeeAvatars: [
        "/images/Avatar.svg",
        "/images/Avatar.svg",
        "/images/Avatar.svg",
      ],
    },
  ]);

  return (
    <div className="bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-4 sm:mb-0">
            Explore Events
          </h1>
          <button className="text-white px-4 py-2 rounded-full cursor-pointer bg-[#6556FE] transition-colors flex items-center space-x-2 w-fit">
            <span className="text-lg">+</span>
            <span className="text-sm font-medium">Create an Event</span>
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
                className=" bg-white border border-[#E5E5E5] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Location</option>
                <option value="lagos">Lagos</option>
                <option value="nairobi">Nairobi</option>
                <option value="abuja">Abuja</option>
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
                className=" bg-white border border-[#E5E5E5] rounded-full px-6 py-3 pr-8 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Categories</option>
                <option value="community">Community</option>
                <option value="educational">Educational</option>
                <option value="social">Social</option>
                <option value="religious">Religious</option>
                <option value="sports">Sports</option>
                <option value="arts">Arts & Culture</option>
              </select>
              <img
                src="/images/category.svg"
                alt="Categories"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Date Filter */}
            <div className="relative">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className=" bg-white border border-[#E5E5E5] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Date</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
              </select>
              <img
                src="/images/date.svg"
                alt="Date"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Time Filter */}
            <div className="relative">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="bg-white border border-[#E5E5E5] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
              <img
                src="/images/time.svg"
                alt="Time"
                className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
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
                className="appearance bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer pointer-events-auto"
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Newest">Newest</option>
                <option value="Nearest">Nearest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Event Image */}
              <div className="relative h-[229px] rounded-2xl w-full p-2 bg-white">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-2xl object-cover"
                />
              </div>

              {/* Event Info */}
              <div className="p-4">
                {/* Date, Time, Location */}
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/date.svg"
                      alt="Date"
                      className="w-3 h-3"
                    />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/time.svg"
                      alt="Time"
                      className="w-3 h-3"
                    />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/map.svg"
                      alt="Location"
                      className="w-3 h-3"
                    />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="font-semibold text-[#0A0A0A] text-lg mb-2">
                  {event.title}
                </h3>

                {/* Organizer */}
                <p className="text-sm text-gray-600 mb-4">
                  By {event.organizer}
                </p>

                {/* Attendees and Going Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Attendee Avatars */}
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-4">
                        {event.attendeeAvatars
                          .slice(0, 4)
                          .map((avatar, index) => (
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
                      <div className="bg-[#0A0A0A] text-white relative right-7 px-2.5 py-1 rounded-full">
                        <span className="text-xs font-medium">
                          {event.attendees}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Members going</span>
                  </div>
                </div>

                {/* Going Button */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreEvents;
