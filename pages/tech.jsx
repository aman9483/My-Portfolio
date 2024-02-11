/* eslint-disable react-hooks/rules-of-hooks */
import TechCard from "@/components/TechCard";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const tech = () => {
  const data = [
   
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
      desc: "SuperScript of Javascript, made by microsoft with robust type safety.",
      tag: "code",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "React JS",
      id: 3,
      main: "/icons/react-original.svg",
      desc: "A free and open-source front-end JavaScript library for building user interfaces based on components",
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
      desc: "Node.js is a lightweight, interpreted, or just-in-time compiled runtime environment that allows the execution of JavaScript code on the server side. It features first-class functions, enabling developers to build scalable and efficient network applications.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },

    {
      title: "ExpressJs",
      id: 6,
      main: "/icons/express.png",
      desc: "Express.js is a lightweight and flexible web application framework for Node.js, providing a robust set of features for building web and mobile applications. It simplifies the process of creating powerful and scalable server-side applications with JavaScript.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },

    {
      title: "MongoDB",
      id: 7,
      main: "/icons/mongoDB.png",
      desc: "MongoDB is a NoSQL database management system that stores data in flexible, JSON-like documents. It is designed for ease of development and scalability, offering a versatile solution for handling diverse data types and structures.",
      tag: "Database",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },


    {
      title: "React Native",
      id: 5,
      main: "/icons/reactnative.png",
      desc: "React Native is a free and open-source JavaScript library for developing user interfaces. It enables the creation of mobile applications through the use of reusable components.",
      tag: "develop",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },

    {
      title: "Kotlin",
      id: 6,
      main: "/icons/kotlin.png",
      desc: "Kotlin is a statically typed programming language that seamlessly interoperates with Java. It is particularly popular for Android app development, offering concise syntax and first-class functions. Additionally, Kotlin provides native support for Android development, making it a preferred choice for building robust and efficient mobile applications on the Android platform.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "Tailwind CSS",
      id: 6,
      main: "/icons/tailwindcss-plain.svg",
      desc: "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      tag: "design",
      bg: "bg-green-50",
      text: "text-green-500",
    },
   
    
   
    {
      title: "Figma",
      id: 10,
      main: "/icons/figma-original.svg",
      desc: "A boon for webapp designers, from wireframe to animation, it has it all.",
      tag: "design",
      bg: "bg-orange-500",
      text: "text-orange-100",
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
   
  ];
  const [idNumber, setIdNumber] = useState(0);
  const changeId = (id) => {
    setIdNumber(id);
  };
  const rightArrow = () => {
    if (idNumber + 1 >= data.length) {
      setIdNumber(0);
    } else {
      setIdNumber(idNumber + 1);
    }
  };
  const leftArrow = () => {
    if (idNumber === 0) {
      setIdNumber(data.length - 1);
    } else {
      setIdNumber(idNumber - 1);
    }
  };

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Tech Stack I loved to work on. 🍾\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <Head>
        <title>tech ✦ Aman</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="max-w-screen max-w-5xl mx-auto">
        <div className="pt-24 flex flex-col mx-auto">
          <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-200 from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
            Tech Stack
          </h2>
          <p className="mt-8 font-normal lg:text-lg text-center md:w-[70%] mx-auto text-base md:text-[1.15rem] ">
            Just like any other dev, I also spend more time searching and
            experimenting tools than actually coding some senseful things 😎
          </p>
        </div>
        <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
          <button
            className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
          </button>
          <div className="bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6  rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear ">
            <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl ">
              <div className="flex mx-auto rounded-2xl relative w-full h-full bg-white">
                <Image
                  src={data[idNumber].main}
                  alt="tech"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl "
                />
              </div>
            </div>
            <div className=" basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500 ">
              <div className="flex mb-1 justify-between items-center ">
                <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold font-deca tracking-wide ">
                  {data[idNumber].title}
                </h3>
                <div
                  className={` ${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold`}
                >
                  {data[idNumber].tag}
                </div>
              </div>
              <p className=" text-[0.58rem] sm:text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%] ">
                {data[idNumber].desc}
              </p>
            </div>
          </div>
          <button
            className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
          </button>
        </div>
        <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
          {data.map((obj, i) => {
            return (
              <TechCard
                id={obj.id}
                alt={obj.title}
                main={obj.main}
                key={i}
                changeId={changeId}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default tech;
