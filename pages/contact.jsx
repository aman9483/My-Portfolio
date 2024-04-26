import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";



const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();
  const controls = useAnimation();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1 }
    });

    const intervalId = setInterval(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      });
      setTimeout(() => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 }
        });
      }, 500);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center mb-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.span
          animate={controls}
          style={{ display: "inline-block", fontSize: "5rem" }}
        >
          {text.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </motion.span>
        😊
      </motion.div>
      {/* FORM CONTAINER */}
      <motion.form
        onSubmit={sendEmail}
        ref={form}
        className="w-full max-w-lg px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-gray-400 block mb-2">Dear Aman Verma,</span>
        <textarea
          rows={6}
          className="bg-gray-800 border-2 border-gray-600 rounded-md w-full py-2 px-4 mb-4 focus:outline-none focus:border-purple-400 text-gray-100"
          name="user_message"
          placeholder="Write your message here..."
        />
        <span className="text-gray-400 block mb-2">My email address is:</span>
        <input
          name="user_email"
          type="email"
          className="bg-gray-800 border-2 border-gray-600 rounded-md w-full py-2 px-4 mb-4 focus:outline-none focus:border-purple-400 text-gray-100"
          placeholder="Your email address"
        />
        <span className="text-gray-400 block mb-2">Regards</span>
        <button className="bg-purple-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
          Send
        </button>
        {success && (
          <span className="text-green-600 font-semibold mt-4 block">
            Your message has been sent successfully!
          </span>
        )}
        {error && (
          <span className="text-red-600 font-semibold mt-4 block">
            Something went wrong!
          </span>
        )}


        
      </motion.form>

 

      
    </motion.div>

    
  );
};

export default ContactPage;
