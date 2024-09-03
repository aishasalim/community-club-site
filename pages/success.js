// pages/success.js
import "../app/globals.css";
import WhatsappIcon from "../public/whatsapp.svg";
import whatsapplink from '../app/constants';

export default function Success() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-black mb-6">
          Thank You for Joining the Qazaq Community Mailing List!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We're excited to have you with us. Stay tuned for updates, events, and more.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          We recommend you to join our WhatsApp chat where all the communications and discussions happen.
        </p>
        
        {/* WhatsApp Join Button */}
        <a
          href={whatsapplink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 mx-5 inline-flex items-center bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300"
        >
          <WhatsappIcon height="24px" width="24px" className="mr-2" /> {/* Add margin to the right */}
          Join WhatsApp Chat
        </a>

                
        {/* Back to Home Button */}
        <a
          href="/"
          className="mt-4 inline-block text-blue-500 font-medium hover:underline transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
