import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer';

const About = () => {

  // Use the useInView hook to track the visibility of the component
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation variants for framer-motion
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideUpEffect = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: 'easeInOut',
        },
    },
  };
  // Text Variables
  const title = 'About Qazaq Association';
  const description =
    'The Qazaq Association is dedicated to bringing together members of the community to celebrate, support, and promote Kazakh culture, traditions, and values. We aim to foster a sense of belonging and provide a platform for everyone to stay connected and contribute to our vibrant community.';
  const missionTitle = 'Our Mission';
  const missionDescription =
    'Our mission is to connect, empower, and inspire our members through various cultural, social, and educational events. We strive to build a strong network and provide support for our community members.';
  const involvementTitle = 'Get Involved';
  const involvementDescription =
    "Join us in our journey of promoting and celebrating the rich cultural heritage of Kazakhstan. Whether you're looking to volunteer, participate in events, or just connect with like-minded individuals, the Qazaq Association welcomes you!";

  return (
    <motion.section
      id="about"
      className="pt-[5em] lg:pt-[10em]"
      initial="hidden"
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={slideUpEffect}
    >
      <div className="max-w-5xl mx-auto bg-gray-100 rounded-lg px-5 py-10">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-center mb-6">{title}</h2>

        {/* Content */}
        <p className="text-md mx-2 lg:text-lg text-center mb-8">{description}</p>

        {/* Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image or illustration section */}
          <div className="flex items-center justify-center">
            <img
              src="/picture.jpg"
              alt="Community"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* More text or information section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg lg:text-xl font-semibold mb-4">{missionTitle}</h3>
            <p className="text-md mx-2 lg:text-lg mb-4">{missionDescription}</p>
            <h3 className="text-lg lg:text-xl font-semibold mb-4">{involvementTitle}</h3>
            <p className="text-md lg:text-lg mx-2">{involvementDescription}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
