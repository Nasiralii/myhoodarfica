'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  onMenuClick?: () => void;
  isMobileMenuOpen?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '', 
  placeholder = 'Search',
  onSearch,
  onMenuClick,
  isMobileMenuOpen = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Debug log to see if prop is being passed
  console.log('SearchBar isMobileMenuOpen:', isMobileMenuOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  // Handle menu button click
  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen && onMenuClick) {
        onMenuClick(); // Toggle to close
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen, onMenuClick]);

  return (
    <div className={`lg:w-[75%] fixed w-full overflow-hidden z-50 bg-white border-b border-gray-200 ${className}`}>
      <div className="md:px-4 w-full">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Mobile Menu Button with proper icon toggle */}
          <button
            ref={buttonRef}
            onClick={handleMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg mr-3 lg:hidden transition-all duration-300"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isMobileMenuOpen ? (
              // Cross/Close icon when menu is open
              <svg className="w-5 h-5" fill="none" stroke="#0A0A0A" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger/Menu icon when menu is closed
              <svg className="w-5 h-5" fill="none" stroke="#0A0A0A" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className="flex flex-row justify-between w-full">
            {/* Search Input */}
            <div className="relative w-full max-w-[300px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-white border border-[#E5E5E5] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base placeholder-gray-500 transition-all duration-200"
              />
            </div>

            {/* Right side icons */}
            <div className="ml-4 flex items-center space-x-3">
                <img 
                  className="cursor-pointer md:w-12 md:h-12" 
                  src="/images/notification.svg" 
                  alt="Notifications"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;