import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const services = [
  {
    title: "🌟 Full Stack Projects",
    description: "I provide end-to-end solutions for web applications including frontend and backend development. These projects encompass creating dynamic, responsive, and modern web applications using the latest technologies.",
    details: "Technologies used: React, Node.js, Express, MongoDB, PostgreSQL.",
  },
  {
    title: "🔥 Frontend Projects",
    description: "Specializing in creating responsive and dynamic user interfaces using modern frameworks like React. These projects focus on providing an excellent user experience with attention to detail and performance.",
    details: "Technologies used: React, Next.js, Tailwind CSS.",
  },
  {
    title: "🔧 Backend Projects",
    description: "Developing robust and scalable backend services with Node.js, Express, and databases like MongoDB and PostgreSQL. These projects ensure secure, efficient, and reliable data handling and processing.",
    details: "Technologies used: Node.js, Express, MongoDB, PostgreSQL.",
  },
  {
    title: "📱 React Native Mobile Projects",
    description: "Building cross-platform mobile applications with React Native. These projects deliver seamless user experiences across both Android and iOS platforms, utilizing native features and functionalities.",
    details: "Technologies used: React Native, Redux, Firebase.",
  },
  {
    title: "🤖 ML Model Creation",
    description: "Creating and deploying machine learning models for various use cases. These projects involve data preprocessing, model training, evaluation, and deployment, making use of cutting-edge ML techniques.",
    details: "Technologies used: Python, TensorFlow, Keras, scikit-learn.",
  },
];

const ServiceCards = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    
    <div className="service-carousel flex flex-col items-center overflow-hidden">

<h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-200 from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
            My Expertise
          </h2>

          <p className="mt-8 font-normal lg:text-lg text-center md:w-[70%] mx-auto text-base md:text-[1.15rem]">
  I specialize in delivering top-notch solutions across a variety of domains.
</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-md p-6 m-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-2">
            {services[index].title}
          </h3>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{services[index].description}</p>
          <p className="text-gray-500 dark:text-gray-300">{services[index].details}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceCards;
