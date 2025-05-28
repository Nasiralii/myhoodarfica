import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Discover & Connect With Your{' '}
          <span className="text-gray-800">Community</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join Africa's #1 local network for sharing updates, support each other and grow easily.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#6556FE] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg w-full sm:w-auto">
            Join Your Hood
          </button>
          <button className="border cursor-pointer border-[#D0D5DD] rounded-lg curst px-8 py-3 font-semibold transition-colors duration-200 w-full sm:w-auto">
            Login
          </button>
        </div>
        
        {/* Decorative Elements Placeholder */}
        <div className="mt-16 w-full mx-auto flex relative">
        <img className='mx-auto' src="/images/banner.svg"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;