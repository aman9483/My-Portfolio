import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;


    const formData = new FormData(e.target);

   
    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        setSuccess(true);
        e.target.reset(); // Reset form
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <motion.div
      className="bg-gray-800 p-8 rounded-md shadow-md mt-20 w-50" 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white" required></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Send</button>
        {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-2">Something went wrong. Please try again later.</p>}
      </form>
    </motion.div>
  );
};

export default Contact;
