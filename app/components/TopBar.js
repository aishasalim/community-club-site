"use client"

import React, { useState, useEffect } from 'react';
import MenuSvg from './MenuSvg';

const Topbar = ({ handleClick, openNavigation, toggleNavigation }) => {
  const navigation = [
    { id: 1, title: 'Home', url: '#hero', onlyMobile: false },
    { id: 2, title: 'About', url: '#about', onlyMobile: false },
    { id: 3, title: 'Events', url: '#events', onlyMobile: false },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 min-w-[380px]">
    {/* Inner container for centering and padding */}
    <div className="bg-default dark:bg-dark bg-white flex items-center py-2 justify-between px-5 lg:px-7.5 xl:px-10">
      {/* Home button on the left */}
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        className="font-code text-sm md:text-md uppercase px-2 py-4 md:py-8 lg:py-2.5 lg:px-4 lg:mx-1.5 lg:leading-5 xl:px-12 transition-colors hover:underline focus:underline"
      >
        Qazaq Association
      </a>

      {/* Navigation links container */}
      <nav
        className={`${
          openNavigation ? "flex bg-default dark:bg-dark" : "hidden"
        } fixed top-[4em] pt-2 left-0 bg-white right-0 bottom-0 lg:static lg:flex lg:mx-auto`}
      >
        <div className="relative py-4 z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleClick(e, item.url)}
              className={`block relative font-code text-md lg:text-sm uppercase transition-colors ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:py-8 lg:py-2.5 lg:px-4 lg:mx-1.5 lg:leading-5 xl:px-12 ${
                openNavigation ? "hover:underline focus:underline" : ""
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="flex space-x-4">
        {/* Join the club button */}
        <button
          href="#join"
          onClick={(e) => handleClick(e, '#join')}
          className="flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-800 bg-transparent border px-4 py-2 rounded-2xl hover:bg-opacity-20 transition-colors duration-200 whitespace-nowrap"
        >
          Join the club
        </button>
      </div>

      {/* Menu SVG for toggling navigation on smaller screens */}
      <MenuSvg toggleNavigation={toggleNavigation} openNavigation={openNavigation} />
    </div>
  </div>

  );
};

export default Topbar;

