// components/Navbar.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();
  
  // Function to check if the section is active
  const isActive = (sectionId:any) => {
    return activeSection === sectionId;
  };

  // Smooth scroll to section on same page
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  // Handle navigation click - scroll to sections on same page
  const handleNavClick = (e:any, sectionId:any) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'how-it-works', 'features', 'why-choose-us'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [router.asPath]);

  return (
    <nav className="bg-white py-4 px-4 md:px-6 text-[#1C1741A3] lg:px-8 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center">
        {/* Left section with logo */}
       <div className='flex flex-row items-center gap-2 w-full'>
       <Link href="/" className="flex-shrink-0 flex items-center">
         
          <img className='mr-2' src="../images/Logomark.png" alt="MyHoodAfrica Logo"/>
          <span className="text-black font-bold text-[20px]">MyHoodAfrica</span>
        </Link>

        {/* Center section with navigation */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="flex space-x-8 mx-8">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className={`${isActive('home') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition duration-200 cursor-pointer`}
            >
              Home
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className={`${isActive('how-it-works') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition duration-200 cursor-pointer`}
            >
              How it Works
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'features')}
              className={`${isActive('features') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition duration-200 cursor-pointer`}
            >
              Features
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'why-choose-us')}
              className={`${isActive('why-choose-us') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition duration-200 cursor-pointer`}
            >
              Why Choose Us
            </button>
          </div>
        </div>

       </div>
        {/* Right section with auth buttons */}
        <div className="hidden lg:flex items-center justify-end w-1/4">
          <Link href="/login" className={`font-bold hover:text-[#6556FE] transition duration-200 mr-4`}>
            Log in
          </Link>
          <Link 
            href="/SignUp" 
            className="bg-[#6556FE] text-white font-medium py-2 px-4 rounded-md hover:bg-[#5445ED] transition duration-200"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden ml-auto transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`lg:hidden transition-all absolute w-full right-0 left-0 bg-white duration-500 ease-in-out overflow-hidden shadow-lg ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-4 pb-4 text-center px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className={`${isActive('home') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition-all duration-300`}
            >
              Home
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className={`${isActive('how-it-works') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition-all duration-300`}
            >
              How it Works
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'features')}
              className={`${isActive('features') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition-all duration-300`}
            >
              Features
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'why-choose-us')}
              className={`${isActive('why-choose-us') ? 'font-bold text-[#6556FE]' : 'font-medium text-[#1C1741A3]'} hover:text-[#6556FE] transition-all duration-300`}
            >
              Why Choose Us
            </button>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link href="/login" className="font-bold hover:text-[#6556FE] transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                Log in
              </Link>
              <Link 
                href="/SignUp" 
                className="bg-[#6556FE] mx-auto text-white w-fit font-medium py-2 px-4 rounded-md hover:bg-[#5445ED] transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;