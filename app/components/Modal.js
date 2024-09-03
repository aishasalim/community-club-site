import React from 'react';

const Modal = ({ show, onClose, title, time, address, description }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
        <p className="text-gray-700 mb-2"><strong>Time:</strong> {time}</p>
        <p className="text-gray-700">
          <strong>Address:</strong>{' '}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {address}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
