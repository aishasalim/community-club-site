import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';  // Import the Firestore instance from your firebase.js file

const Join = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        // Add the email to the Firestore 'emails' collection
        await addDoc(collection(db, 'emails'), { email });
        // Redirect to the success page
        window.location.href = '/success'; 
      } catch (error) {
        console.error('Error adding email to Firestore: ', error);
      }
    }
  };

  // Use the useInView hook to track the visibility of the component
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation variants for framer-motion
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

  return (
    <section id="join" className="pt-[5em] lg:pt-[10em]">
      <motion.div
        className="w-full bg-gray-100 pb-10 flex justify-center"
        initial="hidden"
        ref={ref}
        animate={inView ? 'visible' : 'hidden'}
        variants={slideUpEffect}
      >
        <div className="w-full max-w-4xl mx-auto py-10">
          <h2 className="text-2xl font-bold text-center mb-6">Join the Community</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-5 sm:mx-auto flex flex-col items-center space-y-4"
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center hover:bg-gray-700 bg-gray-500 text-white px-4 py-2 rounded-2xl transition-colors duration-200 whitespace-nowrap"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Join;
