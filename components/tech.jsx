/* eslint-disable react-hooks/rules-of-hooks */
import TechCard from "@/components/TechCard";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi";

const Tech = () => {
  const webDevelopment = [
    {
      title: "JavaScript",
      id: 1,
      main: "/icons/javascript-original.svg",
      desc: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "TypeScript",
      id: 2,
      main: "/icons/typescript-plain.svg",
      desc: "SuperScript of Javascript, made by Microsoft with robust type safety.",
      tag: "code",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "React JS",
      id: 3,
      main: "/icons/react-original.svg",
      desc: "A free and open-source front-end JavaScript library for building user interfaces based on components.",
      tag: "develop",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Next JS",
      id: 4,
      main: "/icons/nextjs-original.svg",
      desc: "An open-source web development framework providing React-based web applications.",
      tag: "develop",
      bg: "bg-gray-900",
      text: "text-gray-50",
    },
    {
      title: "NodeJs",
      id: 5,
      main: "/icons/nodejs.png",
      desc: "Node.js is a runtime environment that allows the execution of JavaScript code on the server side.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "ExpressJs",
      id: 6,
      main: "/icons/express.png",
      desc: "It simplifies the process of creating powerful and scalable server-side applications with JavaScript.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "MongoDB",
      id: 7,
      main: "/icons/mongoDB.png",
      desc: "MongoDB is a NoSQL database management system that stores data in flexible, JSON-like documents.",
      tag: "Database",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "Tailwind CSS",
      id: 8,
      main: "/icons/tailwindcss-plain.svg",
      desc: "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      tag: "design",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "Excel",
      id: 24,
      main: "/icons/excel.png",
      desc: "Excel is a spreadsheet program included in the Microsoft Office suite of applications.",
      tag: "tool",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "GitHub",
      id: 10,
      main: "/icons/github-original.svg",
      desc: "A developer's go-to platform for collaborating and showcasing their code.",
      tag: "platform",
      bg: "bg-gray-900",
      text: "text-gray-100",
    },
    {
      title: "Figma",
      id: 9,
      main: "/icons/figma-original.svg",
      desc: "A boon for web app designers, from wireframe to animation, it has it all.",
      tag: "design",
      bg: "bg-orange-500",
      text: "text-orange-100",
    },
    {
      title: "Docker",
      id: 25,
      main: "/icons/docker.png",
      desc: "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.",
      tag: "tool",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Vs Code",
      id: 26,
      main: "/icons/vsc.png",
      desc: "Vs Code is ide to write code and develop web and mobile application.works with every programming languages",
      tag: "IDE",
      bg: "bg-purple-50",
      text: "text-purple-500",
    },
  ];

  const mobileDevelopment = [
    {
      title: "React Native",
      id: 11,
      main: "/icons/reactnative.png",
      desc: "React Native is a framework for building native apps using React.",
      tag: "develop",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Kotlin",
      id: 12,
      main: "/icons/kotlin.png",
      desc: "Kotlin is a statically typed programming language that seamlessly interoperates with Java. It is particularly popular for Android app development.",
      tag: "code",
      bg: "bg-purple-50",
      text: "text-purple-500",
    },
    {
      title: "Jetpack Compose",
      id: 13,
      main: "/icons/jetpack.png",
      desc: "Jetpack Compose is Android’s modern toolkit for building native UI.",
      tag: "develop",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "XML",
      id: 14,
      main: "/icons/xml.png",
      desc: "XML is a markup language for defining data structures, primarily used in Android for defining layouts.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "Room Database",
      id: 15,
      main: "/icons/room.webp",
      desc: "Room is a database library that provides an abstraction layer over SQLite to allow for more robust database access.",
      tag: "Database",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Retrofit",
      id: 16,
      main: "/icons/retrofit.jpg",
      desc: "Retrofit is a type-safe HTTP client for Android and Java.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "Android Studio",
      id: 26,
      main: "/icons/android.png",
      desc: "Android Studio is ide to write code and develop Android application.works with Java and Kotlin programming",
      tag: "IDE",
      bg: "bg-purple-50",
      text: "text-purple-500",
    },
  ];

  const machineLearning = [
    {
      title: "Python",
      id: 17,
      main: "/icons/python.png",
      desc: "Python is a high-level, interpreted programming language known for its readability and versatility in various domains, including web and machine learning.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "NumPy",
      id: 18,
      main: "/icons/numpy.png",
      desc: "NumPy is a fundamental package for scientific computing with Python.",
      tag: "ML",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Pandas",
      id: 19,
      main: "/icons/pandas.png",
      desc: "Pandas is a library providing high-performance, easy-to-use data structures and data analysis tools for Python.",
      tag: "ML",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Matplotlib",
      id: 20,
      main: "/icons/mat.png",
      desc: "Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy.",
      tag: "ML",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "scikit-learn",
      id: 21,
      main: "/icons/sckiy.png",
      desc: "scikit-learn is a free software machine learning library for the Python programming language.",
      tag: "ML",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "SQL",
      id: 22,
      main: "/icons/sql.png",
      desc: "SQL is a standard language for storing, manipulating, and retrieving data in databases.",
      tag: "Database",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Jupyter Notebook",
      id: 23,
      main: "/icons/jupyter.svg",
      desc: "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.",
      tag: "tool",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
  ];

  const [idNumber, setIdNumber] = useState(0);
  const [activeSection, setActiveSection] = useState("web");

  const getData = () => {
    if (activeSection === "web") return webDevelopment;
    if (activeSection === "mobile") return mobileDevelopment;
    if (activeSection === "ml") return machineLearning;
  };

  const data = getData();

  const changeId = (id) => {
    setIdNumber(id);
  };

  const rightArrow = () => {
    setIdNumber((prevId) => (prevId + 1) % data.length);
  };

  const leftArrow = () => {
    setIdNumber((prevId) => (prevId === 0 ? data.length - 1 : prevId - 1));
  };

  useEffect(() => {
    console.clear();
    console.log(
      "%c Tech Stack I loved to work on. 🍾\n",
      "color: #fff; background: #8000ff; padding:5px 0;"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Head>
        <title>Tech Stack - Aman</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Just like any other dev, I spend more time experimenting with tools
            than coding.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            className={`text-sm md:text-base px-4 py-2 rounded-lg ${
              activeSection === "web"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("web")}
          >
            Web Development
          </button>
          <button
            className={`text-sm md:text-base px-4 py-2 rounded-lg ${
              activeSection === "mobile"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("mobile")}
          >
            Mobile Development
          </button>
          <button
            className={`text-sm md:text-base px-4 py-2 rounded-lg ${
              activeSection === "ml"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("ml")}
          >
            Machine Learning
          </button>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-4 md:space-x-8">
          <button
            className="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-2 rounded-full text-xs md:text-sm font-bold ${
                  data[idNumber].bg
                } ${data[idNumber].text}`}
              >
                {data[idNumber].tag}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {data[idNumber].title}
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              {data[idNumber].desc}
            </p>
          </div>
          <button
            className="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {data.map((tech) => (
            <TechCard
              key={tech.id}
              id={tech.id}
              main={tech.main}
              alt={tech.title}
              changeId={changeId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tech;
