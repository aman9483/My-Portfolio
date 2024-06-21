/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Home from "../../public/work/room.png";
import Login from "../../public/work/room2.png";
import Shop from "../../public/work/room3.png";
import BookDetail from "../../public/work/room4.png";
import Cart from "../../public/work/room5.png";
import CheckOut from "../../public/work/room6.png";
import Billing from "../../public/work/room7.png";
import Card from "../../public/work/room8.png";
import Payment from "../../public/work/room9.png";
import Success from "../../public/work/room10.png";
import Order from "../../public/work/room11.png";
import OrderDetails from "../../public/work/room12.png";


export default function Goku() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>StayEase ✦ work</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="max-w-screen">
        <div className="mx-auto pt-16 -pb-10 max-w-7xl">
          <div className="mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              StayEase
            </h1>
          </div>
          <div className="mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
             Hotel Room Booking
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300">
              <Link
                href="https://stayease01.netlify.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className="group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/aman9483/StayEase-Full-Stack-Hotel-Room-Booking"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className="mx-auto flex flex-col ">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              StayEase is a feature-rich Hotel Room Booking Application developed using React, Express, MongoDB. The application aims to provide users with a seamless and enjoyable platform for Booking Hotels Rooms online. Users can explore a diverse collection of Hotels, input the date and location Price peoples etc to their Prefrence , and securely complete the pay the money By Cash In hand.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              The application features a responsive and intuitive design, ensuring an engaging user experience. Users can access the live application to browse and Book The Hotels Rooms, and explore the code on GitHub to understand the underlying technologies and implementation details.
            </h4>
          </div>
          <Image
            loading="lazy"
            src={Home}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={ Login}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={Shop}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={Cart}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={CheckOut}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={Card}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={Payment}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={Order}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={OrderDetails}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
        </div>
      </main>
    </div>
  );
}
