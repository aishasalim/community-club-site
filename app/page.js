"use client"

import React, { useState } from 'react';
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Join from "./components/Join";

export default function Home() {
  const [openNavigation, setOpenNavigation] = useState(false);

  // Toggle the navigation menu
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  // Handle link clicks with smooth scrolling and page refresh for Home
  const handleClick = (e, url) => {
      e.preventDefault();
      if (openNavigation) {
        toggleNavigation();
      }
  
      // Check if the URL is external
      if (url.startsWith('http')) {
        window.open(url, '_blank'); // Open the external link in a new tab
      } else if (url === '/') {
        window.history.pushState(null, '', '/');
        window.location.reload(); // Refresh the page
      } else {
        // Select target section and scroll smoothly
        const targetSection = document.querySelector(url);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
  };
  
  return (
    <>
    <TopBar 
      handleClick={handleClick}
      openNavigation={openNavigation} 
      toggleNavigation={toggleNavigation}  />
    <Hero />
    <About />
    <Events />
    <Join />
    <Footer />
    
    </>
  );
}
