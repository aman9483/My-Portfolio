import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ onClose, children }) => {

    console.log(children);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4">
          {children}
        </div>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
