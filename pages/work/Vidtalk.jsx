/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import pro1 from "../../public/work/pro1.png"
import pro2 from "../../public/work/pro2.png"
import pro3 from "../../public/work/pro3.png"
import pro4 from "../../public/work/pro4.png"
import pro5 from "../../public/work/pro5.png"
import pro7 from "../../public/work/pro7.png"


export default function Pokedex() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>vidTalk✦ work</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              VidTalk A Video Calling Web Application
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Video Calling
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://pokedex-polly.netlify.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
                onClick={() =>
                  alert("Ash Ketchum asked you to open in desktop browser.. 🚀")
                }
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/aman9483/VidTalk-FULL-STACK-VIDEO-CALLING-WEB-APP"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
             "Welcome to VidTalk, our innovative video calling web application! Experience seamless video calls with friends, family, and colleagues. Connect instantly and communicate effortlessly using the power of Socket.io. VidTalk provides a user-friendly interface for smooth interactions, whether it's one-on-one conversations or group meetings. Stay connected, collaborate effectively, and engage in high-quality video calls with VidTalk."
            </h4>
            
          </div>
          <Image
            loading="lazy"
            src={pro1}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={pro2}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
           <Image
            loading="lazy"
            src={pro3}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
           <Image
            loading="lazy"
            src={pro4}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
           <Image
            loading="lazy"
            src={pro5}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          
           <Image
            loading="lazy"
            src={pro7}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />



        </div>
      </main>
    </div>
  );
}
