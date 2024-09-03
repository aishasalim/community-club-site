import React, { useEffect, useState } from 'react';

const Hero = () => {
    const pics = ['/picture.jpg'];
    const [headerText, setHeaderText] = useState('');
    useEffect(() => {
      const text = "Stay in touch, stay qazaq";
      let index = 0;
  
      const typeEffect = () => {
        setHeaderText(text.slice(0, index + 1));
        index++;
        if (index < text.length) {
          setTimeout(typeEffect, 100); // Adjust typing speed here
        }
      };
  
      typeEffect();
    }, []);

  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-center px-5 pb-10 pt-[5em] lg:pt-[10em]">
      {/* Text section */}
      <div className="lg:w-[25em] my-10 mx-4 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          {headerText}
        </h1>
        <p className="text-lg lg:text-xl">
          Welcome to our community. Explore and connect with us!
        </p>
        <button
          className="flex items-center justify-center my-5 hover:bg-gray-300 dark:hover:bg-gray-800 bg-transparent border px-10 py-2 rounded-2xl hover:bg-opacity-20 transition-colors duration-200 whitespace-nowrap">
          Join the club
        </button>
      </div>

      {/* Carousel section */}
      <div className="lg:w-1/2 w-full">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {pics.map((pic, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`}
                data-carousel-item
              >
                <img
                  src={pic}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {pics.map((_, index) => (
              <button
                key={index}
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
