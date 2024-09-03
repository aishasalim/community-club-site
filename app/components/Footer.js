import React from 'react';
import { Instagram } from 'lucide-react';


const Footer = () => {
    return (
      <footer className="pt-14 pb-8 px-5">
        <div className="max-w-5xl mx-auto flex flex-row items-center justify-between w-full">
          {/* Links section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-8">
            <a href="#about" className="text-sm md:text-base lg:text-lg font-medium hover:underline">
              About
            </a>
            <a href="#contact" className="text-sm md:text-base lg:text-lg font-medium hover:underline">
              Contact Us
            </a>
            <a href="#join" className="text-sm md:text-base lg:text-lg font-medium hover:underline">
              Join the Community
            </a>
          </div>
  
          {/* Social media links section */}
          <div className="flex items-center justify-end">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
  
        {/* Copyright or additional footer content */}
        <div className="text-center text-xs md:text-sm lg:text-base text-gray-500 dark:text-gray-400 mt-6">
          © 2024 Qazaq Association. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;