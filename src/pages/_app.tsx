import Sidebar from "@/components/home-feed/Sidebar";
import SearchBar from "@/SearchBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Early return for landing and signup pages
  if (router.pathname === "/" || router.pathname === "/SignUp" || router.pathname==="/SignIn") {
    return <Component {...pageProps} />;
  }
  
  return (
    <div className="flex h-screen">
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-[#00000042] bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
     
      {/* Sidebar */}
      <div className={`
        border-r border-[#E5E5E5] w-80 lg:w-[25%] fixed h-full z-50 bg-white
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </div>
     
      {/* Main Content */}
      <div className="w-full lg:w-[75%] relative lg:ml-[25%] flex flex-col">
        <SearchBar 
          isMobileMenuOpen={isMobileMenuOpen}
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <div className="flex-1 overflow-y-auto mt-14">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}